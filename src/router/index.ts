import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
