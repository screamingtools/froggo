import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import path from 'path'

const root = path.resolve(__dirname, './src')

export default defineConfig({
  root: './src',
  base: './',
  resolve: {
    alias: {
      '~': root
    }
  },
  plugins: [vue(), components({ dirs: ['components'] })],
  server: {
    port: 8888,
    strictPort: true,
    fs: {
      strict: false
    }
  },
  ssgOptions: {
    entry: 'main.ts',
    formatting: 'prettify' // set to 'minify' to minify
  },
  build: {
    outDir: '../dist',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: '[name].js'
      }
    },
    minify: 'esbuild' // set to `false` to disable
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${root}/scss/globals.scss";`
      }
    }
  }
})
