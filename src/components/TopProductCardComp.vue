<template>
  <div v-if="getTopProducts().length === 0">No Products Available</div>
  <CardComp
    v-else
    v-for="product in getTopProducts()"
    :key="product.id"
    @click="onProductClick(product.id)"
  >
    <div
      class="bg-red-500 w-full h-8 text-white text-center flex items-center justify-center"
      v-if="getISSaleLive"
    >
      SALE IS LIVE - {{ product.saleDiscount }}% off
    </div>
    <div class="h-[200px] px-4 py-2">
      <img :src="product.img" class="h-full w-full object-contain" />
    </div>
    <div class="mt-3 text-left px-2">
      <div class="text-[#05A64A]">{{ product.name }}</div>
      <div class="text-[#959595] text-[12px] mt-1">{{ product.desc }}</div>
      <div class="flex gap-4 my-3">
        <div
          class="text-[18px] font-semibold"
          :class="getISSaleLive && 'line-through text-red-600'"
        >
          ${{ product.price }}
        </div>
        <div class="text-[18px] font-semibold" v-if="getISSaleLive">
          ${{ calculateProductSaleCost(product.price, product.saleDiscount) }}
        </div>
      </div>
    </div>
  </CardComp>
</template>
<script>
import { useStore } from "vuex";
import CardComp from "../components/CardComp.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { CardComp },
  setup() {
    const store = useStore();
    const router = useRouter();

    const getISSaleLive = computed(() => {
      return store.getters.getIsSaleLive;
    });

    const calculateProductSaleCost = (price, discount) => {
      let costprice = parseFloat(price);
      let data = costprice - (parseInt(discount) * costprice) / 100;
      return data.toFixed(2);
    };

    const onProductClick = (pid) => {
      router.push(`/productdetail/${pid}`);
    };

    const getTopProducts = () => {
      const top = store.getters.getTopProductsCount();

      if (Object.keys(top).length > 0) {
        const subCategories = store?.getters?.getSubCategories;

        const data = [...subCategories]
          .map((ele) => ele.products)
          .flat()
          .filter((el) => top[el.id] !== undefined)
          .map((ele) => {
            return { ...ele, topCount: top[ele.id] };
          })
          .sort((a, b) => b.topCount - a.topCount);
        return data;
      } else {
        return [];
      }
    };

    return {
      getISSaleLive,
      calculateProductSaleCost,
      onProductClick,
      getTopProducts,
    };
  },
};
</script>
<style></style>
