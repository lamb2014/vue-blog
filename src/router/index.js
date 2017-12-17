import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/header'
import List from '@/pages/List'
import signUp from '@/pages/signup'
import signIn from '@/pages/signin'
import ArticleCreate from '@/pages/article/create'
import Article from '@/pages/article/index'
import ArticleEdit from '@/pages/article/edit'
import User from '@/pages/user/index'
import Followee from '@/pages/user/myfollow'
import Follower from '@/pages/user/myfollwer'
import Friend from '@/pages/user/friend'
import Message from '@/pages/user/message'
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
    },
    {
      path:'/user/:id',
      name:'User',
      component: User
    },
    {
      path: '/followee',
      nanme: 'Followee',
      component: Followee,
      meta: {
       needLogin: true
      }
    },
    {
      path: '/follower',
      nanme: 'Follower',
      component: Follower,
      meta: {
       needLogin: true
      }
    },
    {
      path: '/friend',
      nanme: 'Friend',
      component: Friend,
      meta: {
       needLogin: true
      }
    },
    {
      path: '/message',
      nanme: 'Message',
      component: Message,
      meta: {
       needLogin: true
      }
    },
    {
      path: '/article/create',
      name: 'ArticleCreate',
      component: ArticleCreate,
      meta: {
        needLogin: true
      }
    },
    {
      path:'/article/:id',
      name:'Article',
      component: Article
    },
    {
      path:'/article/:id/edit',
      name:'ArticleEdit',
      component: ArticleEdit,
      meta: {
        needLogin: true
      }
    }
  ]
})
