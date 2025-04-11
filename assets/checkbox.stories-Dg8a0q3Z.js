import{r as l}from"./vue.esm-bundler-BmNPGRkA.js";import{a as s}from"./index-DF3TZHzz.js";import{G as d}from"./ConfigProvider-DXUgDH9p.js";import"./index-BBJgTkeT.js";import"./_arrayPush-BTZjb8bE.js";import"./event-BB_Ol6Sd.js";import"./index-BsfyV7Ae.js";import"./index-CrAkN-9E.js";import"./index-BHYX4iOF.js";import"./_initCloneObject-lUptluD5.js";import"./castArray-D-e3jlfW.js";import"./use-form-common-props-BNw-y6r4.js";import"./constants-Dnj8X3EN.js";import"./error-Cq9Fpw4b.js";import"./isEqual-y50BTXQA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const P={title:"Form/Checkbox/Single",component:s,parameters:{docs:{description:{component:`
El componente \`GCheckbox\` es un elemento de selección que permite activar o desactivar una opción.

### Instalación
\`\`\`bash
yarn add @flash-global66/g-checkbox
\`\`\`

### Importación

\`\`\`typescript
import { GCheckbox } from '@flash-global66/g-checkbox'
import '@flash-global66/g-checkbox/checkbox.styles.scss'
\`\`\`

### Ejemplo básico:
\`\`\`html
<g-checkbox v-model="checked" label="Acepto los términos" />
\`\`\`
        `}}},argTypes:{modelValue:{description:"Valor del modelo (v-model)",table:{type:{summary:"number | string | boolean"},category:"Principales"}},label:{description:"Etiqueta del checkbox cuando se usa dentro de un grupo",control:"text",table:{category:"Principales",type:{summary:"string | boolean | number | object"}}},value:{description:"Valor del checkbox cuando se usa dentro de un grupo",control:"object",table:{category:"Principales",type:{summary:"string | boolean | number | object"}}},trueValue:{description:"Valor cuando está activado",control:"text",table:{category:"Valores",type:{summary:"string | number"}}},falseValue:{description:"Valor cuando está desactivado",control:"text",table:{category:"Valores",type:{summary:"string | number"}}},indeterminate:{description:"Estado visual indeterminado",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},checked:{description:"Indica si el checkbox está activado",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Deshabilita el componente",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{description:"Atributo name nativo",control:"text",table:{category:"Atributos HTML",type:{summary:"string"}}},id:{description:"ID nativo del input",control:"text",table:{category:"Atributos HTML",type:{summary:"string"}}},tabindex:{description:"Orden de tabulación",control:"number",table:{category:"Atributos HTML",type:{summary:"string | number"}}},validateEvent:{description:"Activa la validación del formulario",control:"boolean",table:{category:"Validación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},ariaControls:{description:"ID de los elementos controlados (ARIA)",control:"text",table:{category:"Accesibilidad",type:{summary:"string"}}},"onUpdate:modelValue":{description:"Se emite al actualizar el valor",table:{category:"Eventos",type:{summary:"number | string | boolean"}}},onChange:{description:"Se emite al cambiar el estado",table:{category:"Eventos",type:{summary:"number | string | boolean"}}},default:{description:"Slot personalizado para el contenido del checkbox",table:{category:"Slots",type:{summary:"slot"}}}},args:{disabled:!1,indeterminate:!1,checked:!1,validateEvent:!0,label:"Etiqueta del checkbox",value:"Valor del checkbox",name:"checkbox-name",id:"checkbox-id"}},n=(t,{argTypes:c})=>({props:Object.keys(c),components:{GCheckbox:s,GConfigProvider:d},setup(){const i=l(t.modelValue);return{args:t,value:i}},template:`
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  `}),e=n.bind({});e.args={label:"Default Checkbox",disabled:!1,indeterminate:!1,modelValue:!1};e.parameters={docs:{description:{story:"Checkbox básico en su estado inicial no seleccionado. Muestra la funcionalidad principal con una etiqueta estándar."}}};const o=n.bind({});o.args={...e.args,checked:!0};o.parameters={docs:{description:{story:"Checkbox en estado seleccionado. Ejemplo de uso con `v-model` vinculado a un valor verdadero. Ideal para mostrar opciones activadas por defecto."}}};const a=n.bind({});a.args={...e.args,disabled:!0};a.parameters={docs:{description:{story:"Checkbox deshabilitado no interactivo. Útil para estados donde la acción no está disponible temporalmente. Se combina con otros estados como checked o indeterminate."}}};const r=n.bind({});r.args={...e.args,indeterminate:!0};r.parameters={docs:{description:{story:"Estado visual indeterminado (ni chequeado ni deschequeado). Usado comúnmente en selecciones parciales o grupos con múltiples opciones. Requiere control programático."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: CheckboxProps, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    GCheckbox,
    GConfigProvider
  },
  setup() {
    const value = ref(args.modelValue);
    return {
      args,
      value
    };
  },
  template: \`
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  \`
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: CheckboxProps, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    GCheckbox,
    GConfigProvider
  },
  setup() {
    const value = ref(args.modelValue);
    return {
      args,
      value
    };
  },
  template: \`
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  \`
})`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: CheckboxProps, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    GCheckbox,
    GConfigProvider
  },
  setup() {
    const value = ref(args.modelValue);
    return {
      args,
      value
    };
  },
  template: \`
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  \`
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: CheckboxProps, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    GCheckbox,
    GConfigProvider
  },
  setup() {
    const value = ref(args.modelValue);
    return {
      args,
      value
    };
  },
  template: \`
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  \`
})`,...r.parameters?.docs?.source}}};const j=["Default","Checked","Disabled","Indeterminate"];export{o as Checked,e as Default,a as Disabled,r as Indeterminate,j as __namedExportsOrder,P as default};
