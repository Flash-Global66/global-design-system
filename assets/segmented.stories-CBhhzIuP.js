import{G as e}from"./index-D7AK-r3u.js";import{G as l}from"./ConfigProvider-C-g_q7t3.js";import{r as i}from"./vue.esm-bundler-BQ5MY6wY.js";import"./index-CbegoHtD.js";import"./index-D3vNJlXT.js";import"./index-CdyrOdXF.js";import"./index-B9ZeYHC7.js";import"./_initCloneObject-CqmxWRfM.js";import"./_arrayPush-Dd5JSu8W.js";import"./castArray-iDdAUYc3.js";import"./index-CeZjlggi.js";import"./event-BB_Ol6Sd.js";import"./index-Zf8ggd1d.js";import"./error-Cq9Fpw4b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const j={title:"Data/Segmented",component:e,parameters:{docs:{description:{component:"Componente de selección que permite elegir entre múltiples opciones."}}},argTypes:{options:{description:"Opciones del segmentado",control:"object",table:{type:{summary:"Option[]",detail:`
            type Option =
              | {
                  label: string
                  value: string | number | boolean
                  disabled?: boolean
                  [key: string]: any
                }
              | string
              | number
              | boolean
          `}}},modelValue:{description:"Valor del modelo (v-model)",table:{type:{summary:"string | number | boolean"}}},rounded:{description:"Redondea el componente",control:"select",options:["md","lg"],table:{type:{summary:"string"},defaultValue:{summary:"md"}}},block:{description:"Ajusta el ancho al contenedor padre",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},variant:{description:"Variante del componente",control:"select",options:["default","primary"],table:{type:{summary:"string"},defaultValue:{summary:"default"}}},messageError:{description:"Mensaje de error",control:"text",table:{type:{summary:"string"}}},helpText:{description:"Texto de ayuda",control:"text",table:{type:{summary:"string"}}},size:{description:"Tamaño del componente",control:"select",options:["sm","md"],table:{type:{summary:"string"},defaultValue:{summary:"md"}}},disabled:{description:"Deshabilita el componente",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},validateEvent:{description:"Activa la validación del formulario",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},id:{description:"ID nativo del input",control:"text",table:{type:{summary:"string"}}},name:{description:"Atributo name nativo",control:"text",table:{type:{summary:"string"}}},ariaLabel:{description:"Etiqueta ARIA para accesibilidad",control:"text",table:{type:{summary:"string"}}},classItem:{description:"Clase personalizada para cada opción",control:"text",table:{type:{summary:"string"}}},"onUpdate:modelValue":{description:"Se emite cuando cambia el valor seleccionado",table:{type:{summary:"string | number | boolean"},category:"events"}},onChange:{description:"Se emite cuando el usuario cambia la selección",table:{type:{summary:"string | number | boolean"},category:"events"}},default:{description:"Slot personalizado para el contenido de cada opción",table:{type:{summary:"slot"},category:"slots"}},help:{description:"Slot de ayuda",control:"text",table:{type:{summary:"slot"},category:"slots"}}},args:{options:[{label:"Persona",value:"person",disabled:!1},{label:"Empresa",value:"company",disabled:!1}],variant:"default",block:!1,size:"md",disabled:!1,validateEvent:!0,id:"",name:""}},t={render:o=>({components:{GSegmented:e,GConfigProvider:l},setup(){const a=i("person");return{args:o,value:a}},template:`
      <g-config-provider>
        <g-segmented
          v-model="value"
          :options="options"
          v-bind="args"
        />
      </g-config-provider>
    `}),args:{}},r={parameters:{docs:{description:{story:"Permite deshabilitar el componente completo o opciones individuales cuando ciertas selecciones no deben estar disponibles."}}},render:o=>({components:{GSegmented:e,GConfigProvider:l},setup(){return{value:i("person"),options:[{label:"Persona",value:"person"},{label:"Empresa",value:"company",disabled:!0},{label:"Grupo",value:"group"},{label:"Global66",value:"global66"},{label:"Transferencias",value:"transfers"}]}},template:`
      <div class="space-y-4">
        <g-config-provider>
          <g-segmented
            v-model="value"
            :options="options"
            disabled
          />
          <div class="my-4" />
          <g-segmented
            v-model="value"
            :options="options"
          />
        </g-config-provider>
      </div>
    `})},n={parameters:{docs:{description:{story:"Extiende el componente para ocupar el ancho completo del contenedor padre, útil para mantener alineación con otros elementos."}}},render:o=>({components:{GSegmented:e,GConfigProvider:l},setup(){return{value:i("person"),options:[{label:"Persona",value:"person"},{label:"Empresa",value:"company"},{label:"Grupo",value:"group"}]}},template:`
      <g-config-provider>
        <div class="w-full">
          <g-segmented
            v-model="value"
            :options="options"
            block
          />
        </div>
      </g-config-provider>
    `})},s={parameters:{docs:{description:{story:"Permite personalizar el contenido de cada opción usando el slot default. El slot recibe un scope con la propiedad item que contiene toda la información de la opción actual."}}},render:o=>({components:{GSegmented:e,GConfigProvider:l},setup(){return{value:i("fruits"),options:[{label:"Frutas",value:"fruits",emoji:"🍎"},{label:"Vegetales",value:"vegetables",emoji:"🥕"},{label:"Postres",value:"desserts",emoji:"🍰"},{label:"Bebidas",value:"drinks",emoji:"🍹"}]}},template:`
      <g-config-provider>
        <g-segmented
          v-model="value"
          :options="options"
        >
          <template #default="{ item }">
            <div class="flex flex-col items-center gap-2 p-2">
              <span style="font-size: 24px">{{ item.emoji }}</span>
              <div>{{ item.label }}</div>
            </div>
          </template>
        </g-segmented>
      </g-config-provider>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      GSegmented,
      GConfigProvider
    },
    setup() {
      const value = ref('person');
      return {
        args,
        value
      };
    },
    template: \`
      <g-config-provider>
        <g-segmented
          v-model="value"
          :options="options"
          v-bind="args"
        />
      </g-config-provider>
    \`
  }),
  args: {}
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Permite deshabilitar el componente completo o opciones individuales cuando ciertas selecciones no deben estar disponibles.'
      }
    }
  },
  render: args => ({
    components: {
      GSegmented,
      GConfigProvider
    },
    setup() {
      const value = ref('person');
      return {
        value,
        options: [{
          label: 'Persona',
          value: 'person'
        }, {
          label: 'Empresa',
          value: 'company',
          disabled: true
        }, {
          label: 'Grupo',
          value: 'group'
        }, {
          label: 'Global66',
          value: 'global66'
        }, {
          label: 'Transferencias',
          value: 'transfers'
        }]
      };
    },
    template: \`
      <div class="space-y-4">
        <g-config-provider>
          <g-segmented
            v-model="value"
            :options="options"
            disabled
          />
          <div class="my-4" />
          <g-segmented
            v-model="value"
            :options="options"
          />
        </g-config-provider>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Extiende el componente para ocupar el ancho completo del contenedor padre, útil para mantener alineación con otros elementos.'
      }
    }
  },
  render: args => ({
    components: {
      GSegmented,
      GConfigProvider
    },
    setup() {
      const value = ref('person');
      return {
        value,
        options: [{
          label: 'Persona',
          value: 'person'
        }, {
          label: 'Empresa',
          value: 'company'
        }, {
          label: 'Grupo',
          value: 'group'
        }]
      };
    },
    template: \`
      <g-config-provider>
        <div class="w-full">
          <g-segmented
            v-model="value"
            :options="options"
            block
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Permite personalizar el contenido de cada opción usando el slot default. El slot recibe un scope con la propiedad item que contiene toda la información de la opción actual.'
      }
    }
  },
  render: args => ({
    components: {
      GSegmented,
      GConfigProvider
    },
    setup() {
      const value = ref('fruits');
      return {
        value,
        options: [{
          label: 'Frutas',
          value: 'fruits',
          emoji: '🍎'
        }, {
          label: 'Vegetales',
          value: 'vegetables',
          emoji: '🥕'
        }, {
          label: 'Postres',
          value: 'desserts',
          emoji: '🍰'
        }, {
          label: 'Bebidas',
          value: 'drinks',
          emoji: '🍹'
        }]
      };
    },
    template: \`
      <g-config-provider>
        <g-segmented
          v-model="value"
          :options="options"
        >
          <template #default="{ item }">
            <div class="flex flex-col items-center gap-2 p-2">
              <span style="font-size: 24px">{{ item.emoji }}</span>
              <div>{{ item.label }}</div>
            </div>
          </template>
        </g-segmented>
      </g-config-provider>
    \`
  })
}`,...s.parameters?.docs?.source}}};const C=["Primary","Disabled","Block","CustomContent"];export{n as Block,s as CustomContent,r as Disabled,t as Primary,C as __namedExportsOrder,j as default};
