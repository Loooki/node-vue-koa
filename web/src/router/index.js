import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Methods from '../views/Methods.vue'
import Events from '../views/Events.vue'
import Article from '../views/Article.vue'
import Hero from '../views/Hero.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/articles/:id',
        name: 'Article',
        component: Article,
        props:true
      },
      {
        path: '/methods',
        name: 'Methods',
        component: Methods,
      },
      {
        path: '/events',
        name: 'Events',
        component: Events,
      },
    ]
  },
  {
     path: '/heroes/:id',
     name: 'Hero',
     component: Hero,
     props:true
  }
]

const router = new VueRouter({
    routes
})
export default router
