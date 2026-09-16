import{V as j,c as q,d as z,t as d,j as p,a as L,l as B,u as e,e as D,k as s,M as F,x as y,F as N,y as P,b as o,q as _,z as G,f as V}from"./vue.esm-bundler-C6DRpX4R.js";import{R as A}from"./index-DEGGxn4j.js";import{b as R,d as C}from"./props.util-DQIcYPkU.js";import{u as O}from"./useId-BGX2ZA7H.js";import"./useEmptyValues-8bO_IQ4-.js";import{u as $}from"./useNamespace-D200ZTkz.js";import{w as M}from"./install.util-cBz1HN_T.js";import{G as x}from"./ConfigProvider-CHVLgL_2.js";import{a as U,b as H}from"./documentation-stories-0qKiiCdD.js";import"./error.util-CtUs3PUB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-fKX7T4ju.js";const I=[1,2,3,4,5,6],J=2,K=R({title:{type:String,default:""},description:{type:String,default:""},benefits:{type:C(Array),default:()=>[]},ariaLabel:{type:String,default:""},headingLevel:{type:C(Number),values:I,default:J}});function Q(a){const r=$("benefits-card"),t=j(),l=O(),h=q(()=>`h${a.headingLevel}`),n=()=>!!(a.title||t.title);return{ns:r,headingTag:h,titleId:l,hasTitle:n,labelledBy:()=>n()?l.value:void 0,label:()=>n()?void 0:a.ariaLabel||void 0}}const W=["aria-labelledby","aria-label"],k=z({name:"GBenefitsCard",__name:"BenefitsCard",props:K,setup(a){const r=a,{ns:t,headingTag:l,titleId:h,hasTitle:n,labelledBy:v,label:w}=Q(r);return(i,Z)=>(o(),d("section",{class:s(e(t).b()),"aria-labelledby":e(v)(),"aria-label":e(w)()},[p("div",{class:s(e(t).e("body"))},[e(n)()?(o(),L(F(e(l)),{key:0,id:e(h),class:s(e(t).e("title"))},{default:D(()=>[_(i.$slots,"title",{},()=>[G(y(i.title),1)])]),_:3},8,["id","class"])):B("",!0),i.description?(o(),d("p",{key:1,class:s(e(t).e("description"))},y(i.description),3)):B("",!0),p("ul",{class:s(e(t).e("benefits"))},[(o(!0),d(N,null,P(i.benefits,c=>(o(),d("li",{key:`${c.icon} ${c.text}`,class:s(e(t).e("benefit"))},[p("span",{class:s(e(t).e("benefit-icon")),"aria-hidden":"true"},[V(e(A),{name:c.icon},null,8,["name"])],2),p("span",{class:s(e(t).e("benefit-text"))},y(c.text),3)],2))),128))],2)],2)],10,W))}});k.__docgenInfo={name:"GBenefitsCard",exportName:"default",displayName:"BenefitsCard",description:"",tags:{},slots:[{name:"title"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/benefits-card/src/BenefitsCard.vue"]};const b=M(k),X="0.1.0",S={vue:"^3.2.0"},T=[{icon:"light key-skeleton",text:"Ingresa en 2 segundos, sin recordar claves"},{icon:"light fingerprint",text:"Tu huella o Face ID nunca sale de este dispositivo"},{icon:"regular shield-check",text:"Protege el acceso a tu empresa"}],Y=[{icon:"regular landmark",text:"Productos que se adaptan a tu operación real"},{icon:"regular money-bill-alt",text:"Acceso anticipado a nuevos productos y novedades"},{icon:"regular check",text:"Menos fricciones, más agilidad operativa"}],ue={title:"Basic/Benefits Card",component:b,parameters:{docs:{description:{component:`
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

${U(S)}

\`\`\`bash
yarn add ${H(S,!0)}
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
}`},defaultValue:{summary:"[]"}}},ariaLabel:{description:"Nombre accesible de la región. Solo se usa cuando no hay título",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"''"}}},headingLevel:{description:"Nivel del encabezado usado para el título",control:"select",options:I,table:{type:{summary:"1 | 2 | 3 | 4 | 5 | 6"},defaultValue:{summary:"2"}}}},args:{title:"Entra en segundos, sin escribir contraseñas",description:"Registra tu huella o Face ID y accede a Global66 Business con un solo gesto.",benefits:T,headingLevel:2}},E=a=>({components:{GBenefitsCard:b,GConfigProvider:x},setup(){return{args:a}},template:`
    <g-config-provider>
      <g-benefits-card v-bind="args" />
    </g-config-provider>
  `}),u={name:"Uso básico",render:E},m={name:"Título con formato (SII)",args:{title:"",description:"Optimiza tus finanzas con herramientas que evolucionan al ritmo de tu negocio",benefits:Y},render:a=>({components:{GBenefitsCard:b,GConfigProvider:x},setup(){return{args:a}},template:`
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
`,language:"html"}}}},g={name:"Cinco beneficios",args:{benefits:[...T,{icon:"regular clock",text:"Sin esperar códigos por SMS"},{icon:"regular mobile",text:"Funciona en todos tus dispositivos"}]},render:E},f={name:"Responsive",render:a=>({components:{GBenefitsCard:b,GConfigProvider:x},setup(){return{args:a,widths:[560,469,360,300]}},template:`
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
    `}),parameters:{docs:{description:{story:"La tarjeta ocupa el ancho de su contenedor hasta 469px y escala en proporción gracias a container queries; los textos tienen un piso de legibilidad. El ejemplo de 560px sube el tope con `--gui-benefits-card-max-width`. El último se puede redimensionar arrastrando la esquina."}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const me=["Primary","Sii","FiveBenefits","Responsive"];export{g as FiveBenefits,u as Primary,f as Responsive,m as Sii,me as __namedExportsOrder,ue as default};
