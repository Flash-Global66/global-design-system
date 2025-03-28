import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
    dedupe: ['vue'],
  },
  plugins: [
    vue(),
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: false,
    },
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      }
    },
    chunkSizeWarningLimit: 2000,
  },
});

