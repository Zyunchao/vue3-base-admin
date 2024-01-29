import { debounce } from 'lodash'

/**
 * 统一处理接口抛出错误信息的方式
 * @param errorMsg 错误消息
 * @param type 弹窗类型
 * @param duration 延迟关闭时间
 */
export const printErrorMsg = debounce(
    (
        errorMsg: string,
        type: 'error' | 'info' | 'success' | 'warning' = 'error',
        duration: number = 3000
    ): void => {
        ElMessage({
            message: errorMsg,
            type,
            duration,
            dangerouslyUseHTMLString: true
        })
    },
    200
)
