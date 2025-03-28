import { StoryFn, Meta } from "@storybook/vue3";
import { Loader } from '../components/loader';

export default {
  title: 'Feedback/Loader',
  component: Loader,
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => ({
  components: { Loader },
  template: `<Loader v-bind="args"/>`,
  setup() {
    return { args };
  }
});

export const Default = Template.bind({});
Default.args = {
  show: true
};