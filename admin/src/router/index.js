import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import categoryEdit from '../views/categoryEdit.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path: '/categories/create',
        name: 'categoryEdit',
        component: categoryEdit,
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
