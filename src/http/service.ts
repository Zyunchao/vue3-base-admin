import axios from 'axios'
import interceptorsReqHandle from './interceptors/request'
import interceptorsResHandle from './interceptors/response'
import { config } from './config'

const { request_timeout } = config

const instance = axios.create({
    // baseurl 由代理前缀配置
    // baseURL: base_url,
    timeout: request_timeout
})

// 请求拦截器
instance.interceptors.request.use(interceptorsReqHandle, (error) => Promise.reject(error))

// 响应拦截器
instance.interceptors.response.use(interceptorsResHandle, (error) => {
    return Promise.reject(error)
})

export default instance
