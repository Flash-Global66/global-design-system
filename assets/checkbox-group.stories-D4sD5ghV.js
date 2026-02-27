import{r as u}from"./vue.esm-bundler-C43JrhH2.js";import{G as d,a as b}from"./index-DUjscpv2.js";import{G as y}from"./ConfigProvider-Br84NlF7.js";import{v,p as i}from"./package-DRu2lz_I.js";import{a as g,b as l}from"./documentation-stories-DKOl0nGm.js";import"./index-D5bIuBCX.js";import"./index-CdSB2Bdf.js";import"./install-CfJGiCvs.js";import"./_arrayPush-BhjrZnJY.js";import"./event-BB_Ol6Sd.js";import"./index-DH2w0SzE.js";import"./index-fhkPmQjX.js";import"./index-DmfABaPz.js";import"./use-form-common-props-C2RO3VSy.js";import"./constants-Dnj8X3EN.js";import"./error-Cq9Fpw4b.js";import"./isEqual-Cz4oPyRM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";const U={title:"Form/Checkbox/Group",component:d,parameters:{docs:{description:{component:`
El componente GCheckboxGroup es un grupo de checkboxes que permite selección múltiple con validación y configuración visual. 

> Versión actual: ${v}

## Características

La función principal del componente es la de agrupar un conjunto de Checkboxes y vincularlos a un mismo estado de referencia, y es por este motivo que el componente hereda todas las características del componente Checkbox, pudiendo personalizarse en mayor o menor medida de acuerdo a como se declaren las opciones del grupo.

Todas las propiedades que se declaran en el componente aplican a todos los checkboxes incluidos en el grupo. Si se desea utilizar un estado por defecto en un elemento del grupo en particular, se puede realizar de las dos maneras en las que se pueden declarar los elementos del mismo:

- Si el componente toma las opciones a través de la propiedad \`options\`, estas se deben declarar como un array de objetos con -como mínimo-, los atributos \`value\` y \`label\`. También se pueden agregar props que indiquen un estado por defecto para uno o mas elementos, simplemente agregando un atributo de tipo booleano, con el nombre de la prop que queremos declarar para ese elemento (por ejemplo: \`checked\`, \`disabled\` o \`indeterminate\`).
- Si el componente toma las opciones a partir de slots con checkboxes individuales, se deben declarar al menos las propiedades de label y value de cada checkbox, y se pueden indicar estados y caracteristicas individuales a través de las props, tal como se indica en la documentación de estos componentes.

> Se puede encontrar un ejemplo práctico en la sección de <a href="#uso-basico">Uso Básico</a>

## Instalación

\`\`\`bash
yarn add @flash-global66/g-checkbox
\`\`\`

## Importación del componente

\`\`\`typescript
# importar donde se va a utilizar
import { GCheckboxGroup } from '@flash-global66/g-checkbox'

# recomendado importar en los estilos globales
@use '@flash-global66/g-checkbox/styles.scss' as *;
\`\`\`

## Dependencias

Este componente requiere:

${g(i)}

\`\`\`bash
# Dependencias global66
yarn add ${l(i)}

# Dependencias externas
yarn add ${l(i,!0)}
\`\`\`

<h2 id="uso-basico">Uso básico</h2>

**Ejemplo con slots personalizados:**

\`\`\`html
<g-checkbox-group 
  v-bind="args"
  v-model="selectedValues"
>
  <g-checkbox label="Importaciones" value="Value A" />
  <g-checkbox label="Inversiones" value="Value B" />
</g-checkbox-group>
\`\`\`

**Ejemplo con opciones predefinidas:**

\`\`\`javascript
const selectedValues = ref([]);
const options = [
  { value: "Value A", label: "Importaciones" },
  { value: "Value B", label: "Inversiones" },
  { value: "Value C", label: "Exportaciones", checked: true },
  { value: "Value D", label: "Transferencias", disabled: true },
  { value: "Value E", label: "Otros", indeterminate: true },
];

const checkboxGroupProps = {
    disabled: false,
    layout: "horizontal",
    ariaLabel: "Grupo de opciones",
}
\`\`\`

\`\`\`html
<g-checkbox-group
  v-bind="checkboxGroupProps"
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
          `},defaultValue:{summary:"[]"},category:"Principales"}},modelValue:{description:"Valores seleccionados (v-model)",control:"object",table:{type:{summary:"CheckboxGroupValueType",detail:"Array<string | number | boolean>"},defaultValue:{summary:"[]"},category:"Principales"}},min:{description:"Mínimo de checkboxes seleccionados",control:{type:"number",min:0},table:{type:{summary:"number"},category:"Validación"}},max:{description:"Máximo de checkboxes seleccionados",control:{type:"number",min:1},table:{type:{summary:"number"},category:"Validación"}},validateEvent:{description:"Activa validación de formulario",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Validación"}},layout:{description:"Diseño del grupo",control:"select",options:["horizontal","vertical"],table:{type:{summary:"layoutType",detail:"'horizontal' | 'vertical'"},defaultValue:{summary:"horizontal"},category:"Apariencia"}},border:{description:"Indica si debe mostrarse el checkbox con borde",control:"boolean",table:{category:"Apariencia",type:{summary:"boolean"}}},invert:{description:"Indica si debe mostrarse el checkbox con el label y el check input invertidos",control:"boolean",table:{category:"Apariencia",type:{summary:"boolean"}}},tag:{description:"Elemento HTML contenedor",control:"select",options:["div","span","fieldset"],table:{type:{summary:"string"},defaultValue:{summary:"div"},category:"Apariencia"}},ariaLabel:{description:"Etiqueta ARIA para el grupo",control:"text",table:{type:{summary:"string"},category:"Accesibilidad"}},"onUpdate:modelValue":{description:"Se emite al actualizar los valores",table:{category:"Eventos",type:{summary:"CheckboxGroupValueType",detail:"Array<string | number>"}}},onChange:{description:"Se emite al cambiar la selección",table:{category:"Eventos",type:{summary:"CheckboxGroupValueType",detail:"Array<string | number>"}}},default:{description:"Slot para contenido personalizado de cada checkbox",table:{category:"Slots",type:{summary:"slot"}}}},args:{options:[],modelValue:[],disabled:!1,layout:"horizontal",tag:"div",min:void 0,max:void 0,validateEvent:!0,ariaLabel:"Grupo de opciones"}},e={render:p=>({components:{GCheckboxGroup:d,GCheckbox:b,GConfigProvider:y},setup(){const m=u([]);return{args:p,selectedValues:m,options:[{value:"Value A",label:"Importaciones"},{value:"Value B",label:"Inversiones"},{value:"Value C",label:"Exportaciones",checked:!0},{value:"Value D",label:"Transferencias",disabled:!0},{value:"Value E",label:"Otros"}]}},template:`
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
    `})},o={...e,args:{},parameters:{docs:{description:{story:"Grupo de checkboxes básico. Muestra la funcionalidad principal de selección múltiple con valores en array. Los checkboxes se muestran en línea por defecto."}}}},a={...e,args:{disabled:!0,modelValue:["Value A"]},parameters:{docs:{description:{story:"Grupo completo deshabilitado. Todos los checkboxes están no interactivos. Útil para estados donde la selección no está disponible temporalmente."}}}},r={...e,args:{min:1,max:2},parameters:{docs:{description:{story:"Grupo con restricciones de selección. Permite definir mínimo (1) y máximo (2) de opciones seleccionables. Muestra validación automática al exceder los límites."}}}},s={...e,args:{layout:"vertical"},parameters:{docs:{description:{story:"Checkboxes apilados verticalmente. Controlado mediante la propiedad `layout: vertical`. Ideal para formularios con espacio vertical limitado."}}}},t={...e,args:{layout:"vertical",invert:!0},parameters:{docs:{description:{story:"Ejemplo del componente con checkboxes con elementos invertidos, controlados mediante la propiedad `invert: true`."}}}},n={...e,args:{layout:"vertical",border:!0},parameters:{docs:{description:{story:"Ejemplo del componente con checkboxes con bordes, controlados mediante la propiedad `border: true`."}}}},c={...e,args:{layout:"vertical",border:!0,invert:!0},parameters:{docs:{description:{story:"Ejemplo del componente con checkboxes con borde y elementos invertidos para mostrar la interacción de las propiedades `border` e `invert`."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Grupo de checkboxes básico. Muestra la funcionalidad principal de selección múltiple con valores en array. Los checkboxes se muestran en línea por defecto."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    disabled: true,
    modelValue: ["Value A"]
  },
  parameters: {
    docs: {
      description: {
        story: "Grupo completo deshabilitado. Todos los checkboxes están no interactivos. Útil para estados donde la selección no está disponible temporalmente."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    min: 1,
    max: 2
  },
  parameters: {
    docs: {
      description: {
        story: "Grupo con restricciones de selección. Permite definir mínimo (1) y máximo (2) de opciones seleccionables. Muestra validación automática al exceder los límites."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    layout: "vertical"
  },
  parameters: {
    docs: {
      description: {
        story: "Checkboxes apilados verticalmente. Controlado mediante la propiedad \`layout: vertical\`. Ideal para formularios con espacio vertical limitado."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    layout: "vertical",
    invert: true
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo del componente con checkboxes con elementos invertidos, controlados mediante la propiedad \`invert: true\`."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    layout: "vertical",
    border: true
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo del componente con checkboxes con bordes, controlados mediante la propiedad \`border: true\`."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    layout: "vertical",
    border: true,
    invert: true
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo del componente con checkboxes con borde y elementos invertidos para mostrar la interacción de las propiedades \`border\` e \`invert\`."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const W=["Basic","Disabled","WithLimits","VerticalLayout","InvertedStyle","BorderedStyle","InvertedBorderedStyle"];export{o as Basic,n as BorderedStyle,a as Disabled,c as InvertedBorderedStyle,t as InvertedStyle,s as VerticalLayout,r as WithLimits,W as __namedExportsOrder,U as default};
