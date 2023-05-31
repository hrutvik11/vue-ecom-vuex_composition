<script setup>
import LayoutComp from "./components/layout/LayoutComp.vue";
import { isUserLoggedIn, getUserID } from "./utils/helpers";
</script>

<template>
  <LayoutComp />
</template>
<script>
export default {
  mounted() {
    if (isUserLoggedIn()) {
      const uid = getUserID();
      this.$store.dispatch("fetchUserDetails", uid);
    }
  },
};
</script>
