<template>
  <div class="st-modify__wrapper">
    <!-- <img src="./assets/logo.png"> -->

    <!-- /**
    * $vm 指为mavonEditor实例，可以通过如下两种方式获取
    * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
    * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
    */ -->
    <!-- {{articleIntro}} -->
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
    </div>
    <div class="st-modify__intro">
      文章简介
      <at-textarea placeholder="填写文章简介信息" v-model="articleIntro"></at-textarea>
    </div>
    <mavon-editor class="mavon-editor" ref="md" @imgAdd="imgAdd" @imgDel="imgDel" :ishljs="true" v-model="value" />
  </div>
</template>

<script>
import axios from 'axios'
import { getStorage } from '@/utils/storage.js'
import EventBus from '@/utils/event.js'
import { uploadImg, getType, insertArticle } from '@/api'
// import qs from 'qs'
export default {
  name: 'Modify',
  data () {
    return {
      userInfo: null,
      modifyTitle: '',
      modifyClassify: '',
      modifyClassifyOptions: [],
      status: {
        title: false,
        classify: false
      },
      value: '',
      articleIntro: ''
    }
  },
  computed: {
    // articleIntro () {
    //   return this.value.substr(0, 60)
    // },
    author () {
      return this.userInfo.username
    },
    authorId () {
      return this.userInfo.userid
    }
  },
  created () {
    const vm = this
    let localUser = getStorage('userInfo')
    vm.userInfo = localUser
    EventBus.$on('on-save', function () {
      vm.save()
    })
    getType('ARTICLE_TYPE').then(res => {
      vm.modifyClassifyOptions = res.data
    })
  },
  methods: {
    imgAdd (pos, $file) {
      const vm = this
      var formData = new FormData()
      formData.append('file', $file)
      formData.append('userId', vm.userInfo.userid || 'unknownuserid')
      formData.append('type', vm.modifyClassify || 'NEC')
      const $vm = vm.$refs.md
      // vm.$refs.md.$img2Url(pos, $file.miniurl)
      uploadImg(formData).then(res => {
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        if (res.data.code === 200 || res.data.code === 0) {
          // $vm.$imgAddByUrl(pos, res.data.url)
          $vm.$img2Url(pos, res.data.url)
          // let imgList = $vm.$refs.toolbar_left.img_file
          // let index = imgList.findIndex((img) => {
          //   return img[1] === pos
          // })
          // // 解决连续删除错误的问题
          // // 删除图片
          // let delImg = imgList.splice(index, 1)[0]
          // this.$refs.md.$refs.toolbar_left.$emit('imgDel', delImg)
          // $vm.$imgDel([$file, pos])
        } else {
          // vm.$refs.md.$refs.toolbar_left.$imgDelByFilename(pos)
        }
      })
    },
    imgDel (pos) {
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
      if (params.title && params.content && params.classify && params.articleintro) {
        insertArticle(params).then(res => {
          this.$Message.success(res.data.message)
          vm.$router.push('/')
        }).catch(err => {
          vm.$Message.error(err.data.message)
        })
      } else {
        vm.$Message.warning('文章标题、简介、内容、类型均不能为空')
      }
    }
  }
}
</script>

<style>
</style>
