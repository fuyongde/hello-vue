import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RouterDemo from '../views/RouterDemo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/router_demo',
    name: 'RouterDemo',
    component: RouterDemo
  },
  {
    path: '/a',
    name: 'a',
    component: () => import('../components/A.vue')
  },
  {
    path: '/b',
    name: 'b',
    component: () => import('../components/B.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
