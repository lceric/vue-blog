<template>
  <div id="app">
    <l-header v-if="!navHidden"></l-header>
    <router-view class="st-wapper"></router-view>
    <l-controller-bar :save="save" @on-edit="editHandler" @on-save="saveHandler" :add="add"></l-controller-bar>
    <l-footer></l-footer>
  </div>
</template>

<script>
import LHeader from '@/components/Header.vue'
import LFooter from '@/components/Footer.vue'
import LControllerBar from '@/components/ControllerBar.vue'
import { mapState } from 'vuex'
import EventBus from '@/utils/event.js'
import { getStorage } from '@/utils/storage.js'

export default {
  name: 'App',
  components: {
    LHeader,
    LFooter,
    LControllerBar
  },
  data () {
    return {
      userInfo: null
      // navHidden: false
    }
  },
  computed: {
    ...mapState({
      navHidden: state => state.app.navHidden
    }),
    save () {
      return this.userInfo && this.$route.path === '/modify'
    },
    add () {
      return !!this.userInfo && this.$route.path !== '/modify'
    }
  },
  created () {
    console.log('******', this.$route)
    const vm = this
    let localUser = getStorage('userInfo')
    console.info(localUser)
    vm.userInfo = localUser
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
