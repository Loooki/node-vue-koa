const Koa=require('koa')
const cors=require('koa-cors')
const bodyParser=require('koa-bodyparser')
const static=require('koa-static')
const adminCURD = require('./routes/adminCURD')
const web=require('./routes/web')
const koaBody = require('koa-body')
// const jwt=require('jsonwebtoken')
const Adminuser=require('./models/Adminuser')
// const assert = require('http-assert')

const app = new Koa()

//捕获异常，处理
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        // 响应用户
        ctx.status = error.statusCode || error.status || 500;
        ctx.body = error.message;
        ctx.app.emit('error', error); // 触发应用层级错误事件
    }
});

//上传文件中间件
app.use(koaBody({
  multipart: true,
      formidable: {
          maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
      }
}))

//跨域中间件
app.use(cors())

//静态资源服务中间件
app.use(static(__dirname + '/static'))


//全局设置密钥，用于token生成，第一个参数固定，第二个自定义，实际应配置在环境变量中
app.use(async (ctx,next)=>{
  ctx.state.secret = "hdskfhiowjfnjjkn"
  await next()
})

// //校验token中间件
// app.use(async (ctx,next)=>{
//   // const token=ctx.headers.authorization
//   const token=String(ctx.headers.authorization || '').split(' ').pop()

//   assert(token,401,'请提供token，请先登录')

//   //得到请求头的token,进行解码
//   // let tokenData=jwt.verify(token,ctx.state.secret)
//   let { id }=jwt.verify(token,ctx.state.secret)  //es6解构
//   assert(id,401,'用户名不存在')

//   //数据库中查找用户并挂在到ctx,以便后续路由查找
//   ctx.user=await Adminuser.findById(id)
//   assert(id, 401, '用户名不存在')

//   // console.log(ctx.user)
//   await next()
// })
   
app.use(adminCURD.routes(),adminCURD.allowedMethods())
app.use(web.routes(),web.allowedMethods())



app.on('error', async (err, ctx,next) =>
    console.error('server error', err.message)   
)


app.listen(3000,()=>{
  console.log('http://localhost:3000')
})
