<template>
  <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
          <div class="swiper-slide" :key="banner" v-for="banner in banners">
              <img :src="banner">
          </div>
      </div>
      <div class="swiper-pagination"></div>
  </div>
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
