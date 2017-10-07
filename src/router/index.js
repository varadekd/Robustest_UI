import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/list'
import Detail from '@/pages/detail'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path : '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
