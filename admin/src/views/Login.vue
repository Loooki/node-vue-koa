<template>
  <div class="login_container">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>请登录</span>
        </div>
        <el-form @submit.native.prevent="login">
          <el-form-item label="用户名">
            <el-input v-model="model.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="model.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">登录</el-button>
          </el-form-item>
        </el-form>
    </el-card>
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
    async login(){
      let res = await this.$http.post('/login',this.model)
      console.log(res.data)
      localStorage.token=res.data
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
  .login_container{
    width:30rem;
    margin:5rem auto;
  }
</style>
