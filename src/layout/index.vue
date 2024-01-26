<template>
    <div class="root-layout__wrapper">
        <div class="page-content__wrapper">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'Layout'
})
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
