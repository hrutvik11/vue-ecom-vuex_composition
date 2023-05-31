<template>
  <div class="relative inline-block text-left text-black">
    <div
      class="absolute right-0 z-10 mt-8 w-[400px] h-[400px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
