<template>
<div>  
  <div class="d-flex jc-between px-4 pt-4 pb-2">
    <div class="news_title fs-md pb-1" :class="{active: active===n}" v-for="(item,n) in titles" :key="n" @click="active=n">{{item}}</div>
  </div>
  <div v-swiper:mySwiper="swiperOption" class="ml-4">
      <div class="swiper-wrapper">
          <div class="swiper-slide" :key="content.key" v-for="content in contents">
              <div class="content py-2" :key="i" v-for="(item,i) in content.contents">
                <a href="">[{{item.key}}]{{item.title}}{{item.date}}</a>
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
      active:0,
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
    console.log('Current Swiper instance object', this.mySwiper)
    // this.mySwiper.slideTo(3, 1000, false)
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
</style>
