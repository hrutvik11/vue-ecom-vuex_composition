<template>
  <DropDownComp v-show="iscartOpen">
    <div class="flex flex-col divide-y-2 h-[80%] overflow-auto">
      <div v-for="product in fetchUserCart()" class="p-8 flex justify-between">
        <span class="w-[40%]">{{ product.name }}</span>
        <div class="flex flex-row justify-center items-center text-center">
          <button
            class="w-[20px] min-w-[20px] bg-primary-color text-white rounded-l-full cursor-pointer p-0"
            @click="changeProductCount('+', product.id)"
            :disabled="product.stock <= 0"
          >
            +
          </button>
          <div class="w-[30px]">{{ product.count }}</div>
          <button
            class="w-[20px] min-w-[20px] bg-primary-color text-white rounded-r-full cursor-pointer p-0"
            @click="changeProductCount('-', product.id)"
            :disabled="product.count <= 0"
          >
            -
          </button>
        </div>
        <div
          class="font-medium text-center flex justify-center items-center text-[18px] flex-col"
        >
          <div :class="getISSaleLive && 'line-through text-red-600'">
            ${{
              calculateProductCost(
                product.count,
                product.price
                // product.saleDiscount
              )
            }}
          </div>
          <div v-if="getISSaleLive">
            ${{
              calculateProductSaleCost(
                product.count,
                product.price,
                product.saleDiscount
              )
            }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="border border-t-gray-400 h-[20%] flex items-center justify-between px-4"
    >
      <div>
        <div class="text-[15px] font-medium">Total : ${{ Total }}</div>
        <div v-if="getISSaleLive">
          <div class="text-[15px] font-medium">
            Discount : ${{ (Total - discountedTotal).toFixed(2) }}
          </div>
          <div class="text-[15px] font-medium">
            Net : ${{ discountedTotal.toFixed(2) }}
          </div>
        </div>
      </div>
      <button>Checkout</button>
    </div>
  </DropDownComp>
</template>
<script>
import { useStore } from "vuex";
import { getUserID } from "../utils/helpers";
import DropDownComp from "./DropDownComp.vue";
import { ref, computed } from "vue";

export default {
  components: { DropDownComp },
  props: ["iscartOpen"],
  setup() {
    const store = useStore();

    const Total = ref(0);
    const discountedTotal = ref(0);

    const changeProductCount = (identifier, pid) => {
      if (identifier === "+") {
        store.dispatch("increaseCartCount", { pid, uid: getUserID() });
      } else {
        store.dispatch("decreaseCartCount", { pid, uid: getUserID() });
      }
    };

    const calculateProductCost = (count, price) => {
      return parseFloat(price) * parseInt(count);
    };
    const calculateProductSaleCost = (count, price, discount) => {
      let costprice = parseFloat(price) * parseInt(count);
      let data = costprice - (parseInt(discount) * costprice) / 100;
      return parseFloat(data.toFixed(2));
    };

    const fetchUserCart = () => {
      const usertcart = store.getters.getUserCart(getUserID());

      if (usertcart) {
        const subCategories = store?.getters?.getSubCategories;
        let total = 0;
        let discountTotal = 0;

        const data = [...subCategories]
          .map((ele) => ele.products)
          .flat()
          .filter((el) => usertcart[el.id] !== undefined)
          .map((ele) => {
            total += calculateProductCost(usertcart[ele.id], ele.price);
            discountTotal += calculateProductSaleCost(
              usertcart[ele.id],
              ele.price,
              ele.saleDiscount
            );

            return { ...ele, count: usertcart[ele.id] };
          });

        Total.value = total;
        discountedTotal.value = discountTotal;
        return data;
      } else {
        Total.value = 0;
        return [];
      }
    };

    const getISSaleLive = computed(() => {
      return store.getters.getIsSaleLive;
    });

    return {
      Total,
      discountedTotal,
      changeProductCount,
      calculateProductCost,
      calculateProductSaleCost,
      fetchUserCart,
      getISSaleLive,
    };
  },
};
</script>
<style></style>
