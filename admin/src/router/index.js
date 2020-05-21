import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import categoryEdit from '../views/categoryEdit.vue'
import categoryLists from '../views/categoryLists.vue'
import equipmentEdit from '../views/equipmentEdit.vue'
import equipmentLists from '../views/equipmentLists.vue'
import heroEdit from '../views/heroEdit.vue'
import heroLists from '../views/heroLists.vue'
import articleEdit from '../views/articleEdit.vue'
import articleLists from '../views/articleLists.vue'
import adEdit from '../views/adEdit.vue'
import adLists from '../views/adLists.vue'
import adminUserEdit from '../views/adminUserEdit.vue'
import adminUserLists from '../views/adminUserLists.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{isPublic:true}
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
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
        },
        {
            path: 'heroes/create',
            name: 'heroEdit',
            component: heroEdit,
        },
        {
            path: 'heroes/edit/:id',
            name: 'heroEdit',
            component: heroEdit,
            props: true //表示把路由参数id注入到组件heroEdit中，组件可使用props属性接收
        },
        {
            path: 'heroes/lists',
            name: 'heroLists',
            component: heroLists,
        },
        {
            path: 'articles/create',
            name: 'articleEdit',
            component: articleEdit,
        },
        {
            path: 'articles/edit/:id',
            name: 'articleEdit',
            component: articleEdit,
            props: true //表示把路由参数id注入到组件articleEdit中，组件可使用props属性接收
        },
        {
            path: 'articles/lists',
            name: 'articleLists',
            component: articleLists,
        },
        {
            path: 'ads/create',
            name: 'adEdit',
            component: adEdit,
        },
        {
            path: 'ads/edit/:id',
            name: 'adEdit',
            component: adEdit,
            props: true
        },
        {
            path: 'ads/lists',
            name: 'adLists',
            component: adLists,
        },
        {
            path: 'admin_users/create',
            name: 'adminUserEdit',
            component: adminUserEdit,
        },
        {
            path: 'admin_users/edit/:id',
            name: 'adminUserEdit',
            component: adminUserEdit,
            props: true
        },
        {
            path: 'admin_users/lists',
            name: 'adminUserLists',
            component: adminUserLists,
        }
    ]
  }]

const router = new VueRouter({
    routes
})
//登录验证
router.beforeEach((to,from,next)=>{
    if( !to.meta.isPublic && !localStorage.token){
       return  next('/login')
    }
    next()
})
export default router
