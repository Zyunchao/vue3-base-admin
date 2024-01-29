export {}

declare global {
    type AxiosHeaders =
        | 'application/json'
        | 'application/x-www-form-urlencoded'
        | 'multipart/form-data'

    type AxiosMethod = 'get' | 'post' | 'delete' | 'put' | 'GET' | 'POST' | 'DELETE' | 'PUT'

    type AxiosResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

    /**
     * 请求配置对象
     */
    interface AxiosConfig {
        /**
         * 请求地址
         */
        url: string
        /**
         * 简单请求的参数
         */
        params?: any
        /**
         * 复杂请求的参数
         */
        data?: any
        /**
         * 请求方法
         */
        method?: AxiosMethod
        /**
         * Content-type 请求类型
         */
        headersType?: AxiosHeaders
        /**
         * 响应类型
         */
        responseType?: AxiosResponseType
        /**
         * 代理配置：常用于开发环境，与不同的后台本地联调时的代理关键字配置
         */
        prefix?: string
        /**
         * 参数以 restful 方式传递
         */
        restful?: boolean
    }

    interface IResponse<T = any> {
        code: string
        data: T extends any ? T : T & any
    }

    interface PageParam {
        pageSize?: number
        pageNo?: number
    }
}
