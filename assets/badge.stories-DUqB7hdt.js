import{G as r}from"./Badge-Di0Vpnwc.js";import{G as n}from"./ConfigProvider-pNTTooVT.js";import"./iframe-Dm8_k2cn.js";import"./preload-helper-Dch09mLN.js";import"./useEmptyValues-V_TCuIRx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Data/Badge",component:r},a=o=>({components:{GBadge:r,GConfigProvider:n},template:`
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
