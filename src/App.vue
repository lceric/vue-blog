<template>
  <div id="app">
    <l-header v-if="!navHidden"></l-header>
    <router-view class="st-wapper"></router-view>
    <l-controller-bar save @on-edit="editHandler" @on-save="saveHandler" add></l-controller-bar>
    <l-footer></l-footer>
  </div>
</template>

<script>
import LHeader from '@/components/Header.vue'
import LFooter from '@/components/Footer.vue'
import LControllerBar from '@/components/ControllerBar.vue'
import { mapState } from 'vuex'
import EventBus from '@/utils/event.js'

export default {
  name: 'App',
  components: {
    LHeader,
    LFooter,
    LControllerBar
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
  },
  methods: {
    editHandler () {
      EventBus.$emit('on-edit')
    },
    saveHandler () {
      console.log('save')
      EventBus.$emit('on-save')
    }
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
