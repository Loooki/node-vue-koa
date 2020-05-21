const jwt = require('jsonwebtoken')
const assert = require('http-assert')
const Adminuser = require('../models/Adminuser')

//校验token中间件
module.exports= options =>{

  return (async (ctx, next) => {
    // const token=ctx.headers.authorization
    const token = String(ctx.headers.authorization || '').split(' ').pop()

    assert(token, 401, '请提供token，请先登录')

    //得到请求头的token,进行解码
    // let tokenData=jwt.verify(token,ctx.state.secret)
    let { id } = jwt.verify(token, ctx.state.secret) //es6解构
    assert(id, 401, '用户名不存在')

    //数据库中查找用户并挂在到ctx,以便后续路由查找
    ctx.user = await Adminuser.findById(id)
    assert(id, 401, '用户名不存在')

    // console.log(ctx.user)
    await next()
  })
}
