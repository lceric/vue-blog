import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('@/views/Main')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
