import{l as k,p as B,a3 as j,c as z,d as L,o,y as d,f as p,u as e,a as q,w as D,i as F,B as P,z as x,g as n,Q as A,j as C,F as G,A as N,b as V}from"./iframe-Dct5CHxr.js";import{R as _}from"./index-1T7U7QlS.js";import{u as R}from"./useId-MLHLvdkG.js";import{u as O}from"./useEmptyValues-BnYvcW4O.js";import{w as $}from"./install.util-cBz1HN_T.js";import{G as y}from"./ConfigProvider-7dg58IlU.js";import{a as M,b as U}from"./documentation-stories-DmJzCMmf.js";import"./preload-helper-Dch09mLN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-GU5Cqqg3.js";const I=[1,2,3,4,5,6],H=2,Q=k({title:{type:String,default:""},description:{type:String,default:""},benefits:{type:B(Array),default:()=>[]},ariaLabel:{type:String,default:""},headingLevel:{type:B(Number),values:I,default:H}});function J(a){const r=O("benefits-card"),t=j(),l=R(),h=z(()=>`h${a.headingLevel}`),s=()=>!!(a.title||t.title);return{ns:r,headingTag:h,titleId:l,hasTitle:s,labelledBy:()=>s()?l.value:void 0,label:()=>s()?void 0:a.ariaLabel||void 0}}const K=["aria-labelledby","aria-label"],W=L({name:"GBenefitsCard",__name:"BenefitsCard",props:Q,setup(a){const r=a,{ns:t,headingTag:l,titleId:h,hasTitle:s,labelledBy:v,label:w}=J(r);return(i,Z)=>(o(),d("section",{class:n(e(t).b()),"aria-labelledby":e(v)(),"aria-label":e(w)()},[p("div",{class:n(e(t).e("body"))},[e(s)()?(o(),q(A(e(l)),{key:0,id:e(h),class:n(e(t).e("title"))},{default:D(()=>[F(i.$slots,"title",{},()=>[P(x(i.title),1)])]),_:3},8,["id","class"])):C("",!0),i.description?(o(),d("p",{key:1,class:n(e(t).e("description"))},x(i.description),3)):C("",!0),p("ul",{class:n(e(t).e("benefits"))},[(o(!0),d(G,null,N(i.benefits,c=>(o(),d("li",{key:`${c.icon} ${c.text}`,class:n(e(t).e("benefit"))},[p("span",{class:n(e(t).e("benefit-icon")),"aria-hidden":"true"},[V(e(_),{name:c.icon},null,8,["name"])],2),p("span",{class:n(e(t).e("benefit-text"))},x(c.text),3)],2))),128))],2)],2)],10,K))}}),b=$(W),X="0.1.0",S={vue:"^3.2.0"},E=[{icon:"light key-skeleton",text:"Ingresa en 2 segundos, sin recordar claves"},{icon:"light fingerprint",text:"Tu huella o Face ID nunca sale de este dispositivo"},{icon:"regular shield-check",text:"Protege el acceso a tu empresa"}],Y=[{icon:"regular landmark",text:"Productos que se adaptan a tu operación real"},{icon:"regular money-bill-alt",text:"Acceso anticipado a nuevos productos y novedades"},{icon:"regular check",text:"Menos fricciones, más agilidad operativa"}],de={title:"Basic/Benefits Card",component:b,parameters:{docs:{description:{component:`
> Versión actual: ${X}

Tarjeta oscura de beneficios: un título, una bajada y una lista de beneficios
con ícono. Reemplaza las imágenes estáticas (\`product-card-*.png/webp\`) que hoy
usan las pantallas de onboarding y de passkeys, con el texto en el DOM:
seleccionable, traducible, escalable con el zoom y legible por lectores de pantalla.

## Características
- Texto real en el DOM, sin ráster: título, bajada y beneficios son props
- Fondo, contornos y destellos fieles al diseño original
- Íconos del catálogo de \`g-icon-font\` (\`"weight name"\`), sin exports de diseño
- Nivel de encabezado configurable para respetar el outline de la página
- Acepta la cantidad de beneficios que haga falta; la tarjeta crece en alto

## Instalación

\`\`\`bash
yarn add @flash-global66/g-benefits-card
\`\`\`

## Dependencias

\`@flash-global66/g-icon-font\` viene como dependencia del paquete. Peers:

${M(S)}

\`\`\`bash
yarn add ${U(S,!0)}
\`\`\`

## Importación de estilos SASS

\`\`\`scss
@use "@flash-global66/g-benefits-card/styles.scss";
\`\`\`

## Uso básico

\`\`\`vue
<template>
  <g-benefits-card
    title="Entra en segundos, sin escribir contraseñas"
    description="Registra tu huella o Face ID y accede a Global66 Business con un solo gesto."
    :benefits="benefits"
  />
</template>

<script setup lang="ts">
import { GBenefitsCard, type BenefitsCardItem } from '@flash-global66/g-benefits-card';

const benefits: BenefitsCardItem[] = [
  { icon: 'light key-skeleton', text: 'Ingresa en 2 segundos, sin recordar claves' },
  { icon: 'light fingerprint', text: 'Tu huella o Face ID nunca sale de este dispositivo' },
  { icon: 'regular shield-check', text: 'Protege el acceso a tu empresa' },
];
<\/script>
\`\`\`

## Título con formato

Cuando el título mezcla pesos (como la tarjeta del SII), el slot \`title\`
reemplaza al prop:

\`\`\`vue
<g-benefits-card :benefits="benefits" description="...">
  <template #title>Tu empresa merece <strong>productos a su medida</strong></template>
</g-benefits-card>
\`\`\`

## Tamaño y responsive

La tarjeta ocupa el ancho de su contenedor hasta un máximo de 469px, el ancho
del diseño, y escala en proporción: es un contenedor de consulta
(\`container-type: inline-size\`) y todas las medidas del diseño están en \`cqw\`,
con un piso de legibilidad para los textos (título 20px, bajada 12px,
beneficios 11px). Para dejarla crecer, subir el tope con la variable
\`--gui-benefits-card-max-width\` en el componente o en un ancestro:

\`\`\`vue
<g-benefits-card :benefits="benefits" style="--gui-benefits-card-max-width: 560px" />
\`\`\`

En un padre que se ajusta al contenido (un flex sin ancho, un \`inline-block\`)
mide 469px. En navegadores sin container queries quedan los tamaños fijos del
diseño y la tarjeta crece en alto. Ver la story "Responsive".

## Accesibilidad
- El título es un encabezado real (\`h2\` por defecto, configurable con \`headingLevel\`)
- Los beneficios son una lista (\`ul\`/\`li\`); los íconos son decorativos (\`aria-hidden\`)
- La tarjeta es una región con nombre accesible, así que un lector de pantalla
  la anuncia y la lista entre los puntos de referencia de la página. Con título
  el nombre sale del encabezado (\`aria-labelledby\`); sin título, de la prop
  \`ariaLabel\`. Si no hay ninguno de los dos, el \`section\` queda sin nombre y
  el lector no lo anuncia como región.
        `}}},argTypes:{title:{description:"Título principal",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"''"}}},description:{description:"Bajada debajo del título",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"''"}}},benefits:{description:"Beneficios, cada uno con `icon` y `text`",control:"object",table:{type:{summary:"BenefitsCardItem[]",detail:`interface BenefitsCardItem {
  icon: IconString; // "weight name", ej. "regular shield-check"
  text: string;
}`},defaultValue:{summary:"[]"}}},ariaLabel:{description:"Nombre accesible de la región. Solo se usa cuando no hay título",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"''"}}},headingLevel:{description:"Nivel del encabezado usado para el título",control:"select",options:I,table:{type:{summary:"1 | 2 | 3 | 4 | 5 | 6"},defaultValue:{summary:"2"}}}},args:{title:"Entra en segundos, sin escribir contraseñas",description:"Registra tu huella o Face ID y accede a Global66 Business con un solo gesto.",benefits:E,headingLevel:2}},T=a=>({components:{GBenefitsCard:b,GConfigProvider:y},setup(){return{args:a}},template:`
    <g-config-provider>
      <g-benefits-card v-bind="args" />
    </g-config-provider>
  `}),u={name:"Uso básico",render:T},m={name:"Título con formato (SII)",args:{title:"",description:"Optimiza tus finanzas con herramientas que evolucionan al ritmo de tu negocio",benefits:Y},render:a=>({components:{GBenefitsCard:b,GConfigProvider:y},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-benefits-card v-bind="args">
          <template #title>
            <span class="font-normal">Tu empresa merece</span>
            productos a su medida
          </template>
        </g-benefits-card>
      </g-config-provider>
    `}),parameters:{docs:{source:{code:`
<template>
  <g-benefits-card
    description="Optimiza tus finanzas con herramientas que evolucionan al ritmo de tu negocio"
    :benefits="benefits"
  >
    <template #title>
      <span class="font-normal">Tu empresa merece</span> productos a su medida
    </template>
  </g-benefits-card>
</template>
`,language:"html"}}}},g={name:"Cinco beneficios",args:{benefits:[...E,{icon:"regular clock",text:"Sin esperar códigos por SMS"},{icon:"regular mobile",text:"Funciona en todos tus dispositivos"}]},render:T},f={name:"Responsive",render:a=>({components:{GBenefitsCard:b,GConfigProvider:y},setup(){return{args:a,widths:[560,469,360,300]}},template:`
      <g-config-provider>
        <div class="flex flex-wrap gap-6 items-start">
          <figure v-for="width in widths" :key="width" class="m-0 flex flex-col gap-2" :style="{ width: width + 'px', '--gui-benefits-card-max-width': width + 'px' }">
            <g-benefits-card v-bind="args" />
            <figcaption class="text-2 text-secondary-txt">Contenedor de {{ width }}px<template v-if="width > 469"> · --gui-benefits-card-max-width: {{ width }}px</template></figcaption>
          </figure>
        </div>
        <p class="text-2 text-secondary-txt mt-8 mb-2">Arrastra la esquina inferior derecha para redimensionar</p>
        <div class="resize-x overflow-auto rounded-md border border-dashed border-grey-500 p-3" style="width: 469px; max-width: 100%; --gui-benefits-card-max-width: 100%">
          <g-benefits-card v-bind="args" />
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"La tarjeta ocupa el ancho de su contenedor hasta 469px y escala en proporción gracias a container queries; los textos tienen un piso de legibilidad. El ejemplo de 560px sube el tope con `--gui-benefits-card-max-width`. El último se puede redimensionar arrastrando la esquina."}}}},pe=["Primary","Sii","FiveBenefits","Responsive"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Uso básico',
  render
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Título con formato (SII)',
  args: {
    title: '',
    description: 'Optimiza tus finanzas con herramientas que evolucionan al ritmo de tu negocio',
    benefits: siiBenefits
  },
  render: args => ({
    components: {
      GBenefitsCard,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-benefits-card v-bind="args">
          <template #title>
            <span class="font-normal">Tu empresa merece</span>
            productos a su medida
          </template>
        </g-benefits-card>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`
<template>
  <g-benefits-card
    description="Optimiza tus finanzas con herramientas que evolucionan al ritmo de tu negocio"
    :benefits="benefits"
  >
    <template #title>
      <span class="font-normal">Tu empresa merece</span> productos a su medida
    </template>
  </g-benefits-card>
</template>
\`,
        language: 'html'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Cinco beneficios',
  args: {
    benefits: [...passkeyBenefits, {
      icon: 'regular clock',
      text: 'Sin esperar códigos por SMS'
    }, {
      icon: 'regular mobile',
      text: 'Funciona en todos tus dispositivos'
    }]
  },
  render
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Responsive',
  render: args => ({
    components: {
      GBenefitsCard,
      GConfigProvider
    },
    setup() {
      const widths = [560, 469, 360, 300];
      return {
        args,
        widths
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-wrap gap-6 items-start">
          <figure v-for="width in widths" :key="width" class="m-0 flex flex-col gap-2" :style="{ width: width + 'px', '--gui-benefits-card-max-width': width + 'px' }">
            <g-benefits-card v-bind="args" />
            <figcaption class="text-2 text-secondary-txt">Contenedor de {{ width }}px<template v-if="width > 469"> · --gui-benefits-card-max-width: {{ width }}px</template></figcaption>
          </figure>
        </div>
        <p class="text-2 text-secondary-txt mt-8 mb-2">Arrastra la esquina inferior derecha para redimensionar</p>
        <div class="resize-x overflow-auto rounded-md border border-dashed border-grey-500 p-3" style="width: 469px; max-width: 100%; --gui-benefits-card-max-width: 100%">
          <g-benefits-card v-bind="args" />
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'La tarjeta ocupa el ancho de su contenedor hasta 469px y escala en proporción gracias a container queries; los textos tienen un piso de legibilidad. El ejemplo de 560px sube el tope con \`--gui-benefits-card-max-width\`. El último se puede redimensionar arrastrando la esquina.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};export{g as FiveBenefits,u as Primary,f as Responsive,m as Sii,pe as __namedExportsOrder,de as default};
