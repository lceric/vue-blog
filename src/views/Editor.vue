<template>
  <div class="st-main container-fluid article-wrapper">
    <header class="article__header">
      <h1 class="article__title">Vue测试文章标题</h1>
      <div class="article__mark flex ">
        <div class="mark__item">
          <i class="icon icon-edit-2"></i>
          <span>ChaoLee</span>
        </div>
        <div class="mark__item">
          <i class="icon icon-calendar"></i>
          <span>2015-10-02</span>
        </div>
        <div class="mark__item">
          <i class="icon icon-tag"></i>
          <span>vue, js</span>
        </div>
      </div>
    </header>
    <mavon-editor class="article__editor" :value="value" :editable="false" :boxShadow="false"
      navigation
      :subfield="false" :defaultOpen="'preview'" :toolbarsFlag="false"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: `# 升级npm(windows和linux同样适用)
        > npm update -g npm
        <hr>
        升级node(仅linu`
    }
  },
  created () {
    console.info(this.$route.query)
  }
}
</script>

<style lang="scss" scoped>
</style>
