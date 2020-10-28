import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '@/layout/index.vue'

Vue.use(VueRouter)
/**
 * path 必填不能重复（在生成侧边栏时作为唯一标示）
 * name 路由名
 * meta 用于生成菜单的icon和标题
 * hidden 用于隐藏菜单
 * childern 子路由挂载子菜单（支持hidden）
 */
export const constantRoutes = [
  {
    path: '/',
    component: LayOut,
    redirect: '/dashbord',
    children: [{
      path: 'dashbord',
      name: 'dashbord',
      meta: { icon: 'info', title: 'dashbord' },
      component: () =>
        import(/* webpackChunkName: "about" */ '@/view/Dashbord/index.vue')
    }]
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
        path: 'sub21',
        name: 'sub21',
        meta: { icon: 'eleme', title: '子目录一' }
      },
      {
        path: 'sub22',
        name: 'sub22',
        meta: { icon: 'eleme', title: '子目录二' },
        component: () =>
          import(/* webpackChunkName: "about" */ '@/view/test/t1.vue'),
        children: [
          {
            path: 'sub221',
            name: 'sub221',
            meta: { icon: 'eleme', title: '子子目录一' }
          },
          {
            path: 'sub222',
            name: 'sub222',
            meta: { icon: 'eleme', title: '子子目录二' },
            component: () =>
              import(/* webpackChunkName: "about" */ '@/view/test/t2.vue'),
            children: [
              {
                path: 'sub2221',
                name: 'sub2221',
                meta: { icon: 'eleme', title: '子子子目录一' },
                component: () =>
                  import(/* webpackChunkName: "about" */ '@/view/Dashbord/index.vue')
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/',
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
