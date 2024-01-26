import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: 'appStore',
        name: 'appStore',
        meta: {
            title: '应用市场'
        },
        children: [
            {
                path: 'main',
                meta: {
                    title: '首页'
                },
                component: () => import('@/views/appStore/main/index.vue')
            }
        ]
    }
]

export default routes
