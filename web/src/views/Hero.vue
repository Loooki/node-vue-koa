<template>
  <div class="page-hero" v-if="model">
    <div class="bar topbar bg-black py-2 px-4 fs-2 text-white d-flex ai-center ">
        <img src="../assets/images/logo.png" alt="">
        <div class="px-2 flex-1">
            <span class="fs-s px-2">王者荣耀</span>
            <span class="fs-s pl-1">攻略战</span>
        </div>
        <router-link class="text-white fs-s" to="/">更多英雄 &gt;</router-link>
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
      model:null   //添加v-if="model"，否则报错
    }
  },
  methods:{
    async fetch(){
      const res=await this.$http.get(`heroes/${this.id}`)
      this.model={...res.data}
      console.log(this.model)
    }
  },
  created(){
    this.fetch()
  }
}
</script>
<style lang="scss">
  
</style>
