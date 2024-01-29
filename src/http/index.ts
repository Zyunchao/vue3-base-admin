import basePrefix from './prefix'
import service from './service'
import { config } from './config'
import qs from 'qs'

const { default_headers } = config

// 基于 axios 实例的请求
export const request = (option: AxiosConfig) => {
    const {
        url: cUrl,
        method,
        params,
        data,
        headersType,
        responseType,
        prefix,
        restful,
        ...config
    } = option

    let url = `${prefix ? prefix : basePrefix}${cUrl}`
    let p = params
    let d = data

    // restful 参数处理
    if (restful) {
        url += Object.values(params).join('/')
        p = undefined
    }

    // post 请求序列化参数
    if (headersType === 'application/x-www-form-urlencoded') {
        d = qs.stringify(d)
    }

    // 实际发送请求
    return service({
        url,
        method,
        params: p,
        data: d,
        ...config,
        responseType: responseType,
        headers: {
            'Content-Type': headersType || default_headers,
            terminal: 20
        }
    })
}

export default {
    /**
     * get 请求
     * @param option
     * @returns
     */
    get: async <T = any>(option: AxiosConfig) => {
        const res = await request({ method: 'GET', ...option })
        return res.data as unknown as T
    },
    /**
     * post 请求
     * @param option
     * @returns
     */
    post: async <T = any>(option: AxiosConfig) => {
        const res = await request({ method: 'POST', ...option })
        return res.data as unknown as T
    },
    /**
     * post 请求，无限定返回类型
     * @param option
     * @returns
     */
    postOriginal: async (option: AxiosConfig) => {
        const res = await request({ method: 'POST', ...option })
        return res
    },
    /**
     * delete 请求
     * @param option
     * @returns
     */
    delete: async <T = any>(option: AxiosConfig) => {
        const res = await request({ method: 'DELETE', ...option })
        return res.data as unknown as T
    },
    /**
     * put 请求
     * @param option
     * @returns
     */
    put: async <T = any>(option: AxiosConfig) => {
        const res = await request({ method: 'PUT', ...option })
        return res.data as unknown as T
    },
    /**
     * 下载文件
     * @param option
     * @returns
     */
    download: async <T = any>(option: AxiosConfig) => {
        const res = await request({ method: 'GET', responseType: 'blob', ...option })
        return res as unknown as Promise<T>
    },
    /**
     * 上传文件
     * @param option
     * @returns
     */
    upload: async <T = any>(option: AxiosConfig) => {
        option.headersType = 'multipart/form-data'
        const res = await request({ method: 'POST', ...option })
        return res as unknown as Promise<T>
    }
}
