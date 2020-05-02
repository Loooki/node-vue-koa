import axios from 'axios'

//创建axios实例
const http=axios.create({

  baseURL:'http://localhost:3000/admin/api'  //指向后台提供的接口地址,api存入admin/api里面

})

export default http
