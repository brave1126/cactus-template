<template>
  <div v-if="!route.hidden">
    <!-- 判断是不是链接 -->
    <a v-if="checkPath(route.path)" :href="route.path" target="_blank" rel="noopener">
      <el-menu-item :index="route.path">
        <item-info :icon="route.meta.icon" :title="route.meta.title" />
      </el-menu-item>
    </a>
    <!-- 根据route的children字段判断sidebarItem组件具体渲染成menu还是submenu -->
    <!-- 小于等于一个children -->
    <router-link v-else-if="leOneChild" :to="getMenuItemIndex()">
      <el-menu-item :index="getMenuItemIndex()">
        <!-- 有一个children -->
        <template v-if="leOneChild.children && leOneChild.children[0].meta">
          <item-info :icon="leOneChild.children[0].meta.icon" :title="leOneChild.children[0].meta.title" />
        </template>
        <!-- 没有children -->
        <template v-else-if="!leOneChild.children && leOneChild.meta">
          <item-info :icon="leOneChild.meta.icon" :title="leOneChild.meta.title" />
        </template>
      </el-menu-item>
    </router-link>
    <!-- 多个children -->
    <el-submenu v-else :index="getSubmenuIndex(route.path)">
      <template slot="title">
        <item-info :icon="gtOneChild.meta.icon" :title="gtOneChild.meta.title" />
      </template>
      <sidebar-item
        v-for="cRoute in gtOneChild.children"
        :key="cRoute.path"
        :route="cRoute"
        :base-path="submenuIndex"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import ItemInfo from '@/layout/SideBar/ItemInfo.vue'
import { isExternal } from '@/utils/validate.js'
export default {
  name: 'SidebarItem',
  components: {
    ItemInfo
  },
  props: {
    // 一个路由对象
    route: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      leOneChild: undefined,
      gtOneChild: undefined,
      submenuIndex: undefined
    }
  },
  created() {
    this.checkChild()
  },
  methods: {
    checkPath(path) {
      return isExternal(path)
    },
    checkChild() {
      if (!this.route.children || this.route.children.length <= 1) {
        this.leOneChild = this.route
      } else {
        this.gtOneChild = this.route
      }
    },
    resolvePath(routePath) {
      // debugger
      // console.log(this.basePath, routePath, '拼接:' + path.resolve(this.basePath, routePath))
      return path.resolve(this.basePath, routePath)
    },
    getSubmenuIndex(routePath) {
      this.submenuIndex = this.resolvePath(routePath)
      return this.submenuIndex
    },
    getMenuItemIndex() {
      if (this.leOneChild.children) {
        const hiddenPath = this.resolvePath(this.leOneChild.path)
        return path.resolve(hiddenPath, this.leOneChild.children[0].path)
      } else {
        return this.resolvePath(this.leOneChild.path)
      }
    }
  }
}
</script>

<style lang="scss">
// 隐藏title
.el-menu--collapse .el-submenu__title span{
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
// 隐藏箭头
.el-menu--collapse .el-submenu__icon-arrow {
  display: none;
}
// 收缩时隐藏右边border
.sidebar-menu.el-menu--collapse.el-menu{
  border: cornflowerblue 0px solid;
}
a {
  cursor: pointer;
  text-decoration: none;
}
</style>
