<template>
  <div>
    <el-button type="small" @click="contents.push({})">
        <i class="el-icon-plus"></i>增加</el-button>
    <el-row type="flex" style="flex-wrap:wrap">
        <el-col :md="12" v-for="(item,i) in contents" :key="i">
            <el-form-item label="英雄">
                <el-select v-model="item.hero" placeholder="请选择">
                    <el-option v-for="item in heros" :key="item._id" :label="item.name" :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="描述">
                <el-input style="margin-top:1rem" v-model="item.description" type="textarea" :rows="4" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="remove(i)" size="small" type="danger">删除该拍档 </el-button>
            </el-form-item>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props:['contents','heros'],
  data(){
    return{
       
    }
  },
  methods:{
    remove(index){
      this.contents.splice(index,1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
