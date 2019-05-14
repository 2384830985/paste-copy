import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/button',
          component: (resolve) => require(['./views/button.vue'], resolve)
      },
      {
          path: '/icon',
          component: (resolve) => require(['./views/icon.vue'], resolve)
      },
  ]
})
