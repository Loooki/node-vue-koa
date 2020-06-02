const router = require('koa-router')()
const qiniu = require('qiniu')

const accessKey = "pBwr0R2_lIzQMFilZL91rYWt6oIFJewumAhouk8w"
const secretKey = "zxcIogRY6N65xOX0CFcXFZ8mcHCz95akJKj_RQuO"
const bucket = "test01-bucket01"

router.get('/', async (ctx) => {
  let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  let options = {
      scope: bucket,
      expires: 3600 * 2 //token过期时间2小时
  };
  let putPolicy = new qiniu.rs.PutPolicy(options);
  let uploadToken = putPolicy.uploadToken(mac);

  if (uploadToken) {
      ctx.body = uploadToken
  } else {
      ctx.body = 'err'
  }
  
})


module.exports=router
