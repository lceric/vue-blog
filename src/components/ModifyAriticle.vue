<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <!-- /**
    * $vm 指为mavonEditor实例，可以通过如下两种方式获取
    * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
    * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
    */ -->
    <!-- <router-view/> <--><button @click="remove">测试资源整理</button>
    {{value}}
    <mavon-editor ref="md" @imgAdd="imgAdd" @imgDel="imgDel" :ishljs="true" v-model="value" />
  </div>
</template>

<script>
import axios from 'axios'
// import qs from 'qs'
export default {
  name: 'App',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    imgAdd (pos, $file) {
      var formData = new FormData()
      formData.append('file', $file)
      formData.append('articleId', 'kkkkllllllkkkk')
      console.info('pos', $file)
      console.info('formData', formData)
      const vm = this
      const $vm = vm.$refs.md
      const server = 'http://118.24.53.34/api/upload/upload1.php'
      axios({
        url: server,
        method: 'post',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((res) => {
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        console.info(res.data.url)
        if (res.data.code === 0) {
          $vm.$imgAddByUrl(pos, res.data.url)
          // vm.$refs.md.$refs.toolbar_left.$imgAddByFilename('./' + res.data.filename, $file)
          vm.$refs.md.$img2Url(pos, res.data.url)
          vm.$refs.md.$refs.toolbar_left.$imgDelByFilename(pos)
          // vm.$refs.md.$imgUpdateByUrl(pos, res.data.url)
          // vm.$refs.md.$refs.toolbar_left.$imgAddByFilename('./' + res.data.filename, $file)
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
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
