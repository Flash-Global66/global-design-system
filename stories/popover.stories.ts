import { Meta, StoryFn } from '@storybook/vue3';
import { ref, unref } from 'vue';
import { ClickOutside } from 'element-plus'
import { action } from '@storybook/addon-actions';
import { fn } from "@storybook/test";

// COMPONENTS
import { GPopover } from '../components/popover';
import { GButton } from '@flash-global66/g-button/index.ts';

// CONFIG
import { GConfigProvider } from '../components/config-provider';

export default {
  title: 'Feedback/Popover',
  component: GPopover,
  argTypes: {
    placement: {
      options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
      defaultValue: 'top-start',
    },
    trigger: {
      options: ['click', 'hover', 'contextmenu'],
      defaultValue: 'hover',
    },
  },
  args: {
    content: 'this is content, this is content, this is content',
    width: 200,
    title: 'Title',
    placement: 'top-start',
    trigger: 'hover',
  },
  parameters: {
    docs: {
      description: {
        component: `The trigger attribute is used to define how popover is triggered: \`hover\`, \`click\`, \`contextmenu\`. If you want to manually control it, you can set \`:visible\`.`,
      },
    },
  },
} as Meta<typeof GPopover>;

const Template: StoryFn<typeof GPopover> = (args) => {
  return {
    components: { GPopover, GConfigProvider, GButton },
    setup() {

      return {
        args,
        onChange: fn(action('change')),
      };
    },
    template: `
      <g-config-provider>
        <div class="flex items-center justify-center gap-3 h-72 px-10">

          <g-popover v-bind="args">
            <template #reference>
              <g-button class="w-56">Action</g-button>
            </template>
          </g-popover>

        </div>
      </g-config-provider>
    `,
  }
};


export const Default = Template.bind({});