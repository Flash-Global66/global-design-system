import { StoryFn, Meta } from "@storybook/vue3";
import { GButtonCard } from '../components/button-card';

// CONSTANTS
import { action } from "@storybook/addon-actions";
import { fn } from "@storybook/test";

export default {
  title: 'Basic/Button Card',
  component: GButtonCard,
  argTypes: {},
  args: {
    title: 'Links individuales',
    subtitle: 'Este es el subtitulo',
    note: 'Generar link individual con monto, moneda y propósito para cada uno de tus clientes. Esto te permite tener un mejor control de tus cobranzas.',
    icon: ['fad', 'copy'],
  }
} as Meta<typeof GButtonCard>;

const Template: StoryFn<typeof GButtonCard> = (args) => ({
  components: { GButtonCard },
  template: `
    <g-button-card
      :icon="['fad', 'copy']"
      @click="onClick"
      v-bind="args"
    />
  `,
  setup() {
    return {
      args,
      onClick: fn(action('click')),
    };
  },
});

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    description: {
      component: `Commonly used button.`,
    },
  },
};
