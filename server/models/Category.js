const mongoose=require('mongoose')
let CategorySchema=new mongoose.Schema({
  name:{
    type:String
  },
  parent:{type:mongoose.SchemaTypes.ObjectId,ref:"Category"}  //指定ref关联模型，此处为自身
})

module.exports = mongoose.model('Category', CategorySchema)
