import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import One from '../pages/One.vue'


const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/one',
      component: One
    }
  ]
})
export default router
