import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/perfil',
    name: 'Perfil', 
    component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue')
  },
  {
    path: '/crud',
    name: 'Crud', 
    component: () => import(/* webpackChunkName: "crud" */ '../views/Crud.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
