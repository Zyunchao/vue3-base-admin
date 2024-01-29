<template>
    <ConfigProvider>
        <router-view />
    </ConfigProvider>
</template>

<script lang="ts" setup>
import ConfigProvider from '@/config/ConfigProvider'
import { useAppFuncTreeStore } from '@/store'

const { setRouteConfigs, setRegisterRoutes, getRouteConfigs } = useAppFuncTreeStore()

// setRouteConfigs([
//     {
//         path: 'home',
//         name: 'home',
//         meta: {
//             title: '系统首页'
//         },
//         component: () => import('@/views/home/index.vue')
//     }
// ])

defineOptions({
    name: 'App'
})

const router = useRouter()

console.log(`%c routes === `, 'color: #67c23a;', router.getRoutes())
</script>

<style lang="scss" scoped></style>
