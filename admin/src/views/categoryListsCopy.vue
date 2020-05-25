<template>
  <div>
    <h1>列表</h1>
    <el-table :data="tableDatas">
      <el-table-column prop="_id" label="ID" width="200"> </el-table-column>
      <el-table-column prop="name" label="分类名称" > </el-table-column>
      <el-table-column prop="parent.name" label="上级分类" > </el-table-column>
      <el-table-column fixed="right" label="操作" width="188">
          <template slot-scope="scope">
              <el-button @click="$router.push(`/categories/edit/${scope.row._id}`)" type="primary" size="small">编辑</el-button>
              <el-button @click="remove(scope.row)" type="primary" size="small">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
    <el-pagination 
    :page-sizes="pageSizes"
    :current-page="pageNum"
    :page-size="pageSize"
    @size-change="sizeChange"
    @current-change="currentChange"
    background layout="total, prev, pager, sizes, next" :total="Total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableDatas:[],
      datas:[],
      Total:0, //总数据条数
      pageSizes:[10, 20, 30, 40, 50, 100],
      formPage:{
        pageSize:10, //每页展示数据条数
        pageNum:1 //当前页数
      }  
    }
  },
  created(){
    //获取列表数据
    this.fetch(this.formPage)
  },
  methods:{
    //获取列表数据，后端分页
    async fetch(obj){
       let tableDatas= await this.$http.post('/rest/category',obj)
       this.datas=tableDatas.data
       this.Total= this.datas.length
       this.tableDatas=tableDatas.data
    },
    async remove(row){
      this.$confirm(`是否要删除分类"${row.name}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
        }).then(async() => {
          await this.$http.delete(`rest/category/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch(this.formPage)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
        });
      });  
    },
    sizeChange(val){
      this.formPage.pageSize=val
      this.fetch(this.formPage)
      this.formPage.pageNum=1
    },
    currentChange(val){
      this.formPage.pageNum=val
      this.fetch(this.formPage)
    }
  }
}
</script>
