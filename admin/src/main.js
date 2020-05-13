import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './assets/css/base.css'

Vue.config.productionTip = false

//引入http
import http from './http'
//将http加载到vue的原型上，可以在全局使用this.$http
Vue.prototype.$http=http


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
