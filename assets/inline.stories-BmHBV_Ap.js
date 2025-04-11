import{e as z,r as S,g as P,t as C,H as _,q as o,O as L,j as r,h as a,l,p as s,I as A,k as h,x as b,m as V,J as w,K as M,L as N}from"./vue.esm-bundler-BmNPGRkA.js";import{_ as k}from"./Icon-CtzUyd3_.js";import{x as B,l as d,u as D,G as t}from"./ConfigProvider-DXUgDH9p.js";import{u as W}from"./index-BBJgTkeT.js";import{u as F}from"./use-form-common-props-BNw-y6r4.js";import{generateIconOptions as O}from"./icon-font.stories-DuZjseh3.js";import"./index.es-C5bAJVb9.js";import"./index-DDVpgGx_.js";import"./index-Ctb24CLq.js";import"./error-Cq9Fpw4b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_arrayPush-BTZjb8bE.js";import"./constants-Dnj8X3EN.js";import"./index-CrAkN-9E.js";import"./index-OvFQJ97y.js";import"./index-BsfyV7Ae.js";import"./index-BHYX4iOF.js";import"./_initCloneObject-lUptluD5.js";import"./castArray-D-e3jlfW.js";import"./index-CSx2dOih.js";import"./event-BB_Ol6Sd.js";import"./index-Bfjh2vJW.js";import"./index-R7rVe_Xq.js";import"./index-y-EhIaq6.js";import"./index-DalEAbx2.js";import"./index-DAp_qrnw.js";const R=B({title:{type:String,default:""},description:{type:String,required:!0,default:""},hideClose:{type:Boolean,default:!1},icon:{type:d(String),default:""},type:{type:d(String),default:"success"},size:{type:d(String),default:"md"},links:{type:d(Array),default:()=>[]},...W(["ariaLabel"])}),U=["aria-label"],$={class:""},H=["onClick","aria-label"],n=z({__name:"Inline",props:R,setup(v){const j=v,I=S(!0),e=D("inline"),E=F(),G=S(null),T=P(()=>[e.b(),e.m(E.value),e.m(j.type)]);async function q(){I.value=!1}return(i,J)=>(r(),C(L,{name:o(e).m("fade")},{default:_(()=>[I.value?(r(),a("div",{key:0,class:s(T.value),ref_key:"inlineRef",ref:G,"aria-label":i.ariaLabel||"inline"},[A(o(k),{"aria-label":"icon informative",class:s([o(e).e("icon")]),name:i.icon},null,8,["class","name"]),h("div",$,[h("h3",{class:s([o(e).e("title")])},b(i.title),3),i.description?(r(),a("p",{key:0,class:s([o(e).e("description")])},[V(i.$slots,"default",{},()=>[w(b(i.description),1)])],2)):l("",!0),i.links.length?(r(),a("div",{key:1,role:"group",class:s([o(e).e("links")])},[(r(!0),a(M,null,N(i.links,(c,x)=>(r(),a("button",{key:x,onClick:c.action,class:s([o(e).e("link")]),"aria-label":c.ariaLabel||c.label,type:"button"},b(c.label),11,H))),128))],2)):l("",!0)]),i.hideClose?l("",!0):(r(),C(o(k),{key:0,role:"button","aria-label":"close inline",onClick:q,class:s(o(e).e("close")),name:"regular times"},null,8,["class"]))],10,U)):l("",!0)]),_:3},8,["name"]))}});n.__docgenInfo={exportName:"default",displayName:"Inline",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/inline/Inline.vue"]};const Ce={title:"Data/Inline",component:n,parameters:{docs:{description:{component:`El componente Inline se utiliza para mostrar información en un formato compacto, con múltiples opciones de personalización:

> - Títulos y descripciones personalizables
> - Íconos integrados
> - Enlaces interactivos
> - Diferentes tipos de mensajes (success, info, warning, error)
> - Tamaños adaptables (md, sm)
> - Control de visibilidad

### Instalación

\`\`\`bash
yarn add @flash-global66/g-inline
\`\`\`

### Importación

\`\`\`typescript
import { GInline } from '@flash-global66/g-framework'
import '@flash-global66/g-inline/inline.styles.scss'
\`\`\`
`}}},argTypes:{icon:{description:"Icono a mostrar en el componente `Inline`.",control:"select",options:["",...O()],table:{type:{summary:"string"},defaultValue:{summary:""}}},title:{description:"Título de la información que queremos transmitir.",control:"text"},description:{description:"Descripción adicional de la información.",control:"text"},size:{description:"Tamaño del componente",control:"select",options:["md","sm"],defaultValue:"md"},hideClose:{description:"Indica si se debe ocultar el botón de cierre.",control:"boolean",defaultValue:!1},type:{description:"Tipo de mensaje a mostrar. Colores de fondo y estilo de texto.",control:"select",options:["success","info","warning","error"],defaultValue:"success"},links:{description:"Lista de enlaces interactivos con etiquetas y acciones.",control:"object"},ariaLabel:{description:"Etiqueta ARIA para accesibilidad.",control:"text"}},args:{icon:"solid undo-alt",title:"Título",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",size:"md",hideClose:!1,type:"success",links:[{label:"Enlace 1",action:()=>alert("Acción 1")},{label:"Enlace 2",action:()=>alert("Acción 2")}],ariaLabel:"inline"}},p={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del componente Inline. Desde los controles puedes probar todas las propiedades disponibles."}}},render:v=>({components:{GInline:n,GConfigProvider:t},setup(){return{args:v}},template:`
      <g-config-provider>
        <g-inline v-bind="args" />
      </g-config-provider>
    `})},m={name:"Tipos",parameters:{docs:{description:{story:"El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error."}}},render:()=>({components:{GInline:n,GConfigProvider:t},template:`
      <g-config-provider>
        <div class="space-y-4">
          <g-inline 
            type="success"
            title="Éxito"
            description="Mensaje de éxito"
            icon="solid circle-check"
          />
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
    `})},u={name:"Tamaños",parameters:{docs:{description:{story:"El componente tiene dos tamaños disponibles: md (mediano) y sm (pequeño). Útil para adaptarse a diferentes contextos de UI."}}},render:()=>({components:{GInline:n,GConfigProvider:t},template:`
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
    `})},g={name:"Sin botón cerrar",parameters:{docs:{description:{story:"Cuando no necesitas que el usuario pueda cerrar el mensaje, puedes ocultar el botón de cierre con la propiedad hideClose."}}},render:()=>({components:{GInline:n,GConfigProvider:t},template:`
      <g-config-provider>
        <g-inline
          hideClose
          title="Sin botón de cerrar"
          description="Este mensaje no tiene botón de cerrar"
          icon="solid info-circle"
        />
      </g-config-provider>
    `})},f={name:"Sin ícono",parameters:{docs:{description:{story:"Si no necesitas un ícono, puedes omitirlo dejando la propiedad icon vacía."}}},render:()=>({components:{GInline:n,GConfigProvider:t},template:`
      <g-config-provider>
        <g-inline
          icon=""
          title="Sin ícono"
          description="Este mensaje no tiene ícono"
        />
      </g-config-provider>
    `})},y={name:"Sin enlaces",parameters:{docs:{description:{story:"Si no quieres que el mensaje tenga enlaces, puedes omitir la propiedad links."}}},render:()=>({components:{GInline:n,GConfigProvider:t},template:`
      <g-config-provider>
        <g-inline
          title="Sin enlaces"
          description="Este mensaje no tiene enlaces"
          icon="solid info-circle"
          :links="[]"
        />
      </g-config-provider>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Sin ícono',
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
          icon=""
          title="Sin ícono"
          description="Este mensaje no tiene ícono"
        />
      </g-config-provider>
    \`
  })
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Sin enlaces',
  parameters: {
    docs: {
      description: {
        story: 'Si no quieres que el mensaje tenga enlaces, puedes omitir la propiedad links.'
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
          title="Sin enlaces"
          description="Este mensaje no tiene enlaces"
          icon="solid info-circle"
          :links="[]"
        />
      </g-config-provider>
    \`
  })
}`,...y.parameters?.docs?.source}}};const he=["Primary","AllTypes","Sizes","WithoutClose","WithoutIcon","WithoutLinks"];export{m as AllTypes,p as Primary,u as Sizes,g as WithoutClose,f as WithoutIcon,y as WithoutLinks,he as __namedExportsOrder,Ce as default};
