const mode = import.meta.env.MODE
const basePrefix = '/proxy'
const prefix = mode === 'development' ? basePrefix : window.BASE_REQ_URL

/**
 * 默认代理
 */
export default prefix

/**
 * 多个代理情况在这里统一定义及引用，统一维护，避免出现魔法字符串现象
 * 注意：在这里添加了常量后，要去 ../http/proxys 中添加对应的代理
 */
export const OTHER_PREFIX = {}
