<template>
  <div>
    <div class="sidebar-title">
      <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="changeCoolapse" />
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        default-active="1"
        class="sidebar-menu"
        :collapse="isCollapse"
      >
        <sidebar-item v-for="route in routes" :key="route.name" :route="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { constantRoutes } from '@/router/index.js'
import SidebarItem from '@/layout/SideBar/SidebarItem.vue'
export default {
  components: {
    SidebarItem
  },
  data() {
    return {
      isCollapse: false,
      routes: constantRoutes
    }
  },
  methods: {
    changeCoolapse() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidebar-menu:not(.el-menu--collapse) {
    width: 200px;
    height:calc(100vh - 61px);
  }
  .sidebar-title {
    height:61px;
    background-color:#42b983;
    display: flex;
    justify-content:center;
    align-items: center;
  }
</style>
