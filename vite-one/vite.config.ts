import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'//需要安装 npm i @types/node -D


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':resolve(__dirname,'src')
    }
  },
  base:'./',//设置打包路径
  server:{
    port: 8000,//设置服务启动端口号
    open: true,//设置服务启动时是否自动打开浏览器
    cors: true//允许跨域
    
    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
})
