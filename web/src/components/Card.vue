<template>
  <div class="card pt-3"> 
    <div class="card-header border d-flex  ai-center  mx-4 py-3">   
      <i class="iconfont" :class="`icon-${info.icon}`"></i>
      <div class="flex-1 fs-xl ml-1">{{info.title}}</div>
      <i class="iconfont icon-menu"></i>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:['info']
}
</script>
<style lang="scss">
  // .card-header{
  //   border-bottom:1x solid #ddd;
  // }
</style>
