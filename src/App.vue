<template>
  <LayoutComp />
</template>
<script setup>
import { onMounted } from "vue";
import LayoutComp from "./components/layout/LayoutComp.vue";
import { isUserLoggedIn, getUserID } from "./utils/helpers";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  if (isUserLoggedIn()) {
    const uid = getUserID();
    store.dispatch("fetchUserDetails", uid);
  }
});
</script>
