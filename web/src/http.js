import axios from 'axios'
// import Vue from 'vue'
// import router from '../router/index.js'
//创建axios实例
const http =axios.create({
   baseURL: 'http://localhost:3000/web/api' //指向后台提供的接口地址,api存入admin/api里面
})
export default http
