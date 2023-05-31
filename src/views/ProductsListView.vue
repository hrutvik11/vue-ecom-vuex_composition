<template>
  <div class="min-h-[700px] p-4 flex gap-4">
    <CardComp
      class="h-fit border border-[#E6E6E6] w-[260px] cursor-pointer"
      v-for="products in fetchProducts"
      :key="products.id"
      @click="onProductClick(products.id)"
    >
      <div
        class="bg-red-500 w-full h-8 text-white text-center flex items-center justify-center"
        v-if="getISSaleLive"
      >
        SALE IS LIVE - {{ products.saleDiscount }}% off
      </div>
      <div class="h-[200px] px-4 py-2">
        <img :src="products.img" class="h-full w-full object-contain" />
      </div>
      <div class="mt-3 text-left px-2">
        <div class="text-[#05A64A]">{{ products.name }}</div>
        <div class="text-[#959595] text-[12px] mt-1">{{ products.desc }}</div>

        <div class="flex justify-between my-2">
          <div>
            <div class="mt-1 text-red-500">in stock : {{ products.stock }}</div>
            <div class="mt-1 text-red-500">
              in cart : {{ fetchProductCountInCart(products.id) }}
            </div>
          </div>
          <div>
            <div>
              <div
                class="text-[18px] font-semibold"
                :class="getISSaleLive && 'line-through text-red-600'"
              >
                ${{ products.price }}
              </div>
              <div class="text-[18px] font-semibold" v-if="getISSaleLive">
                ${{
                  calculateProductSaleCost(
                    products.price,
                    products.saleDiscount
                  )
                }}
              </div>
            </div>
          </div>
        </div>

        <button
          @click.stop="AddtoCart(products.id)"
          :disabled="products.stock <= 0"
          class="w-full mb-2"
        >
          Add to cart
        </button>
      </div>
    </CardComp>
  </div>
</template>
<script>
import CardComp from "../components/CardComp.vue";
import { getUserID } from "../utils/helpers";

import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    CardComp,
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const onProductClick = (pid) => {
      router.push(`/productdetail/${pid}`);
    };

    const AddtoCart = (pid) => {
      store.dispatch("addToUserCart", { pid, uid: getUserID() });
    };

    const fetchProductCountInCart = (pid) => {
      return store?.getters?.getCartProductCount(getUserID(), pid);
    };

    const calculateProductSaleCost = (price, discount) => {
      let costprice = parseFloat(price);
      let data = costprice - (parseInt(discount) * costprice) / 100;
      return parseFloat(data.toFixed(2));
    };

    const fetchProducts = computed(() => {
      const subCategories = store?.getters?.getSubCategories;

      const productsData = [...subCategories].find(
        (el) => el.id.toString().trim() === route.params.pid.toString().trim()
      );

      if (productsData.products && productsData.products.length > 0) {
        return productsData.products;
      }
    });

    const getISSaleLive = computed(() => {
      return store.getters.getIsSaleLive;
    });

    return {
      fetchProducts,
      getISSaleLive,
      onProductClick,
      AddtoCart,
      fetchProductCountInCart,
      calculateProductSaleCost,
    };
  },
};
</script>
