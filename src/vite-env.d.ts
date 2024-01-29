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
    /**
     * 基础代理地址
     */
    readonly VITE_BASE_URL: string
    /**
     * 请求超时时间
     */
    readonly VITE_TIMEOUT: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
