<template>
  <div>
    <Topbar></Topbar>
    <Nav></Nav>
    <router-view :key="$route.path"></router-view>
  </div>
</template>
<script>
import Topbar from '../components/Topbar';
import Nav from '../components/Nav';
export default {
  components:{Topbar,Nav},
  data(){
    return{

    }
  }
}
</script>
<style lang="scss">

</style>
