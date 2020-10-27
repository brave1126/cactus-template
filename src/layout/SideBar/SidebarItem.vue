<template>
  <div v-if="!route.hidden">
    <!-- 根据route的children字段判断sidebarItem组件具体渲染成menu还是submenu -->
    <template v-if="leOneChild">
      <el-menu-item :index="leOneChild.name">
        <template v-if="leOneChild.children">
          <i :class="'el-icon-'+leOneChild.children[0].meta.icon" />
          <span slot="title">{{ leOneChild.children[0].meta.title }}</span>
        </template>
        <template v-else>
          <i :class="'el-icon-'+leOneChild.meta.icon" />
          <span slot="title">{{ leOneChild.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="gtOneChild.name">
      <template slot="title">
        <i :class="'el-icon-'+gtOneChild.meta.icon" />
        <span slot="title">{{ gtOneChild.meta.title }}</span>
      </template>
      <sidebar-item v-for="cRoute in gtOneChild.children" :key="cRoute.name" :route="cRoute" />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    route: {
      type: Object,
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
