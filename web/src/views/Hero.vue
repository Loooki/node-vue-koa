<template>
  <div class="page-hero" v-if="model">
    <div class="bar topbar bg-black py-2 px-4 fs-2 text-white d-flex ai-center ">
        <img src="../assets/images/logo.png" alt="">
        <div class="px-2 flex-1">
            <span class="fs-s px-2">王者荣耀</span>
            <span class="fs-s pl-1">攻略战</span>
        </div>
        <router-link class="text-white fs-s" to="/">更多英雄 &gt;</router-link>
    </div>
    <div class="info">
      <img :src="model.banner" alt="">
      <div class="mask text-white">
        <div class="content px-3 strong fs-s">
          <div class="pb-1">{{model.title}}</div>
          <div class="fs-xl pb-1">{{model.name}}</div>
          <div class="pb-1">{{model.categories.map(cat=>cat.name).join('/')}}</div>
          <div class="scores d-flex jc-between">
            <div class="d-flex ai-center">
              <span>难度<i class="icon fs-xs mx-2">{{model.scores.difficult}}</i></span> 
              <span>技能<i class="icon fs-xs mx-2">{{model.scores.skill}}</i></span>
              <span>攻击<i class="icon fs-xs mx-2">{{model.scores.attack}}</i></span>
              <span>生存<i class="icon fs-xs mx-2">{{model.scores.survival}}</i></span>
            </div>
            <router-link tag="div" to="/" class="skins text-gray">皮肤：&gt;
            </router-link>
          </div> 
        </div>
      </div>
    </div>
    <div class="body">
      <div class="px-3 bg-white">
        <div class="d-flex ai-center jc-around py-2 border bg-white">
          <div class="cate text-black fs-md py-1" :class="{ active : active === n }" v-for="(item,n) in showLists" :key="n" @click="change(n)">{{item}}</div>
          </div>
      </div>
      <swiper ref='mySwiper' :option="swiperOptions" @slideChangeTransitionEnd="slide">
        <swiper-slide>
          <div class="hero_relate bg-white px-3">
            <div class="d-flex pt-2 jc-between">
              <router-link to="/" tag="div" class="tag tag1 text-center py-2 fs-md">
              <img src="../assets/images/icon_06.png" alt="">
              英雄视频介绍</router-link>
              <router-link to="/" tag="div" class="tag tag2 text-center py-2 fs-md">
              <img src="../assets/images/icon_07.png" alt="">
              一图识英雄</router-link>
            </div>
            <div class="skills pt-3">
              <div class="d-flex ai-center jc-between my-4">
                <div class="px-3" v-for="(item,i) in model.skills" :key="i" @click="n = i;activeIcon = i">
                  <img :src="item.icon" :class="{ active : activeIcon === i }" alt="">
                </div>
              </div>
              <div>
                <h3>{{model.skills[n].name}}</h3>
                <p>{{model.skills[n].description}}</p>
              </div>
            </div>
          </div>
          <div class="equipment bg-white px-3 mt-3 pt-2">
            <h3 class="fs-xl">加点建议</h3>
            <h3 class="fs-xl">出装推荐</h3>
            <div class="fs-xl">顺风出装</div>
            <div class="d-flex ai-center jc-between pt-3 border">
              <div class="px-1 text-center" v-for="item in model.equipments1" :key="item._id"> 
                <img :src="item.icon" alt="">
                <div class="py-2 fs-s">{{item.name}}</div>
              </div>
            </div>
            <div class="pt-2 fs-xl">逆风出装</div>
            <div class="d-flex ai-center jc-between border pt-3">
              <div class="px-1 text-center" v-for="item in model.equipments2" :key="item._id">
                <img :src="item.icon" alt="">
                <p class="py-2 fs-s">{{item.name}}</p>
              </div>
            </div>
          </div>
          <div class="tips bg-white px-3 mt-3 pt-1">
            <h3 class="fs-xl">使用技巧</h3>
            <p class="pb-2">{{model.usageTips}}</p>
          </div>
          <div class="tips bg-white px-3 pt-1">
            <h3 class="fs-xl">对抗技巧</h3>
            <p class="pb-2">{{model.battleTips}}</p>
          </div>
          <div class="tips bg-white px-3 pt-1">
            <h3 class="fs-xl">团战技巧</h3>
            <p class="pb-2">{{model.teamTips}}</p>
          </div>
          <div class="relationShips bg-white px-3 pt-2">
            <h3 class="fs-xl">英雄关系</h3>
            <p class="fs-lg">最佳搭档</p>
            <!-- 子组件获取父组件异步加载的数据渲染失败 -->
            <!-- <HeroShips :relationHeroes="partners"></HeroShips> -->
            <div class="pb-3 border">
              <div class="d-flex pt-3" v-for="(item,i) in model.partners" :key="i">
                <div>
                    <img :src="item.hero.avator" alt="">
                </div>
                <div class="des pl-3">{{item.description}}</div>
              </div>
            </div>
            <p class="fs-lg">被谁克制</p>
            <div class="pb-3 border">
                <div class="d-flex pt-3" v-for="(item,i) in model.opponents" :key="i">
                    <div>
                        <img :src="item.hero.avator" alt="">
                    </div>
                    <div class="des pl-3">{{item.description}}</div>
                </div>
            </div>
            <p class="fs-lg">克制谁</p>
            <div class="pb-3 border">
                <div class="d-flex pt-3" v-for="(item,i) in model.controllers" :key="i">
                    <div>
                        <img :src="item.hero.avator" alt="">
                    </div>
                    <div class="des pl-3">{{item.description}}</div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </swiper-slide>
        <swiper-slide>
            2
        </swiper-slide>
      </swiper>
    </div> 
  </div>
