import { defineConfig, mergeConfig } from 'vite';
import baseConfig from '../../vite.config.base';
import { resolve } from 'path';

export default mergeConfig(baseConfig, defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'B2BButton'
    }
  }
}));