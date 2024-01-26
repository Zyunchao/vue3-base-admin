import { createApp, type App as AppInterface } from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss'
import router from '@/router'
import { store } from '@/store'
import mitt from 'mitt'

const app = createApp(App)
app.config.globalProperties.$bus = mitt()
app.use(store).use(router).mount('#app')
