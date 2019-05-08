import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ColorPicker from './../packages/index'
import Tangjinxin from 'tangjinxin'
// 注册组件库
// Vue.use(ColorPicker)
// import Print from 'vue-print-nb'
// Vue.use(Print); //注册
Vue.use(Tangjinxin); //注册
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