</template>
<script>
import dayjs from 'dayjs'
// import HeroShips from '../components/HeroShips'
export default {
  // components:{ HeroShips },
  props:['id'],
  filters:{
    date(val){
      return dayjs(val).format('YYYY-MM-DD')
    }
  },
  data(){
    return{
      model:null, 
      showLists:['英雄初识','进阶攻略'],
      active:0,
      swiperOptions:{
        loop:false,
        autoHeight:true
      },
      n:0,
      activeIcon:0,
      partners:[]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods:{
    async fetch(){
      const res=await this.$http.get(`heroes/${this.id}`)
      this.model={...res.data}
      console.log(this.model)
    },
    change(n){
      this.active=n
      this.swiper.slideTo(n, 1000, false)
    },
    slide(){
      this.active=this.swiper.activeIndex
    }
  },
  created(){
    this.fetch()
  }
}
</script>
<style lang="scss">
  .page-hero{
    .info{
      position:relative;
      height:14.6923rem;
      img{
        width:100%;
        height:100%;
      }
      .mask{
        position:absolute;
        bottom:0;
        width: 100%;
        height:100%;
        background-image:linear-gradient(to bottom,rgba(255,255,255,0.1) 0%,rgba(0,0,0,1) 100%);
        background-image:-webkit-linear-gradient(top,rgba(255,255,255,0.1) 0%,rgba(0,0,0,1) 100%);
        background-image:-o-linear-gradient(top,rgba(255,255,255,0.1) 0%,rgba(0,0,0,1) 100%);
        background-image:-moz-linear-gradient(top,rgba(255,255,255,0.1) 0%,rgba(0,0,0,1) 100%);
        .content{
          margin-top:8rem;
          width:100%;
          .skins{
            font-weight:400;
          }
          .scores{
            .icon{
              display:inline-block;
              width:1rem;
              height:1rem;
              line-height:1rem;
              border-radius: 0.5rem;
              text-align:center;
              font-weight:400;
              background-color:map-get($colors,'primary')
            }
          }
        }
      }
    }
    .body{
      .cate{
        border-bottom:2px solid transparent;
        &.active{
          border-bottom:2px solid map-get($colors,'primary');
          color:map-get($colors,'primary');
        }
      }
      .hero_relate{
        .tag{
          width:48%;
          border:1px solid map-get($colors,'border');
          border-radius:0.6154rem;
          background-color:#fcfcfc;
          img{
            width:1.5385rem;
            height:1.5385rem;
            vertical-align: middle;
            margin-right:0.5rem;
          }
        }
        .skills{
          img{
            width:100%;
            &.active{
              border:3px solid map-get($colors,'primary');
              border-radius:50%;
            }
          }
        }
      }
      .equipment{
        img{
          width:3.6923rem;
          height:3.6923rem;
          border-radius:1.8462rem;
        }
      }
      .relationShips{
        img{
          width:3.6923rem;
          height:3.6923rem;
        }
        .des{
          line-height:1.5rem;
        }
      }
    }
  }
</style>
