import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/mangda',
    component: Home
  },
  {
    path: '/ebook',
    name: 'EBook',
    component: () => import('../views/EBook.vue')
  },
  {
    path: '/mangda',
    name: 'mangda',
    component: () => import('../views/mangda.vue')
  },
  {
    path: '/mangDaSetting',
    name: 'mangDaSetting',
    component: () => import('../views/mangDaSetting.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
