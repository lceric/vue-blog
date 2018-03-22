<template>
  <div id="app">
    <img src="./assets/logo.png">

    <!-- /**
    * $vm 指为mavonEditor实例，可以通过如下两种方式获取
    * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
    * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
    */ -->
    <router-view/>
    <mavon-editor ref="md" @imgAdd="imgAdd" @imgDel="imgDel" :ishljs="true" v-model="value" />
  </div>
</template>

<script>
import axios from 'axios'
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
      console.info('pos', pos)
      console.info('$file', $file)
      axios({
        url: 'http://localhost:3000/upload.php',
        method: 'post',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((url) => {
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        console.info(url)
        // $vm.$img2Url(pos, url);
      })
    },
    imgDel () {
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
