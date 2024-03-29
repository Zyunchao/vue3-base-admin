import { createPinia, type Pinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 应用功能树 store
export { default as useAppFuncTreeStore } from './appFuncTree'

// 根实例
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export const store = pinia
