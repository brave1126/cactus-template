<template>
  <div class="layout">
    <side-bar />
    <div class="right-container">
      <nav-bar />
      <div v-for="item in 30" :key="item">qqq</div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/LayOut/SideBar/index.vue'
import NavBar from '@/components/LayOut/NavBar/index.vue'
export default {
  name: 'Layout',
  components: {
    SideBar,
    NavBar
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
// 主内容
.right-container {
  height: 100vh;
  flex-grow: 1;
  overflow:auto;
  background-color: rgb(240, 242, 245);;
  // border: 1px solid red;
}

</style>
