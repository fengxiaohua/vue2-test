/*
 * @Description: 路由设置
 * @Date: 2022-04-08 13:54:28
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    }
  ]
})
