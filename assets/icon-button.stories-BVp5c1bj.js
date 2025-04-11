import{f as a}from"./index-imBTNTrX.js";import{_ as i}from"./IconButton-bwbKmBUl.js";import{generateIconOptions as c}from"./icon-font.stories-DuZjseh3.js";import{a as r}from"./index-Br0BFi8U.js";import"./vue.esm-bundler-BmNPGRkA.js";import"./ConfigProvider-DXUgDH9p.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./error-Cq9Fpw4b.js";import"./Icon-CtzUyd3_.js";import"./index.es-C5bAJVb9.js";import"./index-DDVpgGx_.js";import"./index-Ctb24CLq.js";import"./index-BHYX4iOF.js";import"./use-form-item-Bf0s3Kev.js";import"./constants-Dnj8X3EN.js";import"./index-CrAkN-9E.js";import"./index-OvFQJ97y.js";import"./index-BsfyV7Ae.js";import"./_initCloneObject-lUptluD5.js";import"./_arrayPush-BTZjb8bE.js";import"./castArray-D-e3jlfW.js";import"./index-CSx2dOih.js";import"./event-BB_Ol6Sd.js";import"./index-BBJgTkeT.js";import"./use-form-common-props-BNw-y6r4.js";import"./index-Bfjh2vJW.js";import"./index-R7rVe_Xq.js";import"./index-y-EhIaq6.js";import"./index-DalEAbx2.js";import"./index-DAp_qrnw.js";import"./v4-CtRu48qb.js";const q={title:"Basic/Icon Button",component:i,parameters:{docs:{description:{component:'\n### Uso básico\nEjemplo de uso básico:\n``` vue\n<g-icon-button variant="grey" icon="solid check"/>\n```\n        '}}},argTypes:{variant:{control:"select",options:["grey","black","blue"],description:"Variante visual del icono botón",table:{type:{summary:"string"},category:"Principales"}},size:{control:"select",options:["medium","small"],description:"Variante tamaño del icono botón",table:{type:{summary:"string"},category:"Principales"}},border:{control:"boolean",description:"Deshabilita el icono botón",table:{type:{summary:"boolean"},category:"Principales"}},icon:{control:"select",options:c(),description:`Icono renderizado utilizando el componente IconFont.

Ver [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.

Ejemplo 'solid check''`,table:{type:{summary:"Iconos"},defaultValue:{summary:""}}},autofocus:{control:"boolean",description:"El icono botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",table:{category:"Comportamiento",type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Deshabilita el icono botón",table:{category:"Comportamiento",type:{summary:"boolean"}}},download:{control:"text",description:`Especifica que el elemento se descargará cuando el usuario haga clic en el enlace.

 ⚠️ **Nota:**  Solo funciona si la propiedad href está definida.`,table:{defaultValue:{summary:"undefined"},category:"Enlaces",type:{summary:"string"}}},href:{control:"text",description:"Convierte el icono botón en un enlace",table:{category:"Enlaces",type:{summary:"string"}}},target:{control:"text",description:"Atributo target del enlace",table:{category:"Enlaces",type:{summary:"string"}}},onClick:{description:"Se dispara al hacer clic en el icono botón. No se dispara si el icono botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}},onMousedown:{description:"Se dispara cuando se presiona el icono botón del mouse. No se dispara si el icono botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}}}},t=s=>({components:{GIconButton:i},setup(){return{args:s,onClick:a(r("click")),onMousedown:a(r("mousedown"))}},template:`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  `}),o=t.bind({});o.args={variant:"grey"};const n=t.bind({});n.args={variant:"black"};const e=t.bind({});e.args={variant:"blue"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GIconButton
  },
  setup() {
    return {
      args,
      onClick: fn(action("click")),
      onMousedown: fn(action("mousedown"))
    };
  },
  template: \`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  \`
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GIconButton
  },
  setup() {
    return {
      args,
      onClick: fn(action("click")),
      onMousedown: fn(action("mousedown"))
    };
  },
  template: \`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  \`
})`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GIconButton
  },
  setup() {
    return {
      args,
      onClick: fn(action("click")),
      onMousedown: fn(action("mousedown"))
    };
  },
  template: \`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  \`
})`,...e.parameters?.docs?.source}}};const A=["grey","black","blue"];export{A as __namedExportsOrder,n as black,e as blue,q as default,o as grey};
