export {}

declare global {
    interface Fn<T = any> {
        (...arg: T[]): T
    }

    type Nullable<T> = T | null

    type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

    type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>

    type ComponentRef<T> = InstanceType<T>

    type LocaleType = 'zh-CN' | 'en'

    interface Window {
        /**
         * @description: 基础请求地址
         */
        BASE_REQ_URL: string
    }
}
