import { type InternalAxiosRequestConfig } from 'axios'

/**
 * 请求拦截处理函数
 * @param config 请求参数
 * @returns
 */
export default async function interceptorsReqHandle(config: InternalAxiosRequestConfig) {
    return config
}
