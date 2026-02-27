import{d as A,c as n,x as d,m as D,l as t,u as s,k as m,n as p,s as j,e as i,y as I,b as V}from"./vue.esm-bundler-C43JrhH2.js";import{F as B}from"./index-B1PxvDbZ.js";import{b as O,d as G,w as U}from"./install-CfJGiCvs.js";import{u as R}from"./index-D5bIuBCX.js";import{G as u}from"./ConfigProvider-Br84NlF7.js";import{a as H,b as N}from"./documentation-stories-DKOl0nGm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";import"./error-Cq9Fpw4b.js";const J=O({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:a=>a>=0&&a<=100},status:{type:String,default:"primary",values:["primary","success","error","warning"]},indeterminate:Boolean,duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:G(String),default:"round"},textInside:Boolean,width:{type:Number,default:126},showText:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},format:{type:G(Function),default:a=>`${a}%`}}),K=["aria-valuenow"],Q={viewBox:"0 0 100 100"},X=["d","stroke","stroke-linecap","stroke-width"],Y=["d","stroke","opacity","stroke-linecap","stroke-width"],Z={key:1},T=A({name:"Progress",__name:"progress",props:J,setup(a){const b={primary:"--color-progress-primary",success:"--color-progress-success",error:"--color-progress-error",warning:"--color-progress-warning"},r=a,o=R("progress"),F=n(()=>{const e={width:`${r.percentage}%`,animationDuration:`${r.duration}s`},c=b[r.status]||b.primary;return e.backgroundColor=`var(${c})`,e}),w=n(()=>(r.strokeWidth/r.width*100).toFixed(1)),E=n(()=>["circle","dashboard"].includes(r.type)?Number.parseInt(`${50-Number.parseFloat(w.value)/2}`,10):0),x=n(()=>{const e=E.value,c=r.type==="dashboard";return`
            M 50 50
            m 0 ${c?"":"-"}${e}
            a ${e} ${e} 0 1 1 0 ${c?"-":""}${e*2}
            a ${e} ${e} 0 1 1 0 ${c?"":"-"}${e*2}
            `}),g=n(()=>2*Math.PI*E.value),P=n(()=>r.type==="dashboard"?.75:1),C=n(()=>`${-1*g.value*(1-P.value)/2}px`),L=n(()=>({strokeDasharray:`${g.value*P.value}px, ${g.value}px`,strokeDashoffset:C.value})),M=n(()=>({strokeDasharray:`${g.value*P.value*(r.percentage/100)}px, ${g.value}px`,strokeDashoffset:C.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),q=n(()=>{let e;return e=`var(${b[r.status]||b.primary})`,e}),z=n(()=>r.status==="warning"?"solid exclamation-circle":r.type==="line"?r.status==="success"?"regular check-circle":"regular circle-xmark":r.status==="success"?"regular check":"regular times"),W=n(()=>r.type==="line"?12+r.strokeWidth*.4:r.width*.111111+2),S=n(()=>r.format(r.percentage));return(e,c)=>(i(),d("div",{class:t([s(o).b(),s(o).m(e.type),s(o).is(e.status),{[s(o).m("without-text")]:!e.showText,[s(o).m("text-inside")]:e.textInside}]),id:"MAIN-DIV",role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[e.type==="line"?(i(),d("div",{key:0,class:t(s(o).b("bar"))},[m("div",{class:t(s(o).be("bar","outer")),style:p({height:`${e.strokeWidth}px`})},[m("div",{class:t([s(o).be("bar","inner"),{[s(o).bem("bar","inner","indeterminate")]:e.indeterminate}]),style:p(F.value)},[(e.showText||e.$slots.default)&&e.textInside?(i(),d("div",{key:0,class:t(s(o).be("bar","innerText"))},[j(e.$slots,"default",{percentage:e.percentage},()=>[m("span",null,I(S.value),1)])],2)):D("",!0)],6)],6)],2)):(i(),d("div",{key:1,class:t(s(o).b("circle")),style:p({height:`${e.width}px`,width:`${e.width}px`})},[(i(),d("svg",Q,[m("path",{class:t(s(o).be("circle","track")),d:x.value,stroke:`var(${s(o).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":e.strokeLinecap,"stroke-width":w.value,fill:"none",style:p(L.value)},null,14,X),m("path",{class:t(s(o).be("circle","path")),d:x.value,stroke:q.value,fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":w.value,style:p(M.value)},null,14,Y)]))],6)),(e.showText||e.$slots.default)&&!e.textInside?(i(),d("div",{key:2,class:t(s(o).e("text")),style:p({fontSize:`${W.value}px`})},[j(e.$slots,"default",{percentage:e.percentage},()=>[e.loading?(i(),V(s(B),{key:0,name:"regular spinner",spin:""})):!e.status||e.status==="primary"?(i(),d("span",Z,I(S.value),1)):(i(),V(s(B),{key:2,name:z.value},null,8,["name"]))])],6)):D("",!0)],10,K))}});T.__docgenInfo={name:"Progress",exportName:"default",displayName:"progress",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"percentage",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/progress/src/progress.vue"]};const l=U(T),_="0.2.0",$={"@flash-global66/g-icon-font":"^0.5.8","element-plus":"^2.9.7",vue:"^3.2.0"},le={title:"Data/Progress",component:l,parameters:{docs:{description:{component:`
El componente Progress permite mostrar una interfaz clara e intuitiva al usuario, para indicar el estado de ciertas operaciones asíncronas.

> Versión actual: ${_}

## Características

El componente consta de una barra de progreso de operaciones asíncronas (por ejemplo, descarga de archivo a traves de WebSocket), pudiendo controlar tanto el formato del componente (lineal o circular) como el porcentaje de avance y el estado de la operación (en progreso, exito, error o aviso).

No requiere de ninguna prop de caracter obligatorio, pero esto derivará en una barra de progreso gris al 0%.

- Tres tipos de componente: \`line\` | \`circle\` | \`dashboard\`.
- Gestión de distintos estados, gestionando colores e iconos: \`primary\` | \`success\` | \`warning\` | \`error\`.
- \`percentage\`: gestiona el porcentaje de barra completado o la longitud de la barra de carga con la prop \`indeterminate\` activa.
- \`loading\`: muestra el icono de carga en lugar del porcentaje o los iconos del estado.
- \`indeterminate\`: muestra una barra con progreso indeterminado.

Los iconos del componente se utilizan directamente con \`GIconFont\`, por lo que se agrega como dependencia.

## Instalación

\`\`\`bash
yarn add @flash-global66/g-progress
\`\`\`

## Importación del componente

\`\`\`typescript
# importar donde se va a utilizar
import { GProgress } from '@flash-global66/g-progress'

# recomendado importar en los estilos globales
@use "@flash-global66/g-progress/src/progress.styles.scss" as *;

# requiere tener definidas los keyframes y animations en el tema de tailwind
theme.keyframes: {
    "ripple-expand": {
      from: { transform: "scale(0)", opacity: "1" },
      to: { transform: "scale(1.5)", opacity: "0" },
    },
    "ripple-contract": {
      from: { transform: "scale(1)", opacity: "1" },
      to: { transform: "scale(0)", opacity: "0" },
    },
    progress: {
      "0%": { backgroundPosition: "0 0" },
      "100%": { backgroundPosition: "32px 0" },
    },
    indeterminate: {
      "0%": { left: "-100%" },
      "100%": { left: "100%" },
    },
    "striped-flow": {
      "0%": { backgroundPosition: "-100%" },
      "100%": { backgroundPosition: "100%" },
    },
},

theme.animation: {
    "ripple-expand": "ripple-expand 0.5s ease-out",
    "ripple-contract": "ripple-contract 0.5s ease-out",
    progress: "progress 1s linear infinite",
    "progress-indeterminate": "indeterminate 3s infinite",
    "progress-striped-flow": "striped-flow 3s linear infinite",
},
\`\`\`

## Dependencias

Este componente requiere:

${H($)}

\`\`\`bash
# Dependencias global66
yarn add ${N($)}

# Dependencias externas
yarn add ${N($,!0)}
\`\`\`

## Uso básico

\`\`\`html
<script setup lang="ts">
import { GProgress } from '@flash-global66/g-progress'

const reactivePercentage = ref<number>(0)
const loading = ref<boolean>(true)
<\/script>

<template>
<!--  Barra de progreso por defecto -->
<!--  Muestra una barra lineal, determinada y con porcentaje de avance -->
<g-progress
:percentage="reactivePercentage"
/>

<!--  Barra de progreso circular con porcentaje determinado y estado warning -->
<!--  Muestra una barra circular, determinada y con icono de warning -->
<g-progress
type="circle"
status="warning"
:percentage="reactivePercentage"
/>

<!--  Barra de progreso lineal con estado success -->
<!--  Muestra una barra lineal, determinada y con icono de success -->
<g-progress
status="success"
:percentage="reactivePercentage"
/>

<!--  Barra de progreso circular con progreso indeterminado y carga -->
<!--  Muestra una barra circular, indeterminada y con icono de carga -->
  <g-progress
    type="circle"
    status="primary"
    loading="true"
    indeterminate="true"
  />
</template>
\`\`\`

`}}},argTypes:{percentage:{name:"percentage",description:"Porcentaje completado o largo de barra completada con la propiedad indeterminate. Siempre debe estar, a menos que se quiera mostrar la barra vacía.",control:{type:"range",min:0,max:100},table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"0"}}},type:{description:"Tipo de barra de progreso.",control:"select",options:["line","circle","dashboard"],table:{category:"Estado y Control",type:{summary:"string"},defaultValue:{summary:"line"}}},status:{description:"Estado actual de la barra de progreso.",control:"select",options:["primary","success","warning","error"],table:{category:"Estado y Control",type:{summary:"string"},defaultValue:{summary:"primary"}}},loading:{name:"loading",description:"Indica si debe mostrarse la carga.",control:"boolean",table:{category:"Estado y Control",type:{summary:"boolean"},defaultValue:{summary:!1}}},indeterminate:{name:"indeterminate",description:"Establece el progreso como indeterminado. Funciona solo para la barra de tipo 'line'",control:"boolean",table:{category:"Estado y Control",type:{summary:"boolean"},defaultValue:{summary:!1}}},format:{description:"Formato de texto personalizado.",control:"string",table:{category:"Estado y Control",type:{summary:"Function (percentage: number) => string"},defaultValue:{summary:null}}},"show-text":{name:"show-text",description:"Mostrar el porcentaje",control:"boolean",table:{category:"Estado y Control",type:{summary:"boolean"},defaultValue:{summary:!0}}},"stroke-width":{name:"stroke-width",description:"Ancho de la barra de progreso.",control:"number",table:{category:"Estilo",type:{summary:"number"},defaultValue:{summary:6}}},"text-inside":{name:"text-inside",description:"Colocar el porcentaje dentro de la barra de progreso (solo para type='line').",control:"boolean",table:{category:"Estilo",type:{summary:"boolean"},defaultValue:{summary:"false"}}},"stroke-linecap":{description:"Terminacion del cierre del estilo circulo/dashboard.",control:"select",options:["butt","round","square"],table:{category:"Estilo",type:{summary:"string"},defaultValue:{summary:"round"}}},duration:{name:"duration",description:"Controla la duracion de la animación del efecto indeterminado o progreso con rayas.",control:"number",table:{category:"Estilo",type:{summary:"number"},defaultValue:{summary:"3"}}},width:{name:"width",description:"Ancho del canvas que contiene la barra de progreso circular",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"126"}}}},args:{percentage:75,type:"line","stroke-width":6}},y={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico de barra de progreso lineal."}}},render:a=>({components:{GProgress:l,GConfigProvider:u},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-progress class="p-md" v-bind="args" />
      </g-config-provider>
    `})},v={name:"Diferentes estados",parameters:{docs:{description:{story:"Ejemplo básico de barra de progreso circular."}}},render:a=>({components:{GProgress:l,GConfigProvider:u},setup(){return{args:a}},template:`
      <g-config-provider>
        <p class="pl-md">Primary</p>
        <g-progress class="p-md" v-bind="args" />
        <p class="pl-md">Warning</p>
        <g-progress class="p-md" v-bind="args" status="warning" />
        <p class="pl-md">Success</p>
        <g-progress class="p-md" v-bind="args" status="success" percentage="100" />
        <p class="pl-md">Error</p>
        <g-progress class="p-md" v-bind="args" status="error" percentage="100" />
      </g-config-provider>
    `})},f={name:"Diferentes tipos",parameters:{docs:{description:{story:"Ejemplo básico de barra de progreso circular."}}},render:a=>({components:{GProgress:l,GConfigProvider:u},setup(){return{args:a}},template:`
      <g-config-provider>
          <h3 class="my-md">Line</h3>
          <div>
            <g-progress class="mb-md" v-bind="args" />
            <g-progress class="mb-md" v-bind="args" status="warning" />
            <g-progress class="mb-md" v-bind="args" status="success" percentage="100" />
            <g-progress class="mb-md" v-bind="args" status="error" percentage="100" />
          </div>
          <hr />
          <h3 class="my-md">Circle</h3>
          <div class="flex gap-md">
            <g-progress class="mb-md" v-bind="args" type="circle" />
            <g-progress class="mb-md" v-bind="args" type="circle" status="warning" />
            <g-progress class="mb-md" v-bind="args" type="circle" status="success" percentage="100" />
            <g-progress class="mb-md" v-bind="args" type="circle" status="error" percentage="100" />
          </div>
          <hr />
          <h3 class="my-md">Dashboard</h3>
          <div class="flex gap-md">
            <g-progress class="mb-md" v-bind="args" type="dashboard" />
            <g-progress class="mb-md" v-bind="args" type="dashboard" status="warning" />
            <g-progress class="mb-md" v-bind="args" type="dashboard" status="success" percentage="100" />
            <g-progress class="mb-md" v-bind="args" type="dashboard" status="error" percentage="100" />
          </div>
      </g-config-provider>
    `})},h={name:"Progreso indeterminado",parameters:{docs:{description:{story:"Ejemplo básico de barra de progreso con porcentaje indeterminado."}}},render:a=>({components:{GProgress:l,GConfigProvider:u},setup(){return{args:a}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-md">
          <g-progress indeterminate percentage="25" />
          <g-progress indeterminate status="warning" percentage="50" />
          <g-progress indeterminate status="success" percentage="75" />
          <g-progress indeterminate status="error" percentage="100" />
        </div>
      </g-config-provider>
    `})},k={name:"Progreso en carga",parameters:{docs:{description:{story:"Ejemplo básico de uso de barra de progreso con icono de loader."}}},render:a=>({components:{GProgress:l,GConfigProvider:u},setup(){return{args:a}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-md">
          <g-progress percentage="50" indeterminate loading />
        </div>
      </g-config-provider>
    `})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Básico",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo básico de barra de progreso lineal."
      }
    }
  },
  render: args => ({
    components: {
      GProgress,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-progress class="p-md" v-bind="args" />
      </g-config-provider>
    \`
  })
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Diferentes estados",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo básico de barra de progreso circular."
      }
    }
  },
  render: args => ({
    components: {
      GProgress,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <p class="pl-md">Primary</p>
        <g-progress class="p-md" v-bind="args" />
        <p class="pl-md">Warning</p>
        <g-progress class="p-md" v-bind="args" status="warning" />
        <p class="pl-md">Success</p>
        <g-progress class="p-md" v-bind="args" status="success" percentage="100" />
        <p class="pl-md">Error</p>
        <g-progress class="p-md" v-bind="args" status="error" percentage="100" />
      </g-config-provider>
    \`
  })
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Diferentes tipos",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo básico de barra de progreso circular."
      }
    }
  },
  render: args => ({
    components: {
      GProgress,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
          <h3 class="my-md">Line</h3>
          <div>
            <g-progress class="mb-md" v-bind="args" />
            <g-progress class="mb-md" v-bind="args" status="warning" />
            <g-progress class="mb-md" v-bind="args" status="success" percentage="100" />
            <g-progress class="mb-md" v-bind="args" status="error" percentage="100" />
          </div>
          <hr />
          <h3 class="my-md">Circle</h3>
          <div class="flex gap-md">
            <g-progress class="mb-md" v-bind="args" type="circle" />
            <g-progress class="mb-md" v-bind="args" type="circle" status="warning" />
            <g-progress class="mb-md" v-bind="args" type="circle" status="success" percentage="100" />
            <g-progress class="mb-md" v-bind="args" type="circle" status="error" percentage="100" />
          </div>
          <hr />
          <h3 class="my-md">Dashboard</h3>
          <div class="flex gap-md">
            <g-progress class="mb-md" v-bind="args" type="dashboard" />
            <g-progress class="mb-md" v-bind="args" type="dashboard" status="warning" />
            <g-progress class="mb-md" v-bind="args" type="dashboard" status="success" percentage="100" />
            <g-progress class="mb-md" v-bind="args" type="dashboard" status="error" percentage="100" />
          </div>
      </g-config-provider>
    \`
  })
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Progreso indeterminado",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo básico de barra de progreso con porcentaje indeterminado."
      }
    }
  },
  render: args => ({
    components: {
      GProgress,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-md">
          <g-progress indeterminate percentage="25" />
          <g-progress indeterminate status="warning" percentage="50" />
          <g-progress indeterminate status="success" percentage="75" />
          <g-progress indeterminate status="error" percentage="100" />
        </div>
      </g-config-provider>
    \`
  })
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Progreso en carga",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo básico de uso de barra de progreso con icono de loader."
      }
    }
  },
  render: args => ({
    components: {
      GProgress,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-md">
          <g-progress percentage="50" indeterminate loading />
        </div>
      </g-config-provider>
    \`
  })
}`,...k.parameters?.docs?.source}}};const ge=["Basic","States","Types","Ideterminate","Loading"];export{y as Basic,h as Ideterminate,k as Loading,v as States,f as Types,ge as __namedExportsOrder,le as default};
