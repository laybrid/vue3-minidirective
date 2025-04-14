import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir:'dist/lib',
    target: "es2020", //浏览器兼容
    lib:{
        entry:"src/index.ts", // 入口
        name: 'myuiss',  // 全局变量
        fileName: 'myuiss', //文件名  默认是package.json里的name
        formats:['es','umd']
    },
    rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        }
      }
},
})
