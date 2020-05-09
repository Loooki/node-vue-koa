import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

//引入http
import http from './http'
//将http加载到vue的原型上，可以在全局使用this.$http
Vue.prototype.$http=http

import Qs from 'qs'
//利用axios拦截器来进行转换，只需要转换一次

http.interceptors.request.use(function(config) {
    //请求头转换为表单形式
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    config.transformRequest = [data => {
        return Qs.stringify(data)
    }]
    return config
}, function(error) {
    return Promise.reject(error)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
