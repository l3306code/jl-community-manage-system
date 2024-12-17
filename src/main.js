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
Vue.prototype.$http = axios

//配置请求的根路径
axios.defaults.baseURL = 'http://tech-zjl:8766/api/v1/'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
