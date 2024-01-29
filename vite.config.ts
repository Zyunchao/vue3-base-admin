import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import packInfo from './package.json'
import proxys from './src/http/proxys'

export default defineConfig({
    base: `/${packInfo.name}/`,
    plugins: [
        vue(),
        vueJsx(),
        eslintPlugin(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports: ['vue', 'vue-router', 'pinia']
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    server: {
        port: 8000,
        open: true,
        cors: true,
        proxy: proxys
    }
})
