import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

const Main = () => import('@/views/Main')
const Article = () => import('@/views/Article')
const About = () => import('@/views/About')
const Modify = () => import('@/views/Modify')
const Login = () => import('@/views/Login')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/modify',
      name: 'Modify',
      component: Modify
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        navHidden: true
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  console.info('to.matched.some(record => record.meta.nav)', to.matched.some(record => record.meta.nav))
  if (to.matched.some(record => record.meta.navHidden)) {
    store.dispatch('updateNavHidden', true)
    store.dispatch('updateFooterHidden', true)
  } else {
    store.dispatch('updateNavHidden', false)
    store.dispatch('updateFooterHidden', false)
  }
  next()
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (!auth.loggedIn()) {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next() // make sure to always call next()!
  // }
})

export default router
