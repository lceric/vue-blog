<template>
  <div class="st-login st-main">
    <at-input v-model="username" placeholder="请输入内容" prepend-button>
      <template slot="prepend">
        <i class="icon icon-search"></i>
      </template>
    </at-input>
    <at-input v-model="password" placeholder="请输入内容" type="password" prepend-button>
      <template slot="prepend">
        <i class="icon icon-search"></i>
      </template>
    </at-input>
    <at-button loading>登录</at-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
