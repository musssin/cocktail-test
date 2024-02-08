import { test, expectTypeOf } from 'vitest'
import { parseCocktail, type Cocktail } from './Cocktail'

const obj: any = {
  strDrink: 'nane',
  strCategory: 'categ',
  image: 'img',
  strIngredient1: 'a',
  strIngredient2: 3
}

test('parseCocktail(obj:any) returns <Cocktail>', () => {
  expectTypeOf(parseCocktail(obj)).toMatchTypeOf<Cocktail>()
})
