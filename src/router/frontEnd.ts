import type { RouteRecordRaw } from 'vue-router'
import { cloneDeep } from 'lodash'

// 同步获取所有路由模块
const modules: Record<string, { default: RouteRecordRaw[] }> = import.meta.glob('./modules/*.ts', {
    eager: true
})

// 组合成统一数组
const routers = Object.keys(modules).reduce((routes: RouteRecordRaw[], modulePath) => {
    return modules[modulePath].default?.length ? routes.concat(modules[modulePath].default) : routes
}, [])

export default routeConfigs2RegisteredRoutes(cloneDeep(routers))

/**
 * 多维数组变为一维数组注册路由
 * 实际上，业务模块的路由都应期望放在 Main 组件下，但是路由的声明文件最好拥有层级结构（并适用菜单的配置）
 * 故：将声明的路由配置 “拉平” 成一维数组，集中注册到 '/' 路由下，使其能够在 Main 组件下的 <router-view /> 展示
 */
export function routeConfigs2RegisteredRoutes(source: Array<RouteRecordRaw>): RouteRecordRaw[] {
    for (let i = 0; i < source.length; i++) {
        if (source[i].children) {
            const parentPath = source[i].path

            // 子拼接父 的路径标识
            source[i].children!.forEach((subItem) => {
                subItem.path = `${parentPath}/${subItem.path}`
            })

            // 父拼接子 行成一维数组
            source = source.slice(0, i + 1).concat(source[i].children!, source.slice(i + 1))
        }
    }

    return source.filter((route) => route.component)
}
