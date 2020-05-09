const mongoose=require('mongoose')
let EquipmentSchema=new mongoose.Schema({
  name:{
    type:String
  },
  icon: { type: String }
})

module.exports = mongoose.model('Equipment', EquipmentSchema)
