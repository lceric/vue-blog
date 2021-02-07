<template>
  <div class="st-main login">
    <div class="st-login">
      <at-input class="login__form-item" v-model.trim="username" placeholder="登录名" prepend-button>
        <template slot="prepend">
          <i class="icon icon-user"></i>
        </template>
      </at-input>
      <at-input class="login__form-item"
        v-on:enter="loginHandler"
        v-model.trim="password" placeholder="密码" type="password" prepend-button>
        <template slot="prepend">
          <i class="icon icon-lock"></i>
        </template>
      </at-input>
      <at-button class="st-login__jump" circle :loading="loading"
        icon="icon-log-in"
        size="large"
        @click="loginHandler"
        :disabled="loading"></at-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api'
import { setStorage } from '@/utils/storage.js'
import md5 from 'js-md5'
export default {
  data () {
    return {
      username: '',
      password: '',
      loading: false
    }
  },
  created () {
    document.querySelector('.st-footer').style.display = 'none'
  },
  beforeDestroy () {
    document.querySelector('.st-footer').style.display = 'block'
  },
  methods: {
    loginHandler () {
      const vm = this
      vm.loading = true
      if (vm.username !== '' && vm.password !== '') {
        login({
          username: vm.username,
          password: md5(vm.password)
        }).then(res => {
          console.info(res)
          setStorage('userInfo', res.data)
          vm.loading = false
          vm.$Message.success('登录成功!')
          vm.$router.replace('/')
          // window.location.reload()
        }, () => {
          // console.info(err.response)
          vm.loading = false
          // vm.$Message.warning(err.response.data.message)
        })
      } else {
        vm.loading = false
        vm.$Message.warning('用户名和密码不能为空！')
      }
    }
  }
}
</script>
