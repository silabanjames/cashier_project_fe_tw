import { createRouter, createWebHistory } from 'vue-router'
import login from '../auth/login.vue'
import register from '../auth/register.vue'

import Body from '../components/body.vue'

import productsList from '../pages/products/productsList.vue'
import cart from '../pages/cart/cart.vue'
import history from '../pages/history/history.vue'
import admin from '../pages/admin/admin.vue'

const routes = [
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        name: 'login',
        component: login
      },
      {
        path: 'register',
        name: 'register',
        component: register
      }
    ]
  },
  {
    path: '/',
    component: Body,
    children: [
      {
        path: '',
        name: 'ProductList',
        component: productsList
      }
    ]
  },
  {
    path: '/cart',
    component: Body,
    children: [
      {
        path: '',
        name: 'Cart',
        component: cart
      }
    ]
  },
  {
    path: '/history',
    component: Body,
    children: [
      {
        path: '',
        name: 'History',
        component: history
      }
    ]
  },
  {
    path: '/admin',
    component: Body,
    children: [
      {
        path: '',
        name: 'Admin',
        component: admin
      }
    ]
  },


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
