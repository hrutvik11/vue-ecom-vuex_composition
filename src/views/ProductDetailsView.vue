<template>
  <div class="h-full flex" v-if="productData">
    <div class="w-1/3 flex flex-col justify-around px-2">
      <div class="h-[50%] px-4 py-2">
        <img :src="productData.img" class="h-full w-full object-contain" />
      </div>
      <div>
        <div class="text-[22px]">{{ productData.name }}</div>
        <div class="text-[#959595] text-[18px] mt-1">
          {{ productData.desc }}
        </div>
        <div class="text-[22px] font-semibold mt-2">
          ${{ productData.price }}
        </div>
      </div>

      <button class="w-full rounded-none px-4">Order now</button>
    </div>
    <div class="w-2/3 p-4" v-if="productData.specification">
      <p class="text-[22px] text-[#05A64A] mb-2">Specifications</p>
      <div
        v-for="(key, val, n) of productData.specification"
        :key="n"
        class="flex flex-row gap-2 mb-2"
      >
        <span class="w-[30%] bg-[#E6E6E6] p-1">{{ key }}</span>
        <span class="bg-[#E6E6E6] w-[70%] p-1">{{ val }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { productData: null };
  },
  computed: {
    fetchProductData() {
      const subCategories = this.$store?.getters?.getSubCategories;

      const data = [...subCategories]
        .map((ele) => ele.products)
        .flat()
        .find(
          (el) =>
            el.id.toString().trim() === this.$route.params.pid.toString().trim()
        );

      if (data) {
        this.productData = data;
        let finalcount = this.$store.getters.getTopProductsCount(data.id);
        this.$store.dispatch("addTopProducts", {
          pid: data.id,
          count: finalcount ? finalcount + 1 : 1,
        });
      }
    },
  },
  created() {
    this.fetchProductData;
  },
};
</script>
<style></style>
