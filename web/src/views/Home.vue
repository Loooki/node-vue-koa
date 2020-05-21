<template>
  <div>
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
    <Card :info="cardTitles[0]" class="bg-white mt-3">
      <Textswiper :contents="news_contents" :titles="news_titles">
      </Textswiper>
    </Card>
    <!-- news end -->
    <!-- hero start -->
    <Card :info="cardTitles[1]" class="bg-white mt-3">
      <div>
        <a href="">
          <img src="" alt="">
        </a>        
      </div>
      <Imgswiper :contents="heros_contents" :titles="heros_titles">
      </Imgswiper>
    </Card>
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
import Card from '../components/Card'
import Textswiper from '../components/Textswiper'
import Imgswiper from '../components/Imgswiper'
export default {
  components:{Carousel,Card,Textswiper,Imgswiper},
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
          icon:'superhero'
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
      news_titles:['热门',"新闻","公告","活动","赛事"],
      heros_titles:['热门',"战士","法师","坦克","刺客","射手","辅助"],
      news_contents:[
        {
          key:"公告",
          contents:[
            {
              key:"公告",
              title:'5月18日体验服停机更新公告',
              date:'05/18'
            },
            {
              key:"公告",
              title:'未成年人防沉迷新规接入公告',
              date:'05/15'
            },
            {
              key:"公告",
              title:'5月15日全服不停机优化公告',
              date:'05/14'
            }
          ]
        },
        {
          key:"热门",
          contents:[
            {
              key:"热门",
              title:'UI改造日志第四期：背包系统优化在即，局内快捷消息更智能',
              date:'05/15'
            },
            {
              key:"热门",
              title:'《五虎上将交响曲》揭秘，一起来看看你的音乐公开课随堂笔记吧！',
              date:'05/13'
            },
            {
              key:"热门",
              title:'0元免流畅玩包，轻轻松松上王者',
              date:'05/12'
            }
          ]
        }
      ],
      heros_contents:[
        {
          id:'1',
          contents:[
            {
              id:"1",
              cate:["战士"],
              name:"后羿",
              src:require("../assets/images/167.jpg"),
              url:""
            },
            {
              id:"2",
              cate:["战士"],
              name:"孙悟空",
              src:require("../assets/images/167.jpg"),
              url:""
            },
            {
              id:"3",
              cate:["战士"],
              name:"后羿",
              src:require("../assets/images/167.jpg"),
              url:""
            },
            {
              id:"4",
              cate:["战士"],
              name:"后羿",
              src:require("../assets/images/167.jpg"),
              url:""
            },
            {
              id:"5",
              cate:["战士"],
              name:"后羿",
              src:require("../assets/images/167.jpg"),
              url:""
            },
            {
              id:"6",
              cate:["战士"],
              name:"后羿",
              src:require("../assets/images/167.jpg"),
              url:""
            }
          ]
        },
        {
          id:'2',
          contents:[
            {
              id:"1",
              cate:["法师"],
              name:"孙尚香",
              src:require("../assets/images/167.jpg"),
              url:""
            },
            {
              id:"2",
              cate:["法师"],
              name:"刘备",
              src:require("../assets/images/167.jpg"),
              url:""
            },
            {
              id:"3",
              cate:["法师"],
              name:"妲己",
              src:require("../assets/images/167.jpg"),
              url:""
            }
          ]
        },
      ]
    } 
  },
  mounted() {
    this.navs=this.navs1
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
    }
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
</style>
