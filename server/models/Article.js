const mongoose=require('mongoose')
let ArticleSchema=new mongoose.Schema({
  title:{ type:String},
  categories:[{
    type: mongoose.SchemaTypes.ObjectId, ref: "Category"
  }],
  body: { type: String }
})

module.exports = mongoose.model('Article', ArticleSchema)
