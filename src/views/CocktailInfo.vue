<template>
  <div class="cocktail-container">
    <div class="cocktail-container__header">

    </div>

    <div class="cocktail-container__description">

    </div>

    <div class="cocktail-container__compound">

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Cocktail } from '../models/Cocktail';
import api from '../services/api'
import { useRoute } from 'vue-router';
const cocktail = ref<Cocktail>(null)
onMounted(() => {
  fetchCocktail()
})

const route = useRoute()
async function fetchCocktail() {
  try {
    const name = route.params.cocktailName as string
    cocktail.value = await api.fetchCocktail(name)
  } catch (e) {
    console.log(e);

  }
}
</script>
