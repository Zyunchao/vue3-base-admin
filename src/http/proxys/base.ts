import env from './loadEnv'

export default {
    '/proxy': {
        target: env.VITE_BASE_URL,
        changeOrigin: true,
        pathRewrite: (path) => path.replace(/^\/proxy/, '')
    }
}
