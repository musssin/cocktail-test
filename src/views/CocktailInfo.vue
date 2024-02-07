<template>
  <div class="cocktail-container">
    <div class="cocktail-container__header">
      <h6>{{ cocktail?.name }}</h6>
    </div>


    <div class="cocktail-container__info">

      <div class="cocktail-container__description">
        <div>{{ cocktail?.description }}</div>
      </div>

      <div class="cocktail-container__ingredients">
        Ingredients:
        <div v-for="(ingredient, index) of cocktail?.ingredients" :key="ingredient"
          class="cocktail-container__ingredient">
          {{ index +
            1
          }}. {{ ingredient }}</div>
      </div>
    </div>


    <div class="cocktail-container__image">
      <img loading="lazy" :src="cocktail?.image" class="cokctail-image" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Cocktail } from '../models/Cocktail';
import { useRoute, useRouter } from 'vue-router';
import { useCocktailsStore } from '@/stores/cocktails';



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
    "image"
    "header"
    "info"
    "ingredients"
  ;

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
      "header image"
      "info image"
    ;
  }
}
</style>
