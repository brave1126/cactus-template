<template>
  <div v-if="!route.hidden">
    <!-- 根据route的children字段判断sidebarItem组件具体渲染成menu还是submenu -->
    <template v-if="leOneChild">
      <el-menu-item :index="resolvePath(route.path)">
        <!-- 有一个children -->
        <template v-if="leOneChild.children && leOneChild.children[0].meta">
          <i :class="'el-icon-'+leOneChild.children[0].meta.icon" />
          <span slot="title">{{ leOneChild.children[0].meta.title }}</span>
        </template>
        <!-- 没有children -->
        <template v-else-if="!leOneChild.children && leOneChild.meta">
          <i :class="'el-icon-'+leOneChild.meta.icon" />
          <span slot="title">{{ leOneChild.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="resolvePath(route.path)">
      <template slot="title">
        <i :class="'el-icon-'+gtOneChild.meta.icon" />
        <span slot="title">{{ gtOneChild.meta.title }}</span>
      </template>
      <sidebar-item v-for="cRoute in gtOneChild.children" :key="cRoute.path" :route="cRoute" :base-path="resolvePath(route.path)" />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'SidebarItem',
  props: {
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
      gtOneChild: undefined
    }
  },
  created() {
    this.checkChild()
  },
  methods: {
    checkChild() {
      if (!this.route.children || this.route.children.length <= 1) {
        this.leOneChild = this.route
      } else {
        this.gtOneChild = this.route
      }
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
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
</style>
