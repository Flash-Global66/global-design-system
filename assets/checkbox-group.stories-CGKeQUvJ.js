import{r as n}from"./vue.esm-bundler-BUoj5ptC.js";import{G as s,a as c}from"./index-Bi1aBl0V.js";import{G as p}from"./ConfigProvider-CrOhbRZ6.js";import"./index-BcGPpLRa.js";import"./index-KaGzp0yT.js";import"./event-BB_Ol6Sd.js";import"./index-Dh3Gw0Zf.js";import"./_initCloneObject-MVraUcJR.js";import"./castArray-DceVieY3.js";import"./use-form-common-props-DyLglXeD.js";import"./constants-Dnj8X3EN.js";import"./error-Cq9Fpw4b.js";import"./isEqual-B5SlWNVQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const A={title:"Form/Checkbox/Group",component:s,parameters:{docs:{description:{component:`
El componente \`GCheckboxGroup\` es un grupo de checkboxes que permite selección múltiple con validación y configuración visual. Existen dos maneras
de construir el grupo: mediante la propiedad \`options\` o con los slots predeterminados.

### Instalación
\`\`\`bash
yarn add @flash-global66/g-checkbox
\`\`\`

### Importación

\`\`\`typescript
import { GCheckboxGroup } from '@flash-global66/g-checkbox'
import '@flash-global66/g-checkbox/checkbox.styles.scss'
\`\`\`

### Ejemplo con slots personalizados:
\`\`\`html
<g-checkbox-group 
  v-bind="args"
  v-model="selectedValues"
>
  <g-checkbox label="Importaciones" value="Value A" />
  <g-checkbox label="Inversiones" value="Value B" />
</g-checkbox-group>
\`\`\`

### Ejemplo con opciones predefinidas:
\`\`\`html
<g-checkbox-group
  v-bind="args"
  v-model="selectedValues"
  :options="options"
/>
\`\`\`
        `}}},argTypes:{disabled:{description:"Deshabilita todo el grupo",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Estados"}},options:{description:"Array de opciones para construir el grupo de checkboxes",control:"object",table:{type:{summary:"Option[]",detail:`
            type Option = {
  value: CheckboxGroupValueType
  label?: CheckboxGroupValueType
  disabled?: boolean
  checked?: boolean
}
          `},defaultValue:{summary:"[]"},category:"Principales"}},modelValue:{description:"Valores seleccionados (v-model)",control:"object",table:{type:{summary:"CheckboxGroupValueType",detail:"Array<string | number | boolean>"},defaultValue:{summary:"[]"},category:"Principales"}},min:{description:"Mínimo de checkboxes seleccionados",control:{type:"number",min:0},table:{type:{summary:"number"},category:"Validación"}},max:{description:"Máximo de checkboxes seleccionados",control:{type:"number",min:1},table:{type:{summary:"number"},category:"Validación"}},validateEvent:{description:"Activa validación de formulario",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Validación"}},layout:{description:"Diseño del grupo",control:"select",options:["horizontal","vertical"],table:{type:{summary:"layoutType",detail:"'horizontal' | 'vertical'"},defaultValue:{summary:"horizontal"},category:"Apariencia"}},tag:{description:"Elemento HTML contenedor",control:"select",options:["div","span","fieldset"],table:{type:{summary:"string"},defaultValue:{summary:"div"},category:"Apariencia"}},ariaLabel:{description:"Etiqueta ARIA para el grupo",control:"text",table:{type:{summary:"string"},category:"Accesibilidad"}},"onUpdate:modelValue":{description:"Se emite al actualizar los valores",table:{category:"Eventos",type:{summary:"CheckboxGroupValueType",detail:"Array<string | number>"}}},onChange:{description:"Se emite al cambiar la selección",table:{category:"Eventos",type:{summary:"CheckboxGroupValueType",detail:"Array<string | number>"}}},default:{description:"Slot para contenido personalizado de cada checkbox",table:{category:"Slots",type:{summary:"slot"}}}},args:{options:[],modelValue:[],disabled:!1,layout:"horizontal",tag:"div",min:void 0,max:void 0,validateEvent:!0,ariaLabel:"Grupo de opciones"}},t={render:i=>({components:{GCheckboxGroup:s,GCheckbox:c,GConfigProvider:p},setup(){const l=n([]);return{args:i,selectedValues:l,options:[{value:"Value A",label:"Importaciones"},{value:"Value B",label:"Inversiones"},{value:"Value C",label:"Exportaciones",checked:!0},{value:"Value D",label:"Transferencias",disabled:!0},{value:"Value E",label:"Otros"}]}},template:`
    <g-config-provider>
      <g-checkbox-group 
        v-bind="args"
        v-model="selectedValues"
        :options="options"
      />
      <div class="text-3 text-primary-txt font-medium mt-5">
        Valores seleccionados: {{ selectedValues }}
      </div>
    </g-config-provider>
    `})},e={...t,args:{},parameters:{docs:{description:{story:"Grupo de checkboxes básico. Muestra la funcionalidad principal de selección múltiple con valores en array. Los checkboxes se muestran en línea por defecto."}}}},o={...t,args:{disabled:!0,modelValue:["Value A"]},parameters:{docs:{description:{story:"Grupo completo deshabilitado. Todos los checkboxes están no interactivos. Útil para estados donde la selección no está disponible temporalmente."}}}},a={...t,args:{min:1,max:2},parameters:{docs:{description:{story:"Grupo con restricciones de selección. Permite definir mínimo (1) y máximo (2) de opciones seleccionables. Muestra validación automática al exceder los límites."}}}},r={...t,args:{layout:"vertical"},parameters:{docs:{description:{story:"Checkboxes apilados verticalmente. Controlado mediante la propiedad `layout: vertical`. Ideal para formularios con espacio vertical limitado."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Grupo de checkboxes básico. Muestra la funcionalidad principal de selección múltiple con valores en array. Los checkboxes se muestran en línea por defecto.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    disabled: true,
    modelValue: ['Value A']
  },
  parameters: {
    docs: {
      description: {
        story: 'Grupo completo deshabilitado. Todos los checkboxes están no interactivos. Útil para estados donde la selección no está disponible temporalmente.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    min: 1,
    max: 2
  },
  parameters: {
    docs: {
      description: {
        story: 'Grupo con restricciones de selección. Permite definir mínimo (1) y máximo (2) de opciones seleccionables. Muestra validación automática al exceder los límites.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    layout: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes apilados verticalmente. Controlado mediante la propiedad \`layout: vertical\`. Ideal para formularios con espacio vertical limitado.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const E=["Basic","Disabled","WithLimits","VerticalLayout"];export{e as Basic,o as Disabled,r as VerticalLayout,a as WithLimits,E as __namedExportsOrder,A as default};
