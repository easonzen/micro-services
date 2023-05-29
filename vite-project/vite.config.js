import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const resolve = (p) => path.resolve(__dirname, p)

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:5000',
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: '/src'
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  build: {
    rollupOptions: {
      input: 'src/main.js',
      output: {
        // entryFileNames: 'js/app.js',
        format: 'system'
      },
      preserveEntrySignatures: 'strict'
    }
  }
})
