import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Methods from '../views/Methods.vue'
import Events from '../views/Events.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path: '/home',
        name: 'Home',
        component: Home,
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
  }]

const router = new VueRouter({
    routes
})
export default router
