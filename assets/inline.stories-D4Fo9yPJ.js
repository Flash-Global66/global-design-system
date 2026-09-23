import{l as P,p as d,r as D,c as M,d as B,o as a,a as f,w as L,u as e,y as c,g as r,b as R,f as T,z as A,j as p,i as $,B as q,F as N,A as W,T as O}from"./iframe-Dct5CHxr.js";import{R as g}from"./index-1T7U7QlS.js";import{e as U,u as _}from"./useEmptyValues-BnYvcW4O.js";import{B as H}from"./index-CZoNQBHQ.js";import{w as J}from"./install.util-cBz1HN_T.js";import{G as l}from"./ConfigProvider-7dg58IlU.js";import{v as K,p as F}from"./package-D-PEb-Vv.js";import{g as Q,a as X,b as V}from"./documentation-stories-DmJzCMmf.js";import"./preload-helper-Dch09mLN.js";import"./useId-MLHLvdkG.js";import"./index-pMiYc9r3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-GU5Cqqg3.js";const Y=P({title:{type:String,default:""},description:{type:String,default:""},hideClose:{type:Boolean,default:!1},icon:{type:d(String),default:""},type:{type:d(String),default:"success"},size:{type:d(String),default:"md"},links:{type:d(Array),default:()=>[]},shadow:{type:Boolean,default:!1},border:{type:Boolean,default:!0},iconAlign:{type:d(String),default:"medium"},iconFill:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!0},...U(["ariaLabel"])}),Z={close:i=>i instanceof MouseEvent};function ee(i,w){const m=D(!0),s=_("inline"),I=H(),n=D(null),k=M(()=>[s.b(),s.m(I.value),s.m(i.type),i.shadow&&s.m("shadow"),!i.border&&s.m("no-border"),s.m(`icon-align-${i.iconAlign}`)]);function S(j){m.value=!1,w("close",j)}return{visible:m,ns:s,inlineRef:n,inlineClass:k,onClose:S}}const ne=["aria-label"],oe=["onClick","aria-label"],G=B({__name:"index",props:Y,emits:Z,setup(i,{emit:w}){const m=i,s=w,{visible:I,ns:n,inlineRef:k,inlineClass:S,onClose:j}=ee(m,s);return(o,ie)=>(a(),f(O,{name:e(n).m("fade")},{default:L(()=>[e(I)?(a(),c("div",{key:0,class:r(e(S)),ref_key:"inlineRef",ref:k,"aria-label":o.ariaLabel||"inline"},[o.iconFill?(a(),c("div",{key:0,class:r(e(n).e("icon-fill"))},[R(e(g),{"aria-label":"icon informative",class:r(e(n).e("icon")),name:o.icon},null,8,["class","name"])],2)):(a(),f(e(g),{key:1,"aria-label":"icon informative",class:r(e(n).e("icon")),name:o.icon},null,8,["class","name"])),T("div",null,[o.title?(a(),c("h3",{key:0,class:r([e(n).e("title")])},A(o.title),3)):p("",!0),T("p",{class:r([e(n).e("description")])},[$(o.$slots,"default",{},()=>[q(A(o.description),1)])],2),o.links.length?(a(),c("div",{key:1,role:"group",class:r([e(n).e("links")])},[(a(!0),c(N,null,W(o.links,(u,z)=>(a(),c("button",{key:z,onClick:ae=>u.action(),class:r([e(n).e("link"),o.showArrow&&e(n).em("link","arrow")]),"aria-label":u.ariaLabel||u.label,type:"button"},[q(A(u.label)+" ",1),o.showArrow?(a(),f(e(g),{key:0,name:"regular chevron-right",class:r(e(n).e("link-arrow"))},null,8,["class"])):p("",!0)],10,oe))),128))],2)):p("",!0)]),o.hideClose?p("",!0):(a(),f(e(g),{key:2,role:"button","aria-label":"close inline",onClick:e(j),class:r(e(n).e("close")),name:"regular times"},null,8,["onClick","class"]))],10,ne)):p("",!0)]),_:3},8,["name"]))}}),t=J(G,{Inline:G}),ve={title:"Data/Inline",component:t,parameters:{docs:{description:{component:`
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
${X(F)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${V(F)}

# Dependencias externas
yarn add ${V(F,!0)}
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
    `})},x={name:"Sin ícono ni enlaces",parameters:{docs:{description:{story:"Si no necesitas un ícono, puedes omitirlo dejando la propiedad icon vacía."}}},render:()=>({components:{GInline:t,GConfigProvider:l},template:`
      <g-config-provider>
        <g-inline
          title="Sin ícono"
          description="Este mensaje no tiene ícono"
        />
      </g-config-provider>
    `})},C={name:"Card",parameters:{docs:{description:{story:"Variante card: fondo blanco, sin borde y con sombra. Ideal para destacar información dentro de un panel o sección."}}},render:()=>({components:{GInline:t,GConfigProvider:l},template:`
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
    `})},E={name:"Con fill y sombra",parameters:{docs:{description:{story:"Combinación de icon-fill y shadow para dar mayor énfasis visual al componente."}}},render:()=>({components:{GInline:t,GConfigProvider:l},template:`
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
    `})},he=["Primary","AllTypes","Sizes","WithoutClose","WithoutIcon","Card","WithIconFillAndShadow"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};export{b as AllTypes,C as Card,y as Primary,v as Sizes,E as WithIconFillAndShadow,h as WithoutClose,x as WithoutIcon,he as __namedExportsOrder,ve as default};
