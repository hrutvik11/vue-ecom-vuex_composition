<template>
  <div class="h-full w-full">
    <HeaderComp v-if="IdlayoutVisible" />
    <RouterView />
    <FooterComp v-if="IdlayoutVisible" />
  </div>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import HeaderComp from "./HeaderComp.vue";
import FooterComp from "./FooterComp.vue";

export default {
  components: { HeaderComp, FooterComp },
  computed: {
    IdlayoutVisible() {
      if (this.$route?.meta?.hidelayout === true) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
<style></style>
