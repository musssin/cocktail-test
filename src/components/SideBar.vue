<template>
  <div class="sidebar">

    <nav>
      <RouterLink v-for="item of menu" :key="item" :to="{ name: 'cocktail-info', params: { cocktailName: item } }">{{ item
      }}
      </RouterLink>
    </nav>

  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
const menu = [
  'margarita',
  'mojito',
  'a1',
  'kir'
]
</script>



<style scoped></style>
