<template>
<div>  
  <div class="d-flex jc-between px-4 pt-4 pb-2">
    <div class="news_title fs-md pb-1" v-for="(item,n) in titles" :key="n">{{item}}</div>
  </div>
  <div v-swiper:mySwiper="swiperOption" class="mx-4">
      <div class="swiper-wrapper">
          <div class="swiper-slide  heroswiper d-flex jc-between text-center flex-wrap" :key="content.id" v-for="content in contents">
            <div class="herocontent py-2 pl-3" :key="item.id" v-for="item in content.contents">
              <a href="">
                  <img :src="item.src" alt="">
                  <div>{{item.name}}</div>
              </a>
            </div>
          </div>
      </div>
      <!-- <div class="swiper-pagination"></div> -->
  </div>
</div> 
</template>
<script>
export default {
  props:['contents','titles'],
  data () {
    return {
      swiperOption: {
        pagination: {
        el: '.swiper-pagination'
        },
        loop:true,
        // autoplay:true
      }
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.mySwiper)
    // // this.mySwiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="scss">
 .news_title{
   border-bottom:3px solid transparent;
   &.active{
     color:map-get($colors,'primary');
     border-bottom:3px solid map-get($colors,'primary');
   }
 }
 .heroswiper{
   .herocontent{
    width:20%;
    img{
      width:100%
      }
    }
    .herocontent:nth-child(5n+1){
      margin-left:-1rem;
    }
    // &:nth-child(5n+1){
    //   margin-left:-1rem;
    // }
 } 
</style>
