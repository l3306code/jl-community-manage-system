import Vue from 'vue'
import Router from 'vue-router'
import LoginVue from '@/views/user/login.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/login',
            component: LoginVue
        }
    ]
})