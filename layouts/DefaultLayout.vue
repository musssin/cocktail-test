<template>
  <div class="base-layout">
    <SideBar />aa
    <slot name="default"></slot>
  </div>
</template>
<script setup lang="ts">
import SideBar from "../src/components/SideBar.vue";

</script>

<style lang="scss">
// TO - DO: start from mobile && go to Desctop
.layout {
  width: 100%;
  display: grid;
  background-color: red;
}
</style>