<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in itemList" :key="index">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: []
    }
  },
  created() {
    this.itemList = this.$route.matched.filter(item => {
      return (item.meta && item.meta.title && item.meta.breadcrumb !== false)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
