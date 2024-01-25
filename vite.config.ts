import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports: ['vue', 'vue-router']
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
})
