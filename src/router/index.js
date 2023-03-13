import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Product from '../views/Product/index.vue'
import Case from '../views/Case/index.vue'
import CaseDetail from '../views/Case/Detail/index.vue'
import Brief from '../views/Brief/index.vue'
import Qualification from '../views/Qualification/index.vue'
import Contact from '../views/Contact/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/case',
      name: 'case',
      component: Case
    },
    {
      path: '/caseDetail',
      name: 'caseDetail',
      component: CaseDetail
    },
    {
      path: '/brief',
      name: 'brief',
      component: Brief
    },
    {
      path: '/qualification',
      name: 'qualification',
      component: Qualification
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
