import { Meta, StoryFn } from '@storybook/vue3';
import { ref, unref } from 'vue';
import { ClickOutside } from 'element-plus'
import { action } from '@storybook/addon-actions';
import { fn } from "@storybook/test";

// COMPONENTS
import { GDrawer } from '../components/drawer';
import { GButton } from '@flash-global66/g-button/index.ts';

// CONFIG
import { GConfigProvider } from '../components/config-provider';

export default {
  title: 'Feedback/Drawer',
  component: GDrawer,
  argTypes: {
    direction: {
      options: ['rtl', 'ltr', 'top-end', 'ttb', 'btt'],
      defaultValue: 'rtl',
    },
  },
  args: {
    direction: 'rtl',
  },
  parameters: {
    docs: {
      description: {
        component: `You need to set the \`v-model\` for the \`Drawer\` to control the visibility of the Drawer itself, it is of type boolean. The drawer has three parts: \`title\`, \`body\` and \`footer\`, the title is a namespace, you can also set the title via the attribute named title, default is an empty string, the body part is the main area of the drawer. drawer, containing user - Defined Content. When opened, the drawer expands from the right corner to the left, which is 30% of the browser window by default. You can change that default behavior by setting the address and size attribute.`,
      },
    },
  },
} as Meta<typeof GDrawer>;

const Template: StoryFn<typeof GDrawer> = (args) => {
  return {
    components: { GDrawer, GConfigProvider, GButton },
    setup() {
      const drawer = ref(false);

      function handleClose() {
        fn(action('cerrar'))
        drawer.value = false;
      }
      return {
        args,
        onChange: fn(action('change')),
        drawer,
        handleClose,
      };
    },
    template: `
      <g-config-provider>
        <div class="p-7 h-96">
          <g-button class="w-56" @click="drawer = !drawer">Toggle</g-button>

          <g-drawer
            v-model="drawer"
            v-bind="args"
            :before-close="handleClose"
          >
            <span>Hi, there!</span>
          </g-drawer>
        </div>
      </g-config-provider>
    `,
  }
};


export const Default = Template.bind({});