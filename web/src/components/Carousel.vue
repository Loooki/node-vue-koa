<template>
  <swiper :options="swiperOption">
    <swiper-slide :key="banner" v-for="banner in banners">
      <img :src="banner">
    </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
  </swiper> 
</template>
<script>
export default {
  props:['banners'],
  data () {
    return {
      swiperOption: {
        pagination: {
        el: '.swiper-pagination'
        },
        loop:true,
        autoplay:true
      }
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.mySwiper)
    // this.mySwiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="scss" scoped>
  .swiper-slide{
    img{
      width:100%
    }
  }
</style>
