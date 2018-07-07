<template>
  <div id="app">
    <l-header v-if="!navHidden"></l-header>
    <router-view class="st-wapper"></router-view>
    <l-footer></l-footer>
  </div>
</template>

<script>
import LHeader from '@/components/Header.vue'
import LFooter from '@/components/Footer.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    LHeader,
    LFooter
  },
  data () {
    return {
      // navHidden: false
    }
  },
  computed: {
    ...mapState({
      navHidden: state => state.app.navHidden
    })
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
