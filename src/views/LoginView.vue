<template>
  <div class="h-full bg-gray-100 flex justify-center items-center">
    <div
      class="container w-1/3 h-fit px-6 py-20 md:px-12 md:py-18 bg-white rounded-3xl shadow-2xl"
    >
      <p class="text-[26px] uppercase text-center">Sign in</p>
      <div class="mt-10">
        <div class="w-full mb-6">
          <div class="text-[16px] mb-1 ml-2">Email</div>
          <input
            type="text"
            placeholder="Enter your email"
            v-model="userdata.email"
          />
        </div>
        <div class="w-full mb-6">
          <div class="text-[16px] mb-1 ml-2">Password</div>
          <input
            type="text"
            placeholder="Enter your password"
            v-model="userdata.password"
          />
        </div>
      </div>
      <button class="w-full py-3 mt-10" @click="onLogin()">Sign in</button>
    </div>
  </div>
</template>
<script>
import { isUserLoggedIn, setUserLoggedIn } from "../utils/helpers";
import { db } from "../firebase";
import { ref, query, orderByChild, equalTo, onValue } from "@firebase/database";
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const userdata = reactive({
      email: "",
      password: "",
    });

    const setUserCart = (userid) => {
      const data = store.getters.getUserCart("demouser");

      if (data) {
        store.commit("SET_USER_CART", {
          user_cart: { ...data },
          uid: userid,
        });
      }
    };

    const onLogin = async () => {
      if (userdata.email !== "" && userdata.password !== "") {
        const usersref = query(
          ref(db, "chatApp/users"),
          orderByChild(`email`),
          equalTo(userdata.email)
        );

        onValue(
          usersref,
          async (snapshot) => {
            if (snapshot.exists()) {
              const data = await snapshot.val();
              const keyArr = Object.keys(data).map((el) => ({
                ...data[el],
                id: el,
              }));

              if (keyArr[0].password === userdata.password) {
                setUserLoggedIn(true, keyArr[0].id);
                store.dispatch("fetchUserDetails", keyArr[0].id);
                setUserCart(keyArr[0].id);
                router.push("/");
              } else {
                alert("wrong creds");
              }
            } else {
              alert("wrong creds");
            }
          },
          { onlyOnce: true }
        );
      }
    };

    return { onLogin, userdata };
  },

  beforeRouteEnter(to, from, next) {
    if (isUserLoggedIn()) {
      next({ name: "home" });
    } else {
      next();
    }
  },
};
</script>
<style></style>
