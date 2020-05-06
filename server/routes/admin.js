const router=require('koa-router')()
const category=require('./admin/category.js')

router.prefix('/admin/api')

router.get('/',(ctx)=>{
  ctx.body="admin"
})
router.use('/category',category.routes())

module.exports=router
