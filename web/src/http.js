import axios from 'axios'
//创建axios实例
const http =axios.create({
   baseURL: process.env.VUE_APP_API_URL || '/web/api'
    //指向后台提供的接口地址,api存入admin/api里面
    // baseURL: 'http://localhost:3000/web/api'
})
export default http
