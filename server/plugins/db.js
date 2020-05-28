
module.exports= app =>{ //app为参数
  const mongoose = require('mongoose')

  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-koa', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify :false})

  //将model里面的js文件全部引用一遍
  require('require-all')(__dirname+'/../models')
}
