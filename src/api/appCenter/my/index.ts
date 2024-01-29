import request from '@/http'

export const getList = (params) =>
    request.post<{ name: string; age: number }[]>({
        url: '/sport/aa/list',
        data: params,
        prefix: '/laj',
        restful: false,
        headersType: 'application/x-www-form-urlencoded'
    })
