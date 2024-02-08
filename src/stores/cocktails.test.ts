import { describe, beforeEach, it, expect, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCocktailsStore } from './cocktails'

describe('Coctails Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('cocktail added', async () => {

    const cocktails = useCocktailsStore()
    expect(cocktails.cocktails.length).toBe(0)

    await cocktails.getCocktail('mojito')
    expect(cocktails.cocktails.length).toBe(1)
  })
  it('cocktail saves to store', async () => {
    const cocktails = useCocktailsStore()


    await cocktails.getCocktail('mojito')
    expect(cocktails.cocktails.length).toBe(1)

    await cocktails.getCocktail('mojito')
    expect(cocktails.cocktails.length).toBe(1)

    await cocktails.getCocktail('a1')
    expect(cocktails.cocktails.length).toBe(2)

  })

})