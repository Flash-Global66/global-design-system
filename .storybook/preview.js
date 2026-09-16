import * as jest from 'jest-mock';
import { setup } from '@storybook/vue3';
import { imageBaseUrlKey } from '@flash-global66/g-image/index.ts';
window.jest = jest;

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
    values: [
      { name: 'Gray', value: '#FAFBFF' },
      { name: 'White', value: '#FFF' },
    ],
    default: 'Gray',
  },
};

export const tags = ['autodocs'];
