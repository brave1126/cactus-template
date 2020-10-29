<template>
  <div
    class="navbar-menu"
  >
    <bread-crumb />
  </div>
</template>

<script>
import BreadCrumb from '@/layout/NavBar/BreadCrumb.vue'
export default {
  components: {
    BreadCrumb
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-menu {
  padding-left: 10px;
  height: 61px;
  width: calc(100vh-200px);
  background-color: #fff;
  display: flex;
  align-items: center;
}
</style>
