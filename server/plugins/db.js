
module.exports= app =>{ //app为参数
  const mongoose = require('mongoose')

  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-koa', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify :false})
}
