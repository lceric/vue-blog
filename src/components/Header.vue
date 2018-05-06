<template>
  <header id="header">
    <div id="banner"></div>
    <div id="header-outer" class="outer">
      <div id="header-title" class="inner">
        <h1 id="logo-wrap">
          <a id="logo">{{config.title}}</a>
        </h1>
        <h2 v-if="subtitle" id="subtitle-wrap">
          <a id="subtitle">{{subtitle}}</a>
        </h2>
        <!-- <h3 class="logo-text">
          To Be Strong, Have To Run
        </h3> -->
      </div>
      <div id="header-inner" class="inner">
        <nav id="main-nav">
          <a id="main-nav-toggle" class="nav-icon"></a>
          <a v-for="(menu, idx) in menus" :key="idx" class="main-nav-link" :href="menu.path">{{menu.text}}</a>
        </nav>
        <!-- <nav id="sub-nav">
          <a v-if="config.rss" id="nav-rss-link" class="nav-icon"></a>
          <a id="nav-search-btn" class="nav-icon" title="search"></a>
        </nav> -->
        <!-- <div id="search-form-wrap">
        </div> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      subtitle: '吾生有崖，技术无涯',
      menus: [{
        path: '/',
        text: 'Home'
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
