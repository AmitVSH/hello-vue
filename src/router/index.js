import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Welcome.vue')
  },

  {
    path: '/register',
    name: 'RegisterStep1',
    component: () => import(/* webpackChunkName: "about" */ '../components/Auth/RegisterStep1.vue')
  },
  {
    path: '/register/step2',
    name: 'RegisterStep2',
    component: () => import(/* webpackChunkName: "about" */ '../components/Auth/RegisterStep2.vue')
  },
  {
    path: '/register/complete',
    name: 'RegisterComplete',
    component: () => import(/* webpackChunkName: "about" */ '../components/Auth/RegisterComplete.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
