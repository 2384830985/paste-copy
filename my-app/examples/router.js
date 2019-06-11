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
      {
          path: '/layout',
          component: (resolve) => require(['./views/layout.vue'], resolve)
      },
      {
          path: '/radio',
          component: (resolve) => require(['./views/radio.vue'], resolve)
      },
      {
          path: '/checkbox',
          component: (resolve) => require(['./views/checkbox.vue'], resolve)
      },
      {
          path: '/input',
          component: (resolve) => require(['./views/input.vue'], resolve)
      },
      {
          path: '/select',
          component: (resolve) => require(['./views/select.vue'], resolve)
      },
      {
        path: '/alert',
        component: (resolve) => require(['./views/alert.vue'], resolve)
      },
      {
          path: '/form',
          component: (resolve) => require(['./views/form.vue'], resolve)
      },
      {
          path: '/table',
          component: (resolve) => require(['./views/table.vue'], resolve)
      }
  ]
})
