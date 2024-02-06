<template>
  <div class="base-layout">
    <div class="base-layout__header header">
      <button class="header__menu-btn" @click="toggleDrawer"><img src="../assets/icons/menu.png" width="24"
          height="24"></button>
    </div>
    <SideBar class="base-layout__sidebar" />
    <main class="base-layout__content">
      <slot></slot>
    </main>
  </div>
</template>
<script setup lang="ts">
import { useDrawerStore } from "@/stores/counter";
import SideBar from "../components/SideBar.vue";
const { toggleDrawer } = useDrawerStore()
</script>

<style lang="scss" scoped>
// TO - DO: start from mobile && go to Desctop
.base-layout {
  max-width: 1024px;
  min-width: 350px;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 48px 1fr;
  grid-template-areas:
    "header"
    "content";

  &__header {
    grid-area: header;
  }

  &__sidebar {
    grid-area: sidebar;
  }

  &__content {
    grid-area: content;
  }

}

.header {
  border: 1px solid black;

  &__menu-btn {
    margin: 5px;
  }
}

@media only screen and (min-width: 768px) {
  .base-layout {
    grid-template-columns: 150px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "sidebar content ";

  }

  .header {
    display: none;
  }
}
</style>