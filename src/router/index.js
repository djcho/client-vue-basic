import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tokenStore from '../store/tokenStore'
import axios from 'axios';
import useAuth from '@/composables/auth';

const { refreshToken, accessToken, errors } = useAuth();
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
        },
        {
          path: '/articles/:id',
          name: 'ArticleShow',
          component: () => import('../views/articles/ArticleShow.vue'),
          props: true,
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

router.beforeEach(async (to, from, next) => {
  if(to.name === 'Login' ||
  to.name === 'Register'){
    return next();
  }
  
  // if(!tokenStore.getters.isAuthenticated){
  //   try{
  //       await refreshToken();
  //       if(errors){
  //         return next({name : "Login"});
  //       }
  //   }catch(error){
  //     return next({name : "Login"});
  //   }
  // }
  
  return next();
});

export default router
