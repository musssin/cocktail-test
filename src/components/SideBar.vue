<template>
  <div
    class="sidebar"
    :class="[drawerStore.isOpen ? 'sidebar_opened' : '']"
  >
    <nav class="sidebar__navigation">
      <RouterLink
        v-for="item of menu"
        :key="item"
        class="sidebar__navigation-item"
        :active-class="'sidebar__navigation-item_active'"
        :to="{
          name: 'cocktail-info',
          params: { cocktailName: item }
        }"
        >{{ item }}
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useDrawerStore } from '@/stores/drawer'
import { RouterLink } from 'vue-router'
const menu = ['margarita', 'mojito', 'a1', 'kir']

const drawerStore = useDrawerStore()
</script>

<style scoped lang="scss">
.sidebar {
  padding: 1rem;
  width: 100px;
  height: 100%;
  position: fixed;
  left: 0;
  display: none;
  margin-top: 48px;
  z-index: 1;
  overflow-x: hidden;
  border: 1px solid black;
  background-color: white;

  &__navigation {
    padding: 0 1rem;
    display: grid;
    grid-template-rows: repeat('auto-fill', 48px);
    row-gap: 10px;
  }

  &__navigation-item {
    text-decoration: none;
    color: gray;

    &_active {
      color: black;
      font-weight: bolder;
    }
  }

  &_opened {
    display: block;
  }
}

@media only screen and (min-width: 768px) {
  .sidebar {
    width: auto;
    display: block;
    position: relative;
    margin-top: 0px;
  }
}
</style>
