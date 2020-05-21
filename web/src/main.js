import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

import './style.scss'
import './assets/iconfont/iconfont.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
