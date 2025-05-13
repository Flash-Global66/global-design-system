import{J as _,r as q,c as p,d as V,b as $,f as D,p as R,u as s,R as M,e as E,h as P,k as A,l as G,x as S,z as N,n as F,F as L,Q as j}from"./vue.esm-bundler-BQ5MY6wY.js";import{z as O,C as H,a as J,B as K,G as b}from"./ConfigProvider-C-g_q7t3.js";import{d as I}from"./error-Cq9Fpw4b.js";import{f as Q}from"./index-CqyTLt6u.js";import{u as W}from"./index-B9ZeYHC7.js";import{u as X}from"./use-form-item-CNnZethX.js";import{g as Y,a as U,b as T}from"./documentation-stories-B5LZhktk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./constants-Dnj8X3EN.js";import"./index-CdyrOdXF.js";import"./index-CFVVBxWq.js";import"./index.es-DRG_Ro19.js";import"./index-CHFUNSwa.js";import"./index-wqKiBS4Z.js";const Z=O({disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},href:{type:String,default:void 0},target:{type:String,default:void 0},download:{type:String,default:void 0},variant:{type:String,default:"grey"},icon:{type:String,default:"solid check"},size:{type:String,default:"medium"},border:{type:Boolean,default:!1}}),ee={click:e=>e instanceof MouseEvent,mousedown:e=>e instanceof MouseEvent};function oe(e){const t=["grey","black","blue"];(!_(e.variant)||!t.includes(e.variant))&&I("Icon Button",`Invalid prop "variant": expected one of ${t.join(", ")}, but received "${e.variant}".`),H(e.disabled)||I("Button",`Invalid prop "disabled": expected a boolean, but received "${typeof e.disabled}".`),e.icon&&!_(e.icon)&&I("Icon Button",`Invalid prop "icon": expected a string for icon name, but received "${typeof e.icon}".`)}const ne=e=>{const t=q([]);let o=0;const g=i=>{if(e())return;const m=i.currentTarget.getBoundingClientRect(),u=i.clientX-m.left,a=i.clientY-m.top;o++;const r={id:o,x:u,y:a};t.value.push(r),W(()=>l(r.id),700)},l=i=>{t.value=t.value.filter(d=>d.id!==i)};return{ripples:t,handleRipple:g,removeRipple:l}},te=(e,t)=>{const o=p(()=>e.disabled),g=q();X();const{ripples:l,handleRipple:i,removeRipple:d}=ne(()=>o.value),m=p(()=>e.href?"a":"button"),u=p(()=>e.href?{}:{disabled:o.value,autofocus:e.autofocus}),a=p(()=>({...u.value,"aria-disabled":e.disabled,role:e.href?"link":"button",...e.href?{href:e.href,target:e.target,download:e.download}:{autofocus:e.autofocus},onClick:r,onMousedown:v,onPointerdown:i,onKeydown:[n=>n.key===" "&&(n.preventDefault(),r(n)),n=>n.key==="Enter"&&(n.preventDefault(),r(n))]})),r=n=>{if(o.value){n.preventDefault(),n.stopPropagation();return}t("click",n)},v=n=>{if(o.value){n.preventDefault();return}t("mousedown",n)};return{_ref:g,_disabled:o,_props:u,handleClick:r,handleMouseDown:v,ripples:l,handleRipple:i,removeRipple:d,componentId:m,allAttrs:a}},ae={class:"hover-effect"},ie=["onAnimationend"],C=V({__name:"IconButton",props:Z,emits:ee,setup(e,{emit:t}){const o=e,g=t;oe(o);const{_ref:l,componentId:i,ripples:d,removeRipple:m,allAttrs:u}=te(o,g),a=J("icon-button"),r=p(()=>[o.variant&&a.m(`variant-${o.variant}`),o.size&&a.m(o.size),o.border&&a.m("border")]),v=p(()=>[a.b(),...r.value,a.is("disabled",o.disabled),a.is("href",!!o.href)].flat().filter(Boolean));return(n,se)=>(E(),$(M(s(i)),R({ref_key:"_ref",ref:l},s(u),{class:v.value}),{default:D(()=>[P(s(Q),{name:n.icon,class:G(s(a).e("icon"))},null,8,["name","class"]),A("span",ae,[P(j,{name:"ripple"},{default:D(()=>[(E(!0),S(L,null,N(s(d),f=>(E(),S("div",{key:f.id,class:G(s(a).e("ripple")),style:F({left:f.x+"px",top:f.y+"px"}),onAnimationend:ce=>s(m)(f.id)},null,46,ie))),128))]),_:1})])]),_:1},16,["class"]))}});C.__docgenInfo={exportName:"default",displayName:"IconButton",description:"",tags:{},sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/icon-button/src/IconButton.vue"]};const c=K(C,{IconButton:C}),re="0.2.0",w={"@flash-global66/g-icon-font":"^0.0.8","element-plus":"^2.9.0",vue:"^3.2.0"},Be={title:"Basic/Icon Button",component:c,parameters:{docs:{description:{component:`
El componente IconButton permite crear botones circulares que solo contienen un ícono. Es útil para acciones comunes donde el ícono es universalmente reconocido o cuando el espacio es limitado en la interfaz.

> Versión actual: ${re}

## Características
- Múltiples variantes visuales (grey, black, blue)
- Dos tamaños disponibles (medium, small)
- Opción para mostrar borde
- Compatible con enlaces (href)
- Efecto ripple al hacer clic

### Instalación

\`\`\`bash
yarn add @flash-global66/g-icon-button
\`\`\`

### Importación del componente
\`\`\`typescript
import { GIconButton } from '@flash-global66/g-icon-button'
import '@flash-global66/g-icon-button/styles.scss'
\`\`\`

## Dependencias

Este componente requiere:

${U(w)}

\`\`\`bash
# Dependencias global66
yarn add ${T(w)}

# Dependencias externas
yarn add ${T(w,!0)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<script setup lang="ts">
import { GIconButton } from '@flash-global66/g-icon-button';
<\/script>

<template>
  <g-icon-button
    variant="grey"
    icon="solid check"
    size="medium"
  />
</template>
\`\`\`
`}}},argTypes:{variant:{control:"select",options:["grey","black","blue"],description:"Variante visual del icono botón",table:{type:{summary:"string"},category:"Principales"}},size:{control:"select",options:["medium","small"],description:"Tamaño del icono botón",table:{type:{summary:"string"},category:"Principales"}},border:{control:"boolean",description:"Muestra un borde alrededor del botón",table:{type:{summary:"boolean"},category:"Principales"}},icon:{description:"Icono a mostrar en el botón.",control:"select",options:Y(),table:{type:{summary:"string"},defaultValue:{summary:"solid check"}}},autofocus:{control:"boolean",description:"El icono botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",table:{category:"Comportamiento",type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Deshabilita el icono botón",table:{category:"Comportamiento",type:{summary:"boolean"}}},download:{control:"text",description:"Especifica que el elemento se descargará cuando el usuario haga clic en el enlace",table:{defaultValue:{summary:"undefined"},category:"Enlaces",type:{summary:"string"}}},href:{control:"text",description:"Convierte el icono botón en un enlace",table:{category:"Enlaces",type:{summary:"string"}}},target:{control:"text",description:"Atributo target del enlace",table:{category:"Enlaces",type:{summary:"string"}}},onClick:{description:"Evento para el clic en el botón.",table:{category:"Eventos"}},onMousedown:{description:"Evento para cuando se presiona el mouse sobre el botón.",table:{category:"Eventos"}}},args:{icon:"solid check",variant:"grey",size:"medium",disabled:!1,border:!1}},y={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del componente IconButton. Desde los controles puedes probar todas las propiedades disponibles."},source:{code:`
<g-icon-button
  variant="grey"
  icon="solid check"
  size="medium"
/>
`,language:"html"}}},render:e=>({components:{GIconButton:c,GConfigProvider:b},setup(){return{args:e}},template:`
      <g-config-provider>
        <g-icon-button v-bind="args" />
      </g-config-provider>
    `})},h={name:"Variantes",parameters:{docs:{description:{story:"El componente tiene 3 variantes diferentes: grey, black y blue. Cada una establece un esquema de color apropiado para diferentes contextos."},source:{code:`
<g-icon-button variant="grey" icon="solid user" />
<g-icon-button variant="black" icon="solid envelope" />
<g-icon-button variant="blue" icon="solid question-circle" />
`,language:"html"}}},render:()=>({components:{GIconButton:c,GConfigProvider:b},template:`
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            variant="grey"
            icon="solid user"
          />
          <g-icon-button 
            variant="black"
            icon="solid envelope"
          />
          <g-icon-button 
            variant="blue"
            icon="solid question-circle"
          />
        </div>
      </g-config-provider>
    `})},k={name:"Tamaños",parameters:{docs:{description:{story:"El componente tiene dos tamaños disponibles: medium (mediano) y small (pequeño)."},source:{code:`
<g-icon-button size="medium" icon="solid paper-plane" />
<g-icon-button size="small" icon="solid paper-plane" />
`,language:"html"}}},render:()=>({components:{GIconButton:c,GConfigProvider:b},template:`
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            size="medium"
            icon="solid paper-plane"
          />
          <g-icon-button 
            size="small"
            icon="solid paper-plane"
          />
        </div>
      </g-config-provider>
    `})},z={name:"Con borde",parameters:{docs:{description:{story:"El componente puede mostrarse con un borde utilizando la propiedad border. Esta propiedad puede aplicarse a ambos tamaños (medium y small)."},source:{code:`
<!-- Tamaño medium con borde -->
<g-icon-button variant="grey" icon="solid lock" border size="medium" />
<g-icon-button variant="black" icon="solid lock" border size="medium" />
<g-icon-button variant="blue" icon="solid lock" border size="medium" />

<!-- Tamaño small con borde -->
<g-icon-button variant="grey" icon="solid lock" border size="small" />
<g-icon-button variant="black" icon="solid lock" border size="small" />
<g-icon-button variant="blue" icon="solid lock" border size="small" />
`,language:"html"}}},render:()=>({components:{GIconButton:c,GConfigProvider:b},template:`
      <g-config-provider>
        <div class="space-y-md">
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño medium con borde</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border size="medium" />
              <g-icon-button variant="black" icon="solid lock" border size="medium" />
              <g-icon-button variant="blue" icon="solid lock" border size="medium" />
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño small con borde</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border size="small" />
              <g-icon-button variant="black" icon="solid lock" border size="small" />
              <g-icon-button variant="blue" icon="solid lock" border size="small" />
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},x={name:"Deshabilitado",parameters:{docs:{description:{story:"El componente puede deshabilitarse utilizando la propiedad disabled."},source:{code:`
<g-icon-button 
  variant="grey"
  icon="regular ban"
  disabled
/>
`,language:"html"}}},render:()=>({components:{GIconButton:c,GConfigProvider:b},template:`
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            variant="grey"
            icon="regular ban"
            disabled
          />
          <g-icon-button 
            variant="black"
            icon="solid user-slash"
            disabled
          />
          <g-icon-button 
            variant="blue"
            icon="solid times-circle"
            disabled
          />
        </div>
      </g-config-provider>
    `})},B={name:"Como enlace",parameters:{docs:{description:{story:"El componente puede funcionar como un enlace utilizando la propiedad href."},source:{code:`
<g-icon-button
  variant="blue"
  icon="solid arrow-up-from-bracket"
  href="https://www.example.com"
  target="_blank"
/>
`,language:"html"}}},render:()=>({components:{GIconButton:c,GConfigProvider:b},template:`
      <g-config-provider>
        <g-icon-button 
          variant="blue"
          icon="solid arrow-up-from-bracket"
          href="https://www.example.com"
          target="_blank"
        />
      </g-config-provider>
    `})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico del componente IconButton. Desde los controles puedes probar todas las propiedades disponibles.'
      },
      source: {
        code: \`
<g-icon-button
  variant="grey"
  icon="solid check"
  size="medium"
/>
\`,
        language: 'html'
      }
    }
  },
  render: args => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-icon-button v-bind="args" />
      </g-config-provider>
    \`
  })
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Variantes',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene 3 variantes diferentes: grey, black y blue. Cada una establece un esquema de color apropiado para diferentes contextos.'
      },
      source: {
        code: \`
<g-icon-button variant="grey" icon="solid user" />
<g-icon-button variant="black" icon="solid envelope" />
<g-icon-button variant="blue" icon="solid question-circle" />
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            variant="grey"
            icon="solid user"
          />
          <g-icon-button 
            variant="black"
            icon="solid envelope"
          />
          <g-icon-button 
            variant="blue"
            icon="solid question-circle"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Tamaños',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene dos tamaños disponibles: medium (mediano) y small (pequeño).'
      },
      source: {
        code: \`
<g-icon-button size="medium" icon="solid paper-plane" />
<g-icon-button size="small" icon="solid paper-plane" />
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            size="medium"
            icon="solid paper-plane"
          />
          <g-icon-button 
            size="small"
            icon="solid paper-plane"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Con borde',
  parameters: {
    docs: {
      description: {
        story: 'El componente puede mostrarse con un borde utilizando la propiedad border. Esta propiedad puede aplicarse a ambos tamaños (medium y small).'
      },
      source: {
        code: \`
<!-- Tamaño medium con borde -->
<g-icon-button variant="grey" icon="solid lock" border size="medium" />
<g-icon-button variant="black" icon="solid lock" border size="medium" />
<g-icon-button variant="blue" icon="solid lock" border size="medium" />

<!-- Tamaño small con borde -->
<g-icon-button variant="grey" icon="solid lock" border size="small" />
<g-icon-button variant="black" icon="solid lock" border size="small" />
<g-icon-button variant="blue" icon="solid lock" border size="small" />
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="space-y-md">
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño medium con borde</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border size="medium" />
              <g-icon-button variant="black" icon="solid lock" border size="medium" />
              <g-icon-button variant="blue" icon="solid lock" border size="medium" />
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño small con borde</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border size="small" />
              <g-icon-button variant="black" icon="solid lock" border size="small" />
              <g-icon-button variant="blue" icon="solid lock" border size="small" />
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...z.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Deshabilitado',
  parameters: {
    docs: {
      description: {
        story: 'El componente puede deshabilitarse utilizando la propiedad disabled.'
      },
      source: {
        code: \`
<g-icon-button 
  variant="grey"
  icon="regular ban"
  disabled
/>
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            variant="grey"
            icon="regular ban"
            disabled
          />
          <g-icon-button 
            variant="black"
            icon="solid user-slash"
            disabled
          />
          <g-icon-button 
            variant="blue"
            icon="solid times-circle"
            disabled
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Como enlace',
  parameters: {
    docs: {
      description: {
        story: 'El componente puede funcionar como un enlace utilizando la propiedad href.'
      },
      source: {
        code: \`
<g-icon-button
  variant="blue"
  icon="solid arrow-up-from-bracket"
  href="https://www.example.com"
  target="_blank"
/>
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <g-icon-button 
          variant="blue"
          icon="solid arrow-up-from-bracket"
          href="https://www.example.com"
          target="_blank"
        />
      </g-config-provider>
    \`
  })
}`,...B.parameters?.docs?.source}}};const Ee=["Primary","Variants","Sizes","Border","Disabled","AsLink"];export{B as AsLink,z as Border,x as Disabled,y as Primary,k as Sizes,h as Variants,Ee as __namedExportsOrder,Be as default};
