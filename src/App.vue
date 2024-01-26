<template>
    <ConfigProvider>
        <router-view />
    </ConfigProvider>
</template>

<script lang="ts" setup>
import ConfigProvider from '@/config/ConfigProvider'

defineOptions({
    name: 'App'
})

const router = useRouter()

console.log(`%c routes === `, 'color: #67c23a;', router.getRoutes())
</script>

<style lang="scss" scoped></style>
