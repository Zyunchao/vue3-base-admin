/// <reference types="vite/client" />

interface ImportMetaEnv {
    /**
     * 应用名称
     */
    readonly VITE_APP_TITLE: string
    /**
     * 路由模式
     */
    readonly VITE_ROUTE_MODE: 'frontend' | 'backend'
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
