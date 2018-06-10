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
  </header>
</template>

<script>
export default {
  data () {
    return {
      subtitle: '坚持不住时，再坚持一下<br> Running will make me stronger',
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
      isMain: false
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
  }
}
</script>

<style lang="scss" scoped>
  .logo {

  }
</style>
