import axios from 'axios'
import Vue from 'vue'

//创建axios实例
const http=axios.create({

  baseURL:'http://localhost:3000/admin/api'  //指向后台提供的接口地址,api存入admin/api里面

})
//添加请求头token
http.interceptors.request.use(config=> {
    //  全局在添加请求头author认证属性，每有路由跳转，即检查token信息
    if (localStorage.token) {
      config.headers.Authorization='Bearer '+ localStorage.token
    }   
    return config;
}, err => {
    // Do something with request error
    return Promise.reject(err);
});

//前端响应拦截,全局响应错误
http.interceptors.response.use(res=>{
  return res
},err=>{
  console.log(err.response.data)
  //将elementui的$message方法挂在到Vue原型链，直接使用该方法
  if (err.response.data) {
    Vue.prototype.$message({
        message:err.response.data
    })
  } 
  return Promise.reject(err)
})

export default http
