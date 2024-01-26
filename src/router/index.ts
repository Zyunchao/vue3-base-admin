import * as VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from './common'

// 加载进度条配置
NProgress.configure({
    /* showSpinner: false */
})

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

// 前置
router.beforeEach(async (to, from) => {
    NProgress.start()
    return true
})

// 后置
router.afterEach(async (to, from) => {
    NProgress.done()
})

export default router
