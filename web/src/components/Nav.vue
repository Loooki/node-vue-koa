<template>
  <div class="nav d-flex jc-around bg-primary2 py-3  fs-lg">
    <div class="nav_item active" v-for="item in navLists" :key="item.name">
       <router-link :to="item.name">{{item.text}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      navLists:[
        {
          name:"home",
          text:"首页"
        },
        {
          name:"methods",
          text:"攻略中心"
        },
        {
          name:"events",
          text:"赛事"
        }  
      ]
    }  
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
  .nav{
    a{
      color:map-get($colors,'white');
      text-decoration: none;    
    }
    .nav_item{
      border-bottom:3px solid transparent;
      padding-bottom:0.25rem;
      &.active{
        border-bottom:3px solid #fff;
      }
    }
  }
</style>
