import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "app/frontend"),
    }
  },
  publicDir: false, // 禁用 public 目录
  build: {
    outDir: resolve(__dirname, 'app/assets/builds'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'app/frontend/entrypoints/application_react.tsx'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      }
    },
  },
})