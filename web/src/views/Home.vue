<template>
  <div class="home">
    <Carousel :banners="bannerLists"></Carousel>
    <!-- nav start -->
    <div class="navicons d-flex bg-white jc-between flex-wrap mt-3 pt-3 text-center fs-xs">
      <div class="navicon_item mb-3" v-for="(item,n) in navs" :key="n">
        <a class="link" href="">
          <i :class="'nav_icon '+item.name"></i>
          <div>{{item.text}}</div>
        </a> 
      </div>
    </div>
    <div class="bar text-center fs-md bg-light py-2" @click="showMore">{{showText}}</div>
    <!-- nav end -->
    <!-- news start -->
    <list-card :info="cardTitles[0]" :contents="news_contents" :titles="news_titles" class="bg-white mt-3">
      <!-- 插槽内容 -->
      <template #items="{datas}">
       <div class="content py-2" style="width:100%" :key="i" v-for="(item,i) in datas.newsLists">
          <router-link :to="`articles/${item._id}`" tag="div" class="d-flex ai-center text-left">
            <div>[{{item.categoryName}}]</div>
            <div class="flex-1 text-overflow">{{item.title}}</div>
            <div>{{item.createdAt | formatDate}}</div>
          </router-link>
       </div>
      </template>
    </list-card>
    <!-- news end -->
    <!-- hero start -->
     <list-card :info="cardTitles[1]" :contents="heroes_contents" :titles="heroes_titles" class="bg-white mt-3 heros">
         <!-- 插槽内容 -->
         <template #items="{datas}">
           <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
             <div class="herocontent p-2 " :key="item._id" v-for="item in datas.heroesLists">
                 <router-link :to="`/heroes/${item._id}`" tag="div">
                     <img :src="item.avator" alt="">
                     <div>{{item.name}}</div>
                 </router-link>
            </div>
           </div>
         </template>
     </list-card>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    <!-- hero send -->
  </div>
</template>
<script>
import Carousel from '../components/Carousel'
export default {
  components:{Carousel},
  data(){
    return{
      bannerLists:[require('../assets/images/1.jpg'), require('../assets/images/2.jpg'), require('../assets/images/3.jpg')],
      showText:"展开",
      navs:[],
      navs1:[
        {name:"icon_news",text:"爆料站"},
        {name:"icon_stroy",text:"故事站"},
        {name:"icon_goodshop",text:"周边商城"},
        {name:"icon_test",text:"体验服"}
      ],
      navs2:[
        {name:"icon_news",text:"爆料站"},
        {name:"icon_stroy",text:"故事站"},
        {name:"icon_goodshop",text:"周边商城"},
        {name:"icon_test",text:"体验服"},
        {name:"icon_new",text:"新人专区"}
      ],
      cardTitles:[
        {
          title:'新闻资讯',
          icon:'Menu'
        },
        {
          title:'英雄列表',
          icon:'-superhero'
        },
        {
          title:'精彩视频',
          icon:'bofang'
        },
        {
          title:'图文攻略',
          icon:'Book'
        },
      ],
      news_titles:[],
      heroes_titles:[],
      news_contents:[],
      heroes_contents:[]
    } 
  },
  mounted() {
    this.navs=this.navs1
  },
  created(){
    this.getNewsLists()
    this.getHeroesLists()
  },
  methods:{
    showMore(){
      if(this.showText === "展开"){
        this.navs=this.navs2
        this.showText="收起"
      }else{
        this.navs=this.navs1
        this.showText="展开"
      }
    },
    async getNewsLists(){
      let res=await this.$http.get('news/list')
     
      this.news_contents=res.data
      this.news_titles=res.data.map(item=>item.name)
    },
    async getHeroesLists(){
      let res=await this.$http.get('heroes/list')
      
      this.heroes_contents=res.data
      this.heroes_titles=res.data.map(item=>item.name)
    },
  }
}
</script>
<style lang="scss">
  .navicons{
    .navicon_item{
      width:25%;
      border-right:1px solid $border-color;
      &:nth-child(4n){
        border:none;
      }
      .link{
        display:block;
        text-decoration: none;
        .nav_icon{
          display:inline-block;
          background:url(../assets/images/index.png)no-repeat;
          background-size:28.8462rem; 
          &.icon_news{
            width:1.7692rem;
            height:1.5385rem;
            background-position:63.546% 15.517%;
          }
        }
        div{
          color:map-get($colors,'black')
        }
      } 
    }
  }
  .herocontent{
    width:20%;
    img{
      width:100%
    }
  }
 
  // .herocontent:nth-child(5n+1){
  //   margin-left:-1rem;
  // }
  
 
</style>
