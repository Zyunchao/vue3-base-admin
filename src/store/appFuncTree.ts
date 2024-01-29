import type { RouteRecordRaw } from 'vue-router'

export default defineStore(
    'appFuncTree',
    () => {
        const routeConfigs = ref<RouteRecordRaw[]>([])
        const registeredRoutes = ref<RouteRecordRaw[]>([])

        function setRouteConfigs(configs: RouteRecordRaw[]) {
            routeConfigs.value = configs
        }

        function getRouteConfigsRef(): Ref<RouteRecordRaw[]> {
            return routeConfigs
        }

        function setRegisterRoutes(routes: RouteRecordRaw[]) {
            registeredRoutes.value = routes
        }

        function getRegisteredRoutesRef(): Ref<RouteRecordRaw[]> {
            return registeredRoutes
        }

        return {
            routeConfigs,
            registeredRoutes,
            setRouteConfigs,
            getRouteConfigsRef,
            setRegisterRoutes,
            getRegisteredRoutesRef
        }
    },
    {
        persist: true
    }
)
