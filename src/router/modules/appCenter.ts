import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: 'appCenter',
        name: 'appCenter',
        meta: {
            title: '应用中心'
        },
        children: [
            {
                path: 'my',
                meta: {
                    title: '我的应用'
                },
                component: () => import('@/views/appCenter/my/index.vue')
            }
        ]
    }
]

export default routes
