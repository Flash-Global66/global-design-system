import { StoryFn, Meta } from "@storybook/vue3";
import { GDropdown, GDropdownItem, GDropdownMenu } from '../components/dropdown';
import { GConfigProvider } from '../components/config-provider';

export default {
  title: 'Data/Dropdown',
  component: GDropdown,
  subcomponents: { GDropdownItem, GDropdownMenu },
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `Toggleable menu for displaying lists of links and actions.`,
      },
    },
  },
} as Meta<typeof GDropdown>;

const Template: StoryFn<typeof GDropdown> = (args) => ({
  components: { GDropdown, GConfigProvider, GDropdownItem, GDropdownMenu },
  template: `
    <g-config-provider>
      <g-dropdown trigger="click">
        Buenas
        <template #dropdown>
          <g-dropdown-menu>
            <g-dropdown-item>Action 1</g-dropdown-item>
            <g-dropdown-item>Action 2</g-dropdown-item>
            <g-dropdown-item>Action 3</g-dropdown-item>
            <g-dropdown-item disabled>Action 4</g-dropdown-item>
            <g-dropdown-item divided>Action 5</g-dropdown-item>
          </g-dropdown-menu>
        </template>
      </g-dropdown>
    </g-config-provider>
  `,
  setup() {
    return {
      args,
    };
  },
});

export const Default = Template.bind({});
