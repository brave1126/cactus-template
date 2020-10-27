import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '@/components/LayOut/index.vue'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    name: 'dashbord',
    component: LayOut
  },
  {
    path: '/t1',
    name: 't1',
    component: LayOut
  },
  {
    path: '/t2',
    name: 't2',
    component: LayOut
  },
  {
    path: '/t3',
    name: 't3',
    component: LayOut
  },
  {
    path: '/t4',
    name: 't4',
    component: LayOut
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
