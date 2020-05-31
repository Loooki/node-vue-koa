const mongoose=require('mongoose')
let HeroSchema=new mongoose.Schema({
  name:{
    type:String
  },
  avator: { type: String },
  banner: { type: String },
  title: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }],
  scores:{
    difficult:{type:Number},
    skill: { type: Number },
    attack: { type: Number },
    survival: { type: Number }
  },
  skins: [{ type: String }],
  skills:[{
    icon: { type: String },
    name :{ type: String },
    description: { type: String },
    cooldown: { type: Number}, //冷却时间
    consume: { type: Number}, //消耗
    }
  ],
  equipments1: [{ type: mongoose.SchemaTypes.ObjectId , ref:"Equipment" }], //关联装备库即可
  equipments2: [{ type: mongoose.SchemaTypes.ObjectId, ref:"Equipment" }],
  usageTips: { type: String },
  battleTips: { type: String },
  teamTips: { type: String },
  partners:[{
    hero:{ type: mongoose.SchemaTypes.ObjectId ,ref : 'Hero'} ,//关联英雄数据库
    description: { type: String }
  }],
  opponents:[{
    hero:{ type: mongoose.SchemaTypes.ObjectId ,ref : 'Hero'} ,//关联英雄数据库
    description: { type: String }
  }],
  controllers:[{
    hero:{ type: mongoose.SchemaTypes.ObjectId ,ref : 'Hero'} ,//关联英雄数据库
    description: { type: String }
  }]
})

module.exports = mongoose.model('Hero', HeroSchema)
