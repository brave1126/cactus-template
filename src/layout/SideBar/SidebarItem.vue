<template>
  <div>
    <el-menu-item v-for="item in routes" :key="item.name" :index="item.name">
      <i :class="'el-icon-'+item.meta.icon" />
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
    }
  },
  created() {
    console.log(this.routes)
  }
}
</script>

<style lang="scss" scoped>
</style>
