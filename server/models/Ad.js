const mongoose=require('mongoose')
let AdSchema=new mongoose.Schema({
  name:{ type:String},
  items:[{
    url:{type:String},
    image:{type:String}
  }]
})

module.exports = mongoose.model('Ad', AdSchema)
