import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Cocktail } from '@/models/Cocktail'
import api from '@/services/api'


export const useCocktailsStore = defineStore('coctails', () => {
  
  const cocktails = ref<Cocktail[]>([])


  async function getCocktail(name: string): Promise<Cocktail| null> {

    let cocktail: Cocktail | null = cocktails.value.find(c => c.name.toLowerCase() === name) ?? null

    if (!cocktail) {

      try {
        cocktail = await api.fetchCocktail(name)
        if (cocktail) {
          cocktails.value.push(cocktail)
        }
      } catch (error) {
        console.log(error);
      }

    }

    return cocktail
  }

  return {
    cocktails,
    getCocktail
  }
})
