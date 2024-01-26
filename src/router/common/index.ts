import type { RouteRecordRaw } from 'vue-router'
import frontEndRoutes from '../frontEnd'

const commonRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        children: frontEndRoutes,
        // redirect: '/home',
        component: () => import('@/layout/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/500',
        component: () => import('@/views/error/500.vue')
    },
    {
        path: '/:path(.*)*',
        component: () => import('@/views/error/404.vue')
    }
]

export default commonRoutes
