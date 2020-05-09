const router=require('koa-router')()
const rest=require('./admin/rest.js')
const upload = require('./admin/upload.js')
// const koaBody = require('koa-body')

router.prefix('/admin/api')

router.get('/',(ctx,next)=>{
  ctx.body="admin"
})
router.use('/upload',upload.routes())

//链式按序处理，所以挂在rea.Model应在rest.routes()之前，以使用Model模型
// router.use('/rest/:source', rest.routes())
router.use('/rest/:source', async (ctx, next) => {
        //每次请求接口都要调用，封装到中间件内,ctx.Model表示给请求参数挂在一个model属性，否则单独let model=require(`../models/${modelName}`) 后面rest.routes()方法访问不到
        let modelName = require('inflection').classify(ctx.params.source)
        ctx.Model = require(`../models/${modelName}`)
        await next()
    },rest.routes())  


module.exports=router
