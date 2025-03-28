import { StoryFn, Meta } from "@storybook/vue3";
import Avatar from '../components/avatar';

export default {
  title: 'Data/Avatar',
  component: Avatar,
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => ({
  components: { Avatar },
  template: `<Avatar v-bind="args" solid />`,
  setup() {
    return { args };
  }
});

export const Default = Template.bind({});
Default.args = {
  text: 'JA'
};