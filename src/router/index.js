import Vue from 'vue'
import VueRouter from 'vue-router'

// Pages
import Home from '../pages/Home.vue'

// Config Vue Dependency

Vue.use(VueRouter)

// Router Config

const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
