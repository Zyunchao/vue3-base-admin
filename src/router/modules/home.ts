import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: 'home',
        name: 'home',
        meta: {
            title: '系统首页'
        },
        component: () => import('@/views/home/index.vue')
    }
]

export default routes
