import { createRouter, createWebHistory } from 'vue-router'
import CocktailInfo from '../views/CocktailInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/margarita',
      children: [
        {
          path: '/:cocktailName',
          name: 'cocktail-info',
          component: CocktailInfo
        }
      ]
    }
    // {
    //   path: '*',
    //   name: 'error',
    //   component: () => import('../views/Error.vue')
    // }
  ]
})

export default router
