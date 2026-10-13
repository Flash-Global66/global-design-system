import { setup } from '@storybook/vue3-vite';
import { imageBaseUrlKey } from '@flash-global66/g-image/index.ts';

import '../assets/scss/index.scss';
import '../stories/assets/styles/tailwind.css';

const illustrationsBaseUrl = new URL('illustrations', document.baseURI).href;

setup(app => {
  app.provide(imageBaseUrlKey, illustrationsBaseUrl);
});

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': {
      index: -1,
    },
  },
  backgrounds: {
    options: {
      gray: { name: 'Gray', value: '#FAFBFF' },
      white: { name: 'White', value: '#FFF' },
    },
  },
};

export const tags = ['autodocs'];

export const initialGlobals = {
  backgrounds: {
    value: 'gray',
  },
};
