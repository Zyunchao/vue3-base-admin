import axios from 'axios'
import interceptorsReqHandle from './interceptors/request'
import interceptorsResHandle from './interceptors/response'

const headers = {}

const instance = axios.create({
    timeout: 1000 * 8,
    headers
})

// 请求拦截器
instance.interceptors.request.use(interceptorsReqHandle, (error) => Promise.reject(error))

// 响应拦截器
instance.interceptors.response.use(interceptorsResHandle, (error) => {
    return Promise.reject(error)
})

export default instance
