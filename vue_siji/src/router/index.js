import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import Resgin from '../page/resgin'
import Header from '../page/more'
import Agree from '../page/agree'
import Tou from '../page/tou_head'
import Id from '../page/id'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/resgin',
      component : Resgin
    },
    {
      path: '/more',
      component : Header
    },
    {
      path: '/agree',
      component : Agree
    },
    {
      path: '/tou_head',
      component : Tou
    },
    {
      path: '/id',
      component : Id
    }
  ]
})
