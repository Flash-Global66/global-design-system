import{J as T,r as V,c as b,d as R,b as $,f as P,p as M,u as c,U as A,e as I,h as D,k as N,l as G,x as S,z as j,n as F,F as L,S as O}from"./vue.esm-bundler-CjRFyT5z.js";import{s as H,y as J,u as K,w as U}from"./install-l_-A8haV.js";import{d as w}from"./error-Cq9Fpw4b.js";import{t as W}from"./index-BxKfg4wu.js";import{u as X}from"./index-DPhpeCjj.js";import{u as Y}from"./use-form-item-D6EjyctE.js";import{G as d}from"./ConfigProvider-HvX_Zy0c.js";import{g as Q,a as Z,b as q}from"./documentation-stories-DUk6MGV7.js";import"./constants-Dnj8X3EN.js";import"./index-BPU2h-Gf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index.es-DWBUHxqm.js";import"./index-DdPf6Guz.js";import"./index-B7B84oAx.js";const ee=H({disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},href:{type:String,default:void 0},target:{type:String,default:void 0},download:{type:String,default:void 0},variant:{type:String,default:"grey"},icon:{type:String,default:"solid check"},size:{type:String,default:"medium"},border:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},type:{type:String,default:"button"}}),oe={click:e=>e instanceof MouseEvent,mousedown:e=>e instanceof MouseEvent};function ne(e){const t=["grey","black","blue"];(!T(e.variant)||!t.includes(e.variant))&&w("Icon Button",`Invalid prop "variant": expected one of ${t.join(", ")}, but received "${e.variant}".`),J(e.disabled)||w("Button",`Invalid prop "disabled": expected a boolean, but received "${typeof e.disabled}".`),e.icon&&!T(e.icon)&&w("Icon Button",`Invalid prop "icon": expected a string for icon name, but received "${typeof e.icon}".`)}const ae=e=>{const t=V([]);let o=0;const g=i=>{if(e())return;const m=i.currentTarget.getBoundingClientRect(),p=i.clientX-m.left,a=i.clientY-m.top;o++;const r={id:o,x:p,y:a};t.value.push(r),X(()=>l(r.id),700)},l=i=>{t.value=t.value.filter(u=>u.id!==i)};return{ripples:t,handleRipple:g,removeRipple:l}},te=(e,t)=>{const o=b(()=>e.disabled),g=V();Y();const{ripples:l,handleRipple:i,removeRipple:u}=ae(()=>o.value),m=b(()=>e.href?"a":"button"),p=b(()=>e.href?{}:{disabled:o.value,autofocus:e.autofocus,type:e.type}),a=b(()=>({...p.value,"aria-disabled":e.disabled,role:e.href?"link":"button",...e.href?{href:e.href,target:e.target,download:e.download}:{autofocus:e.autofocus},onClick:r,onMousedown:v,onPointerdown:i,onKeydown:[n=>n.key===" "&&(n.preventDefault(),r(n)),n=>n.key==="Enter"&&(n.preventDefault(),r(n))]})),r=n=>{if(o.value){n.preventDefault(),n.stopPropagation();return}t("click",n)},v=n=>{if(o.value){n.preventDefault();return}t("mousedown",n)};return{_ref:g,_disabled:o,_props:p,handleClick:r,handleMouseDown:v,ripples:l,handleRipple:i,removeRipple:u,componentId:m,allAttrs:a}},ie={class:"hover-effect"},re=["onAnimationend"],_=R({__name:"IconButton",props:ee,emits:oe,setup(e,{emit:t}){const o=e,g=t;ne(o);const{_ref:l,componentId:i,ripples:u,removeRipple:m,allAttrs:p}=te(o,g),a=K("icon-button"),r=b(()=>[o.variant&&a.m(`variant-${o.variant}`),o.size&&a.m(o.size),o.border&&a.m("border"),o.rounded&&o.border&&a.m("rounded")]),v=b(()=>[a.b(),...r.value,a.is("disabled",o.disabled),a.is("href",!!o.href)].flat().filter(Boolean));return(n,ce)=>(I(),$(A(c(i)),M({ref_key:"_ref",ref:l},c(p),{class:v.value}),{default:P(()=>[D(c(W),{name:n.icon,class:G(c(a).e("icon"))},null,8,["name","class"]),N("span",ie,[D(O,{name:"ripple"},{default:P(()=>[(I(!0),S(L,null,j(c(u),f=>(I(),S("div",{key:f.id,class:G(c(a).e("ripple")),style:F({left:f.x+"px",top:f.y+"px"}),onAnimationend:de=>c(m)(f.id)},null,46,re))),128))]),_:1})])]),_:1},16,["class"]))}});_.__docgenInfo={exportName:"default",displayName:"IconButton",description:"",tags:{},sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/icon-button/src/IconButton.vue"]};const s=U(_,{IconButton:_}),se="0.3.0",C={"@flash-global66/g-icon-font":"^0.10.0","element-plus":"^2.9.0",vue:"^3.2.0"},Ee={title:"Basic/IconButton",component:s,parameters:{docs:{description:{component:`
El componente IconButton permite crear botones circulares que solo contienen un ícono. Es útil para acciones comunes donde el ícono es universalmente reconocido o cuando el espacio es limitado en la interfaz.

> Versión actual: ${se}

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

${Z(C)}

\`\`\`bash
# Dependencias global66
yarn add ${q(C)}

# Dependencias externas
yarn add ${q(C,!0)}
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
`}}},argTypes:{variant:{control:"select",options:["grey","black","blue"],description:"Variante visual del icono botón",table:{type:{summary:"string"},category:"Principales"}},size:{control:"select",options:["medium","small"],description:"Tamaño del icono botón",table:{type:{summary:"string"},category:"Principales"}},border:{control:"boolean",description:"Muestra un borde alrededor del botón",table:{type:{summary:"boolean"},category:"Principales"}},rounded:{control:"boolean",description:"Hace que el borde sea completamente redondeado (requiere border: true)",table:{type:{summary:"boolean"},category:"Principales"}},icon:{description:"Icono a mostrar en el botón.",control:"select",options:Q(),table:{type:{summary:"string"},defaultValue:{summary:"solid check"}}},autofocus:{control:"boolean",description:"El icono botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",table:{category:"Comportamiento",type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Deshabilita el icono botón",table:{category:"Comportamiento",type:{summary:"boolean"}}},download:{control:"text",description:"Especifica que el elemento se descargará cuando el usuario haga clic en el enlace",table:{defaultValue:{summary:"undefined"},category:"Enlaces",type:{summary:"string"}}},href:{control:"text",description:"Convierte el icono botón en un enlace",table:{category:"Enlaces",type:{summary:"string"}}},target:{control:"text",description:"Atributo target del enlace",table:{category:"Enlaces",type:{summary:"string"}}},type:{control:"select",options:["button","submit","reset"],description:"Especifica el tipo de botón (solo cuando no se usa href).",table:{type:{summary:"string"},defaultValue:{summary:"button"},category:"Principales"}},onClick:{description:"Evento para el clic en el botón.",table:{category:"Eventos"}},onMousedown:{description:"Evento para cuando se presiona el mouse sobre el botón.",table:{category:"Eventos"}}},args:{icon:"solid check",variant:"grey",size:"medium",disabled:!1,border:!1,type:"button"}},y={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del componente IconButton. Desde los controles puedes probar todas las propiedades disponibles."},source:{code:`
<g-icon-button
  variant="grey"
  icon="solid check"
  size="medium"
/>
`,language:"html"}}},render:e=>({components:{GIconButton:s,GConfigProvider:d},setup(){return{args:e}},template:`
      <g-config-provider>
        <g-icon-button v-bind="args" />
      </g-config-provider>
    `})},k={name:"Variantes",parameters:{docs:{description:{story:"El componente tiene 3 variantes diferentes: grey, black y blue. Cada una establece un esquema de color apropiado para diferentes contextos."},source:{code:`
<g-icon-button variant="grey" icon="solid user" />
<g-icon-button variant="black" icon="solid envelope" />
<g-icon-button variant="blue" icon="solid question-circle" />
`,language:"html"}}},render:()=>({components:{GIconButton:s,GConfigProvider:d},template:`
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
    `})},h={name:"Tamaños",parameters:{docs:{description:{story:"El componente tiene dos tamaños disponibles: medium (mediano) y small (pequeño)."},source:{code:`
<g-icon-button size="medium" icon="solid paper-plane" />
<g-icon-button size="small" icon="solid paper-plane" />
`,language:"html"}}},render:()=>({components:{GIconButton:s,GConfigProvider:d},template:`
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
`,language:"html"}}},render:()=>({components:{GIconButton:s,GConfigProvider:d},template:`
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
    `})},x={name:"Borde completamente redondeado",parameters:{docs:{description:{story:"Cuando se usan las propiedades border y rounded juntas, el componente muestra un borde completamente redondeado (rounded-full)."},source:{code:`
<!-- Tamaño medium con borde redondeado -->
<g-icon-button variant="grey" icon="solid lock" border rounded size="medium" />
<g-icon-button variant="black" icon="solid lock" border rounded size="medium" />
<g-icon-button variant="blue" icon="solid lock" border rounded size="medium" />

<!-- Tamaño small con borde redondeado -->
<g-icon-button variant="grey" icon="solid lock" border rounded size="small" />
<g-icon-button variant="black" icon="solid lock" border rounded size="small" />
<g-icon-button variant="blue" icon="solid lock" border rounded size="small" />
`,language:"html"}}},render:()=>({components:{GIconButton:s,GConfigProvider:d},template:`
      <g-config-provider>
        <div class="space-y-md">
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño medium con borde redondeado</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border rounded size="medium" />
              <g-icon-button variant="black" icon="solid lock" border rounded size="medium" />
              <g-icon-button variant="blue" icon="solid lock" border rounded size="medium" />
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño small con borde redondeado</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border rounded size="small" />
              <g-icon-button variant="black" icon="solid lock" border rounded size="small" />
              <g-icon-button variant="blue" icon="solid lock" border rounded size="small" />
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},B={name:"Deshabilitado",parameters:{docs:{description:{story:"El componente puede deshabilitarse utilizando la propiedad disabled."},source:{code:`
<g-icon-button 
  variant="grey"
  icon="regular ban"
  disabled
/>
`,language:"html"}}},render:()=>({components:{GIconButton:s,GConfigProvider:d},template:`
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
    `})},E={name:"Como enlace",parameters:{docs:{description:{story:"El componente puede funcionar como un enlace utilizando la propiedad href."},source:{code:`
<g-icon-button
  variant="blue"
  icon="solid arrow-up-from-bracket"
  href="https://www.example.com"
  target="_blank"
/>
`,language:"html"}}},render:()=>({components:{GIconButton:s,GConfigProvider:d},template:`
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
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
  name: 'Borde completamente redondeado',
  parameters: {
    docs: {
      description: {
        story: 'Cuando se usan las propiedades border y rounded juntas, el componente muestra un borde completamente redondeado (rounded-full).'
      },
      source: {
        code: \`
<!-- Tamaño medium con borde redondeado -->
<g-icon-button variant="grey" icon="solid lock" border rounded size="medium" />
<g-icon-button variant="black" icon="solid lock" border rounded size="medium" />
<g-icon-button variant="blue" icon="solid lock" border rounded size="medium" />

<!-- Tamaño small con borde redondeado -->
<g-icon-button variant="grey" icon="solid lock" border rounded size="small" />
<g-icon-button variant="black" icon="solid lock" border rounded size="small" />
<g-icon-button variant="blue" icon="solid lock" border rounded size="small" />
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
            <h3 class="text-sm font-medium mb-2">Tamaño medium con borde redondeado</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border rounded size="medium" />
              <g-icon-button variant="black" icon="solid lock" border rounded size="medium" />
              <g-icon-button variant="blue" icon="solid lock" border rounded size="medium" />
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño small con borde redondeado</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border rounded size="small" />
              <g-icon-button variant="black" icon="solid lock" border rounded size="small" />
              <g-icon-button variant="blue" icon="solid lock" border rounded size="small" />
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const Ie=["Primary","Variants","Sizes","Border","RoundedBorder","Disabled","AsLink"];export{E as AsLink,z as Border,B as Disabled,y as Primary,x as RoundedBorder,h as Sizes,k as Variants,Ie as __namedExportsOrder,Ee as default};
