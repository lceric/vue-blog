<template>
  <div class="st-modify__wrapper">
    <!-- <img src="./assets/logo.png"> -->

    <!-- /**
    * $vm 指为mavonEditor实例，可以通过如下两种方式获取
    * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
    * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
    */ -->{{articleIntro}}
    <div class="st-modify__header">
      文章标题<at-input class="{'at-input--error': status.title}" v-model="modifyTitle" size="large" placeholder="请输入文章标题"></at-input>
    </div>
    <div class="st-modify__tag">
      文章类型
      <at-select class="{'at-input--error': status.classify}" v-model="modifyClassify" filterable size="large" placeholder="请选择文章类别">
        <at-option
          v-for="(option, idx) in modifyClassifyOptions"
          :key="idx" :value="option.codekey">{{option.codelable}}</at-option>
      </at-select>
      <at-button icon="icon-save" type="primary" @click="save">保存</at-button>
    </div>
    <mavon-editor class="mavon-editor" ref="md" @imgAdd="imgAdd" @imgDel="imgDel" :ishljs="true" v-model="value" />
  </div>
</template>

<script>
import axios from 'axios'
import { uploadImg, getType, insertArticle } from '@/api'
// import qs from 'qs'
export default {
  name: 'Modify',
  data () {
    return {
      modifyTitle: '',
      modifyClassify: '',
      modifyClassifyOptions: [],
      status: {
        title: false,
        classify: false
      },
      value: ''
    }
  },
  computed: {
    articleIntro () {
      return this.value.substr(0, 60)
    }
  },
  created () {
    const vm = this
    getType('ARTICLE_TYPE').then(res => {
      vm.modifyClassifyOptions = res.data
    })
  },
  methods: {
    imgAdd (pos, $file) {
      var formData = new FormData()
      formData.append('file', $file)
      formData.append('userId', 'chaochaoA')
      console.info('pos', $file)
      console.info('formData miniurl', formData)
      const vm = this
      const $vm = vm.$refs.md
      // vm.$refs.md.$img2Url(pos, $file.miniurl)
      uploadImg(formData).then(res => {
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        console.info(res.data.url)
        if (res.data.code === 0) {
          $vm.$imgAddByUrl(pos, res.data.url)
          vm.$refs.md.$img2Url(pos, res.data.url)
          vm.$refs.md.$refs.toolbar_left.$imgDelByFilename(pos)
        } else {
          vm.$refs.md.$refs.toolbar_left.$imgDelByFilename(pos)
        }
      })
    },
    imgDel (pos) {
      // const vm = this
      console.info(pos)
      // vm.$refs.md.$refs.toolbar_left.$imgDelByFilename(pos)
    },
    remove () {
      var formData = new URLSearchParams()
      formData.append('articleId', 'llllasjfkasfj')
      formData.append('fileName', ['l.png', 'm.png'])
      axios({
        url: 'http://localhost:3000/remove.php',
        method: 'post',
        data: formData
        // headers: { 'Content-Type': 'application/json; charset=UTF-8' }
      }).then((res) => {
        console.info(res)
      })
    },
    save () {
      const vm = this
      const params = {
        authorId: vm.authorId || '1',
        title: vm.modifyTitle,
        author: vm.author,
        articleintro: vm.articleIntro,
        content: vm.value,
        classify: vm.modifyClassify
      }
      insertArticle(params).then(res => {
        console.info(res)
      }).catch(err => {
        console.info(err)
      })
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
