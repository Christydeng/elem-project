import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Index from '@/views/index/index'
import City from '@/views/city/city'
import Msite from '@/views/msite/msite'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: Index
    // }
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/city/:cityid',
      component: City
    },
    {
      path: '/msite',
      component: Msite,
      meta: { keepAlive: true }
    }
  ]
})
