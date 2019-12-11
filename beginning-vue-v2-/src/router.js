import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/About.vue')
        },
        {
            path: '/info',
            name: 'info',
            component: () => import('@/views/Info.vue')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/views/Projects.vue')
        }
    ]
})