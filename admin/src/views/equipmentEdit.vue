<template>
    <div class="about">
        <h1>{{id?'编辑':'新建'}}物品</h1>
        <el-form label-width="100px" @submit.native.prevent="save1">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="图标">
                <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" :on-success="handleSuccess">
                    <img v-if="model.icon" :src="model.icon" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
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
                model: {},
                // parents:[]
            }
        },
        created() {
            this.id && this.fetch()
            // this.getParent()
        },
        methods: {
            handleSuccess(res) {
            //   console.log(res)
                // this.model.icon=res vue给数据赋值，如果对象为空，不能添加属性直接赋值，用$set
                 this.$set(this.model, 'icon', res)
                //  console.log(this.model)
            },
            async save1() { //save分为新建保存和更改保存，新建用post，更改用put
                if (this.id) {
                    await this.$http.put(`rest/equipment/${this.id}`, this.model)
                    this.$message({
                        type: 'success',
                        message: '更改成功'
                    })
                } else {
                    //请求接口，提交数据
                    await this.$http.post('rest/equipment/create', this.model)
                    this.$message({
                        type: 'success',
                        message: '保存成功'
                    })
                }
                //跳转页面
                this.$router.push('/equipments/lists')
            },
            async fetch() {
                let res = await this.$http.get(`rest/equipment/${this.id}`)
                this.model = res.data
            }

        }
    }

</script>
