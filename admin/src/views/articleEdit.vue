<template>
    <div class="about">
        <h1>{{id?'编辑':'新建'}}文章</h1>
        <el-form label-width="100px" @submit.native.prevent="save">
            <el-form-item label="所属分类">
                <el-select multiple v-model="model.categories" placeholder="请选择">
                    <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="model.title"></el-input>
            </el-form-item>
            <el-form-item label="详情">
                <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></vue-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>
<script>
    import { VueEditor } from "vue2-editor";
    export default {
        // props:{id:{}},
        props: ['id'], //接收路由参数，this.$toute.params.id效果一致
        components : {VueEditor},
        data() {
            return {
                model: {},
                categories: []
            }
        },
        created() {
            this.id && this.fetch()
            this.getCategories()
        },
        methods: {
            async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
                var formData = new FormData();
                formData.append("file", file);
                let res = await this.$http.post('/upload',formData)
                Editor.insertEmbed(cursorLocation, "image", res.data);
                resetUploader();
            },
            async save() { //save分为新建保存和更改保存，新建用post，更改用put
                if (this.id) {
                    await this.$http.put(`rest/article/${this.id}`, this.model)
                    this.$message({
                        type: 'success',
                        message: '更改成功'
                    })
                } else {
                    //请求接口，提交数据
                    await this.$http.post('rest/article/create',this.model)
                    this.$message({
                        type: 'success',
                        message: '保存成功' 
                    }) 
                }
                //跳转页面
                this.$router.push('/articles/lists')
            },
            async fetch() {
                let res = await this.$http.get(`rest/article/${this.id}`)
                this.model = res.data
            },
            async getCategories() {
                let res = await this.$http.get('rest/category')
                this.categories = res.data
            }
        }
    }
</script>
