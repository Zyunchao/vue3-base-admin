<template>
    <ElConfigProvider :locale="zhCn">
        <slot></slot>
    </ElConfigProvider>
</template>

<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { dayjs } from 'element-plus'

;(dayjs as any).en.weekStart = 1

defineOptions({
    name: 'ConfigProvider'
})
</script>

<style lang="scss" scoped></style>
