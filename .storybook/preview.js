import * as jest from "jest-mock";
window.jest = jest;
import { setup } from '@storybook/vue3';

import '../assets/scss/index.scss';
import '../stories/assets/styles/tailwind.css';

import { vueFontawesome } from '../libs/vue-fontawesome/index';

// Configurar la aplicación de Vue dentro de la función setup
setup((app) => {
  vueFontawesome(app);
});

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      index: -1
    },
  },
  backgrounds: {
    values: [
      { name: 'Gray', value: '#FAFBFF' },
      { name: 'White', value: '#FFF' },
    ],
    default: "Gray",
  },
};

export const tags = ['autodocs'];
