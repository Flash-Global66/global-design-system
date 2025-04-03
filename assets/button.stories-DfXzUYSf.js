import{G as r}from"./index-BpTSg4uy.js";import{generateIconOptions as s}from"./icon-font.stories-B_VKatzO.js";import"./vue.esm-bundler-BUoj5ptC.js";import"./ConfigProvider-CrOhbRZ6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./error-Cq9Fpw4b.js";import"./Icon-HxEiN7t9.js";import"./index.es-DwVakxBA.js";import"./index-DDVpgGx_.js";import"./index-BOx2y-Jl.js";import"./index-Dh3Gw0Zf.js";import"./index-KaGzp0yT.js";import"./_initCloneObject-MVraUcJR.js";import"./castArray-DceVieY3.js";import"./index-3b0zog6D.js";import"./index-Wt8uPs2i.js";import"./event-BB_Ol6Sd.js";import"./index-BcGPpLRa.js";import"./use-form-common-props-DyLglXeD.js";import"./constants-Dnj8X3EN.js";import"./index-CGH_u4Oy.js";import"./index-DESZvTKR.js";import"./index-JLKkvi6K.js";const G={title:"Basic/Button",component:r,parameters:{docs:{description:{component:`
### Uso básico

Ejemplo de uso básico:

\`\`\` vue
<g-button variant="primary" title="Primary Button"/>
\`\`\`
      `}}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Variante visual del botón",table:{type:{summary:"string"},category:"Principales"}},title:{control:"text",description:"Texto del botón (preferencia sobre el slot)",table:{category:"Principales",type:{summary:"string"},defaultValue:{summary:"Button Text"}}},typeNative:{control:"select",options:["button","submit","reset"],description:"Tipo nativo del botón HTML",table:{type:{summary:"string"},defaultValue:{summary:"button"},category:"Comportamiento"}},disabled:{control:"boolean",description:"Deshabilita el botón",table:{category:"Comportamiento",type:{summary:"boolean"}}},loading:{control:"boolean",description:"Muestra estado de carga",table:{category:"Comportamiento",type:{summary:"boolean"}}},iconLeft:{control:"select",options:s(),description:`Icono izquierdo renderizado utilizando el componente IconFont.

Ver [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.

Ejemplo 'solid check''`,table:{type:{summary:"Iconos"},defaultValue:{summary:""}}},iconRight:{control:"select",options:s(),description:`Icono derecho renderizado utilizando el componente IconFont.

Ver [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.

Ejemplo 'solid arrow-right'`,table:{type:{summary:"Iconos"},defaultValue:{summary:""}}},autofocus:{control:"boolean",description:"El botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",table:{category:"Comportamiento",type:{summary:"boolean"}}},download:{control:"text",description:`Especifica que el elemento se descargará cuando el usuario haga clic en el enlace.

 ⚠️ **Nota:**  Solo funciona si la propiedad href está definida.`,table:{defaultValue:{summary:"undefined"},category:"Enlaces",type:{summary:"string"}}},href:{control:"text",description:"Convierte el botón en un enlace",table:{category:"Enlaces",type:{summary:"string"}}},target:{control:"text",description:"Atributo target del enlace",table:{category:"Enlaces",type:{summary:"string"}}},full:{control:"boolean",description:"Botón de ancho completo",table:{category:"Layout",type:{summary:"boolean"}}},ariaLabel:{control:"text",description:"Etiqueta accesible para el botón",table:{category:"Accesibilidad",type:{summary:"string"}}},onClick:{description:"Se dispara al hacer clic en el botón. No se dispara si el botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}},onMousedown:{description:"Se dispara cuando se presiona el botón del mouse. No se dispara si el botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}},default:{constrol:"text",description:"Slot por defecto del botón",table:{category:"Slots",type:{summary:"string | Component"}}},"Deprecated Info":{table:{category:"Deprecated",order:999},description:"⚠️ Las props 'size', 'type' y 'color' estan deprecadas . Utilizar prop 'variant'."}}},i=l=>({components:{GButton:r},setup(){return{args:l}},template:`
    <g-button v-bind="args" />
  `}),t=i.bind({});t.args={variant:"primary",title:"Primary Button prueba"};const e=i.bind({});e.args={variant:"secondary",title:"Secondary Button"};const o=i.bind({});o.args={variant:"tertiary",title:"Tertiary Button"};const n=()=>({components:{GButton:r},template:`
    <div class="space-y-8">
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Primary Variant States</h3>
        <div class="flex gap-4">
          <g-button variant="primary" title="Enabled"/>
          <g-button variant="primary" disabled title="Disabled"/>
          <g-button variant="primary" loading title="Loading"/>
        </div>
      </div>
      
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Secondary Variant States</h3>
        <div class="flex gap-4">
          <g-button variant="secondary" title="Enabled"/>
          <g-button variant="secondary" disabled title="Disabled"/>
          <g-button variant="secondary" loading title="Loading"/>
        </div>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg font-bold">Tertiary Variant States</h3>
        <div class="flex gap-4">
          <g-button variant="tertiary" title="Enabled"/>
          <g-button variant="tertiary" disabled title="Disabled"/>
          <g-button variant="tertiary" loading title="Loading"/>
        </div>
      </div>
    </div>
  `}),a=()=>({components:{GButton:r},template:`
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Botones con Iconos</h3>
        <div class="flex gap-4">
          <g-button 
            variant="primary"
            title="Icono Izquierdo"
            icon-left="solid chevron-left"
          />
          
          <g-button 
            variant="primary"
            title="Icono Derecho"
            icon-right="solid chevron-right"
          />

          <g-button 
            variant="primary"
            title="Ambos Iconos"
            icon-left="solid chevron-left"
            icon-right="solid chevron-right"
          />
        </div>
      </div>
  `});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <g-button v-bind="args" />
  \`
})`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <g-button v-bind="args" />
  \`
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <g-button v-bind="args" />
  \`
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GButton
  },
  template: \`
    <div class="space-y-8">
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Primary Variant States</h3>
        <div class="flex gap-4">
          <g-button variant="primary" title="Enabled"/>
          <g-button variant="primary" disabled title="Disabled"/>
          <g-button variant="primary" loading title="Loading"/>
        </div>
      </div>
      
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Secondary Variant States</h3>
        <div class="flex gap-4">
          <g-button variant="secondary" title="Enabled"/>
          <g-button variant="secondary" disabled title="Disabled"/>
          <g-button variant="secondary" loading title="Loading"/>
        </div>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg font-bold">Tertiary Variant States</h3>
        <div class="flex gap-4">
          <g-button variant="tertiary" title="Enabled"/>
          <g-button variant="tertiary" disabled title="Disabled"/>
          <g-button variant="tertiary" loading title="Loading"/>
        </div>
      </div>
    </div>
  \`
})`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GButton
  },
  template: \`
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Botones con Iconos</h3>
        <div class="flex gap-4">
          <g-button 
            variant="primary"
            title="Icono Izquierdo"
            icon-left="solid chevron-left"
          />
          
          <g-button 
            variant="primary"
            title="Icono Derecho"
            icon-right="solid chevron-right"
          />

          <g-button 
            variant="primary"
            title="Ambos Iconos"
            icon-left="solid chevron-left"
            icon-right="solid chevron-right"
          />
        </div>
      </div>
  \`
})`,...a.parameters?.docs?.source}}};const N=["Primary","Secondary","Tertiary","States","WithIcons"];export{t as Primary,e as Secondary,n as States,o as Tertiary,a as WithIcons,N as __namedExportsOrder,G as default};
