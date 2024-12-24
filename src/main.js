import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

//导入全局样式表
import '@/assets/css/global.css'

//导入字体图标
import '@/assets/fonts/iconfont.css'

axios.defaults.baseURL = 'http://tech-zjl:8766/api/v1/';
// axios.defaults.baseURL = '/api';
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token');  

  return config;
    
});

Vue.prototype.$http = axios

//配置请求的根路径


Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
