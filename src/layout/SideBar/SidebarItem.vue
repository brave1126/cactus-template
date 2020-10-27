<template>
  <div v-if="!route.hidden">
    <!-- 根据route的children字段判断sidebarItem组件具体渲染成menu还是submenu -->
    <el-menu-item v-if="leOneChild" :index="leOneChild.name">
      <div v-if="leOneChild.children">
        <i :class="'el-icon-'+leOneChild.children[0].meta.icon" />
        <span slot="title">{{ leOneChild.children[0].meta.title }}</span>
      </div>
      <div v-else>
        <i :class="'el-icon-'+leOneChild.meta.icon" />
        <span slot="title">{{ leOneChild.meta.title }}</span>
      </div>
    </el-menu-item>
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

<style lang="scss" scoped>
</style>
