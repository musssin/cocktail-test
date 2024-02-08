<template>
  <CocktailInfo v-if="cocktail" :cocktail="cocktail" />
  <div v-else><span>Loading...</span></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Cocktail } from '../models/Cocktail'
import { useRoute, useRouter } from 'vue-router'
import { useCocktailsStore } from '@/stores/cocktails'
import CocktailInfo from '@/components/CocktailInfo.vue'

const route = useRoute()
const router = useRouter()
const { getCocktail } = useCocktailsStore()

onMounted(() => {
  fetchCocktail()
})

const cocktail = ref<Cocktail | null>(null)

async function fetchCocktail() {
  cocktail.value = await getCocktail(route.params.cocktailName as string)
  if (cocktail.value === null) {
    router.push({ name: 'error' })
  }
}
</script>

<style lang="scss" scoped>
.cocktail-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'image'
    'header'
    'info'
    'ingredients';

  &__header {
    grid-area: header;
    margin-top: 16px;
    font-weight: bolder;
  }

  &__info {
    grid-area: info;
    margin-top: 16px;
  }

  &__image {
    grid-area: image;
  }

  &__ingredients {
    margin-top: 12px;
  }

  &__ingredient {
    margin-top: 4px;
  }
}

.cokctail-image {
  max-width: 100%;
  object-fit: cover;
}

@media only screen and (min-width: 768px) {
  .cocktail-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 64px auto;
    grid-template-areas:
      'header image'
      'info image';
  }
}
</style>
