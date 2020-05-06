const Koa=require('koa')
const cors=require('koa-cors')
const bodyParser=require('koa-bodyparser')
const static=require('koa-static')
// const admin=require('./routes/admin')
const adminCURD = require('./routes/adminCURD')
const web=require('./routes/web')
// const DB=require('./plugins/db.js')

const app = new Koa()

//配置post bodyparser中间件
app.use(bodyParser());

//跨域中间件
app.use(cors())
//静态资源服务中间件
// app.use(static(__dirname + '/static'))

//数据库连接中间件
// app.use(DB)

app.use(adminCURD.routes(),adminCURD.allowedMethods())
// app.use(admin.routes(),admin.allowedMethods())
app.use(web.routes(),web.allowedMethods())

app.listen(3000,()=>{
  console.log('http://localhost:3000')
})
