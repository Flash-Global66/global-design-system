import{G as r}from"./Badge-CwEn5YvK.js";import{G as n}from"./ConfigProvider-BqhlbfRA.js";import"./iframe-D90pIHqA.js";import"./preload-helper-Dch09mLN.js";import"./useEmptyValues-DtpA5Ecf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Data/Badge",component:r},a=o=>({components:{GBadge:r,GConfigProvider:n},template:`
  <g-config-provider>
    <g-badge value="8" v-bind="args">
      Hola
    </g-badge>
  </g-config-provider>
  `,setup(){return{args:o}}}),e=a.bind({});e.args={text:"JA"};const c=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GBadge,
    GConfigProvider
  },
  template: \`
  <g-config-provider>
    <g-badge value="8" v-bind="args">
      Hola
    </g-badge>
  </g-config-provider>
  \`,
  setup() {
    return {
      args
    };
  }
})`,...e.parameters?.docs?.source}}};export{e as Default,c as __namedExportsOrder,m as default};
