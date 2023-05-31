import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { ViteEjsPlugin } from 'vite-plugin-ejs'

const resolve = (p) => path.resolve(__dirname, p)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: 'http://localhost:5000',
    plugins: [
      vue(
        mode !== 'standalone' && {
          template: {
            transformAssetUrls: {
              base: '/src'
            }
          }
        }
      ),
      ViteEjsPlugin({
        isStandalone: mode === 'standalone'
      })
    ],
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    rollupOptions: {
      input: 'src/main.js',
      format: 'system',
      preserveEntrySignatures: true
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
  }
})
