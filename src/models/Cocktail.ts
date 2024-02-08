type Cocktail = {
  name: string
  description: string
  ingredients: string[]
  image: string
}
function parseCocktail(obj: any): Cocktail {
  const cocktail: Cocktail = {
    name: obj.strDrink ?? '',
    description: obj.strCategory ?? '',
    image: obj.strDrinkThumb ?? '',
    ingredients: []
  }
  for (let i = 1; i < 16; i++) {
    const key = 'strIngredient' + i
    if (obj[key]) {
      cocktail.ingredients.push(obj[key])
    }
  }
  return cocktail
}
export type { Cocktail }
export { parseCocktail }
