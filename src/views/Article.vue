<template>
  <div class="st-main container-fluid article-wrapper">
    <header class="article__header">
      <h1 class="article__title">{{articleData.title}}</h1>
      <div class="article__mark flex ">
        <div class="mark__item">
          <i class="icon icon-edit-2"></i>
          <span>{{articleData.author}}</span>
        </div>
        <div class="mark__item">
          <i class="icon icon-calendar"></i>
          <span>{{articleData.createdate}}</span>
        </div>
        <div class="mark__item">
          <i class="icon icon-tag"></i>
          <span>{{articleData.classify}}</span>
        </div>
      </div>
    </header>
    <MarkdownPreview class="article__editor" :initialValue="value" :theme="codeStyle" isPreview></MarkdownPreview>
  </div>
</template>

<script>
import { MarkdownPreview } from 'vue-meditor'
import { getArticleById } from '@/api'
export default {
  components: { MarkdownPreview },
  data () {
    return {
      articleData: {},
      value: ``,
      codeStyle: global.codeStyle
    }
  },
  created () {
    const vm = this
    const articleId = this.$route.query.articleid
    getArticleById(articleId).then(res => {
      vm.articleData = res.data[0]
      vm.value = vm.articleData.content
    })
    vm.codeStyle = window.localStorage.getItem('hlcss') || global.codeStyle
  }
}
</script>

<style lang="scss" scoped>
</style>
