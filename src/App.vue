<template>
  <div id="app">
    <router-view :key="$route.path" />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
