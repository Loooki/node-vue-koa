const router = require('koa-router')()

router.prefix('/web')

router.get('/', (ctx) => {
    ctx.body = "web"
})

module.exports = router


