import{G as o,a as r}from"./SkeletonItem-hAKHCl9-.js";import{G as s}from"./ConfigProvider-Br84NlF7.js";import"./vue.esm-bundler-C43JrhH2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./install-CfJGiCvs.js";import"./index-70yognVe.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-D5bIuBCX.js";const v={title:"Data/Skeleton",component:r,subcomponents:{GSkeletonItem:o},argTypes:{animated:{defaultValue:!0},count:{defaultValue:1},rows:{defaultValue:3}},parameters:{docs:{description:{component:"When loading data, and you need a rich experience for visual and interactions for your end users, you can choose `skeleton`. <br /> <br /> You can configure the row numbers yourself, for more precise rendering effect, the actual rendered row number will always be 1 row more than the given number, that is because we are rendering a title row with 33% width of the other. <br /> We have provided a switch flag indicating whether showing the loading animation, called animated when this is true, all children of g-skeleton will show animation"}}}},i=a=>({components:{GSkeleton:r,GConfigProvider:s,GSkeletonItem:o},template:`
    <g-config-provider>
      <g-skeleton v-bind="args" />
      <br />
      <g-skeleton style="--gui-skeleton-circle-size: 100px" animated>
        <template #template>
          <g-skeleton-item variant="circle" />
        </template>
      </g-skeleton>
    </g-config-provider>
  `,setup(){return{args:a}}}),n=i.bind({}),l=()=>({components:{GSkeleton:r,GConfigProvider:s,GSkeletonItem:o},template:`
    <g-config-provider>
      <g-skeleton style="width: 240px" animated>
        <template #template>
          <g-skeleton-item variant="image" class="w-60 h-60 rounded-sm" />
          <g-skeleton-item class="mt-3 w-7/12" variant="p" />
          <div class="w-full flex items-center justify-between">
            <g-skeleton-item variant="text" class="mr-5" />
            <g-skeleton-item variant="text" class="w-1/3" style="--gui-skeleton-color: purple;" />
          </div>
        </template>
      </g-skeleton>
    </g-config-provider>
  `}),e=l.bind({});e.parameters={docs:{description:{story:"Global66 B2B UI only provides the most common template, sometimes that could be a problem, so you have a slot named template to do that work. <br /> <br /> Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference."}}};const c=()=>({components:{GSkeleton:r,GConfigProvider:s,GSkeletonItem:o},template:`
    <g-config-provider>
      <g-skeleton :throttle="500" animated />
    </g-config-provider>
  `}),t=c.bind({});t.parameters={docs:{description:{story:"Sometimes API responds very quickly, when that happens, the skeleton just gets rendered to the DOM then it needs to switch back to real DOM, that causes the sudden flashy. To avoid such thing, you can use the `throttle` attribute."}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GSkeleton,
    GConfigProvider,
    GSkeletonItem
  },
  template: \`
    <g-config-provider>
      <g-skeleton v-bind="args" />
      <br />
      <g-skeleton style="--gui-skeleton-circle-size: 100px" animated>
        <template #template>
          <g-skeleton-item variant="circle" />
        </template>
      </g-skeleton>
    </g-config-provider>
  \`,
  setup() {
    return {
      args
    };
  }
})`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GSkeleton,
    GConfigProvider,
    GSkeletonItem
  },
  template: \`
    <g-config-provider>
      <g-skeleton style="width: 240px" animated>
        <template #template>
          <g-skeleton-item variant="image" class="w-60 h-60 rounded-sm" />
          <g-skeleton-item class="mt-3 w-7/12" variant="p" />
          <div class="w-full flex items-center justify-between">
            <g-skeleton-item variant="text" class="mr-5" />
            <g-skeleton-item variant="text" class="w-1/3" style="--gui-skeleton-color: purple;" />
          </div>
        </template>
      </g-skeleton>
    </g-config-provider>
  \`
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GSkeleton,
    GConfigProvider,
    GSkeletonItem
  },
  template: \`
    <g-config-provider>
      <g-skeleton :throttle="500" animated />
    </g-config-provider>
  \`
})`,...t.parameters?.docs?.source}}};const w=["Default","Custom","Bouncing"];export{t as Bouncing,e as Custom,n as Default,w as __namedExportsOrder,v as default};
