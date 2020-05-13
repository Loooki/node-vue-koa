<template>
    <div class="about">
        <h1>{{id?'编辑':'新建'}}管理员</h1>
        <el-form label-width="100px" @submit.native.prevent="save">
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="model.password"></el-input>
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
        props: ['id'], //接收路由参数，this.$toute.params.id效果一致
        data() {
            return {
                model: {}
            }
        },
        created() {
            this.id && this.fetch()
        },
        methods: {
            async save() { //save分为新建保存和更改保存，新建用post，更改用put
                if (this.id) {
                    await this.$http.put(`rest/adminuser/${this.id}`, this.model)
                    this.$message({
                        type: 'success',
                        message: '更改成功'
                    })
                } else {
                    //请求接口，提交数据
                   
                    await this.$http.post('rest/adminuser/create',this.model)
                   
                    this.$message({
                        type: 'success',
                        message: '保存成功' 
                    }) 
                }
                //跳转页面
                this.$router.push('/admin_users/lists')
            },
            async fetch() {
                let res = await this.$http.get(`rest/adminuser/${this.id}`)
                this.model = res.data
            }
        }
    }
</script>
