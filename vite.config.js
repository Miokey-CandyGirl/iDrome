import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/baidu/search': {
        target: 'https://qianfan.baidubce.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/baidu\/search/, '/v2/ai_search/web_search'),
        secure: false,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    }
  }
})