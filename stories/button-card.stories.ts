import { StoryFn, Meta } from "@storybook/vue3";
import { GButtonCard } from '../components/button-card';
import { generateIconOptions } from "../helper/documentation-stories";

// CONSTANTS
import { action } from "@storybook/addon-actions";
import { fn } from "@storybook/test";

export default {
  title: 'Basic/Button Card',
  component: GButtonCard,
  argTypes: {
    icon: {
      description: "Icono a mostrar en la card. Formato `\"weight name\"` (ej. `\"duotone copy\"`).",
      control: "select",
      options: generateIconOptions(),
      table: {
        type: { summary: "IconString" },
        defaultValue: { summary: "" },
      },
    },
  },
  args: {
    title: 'Links individuales',
    subtitle: 'Este es el subtitulo',
    note: 'Generar link individual con monto, moneda y propósito para cada uno de tus clientes. Esto te permite tener un mejor control de tus cobranzas.',
    icon: 'duotone copy',
  }
} as Meta<typeof GButtonCard>;

const Template: StoryFn<typeof GButtonCard> = (args) => ({
  components: { GButtonCard },
  template: `
    <g-button-card
      v-bind="args"
      @click="onClick"
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
