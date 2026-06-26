import{d as B,r as j,c as F,b as u,f as L,u as n,T as N,e as i,x as t,m as c,k as A,l as a,h as $,y as I,s as W,A as q,F as R,z as _}from"./vue.esm-bundler-BCWWDzSy.js";import{q as f}from"./index-Bz0y6LhV.js";import{b as O,d,w as U}from"./install-CHjgJfcB.js";import{u as H}from"./index-BoOdRfEY.js";import{u as J}from"./index-CU2PSoyO.js";import{u as K}from"./use-form-common-props-DMcKWkv-.js";import{G as s}from"./ConfigProvider-BAdTAJXu.js";import{v as Q,p as k}from"./package-D7d8ClDD.js";import{g as X,a as Y,b as T}from"./documentation-stories-DH-Utv5z.js";import"./_arrayPush-DXBsyDbg.js";import"./constants-Dnj8X3EN.js";import"./index-B9DYlcmC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CNqC7f2T.js";import"./error-Cq9Fpw4b.js";const Z=O({title:{type:String,default:""},description:{type:String,default:""},hideClose:{type:Boolean,default:!1},icon:{type:d(String),default:""},type:{type:d(String),default:"success"},size:{type:d(String),default:"md"},links:{type:d(Array),default:()=>[]},shadow:{type:Boolean,default:!1},border:{type:Boolean,default:!0},iconAlign:{type:d(String),default:"medium"},iconFill:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!0},...H(["ariaLabel"])}),ee={close:l=>l instanceof MouseEvent},oe=["aria-label"],ne=["onClick","aria-label"],S=B({__name:"inline",props:Z,emits:ee,setup(l,{emit:V}){const p=l,z=V,E=j(!0),e=J("inline"),G=K(),P=j(null),x=F(()=>[e.b(),e.m(G.value),e.m(p.type),p.shadow&&e.m("shadow"),!p.border&&e.m("no-border"),e.m(`icon-align-${p.iconAlign}`)]);function M(o){E.value=!1,z("close",o)}return(o,ie)=>(i(),u(N,{name:n(e).m("fade")},{default:L(()=>[E.value?(i(),t("div",{key:0,class:a(x.value),ref_key:"inlineRef",ref:P,"aria-label":o.ariaLabel||"inline"},[o.iconFill?(i(),t("div",{key:0,class:a(n(e).e("icon-fill"))},[$(n(f),{"aria-label":"icon informative",class:a(n(e).e("icon")),name:o.icon},null,8,["class","name"])],2)):(i(),u(n(f),{key:1,"aria-label":"icon informative",class:a(n(e).e("icon")),name:o.icon},null,8,["class","name"])),A("div",null,[o.title?(i(),t("h3",{key:0,class:a([n(e).e("title")])},I(o.title),3)):c("",!0),A("p",{class:a([n(e).e("description")])},[W(o.$slots,"default",{},()=>[q(I(o.description),1)])],2),o.links.length?(i(),t("div",{key:1,role:"group",class:a([n(e).e("links")])},[(i(!0),t(R,null,_(o.links,(m,D)=>(i(),t("button",{key:D,onClick:ae=>m.action(),class:a([n(e).e("link"),o.showArrow&&n(e).em("link","arrow")]),"aria-label":m.ariaLabel||m.label,type:"button"},[q(I(m.label)+" ",1),o.showArrow?(i(),u(n(f),{key:0,name:"regular chevron-right",class:a(n(e).e("link-arrow"))},null,8,["class"])):c("",!0)],10,ne))),128))],2)):c("",!0)]),o.hideClose?c("",!0):(i(),u(n(f),{key:2,role:"button","aria-label":"close inline",onClick:M,class:a(n(e).e("close")),name:"regular times"},null,8,["class"]))],10,oe)):c("",!0)]),_:3},8,["name"]))}});S.__docgenInfo={exportName:"default",displayName:"inline",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/inline/src/inline.vue"]};const r=U(S,{Inline:S}),Ce={title:"Data/Inline",component:r,parameters:{docs:{description:{component:`
El componente Inline es utilizado para comunicar información contextual, como estados específicos (éxito, error, advertencia, información) dentro de una página o funcionalidad. Es ideal para mensajes secundarios que no necesitan interrumpir al usuario, como alertas, recordatorios o enlaces relevantes. Este componente asegura que el mensaje sea notorio pero no invasivo, proporcionando claridad visual y textual.

> Versión actual: ${Q}

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
${Y(k)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${T(k)}

# Dependencias externas
yarn add ${T(k,!0)}
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
`}}},argTypes:{icon:{description:"Icono a mostrar en el componente `Inline`.",control:"select",options:["",...X()],table:{type:{summary:"string"},defaultValue:{summary:""}}},title:{description:"Título de la información que queremos transmitir.",control:"text"},description:{description:"Descripción adicional de la información.",control:"text"},size:{description:"Tamaño del componente",control:"select",options:["md","sm"],defaultValue:"md"},hideClose:{description:"Indica si se debe ocultar el botón de cierre.",control:"boolean",defaultValue:!1},type:{description:"Tipo de mensaje a mostrar. Colores de fondo y estilo de texto.",control:"select",options:["success","info","warning","error","card"],defaultValue:"success"},links:{description:"Lista de enlaces interactivos con etiquetas y acciones.",control:"object"},shadow:{description:"Activa el sombreado del componente.",control:"boolean",defaultValue:!1},border:{description:"Muestra u oculta el borde del componente.",control:"boolean",defaultValue:!0},iconAlign:{description:"Alineación vertical del ícono izquierdo.",control:"select",options:["top","medium","bottom"],defaultValue:"medium"},iconFill:{description:"Agrega un fondo detrás del ícono izquierdo.",control:"boolean",defaultValue:!1},showArrow:{description:"Muestra u oculta el ícono de flecha en cada enlace.",control:"boolean",defaultValue:!0},ariaLabel:{description:"Etiqueta ARIA para accesibilidad.",control:"text"},onClose:{description:"Evento para el cierre del componente.",table:{category:"Eventos"}},default:{description:"Contenido personalizado.",table:{category:"Slots",type:{summary:"slot"}}}},args:{icon:"solid undo-alt",title:"Título",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",size:"md",hideClose:!1,type:"success",links:[{label:"Enlace 1",action:()=>alert("Acción 1")},{label:"Enlace 2",action:()=>alert("Acción 2")}],shadow:!1,border:!0,iconAlign:"medium",iconFill:!1,showArrow:!0,ariaLabel:"inline"}},g={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del componente Inline. Desde los controles puedes probar todas las propiedades disponibles."}}},render:l=>({components:{GInline:r,GConfigProvider:s},setup(){return{args:l}},template:`
      <g-config-provider>
        <g-inline v-bind="args" />
      </g-config-provider>
    `})},y={name:"Tipos",parameters:{docs:{description:{story:"El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error."}}},render:()=>({components:{GInline:r,GConfigProvider:s},template:`
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
    `})},b={name:"Tamaños",parameters:{docs:{description:{story:"El componente tiene dos tamaños disponibles: md (mediano) y sm (pequeño). Útil para adaptarse a diferentes contextos de UI."}}},render:()=>({components:{GInline:r,GConfigProvider:s},template:`
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
    `})},v={name:"Sin botón cerrar",parameters:{docs:{description:{story:"Cuando no necesitas que el usuario pueda cerrar el mensaje, puedes ocultar el botón de cierre con la propiedad hideClose."}}},render:()=>({components:{GInline:r,GConfigProvider:s},template:`
      <g-config-provider>
        <g-inline
          hideClose
          title="Sin botón de cerrar"
          description="Este mensaje no tiene botón de cerrar"
          icon="solid info-circle"
        />
      </g-config-provider>
    `})},h={name:"Sin ícono ni enlaces",parameters:{docs:{description:{story:"Si no necesitas un ícono, puedes omitirlo dejando la propiedad icon vacía."}}},render:()=>({components:{GInline:r,GConfigProvider:s},template:`
      <g-config-provider>
        <g-inline
          title="Sin ícono"
          description="Este mensaje no tiene ícono"
        />
      </g-config-provider>
    `})},C={name:"Card",parameters:{docs:{description:{story:"Variante card: fondo blanco, sin borde y con sombra. Ideal para destacar información dentro de un panel o sección."}}},render:()=>({components:{GInline:r,GConfigProvider:s},template:`
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
    `})},w={name:"Con fill y sombra",parameters:{docs:{description:{story:"Combinación de icon-fill y shadow para dar mayor énfasis visual al componente."}}},render:()=>({components:{GInline:r,GConfigProvider:s},template:`
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
    `})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const we=["Primary","AllTypes","Sizes","WithoutClose","WithoutIcon","Card","WithIconFillAndShadow"];export{y as AllTypes,C as Card,g as Primary,b as Sizes,w as WithIconFillAndShadow,v as WithoutClose,h as WithoutIcon,we as __namedExportsOrder,Ce as default};
