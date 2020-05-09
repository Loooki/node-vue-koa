const Koa=require('koa')
const cors=require('koa-cors')
const bodyParser=require('koa-bodyparser')
const static=require('koa-static')
const adminCURD = require('./routes/adminCURD')
const web=require('./routes/web')
const koaBody = require('koa-body')

const app = new Koa()

//配置post bodyparser中间件
app.use(bodyParser());

//跨域中间件
app.use(cors())
//静态资源服务中间件
app.use(static(__dirname + '/static'))

//数据库连接中间件
// app.use(DB)
app.on('error', (err, ctx) =>
    console.error('server error', err)
)

//上传文件中间件
app.use(koaBody({
  multipart: true,
      formidable: {
          maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
      }
}))

app.use(adminCURD.routes(),adminCURD.allowedMethods())
app.use(web.routes(),web.allowedMethods())

app.listen(3000,()=>{
  console.log('http://localhost:3000')
})
