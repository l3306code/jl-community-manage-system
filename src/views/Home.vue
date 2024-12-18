<template>
    <el-container class="home-container">
      <!-- 头部区域 -->
       <el-header>
        <div class="logo">
           <img src="../assets/main_logo.jpg" alt="">
           <span>SUN 社区后台管理系统</span>
        </div>
        <el-button @click="logout" type="info">登出</el-button>
       </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 侧边栏菜单区域 -->
            <el-menu
            background-color="#333744"
            text-color="#fff"
            active-text-color="#ffd04b">
            <!-- 一级菜单 -->
            <el-submenu index="1">
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>导航一</span>
              </template>

              <!-- 二级菜单 -->
               <el-menu-item index="1-1">
                  <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-location"></i>
                  <!-- 文本 -->
                  <span>二级菜单</span>
                  </template>
               </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>主题区域</el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
    name:'HomeVue',
    data(){
      return{

      }
    },
    methods: {
      logout(){
        window.sessionStorage.clear();
        this.$router.push("/login")
      }
    }
}
</script>

<style lang="less" scoped>
  .home-container{
    height: 100%;
  }

  .el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color:#fff;
    font-size: 20px;
    > div {
      display: flex;
      align-items: center;
      span{
        margin-left: 15px;
      }
    }
  }

  .logo img{
    height: 58px;
  }

  .el-aside{
    background-color: #333744;
  }

  .el-main {
    background-color: #eaedf1;
  }
</style>