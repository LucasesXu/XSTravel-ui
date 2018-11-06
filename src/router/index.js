import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Enroll from '@/views/Enroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/enroll',
      name: 'Enroll',
      component: Enroll
    }
  ]
})
