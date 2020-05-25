<template>
  <div class="bar topbar bg-black py-2 px-4 fs-2 text-white d-flex ai-center ">
      <img src="../assets/images/logo.png" alt="">
      <div class="px-2 flex-1">
          <div class="fs-md">王者荣耀</div>
          <div class="fs-s text-gray">团队成就更多</div>
      </div>
      <button type="button" class="bg-primary text-black ">立即下载</button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
    .topbar {
        position:sticky;  //不支持的话改用fixed
        top:0;
        z-index:999;
        img {
            width: 2.3077rem;
            height: 2.3077rem;
        }

        button {
            border: none;
            border-radius: 0.0769rem;
            padding: 0.2rem 0.5rem;
            font-size: map-get($font-sizes, 's') * $base-font-size
        }
    }
</style>
