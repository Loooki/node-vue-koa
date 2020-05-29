<template>
    <div class="about">
        <h1>{{id?'编辑':'新建'}}英雄</h1>
        <el-form label-width="100px" @submit.native.prevent="save">
            <el-tabs value="basic" type="border-card">
                <el-tab-pane label="基本信息" name="basic">
                    <el-form-item label="名称">
                        <el-input v-model="model.name"></el-input>
                    </el-form-item>
                    <el-form-item label="称号">
                        <el-input v-model="model.title"></el-input>
                    </el-form-item>
                    <el-form-item label="分类">
                        <el-select multiple v-model="model.categories" placeholder="请选择">
                            <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="难度">
                        <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.difficult"></el-rate>
                    </el-form-item>
                    <el-form-item label="技能">
                        <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.skill"></el-rate>
                    </el-form-item>
                    <el-form-item label="攻击">
                        <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.attack"></el-rate>
                    </el-form-item>
                    <el-form-item label="生存">
                        <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.survival"></el-rate>
                    </el-form-item>
                    <el-form-item label="顺风出装">
                        <el-select multiple v-model="model.equipments1" placeholder="请选择">
                            <el-option v-for="item in equipments" :key="item._id" :label="item.name" :value="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="逆风出装">
                        <el-select multiple v-model="model.equipments2" placeholder="请选择">
                            <el-option v-for="item in equipments" :key="item._id" :label="item.name" :value="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="头像">
                        <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" 
                        :headers="getAuthHeaders()"
                        :on-success="handleSuccess">
                            <img v-if="model.avator" :src="model.avator" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="背景图">
                        <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" 
                        :headers="getAuthHeaders()"
                        :on-success="res => $set(model,'banner',res)">
                            <img v-if="model.banner" :src="model.banner" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="使用技巧">
                        <el-input type="textarea" v-model="model.usageTips" :rows="4" aria-placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item label="对抗技巧">
                        <el-input type="textarea" v-model="model.battleTips" :rows="4" aria-placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item label="团战思路">
                        <el-input type="textarea" v-model="model.teamTips" :rows="4" aria-placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item label="最佳搭档">
                        <el-select v-model="model.partners.hero" placeholder="请选择">
                            <el-option v-for="item in heroes" :key="item._id" :label="item.name" :value="item._id">
                            </el-option>
                        </el-select>
                        <el-input style="margin-top:1rem" v-model="model.partners.description" type="textarea" :rows="4" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-tab-pane>
                <el-tab-pane label="技能" name="skills">
                    <el-button size="small" @click="model.skills.push({})"><i class="el-icon-plus"></i>增加技能</el-button>
                    <el-row type="flex" style="flex-wrap:wrap">
                        <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
                            <el-form-item label="名称">
                                <el-input v-model="item.name"></el-input>
                            </el-form-item>
                            <el-form-item label="图标">
                                <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" 
                                :headers="getAuthHeaders()"
                                :on-success="res=>{$set(item, 'icon', res)}">
                                    <img v-if="item.icon" :src="item.icon" class="avatar1">
                                    <i v-else class="el-icon-plus avatar-uploader-icon1"></i>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label="技能描述">
                                <el-input type="textarea" v-model="item.description"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="removeSkill(i)" size="small" type="danger">删除该技能 </el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>

                </el-tab-pane>
            </el-tabs>

            <el-form-item>
                <el-button style="margin-top:1rem" type="primary" native-type="submit">保存</el-button>
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
                model: {
                    scores: {
                        difficult: 0
                    },
                    partners: [],
                    skills: []
                },
                categories: [],
                equipments: [],
                heroes: []
                // parents:[]
            }
        },
        created() {
            this.id && this.fetch()
            this.fetchCategories()
            this.fetchEquipments()
            this.fetchHeroes()
            
        },
        methods: {
            handleSuccess(res) {
                // this.model.icon=res vue给数据赋值，如果对象为空，不能添加属性直接赋值，用$set
                this.$set(this.model, 'avator', res)
            },
            async save() { //save分为新建保存和更改保存，新建用post，更改用put
                if (this.id) {
                    await this.$http.put(`rest/hero/${this.id}`, this.model)
                    this.$message({
                        type: 'success',
                        message: '更改成功'
                    })
                    console.log(this.model)
                } else {
                    //请求接口，提交数据
                    await this.$http.post('rest/hero/create', this.model)
                    this.$message({
                        type: 'success',
                        message: '保存成功'
                    })
                }
                //跳转页面
                this.$router.push('/heroes/lists')
            },
            async fetch() {
                let res = await this.$http.get(`rest/hero/${this.id}`)
                // this.model = res.data
                this.model = { ...this.model, ...res.data } //避免this.model的值被返回值覆盖，找不到已写入的对象
            },
            async fetchCategories() {
                let res = await this.$http.get(`rest/category`)
                this.categories = res.data
            },
            async fetchEquipments() {
                let res = await this.$http.get(`rest/equipment`)
                this.equipments = res.data
            },
            async fetchHeroes() {
                let res = await this.$http.get(`rest/hero`)
                this.heroes = res.data
            },
            async removeSkill(index){
                this.model.skills.splice(index,1)
            }

        }
    }

</script>
<style scoped>
    .avatar-uploader-icon1 {
        font-size: 28px;
        color: #8c939d;
        width: 5rem;
        height: 5rem;
        line-height: 5rem;
        text-align: center;
    }
    .avatar1 {
        width: 5rem;
        height: 5rem;
        display: block;
    }

</style>
