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
        <el-menu-item v-for="item in routes" :key="item.name" :index="item.name">
          <i class="el-icon-menu" />
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { constantRoutes } from '@/router/index.js'
export default {
  data() {
    return {
      isCollapse: false,
      routes: constantRoutes
    }
  },
  mounted() {
    console.log(constantRoutes)
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
    height:calc(100vh - 60px);
  }
  .sidebar-title {
    height:60px;
    background-color:#42b983;
  }
</style>
