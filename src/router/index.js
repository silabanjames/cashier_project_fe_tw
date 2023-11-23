import { createRouter, createWebHistory } from 'vue-router'
import login from '../auth/login.vue'
import register from '../auth/register.vue'

import Body from '../components/body.vue'

import productsList from '../pages/products/productsList.vue'
import cart from '../pages/cart/cart.vue'
import history from '../pages/history/history.vue'
import admin from '../pages/admin/admin.vue'
import addProduct from '../pages/admin/addProduct.vue'
import editProduct from '../pages/admin/editProduct.vue'

const routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: login,
        meta: { guest: true }
      },
      {
        path: 'register',
        name: 'Register',
        component: register,
        meta: { guest: true }
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
        component: productsList,
        meta: { requiresAuth: true }
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
        component: cart,
        meta: { requiresAuth: true }
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
        component: history,
        meta: { requiresAuth: true }
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
        component: admin,
        meta: { requiresAuth: true }
      },
      {
        path: '/add-product',
        name: 'AddProduct',
        component: addProduct,
        meta: { requiresAuth: true }
      },
      {
        path: '/edit-product',
        name: 'EditProduct',
        component: editProduct,
        meta: { requiresAuth: true }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)){
    if(sessionStorage.getItem('token')){
      next('/')
      return;
    }
    next()
  } 
  else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  console.log('test Auth')
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(sessionStorage.getItem('token')){
      next();
      return;
    }
    next('/login');
  }
  else {
    next()
  }
})

export default router
