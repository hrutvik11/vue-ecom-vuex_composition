<template>
  <div class="min-h-[700px] p-4">
    <div v-if="getCategoryID() === 'all'" class="pl-10 pt-4">
      <p
        class="text-[#05A64A] mb-1 cursor-pointer"
        v-for="cat in fetchSubCategories"
        :key="cat.id"
        @click="onSubCategoryClick(cat.id)"
      >
        {{ cat.name }}
      </p>
    </div>
    <div v-else class="flex flex-wrap gap-4">
      <CardComp
        class="h-[260px] border border-[#E6E6E6] w-[260px] cursor-pointer"
        v-for="category in fetchSubCategories"
        :key="category.id"
        @click="onSubCategoryClick(category.id)"
      >
        <div class="h-[80%] px-4 py-2">
          <img :src="category.img" class="h-full w-full object-contain" />
        </div>
        <div class="mt-3 text-[#05A64A] text-center">{{ category.name }}</div>
      </CardComp>
    </div>
  </div>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import CardComp from "../components/CardComp.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    CardComp,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const getCategoryID = () => {
      return route.params.id;
    };

    const fetchSubCategories = computed(() => {
      if (getCategoryID() === "all") {
        return store?.getters?.getSubCategories;
      } else {
        return store.getters.getSubCategory(getCategoryID());
      }
    });

    const onSubCategoryClick = (catID) => {
      router.push(`/products/${catID}`);
    };

    return { getCategoryID, fetchSubCategories, onSubCategoryClick };
  },
};
</script>
<style></style>
