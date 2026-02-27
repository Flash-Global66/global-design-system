import{d as ee,r as oe,c as b,o as te,b as W,e as w,f as se,j as F,k as G,n as $,l as g,u as i,h as H,m as R,x as A,s as ae,y as re,v as Q,a1 as ne,T as ie,R as N,i as D,G as ce,aj as Z}from"./vue.esm-bundler-C43JrhH2.js";import{u as le}from"./index-BDKGuxIf.js";import{F as _}from"./index-B1PxvDbZ.js";import{b as pe,d as E,w as de,a as ue}from"./install-CfJGiCvs.js";import{u as me,G as m}from"./ConfigProvider-Br84NlF7.js";import{u as fe,a as ge,h as X,v as ye}from"./index-D5bIuBCX.js";import{E as q}from"./aria-BUADUvnR.js";import{u as he}from"./index-DmfABaPz.js";import{G as y}from"./index-1xDgUv1h.js";import{a as we,b as ve}from"./documentation-stories-DKOl0nGm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./error-Cq9Fpw4b.js";import"./index-DH2w0SzE.js";import"./index-fhkPmQjX.js";import"./_arrayPush-BhjrZnJY.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";const J=["success","info","warning","error"],Te=["sm","md"],be=pe({customClass:{type:String,default:""},dangerouslyUseHTMLString:Boolean,duration:{type:Number,default:5e3},id:{type:String,default:""},message:{type:E([String,Object,Function]),default:""},offset:{type:Number,default:0},onClick:{type:E(Function),default:()=>{}},onClose:{type:E(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},showProgress:{type:Boolean,default:!0},size:{type:String,values:Te,default:"md"},type:{type:String,values:J,required:!0},zIndex:Number}),Ge={destroy:()=>!0},Ce=["id"],Pe={key:0},Be=["innerHTML"],z=ee({name:"GToast",__name:"toast",props:be,emits:Ge,setup(e,{expose:s}){const t=e,{nextZIndex:c,currentZIndex:d}=me(),r=fe("toast"),n=oe(!1);let p;const u={success:"solid check-circle",info:"solid info-circle",warning:"solid exclamation-triangle",error:"solid times-circle"},l=b(()=>u[t.type]),f=b(()=>t.position.endsWith("right")?"right":"left"),h=b(()=>t.position.startsWith("top")?"top":"bottom"),I=b(()=>({[h.value]:`${t.offset}px`,zIndex:t.zIndex??d.value}));function j(){if(t.duration>0){const{stop:a}=he(()=>{n.value&&v()},t.duration);p=a}}function V(){p?.()}function v(){n.value=!1}function Y({code:a}){a===q.delete||a===q.backspace?V():a===q.esc?n.value&&v():j()}return te(()=>{j(),c(),n.value=!0}),le(document,"keydown",Y),s({visible:n,close:v}),(a,T)=>(w(),W(ie,{name:i(r).b("fade"),onBeforeLeave:a.onClose,onAfterLeave:T[1]||(T[1]=U=>a.$emit("destroy"))},{default:se(()=>[F(G("div",{id:a.id,class:g([i(r).b(),i(r).m(t.type),i(r).m(t.size),a.customClass,f.value]),style:$(I.value),role:"alert",onMouseenter:V,onMouseleave:j,onClick:T[0]||(T[0]=(...U)=>a.onClick&&a.onClick(...U))},[H(i(_),{class:g([i(r).e("icon"),i(r).m(t.type)]),name:l.value},null,8,["class","name"]),G("div",{class:g(i(r).e("group"))},[F(G("div",{class:g(i(r).e("content"))},[ae(a.$slots,"default",{},()=>[a.dangerouslyUseHTMLString?(w(),A("p",{key:1,innerHTML:a.message},null,8,Be)):(w(),A("p",Pe,re(a.message),1))])],2),[[Q,a.message]])],2),a.showClose?(w(),W(i(_),{key:0,class:g(i(r).e("closeBtn")),onClick:ne(v,["stop"]),name:"solid times"},null,8,["class"])):R("",!0),a.showProgress&&a.duration>0?(w(),A("div",{key:1,class:g(i(r).e("progress"))},[G("div",{class:g([i(r).e("progress-bar"),i(r).m(t.type)]),style:$({animationDuration:`${a.duration}ms`})},null,6)],2)):R("",!0)],46,Ce),[[Q,n.value]])]),_:3},8,["name","onBeforeLeave"]))}});z.__docgenInfo={name:"GToast",exportName:"default",displayName:"toast",description:"",tags:{},expose:[{name:"visible"},{name:"close",tags:[{title:"description",content:"close notification"}]}],events:[{name:"destroy"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/toast/src/toast.vue"]};const L={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},O=16;let xe=1;const o=function(e={},s){if(!ge)return{close:()=>{}};(N(e)||D(e))&&(e={message:e});const t=e.position||"top-right";let c=e.offset||0;L[t].forEach(({vm:h})=>{c+=(h.el?.offsetHeight||0)+O}),c+=O;const d=`toast_${xe++}`,r=e.onClose,n={...e,offset:c,id:d,onClose:()=>{Me(d,t,r)}};let p=document.body;X(e.appendTo)?p=e.appendTo:N(e.appendTo)&&(p=document.querySelector(e.appendTo)),X(p)||(p=document.body);const u=document.createElement("div"),l=H(z,n,ce(n.message)?n.message:D(n.message)?()=>n.message:null),f=H(m,{},{default:()=>l});return f.appContext=ye(s)?o._context:s,f.props.onDestroy=()=>{Z(null,u)},Z(f,u),L[t].push({vm:l}),p.appendChild(u.firstElementChild),{close:()=>{l.component.exposed.visible.value=!1}}};J.forEach(e=>{o[e]=(s={},t)=>((N(s)||D(s))&&(s={message:s}),o({...s,type:e},t))});function Me(e,s,t){const c=L[s],d=c.findIndex(({vm:l})=>l.component?.props.id===e);if(d===-1)return;const{vm:r}=c[d];if(!r)return;t?.(r);const n=r.el.offsetHeight,p=s.split("-")[0];c.splice(d,1);const u=c.length;if(!(u<1))for(let l=d;l<u;l++){const{el:f,component:h}=c[l].vm,I=Number.parseInt(f.style[p],10)-n-O;h.props.offset=I}}function Se(){for(const e of Object.values(L))e.forEach(({vm:s})=>{s.component.exposed.visible.value=!1})}o.closeAll=Se;o._context=null;const ke=de(z,{Toast:z});ue(o,"$toastify");const ze="1.1.0",K={"@flash-global66/g-icon-font":"^0.10.0","@vueuse/core":"^12.4.0","element-plus":"^2.9.0",vue:"^3.2.0"},_e={title:"Feedback/Toast",component:ke,parameters:{docs:{description:{component:`
El componente Toast muestra un mensaje de notificación en una esquina de la página.

El sistema ofrece una API dual: una función principal \`toast({ type: 'success' })\` para máxima configuración y métodos de atajo \`toast.success()\`.

> Versión actual: ${ze}

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
        `}}},argTypes:{message:{description:"Contenido del mensaje del toast.",control:"text",table:{category:"Props",type:{summary:"string | VNode | (() => VNode)"}}},type:{description:"Tipo de notificación (requerido). Determina el icono y estilo visual.",control:"select",options:["success","info","warning","error"],table:{category:"Props",type:{summary:"ToastType"}}},size:{description:"Tamaño del toast. Afecta la altura, texto e iconos.",control:"select",options:["sm","md"],defaultValue:"md",table:{category:"Props",type:{summary:"ToastSize"},defaultValue:{summary:"md"}}},duration:{description:"Duración en milisegundos antes del cierre automático. Si es 0, no se cierra automáticamente.",control:"number",defaultValue:5e3,table:{category:"Props",type:{summary:"number"},defaultValue:{summary:"5000"}}},position:{description:"Posición del toast en la pantalla.",control:"select",options:["top-right","top-left","bottom-right","bottom-left"],defaultValue:"top-right",table:{category:"Props",type:{summary:"string"},defaultValue:{summary:"top-right"}}},showClose:{description:"Si el toast puede cerrarse manualmente con el botón X.",control:"boolean",defaultValue:!0,table:{category:"Props",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showProgress:{description:"Si debe mostrarse la barra de progreso indicando el tiempo restante.",control:"boolean",defaultValue:!0,table:{category:"Props",type:{summary:"boolean"},defaultValue:{summary:"true"}}},offset:{description:"Offset en píxeles desde el borde de la pantalla.",control:"number",defaultValue:0,table:{category:"Props",type:{summary:"number"},defaultValue:{summary:"0"}}},dangerouslyUseHTMLString:{description:"Si el mensaje debe tratarse como HTML (usar con precaución).",control:"boolean",defaultValue:!1,table:{category:"Props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},customClass:{description:"Clase CSS personalizada para el toast.",control:"text",table:{category:"Props",type:{summary:"string"},defaultValue:{summary:'""'}}},zIndex:{description:"z-index inicial del toast.",control:"number",table:{category:"Props",type:{summary:"number"}}},onClick:{description:"Se emite cuando se hace clic en el toast.",action:"clicked",table:{category:"Events",type:{summary:"() => void"}}},onClose:{description:"Se emite cuando el toast se cierra (antes de la animación).",action:"closed",table:{category:"Events",type:{summary:"() => void"}}},destroy:{description:"Se emite cuando el toast se destruye completamente (después de la animación).",action:"destroyed",table:{category:"Events",type:{summary:"() => void"}}},default:{description:"Contenido personalizado del mensaje. Por defecto muestra el prop `message`.",control:!1,table:{category:"Slots",type:{summary:"VNode | string"}}},visible:{description:"Estado de visibilidad del toast (ref).",control:!1,table:{category:"Expose",type:{summary:"Ref<boolean>"}}},close:{description:"Método para cerrar el toast manualmente.",control:!1,table:{category:"Expose",type:{summary:"() => void"}}}},args:{message:"Operación completada exitosamente",type:"success",duration:5e3,position:"top-right",showClose:!0,showProgress:!0,size:"md",offset:0,dangerouslyUseHTMLString:!1}},C={name:"Uso Básico",parameters:{docs:{description:{story:"Usa los controles de abajo para experimentar con diferentes configuraciones del toast."},source:{code:`toast({
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
    `})},P={name:"Dos Formas de Uso",parameters:{docs:{description:{story:`
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
    `})},B={name:"Tipos",parameters:{docs:{description:{story:"El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error. Los iconos se asignan automáticamente según el tipo."},source:{code:`toast({ type: 'success', message: 'Operación exitosa' })
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
    `})},x={name:"Posiciones",parameters:{docs:{description:{story:"Los toasts pueden aparecer en cualquiera de las cuatro esquinas de la pantalla. La posición se mantiene consistente para múltiples toasts."},source:{code:`toast({ type: 'success', message: 'Superior derecha', position: 'top-right' })
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
    `})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Uso Básico",
  parameters: {
    docs: {
      description: {
        story: "Usa los controles de abajo para experimentar con diferentes configuraciones del toast."
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
}`,...C.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Dos Formas de Uso",
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
          type: "success",
          message: 'Método principal - toast({ type: "success" })',
          duration: 3000,
          position: "top-right"
        });
      };
      const showShortcuts = () => {
        toast.success("Método de atajo - toast.success()");
        setTimeout(() => {
          toast.info("toast.info() - Información");
        }, 500);
        setTimeout(() => {
          toast.warning("toast.warning() - Advertencia");
        }, 1000);
        setTimeout(() => {
          toast.error("toast.error() - Error");
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
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Tipos",
  parameters: {
    docs: {
      description: {
        story: "El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error. Los iconos se asignan automáticamente según el tipo."
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
        toast.success("Operación completada exitosamente");
      };
      const showInfo = () => {
        toast.info("Aquí tienes información útil");
      };
      const showWarning = () => {
        toast.warning("Por favor revisa esto cuidadosamente");
      };
      const showError = () => {
        toast.error("Algo salió mal");
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
}`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Posiciones",
  parameters: {
    docs: {
      description: {
        story: "Los toasts pueden aparecer en cualquiera de las cuatro esquinas de la pantalla. La posición se mantiene consistente para múltiples toasts."
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
        key: "top-left",
        label: "Arriba Izquierda"
      }, {
        key: "top-right",
        label: "Arriba Derecha"
      }, {
        key: "bottom-left",
        label: "Abajo Izquierda"
      }, {
        key: "bottom-right",
        label: "Abajo Derecha"
      }] as const;
      const showToast = (position: (typeof positions)[number]["key"]) => {
        toast({
          type: "info",
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
}`,...x.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Control de Duración",
  parameters: {
    docs: {
      description: {
        story: "Controla cuánto tiempo permanecen visibles los toasts. La duración de 0 hace que el toast permanezca hasta que el usuario lo cierre manualmente."
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
          message: "Toast rápido (2s)",
          duration: 2000
        });
      };
      const showNormal = () => {
        toast.info("Toast normal (5s por defecto)");
      };
      const showLong = () => {
        toast.warning({
          message: "Toast largo (10s)",
          duration: 10000
        });
      };
      const showPersistent = () => {
        toast.error({
          message: "Toast persistente (cierre manual)",
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
  name: "Configuración Avanzada",
  parameters: {
    docs: {
      description: {
        story: "Opciones avanzadas: contenido HTML, offset personalizado y sin botón de cerrar."
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
          type: "info",
          message: "<strong>Contenido HTML</strong> con <em>formato</em>",
          dangerouslyUseHTMLString: true,
          duration: 5000
        });
      };
      const showWithOffset = () => {
        toast({
          type: "success",
          message: "Toast con offset personalizado (50px)",
          offset: 50,
          duration: 4000
        });
      };
      const showNonClosable = () => {
        toast({
          type: "warning",
          message: "Toast sin botón de cerrar (solo auto-cierre)",
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
  name: "Tamaños",
  parameters: {
    docs: {
      description: {
        story: "El componente tiene dos tamaños disponibles: sm (pequeño) y md (mediano)."
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
          type: "success",
          size: "sm",
          message: "Toast pequeño",
          duration: 4000
        });
      };
      const showMediumToast = () => {
        toast({
          type: "info",
          size: "md",
          message: "Toast mediano",
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
}`,...k.parameters?.docs?.source}}};const Xe=["Playground","Primary","AllTypes","Positions","DurationControl","AdvancedUsage","Sizes"];export{S as AdvancedUsage,B as AllTypes,M as DurationControl,C as Playground,x as Positions,P as Primary,k as Sizes,Xe as __namedExportsOrder,_e as default};
