import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

// COMPONENTS
import { GMenu, GMenuItem, GMenuItemGroup, GSubMenu } from '../components/menu';
import { GButton } from '@flash-global66/g-button/index.ts';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// CONFIG
import { GConfigProvider } from '../components/config-provider';

export default {
  title: 'Feedback/Menu',
  component: GMenu,
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      description: {
        component: `Menu that provides navigation for your website.`,
      },
    },
  },
} as Meta<typeof GMenu>;

const Template: StoryFn<typeof GMenu> = (args) => {
  return {
    components: { GMenu, GConfigProvider, GButton, GMenuItem, GMenuItemGroup, GSubMenu, FontAwesomeIcon },
    setup() {
      const isCollapse = ref(false);

      function hola() {
        console.log('hola')
      }

      return {
        args,
        isCollapse,
        hola,
      };
    },
    template: `
      <g-config-provider>
        <g-button class="mb-4" @click="isCollapse = !isCollapse">Collapse</g-button>
        <div class="w-full max-w-xs">
          <g-menu :collapse="isCollapse" class="px-4 py-5 bg-white">
            <g-menu-item index="5">
              <font-awesome-icon class="text-6" :icon="['fal', 'home-lg-alt']" />
              <template #title>
                <h4 class="ml-3">Home</h4>
              </template>
            </g-menu-item>

            <g-sub-menu index="1">
              <template #title>
                <font-awesome-icon :icon="['fal', 'sack']" />
                <span class="ml-3">Enviar</span>
              </template>

              <g-menu-item-group>
                <template #title>
                  <span>Multi envió</span>
                </template>
                <g-menu-item index="1-1">item one</g-menu-item>
                <g-menu-item index="1-2">item two</g-menu-item>
              </g-menu-item-group>

              <g-sub-menu index="1-4">
                <template #title>
                  <font-awesome-icon :icon="['fal', 'hand-holding-usd']" />
                  <span class="ml-3">Envió de algo</span>
                </template>
                <g-menu-item index="1-4-1">item one</g-menu-item>
              </g-sub-menu>
            </g-sub-menu>

            <g-sub-menu index="2">
              <template #title>
                <font-awesome-icon :icon="['fal', 'coins']" />
                <span class="ml-3">Navigator Otro</span>
              </template>
              <g-menu-item index="2-1">item one</g-menu-item>
              <g-menu-item index="2-2">item two</g-menu-item>
            </g-sub-menu>

            <g-menu-item index="4" disabled>
              <font-awesome-icon :icon="['fal', 'receipt']" />
              <template #title>
                <span class="ml-3">Movimientos</span>
              </template>
            </g-menu-item>
          </g-menu>
        </div>
      </g-config-provider>
    `,
  }
};


export const Default = Template.bind({});