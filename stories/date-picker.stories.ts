import { StoryFn, Meta } from "@storybook/vue3";
import GDatePicker from "../components/date-picker/index.ts";

export default {
  title: "Form/Date Picker",
  component: GDatePicker,
  parameters: {
    docs: {
      description: {
        component: `
### Uso básico
Ejemplo de uso básico:
\`\`\` vue
<g-date-picker/>
\`\`\`
        `,
      },
    },
  },
} as Meta<typeof GDatePicker>;

// Base template
const Template: StoryFn<typeof GDatePicker> = (args) => ({
  components: { GDatePicker },
  setup() {
    return {
      args,
    };
  },
  template: `
    <g-date-picker 
      v-bind="args" 
    />
  `,
});

// Current API Stories
export const basic = Template.bind({});
basic.args = {
  variant: "grey",
};
