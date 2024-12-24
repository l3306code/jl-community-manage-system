<template>
    <div class="login_container">
        <div class="login_box">
            <!-- logo区域 -->
            <div class="avatar_box">
                <img src="../../assets/logo.png" alt="">
            </div> 
            <!-- 登录表单区域 -->
            <el-form  label-width="0px" class="login_form"
            :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" 
                    prefix-icon="el-icon-user" placeholder="请输入用户名"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password"  type="password"
                    prefix-icon="iconfont icon-showpassword"
                    placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <!-- 按钮区域 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="primary" @click="register">注册</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>     
        </div>
    </div>
</template>

<script>
export default {
  name: "LoginVue",
  data() {
    return{
      // 登录表单的数据绑定对象
       loginForm: {
          username:'',
          password:''
       },
      // 校验规则
      loginFormRules: {
         username: [
           {required: true, message: "请输入登录名称", trigger:"blur"},
           { min: 5, max: 10, message:"长度在5-10个字符", trigger: "blur"}
         ],
         password: [
          {required: true, message: "请输入密码", trigger:"blur"},
          { min: 5, max: 10, message:"长度在5-10个字符", trigger: "blur"}
         ]
      }
    }
  },
  methods: {
     //重置登录表单数据
     resetLoginForm() {
       this.$refs.loginFormRef.resetFields();
     },
     login(){
        this.$refs.loginFormRef.validate(
         async valid => {
             if(!valid) return;
             const {data: res} = await this.$http.post(
                "login", this.loginForm
             )
              
             if(res.code == 200){
                this.$message.success(res.msg)
                //存入token
                window.sessionStorage.setItem("token", res.data.token)
                this.$router.push("/home");
             }else{
                this.$message.error(res.msg)
             }   
          }
        )
     },
     register(){
       console.log("注册功能开发中,暂未完成...");
     }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: green;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 20px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}


.login_form{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding:0 20px;
  box-sizing: border-box;
}

.btns{
  display: flex;
  justify-content: flex-end;
}
</style>