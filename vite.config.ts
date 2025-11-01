import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // 构建优化
    target: 'es2015',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'dnd-vendor': ['react-dnd', 'react-dnd-html5-backend'],
          'ui-vendor': ['antd', '@ant-design/icons'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: false,
  },
})