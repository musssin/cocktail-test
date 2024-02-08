import { createRouter, createWebHistory } from 'vue-router'
import Cocktail from '../views/Cocktail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/cocktail/margarita',
      children: [
        {
          path: '/cocktail/:cocktailName',
          name: 'cocktail-info',
          component: Cocktail
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error.vue')
    }
  ]
})

export default router
