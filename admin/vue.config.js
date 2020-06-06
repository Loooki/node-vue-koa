module.exports={
  outputDir:__dirname+"/../server/admin", //build后文件输出的位置
  publicPath: process.env.NODE_ENV === 'production' ?
      '/admin/' :
      '/'
}
