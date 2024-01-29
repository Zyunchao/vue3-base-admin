import basePrefix from './prefix'

const config: {
    base_url: string
    result_code: number | string
    default_headers: AxiosHeaders
    request_timeout: number
} = {
    /**
     * api请求基础路径
     */
    base_url: basePrefix,

    /**
     * 接口成功返回状态码
     */
    result_code: 200,

    /**
     * 接口请求超时时间
     */
    request_timeout: 1000 * (import.meta.env.VITE_TIMEOUT as any),

    /**
     * 默认接口请求类型
     * 可选值：application/x-www-form-urlencoded multipart/form-data
     */
    default_headers: 'application/json'
}

export { config }
