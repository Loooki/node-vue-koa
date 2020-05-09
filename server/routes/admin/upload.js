const router = require('koa-router')()
const mongoose = require('../../plugins/db.js')

const fs=require('fs')
const path=require('path')


//连接数据库
mongoose()
router.post('/', async (ctx) => {
  // 上传单个文件
  const file = ctx.request.files.file; // 获取上传文件
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  let filePath = path.join(__dirname, '../../static/upload') + `/${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);

  file.url = `http://localhost:3000/upload/${file.name}`
   ctx.body = file.url;
})


module.exports=router
