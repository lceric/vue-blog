<template>
  <header id="header">
    <div id="banner"></div>
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
    </div>
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
        path: '/',
        text: '文章'
      }, {
        path: '/',
        text: '关于'
      }],
      config: {
        title: 'STRUN'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
