import{d as V,r as I,c as w,b as E,f as M,u as o,T as L,e as i,x as t,m as d,h as _,k as S,l as s,y as v,s as N,A as B,F,z as R}from"./vue.esm-bundler-C43JrhH2.js";import{F as j}from"./index-B1PxvDbZ.js";import{b as $,d as p,w as W}from"./install-CfJGiCvs.js";import{u as O}from"./index-CdSB2Bdf.js";import{u as U}from"./index-D5bIuBCX.js";import{u as H}from"./use-form-common-props-C2RO3VSy.js";import{G as c}from"./ConfigProvider-Br84NlF7.js";import{v as J,p as b}from"./package-DvbJBKVy.js";import{g as K,a as Q,b as k}from"./documentation-stories-DKOl0nGm.js";import"./_arrayPush-BhjrZnJY.js";import"./constants-Dnj8X3EN.js";import"./index-fhkPmQjX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";import"./error-Cq9Fpw4b.js";const X=$({title:{type:String,default:""},description:{type:String,default:""},hideClose:{type:Boolean,default:!1},icon:{type:p(String),default:""},type:{type:p(String),default:"success"},size:{type:p(String),default:"md"},links:{type:p(Array),default:()=>[]},...O(["ariaLabel"])}),Y={close:a=>a instanceof MouseEvent},Z=["aria-label"],ee={class:""},ne=["onClick","aria-label"],h=V({__name:"inline",props:X,emits:Y,setup(a,{emit:T}){const x=a,z=T,C=I(!0),n=U("inline"),q=H(),G=I(null),P=w(()=>[n.b(),n.m(q.value),n.m(x.type)]);async function A(e){C.value=!1,z("close",e)}return(e,oe)=>(i(),E(L,{name:o(n).m("fade")},{default:M(()=>[C.value?(i(),t("div",{key:0,class:s(P.value),ref_key:"inlineRef",ref:G,"aria-label":e.ariaLabel||"inline"},[_(o(j),{"aria-label":"icon informative",class:s([o(n).e("icon")]),name:e.icon},null,8,["class","name"]),S("div",ee,[e.title?(i(),t("h3",{key:0,class:s([o(n).e("title")])},v(e.title),3)):d("",!0),S("p",{class:s([o(n).e("description")])},[N(e.$slots,"default",{},()=>[B(v(e.description),1)])],2),e.links.length?(i(),t("div",{key:1,role:"group",class:s([o(n).e("links")])},[(i(!0),t(F,null,R(e.links,(l,D)=>(i(),t("button",{key:D,onClick:l.action,class:s([o(n).e("link")]),"aria-label":l.ariaLabel||l.label,type:"button"},v(l.label),11,ne))),128))],2)):d("",!0)]),e.hideClose?d("",!0):(i(),E(o(j),{key:0,role:"button","aria-label":"close inline",onClick:A,class:s(o(n).e("close")),name:"regular times"},null,8,["class"]))],10,Z)):d("",!0)]),_:3},8,["name"]))}});h.__docgenInfo={exportName:"default",displayName:"inline",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/inline/src/inline.vue"]};const r=W(h,{Inline:h}),Ce={title:"Data/Inline",component:r,parameters:{docs:{description:{component:`
El componente Inline es utilizado para comunicar información contextual, como estados específicos (éxito, error, advertencia, información) dentro de una página o funcionalidad. Es ideal para mensajes secundarios que no necesitan interrumpir al usuario, como alertas, recordatorios o enlaces relevantes. Este componente asegura que el mensaje sea notorio pero no invasivo, proporcionando claridad visual y textual.

> Versión actual: ${J}

## Características
- Títulos y descripciones 
- Íconos integrados
- Enlaces interactivos
- Diferentes tipos de mensajes (success, info, warning, error)
- Tamaños adaptables (md, sm)
- accesibilidad con etiquetas ARIA

### Instalación

\`\`\`bash
yarn add @flash-global66/g-inline
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GInline } from '@flash-global66/g-inline'

# recomendado importar en los estilos globales
import '@flash-global66/g-inline/inline.styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${Q(b)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${k(b)}

# Dependencias externas
yarn add ${k(b,!0)}
\`\`\`

### Ejemplo de uso

\`\`\`ts
<script setup lang="ts">
import { GInline } from '@flash-global66/g-inline';
<\/script>

<template>
  <g-inline
    type="info"
    title="Información"
    description="Mensaje informativo"
    icon="solid info-circle"
  />
</template>
\`\`\`
`}}},argTypes:{icon:{description:"Icono a mostrar en el componente `Inline`.",control:"select",options:["",...K()],table:{type:{summary:"string"},defaultValue:{summary:""}}},title:{description:"Título de la información que queremos transmitir.",control:"text"},description:{description:"Descripción adicional de la información.",control:"text"},size:{description:"Tamaño del componente",control:"select",options:["md","sm"],defaultValue:"md"},hideClose:{description:"Indica si se debe ocultar el botón de cierre.",control:"boolean",defaultValue:!1},type:{description:"Tipo de mensaje a mostrar. Colores de fondo y estilo de texto.",control:"select",options:["success","info","warning","error"],defaultValue:"success"},links:{description:"Lista de enlaces interactivos con etiquetas y acciones.",control:"object"},ariaLabel:{description:"Etiqueta ARIA para accesibilidad.",control:"text"},onClose:{description:"Evento para el cierre del componente.",table:{category:"Eventos"}},default:{description:"Contenido personalizado.",table:{category:"Slots",type:{summary:"slot"}}}},args:{icon:"solid undo-alt",title:"Título",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",size:"md",hideClose:!1,type:"success",links:[{label:"Enlace 1",action:()=>alert("Acción 1")},{label:"Enlace 2",action:()=>alert("Acción 2")}],ariaLabel:"inline"}},m={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del componente Inline. Desde los controles puedes probar todas las propiedades disponibles."}}},render:a=>({components:{GInline:r,GConfigProvider:c},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-inline v-bind="args" />
      </g-config-provider>
    `})},u={name:"Tipos",parameters:{docs:{description:{story:"El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error."}}},render:()=>({components:{GInline:r,GConfigProvider:c},template:`
      <g-config-provider>
        <div class="space-y-4">
          <g-inline 
            type="success"
            title="Éxito"
            description="Mensaje de éxito"
            icon="solid circle-check"
          />
          <g-inline 
            type="success"
            icon="solid circle-check"
          >
            hola
          </g-inline>
          <g-inline 
            type="info"
            title="Información"
            description="Mensaje informativo"
            icon="solid info-circle"
          />
          <g-inline 
            type="warning"
            title="Advertencia"
            description="Mensaje de advertencia"
            icon="solid triangle-exclamation"
          />
          <g-inline 
            type="error"
            title="Error"
            description="Mensaje de error"
            icon="solid circle-xmark"
          />
        </div>
      </g-config-provider>
    `})},g={name:"Tamaños",parameters:{docs:{description:{story:"El componente tiene dos tamaños disponibles: md (mediano) y sm (pequeño). Útil para adaptarse a diferentes contextos de UI."}}},render:()=>({components:{GInline:r,GConfigProvider:c},template:`
      <g-config-provider>
        <div class="space-y-4">
          <g-inline 
            size="md"
            title="Tamaño mediano (md)"
            description="Este es el tamaño por defecto del componente"
            icon="solid info-circle"
          />
          <g-inline 
            size="sm"
            title="Tamaño pequeño (sm)"
            description="Versión más compacta del componente"
            icon="solid info-circle"
          />
        </div>
      </g-config-provider>
    `})},f={name:"Sin botón cerrar",parameters:{docs:{description:{story:"Cuando no necesitas que el usuario pueda cerrar el mensaje, puedes ocultar el botón de cierre con la propiedad hideClose."}}},render:()=>({components:{GInline:r,GConfigProvider:c},template:`
      <g-config-provider>
        <g-inline
          hideClose
          title="Sin botón de cerrar"
          description="Este mensaje no tiene botón de cerrar"
          icon="solid info-circle"
        />
      </g-config-provider>
    `})},y={name:"Sin ícono ni enlaces",parameters:{docs:{description:{story:"Si no necesitas un ícono, puedes omitirlo dejando la propiedad icon vacía."}}},render:()=>({components:{GInline:r,GConfigProvider:c},template:`
      <g-config-provider>
        <g-inline
          title="Sin ícono"
          description="Este mensaje no tiene ícono"
        />
      </g-config-provider>
    `})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico del componente Inline. Desde los controles puedes probar todas las propiedades disponibles.'
      }
    }
  },
  render: args => ({
    components: {
      GInline,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-inline v-bind="args" />
      </g-config-provider>
    \`
  })
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Tipos',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error.'
      }
    }
  },
  render: () => ({
    components: {
      GInline,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <g-inline 
            type="success"
            title="Éxito"
            description="Mensaje de éxito"
            icon="solid circle-check"
          />
          <g-inline 
            type="success"
            icon="solid circle-check"
          >
            hola
          </g-inline>
          <g-inline 
            type="info"
            title="Información"
            description="Mensaje informativo"
            icon="solid info-circle"
          />
          <g-inline 
            type="warning"
            title="Advertencia"
            description="Mensaje de advertencia"
            icon="solid triangle-exclamation"
          />
          <g-inline 
            type="error"
            title="Error"
            description="Mensaje de error"
            icon="solid circle-xmark"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Tamaños',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene dos tamaños disponibles: md (mediano) y sm (pequeño). Útil para adaptarse a diferentes contextos de UI.'
      }
    }
  },
  render: () => ({
    components: {
      GInline,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <g-inline 
            size="md"
            title="Tamaño mediano (md)"
            description="Este es el tamaño por defecto del componente"
            icon="solid info-circle"
          />
          <g-inline 
            size="sm"
            title="Tamaño pequeño (sm)"
            description="Versión más compacta del componente"
            icon="solid info-circle"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Sin botón cerrar',
  parameters: {
    docs: {
      description: {
        story: 'Cuando no necesitas que el usuario pueda cerrar el mensaje, puedes ocultar el botón de cierre con la propiedad hideClose.'
      }
    }
  },
  render: () => ({
    components: {
      GInline,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <g-inline
          hideClose
          title="Sin botón de cerrar"
          description="Este mensaje no tiene botón de cerrar"
          icon="solid info-circle"
        />
      </g-config-provider>
    \`
  })
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Sin ícono ni enlaces',
  parameters: {
    docs: {
      description: {
        story: 'Si no necesitas un ícono, puedes omitirlo dejando la propiedad icon vacía.'
      }
    }
  },
  render: () => ({
    components: {
      GInline,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <g-inline
          title="Sin ícono"
          description="Este mensaje no tiene ícono"
        />
      </g-config-provider>
    \`
  })
}`,...y.parameters?.docs?.source}}};const Ie=["Primary","AllTypes","Sizes","WithoutClose","WithoutIcon"];export{u as AllTypes,m as Primary,g as Sizes,f as WithoutClose,y as WithoutIcon,Ie as __namedExportsOrder,Ce as default};
