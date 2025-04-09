import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://dev-newsbackendserver.pantheonsite.io',
        changeOrigin: true,
        secure: false, // only if your dev server is using self-signed SSL
      },
    },
  },
})
