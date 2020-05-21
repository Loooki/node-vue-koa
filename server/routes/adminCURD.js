const router=require('koa-router')()
const rest=require('./admin/rest.js')
const upload = require('./admin/upload.js')
const bcrypt = require ('bcrypt')
const assert = require('http-assert')
const authMiddleware=require('../middleware/auth')()

router.prefix('/admin/api')

router.get('/',(ctx,next)=>{
  ctx.body="admin"
})

//登陆接口
router.post('/login',async (ctx)=>{
  let {username,password}=ctx.request.body
  //1.根据用户名找用户,调用user数据库
  let adminuser=require('../models/Adminuser.js')
  let user= await adminuser.findOne({ username }).select('+password') //强制password可查
  //用assert替下面的抛出错误
  assert(user, 422, '用户不存在')  //assert(不抛错的条件，状态码，抛出错误信息)  不符合条件即抛错
  // if(!user){
  //   ctx.status=422
  //   ctx.body = { message: '用户不存在' }
  //   return
  // } 
  //2.校验秘密
  //compareSync(前端传入的,数据库存储的)
  let isValid = bcrypt.compareSync(password, user.password)
  assert(isValid, 422, '密码错误')
  // if (!isValid) {
  //   ctx.status = 422
  //   ctx.body = { message: '密码错误' }
  //   return
  // }
  //3.返回token
  const jwt=require('jsonwebtoken')
  const token=jwt.sign( {id:user._id} , ctx.state.secret)
  ctx.body=token
})

router.use('/upload', authMiddleware, upload.routes())

//链式按序处理，所以挂在rea.Model应在rest.routes()之前，以使用Model模型
// router.use('/rest/:source', rest.routes())
router.use('/rest/:source', authMiddleware, async (ctx, next) => {
        //每次请求接口都要调用，封装到中间件内,ctx.Model表示给请求参数挂在一个model属性，否则单独let model=require(`../models/${modelName}`) 后面rest.routes()方法访问不到
        let modelName = require('inflection').classify(ctx.params.source)
        ctx.Model = require(`../models/${modelName}`)
        await next()
    },rest.routes())  


module.exports=router
