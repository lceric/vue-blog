// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'normalize.css'

import AtComponents from 'at-ui'
import 'at-ui-style'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import '../static/css/basic.css'
import '@/assets/stylesheet/_index.scss'

Vue.use(AtComponents)
// use
Vue.use(mavonEditor)

Vue.config.productionTip = false

global.codeStyle = 'atelier-seaside-light'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
