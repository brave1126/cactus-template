import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '@/layout/index.vue'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    name: 'dashbord',
    meta: { icon: 'info', title: 'dashbord' },
    component: LayOut
  },
  {
    path: '/t1',
    name: 't1',
    meta: { icon: 'user', title: 'test-one' },
    component: LayOut
  },
  {
    path: '/t2',
    name: 't2',
    meta: { icon: 'phone', title: 'test-two' },
    component: LayOut
  },
  {
    path: '/t3',
    name: 't3',
    meta: { icon: 'setting', title: 'test-three' },
    component: LayOut
  },
  {
    path: '/t4',
    name: 't4',
    meta: { icon: 'eleme', title: 'test-four' },
    component: LayOut
  },
  {
    path: '/submenu',
    name: 'st5',
    meta: { icon: 'right', title: 'submenu-test-one' },
    component: LayOut,
    children: [
      {
        path: 's1',
        name: 's1',
        meta: { icon: 'eleme', title: 'submenu-one' }
      }
    ]
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
