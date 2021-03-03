import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import One from '../pages/One.vue'
import Two from '../pages/Two.vue'
import Three from '../pages/Three.vue'


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
    },
    {
      path: '/two',
      component: Two
    },
    {
      path: '/three',
      component: Three
    }
  ]
})
export default router
