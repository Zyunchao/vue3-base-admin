import type { RouteRecordRaw } from 'vue-router'

export default defineStore(
    'appFuncTree',
    () => {
        const routeConfigs = ref<RouteRecordRaw[]>([])
        const registeredRoutes = ref<RouteRecordRaw[]>([])

        function setRouteConfigs(configs: RouteRecordRaw[]) {
            routeConfigs.value = configs
        }

        function getRouteConfigs(): Ref<RouteRecordRaw[]> {
            return routeConfigs
        }

        function setRegisterRoutes(routes: RouteRecordRaw[]) {
            registeredRoutes.value = routes
        }

        function getRegisteredRoutes(): Ref<RouteRecordRaw[]> {
            return registeredRoutes
        }

        return {
            routeConfigs,
            registeredRoutes,
            setRouteConfigs,
            getRouteConfigs,
            setRegisterRoutes,
            getRegisteredRoutes
        }
    },
    {
        persist: true
    }
)
