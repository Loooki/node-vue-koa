<template>
  <div>
    <h1>物品</h1>
    <el-table :data="tableDatas">
      <el-table-column prop="_id" label="ID" width="200"> </el-table-column>
      <el-table-column prop="name" label="物品名称" > </el-table-column>
      <el-table-column prop="icon" label="物品图片" height:3rem> </el-table-column>
     
      <el-table-column fixed="right" label="操作" width="188">
          <template slot-scope="scope">
              <el-button @click="$router.push(`/equipments/edit/${scope.row._id}`)" type="primary" size="small">编辑</el-button>
              <el-button @click="remove(scope.row)" type="primary" size="small">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableDatas:[]
    }
  },
  created(){
    //获取列表数据
    this.fetch()
  },
  methods:{
    //获取列表数据
    async fetch(){
       let tableDatas= await this.$http.get('/rest/equipment')
       this.tableDatas=tableDatas.data       
    },
    async remove(row){
      this.$confirm(`是否要删除分类"${row.name}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
        }).then(async() => {
          await this.$http.delete(`rest/equipment/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
        });
      });  
    }
  }
}
</script>
