import { type AxiosResponse } from 'axios'

/**
 * 响应拦截处理函数
 * @param res 响应结果
 * @returns
 */
export default async function interceptorsResHandle(res: AxiosResponse) {
    return res
}
