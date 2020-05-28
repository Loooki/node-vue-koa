import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import http from './http.js'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

import './style.scss'
import './assets/iconfont/iconfont.css'

import Card from './components/Card.vue'
Vue.component('my-card',Card)

import ListCard from './components/ListCard.vue'
Vue.component('list-card', ListCard)

Vue.prototype.$http=http

//全局添加时间戳过滤器
Vue.filter('formatDate', value => {
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? ('0' + MM) : MM;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let m = date.getMinutes();
  m = m < 10 ? ('0' + m) : m;
  let s = date.getSeconds();
  s = s < 10 ? ('0' + s) : s;
  // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
  return  MM + '/' + d;
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
