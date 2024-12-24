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
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <div class="toggle-button"
          @click="toggleCollapse">|||</div>
          <!-- 侧边栏菜单区域 -->
            <el-menu
            background-color="#333744"
            text-color="#fff"
            active-text-color="#409EFF" 
            unique-opened 
            :collapse=isCollapse
            :collapse-transition="false">
            <!-- 一级菜单 -->
            <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i :class="item.elIcon" class="first-menu"></i>
                <!-- 文本 -->
                <span>{{ item.authName }}</span>
              </template>

              <!-- 二级菜单 -->
               <el-menu-item :index="subItem.id + ''" v-for="subItem in item.children"
               :key="subItem.id">
                  <template slot="title">
                  <!-- 图标 -->
                  <i :class="subItem.elIcon" class="first-menu"></i>
                  <!-- 文本 -->
                  <span>{{ subItem.authName }}</span>
                  </template>
               </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
    name:'HomeVue',
    created(){
      this.getMenuList();
    },
    data(){
      return{
        //左侧菜单数据
        menuList: [],
        //是否折叠
        isCollapse: false
      }
    },
    methods: {
      logout(){
        window.sessionStorage.clear();
        this.$router.push("/login")
      },
      //根据角色id获取对应的菜单
      async getMenuList(){
        const res = await this.$http.get('menus');
        if(res.status == 200){
           this.menuList = res.data           
        }
      },
      //点击按钮,切换菜单的折叠与展开
      toggleCollapse(){
        this.isCollapse = !this.isCollapse;
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
    .el-menu{
      border-right: none;
    }
  }

  .el-main {
    background-color: #eaedf1;
  }

  .first-menu {
    margin-right: 10px;
  }

  .toggle-button {
    background-color: #4A5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
</style>