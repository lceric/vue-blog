<template>
  <div class="st-main container-fluid">
    <div class="type-list">
      <ul class="at-row row">
        <li class="list__item" v-for="(type,idx) in articleType" :key="idx" :class="{'actived': type.actived}"
          @click="clickHandler(type, idx)">{{type.codelable}}</li>
        <li>
          <at-input @keyup.enter.native="search" v-model.lazy.trim="searchInfo" placeholder="搜索" icon="search"></at-input>
        </li>
      </ul>
    </div>
    <div class=" at-row row">
      <p v-if="noData">暂无数据</p>
      <div class="col-xs-24 col-sm-12 col-md-8 col-lg-8"
        v-for="(item, idx) in articleList" :key="idx">
        <at-card class="article" :body-style="{ padding: '10px' }">
          <div class="article__face" @click="readArticle(item)">
            <img v-if="item.cover" class="article__cover" src="https://misc.aotu.io/koppthe/at-ui/cover.jpg">
            <div class="article__cover bg" v-else>{{item.classify}}</div>
          </div>
          <div class="article__main">
            <h3 class="article__title" @click="readArticle(item)">
              {{item.title}}
            </h3>
            <p class="article__desc">
              {{item.articleintro}}
            </p>
            <div class="article__interactive at-row flex flex-between">
              <p class="article__tags">
                <i class="icon icon-bookmark"></i>{{item.classify}}
              </p>
              <p class="article__author">
                <!-- <img src="" alt=""> -->
                <a class="author-name">{{item.author}}</a>
              </p>
            </div>
          </div>
        </at-card>
      </div>
    </div>
    <div v-if="!disabledMore" class="more" @click="more">更多</div>
  </div>
</template>
<script>
import { getArticleByPage, getType } from '@/api'
export default {
  data () {
    return {
      page: 1,
      row: 24,
      classify: null,
      searchInfo: '',
      articleList: [],
      articleType: [{
        codelable: '全部',
        codekey: 'all',
        actived: true
      }],
      disabledMore: false,
      noData: false
    }
  },
  created () {
    const vm = this
    vm.getData()
    getType('ARTICLE_TYPE').then(res => {
      for (let i in res.data) {
        res.data[i]['actived'] = false
      }
      vm.articleType.push(...res.data)
    })
  },
  methods: {
    getData () {
      let vm = this
      const params = {
        page: vm.page,
        row: vm.row,
        classify: vm.classify,
        searchInfo: vm.searchInfo
      }
      getArticleByPage(params).then((res) => {
        vm.articleList.push(...res.data)
        vm.noData = false
        vm.disabledMore = res.data.length < vm.row
      }).catch(() => {
        vm.articleList = []
        vm.disabledMore = true
        vm.noData = true
      })
    },
    readArticle (item) {
      this.$router.push({
        path: '/article',
        query: {
          articleid: item.articleid
        }
      })
    },
    clickHandler (type, idx) {
      const vm = this
      vm.articleList = []
      console.info(type, idx)
      vm.articleType.forEach((item, i) => {
        vm.articleType[i]['actived'] = (idx === i)
      })
      vm.page = 1
      vm.classify = type.codekey
      if (type.codekey === 'all') {
        vm.classify = null
      }
      vm.getData()
    },
    // 加载更多
    more () {
      const vm = this
      vm.page++
      vm.getData()
    },
    // 搜索
    search () {
      const vm = this
      vm.clickHandler({ codekey: 'all' }, 0)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
