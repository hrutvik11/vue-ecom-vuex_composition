<template>
  <div class="h-full w-full">
    <HeaderComp v-if="IdlayoutVisible" />
    <RouterView />
    <FooterComp v-if="IdlayoutVisible" />
  </div>
</template>
<script>
import { RouterView, useRoute } from "vue-router";
import HeaderComp from "./HeaderComp.vue";
import FooterComp from "./FooterComp.vue";
import { computed } from "vue";

export default {
  components: { HeaderComp, FooterComp },
  setup() {
    const route = useRoute();

    const IdlayoutVisible = computed(() => {
      if (route?.meta?.hidelayout === true) {
        return false;
      } else {
        return true;
      }
    });

    return { IdlayoutVisible };
  },
};
</script>
<style></style>
