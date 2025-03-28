import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
    dedupe: ['vue', 'dayjs'],
  },
  build: {
    lib: {
      entry: resolve(process.cwd(), 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: [
        // Dependencias externas
        'vue', 
        'lodash-unified', 
        '@vueuse/core', 
        '@element-plus/utils',
        'element-plus',
        'dayjs',
        'dayjs/plugin/localeData',
        // Componentes propios
        /^@flash-global66\/b2b-ui-/
      ],
      output: {
        globals: {
          vue: 'Vue',
          'lodash-unified': 'lodashUnified',
          '@vueuse/core': 'VueUse',
          '@element-plus/utils': 'ElementPlusUtils',
          'element-plus': 'ElementPlus',
          'dayjs': 'dayjs',
          'dayjs/plugin/localeData': 'dayjsPluginLocaleData'
        }
      }
    },
    commonjsOptions: {
      transformMixedEsModules: false,
    },
    target: 'esnext',
    minify: 'esbuild',
    chunkSizeWarningLimit: 2000,  }
  }
);