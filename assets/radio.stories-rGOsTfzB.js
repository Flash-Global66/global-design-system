import{I as o}from"./index-CeKEI0V6.js";import{G as t}from"./ConfigProvider-ilMzuFCG.js";import"./vue.esm-bundler-BJr11hwL.js";import"./index-BTFHqAey.js";import"./index-B8ScOe4Z.js";import"./install-BguVdh6e.js";import"./index-CeJqMXT-.js";import"./_arrayPush-pzQDnaVN.js";import"./event-HEVJa2N9.js";import"./index-BPX3jD76.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Form/Radio/Single",component:o,parameters:{docs:{description:{component:`
Uso básico
Componente de selección única entre un grupo de opciones.

Ejemplo básico:

\`\`\`vue
<g-radio v-model="selected" label="Opción 1" value="1" />
\`\`\`
`}}},argTypes:{modelValue:{description:"Valor del modelo (v-model)",table:{type:{summary:"string | number | boolean"},category:"Principales"}},label:{description:"Etiqueta visible del radio",control:"text",table:{category:"Principales",type:{summary:"string | number | boolean"}}},value:{description:"Valor único del radio",control:"object",table:{category:"Principales",type:{summary:"string | number | boolean"}}},disabled:{description:"Deshabilita el componente",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{description:"Atributo name nativo para agrupación",control:"text",table:{category:"Atributos HTML",type:{summary:"string"}}},"onUpdate:modelValue":{description:"Se emite al actualizar la selección",table:{category:"Eventos",type:{summary:"string | number | boolean"}}},onChange:{description:"Se emite al cambiar la selección",table:{category:"Eventos",type:{summary:"string | number | boolean"}}},default:{description:"Slot para contenido personalizado para radio",table:{category:"Slots",type:{summary:"slot"}}}},args:{disabled:!1,label:"Etiqueta del radio",modelValue:!1,value:"valor-radio",name:"radio-group"}},n=(a,{argTypes:r})=>({props:Object.keys(r),components:{GRadio:o,GConfigProvider:t},setup(){return{args:a}},template:`
    <g-config-provider>
      <g-radio v-bind="args" v-model="args.modelValue" />
    </g-config-provider>
  `}),e=n.bind({});e.args={label:"Opción predeterminada"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: RadioProps, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    GRadio,
    GConfigProvider
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <g-config-provider>
      <g-radio v-bind="args" v-model="args.modelValue" />
    </g-config-provider>
  \`
})`,...e.parameters?.docs?.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,v as default};
