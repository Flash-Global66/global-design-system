import { fileURLToPath } from 'node:url';
import { defineConfig, mergeConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import viteBaseConfig from './vite.config.base';

export default mergeConfig(
  viteBaseConfig,
  defineConfig({
    test: {
      projects: [
        {
          extends: true,
          test: {
            name: 'unit',
            environment: 'jsdom',
            setupFiles: ['./tests/setup.ts'],
            include: [
              'components/**/tests/**/*.spec.ts',
              'common/**/tests/**/*.spec.ts',
              'scripts/tests/**/*.spec.ts',
            ],
            globals: true,
            server: {
              deps: {
                inline: [/@flash-global66\/.*/],
              },
            },
          },
        },
        {
          extends: true,
          plugins: [
            storybookTest({
              configDir: fileURLToPath(
                new URL('./.storybook', import.meta.url),
              ),
            }),
          ],
          test: {
            name: 'storybook',
            browser: {
              enabled: true,
              headless: true,
              provider: 'playwright',
              instances: [{ browser: 'chromium' }],
            },
          },
        },
      ],
    },
  }),
);
