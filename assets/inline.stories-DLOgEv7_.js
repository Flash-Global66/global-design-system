import{r as G,c as B,d as D,a as f,e as F,u as e,T as L,b as a,t as c,l as d,j as x,k as r,f as N,x as q,q as $,z,F as R,y as W}from"./vue.esm-bundler-Deokl1F5.js";import{_ as g}from"./index-B-U0DsHd.js";import{e as _,c as O}from"./useEmptyValues-S5EffpHc.js";import{b as U,d as p}from"./props.util-Dtwzmmnf.js";import{B as H}from"./index-iviVQk4X.js";import{w as J}from"./error.util-CmMZjXeT.js";import{G as l}from"./ConfigProvider-DiWOjIRd.js";import{v as K,p as T}from"./package-D011tuPx.js";import{g as Q,a as X,b as P}from"./documentation-stories-ZyKnmB2F.js";import"./index-D9lthdDW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BXyPvuAD.js";const Y=U({title:{type:String,default:""},description:{type:String,default:""},hideClose:{type:Boolean,default:!1},icon:{type:p(String),default:""},type:{type:p(String),default:"success"},size:{type:p(String),default:"md"},links:{type:p(Array),default:()=>[]},shadow:{type:Boolean,default:!1},border:{type:Boolean,default:!0},iconAlign:{type:p(String),default:"medium"},iconFill:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!0},..._(["ariaLabel"])}),Z={close:i=>i instanceof MouseEvent};function ee(i,k){const m=G(!0),s=O("inline"),S=H(),o=G(null),j=B(()=>[s.b(),s.m(S.value),s.m(i.type),i.shadow&&s.m("shadow"),!i.border&&s.m("no-border"),s.m(`icon-align-${i.iconAlign}`)]);function E(A){m.value=!1,k("close",A)}return{visible:m,ns:s,inlineRef:o,inlineClass:j,onClose:E}}const oe=["aria-label"],ne=["onClick","aria-label"],V=D({__name:"index",props:Y,emits:Z,setup(i,{emit:k}){const m=i,s=k,{visible:S,ns:o,inlineRef:j,inlineClass:E,onClose:A}=ee(m,s);return(n,ie)=>(a(),f(L,{name:e(o).m("fade")},{default:F(()=>[e(S)?(a(),c("div",{key:0,class:r(e(E)),ref_key:"inlineRef",ref:j,"aria-label":n.ariaLabel||"inline"},[n.iconFill?(a(),c("div",{key:0,class:r(e(o).e("icon-fill"))},[N(e(g),{"aria-label":"icon informative",class:r(e(o).e("icon")),name:n.icon},null,8,["class","name"])],2)):(a(),f(e(g),{key:1,"aria-label":"icon informative",class:r(e(o).e("icon")),name:n.icon},null,8,["class","name"])),x("div",null,[n.title?(a(),c("h3",{key:0,class:r([e(o).e("title")])},q(n.title),3)):d("",!0),x("p",{class:r([e(o).e("description")])},[$(n.$slots,"default",{},()=>[z(q(n.description),1)])],2),n.links.length?(a(),c("div",{key:1,role:"group",class:r([e(o).e("links")])},[(a(!0),c(R,null,W(n.links,(u,M)=>(a(),c("button",{key:M,onClick:ae=>u.action(),class:r([e(o).e("link"),n.showArrow&&e(o).em("link","arrow")]),"aria-label":u.ariaLabel||u.label,type:"button"},[z(q(u.label)+" ",1),n.showArrow?(a(),f(e(g),{key:0,name:"regular chevron-right",class:r(e(o).e("link-arrow"))},null,8,["class"])):d("",!0)],10,ne))),128))],2)):d("",!0)]),n.hideClose?d("",!0):(a(),f(e(g),{key:2,role:"button","aria-label":"close inline",onClick:e(A),class:r(e(o).e("close")),name:"regular times"},null,8,["onClick","class"]))],10,oe)):d("",!0)]),_:3},8,["name"]))}});V.__docgenInfo={exportName:"default",displayName:"Inline",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/inline/src/Inline/index.vue"]};const t=J(V,{Inline:V}),be={title:"Data/Inline",component:t,parameters:{docs:{description:{component:`
El componente Inline es utilizado para comunicar información contextual, como estados específicos (éxito, error, advertencia, información) dentro de una página o funcionalidad. Es ideal para mensajes secundarios que no necesitan interrumpir al usuario, como alertas, recordatorios o enlaces relevantes. Este componente asegura que el mensaje sea notorio pero no invasivo, proporcionando claridad visual y textual.

> Versión actual: ${K}

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
${X(T)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${P(T)}

# Dependencias externas
yarn add ${P(T,!0)}
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
`}}},argTypes:{icon:{description:"Icono a mostrar en el componente `Inline`.",control:"select",options:["",...Q()],table:{type:{summary:"string"},defaultValue:{summary:""}}},title:{description:"Título de la información que queremos transmitir.",control:"text"},description:{description:"Descripción adicional de la información.",control:"text"},size:{description:"Tamaño del componente",control:"select",options:["md","sm"],defaultValue:"md"},hideClose:{description:"Indica si se debe ocultar el botón de cierre.",control:"boolean",defaultValue:!1},type:{description:"Tipo de mensaje a mostrar. Colores de fondo y estilo de texto.",control:"select",options:["success","info","warning","error","card"],defaultValue:"success"},links:{description:"Lista de enlaces interactivos con etiquetas y acciones.",control:"object"},shadow:{description:"Activa el sombreado del componente.",control:"boolean",defaultValue:!1},border:{description:"Muestra u oculta el borde del componente.",control:"boolean",defaultValue:!0},iconAlign:{description:"Alineación vertical del ícono izquierdo.",control:"select",options:["top","medium","bottom"],defaultValue:"medium"},iconFill:{description:"Agrega un fondo detrás del ícono izquierdo.",control:"boolean",defaultValue:!1},showArrow:{description:"Muestra u oculta el ícono de flecha en cada enlace.",control:"boolean",defaultValue:!0},ariaLabel:{description:"Etiqueta ARIA para accesibilidad.",control:"text"},onClose:{description:"Evento para el cierre del componente.",table:{category:"Eventos"}},default:{description:"Contenido personalizado.",table:{category:"Slots",type:{summary:"slot"}}}},args:{icon:"solid undo-alt",title:"Título",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",size:"md",hideClose:!1,type:"success",links:[{label:"Enlace 1",action:()=>alert("Acción 1")},{label:"Enlace 2",action:()=>alert("Acción 2")}],shadow:!1,border:!0,iconAlign:"medium",iconFill:!1,showArrow:!0,ariaLabel:"inline"}},y={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del componente Inline. Desde los controles puedes probar todas las propiedades disponibles."}}},render:i=>({components:{GInline:t,GConfigProvider:l},setup(){return{args:i}},template:`
      <g-config-provider>
        <g-inline v-bind="args" />
      </g-config-provider>
    `})},b={name:"Tipos",parameters:{docs:{description:{story:"El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error."}}},render:()=>({components:{GInline:t,GConfigProvider:l},template:`
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
    `})},v={name:"Tamaños",parameters:{docs:{description:{story:"El componente tiene dos tamaños disponibles: md (mediano) y sm (pequeño). Útil para adaptarse a diferentes contextos de UI."}}},render:()=>({components:{GInline:t,GConfigProvider:l},template:`
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
    `})},h={name:"Sin botón cerrar",parameters:{docs:{description:{story:"Cuando no necesitas que el usuario pueda cerrar el mensaje, puedes ocultar el botón de cierre con la propiedad hideClose."}}},render:()=>({components:{GInline:t,GConfigProvider:l},template:`
      <g-config-provider>
        <g-inline
          hideClose
          title="Sin botón de cerrar"
          description="Este mensaje no tiene botón de cerrar"
          icon="solid info-circle"
        />
      </g-config-provider>
    `})},C={name:"Sin ícono ni enlaces",parameters:{docs:{description:{story:"Si no necesitas un ícono, puedes omitirlo dejando la propiedad icon vacía."}}},render:()=>({components:{GInline:t,GConfigProvider:l},template:`
      <g-config-provider>
        <g-inline
          title="Sin ícono"
          description="Este mensaje no tiene ícono"
        />
      </g-config-provider>
    `})},I={name:"Card",parameters:{docs:{description:{story:"Variante card: fondo blanco, sin borde y con sombra. Ideal para destacar información dentro de un panel o sección."}}},render:()=>({components:{GInline:t,GConfigProvider:l},template:`
      <g-config-provider>
        <g-inline
          type="card"
          title="Más información"
          description="Consulta los detalles de tu transacción en el historial."
          icon="solid info-circle"
          icon-align="top"
          :icon-fill="true"
          :links="[{ label: 'Ver detalle', action: () => {} }]"
          :show-arrow="true"
          :hide-close="true"
        />
      </g-config-provider>
    `})},w={name:"Con fill y sombra",parameters:{docs:{description:{story:"Combinación de icon-fill y shadow para dar mayor énfasis visual al componente."}}},render:()=>({components:{GInline:t,GConfigProvider:l},template:`
      <g-config-provider>
        <div class="space-y-4">
          <g-inline
            type="info"
            title="Con fill y sombra"
            description="El ícono tiene fondo y el componente tiene sombra."
            icon="solid info-circle"
            :icon-fill="true"
            :shadow="true"
            :links="[{ label: 'Más información', action: () => {} }]"
          />
          <g-inline
            type="warning"
            title="Alineación superior"
            description="Cuando el contenido es largo, el ícono se alinea al tope del componente para mantener la jerarquía visual."
            icon="solid triangle-exclamation"
            :icon-fill="true"
            icon-align="top"
          />
        </div>
      </g-config-provider>
    `})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Card',
  parameters: {
    docs: {
      description: {
        story: 'Variante card: fondo blanco, sin borde y con sombra. Ideal para destacar información dentro de un panel o sección.'
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
          type="card"
          title="Más información"
          description="Consulta los detalles de tu transacción en el historial."
          icon="solid info-circle"
          icon-align="top"
          :icon-fill="true"
          :links="[{ label: 'Ver detalle', action: () => {} }]"
          :show-arrow="true"
          :hide-close="true"
        />
      </g-config-provider>
    \`
  })
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Con fill y sombra',
  parameters: {
    docs: {
      description: {
        story: 'Combinación de icon-fill y shadow para dar mayor énfasis visual al componente.'
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
            type="info"
            title="Con fill y sombra"
            description="El ícono tiene fondo y el componente tiene sombra."
            icon="solid info-circle"
            :icon-fill="true"
            :shadow="true"
            :links="[{ label: 'Más información', action: () => {} }]"
          />
          <g-inline
            type="warning"
            title="Alineación superior"
            description="Cuando el contenido es largo, el ícono se alinea al tope del componente para mantener la jerarquía visual."
            icon="solid triangle-exclamation"
            :icon-fill="true"
            icon-align="top"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...w.parameters?.docs?.source}}};const ve=["Primary","AllTypes","Sizes","WithoutClose","WithoutIcon","Card","WithIconFillAndShadow"];export{b as AllTypes,I as Card,y as Primary,v as Sizes,w as WithIconFillAndShadow,h as WithoutClose,C as WithoutIcon,ve as __namedExportsOrder,be as default};
