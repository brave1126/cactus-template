<template>
  <div class="layout">
    <side-bar />
    <div class="right-container">
      <nav-bar />
      <app-main />
    </div>
  </div>
</template>

<script>
import SideBar from '@/layout/SideBar/index.vue'
import NavBar from '@/layout/NavBar/index.vue'
import AppMain from '@/layout/AppMain/index.vue'
export default {
  name: 'Layout',
  components: {
    SideBar,
    NavBar,
    AppMain
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  width: 100vw;
}
// 右内容
.right-container {
  height: 100vh;
  flex-grow: 1;
  overflow:auto;
  background-color: rgb(240, 242, 245);;
  // border: 1px solid red;
}

</style>
