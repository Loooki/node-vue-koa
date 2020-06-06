<template>
    <div class="about">
        <h1>{{id?'编辑':'新建'}}广告位</h1>
        <el-form label-width="100px" @submit.native.prevent="save">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="广告详情">
                <el-button size="small" @click="model.items.push({})"><i class="el-icon-plus"></i> 新增广告</el-button>
                <el-row  :gutter="20">
                    <el-col class="border" style="" :span="12"  v-for="(item ,i) in model.items" :key="i">
                        
                        <el-form-item label="链接" style="margin-bottom:1rem">
                            <el-input v-model="item.url"></el-input>
                        </el-form-item>
                        <el-form-item label="图片">
                            <!-- <el-upload 
                            class="avatar-uploader"
                            :action="$http.defaults.baseURL+'/upload'"
                            :headers="getAuthHeaders()"
                            :on-success="res => $set(item,'image',res)">
                            <img v-if="item.image" :src="item.image" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload> -->
                        <uploadImage @getFromChild="getADValue" :icon="item.image" :itemIndex="i"></uploadImage>
                        </el-form-item>
                        <el-form-item label=" ">
                            <el-button type="danger" size="small" @click="model.items.splice(i,1)">删除</el-button>
                        </el-form-item>  
                    </el-col>
                </el-row>
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
        components:{uploadImage},
        props: ['id'], //接收路由参数，this.$toute.params.id效果一致
        data() {
            return {
                model: {
                    items:[]
                }
            }
        },
        created() {
            this.id && this.fetch()
        },
        methods: {
            getADValue(data){
                this.model.items[data.index].image=data.val
                // this.model.items.splice(data.index, 1, data.val)
                console.log(this.model)      
            },
            async save() { //save分为新建保存和更改保存，新建用post，更改用put
                if (this.id) {
                    await this.$http.put(`rest/ad/${this.id}`, this.model)
                    this.$message({
                        type: 'success',
                        message: '更改成功'
                    })
                } else {
                    //请求接口，提交数据
                    await this.$http.post('rest/ad/create',this.model)
                    this.$message({
                        type: 'success',
                        message: '保存成功' 
                    }) 
                }
                //跳转页面
                this.$router.push('/ads/lists')
            },
            async fetch() {
                let res = await this.$http.get(`rest/ad/${this.id}`)
                this.model = res.data
            }
        }
    }
</script>
<style scoped>
    .border{
        margin-bottom:1rem;
    }
</style>
