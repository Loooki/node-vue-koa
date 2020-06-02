<template>
    <div class="about">
        <h1>{{id?'编辑':'新建'}}物品</h1>
        <el-form label-width="100px" @submit.native.prevent="save1">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="图标">
                <uploadImage @getFromChild="getValue" :icon="model.icon"></uploadImage>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>
<script>
    import uploadImage from '../components/uploadImage'
    export default {
        // props:{id:{}},
        components:{uploadImage},
        props: ['id'], //接收路由参数，this.$toute.params.id效果一致
        data() {
            return {
                model: {
                    icon:''
                },
            }
        },
        created() {
            this.id && this.fetch()
        },
        methods: {
            getValue(val){
                this.$set(this.model, 'icon', val)
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
