import type { RouteRecordRaw } from 'vue-router'
import { cloneDeep } from 'lodash'
import { store, useAppFuncTreeStore } from '@/store'

// 同步获取所有路由模块
function getPublicRoutes() {
    const modules: Record<string, { default: RouteRecordRaw[] }> = import.meta.glob(
        './modules/*.ts',
        {
            eager: true
        }
    )

    return cloneDeep(
        Object.keys(modules).reduce((routes: RouteRecordRaw[], modulePath) => {
            const moduleContent = modules[modulePath].default
            return moduleContent?.length ? routes.concat(moduleContent) : routes
        }, [])
    )
}

function storeRouteConfigs(routes: RouteRecordRaw[]) {
    const appFuncStore = useAppFuncTreeStore(store)

    // 存储路由配置（树形）
    appFuncStore.setRouteConfigs(routes)
    // 存储路由配置（一维）
    const registeredRoutes = routeConfigs2RegisteredRoutes(routes)
    appFuncStore.setRegisterRoutes(registeredRoutes)

    return {
        registeredRoutes
    }
}

const { registeredRoutes } = storeRouteConfigs(getPublicRoutes())

export default registeredRoutes

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
