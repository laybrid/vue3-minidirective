import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  //将静态资源复制到输出目录
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg'],
  
  build: {
    outDir: 'dist/lib',
    target: "es2020", //浏览器兼容
    lib: {
      entry: "src/index.ts", // 入口
      name: 'vue3-minidirective',  // 全局变量
      fileName: 'vue3-minidirective', //文件名  默认是package.json里的name
      formats: ['es', 'umd']
    },
    rollupOptions: {
      //不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        assetFileNames: 'assets/[name].[ext]'
      },
    },
  },

})
