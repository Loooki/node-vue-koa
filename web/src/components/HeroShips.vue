<template>
  <div class="d-flex"  v-for="(item,i) in relationHeroes" :key="i">
    <div>
      <img :src="item.hero.avator" alt="">
    </div>
    <div class="des">{{item.description}}</div>
  </div>
</template>
<script>
export default {
  props:{
    relationHeroes:{
      type:Array,
      default(){
        return{
           hero:{},
           description:''
        }
      }
    }
  },
  data(){
    return{}
  },
  created(){
    console.log(this.relationHeroes)
  },
  // watch:{
  //   relationHeroes:{
  //     handler(val){
  //       this.lists=val
  //       console.log(val)  
  //       this.updateData()
  //     },
  //     deep:true
  //   }
  // },
  // methods:{
  //   updateData(){
  //     return this.lists
  //   }
  // }
}
</script>
<style lang="scss">
  
</style>
