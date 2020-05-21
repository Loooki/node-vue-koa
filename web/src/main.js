import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
