import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '@/layout/index.vue'

Vue.use(VueRouter)
/**
 * name 必填不能重复（在生成侧边栏时作为唯一标示）
 * meta 用于生成菜单的icon和标题
 * hidden 用于隐藏菜单
 */
export const constantRoutes = [
  {
    path: '/',
    name: 'dashbord',
    hidden: true,
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
    path: '/sub1',
    name: 'st5',
    meta: { icon: 'right', title: '单层目录' },
    component: LayOut,
    children: [
      {
        path: 's1',
        name: 's1',
        meta: { icon: 'eleme', title: '单层目录显示' }
      }
    ]
  },
  {
    path: '/sub2',
    name: 'st6',
    meta: { icon: 'right', title: '多层目录' },
    component: LayOut,
    children: [
      {
        path: 'sub1',
        name: 'sub1',
        meta: { icon: 'eleme', title: '子目录一' }
      },
      {
        path: 'sub2',
        name: 'sub2',
        meta: { icon: 'eleme', title: '子目录二' },
        children: [
          {
            path: 'sub21',
            name: 'sub21',
            meta: { icon: 'eleme', title: '子子目录一' }
          },
          {
            path: 's22',
            name: 's22',
            meta: { icon: 'eleme', title: '子子目录二' },
            children: [
              {
                path: 'sub221',
                name: 'sub221',
                meta: { icon: 'eleme', title: '子子子目录一' }
              }
            ]
          }
        ]
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
