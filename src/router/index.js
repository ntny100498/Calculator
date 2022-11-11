import { createRouter, createWebHistory } from 'vue-router'

import CompProduct from '@/components/CompProduct'
import CompSlot from '@/components/CompSlot'
import CompCalculator from '@/components/CompCalculator'

const routes = [
  { path: '/', component: CompCalculator},
  { path: '/product', component: CompProduct},
  { path: '/slot', component: CompSlot}
]

const router = createRouter({
  history: createWebHistory('/calculator/'),
  routes
})

export default router