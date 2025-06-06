import{o as ue,B as De,C as Ve,g as xe,r as c,c as k,w as ie,D as ke,d as pe,a as ne,x as L,e as x,m as N,k as _,l as h,u as a,h as ae,s as H,y as re,F as Ae,z as Be,b as te,f as T,A as Ee,n as me,T as we,j as ze,p as Se,q as Te,v as Ie,E as Me}from"./vue.esm-bundler-CjRFyT5z.js";import{F as Fe,G as Ge,a as Pe}from"./index-CLTwQPmt.js";import{u as Le,G as je,a as Oe}from"./index-Br_QxEvq.js";import{s as fe,y as Ne,o as de,i as qe,u as $e}from"./install-l_-A8haV.js";import{U as be}from"./event-BB_Ol6Sd.js";import{u as Re,f as Ue,G as I}from"./ConfigProvider-HvX_Zy0c.js";import{u as ce}from"./index-BPU2h-Gf.js";import{a as le}from"./style-CgUy9oIP.js";import{i as We}from"./index-Bits6Q2J.js";import{u as ge}from"./index-DPhpeCjj.js";import{t as Xe}from"./index-BxKfg4wu.js";import{y as Ye}from"./index-B3HKRmQm.js";import{c as Ke}from"./refs-CEmuVQ3x.js";import{G as M}from"./index-zJgLw7mb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./error-Cq9Fpw4b.js";import"./vnode-E7nMi-eP.js";import"./index-TQv4h_zV.js";import"./index-DuB3-Aze.js";import"./_arrayPush-C7je_WJ-.js";import"./castArray-CYToEizq.js";const He=(e,o,i,l)=>{const g={offsetX:0,offsetY:0},r=(p,d)=>{if(e.value){const{offsetX:v,offsetY:C}=g,m=e.value.getBoundingClientRect(),f=m.left,b=m.top,B=m.width,s=m.height,E=document.documentElement.clientWidth,w=document.documentElement.clientHeight,G=-f+v,Z=-b+C,J=E-f-B+v,j=w-b-s+C;l?.value||(p=Math.min(Math.max(p,G),J),d=Math.min(Math.max(d,Z),j)),g.offsetX=p,g.offsetY=d,e.value.style.transform=`translate(${le(p)}, ${le(d)})`}},D=p=>{const d=p.clientX,v=p.clientY,{offsetX:C,offsetY:m}=g,f=B=>{const s=C+B.clientX-d,E=m+B.clientY-v;r(s,E)},b=()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",b)},V=()=>{o.value&&e.value&&(o.value.addEventListener("mousedown",D),window.addEventListener("resize",u))},n=()=>{o.value&&e.value&&(o.value.removeEventListener("mousedown",D),window.removeEventListener("resize",u))},F=()=>{g.offsetX=0,g.offsetY=0,e.value&&(e.value.style.transform="")},u=()=>{const{offsetX:p,offsetY:d}=g;r(p,d)};return ue(()=>{De(()=>{i.value?V():n()})}),Ve(()=>{n()}),{resetPosition:F,updatePosition:u}},ve=Symbol("dialogInjectionKey"),Ce=fe({fullscreen:Boolean,draggable:Boolean,overflow:{type:Boolean,default:!0},alignCenter:{type:Boolean,default:!1},sizeMode:{type:String,values:["default","fixed","adaptive"],default:"default"},title:{type:String,default:""},headerClass:String,bodyClass:String,footerClass:String,showClose:{type:Boolean,default:!0},width:{type:[String,Number]},ariaLevel:{type:String,default:"2"},footerButtons:{type:Array,default:()=>[]}}),Ze=e=>{const{sizeMode:o,width:i}=e;o==="fixed"&&(!i||i==="")&&console.warn('[g-dialog] When sizeMode is set to "fixed", width must be defined.')},Je={close:()=>!0},Qe=fe({...Ce,appendToBody:{type:Boolean,default:!1},appendTo:{type:de([String,Object]),default:"body"},beforeClose:{type:de(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,headerClass:String,bodyClass:String,footerClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!0},ariaLevel:{type:String,default:"2"}}),_e={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[be]:e=>Ne(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},eo=(e,o,{closeOnClickModal:i,closeOnPressEscape:l})=>{const r=xe().emit,{nextZIndex:D}=Re();let V="";const n=ce(),F=ce(),u=c(!1),p=c(!1),d=c(!1),v=c(e.zIndex??D()),C=k(()=>e.footerButtons?.slice(0,3)||[]),m=k(()=>C.value.length===3?"layout-dual-row":"layout-single-column");let f,b;const s=Ue("namespace","gui"),E=k(()=>{const y={},se=`--${s.value}-dialog`;return e.fullscreen||(e.top&&(y[`${se}-margin-top`]=e.top),e.width&&(y[`${se}-width`]=le(e.width))),y}),w=k(()=>e.alignCenter?{display:"flex"}:{});function G(){r("opened")}function Z(){r("closed"),r(be,!1),e.destroyOnClose&&(d.value=!1)}function J(){r("close")}function j(){b?.(),f?.(),e.openDelay&&e.openDelay>0?{stop:f}=ge(()=>oe(),e.openDelay):oe()}function ee(){f?.(),b?.(),e.closeDelay&&e.closeDelay>0?{stop:b}=ge(()=>O(),e.closeDelay):O()}const Q=()=>{e.showClose&&(e.beforeClose?e.beforeClose(O):O())};function z(){i.value&&Q()}function oe(){qe&&(u.value=!0)}function O(){u.value=!1}function t(){r("openAutoFocus")}function S(){r("closeAutoFocus")}function P(y){y.detail?.focusReason==="pointer"&&y.preventDefault()}e.lockScroll&&Le(u);function he(){l.value&&Q()}return ie(()=>e.modelValue,y=>{y?(p.value=!1,j(),d.value=!0,v.value=We(e.zIndex)?D():v.value++,ke(()=>{r("open"),o.value&&(o.value.parentElement.scrollTop=0,o.value.parentElement.scrollLeft=0,o.value.scrollTop=0)})):u.value&&ee()}),ie(()=>e.fullscreen,y=>{o.value&&(y?(V=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=V)}),ue(()=>{e.modelValue&&(u.value=!0,d.value=!0,j())}),{afterEnter:G,afterLeave:Z,beforeLeave:J,handleClose:Q,onModalClick:z,close:ee,doClose:O,onOpenAutoFocus:t,onCloseAutoFocus:S,onCloseRequested:he,onFocusoutPrevented:P,titleId:n,bodyId:F,closed:p,style:E,overlayDialogStyle:w,rendered:d,visible:u,zIndex:v,displayButtons:C,buttonLayoutClass:m}},oo=["id"],ao=["aria-level"],ye=pe({__name:"dialog-content",props:Ce,emits:Je,setup(e,{expose:o,emit:i}){const l=e,g=i;Ze(l);const{dialogRef:r,headerRef:D,bodyId:V,ns:n,style:F,displayButtons:u,buttonLayoutClass:p}=ne(ve),{focusTrapRef:d}=ne(Fe,{focusTrapRef:r,onKeydown:()=>{}}),v=k(()=>{const s=l.fullscreen?"fullscreen":l.sizeMode||"default";return[n.b(),n.is("draggable",l.draggable),n.is("align-center",l.alignCenter),n.is(s)]}),C=Ke(d,r),m=k(()=>l.draggable&&!l.fullscreen),f=k(()=>l.overflow),{resetPosition:b}=He(r,r,m,f);o({resetPosition:b});const B=()=>{g("close")};return(s,E)=>(x(),L("div",{ref:a(C),class:h(v.value),style:me(a(F)),tabindex:"-1"},[s.showClose?(x(),L("header",{key:0,ref_key:"headerRef",ref:D,class:h([a(n).e("header"),s.headerClass])},[s.showClose?(x(),L("button",{key:0,"aria-label":"Close",class:h(a(n).e("headerbtn")),type:"button",onClick:B},[ae(a(Xe),{name:"regular times",class:h(a(n).e("close"))},null,8,["class"])],2)):N("",!0)],2)):N("",!0),_("div",{id:a(V),class:h([a(n).e("body"),s.bodyClass])},[_("div",null,[s.$slots.image?(x(),L("div",{key:0,class:h(a(n).e("image"))},[H(s.$slots,"image")],2)):N("",!0),s.title?(x(),L("span",{key:1,class:h(a(n).e("title")),role:"heading","aria-level":s.ariaLevel},re(s.title),11,ao)):N("",!0),_("div",{class:h(a(n).e("content"))},[H(s.$slots,"default")],2)])],10,oo),_("footer",{class:h([a(n).e("footer"),s.footerClass])},[H(s.$slots,"footer",{},()=>[l.footerButtons?.length?(x(),L("div",{key:0,class:h([a(n).e("footer-buttons"),a(p)])},[(x(!0),L(Ae,null,Be(a(u),(w,G)=>(x(),te(a(Ye),{key:G,variant:w.variant,full:"",onClick:w.onClick},{default:T(()=>[Ee(re(w.text),1)]),_:2},1032,["variant","onClick"]))),128))],2)):N("",!0)])],2)],6))}});ye.__docgenInfo={exportName:"default",displayName:"dialog-content",description:"",tags:{},expose:[{name:"resetPosition"}],slots:[{name:"image"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dialog/src/dialog-content.vue"]};const to=["aria-label","aria-labelledby","aria-describedby"],A=pe({__name:"dialog",props:Qe,emits:_e,setup(e,{expose:o,emit:i}){const l=e,g=$e("dialog"),r=c(),D=c(),V=c(),n=k(()=>l.showClose&&l.closeOnClickModal),F=k(()=>l.showClose&&l.closeOnPressEscape),{visible:u,titleId:p,bodyId:d,style:v,overlayDialogStyle:C,rendered:m,zIndex:f,afterEnter:b,afterLeave:B,beforeLeave:s,handleClose:E,onModalClick:w,onOpenAutoFocus:G,onCloseAutoFocus:Z,onCloseRequested:J,onFocusoutPrevented:j,displayButtons:ee,buttonLayoutClass:Q}=eo(l,r,{closeOnClickModal:n,closeOnPressEscape:F});Me(ve,{dialogRef:r,headerRef:D,bodyId:d,ns:g,rendered:m,style:v,displayButtons:ee,buttonLayoutClass:Q});const z=Oe(w),oe=k(()=>l.draggable&&!l.fullscreen);return o({visible:u,dialogContentRef:V,resetPosition:()=>{V.value?.resetPosition()}}),(t,S)=>(x(),te(a(Pe),{to:t.appendTo,disabled:t.appendTo!=="body"?!1:!t.appendToBody},{default:T(()=>[ae(we,{name:"dialog-fade",onAfterEnter:a(b),onAfterLeave:a(B),onBeforeLeave:a(s)},{default:T(()=>[ze(ae(a(je),{"custom-mask-event":"",mask:t.modal,"overlay-class":t.modalClass,"z-index":a(f)},{default:T(()=>[_("div",{role:"dialog","aria-modal":"true","aria-label":t.title||void 0,"aria-labelledby":t.title?void 0:a(p),"aria-describedby":a(d),class:h(`${a(g).namespace.value}-overlay-dialog`),style:me(a(C)),onClick:S[0]||(S[0]=(...P)=>a(z).onClick&&a(z).onClick(...P)),onMousedown:S[1]||(S[1]=(...P)=>a(z).onMousedown&&a(z).onMousedown(...P)),onMouseup:S[2]||(S[2]=(...P)=>a(z).onMouseup&&a(z).onMouseup(...P))},[ae(a(Ge),{loop:"",trapped:a(u),"focus-start-el":"container",onFocusAfterTrapped:a(G),onFocusAfterReleased:a(Z),onFocusoutPrevented:a(j),onReleaseRequested:a(J)},{default:T(()=>[a(m)?(x(),te(ye,Se({key:0,ref_key:"dialogContentRef",ref:V},t.$attrs,{"align-center":t.alignCenter,draggable:oe.value,overflow:t.overflow,fullscreen:t.fullscreen,"header-class":t.headerClass,"body-class":t.bodyClass,"footer-class":t.footerClass,"show-close":t.showClose,title:t.title,"aria-level":t.ariaLevel,width:t.width,"size-mode":t.sizeMode,"footer-buttons":t.footerButtons,onClose:a(E)}),Te({default:T(()=>[H(t.$slots,"default")]),_:2},[t.$slots.image?{name:"image",fn:T(()=>[H(t.$slots,"image")]),key:"0"}:void 0,t.$slots.footer?{name:"footer",fn:T(()=>[H(t.$slots,"footer")]),key:"1"}:void 0]),1040,["align-center","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","width","size-mode","footer-buttons","onClose"])):N("",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,to)]),_:3},8,["mask","overlay-class","z-index"]),[[Ie,a(u)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});A.__docgenInfo={exportName:"default",displayName:"dialog",description:"",tags:{},expose:[{name:"visible",tags:[{title:"description",content:"whether the dialog is visible"}]},{name:"dialogContentRef"},{name:"resetPosition"}],slots:[{name:"image"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dialog/src/dialog.vue"]};const lo="1.1.2",Go={title:"Data/Dialog",component:A,argTypes:{modelValue:{control:"boolean",description:"Controla la visibilidad del dialog",table:{defaultValue:{summary:"false"}}},title:{control:"text",description:"Título del dialog",table:{defaultValue:{summary:""}}},width:{control:"text",description:"Ancho del dialog. Requiere size-mode='fixed'.",table:{defaultValue:{summary:"undefined"}}},sizeMode:{control:"select",options:["default","fixed","adaptive"],description:`Controla el comportamiento del ancho del dialog:
      - default: usa max-width predeterminado
      - fixed: usa width prop sin max-width
      - adaptive: se adapta al contenido con restricciones min/max`,table:{defaultValue:{summary:"default"}}},draggable:{control:"boolean",description:"Permite arrastrar el dialog. No compatible con fullscreen",table:{defaultValue:{summary:"false"}}},fullscreen:{control:"boolean",description:"El dialog ocupa toda la pantalla",table:{defaultValue:{summary:"false"}}},showClose:{control:"boolean",description:"Mostrar botón de cerrar",table:{defaultValue:{summary:"true"}}},alignCenter:{control:"boolean",description:"Alinear el dialog horizontal y verticalmente",table:{defaultValue:{summary:"true"}}},appendToBody:{control:"boolean",description:"Añadir el dialog directamente al body del documento",table:{defaultValue:{summary:"false"}}},headerClass:{control:"text",description:"Clases CSS personalizadas para el header",table:{defaultValue:{summary:""}}},bodyClass:{control:"text",description:"Clases CSS personalizadas para el body",table:{defaultValue:{summary:""}}},footerClass:{control:"text",description:"Clases CSS personalizadas para el footer",table:{defaultValue:{summary:""}}},ariaLevel:{control:"text",description:"Nivel de encabezado ARIA para el título",table:{defaultValue:{summary:"2"}}},closeOnClickModal:{control:"boolean",description:"Si el dialog se cierra al hacer clic en el overlay",table:{defaultValue:{summary:"true"}}},closeOnPressEscape:{control:"boolean",description:"Si el dialog se cierra al presionar ESC",table:{defaultValue:{summary:"true"}}},destroyOnClose:{control:"boolean",description:"Destruir el contenido del dialog cuando se cierra",table:{defaultValue:{summary:"false"}}},footerButtons:{control:"object",description:`Array de configuración para los botones del footer (máximo 3 botones). Cada botón debe tener:
      - text: Texto del botón
      - onClick: Función a ejecutar al hacer clic
      - variant: Variante del botón (primary/secondary/tertiary)`,table:{defaultValue:{summary:"[]"},type:{summary:"Array<{ text: string, onClick: () => void, variant: 'primary' | 'secondary' | 'tertiary' }>"}}},"onUpdate:modelValue":{description:"Se emite al actualizar la visibilidad del dialog",table:{category:"Eventos",type:{summary:"(value: boolean) => void"}}},onOpen:{description:"Se emite cuando el dialog se abre",table:{category:"Eventos",type:{summary:"() => void"}}},onOpened:{description:"Se emite cuando termina la animación de apertura del dialog",table:{category:"Eventos",type:{summary:"() => void"}}},onClose:{description:"Se emite cuando el dialog se cierra",table:{category:"Eventos",type:{summary:"() => void"}}},onClosed:{description:"Se emite cuando termina la animación de cierre del dialog",table:{category:"Eventos",type:{summary:"() => void"}}},default:{description:"Contenido principal del dialog",table:{category:"Slots",type:{summary:"slot"}}},header:{description:"Contenido personalizado para el encabezado del dialog",table:{category:"Slots",type:{summary:"slot"}}},footer:{description:"Contenido personalizado para el pie del dialog",table:{category:"Slots",type:{summary:"slot"}}},image:{description:"Slot para mostrar una imagen en la parte superior del dialog",table:{category:"Slots",type:{summary:"slot"}}}},parameters:{docs:{description:{component:`
# Dialog Component

El componente Dialog proporciona una ventana modal configurable para mostrar información y acciones.

> Versión actual: ${lo}

## Características
- Tres modos de tamaño: default, fixed y adaptive
- Soporte para imágenes y contenido personalizado
- Configuración flexible de botones en el footer (máximo 3)
- Drag & Drop (opción arrastrable)
- Fullscreen para mobile optimizado

## Instalación

\`\`\`bash
yarn add @flash-global66/g-dialog
\`\`\`

## Dependencias
Este componente requiere:
- @flash-global66/g-button
- @flash-global66/g-icon-font
- @flash-global66/g-focus-trap
- @flash-global66/g-teleport
- @flash-global66/g-overlay

\`\`\`bash
# Instalar dependencias requeridas
yarn add @flash-global66/g-button @flash-global66/g-icon-font @flash-global66/g-focus-trap @flash-global66/g-teleport @flash-global66/g-overlay
\`\`\`

## Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
// Importar estilos del Dialog
@use "@flash-global66/g-dialog/styles.scss" as *;

// Importar los estilos de los componentes dependientes
@use "@flash-global66/g-button/styles.scss" as *;
@use "@flash-global66/g-icon-font/styles.scss" as *;
\`\`\`

## Uso básico

\`\`\`html
<template>
  <g-button @click="dialogVisible = true">Abrir Dialog</g-button>

  <g-dialog
    v-model="dialogVisible"
    title="Título del Dialog"
    :footer-buttons="buttons"
    @close="closeDialog"
  >
    Contenido del Dialog
  </g-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { GDialog } from '@flash-global66/g-dialog';
import { GButton } from '@flash-global66/g-button';

const dialogVisible = ref(false);
const closeDialog = () => {
  dialogVisible.value = false;
};
const buttons = [
  {
    text: 'Aceptar',
    onClick: closeDialog,
    variant: 'primary'
  },
  {
    text: 'Cancelar',
    onClick: closeDialog,
    variant: 'secondary'
  }
];
<\/script>
\`\`\`

## Layout de botones
- Con 3 botones: Se muestran 2 botones en la primera fila y 1 botón centrado debajo
- Con 2 botones: Se muestran uno encima del otro en columna
- Con 1 botón: Ocupa todo el ancho disponible
      `}}}},so=e=>({components:{GDialog:A,GConfigProvider:I,GButton:M},setup(){const o=c(!1),i=()=>{o.value=!1};return{args:e,dialogVisible:o,handleClose:i,processFooterButtons:()=>!e.footerButtons||e.footerButtons.length===0?[{text:"Aceptar",onClick:i,variant:"primary"},{text:"Cancelar",onClick:()=>o.value=!1,variant:"secondary"}]:e.footerButtons.map(g=>({...g,onClick:()=>{o.value=!1}}))}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog Básico</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        :footer-buttons="processFooterButtons()"
        @close="handleClose"
        append-to-body
      >
        <p>Este es un dialog básico con contenido de texto simple.</p>
      </g-dialog>
    </g-config-provider>
  `}),q=so.bind({});q.args={title:"Dialog Básico",showClose:!0,footerButtons:[{text:"Aceptar",onClick:()=>{},variant:"primary"},{text:"Cancelar",onClick:()=>{},variant:"secondary"}]};q.parameters={docs:{description:{story:"Dialog básico con contenido de texto y dos botones de acción."},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog Básico"
    :show-close="true"
    :footer-buttons="[
      {
        text: 'Aceptar',
        onClick: handleClose,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: () => dialogVisible = false,
        variant: 'secondary'
      }
    ]"
    @close="handleClose"
  >
    <p>Este es un dialog básico con contenido de texto simple.</p>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
<\/script>`,language:"html",type:"auto"}}};const io=e=>({components:{GDialog:A,GConfigProvider:I,GButton:M},setup(){const o=c(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Imagen"
        append-to-body
        @close="handleClose"
      >
        <template #image>
            <img 
              src="https://placehold.co/112x112"
              alt="Imagen"
            />
        </template>
        <p>Este dialog muestra una imagen con un mensaje.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Aceptar</g-button>
            <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `}),$=io.bind({});$.args={title:"Dialog con Imagen",showClose:!0,sizeMode:"default"};$.parameters={docs:{description:{story:"Dialog con imagen y botones configurados mediante la prop footerButtons."},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Imagen"
    :footer-buttons="[
      {
        text: 'Aceptar',
        onClick: handleConfirm,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: handleClose,
        variant: 'secondary'
      }
    ]"
    @close="handleClose"
  >
    <template #image>
      <img 
        src="https://placehold.co/112x112"
        alt="Imagen"
      />
    </template>
    <p>Este dialog muestra una imagen con un mensaje.</p>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
const handleConfirm = () => {
  dialogVisible.value = false;
};
<\/script>`}}};const no=e=>({components:{GDialog:A,GConfigProvider:I,GButton:M},setup(){const o=c(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog sin Botón Cerrar</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Mensaje Importante"
        :show-close="false"
        append-to-body
        @close="handleClose"
      >
        <p class="text-center">Este dialog es un mensaje importante que requiere confirmación del usuario.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Entendido</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `}),R=no.bind({});R.args={title:"Mensaje Importante",showClose:!1,sizeMode:"default"};R.parameters={docs:{description:{story:"Dialog sin botón de cerrar, con texto y un solo botón."},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Mensaje Importante"
    :show-close="false"
    @close="handleClose"
  >
    <p>Este dialog solo se cierra con el botón de acción.</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Entiendo</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
<\/script>`,language:"html",type:"auto"}}};const ro=e=>({components:{GDialog:A,GConfigProvider:I,GButton:M},setup(){const o=c(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog Ancho</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Ancho Personalizado"
        width="800"
        size-mode="fixed"
        append-to-body
        @close="handleClose"
      >
        <p>Este dialog tiene un ancho personalizado de 800px.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Aceptar</g-button>
            <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `}),U=ro.bind({});U.args={title:"Dialog con Ancho Personalizado",showClose:!0,width:"800",sizeMode:"fixed"};U.parameters={docs:{description:{story:"Dialog con ancho personalizado definido a 800px. Requiere size-mode='fixed'"},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Ancho Personalizado"
    width="800"
    size-mode="fixed"
    :show-close="true"
    @close="handleClose"
  >
    <p>Este dialog tiene un ancho personalizado de 800px.</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Aceptar</g-button>
        <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
<\/script>`,language:"html",type:"auto"}}};const co=e=>({components:{GDialog:A,GConfigProvider:I,GButton:M},setup(){const o=c(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen Grande</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog Adaptable"
        size-mode="adaptive"
        @close="handleClose"
        append-to-body
      >
        <template #image> 
          <img 
            src="https://placehold.co/800x600"
            alt="Imagen grande de ejemplo"
            class="rounded"
          />
        </template>
        <p>Este dialog se adapta al contenido manteniendo márgenes seguros</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Entendido</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `}),W=co.bind({});W.args={title:"Dialog Adaptable",showClose:!0,sizeMode:"adaptive"};W.parameters={docs:{description:{story:"Dialog que se adapta al contenido, útil para imágenes grandes o contenido variable."},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog Adaptable"
    size-mode="adaptive"
    @close="handleClose"
  >
    <template #image>
      <img 
        src="https://placehold.co/800x600"
        alt="Imagen grande de ejemplo"
        class="rounded"
      />
    </template>
    <p>Este dialog se adapta al contenido manteniendo márgenes seguros</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Entendido</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
<\/script>`,language:"html",type:"auto"}}};const go=e=>({components:{GDialog:A,GConfigProvider:I,GButton:M},setup(){const o=c(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con 2 Botones</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Botones"
        :footer-buttons="[
          {
            text: 'Aceptar',
            onClick: handleClose,
            variant: 'primary'
          },
          {
            text: 'Cancelar',
            onClick: () => dialogVisible = false,
            variant: 'secondary'
          }
        ]"
        @close="handleClose"
        append-to-body
      >
        <p>Este dialog muestra dos botones.</p>
      </g-dialog>
    </g-config-provider>
  `}),X=go.bind({});X.args={title:"Dialog con Botones",showClose:!0};X.parameters={docs:{description:{story:"Dialog con dos botones."},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Botones"
    :footer-buttons="[
      {
        text: 'Aceptar',
        onClick: handleClose,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: () => dialogVisible = false,
        variant: 'secondary'
      }
    ]"
    @close="handleClose"
  >
    <p>Este dialog muestra dos botones.</p>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
<\/script>`,language:"html",type:"auto"}}};const uo=e=>({components:{GDialog:A,GConfigProvider:I,GButton:M},setup(){const o=c(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con 3 Botones</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Tres Botones"
        :footer-buttons="[
          {
            text: 'Guardar',
            onClick: handleClose,
            variant: 'primary'
          },
          {
            text: 'Cancelar',
            onClick: () => dialogVisible = false,
            variant: 'secondary'
          },
          {
            text: 'Ver detalles',
            onClick: handleClose,
            variant: 'tertiary'
          }
        ]"
        @close="handleClose"
        append-to-body
      >
        <p>Este dialog muestra tres botones con distribución especial: dos en la primera fila y uno centrado abajo.</p>
      </g-dialog>
    </g-config-provider>
  `}),Y=uo.bind({});Y.args={title:"Dialog con Tres Botones",showClose:!0};Y.parameters={docs:{description:{story:"Dialog con tres botones: dos en la primera fila y uno centrado abajo. En móviles, todos los botones se muestran en columna."},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Tres Botones"
    :footer-buttons="[
      {
        text: 'Guardar',
        onClick: handleClose,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: handleClose,
        variant: 'secondary'
      },
      {
        text: 'Ver detalles',
        onClick: handleClose,
        variant: 'tertiary'
      }
    ]"
    @close="handleClose"
  >
    <p>Este dialog muestra tres botones con distribución especial: dos en la primera fila y uno centrado abajo.</p>
  </g-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
<\/script>`,language:"html",type:"auto"}}};const po=e=>({components:{GDialog:A,GConfigProvider:I,GButton:M},setup(){const o=c(!1),i=c(!1),l=c(!1);return{args:e,defaultDialogVisible:o,fixedDialogVisible:i,adaptiveDialogVisible:l,closeDefaultDialog:()=>{o.value=!1},closeFixedDialog:()=>{i.value=!1},closeAdaptiveDialog:()=>{l.value=!1}}},template:`
    <g-config-provider>
      <div class="flex flex-wrap gap-4">
        <g-button @click="defaultDialogVisible = true">Modo Default</g-button>
        <g-button @click="fixedDialogVisible = true">Modo Fixed</g-button>
        <g-button @click="adaptiveDialogVisible = true">Modo Adaptive</g-button>
      </div>
      
      <!-- Dialog con modo DEFAULT -->
      <g-dialog
        v-model="defaultDialogVisible"
        title="Dialog - Modo Default"
        size-mode="default"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeDefaultDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeDefaultDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeDefaultDialog"
      >
        <p>Este dialog utiliza el modo <strong>default</strong>. Tiene un ancho máximo predefinido y se ajusta a pantallas más pequeñas.</p>
      </g-dialog>
      
      <!-- Dialog con modo FIXED -->
      <g-dialog
        v-model="fixedDialogVisible"
        title="Dialog - Modo Fixed"
        size-mode="fixed"
        width="600px"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeFixedDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeFixedDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeFixedDialog"
      >
        <p>Este dialog utiliza el modo <strong>fixed</strong> con un ancho de 600px. No tiene restricciones de ancho máximo, pero se adaptará en pantallas pequeñas.</p>
      </g-dialog>
      
      <!-- Dialog con modo ADAPTIVE -->
      <g-dialog
        v-model="adaptiveDialogVisible"
        title="Dialog - Modo Adaptive"
        size-mode="adaptive"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeAdaptiveDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeAdaptiveDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeAdaptiveDialog"
      >
        <template #image>
          <img 
            src="https://placehold.co/600x300"
            alt="Imagen de ejemplo"
            class="rounded"
          />
        </template>
        <p>Este dialog utiliza el modo <strong>adaptive</strong>. Se adapta automáticamente al contenido, respetando un tamaño mínimo y máximo.</p>
      </g-dialog>
    </g-config-provider>
  `}),K=po.bind({});K.args={showClose:!0};K.parameters={docs:{description:{story:"Comparativa de los tres modos de tamaño disponibles: default, fixed y adaptive."},source:{code:`
<!-- MODO DEFAULT -->
<g-dialog
  v-model="dialogVisible"
  title="Dialog - Modo Default"
  size-mode="default"
  :footer-buttons="[
    { text: 'Aceptar', onClick: handleClose, variant: 'primary' },
    { text: 'Cancelar', onClick: handleClose, variant: 'secondary' }
  ]"
>
  <p>Este dialog utiliza el modo default con ancho máximo predefinido.</p>
</g-dialog>

<!-- MODO FIXED -->
<g-dialog
  v-model="dialogVisible"
  title="Dialog - Modo Fixed"
  size-mode="fixed"
  width="600px"
  :footer-buttons="[
    { text: 'Aceptar', onClick: handleClose, variant: 'primary' },
    { text: 'Cancelar', onClick: handleClose, variant: 'secondary' }
  ]"
>
  <p>Este dialog utiliza el modo fixed con un ancho específico de 600px.</p>
</g-dialog>

<!-- MODO ADAPTIVE -->
<g-dialog
  v-model="dialogVisible"
  title="Dialog - Modo Adaptive"
  size-mode="adaptive"
  :footer-buttons="[
    { text: 'Aceptar', onClick: handleClose, variant: 'primary' },
    { text: 'Cancelar', onClick: handleClose, variant: 'secondary' }
  ]"
>
  <template #image>
    <img src="https://placehold.co/600x300" alt="Imagen de ejemplo" class="rounded" />
  </template>
  <p>Este dialog utiliza el modo adaptive que se adapta al contenido.</p>
</g-dialog>`,language:"html",type:"auto"}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    const processFooterButtons = () => {
      if (!args.footerButtons || args.footerButtons.length === 0) {
        return [{
          text: 'Aceptar',
          onClick: handleClose,
          variant: 'primary'
        }, {
          text: 'Cancelar',
          onClick: () => dialogVisible.value = false,
          variant: 'secondary'
        }];
      }
      return args.footerButtons.map(button => ({
        ...button,
        onClick: () => {
          dialogVisible.value = false;
        }
      }));
    };
    return {
      args,
      dialogVisible,
      handleClose,
      processFooterButtons
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog Básico</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        :footer-buttons="processFooterButtons()"
        @close="handleClose"
        append-to-body
      >
        <p>Este es un dialog básico con contenido de texto simple.</p>
      </g-dialog>
    </g-config-provider>
  \`
})`,...q.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Imagen"
        append-to-body
        @close="handleClose"
      >
        <template #image>
            <img 
              src="https://placehold.co/112x112"
              alt="Imagen"
            />
        </template>
        <p>Este dialog muestra una imagen con un mensaje.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Aceptar</g-button>
            <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  \`
})`,...$.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog sin Botón Cerrar</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Mensaje Importante"
        :show-close="false"
        append-to-body
        @close="handleClose"
      >
        <p class="text-center">Este dialog es un mensaje importante que requiere confirmación del usuario.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Entendido</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  \`
})`,...R.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog Ancho</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Ancho Personalizado"
        width="800"
        size-mode="fixed"
        append-to-body
        @close="handleClose"
      >
        <p>Este dialog tiene un ancho personalizado de 800px.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Aceptar</g-button>
            <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  \`
})`,...U.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen Grande</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog Adaptable"
        size-mode="adaptive"
        @close="handleClose"
        append-to-body
      >
        <template #image> 
          <img 
            src="https://placehold.co/800x600"
            alt="Imagen grande de ejemplo"
            class="rounded"
          />
        </template>
        <p>Este dialog se adapta al contenido manteniendo márgenes seguros</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Entendido</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  \`
})`,...W.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con 2 Botones</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Botones"
        :footer-buttons="[
          {
            text: 'Aceptar',
            onClick: handleClose,
            variant: 'primary'
          },
          {
            text: 'Cancelar',
            onClick: () => dialogVisible = false,
            variant: 'secondary'
          }
        ]"
        @close="handleClose"
        append-to-body
      >
        <p>Este dialog muestra dos botones.</p>
      </g-dialog>
    </g-config-provider>
  \`
})`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con 3 Botones</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Tres Botones"
        :footer-buttons="[
          {
            text: 'Guardar',
            onClick: handleClose,
            variant: 'primary'
          },
          {
            text: 'Cancelar',
            onClick: () => dialogVisible = false,
            variant: 'secondary'
          },
          {
            text: 'Ver detalles',
            onClick: handleClose,
            variant: 'tertiary'
          }
        ]"
        @close="handleClose"
        append-to-body
      >
        <p>Este dialog muestra tres botones con distribución especial: dos en la primera fila y uno centrado abajo.</p>
      </g-dialog>
    </g-config-provider>
  \`
})`,...Y.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const defaultDialogVisible = ref(false);
    const fixedDialogVisible = ref(false);
    const adaptiveDialogVisible = ref(false);
    const closeDefaultDialog = () => {
      defaultDialogVisible.value = false;
    };
    const closeFixedDialog = () => {
      fixedDialogVisible.value = false;
    };
    const closeAdaptiveDialog = () => {
      adaptiveDialogVisible.value = false;
    };
    return {
      args,
      defaultDialogVisible,
      fixedDialogVisible,
      adaptiveDialogVisible,
      closeDefaultDialog,
      closeFixedDialog,
      closeAdaptiveDialog
    };
  },
  template: \`
    <g-config-provider>
      <div class="flex flex-wrap gap-4">
        <g-button @click="defaultDialogVisible = true">Modo Default</g-button>
        <g-button @click="fixedDialogVisible = true">Modo Fixed</g-button>
        <g-button @click="adaptiveDialogVisible = true">Modo Adaptive</g-button>
      </div>
      
      <!-- Dialog con modo DEFAULT -->
      <g-dialog
        v-model="defaultDialogVisible"
        title="Dialog - Modo Default"
        size-mode="default"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeDefaultDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeDefaultDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeDefaultDialog"
      >
        <p>Este dialog utiliza el modo <strong>default</strong>. Tiene un ancho máximo predefinido y se ajusta a pantallas más pequeñas.</p>
      </g-dialog>
      
      <!-- Dialog con modo FIXED -->
      <g-dialog
        v-model="fixedDialogVisible"
        title="Dialog - Modo Fixed"
        size-mode="fixed"
        width="600px"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeFixedDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeFixedDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeFixedDialog"
      >
        <p>Este dialog utiliza el modo <strong>fixed</strong> con un ancho de 600px. No tiene restricciones de ancho máximo, pero se adaptará en pantallas pequeñas.</p>
      </g-dialog>
      
      <!-- Dialog con modo ADAPTIVE -->
      <g-dialog
        v-model="adaptiveDialogVisible"
        title="Dialog - Modo Adaptive"
        size-mode="adaptive"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeAdaptiveDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeAdaptiveDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeAdaptiveDialog"
      >
        <template #image>
          <img 
            src="https://placehold.co/600x300"
            alt="Imagen de ejemplo"
            class="rounded"
          />
        </template>
        <p>Este dialog utiliza el modo <strong>adaptive</strong>. Se adapta automáticamente al contenido, respetando un tamaño mínimo y máximo.</p>
      </g-dialog>
    </g-config-provider>
  \`
})`,...K.parameters?.docs?.source}}};const Po=["Basic","WithImage","NoCloseButton","CustomWidth","WithLargeImage","TwoButtonsStacked","ThreeButtonsLayout","SizeModeComparison"];export{q as Basic,U as CustomWidth,R as NoCloseButton,K as SizeModeComparison,Y as ThreeButtonsLayout,X as TwoButtonsStacked,$ as WithImage,W as WithLargeImage,Po as __namedExportsOrder,Go as default};
