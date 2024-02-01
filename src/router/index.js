import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children :[
        {
          path: '/articles',
          name: 'ArticleIndex',
          component : () => import('../views/articles/ArticleIndex.vue')
        },
        {
          path: '/articles/create',
          name: 'ArticleCreate',
          component: () => import('../views/articles/ArticleCreate.vue')
        },
        {
          path: '/articles/:id/edit',
          name: 'ArticleEdit',
          component: () => import('../views/articles/ArticleEdit.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Register.vue')
    }
  ]
})

export default router
