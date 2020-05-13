<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu router :default-openeds="['3']" :default-active="$route.path" unique-opened>
              <el-submenu index="1">
                  <template slot="title"><i class="el-icon-message"></i>内容管理</template>
                  <el-menu-item-group>
                      <template slot="title">分类</template>
                      <el-menu-item index="/categories/create">新建分类</el-menu-item>
                      <el-menu-item index="/categories/lists">分类列表</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                      <template slot="title">物品</template>
                      <el-menu-item index="/equipments/create">新增物品</el-menu-item>
                      <el-menu-item index="/equipments/lists">物品列表</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                      <template slot="title">英雄</template>
                      <el-menu-item index="/heroes/create">新增英雄</el-menu-item>
                      <el-menu-item index="/heroes/lists">英雄列表</el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                  <template slot="title"><i class="el-icon-message"></i>运营管理</template>
                  <el-menu-item-group>
                      <template slot="title">文章</template>
                      <el-menu-item index="/articles/create">新增文章</el-menu-item>
                      <el-menu-item index="/articles/lists">文章列表</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                      <template slot="title">广告位</template>
                      <el-menu-item index="/ads/create">新增广告位</el-menu-item>
                      <el-menu-item index="/ads/lists">广告位列表</el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                  <template slot="title"><i class="el-icon-message"></i>系统管理</template>
                  <el-menu-item-group>
                      <template slot="title">管理员</template>
                      <el-menu-item index="/admin_users/create">新增管理员</el-menu-item>
                      <el-menu-item index="/admin_users/lists">管理员列表</el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
          </el-menu>
      </el-aside>
      <el-container>
          <el-main>
              <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>

  
</template>  
<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

<script>
    export default {
        data() {
           return{
            
           }
        }
    };
</script>
