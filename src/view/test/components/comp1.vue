<template>
  <div>
    {{ num }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: '100'
    }
  },
  created() {
    this.num = '999'
  }

}
</script>
