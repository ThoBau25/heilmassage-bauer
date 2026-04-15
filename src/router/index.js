import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../layout/DefaultLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView
        },
        {
          path: 'kontakt',
          name: 'Kontakt',
          component: () => import('../views/ContactView.vue')
        },
        {
          path: 'preise',
          name: 'Preise',
          component: () => import('../views/PricesView.vue')
        },
        {
          path: 'ueber_mich',
          name: 'Über mich',
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ],
})

export default router
