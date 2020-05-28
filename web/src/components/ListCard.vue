<template>
<div>
  <my-card :info="info">
    <div class="d-flex jc-between px-4 pt-4 pb-2">
        <div class="news_title fs-md pb-1" :class="{active: active===n}" v-for="(item,n) in titles" :key="n" @click="change(n)">{{item}}</div>
    </div>
    <div v-swiper:mySwiper="swiperOption" class="mx-4" ref="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide  d-flex  text-center flex-wrap" :key="content.categoryName" v-for="content in contents">
                <!-- 具名插槽，将数据回传 -->
                <slot name="items" :datas="content"></slot>
            </div>
        </div>
    </div>

 </my-card>
</div>
 
</template>
<script>
export default {
  props:['info','titles','contents'],
  data(){
    const _this=this
    return{
      active:0,
      swiperOption: {
        loop:false,
        autoHeight:true,
        on:{
          slideChangeTransitionEnd(){
            // console.log(this.activeIndex)
            _this.active=this.activeIndex
          }
        }
      }
    }
  },
  methods:{
   change(n){
     this.active=n
     this.mySwiper.slideTo(n, 1000, false)
   }
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
