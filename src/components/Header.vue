<template>
  <header class="st-header bg" :class="{'st-header-fixed': isFixed, 'st-header-hide': isHide}">
    <!-- <div id="banner"></div>
    <div id="header-outer" class="outer">
      <div id="header-title" class="inner">
        <h1 id="logo-wrap">
          <a id="logo">{{config.title}}</a>
        </h1>
        <h2 v-if="subtitle" id="subtitle-wrap">
          <a id="subtitle" v-html="subtitle"></a>
        </h2>
      </div>
      <div id="header-inner" class="inner">
        <nav id="main-nav">
          <a id="main-nav-toggle" class="nav-icon"></a>
          <a v-for="(menu, idx) in menus" :key="idx" class="main-nav-link" :href="menu.path">{{menu.text}}</a>
        </nav>
      </div>
    </div> -->
    <nav class="main-nav st-wapper">
      <!-- <a id="main-nav-link" class="nav-icon"></a> -->
      <router-link
        v-for="(menu, idx) in menus" :key="idx"
        active-class="is-actived" exact
        class="nav-link" :to="menu.path">{{menu.text}}</router-link>
    </nav>
    <div class="st-user">
      <at-dropdown v-if="userInfo" placement="bottom-right" @on-dropdown-command="handleCommand">
        <at-button type="text">{{userInfo.username}} <i class="icon icon-chevron-down"></i></at-button>
        <at-dropdown-menu slot="menu">
          <at-dropdown-item name="quit">退出</at-dropdown-item>
        </at-dropdown-menu>
      </at-dropdown>
      <router-link v-else to="/login">登录</router-link>
    </div>
  </header>
</template>

<script>
import { getStorage, removeStorage } from '@/utils/storage.js'
export default {
  data () {
    return {
      subtitle: 'Try to be Exellent',
      menus: [{
        path: '/',
        text: '首页'
      }, {
        path: '/about',
        text: '关于'
      }],
      config: {
        title: 'STRUN'
      },
      isFixed: false,
      isHide: false,
      isMain: false,
      userInfo: null
    }
  },
  watch: {
    '$route': function (val) {
      this.isMain = val.name === 'Main'
      // if (!this.isMain) {
      //   this.isFixed = true
      // }
      this.isFixed = val.name !== 'Main'
    }
  },
  created () {
    const vm = this
    let localUser = getStorage('userInfo')
    vm.userInfo = localUser
  },
  mounted () {
    const vm = this
    vm.$nextTick(() => {
      document.body.onscroll = function (e) {
        if (vm.isMain) {
          vm.isFixed = document.documentElement.scrollTop > 0
          vm.isHide = document.documentElement.scrollTop > 100
        }
      }
    })
  },
  methods: {
    handleCommand (name) {
      if (name === 'quit') {
        removeStorage('userInfo')
        this.$router.push('/')
        window.location.reload()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .logo {

  }
</style>
