const router = require('koa-router')()
const mongoose=require('../../plugins/db.js')


//连接数据库
mongoose()
//获取列表接口
router.get('/',async (ctx,next)=>{
  //每次请求接口都要调用，封装到中间件内
  // let modelName = require('inflection').classify(ctx.params.source)
  // const Model = require(`../../models/${modelName}`)
  let queryOptions={}
  if(ctx.Model.modelName == 'Category'){
    queryOptions.populate='parent'
  } 
  let tableDatas = await ctx.Model.find().setOptions(queryOptions).limit(20) //limit用于分页
  ctx.body = tableDatas
})
//编辑分类接口
router.get('/:id', async (ctx, next) => {
    let data = await ctx.Model.findById(ctx.params.id)
    ctx.body = data
})

//更新分类详情接口
router.put('/:id', async (ctx, next) => {
    let data = await ctx.Model.findByIdAndUpdate(ctx.params.id,ctx.request.body) 
    ctx.body = data
})
//删除分类详情
router.delete('/:id', async (ctx, next) => {
    await ctx.Model.findByIdAndDelete(ctx.params.id,ctx.request.body) 
    ctx.body={success:true}
})
//创建分类接口
router.post('/:id', async (ctx, next) => {
  //向数据库创建数据
  let data = await ctx.Model.create(ctx.request.body)
  // //获取表单提交的数据，响应给前端
  // console.log(data)
  ctx.body = data
  // console.log(ctx.body)
})



module.exports = router
