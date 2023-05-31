<template>
  <div class="p-4 flex flex-col gap-2">
    <div class="flex gap-6 justify-center">
      <div class="flex flex-col gap-2">
        <RouterLink
          class="p-6 bg-[#E6E6E6] rounded-md cursor-pointer hover:text-[#05A64A] text-[17px] text-gray-600"
          v-for="category in fetchCategories"
          :key="category.id"
          :to="`/category/${category.id}`"
        >
          {{ category.title }}
        </RouterLink>
      </div>

      <img
        src="https://eptummers.nl/media/tailoredslider_media/1/Homebanner_1.png"
      />
    </div>
    <div class="h-[50vh] overflow-y-auto w-full px-4">
      <p class="text-left text-[32px] font-semibold mt-5">
        Toppers of the week
      </p>

      <div class="flex overflow-y-auto w-full gap-4 flex-row mt-5">
        <TopProductCardComp />
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import TopProductCardComp from "../components/TopProductCardComp.vue";

export default {
  data() {
    return {};
  },
  computed: {
    fetchCategories() {
      return this.$store?.getters?.getCategories;
    },
  },
  components: { TopProductCardComp },
};
</script>
<style></style>
