import { StoryFn, Meta } from "@storybook/vue3";
import { ref } from "vue";
import { GCollapse, GCollapseItem } from '../components/collapse';
import { GConfigProvider } from '../components/config-provider';

export default {
  title: 'Data/Collapse',
  component: GCollapse,
  subcomponents: { GCollapseItem },
  argTypes: {
    animated: {
      defaultValue: true,
    },
    count: {
      defaultValue: 1,
    },
    rows: {
      defaultValue: 3,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The collapse component will help us to compress the information, to be able to make it work like an accordion, this means that only one can be open`,
      },
    },
  },
} as Meta<typeof GCollapse>;

const Template: StoryFn<typeof GCollapse> = (args) => ({
  components: { GCollapse, GConfigProvider, GCollapseItem },
  template: `
    <g-config-provider>
      <button @click="toggleDisabled">
        click {{ disabled }}
      </button>
      <g-collapse
        v-model="accordionIndex"
        accordion
        :disabled="disabled"
        prevent-default
        @click-item="onClickItem"
        class="grid grid-cols-1 gap-y-6 mt-6">
          <g-collapse-item title="Titulo 01" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
          <g-collapse-item title="Titulo 02" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
      </g-collapse>
    </g-config-provider>
  `,
  setup() {

    const disabled = ref(false);
    const accordionIndex = ref(0);
    function onClickItem(item) {
      console.log(item)
    }

    function toggleDisabled() {
      disabled.value = !disabled.value;
    }

    return {
      args,
      toggleDisabled,
      disabled,
      onClickItem,
      accordionIndex,
    };
  },
});

export const Default = Template.bind({});

const TemplateSkeletonCustom: StoryFn<typeof GCollapse> = () => ({
  components: { GCollapse, GConfigProvider, GCollapseItem },
  template: `
    <g-config-provider>
      accordionIndex: {{ accordionIndex }}
      <g-collapse
        v-model="accordionIndex"
        @click-item="onClickItem"
        class="grid grid-cols-1 gap-y-6 mt-6">
          <g-collapse-item title="Titulo 01" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
          <g-collapse-item title="Titulo 02" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
      </g-collapse>
    </g-config-provider>
  `,
  setup() {
    const accordionIndex = ref([0]);
    function onClickItem(item) {
      console.log(item)
    }

    return {
      onClickItem,
      accordionIndex,
    }
  }
});

export const Custom = TemplateSkeletonCustom.bind({});
Custom.parameters = {
  docs: {
    description: {
      story: `Global66 B2B UI only provides the most common template, sometimes that could be a problem, so you have a slot named template to do that work. <br /> <br /> Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference.`,
    },
  },
}