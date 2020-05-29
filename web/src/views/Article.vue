<template>
  <div class="page-article" v-if="model">
    <div class="d-flex p-2 border">
      <div class="iconfont icon-back"></div>
      <strong class="flex-1 fs-lg">{{model.title}}</strong>
      <div class="text-gray fs-xs">{{model.date | date}}</div>
    </div>
    <div v-html="model.body" class="px-3 body"></div>
    <div class="related">
      <div class="d-flex">
        <div class="iconfont icon-Book"></div>
        <strong>相关资讯</strong>
      </div>
      <div>
        <router-link class="py-2" :to="`/articles/${item._id}`" 
        v-for="item in model.related" tag="div"
        :key="item._id">{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  props:['id'],
  filters:{
    date(val){
      return dayjs(val).format('YYYY-MM-DD')
    }
  },
  data(){
    return{
      model:{}
    }
  },
  methods:{
    async fetch(){
      const res=await this.$http.get(`articles/${this.id}`)
      this.model={...res.data}
    }
  },
  created(){
    this.fetch()
  }
  // watch:{ //或者可以在路由页面添加:key="$toute.path"
  //    //文章页传入的id值变化后，重新加载，如果不坚挺文章组件已经存在，不会重新刷新数据，页面内的关联文章跳转失败
  //   id(){
  //     this.fetch()
  //   }
  // }
  // id:'fetch'   //简写形式
}
</script>
<style lang="scss">
  .page-article{
    padding-bottom:10rem;
    .body{
      img{
        max-width:100%;
        height:auto;
      }
      iframe{
        width:100%;
        height:auto;
      }
    }
  }
</style>
