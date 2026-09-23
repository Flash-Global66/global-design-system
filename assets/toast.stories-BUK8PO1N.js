import{l as ee,p as A,d as oe,r as te,c as b,t as se,o as w,a as U,w as ne,e as W,v as $,f as x,b as q,u as i,g,i as ae,y as I,z as re,R as ie,j as R,n as Q,T as ce,L as F,aC as H,a1 as le,ay as Z}from"./iframe-Dct5CHxr.js";import{u as pe}from"./index-DWhPhD7W.js";import{R as X}from"./index-1T7U7QlS.js";import{a as de,u as ue,i as me,g as _}from"./useEmptyValues-BnYvcW4O.js";import{u as fe}from"./index-pMiYc9r3.js";import{E as j}from"./event.constant-LtAI3-H4.js";import{G as m}from"./ConfigProvider-7dg58IlU.js";import{a as ge}from"./index-CZoNQBHQ.js";import{w as ye,b as he}from"./install.util-cBz1HN_T.js";import{G as y}from"./index-BeqF1NXI.js";import{a as we,b as ve}from"./documentation-stories-DmJzCMmf.js";import"./preload-helper-Dch09mLN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useId-MLHLvdkG.js";import"./index-GU5Cqqg3.js";const J=["success","info","warning","error"],Te=["sm","md"],be=ee({customClass:{type:String,default:""},dangerouslyUseHTMLString:Boolean,duration:{type:Number,default:5e3},id:{type:String,default:""},message:{type:A([String,Object,Function]),default:""},offset:{type:Number,default:0},onClick:{type:A(Function),default:()=>{}},onClose:{type:A(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},showProgress:{type:Boolean,default:!0},size:{type:String,values:Te,default:"md"},type:{type:String,values:J,required:!0},zIndex:Number}),xe={destroy:()=>!0},Ge=["id"],Ce={key:0},Pe=["innerHTML"],D=oe({name:"GToast",__name:"toast",props:be,emits:xe,setup(e,{expose:s}){const t=e,{nextZIndex:c,currentZIndex:d}=de(),a=ue("toast"),r=te(!1);let p;const u={success:"solid check-circle",info:"solid info-circle",warning:"solid exclamation-triangle",error:"solid times-circle"},l=b(()=>u[t.type]),f=b(()=>t.position.endsWith("right")?"right":"left"),h=b(()=>t.position.startsWith("top")?"top":"bottom"),z=b(()=>({[h.value]:`${t.offset}px`,zIndex:t.zIndex??d.value}));function L(){if(t.duration>0){const{stop:n}=fe(()=>{r.value&&v()},t.duration);p=n}}function O(){p?.()}function v(){r.value=!1}function Y({code:n}){n===j.delete||n===j.backspace?O():n===j.esc?r.value&&v():L()}return se(()=>{L(),c(),r.value=!0}),pe(document,"keydown",Y),s({visible:r,close:v}),(n,T)=>(w(),U(ce,{name:i(a).b("fade"),onBeforeLeave:n.onClose,onAfterLeave:T[1]||(T[1]=V=>n.$emit("destroy"))},{default:ne(()=>[W(x("div",{id:n.id,class:g([i(a).b(),i(a).m(t.type),i(a).m(t.size),n.customClass,f.value]),style:Q(z.value),role:"alert",onMouseenter:O,onMouseleave:L,onClick:T[0]||(T[0]=(...V)=>n.onClick&&n.onClick(...V))},[q(i(X),{class:g([i(a).e("icon"),i(a).m(t.type)]),name:l.value},null,8,["class","name"]),x("div",{class:g(i(a).e("group"))},[W(x("div",{class:g(i(a).e("content"))},[ae(n.$slots,"default",{},()=>[n.dangerouslyUseHTMLString?(w(),I("p",{key:1,innerHTML:n.message},null,8,Pe)):(w(),I("p",Ce,re(n.message),1))])],2),[[$,n.message]])],2),n.showClose?(w(),U(i(X),{key:0,class:g(i(a).e("closeBtn")),onClick:ie(v,["stop"]),name:"solid times"},null,8,["class"])):R("",!0),n.showProgress&&n.duration>0?(w(),I("div",{key:1,class:g(i(a).e("progress"))},[x("div",{class:g([i(a).e("progress-bar"),i(a).m(t.type)]),style:Q({animationDuration:`${n.duration}ms`})},null,6)],2)):R("",!0)],46,Ge),[[$,r.value]])]),_:3},8,["name","onBeforeLeave"]))}}),E={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},N=16;let Be=1;const o=function(e={},s){if(!me)return{close:()=>{}};(F(e)||H(e))&&(e={message:e});const t=e.position||"top-right";let c=e.offset||0;E[t].forEach(({vm:h})=>{c+=(h.el?.offsetHeight||0)+N}),c+=N;const d=`toast_${Be++}`,a=e.onClose,r={...e,offset:c,id:d,onClose:()=>{Me(d,t,a)}};let p=document.body;_(e.appendTo)?p=e.appendTo:F(e.appendTo)&&(p=document.querySelector(e.appendTo)),_(p)||(p=document.body);const u=document.createElement("div"),l=q(D,r,le(r.message)?r.message:H(r.message)?()=>r.message:null),f=q(m,{},{default:()=>l});return f.appContext=ge(s)?o._context:s,f.props.onDestroy=()=>{Z(null,u)},Z(f,u),E[t].push({vm:l}),p.appendChild(u.firstElementChild),{close:()=>{l.component.exposed.visible.value=!1}}};J.forEach(e=>{o[e]=(s={},t)=>((F(s)||H(s))&&(s={message:s}),o({...s,type:e},t))});function Me(e,s,t){const c=E[s],d=c.findIndex(({vm:l})=>l.component?.props.id===e);if(d===-1)return;const{vm:a}=c[d];if(!a)return;t?.(a);const r=a.el.offsetHeight,p=s.split("-")[0];c.splice(d,1);const u=c.length;if(!(u<1))for(let l=d;l<u;l++){const{el:f,component:h}=c[l].vm,z=Number.parseInt(f.style[p],10)-r-N;h.props.offset=z}}function Se(){for(const e of Object.values(E))e.forEach(({vm:s})=>{s.component.exposed.visible.value=!1})}o.closeAll=Se;o._context=null;const ke=ye(D,{Toast:D});he(o,"$toastify");const Ee="1.1.14",K={"@vueuse/core":"^12.4.0",vue:"^3.2.0"},Re={title:"Feedback/Toast",component:ke,parameters:{docs:{description:{component:`
El componente Toast muestra un mensaje de notificación en una esquina de la página.

El sistema ofrece una API dual: una función principal \`toast({ type: 'success' })\` para máxima configuración y métodos de atajo \`toast.success()\`.

> Versión actual: ${Ee}

## Características
- 4 tipos predefinidos con iconos automáticos (success, info, warning, error)
- API dual para flexibilidad de uso
- Posicionamiento en 4 esquinas de pantalla
- Duración configurable y persistencia
- Soporte para contenido HTML
- Sistema de offset personalizable
- Cierre manual o automático

### Instalación

\`\`\`bash
yarn add @flash-global66/g-toast
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { toast } from '@flash-global66/g-toast'

# para usar como plugin global en Vue
import { GToastPlugin } from '@flash-global66/g-toast'
app.use(GToastPlugin)

# recomendado importar en los estilos globales
import '@flash-global66/g-toast/toast.styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${we(K)}

> Revisar la documentación de cada dependencia para mas información.

\`\`\`bash
# Dependencias global66
${ve(K)}
\`\`\`

### Ejemplo de uso

\`\`\`typescript
<script setup lang="ts">
import { toast } from '@flash-global66/g-toast';

const showToast = () => {
  toast({
    type: 'success',
    message: 'Operación completada exitosamente'
  });
};
<\/script>

<template>
  <g-button @click="showToast">
    Mostrar Toast
  </g-button>
</template>
\`\`\`

## Ejemplos de uso

\`\`\`javascript
// Ejemplo básico
toast({
  type: 'success',
  message: 'Operación completada exitosamente'
})

// Ejemplo completo con todas las opciones
toast({
  type: 'success',
  message: 'Tu mensaje aquí',
  size: 'md',
  duration: 5000,
  position: 'top-right',
  showClose: true,
  showProgress: true,
  offset: 0
})

// Métodos de atajo
toast.success('Guardado exitosamente')
toast.error('Error al guardar')
toast.warning('Revisa los datos')
toast.info('Información importante')
\`\`\`

### Iconos por Tipo
- **success**: check-circle
- **info**: info-circle  
- **warning**: exclamation-triangle
- **error**: times-circle
        `}}},argTypes:{message:{description:"Contenido del mensaje del toast.",control:"text",table:{category:"Props",type:{summary:"string | VNode | (() => VNode)"}}},type:{description:"Tipo de notificación (requerido). Determina el icono y estilo visual.",control:"select",options:["success","info","warning","error"],table:{category:"Props",type:{summary:"ToastType"}}},size:{description:"Tamaño del toast. Afecta la altura, texto e iconos.",control:"select",options:["sm","md"],defaultValue:"md",table:{category:"Props",type:{summary:"ToastSize"},defaultValue:{summary:"md"}}},duration:{description:"Duración en milisegundos antes del cierre automático. Si es 0, no se cierra automáticamente.",control:"number",defaultValue:5e3,table:{category:"Props",type:{summary:"number"},defaultValue:{summary:"5000"}}},position:{description:"Posición del toast en la pantalla.",control:"select",options:["top-right","top-left","bottom-right","bottom-left"],defaultValue:"top-right",table:{category:"Props",type:{summary:"string"},defaultValue:{summary:"top-right"}}},showClose:{description:"Si el toast puede cerrarse manualmente con el botón X.",control:"boolean",defaultValue:!0,table:{category:"Props",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showProgress:{description:"Si debe mostrarse la barra de progreso indicando el tiempo restante.",control:"boolean",defaultValue:!0,table:{category:"Props",type:{summary:"boolean"},defaultValue:{summary:"true"}}},offset:{description:"Offset en píxeles desde el borde de la pantalla.",control:"number",defaultValue:0,table:{category:"Props",type:{summary:"number"},defaultValue:{summary:"0"}}},dangerouslyUseHTMLString:{description:"Si el mensaje debe tratarse como HTML (usar con precaución).",control:"boolean",defaultValue:!1,table:{category:"Props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},customClass:{description:"Clase CSS personalizada para el toast.",control:"text",table:{category:"Props",type:{summary:"string"},defaultValue:{summary:'""'}}},zIndex:{description:"z-index inicial del toast.",control:"number",table:{category:"Props",type:{summary:"number"}}},onClick:{description:"Se emite cuando se hace clic en el toast.",action:"clicked",table:{category:"Events",type:{summary:"() => void"}}},onClose:{description:"Se emite cuando el toast se cierra (antes de la animación).",action:"closed",table:{category:"Events",type:{summary:"() => void"}}},destroy:{description:"Se emite cuando el toast se destruye completamente (después de la animación).",action:"destroyed",table:{category:"Events",type:{summary:"() => void"}}},default:{description:"Contenido personalizado del mensaje. Por defecto muestra el prop `message`.",control:!1,table:{category:"Slots",type:{summary:"VNode | string"}}},visible:{description:"Estado de visibilidad del toast (ref).",control:!1,table:{category:"Expose",type:{summary:"Ref<boolean>"}}},close:{description:"Método para cerrar el toast manualmente.",control:!1,table:{category:"Expose",type:{summary:"() => void"}}}},args:{message:"Operación completada exitosamente",type:"success",duration:5e3,position:"top-right",showClose:!0,showProgress:!0,size:"md",offset:0,dangerouslyUseHTMLString:!1}},G={name:"Uso Básico",parameters:{docs:{description:{story:"Usa los controles de abajo para experimentar con diferentes configuraciones del toast."},source:{code:`toast({
  type: 'success',
  message: 'Tu mensaje aquí',
  size: 'md',
  duration: 5000,
  position: 'top-right',
  showClose: true,
  showProgress: true,
  offset: 0
})`}}},render:e=>({components:{GButton:y,GConfigProvider:m},setup(){return{showToast:()=>{o({type:e.type,message:e.message,duration:e.duration,position:e.position,showClose:e.showClose,showProgress:e.showProgress,size:e.size,offset:e.offset,dangerouslyUseHTMLString:e.dangerouslyUseHTMLString})}}},template:`
      <GConfigProvider>
        <GButton @click="showToast">
          Mostrar Toast
        </GButton>
      </GConfigProvider>
    `})},C={name:"Dos Formas de Uso",parameters:{docs:{description:{story:`
El sistema toast ofrece dos formas principales de uso:

1. **Método Principal**: \`toast({ type: 'success', message: 'Mensaje' })\` - Para configuración completa
2. **Métodos de Atajo**: \`toast.success('Mensaje')\` - Para uso rápido

Ambas APIs son equivalentes en funcionalidad, pero los atajos son más convenientes para casos simples.
        `},source:{code:`// Método principal
toast({
  type: 'success',
  message: 'Mensaje de éxito',
  duration: 3000,
  position: 'top-right'
})

// Métodos de atajo
toast.success('Mensaje de éxito')
toast.info('Información')
toast.warning('Advertencia')
toast.error('Error')`}}},render:()=>({components:{GButton:y,GConfigProvider:m},setup(){return{showMainMethod:()=>{o({type:"success",message:'Método principal - toast({ type: "success" })',duration:3e3,position:"top-right"})},showShortcuts:()=>{o.success("Método de atajo - toast.success()"),setTimeout(()=>{o.info("toast.info() - Información")},500),setTimeout(()=>{o.warning("toast.warning() - Advertencia")},1e3),setTimeout(()=>{o.error("toast.error() - Error")},1500)}}},template:`
      <GConfigProvider>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <GButton @click="showMainMethod" type="primary">
            Método Principal
          </GButton>
          <GButton @click="showShortcuts" type="secondary">
            Métodos de Atajo
          </GButton>
        </div>
      </GConfigProvider>
    `})},P={name:"Tipos",parameters:{docs:{description:{story:"El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error. Los iconos se asignan automáticamente según el tipo."},source:{code:`toast({ type: 'success', message: 'Operación exitosa' })
toast({ type: 'info', message: 'Información importante' })
toast({ type: 'warning', message: 'Advertencia' })
toast({ type: 'error', message: 'Error en la operación' })`}}},render:()=>({components:{GButton:y,GConfigProvider:m},setup(){return{showSuccess:()=>{o.success("Operación completada exitosamente")},showInfo:()=>{o.info("Aquí tienes información útil")},showWarning:()=>{o.warning("Por favor revisa esto cuidadosamente")},showError:()=>{o.error("Algo salió mal")}}},template:`
      <GConfigProvider>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
          <GButton @click="showSuccess" type="success">
            Success Toast
          </GButton>
          <GButton @click="showInfo" type="info">
            Info Toast
          </GButton>
          <GButton @click="showWarning" type="warning">
            Warning Toast
          </GButton>
          <GButton @click="showError" type="error">
            Error Toast
          </GButton>
        </div>
      </GConfigProvider>
    `})},B={name:"Posiciones",parameters:{docs:{description:{story:"Los toasts pueden aparecer en cualquiera de las cuatro esquinas de la pantalla. La posición se mantiene consistente para múltiples toasts."},source:{code:`toast({ type: 'success', message: 'Superior derecha', position: 'top-right' })
toast({ type: 'info', message: 'Superior izquierda', position: 'top-left' })
toast({ type: 'warning', message: 'Inferior derecha', position: 'bottom-right' })
toast({ type: 'error', message: 'Inferior izquierda', position: 'bottom-left' })`}}},render:()=>({components:{GButton:y,GConfigProvider:m},setup(){return{positions:[{key:"top-left",label:"Arriba Izquierda"},{key:"top-right",label:"Arriba Derecha"},{key:"bottom-left",label:"Abajo Izquierda"},{key:"bottom-right",label:"Abajo Derecha"}],showToast:t=>{o({type:"info",message:`Toast desde ${t}`,position:t,duration:4e3})}}},template:`
      <GConfigProvider>
        <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <div style="display: flex; gap: 16px;">
            <GButton 
              @click="showToast('top-left')" 
              type="primary"
              style="flex: 1;"
            >
              Arriba Izquierda
            </GButton>
            <GButton 
              @click="showToast('top-right')" 
              type="primary"
              style="flex: 1;"
            >
              Arriba Derecha
            </GButton>
          </div>
          <div style="display: flex; gap: 16px;">
            <GButton 
              @click="showToast('bottom-left')" 
              type="primary"
              style="flex: 1;"
            >
              Abajo Izquierda
            </GButton>
            <GButton 
              @click="showToast('bottom-right')" 
              type="primary"
              style="flex: 1;"
            >
              Abajo Derecha
            </GButton>
          </div>
        </div>
      </GConfigProvider>
    `})},M={name:"Control de Duración",parameters:{docs:{description:{story:"Controla cuánto tiempo permanecen visibles los toasts. La duración de 0 hace que el toast permanezca hasta que el usuario lo cierre manualmente."},source:{code:`toast({ type: 'info', message: 'Rápido', duration: 2000 })
toast({ type: 'success', message: 'Normal', duration: 5000 })
toast({ type: 'warning', message: 'Largo', duration: 10000 })
toast({ type: 'error', message: 'Persistente', duration: 0 })`}}},render:()=>({components:{GButton:y,GConfigProvider:m},setup(){return{showQuick:()=>{o.success({message:"Toast rápido (2s)",duration:2e3})},showNormal:()=>{o.info("Toast normal (5s por defecto)")},showLong:()=>{o.warning({message:"Toast largo (10s)",duration:1e4})},showPersistent:()=>{o.error({message:"Toast persistente (cierre manual)",duration:0})}}},template:`
      <GConfigProvider>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <GButton @click="showQuick" type="success">
            Rápido (2s)
          </GButton>
          <GButton @click="showNormal" type="info">
            Normal (5s)
          </GButton>
          <GButton @click="showLong" type="warning">
            Largo (10s)
          </GButton>
          <GButton @click="showPersistent" type="error">
            Persistente (0)
          </GButton>
        </div>
      </GConfigProvider>
    `})},S={name:"Configuración Avanzada",parameters:{docs:{description:{story:"Opciones avanzadas: contenido HTML, offset personalizado y sin botón de cerrar."},source:{code:`// Contenido HTML
toast({
  type: 'info',
  message: '<strong>Texto</strong> con <em>formato</em>',
  dangerouslyUseHTMLString: true
})

// Offset personalizado
toast({
  type: 'success',
  message: 'Con offset',
  offset: 50
})

// Sin botón de cerrar
toast({
  type: 'warning',
  message: 'Sin botón X',
  showClose: false
})`}}},render:()=>({components:{GButton:y,GConfigProvider:m},setup(){return{showHTMLContent:()=>{o({type:"info",message:"<strong>Contenido HTML</strong> con <em>formato</em>",dangerouslyUseHTMLString:!0,duration:5e3})},showWithOffset:()=>{o({type:"success",message:"Toast con offset personalizado (50px)",offset:50,duration:4e3})},showNonClosable:()=>{o({type:"warning",message:"Toast sin botón de cerrar (solo auto-cierre)",showClose:!1,duration:6e3})}}},template:`
      <GConfigProvider>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <GButton @click="showHTMLContent" type="info">
            Contenido HTML
          </GButton>
          <GButton @click="showWithOffset" type="success">
            Offset Personalizado
          </GButton>
          <GButton @click="showNonClosable" type="warning">
            Sin botón de cerrar
          </GButton>
        </div>
      </GConfigProvider>
    `})},k={name:"Tamaños",parameters:{docs:{description:{story:"El componente tiene dos tamaños disponibles: sm (pequeño) y md (mediano)."},source:{code:`// Tamaño pequeño
toast({
  type: 'success',
  size: 'sm',
  message: 'Toast pequeño'
})

// Tamaño mediano (por defecto)
toast({
  type: 'info',
  size: 'md',
  message: 'Toast mediano'
})`}}},render:()=>({components:{GConfigProvider:m,GButton:y},setup(){return{showSmallToast:()=>{o({type:"success",size:"sm",message:"Toast pequeño",duration:4e3})},showMediumToast:()=>{o({type:"info",size:"md",message:"Toast mediano",duration:4e3})}}},template:`
      <GConfigProvider>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <GButton @click="showSmallToast" type="primary">
            Toast SM
          </GButton>
          <GButton @click="showMediumToast" type="primary">
            Toast MD
          </GButton>
        </div>
      </GConfigProvider>
    `})},Qe=["Playground","Primary","AllTypes","Positions","DurationControl","AdvancedUsage","Sizes"];G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Uso Básico',
  parameters: {
    docs: {
      description: {
        story: 'Usa los controles de abajo para experimentar con diferentes configuraciones del toast.'
      },
      source: {
        code: \`toast({
  type: 'success',
  message: 'Tu mensaje aquí',
  size: 'md',
  duration: 5000,
  position: 'top-right',
  showClose: true,
  showProgress: true,
  offset: 0
})\`
      }
    }
  },
  render: (args: any) => ({
    components: {
      GButton,
      GConfigProvider
    },
    setup() {
      const showToast = () => {
        toast({
          type: args.type,
          message: args.message,
          duration: args.duration,
          position: args.position,
          showClose: args.showClose,
          showProgress: args.showProgress,
          size: args.size,
          offset: args.offset,
          dangerouslyUseHTMLString: args.dangerouslyUseHTMLString
        });
      };
      return {
        showToast
      };
    },
    template: \`
      <GConfigProvider>
        <GButton @click="showToast">
          Mostrar Toast
        </GButton>
      </GConfigProvider>
    \`
  })
}`,...G.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Dos Formas de Uso',
  parameters: {
    docs: {
      description: {
        story: \`
El sistema toast ofrece dos formas principales de uso:

1. **Método Principal**: \\\`toast({ type: 'success', message: 'Mensaje' })\\\` - Para configuración completa
2. **Métodos de Atajo**: \\\`toast.success('Mensaje')\\\` - Para uso rápido

Ambas APIs son equivalentes en funcionalidad, pero los atajos son más convenientes para casos simples.
        \`
      },
      source: {
        code: \`// Método principal
toast({
  type: 'success',
  message: 'Mensaje de éxito',
  duration: 3000,
  position: 'top-right'
})

// Métodos de atajo
toast.success('Mensaje de éxito')
toast.info('Información')
toast.warning('Advertencia')
toast.error('Error')\`
      }
    }
  },
  render: () => ({
    components: {
      GButton,
      GConfigProvider
    },
    setup() {
      const showMainMethod = () => {
        toast({
          type: 'success',
          message: 'Método principal - toast({ type: "success" })',
          duration: 3000,
          position: 'top-right'
        });
      };
      const showShortcuts = () => {
        toast.success('Método de atajo - toast.success()');
        setTimeout(() => {
          toast.info('toast.info() - Información');
        }, 500);
        setTimeout(() => {
          toast.warning('toast.warning() - Advertencia');
        }, 1000);
        setTimeout(() => {
          toast.error('toast.error() - Error');
        }, 1500);
      };
      return {
        showMainMethod,
        showShortcuts
      };
    },
    template: \`
      <GConfigProvider>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <GButton @click="showMainMethod" type="primary">
            Método Principal
          </GButton>
          <GButton @click="showShortcuts" type="secondary">
            Métodos de Atajo
          </GButton>
        </div>
      </GConfigProvider>
    \`
  })
}`,...C.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Tipos',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error. Los iconos se asignan automáticamente según el tipo.'
      },
      source: {
        code: \`toast({ type: 'success', message: 'Operación exitosa' })
toast({ type: 'info', message: 'Información importante' })
toast({ type: 'warning', message: 'Advertencia' })
toast({ type: 'error', message: 'Error en la operación' })\`
      }
    }
  },
  render: () => ({
    components: {
      GButton,
      GConfigProvider
    },
    setup() {
      const showSuccess = () => {
        toast.success('Operación completada exitosamente');
      };
      const showInfo = () => {
        toast.info('Aquí tienes información útil');
      };
      const showWarning = () => {
        toast.warning('Por favor revisa esto cuidadosamente');
      };
      const showError = () => {
        toast.error('Algo salió mal');
      };
      return {
        showSuccess,
        showInfo,
        showWarning,
        showError
      };
    },
    template: \`
      <GConfigProvider>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
          <GButton @click="showSuccess" type="success">
            Success Toast
          </GButton>
          <GButton @click="showInfo" type="info">
            Info Toast
          </GButton>
          <GButton @click="showWarning" type="warning">
            Warning Toast
          </GButton>
          <GButton @click="showError" type="error">
            Error Toast
          </GButton>
        </div>
      </GConfigProvider>
    \`
  })
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Posiciones',
  parameters: {
    docs: {
      description: {
        story: 'Los toasts pueden aparecer en cualquiera de las cuatro esquinas de la pantalla. La posición se mantiene consistente para múltiples toasts.'
      },
      source: {
        code: \`toast({ type: 'success', message: 'Superior derecha', position: 'top-right' })
toast({ type: 'info', message: 'Superior izquierda', position: 'top-left' })
toast({ type: 'warning', message: 'Inferior derecha', position: 'bottom-right' })
toast({ type: 'error', message: 'Inferior izquierda', position: 'bottom-left' })\`
      }
    }
  },
  render: () => ({
    components: {
      GButton,
      GConfigProvider
    },
    setup() {
      const positions = [{
        key: 'top-left',
        label: 'Arriba Izquierda'
      }, {
        key: 'top-right',
        label: 'Arriba Derecha'
      }, {
        key: 'bottom-left',
        label: 'Abajo Izquierda'
      }, {
        key: 'bottom-right',
        label: 'Abajo Derecha'
      }] as const;
      const showToast = (position: (typeof positions)[number]['key']) => {
        toast({
          type: 'info',
          message: \`Toast desde \${position}\`,
          position,
          duration: 4000
        });
      };
      return {
        positions,
        showToast
      };
    },
    template: \`
      <GConfigProvider>
        <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <div style="display: flex; gap: 16px;">
            <GButton 
              @click="showToast('top-left')" 
              type="primary"
              style="flex: 1;"
            >
              Arriba Izquierda
            </GButton>
            <GButton 
              @click="showToast('top-right')" 
              type="primary"
              style="flex: 1;"
            >
              Arriba Derecha
            </GButton>
          </div>
          <div style="display: flex; gap: 16px;">
            <GButton 
              @click="showToast('bottom-left')" 
              type="primary"
              style="flex: 1;"
            >
              Abajo Izquierda
            </GButton>
            <GButton 
              @click="showToast('bottom-right')" 
              type="primary"
              style="flex: 1;"
            >
              Abajo Derecha
            </GButton>
          </div>
        </div>
      </GConfigProvider>
    \`
  })
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Control de Duración',
  parameters: {
    docs: {
      description: {
        story: 'Controla cuánto tiempo permanecen visibles los toasts. La duración de 0 hace que el toast permanezca hasta que el usuario lo cierre manualmente.'
      },
      source: {
        code: \`toast({ type: 'info', message: 'Rápido', duration: 2000 })
toast({ type: 'success', message: 'Normal', duration: 5000 })
toast({ type: 'warning', message: 'Largo', duration: 10000 })
toast({ type: 'error', message: 'Persistente', duration: 0 })\`
      }
    }
  },
  render: () => ({
    components: {
      GButton,
      GConfigProvider
    },
    setup() {
      const showQuick = () => {
        toast.success({
          message: 'Toast rápido (2s)',
          duration: 2000
        });
      };
      const showNormal = () => {
        toast.info('Toast normal (5s por defecto)');
      };
      const showLong = () => {
        toast.warning({
          message: 'Toast largo (10s)',
          duration: 10000
        });
      };
      const showPersistent = () => {
        toast.error({
          message: 'Toast persistente (cierre manual)',
          duration: 0
        });
      };
      return {
        showQuick,
        showNormal,
        showLong,
        showPersistent
      };
    },
    template: \`
      <GConfigProvider>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <GButton @click="showQuick" type="success">
            Rápido (2s)
          </GButton>
          <GButton @click="showNormal" type="info">
            Normal (5s)
          </GButton>
          <GButton @click="showLong" type="warning">
            Largo (10s)
          </GButton>
          <GButton @click="showPersistent" type="error">
            Persistente (0)
          </GButton>
        </div>
      </GConfigProvider>
    \`
  })
}`,...M.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Configuración Avanzada',
  parameters: {
    docs: {
      description: {
        story: 'Opciones avanzadas: contenido HTML, offset personalizado y sin botón de cerrar.'
      },
      source: {
        code: \`// Contenido HTML
toast({
  type: 'info',
  message: '<strong>Texto</strong> con <em>formato</em>',
  dangerouslyUseHTMLString: true
})

// Offset personalizado
toast({
  type: 'success',
  message: 'Con offset',
  offset: 50
})

// Sin botón de cerrar
toast({
  type: 'warning',
  message: 'Sin botón X',
  showClose: false
})\`
      }
    }
  },
  render: () => ({
    components: {
      GButton,
      GConfigProvider
    },
    setup() {
      const showHTMLContent = () => {
        toast({
          type: 'info',
          message: '<strong>Contenido HTML</strong> con <em>formato</em>',
          dangerouslyUseHTMLString: true,
          duration: 5000
        });
      };
      const showWithOffset = () => {
        toast({
          type: 'success',
          message: 'Toast con offset personalizado (50px)',
          offset: 50,
          duration: 4000
        });
      };
      const showNonClosable = () => {
        toast({
          type: 'warning',
          message: 'Toast sin botón de cerrar (solo auto-cierre)',
          showClose: false,
          duration: 6000
        });
      };
      return {
        showHTMLContent,
        showWithOffset,
        showNonClosable
      };
    },
    template: \`
      <GConfigProvider>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <GButton @click="showHTMLContent" type="info">
            Contenido HTML
          </GButton>
          <GButton @click="showWithOffset" type="success">
            Offset Personalizado
          </GButton>
          <GButton @click="showNonClosable" type="warning">
            Sin botón de cerrar
          </GButton>
        </div>
      </GConfigProvider>
    \`
  })
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Tamaños',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene dos tamaños disponibles: sm (pequeño) y md (mediano).'
      },
      source: {
        code: \`// Tamaño pequeño
toast({
  type: 'success',
  size: 'sm',
  message: 'Toast pequeño'
})

// Tamaño mediano (por defecto)
toast({
  type: 'info',
  size: 'md',
  message: 'Toast mediano'
})\`
      }
    }
  },
  render: () => ({
    components: {
      GConfigProvider,
      GButton
    },
    setup() {
      const showSmallToast = () => {
        toast({
          type: 'success',
          size: 'sm',
          message: 'Toast pequeño',
          duration: 4000
        });
      };
      const showMediumToast = () => {
        toast({
          type: 'info',
          size: 'md',
          message: 'Toast mediano',
          duration: 4000
        });
      };
      return {
        showSmallToast,
        showMediumToast
      };
    },
    template: \`
      <GConfigProvider>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <GButton @click="showSmallToast" type="primary">
            Toast SM
          </GButton>
          <GButton @click="showMediumToast" type="primary">
            Toast MD
          </GButton>
        </div>
      </GConfigProvider>
    \`
  })
}`,...k.parameters?.docs?.source}}};export{S as AdvancedUsage,P as AllTypes,M as DurationControl,G as Playground,B as Positions,C as Primary,k as Sizes,Qe as __namedExportsOrder,Re as default};
