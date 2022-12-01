import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import libCss from 'vite-plugin-libcss'
// @ts-ignore
import dts from 'vite-plugin-dts'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [dts({}), react(), libCss()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/_index.scss";`,
      },
    },
  },
  build: {
    target: 'esnext',
    manifest: true,
    minify: undefined,
    reportCompressedSize: true,
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'TalkToMe',
      fileName: (format) => `talk-to-me.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})
