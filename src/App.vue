<template>
  <div id="app">
    <l-header></l-header>
    <router-view></router-view>
  </div>
</template>

<script>
import LHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    LHeader
  }
}
</script>

<style>
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50; */
  }
</style>
