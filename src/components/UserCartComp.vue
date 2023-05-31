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
import { getUserID } from "../utils/helpers";
import DropDownComp from "./DropDownComp.vue";

export default {
  data() {
    return { Total: 0, discountedTotal: 0 };
  },
  components: { DropDownComp },
  props: ["iscartOpen"],
  methods: {
    changeProductCount(identifier, pid) {
      if (identifier === "+") {
        this.$store.dispatch("increaseCartCount", { pid, uid: getUserID() });
      } else {
        this.$store.dispatch("decreaseCartCount", { pid, uid: getUserID() });
      }
    },
    calculateProductCost(count, price) {
      return parseFloat(price) * parseInt(count);
    },
    calculateProductSaleCost(count, price, discount) {
      let costprice = parseFloat(price) * parseInt(count);
      let data = costprice - (parseInt(discount) * costprice) / 100;
      return parseFloat(data.toFixed(2));
    },
    fetchUserCart() {
      const usertcart = this.$store.getters.getUserCart(getUserID());

      if (usertcart) {
        const subCategories = this.$store?.getters?.getSubCategories;
        let total = 0;
        let discountTotal = 0;

        const data = [...subCategories]
          .map((ele) => ele.products)
          .flat()
          .filter((el) => usertcart[el.id] !== undefined)
          .map((ele) => {
            total += this.calculateProductCost(usertcart[ele.id], ele.price);
            discountTotal += this.calculateProductSaleCost(
              usertcart[ele.id],
              ele.price,
              ele.saleDiscount
            );

            return { ...ele, count: usertcart[ele.id] };
          });

        this.Total = total;
        this.discountedTotal = discountTotal;
        return data;
      } else {
        this.Total = 0;
        return [];
      }
    },
  },
  computed: {
    getISSaleLive() {
      return this.$store.getters.getIsSaleLive;
    },
  },
};
</script>
<style></style>
