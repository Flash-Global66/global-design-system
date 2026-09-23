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
    '@storybook/addon-jest',
    '@storybook/addon-docs',
  ],
};

export default config;
