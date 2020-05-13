const mongoose=require('mongoose')
let AdminUserSchema=new mongoose.Schema({
  username:{ 
    type:String,
    // required:true,
    // minlength:8,
    // maxlength:12
  },
  password:{ 
    type:String,
    required: true,
    select:false, //密码不可选，避免列表页重新编辑保存，重复散列后密码改变
    set(val){  //加密
      return require('bcrypt').hashSync(val,10)  //密码，散列指数10-12
    }
  },
  
})

module.exports = mongoose.model('AdminUser', AdminUserSchema)
