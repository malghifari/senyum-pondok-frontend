<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4d4d4d;
  height: 100%;
  width: 100%;
}

html, body {
  height: 100%;
}
</style>
