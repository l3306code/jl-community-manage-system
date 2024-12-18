import Vue from 'vue'
import Router from 'vue-router'
import LoginVue from '@/views/user/login.vue'
import HomeVue from '@/views/Home.vue'
import axios from 'axios'
Vue.use(Router)


const router = new Router({
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/login',
            component: LoginVue
        },
        {
            path:'/home',
            component: HomeVue
        }
    ]
})

//挂载路由导航守卫
router.beforeEach(
    (to, from, next) => {
        //to 将要访问的路径
        if(to.path == '/login') return next();

        const tokenStr = window.sessionStorage.getItem("token");

        if(tokenStr == null){
            return next('/login')
        }else{
            axios.defaults.headers.common['Authorization'] = `Bearer ${tokenStr}`;
            next()
        }
        
        
    }
)


export default router