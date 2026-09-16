import { defineConfig, mergeConfig, type Plugin } from 'vite';
import baseConfig from '../../vite.config.base';
import { resolve } from 'path';
import { cp } from 'fs/promises';

function copyIllustrations(): Plugin {
  return {
    name: 'copy-illustrations',
    closeBundle: async () => {
      await cp(
        resolve(__dirname, 'src/assets/illustrations'),
        resolve(__dirname, 'dist/illustrations'),
        { recursive: true },
      );
    },
  };
}

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [copyIllustrations()],
    build: {
      lib: {
        entry: resolve(__dirname, 'index.ts'),
        name: 'B2BImage',
      },
    },
  }),
);
