<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}分类</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent" placeholder="请选择">
            <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称"> 
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
  
</template> 
<script>
export default {
  // props:{id:{}},
  props:['id'], //接收路由参数，this.$toute.params.id效果一致
  data(){
    return{
      model:{},
      parents:[]
    }
  },
  created(){
    this.id && this.fetch()
    this.getParent()
  },
  methods:{
    async save(){  //save分为新建保存和更改保存，新建用post，更改用put
      if(this.id){
        await this.$http.put(`rest/category/${this.id}`,this.model)
        this.$message({
        type:'success',
        message:'更改成功'
        })
      }else{
        //请求接口，提交数据
        // this.$http.post('category',this.model).then(()=>{})
        await this.$http.post('rest/category/create',this.model)
        this.$message({
        type:'success',
        message:'保存成功'
      })
      }
      //跳转页面
      this.$router.push('/categories/lists')     
    },
    async fetch(){
      let res=await this.$http.get(`rest/category/${this.id}`) 
      this.model=res.data
    },
    async getParent(){
      let res=await this.$http.get('rest/category')
      this.parents=res.data
    }
  }
}
</script>
