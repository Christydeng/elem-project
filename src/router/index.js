import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import City from '@/views/city/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city/:cityid',
      component: City
    }
  ]
})
