import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'PageCalculator',
    component: () => import('../pages/PageCalculator'),
    meta: {
      layout: 'User'
    }
  },
  {
    path: '/product',
    name: 'PageProduct',
    component: () => import('../pages/PageProduct'),
    meta: {
      layout: 'Blank'
    }
  },
  {
    path: '/slot',
    name: 'PageSlot',
    component: () => import('../pages/PageSlot'),
    meta: {
      layout: 'User'
    }
  }
]

const router = createRouter({
  history: createWebHistory('/calculator/'),
  routes
})

export default router