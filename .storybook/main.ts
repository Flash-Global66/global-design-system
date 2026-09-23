import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],

  staticDirs: [
    {
      from: '../components/image/src/assets/illustrations',
      to: '/illustrations',
    },
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    '@storybook/addon-mcp',
  ],

  features: {
    componentsManifest: true,
    experimentalDocgenServer: true,
  },
};

export default config;
