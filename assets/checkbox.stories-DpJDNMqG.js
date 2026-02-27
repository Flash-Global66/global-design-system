import{r as b}from"./vue.esm-bundler-C43JrhH2.js";import{a as l}from"./index-DUjscpv2.js";import{G as d}from"./ConfigProvider-Br84NlF7.js";import{v as u,p as c}from"./package-DRu2lz_I.js";import{a as g,b as i}from"./documentation-stories-DKOl0nGm.js";import"./index-D5bIuBCX.js";import"./index-CdSB2Bdf.js";import"./install-CfJGiCvs.js";import"./_arrayPush-BhjrZnJY.js";import"./event-BB_Ol6Sd.js";import"./index-DH2w0SzE.js";import"./index-fhkPmQjX.js";import"./index-DmfABaPz.js";import"./use-form-common-props-C2RO3VSy.js";import"./constants-Dnj8X3EN.js";import"./error-Cq9Fpw4b.js";import"./isEqual-Cz4oPyRM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";const z={title:"Form/Checkbox/Single",component:l,parameters:{docs:{description:{component:`
El componente Checkbox es un elemento de selección que permite activar o desactivar una opción.

> Versión actual: ${u}

## Características

El componente consta de dos elementos base (input check + label), cuya disposición y apariencia puede variar

Posee tres opciones de estilo, de acuerdo a si se le envían o no ciertas props:
- Por defecto: el componente aparecerá con el formato input check + label
- \`invert\`: invierte los elementos del componente para dejarlo con el formato label + input check. Es importante destacar que esta configuración alinea los elementos a la derecha, por lo cual se utiliza sobre todo con el border y en casos donde una serie de checks deban alinearse hacia la derecha y su tamaño dependerá del contenedor padre del checkbox.
- \`border\`: agrega un borde al componente, envolviendo tanto el label como el input check, sea cual sea su orden.

Mas allá del estilo seleccionado para el componente, este cuenta con 4 estados:
- Sin checkear: el valor se encuentra deseleccionado.
- Checked: el valor se ha seleccionado.
- Indeterminate: el valor se encuentra en un punto medio (generalmente utilizado cuando existe un check 'padre' que cuenta con checks 'hijos' cuya selección no es completa.)
- Disabled: el valor no se puede seleccionar.

## Instalación

\`\`\`bash
yarn add @flash-global66/g-checkbox
\`\`\`

## Importación del componente

\`\`\`typescript
# importar donde se va a utilizar
import { GCheckbox } from '@flash-global66/g-checkbox'

# recomendado importar en los estilos globales
@use '@flash-global66/g-checkbox/styles.scss' as *;
\`\`\`

## Dependencias

Este componente requiere:

${g(c)}

\`\`\`bash
# Dependencias global66
yarn add ${i(c)}

# Dependencias externas
yarn add ${i(c,!0)}
\`\`\`

## Uso básico
\`\`\`html
<!--- Componente básico --->
<g-checkbox v-model="checked" label="Acepto los términos" />

<!--- Componente con borde --->
<g-checkbox v-model="checked" label="Acepto los términos" border />

<!--- Componente invertido con borde --->
<g-checkbox v-model="checked" label="Acepto los términos" border invert />
\`\`\`
        `}}},argTypes:{modelValue:{description:"Valor del modelo (v-model)",table:{type:{summary:"number | string | boolean"},category:"Principales"}},label:{description:"Etiqueta del checkbox cuando se usa dentro de un grupo",control:"text",table:{category:"Principales",type:{summary:"string | boolean | number | object"}}},value:{description:"Valor del checkbox cuando se usa dentro de un grupo",control:"object",table:{category:"Principales",type:{summary:"string | boolean | number | object"}}},border:{description:"Indica si debe mostrarse el checkbox con borde",control:"boolean",table:{category:"Apariencia",type:{summary:"boolean"}}},invert:{description:"Indica si debe mostrarse el checkbox con el label y el check input invertidos",control:"boolean",table:{category:"Apariencia",type:{summary:"boolean"}}},trueValue:{description:"Valor cuando está activado",control:"text",table:{category:"Valores",type:{summary:"string | number"}}},falseValue:{description:"Valor cuando está desactivado",control:"text",table:{category:"Valores",type:{summary:"string | number"}}},indeterminate:{description:"Estado visual indeterminado",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},checked:{description:"Indica si el checkbox está activado",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Deshabilita el componente",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{description:"Atributo name nativo",control:"text",table:{category:"Atributos HTML",type:{summary:"string"}}},id:{description:"ID nativo del input",control:"text",table:{category:"Atributos HTML",type:{summary:"string"}}},tabindex:{description:"Orden de tabulación",control:"number",table:{category:"Atributos HTML",type:{summary:"string | number"}}},validateEvent:{description:"Activa la validación del formulario",control:"boolean",table:{category:"Validación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},ariaControls:{description:"ID de los elementos controlados (ARIA)",control:"text",table:{category:"Accesibilidad",type:{summary:"string"}}},"onUpdate:modelValue":{description:"Se emite al actualizar el valor",table:{category:"Eventos",type:{summary:"number | string | boolean"}}},onChange:{description:"Se emite al cambiar el estado",table:{category:"Eventos",type:{summary:"number | string | boolean"}}},default:{description:"Slot personalizado para el contenido del checkbox",table:{category:"Slots",type:{summary:"slot"}}}},args:{disabled:!1,indeterminate:!1,checked:!1,validateEvent:!0,label:"Etiqueta del checkbox",value:"Valor del checkbox",name:"checkbox-name",id:"checkbox-id"}},s=(r,{argTypes:p})=>({props:Object.keys(p),components:{GCheckbox:l,GConfigProvider:d},setup(){const m=b(r.modelValue);return{args:r,value:m}},template:`
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  `}),e=s.bind({});e.args={label:"Básico",disabled:!1,indeterminate:!1,modelValue:!1};e.parameters={docs:{description:{story:"Checkbox básico en su estado inicial no seleccionado. Muestra la funcionalidad principal con una etiqueta estándar."}}};const o=s.bind({});o.args={...e.args,checked:!0};o.parameters={docs:{description:{story:"Checkbox en estado seleccionado. Ejemplo de uso con `v-model` vinculado a un valor verdadero. Ideal para mostrar opciones activadas por defecto."}}};const a=s.bind({});a.args={...e.args,disabled:!0};a.parameters={docs:{description:{story:"Checkbox deshabilitado no interactivo. Útil para estados donde la acción no está disponible temporalmente. Se combina con otros estados como checked o indeterminate."}}};const n=s.bind({});n.args={...e.args,indeterminate:!0};n.parameters={docs:{description:{story:"Estado visual indeterminado (ni chequeado ni deschequeado). Usado comúnmente en selecciones parciales o grupos con múltiples opciones. Requiere control programático."}}};const t={name:"Style options",parameters:{docs:{description:{story:"Ejemplo del componente con diferentes estilos controlados por las propiedades `border` e `invert`."},source:{code:`
<template>
  <!-- Basic -->
  <p class="ml-md font-semibold">Basic</p>
  <div class="flex p-md items-center">
    <g-checkbox label="Etiqueta del checkbox" value="Valor del checkbox" />
  </div>

  <!-- With border -->
  <p class="ml-md font-semibold">With border</p>
  <div class="p-md">
    <g-checkbox label="Etiqueta del checkbox" value="Valor del checkbox" border />
  </div>

  <!-- Inverted -->
  <p class="ml-md font-semibold">Inverted</p>
  <div class='flex flex-col gap-xs p-md w-fit justify-start'>
    <g-checkbox label="Etiqueta del checkbox" value="Valor del checkbox" invert />
    <g-checkbox label="Etiqueta de Checkbox larga" value="Check-2" invert />
  </div>

  <!-- Border + invert -->
  <p class="ml-md font-semibold">Border + invert</p>
  <div class="p-md">
    <g-checkbox label="Etiqueta del checkbox" value="Valor del checkbox" border invert />
  </div>
</template>
        `,language:"html"}}},render:r=>({components:{GCheckbox:l,GConfigProvider:d},setup(){return{args:r}},template:`
    <g-config-provider>
      <p class="ml-md font-semibold">Basic</p>
      <div class="flex p-md items-center">
        <g-checkbox v-bind="args" />
      </div>

      <p class="ml-md font-semibold">With border</p>
      <div class="p-md">
        <g-checkbox v-bind="args" border />
      </div>

      <p class="ml-md font-semibold">Inverted</p>
      <div class='flex flex-col gap-xs p-md w-fit justify-start'>
        <g-checkbox v-bind="args" invert />
        <g-checkbox label="Etiqueta de Checkbox larga" value="Check-2" invert />
      </div>

      <p class="ml-md font-semibold">Border + invert</p>
      <div class="p-md">
        <g-checkbox v-bind="args" border invert />
      </div>
    </g-config-provider>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: CheckboxProps, {
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
})`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: CheckboxProps, {
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
})`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Style options",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo del componente con diferentes estilos controlados por las propiedades \`border\` e \`invert\`."
      },
      source: {
        code: \`
<template>
  <!-- Basic -->
  <p class="ml-md font-semibold">Basic</p>
  <div class="flex p-md items-center">
    <g-checkbox label="Etiqueta del checkbox" value="Valor del checkbox" />
  </div>

  <!-- With border -->
  <p class="ml-md font-semibold">With border</p>
  <div class="p-md">
    <g-checkbox label="Etiqueta del checkbox" value="Valor del checkbox" border />
  </div>

  <!-- Inverted -->
  <p class="ml-md font-semibold">Inverted</p>
  <div class='flex flex-col gap-xs p-md w-fit justify-start'>
    <g-checkbox label="Etiqueta del checkbox" value="Valor del checkbox" invert />
    <g-checkbox label="Etiqueta de Checkbox larga" value="Check-2" invert />
  </div>

  <!-- Border + invert -->
  <p class="ml-md font-semibold">Border + invert</p>
  <div class="p-md">
    <g-checkbox label="Etiqueta del checkbox" value="Valor del checkbox" border invert />
  </div>
</template>
        \`,
        language: "html"
      }
    }
  },
  render: args => ({
    components: {
      GCheckbox,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <g-config-provider>
      <p class="ml-md font-semibold">Basic</p>
      <div class="flex p-md items-center">
        <g-checkbox v-bind="args" />
      </div>

      <p class="ml-md font-semibold">With border</p>
      <div class="p-md">
        <g-checkbox v-bind="args" border />
      </div>

      <p class="ml-md font-semibold">Inverted</p>
      <div class='flex flex-col gap-xs p-md w-fit justify-start'>
        <g-checkbox v-bind="args" invert />
        <g-checkbox label="Etiqueta de Checkbox larga" value="Check-2" invert />
      </div>

      <p class="ml-md font-semibold">Border + invert</p>
      <div class="p-md">
        <g-checkbox v-bind="args" border invert />
      </div>
    </g-config-provider>
    \`
  })
}`,...t.parameters?.docs?.source}}};const M=["Basic","Checked","Disabled","Indeterminate","Styles"];export{e as Basic,o as Checked,a as Disabled,n as Indeterminate,t as Styles,M as __namedExportsOrder,z as default};
