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

//全局定义，可以在v任意vue实例下使用
Vue.mixin({
  methods:{
    getAuthHeaders(){
      return {
        Authorization: `Bearer ${localStorage.token || '' }`
      }
    }
  }
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
