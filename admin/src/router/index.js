import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import categoryEdit from '../views/categoryEdit.vue'
import categoryLists from '../views/categoryLists.vue'
import equipmentEdit from '../views/equipmentEdit.vue'
import equipmentLists from '../views/equipmentLists.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path: 'categories/create',
        name: 'categoryEdit',
        component: categoryEdit,
      },
      {
        path: 'categories/edit/:id',
        name: 'categoryEdit',
        component: categoryEdit,
        props: true //表示把路由参数id注入到组件categoryEdit中，组件可食用props属性接收
      },
      {
        path: 'categories/lists',
        name: 'categoryLists',
        component: categoryLists,
      },
      {
        path: 'equipments/create',
        name: 'equipmentEdit',
        component: equipmentEdit,
      },
      {
        path: 'equipments/edit/:id',
        name: 'equipmentEdit',
        component: equipmentEdit,
        props: true //表示把路由参数id注入到组件equimentEdit中，组件可食用props属性接收
      },
      {
        path: 'equipments/lists',
        name: 'equipmentLists',
        component: equipmentLists,
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
