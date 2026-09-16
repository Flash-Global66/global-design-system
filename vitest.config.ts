import { defineConfig, mergeConfig } from 'vitest/config'
import viteBaseConfig from './vite.config.base'

export default mergeConfig(
  viteBaseConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      setupFiles: ['./tests/setup.ts'],
      include: [
        'components/**/tests/**/*.spec.ts',
        'common/**/tests/**/*.spec.ts',
      ],
      globals: true,
      server: {
        deps: {
          inline: [/@flash-global66\/.*/],
        },
      },
    },
  })
)
