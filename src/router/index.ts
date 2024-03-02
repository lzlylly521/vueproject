import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/domestic',
      name: 'domestic',
      component: () => import('../views/domestic.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('../views/sign.vue')
    },
    {
      path: '/worker',
      name: 'worker',
      component: () => import('../views/worker.vue')
    },
    {
      path: '/manager',
      name: 'manager',
      component: () => import('../views/manager.vue')
    }
  ]
})

export default router
