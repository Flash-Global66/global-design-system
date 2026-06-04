import * as jest from "jest-mock";
window.jest = jest;

import '../assets/scss/index.scss';
import '../stories/assets/styles/tailwind.css';

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
