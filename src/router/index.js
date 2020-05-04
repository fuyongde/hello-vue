import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RouterDemo from '../views/RouterDemo.vue'
import Store from '../store'

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
    component: RouterDemo,
    children: [
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
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

// 路由的前置
router.beforeEach((to, from, next) => {
  if (!Store.state.userInfo.username && to.path != '/login') {
    console.log('jump to login')
    next({ path: '/login' });
  } else {
    console.log('jump to next')
    next();
  }
});

export default router
