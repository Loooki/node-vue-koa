const router = require('koa-router')()
const mongoose=require('../../plugins/db.js')
const Category=require('../../models/Category.js')

// router.prefix('/category')

//连接数据库
mongoose()

//获取列表接口
router.get('/',async (ctx,next)=>{
  console.log(ctx.url)
  // let tableDatas = await Category.find().limit(10) //limit用于分页
  let tableDatas = await Category.find().populate('parent').limit(10) //limit用于分页
  // console.log(tableDatas)
  ctx.body = tableDatas
})
//编辑分类接口
router.get('/:id', async (ctx, next) => {
    let data = await Category.findById(ctx.params.id)
    ctx.body = data
})

//更新分类详情接口
router.put('/:id', async (ctx, next) => {
    let data = await Category.findByIdAndUpdate(ctx.params.id,ctx.request.body) 
    ctx.body = data
})
//删除分类详情
router.delete('/:id', async (ctx, next) => {
    await Category.findByIdAndDelete(ctx.params.id,ctx.request.body) 
    ctx.body={success:true}
})
//创建分类接口
router.post('/create', async (ctx, next) => {
  //向数据库创建数据
  let data = await Category.create(ctx.request.body)
  // //获取表单提交的数据，响应给前端
  // console.log(data)
  ctx.body = data
})

module.exports = router
