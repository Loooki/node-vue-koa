<template>
  <div>
    <h1>物品</h1>
    <el-table :data="tableDatas">
      <el-table-column prop="_id" label="ID" width="200"> </el-table-column>
      <el-table-column prop="name" label="物品名称" > </el-table-column>
      <el-table-column prop="icon" label="物品图片"> 
        <template slot-scope="scope">
          <img :src="scope.row.icon" alt="" height="100">
        </template>
      </el-table-column>   
      <el-table-column fixed="right" label="操作" width="188">
          <template slot-scope="scope">
              <el-button @click="$router.push(`/equipments/edit/${scope.row._id}`)" type="primary" size="small">编辑</el-button>
              <el-button @click="remove(scope.row)" type="primary" size="small">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
    <el-pagination :page-sizes="pageSizes" :current-page="pageNum" :page-size="pageSize" @size-change="sizeChange" @current-change="currentChange" background layout="total, prev, pager, sizes, next" :total="Total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableDatas:[],
      datas:[],
      pageSize:10, //每页展示数据条数     
      pageNum:1 ,//当前页数
      Total:0, //总数据条数
      pageSizes:[10, 20, 30, 40, 50, 100],
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
       this.datas=tableDatas.data
       //数据量小，前端分页
       this.tableDatas=this.datas.slice((this.pageNum-1)*this.pageSize,(this.pageNum*this.pageSize))
       this.Total= this.datas.length
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
    },
    sizeChange(val){
    this.pageSize=val
    this.fetch()
    },
    currentChange(val){
    this.pageNum=val
    this.fetch()
    }
  }
}
</script>
