<template>
    <div>
        <el-button @click="logout" type="info">登出</el-button>
        <h1>主页面</h1>
    </div>
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

<style>

</style>