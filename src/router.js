import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/Login.vue'
import Forget from '@/views/Forget.vue'
import Mail from '@/views/Mail.vue'
import Dashboard from '@/views/Dashboard.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login, alias: '/' },
        { path: '/forget', component: Forget },
        // { path: '/mail', component: Mail },
        { path: '/mail/:mailId?', component: Mail },
        { path: '/dashboard', component: Dashboard }
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})
