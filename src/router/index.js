import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/header'
import List from '@/pages/List'
import signUp from '@/pages/signup'
import signIn from '@/pages/signin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path:'/list',
      name:'List',
      component: List
    },
    {
      path:'/signup',
      name:'signUp',
      component: signUp
    },
    {
      path:'/signin',
      name:'signin',
      component: signIn
    }
  ]
})
