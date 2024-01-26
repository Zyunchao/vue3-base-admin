<template>
    <el-container class="root-layout__wrapper">
        <el-aside class="root-layout__aside">
            Aside
        </el-aside>
        <el-container>
            <el-header class="root-layout__header">
                Header
            </el-header>
            <el-main class="root-layout__content">
                <el-scrollbar>
                    <router-view />
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'Layout'
})
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
