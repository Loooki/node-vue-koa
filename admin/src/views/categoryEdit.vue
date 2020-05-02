<template>
  <div class="about">
    <h1>创建分类</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="名称"> 
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item > 
        <el-button type="primary" natibe-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
  
</template> 
<script>
export default {
  data(){
    return{
      model:{}
    }
  },
  methods:{
    save(){
      //请求方法，提交数据
      // this.$http.post()

    }
  }
}
</script>
