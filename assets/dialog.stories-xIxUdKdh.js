import{o as ue,B as De,C as xe,g as Ve,r as d,c as D,w as ie,D as ke,d as pe,a as ne,x as I,e as y,m as q,k as oe,l as C,u as a,s as F,h as ae,y as re,F as Ae,z as Be,b as te,f as w,A as Ee,n as me,T as we,j as ze,p as Se,q as Te,v as Me,E as Ie}from"./vue.esm-bundler-C43JrhH2.js";import{a as Fe,O as Ge,G as Pe}from"./index-dphAcb1L.js";import{u as Le,G as je,a as Oe}from"./index-BoUrZ4P6.js";import{b as fe,d as de}from"./install-CfJGiCvs.js";import{m as Ne,a as $e,u as qe}from"./index-D5bIuBCX.js";import{U as be}from"./event-BB_Ol6Sd.js";import{u as We,f as Xe,G}from"./ConfigProvider-Br84NlF7.js";import{u as ce}from"./index-DH2w0SzE.js";import{b as le}from"./style-c1qAcfu9.js";import{i as Re}from"./index-CmBD9wVo.js";import{u as ge}from"./index-DmfABaPz.js";import{F as Ue}from"./index-B1PxvDbZ.js";import{y as Ye}from"./index-C3gUrHC2.js";import{c as Ke}from"./refs-BXlkjTcd.js";import{G as P}from"./index-1xDgUv1h.js";import"./aria-BUADUvnR.js";import"./error-Cq9Fpw4b.js";import"./vnode-Bc34_Ya7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-fhkPmQjX.js";import"./_arrayPush-BhjrZnJY.js";const He=(e,o,i,l)=>{let p={offsetX:0,offsetY:0};const n=z=>{const c=z.clientX,S=z.clientY,{offsetX:g,offsetY:f}=p,b=e.value.getBoundingClientRect(),k=b.left,h=b.top,A=b.width,W=b.height,s=document.documentElement.clientWidth,L=document.documentElement.clientHeight,B=-k+g,j=-h+f,_=s-k-A+g,ee=L-h-W+f,O=T=>{let u=g+T.clientX-c,E=f+T.clientY-S;l?.value||(u=Math.min(Math.max(u,B),_),E=Math.min(Math.max(E,j),ee)),p={offsetX:u,offsetY:E},e.value&&(e.value.style.transform=`translate(${le(u)}, ${le(E)})`)},N=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",N)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",N)},V=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",n)},m=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",n)},r=()=>{p={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return ue(()=>{De(()=>{i.value?V():m()})}),xe(()=>{m()}),{resetPosition:r}},ve=Symbol("dialogInjectionKey"),Ce=fe({fullscreen:Boolean,draggable:Boolean,overflow:{type:Boolean,default:!0},alignCenter:{type:Boolean,default:!1},sizeMode:{type:String,values:["default","fixed","adaptive"],default:"default"},title:{type:String,default:""},headerClass:String,bodyClass:String,footerClass:String,showClose:{type:Boolean,default:!0},width:{type:[String,Number]},ariaLevel:{type:String,default:"2"},footerButtons:{type:Array,default:()=>[]}}),Ze=e=>{const{sizeMode:o,width:i}=e;o==="fixed"&&(!i||i==="")&&console.warn('[g-dialog] When sizeMode is set to "fixed", width must be defined.')},Je={close:()=>!0},Qe=fe({...Ce,appendToBody:{type:Boolean,default:!1},appendTo:{type:de([String,Object]),default:"body"},beforeClose:{type:de(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,headerClass:String,bodyClass:String,footerClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!0},ariaLevel:{type:String,default:"2"}}),_e={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[be]:e=>Ne(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},eo=(e,o,{closeOnClickModal:i,closeOnPressEscape:l})=>{const n=Ve().emit,{nextZIndex:V}=We();let m="";const r=ce(),z=ce(),c=d(!1),S=d(!1),g=d(!1),f=d(e.zIndex??V()),b=D(()=>e.footerButtons?.slice(0,3)||[]),k=D(()=>b.value.length===3?"layout-dual-row":"layout-single-column");let h,A;const s=Xe("namespace","gui"),L=D(()=>{const v={},se=`--${s.value}-dialog`;return e.fullscreen||(e.top&&(v[`${se}-margin-top`]=e.top),e.width&&(v[`${se}-width`]=le(e.width))),v}),B=D(()=>e.alignCenter?{display:"flex"}:{});function j(){n("opened")}function _(){n("closed"),n(be,!1),e.destroyOnClose&&(g.value=!1)}function ee(){n("close")}function O(){A?.(),h?.(),e.openDelay&&e.openDelay>0?{stop:h}=ge(()=>E(),e.openDelay):E()}function N(){h?.(),A?.(),e.closeDelay&&e.closeDelay>0?{stop:A}=ge(()=>X(),e.closeDelay):X()}const T=()=>{e.showClose&&(e.beforeClose?e.beforeClose(X):X())};function u(){i.value&&T()}function E(){$e&&(c.value=!0)}function X(){c.value=!1}function t(){n("openAutoFocus")}function M(){n("closeAutoFocus")}function $(v){v.detail?.focusReason==="pointer"&&v.preventDefault()}e.lockScroll&&Le(c);function he(){l.value&&T()}return ie(()=>e.modelValue,v=>{v?(S.value=!1,O(),g.value=!0,f.value=Re(e.zIndex)?V():f.value++,ke(()=>{n("open"),o.value&&(o.value.parentElement.scrollTop=0,o.value.parentElement.scrollLeft=0,o.value.scrollTop=0)})):c.value&&N()}),ie(()=>e.fullscreen,v=>{o.value&&(v?(m=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=m)}),ue(()=>{e.modelValue&&(c.value=!0,g.value=!0,O())}),{afterEnter:j,afterLeave:_,beforeLeave:ee,handleClose:T,onModalClick:u,close:N,doClose:X,onOpenAutoFocus:t,onCloseAutoFocus:M,onCloseRequested:he,onFocusoutPrevented:$,titleId:r,bodyId:z,closed:S,style:L,overlayDialogStyle:B,rendered:g,visible:c,zIndex:f,displayButtons:b,buttonLayoutClass:k}},oo={key:0,class:"header-content"},ao=["id"],to=["aria-level"],ye=pe({__name:"dialog-content",props:Ce,emits:Je,setup(e,{expose:o,emit:i}){const l=e,p=i;Ze(l);const{dialogRef:n,headerRef:V,bodyId:m,ns:r,style:z,displayButtons:c,buttonLayoutClass:S}=ne(ve),{focusTrapRef:g}=ne(Fe,{focusTrapRef:n,onKeydown:()=>{}}),f=D(()=>{const s=l.fullscreen?"fullscreen":l.sizeMode||"default";return[r.b(),r.is("draggable",l.draggable),r.is("align-center",l.alignCenter),r.is(s)]}),b=Ke(g,n),k=D(()=>l.draggable&&!l.fullscreen),h=D(()=>l.overflow),{resetPosition:A}=He(n,n,k,h);o({resetPosition:A});const W=()=>{p("close")};return(s,L)=>(y(),I("div",{ref:a(b),class:C(f.value),style:me(a(z)),tabindex:"-1"},[s.showClose||s.$slots.header?(y(),I("header",{key:0,ref_key:"headerRef",ref:V,class:C([a(r).e("header"),s.headerClass])},[s.$slots.header?(y(),I("div",oo,[F(s.$slots,"header")])):q("",!0),s.showClose?(y(),I("button",{key:1,"aria-label":"Close",class:C(a(r).e("headerbtn")),type:"button",onClick:W},[ae(a(Ue),{name:"regular times",class:C(a(r).e("close"))},null,8,["class"])],2)):q("",!0)],2)):q("",!0),oe("div",{id:a(m),class:C([a(r).e("body"),s.bodyClass])},[oe("div",null,[s.$slots.image?(y(),I("div",{key:0,class:C(a(r).e("image"))},[F(s.$slots,"image")],2)):q("",!0),s.title?(y(),I("span",{key:1,class:C(a(r).e("title")),role:"heading","aria-level":s.ariaLevel},re(s.title),11,to)):q("",!0),oe("div",{class:C(a(r).e("content"))},[F(s.$slots,"default")],2)])],10,ao),oe("footer",{class:C([a(r).e("footer"),s.footerClass])},[F(s.$slots,"footer",{},()=>[l.footerButtons?.length?(y(),I("div",{key:0,class:C([a(r).e("footer-buttons"),a(S)])},[(y(!0),I(Ae,null,Be(a(c),(B,j)=>(y(),te(a(Ye),{key:j,variant:B.variant,full:"",onClick:B.onClick},{default:w(()=>[Ee(re(B.text),1)]),_:2},1032,["variant","onClick"]))),128))],2)):q("",!0)])],2)],6))}});ye.__docgenInfo={exportName:"default",displayName:"dialog-content",description:"",tags:{},expose:[{name:"resetPosition"}],slots:[{name:"header"},{name:"image"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dialog/src/dialog-content.vue"]};const lo=["aria-label","aria-labelledby","aria-describedby"],x=pe({__name:"dialog",props:Qe,emits:_e,setup(e,{expose:o,emit:i}){const l=e,p=qe("dialog"),n=d(),V=d(),m=d(),r=D(()=>l.showClose&&l.closeOnClickModal),z=D(()=>l.showClose&&l.closeOnPressEscape),{visible:c,titleId:S,bodyId:g,style:f,overlayDialogStyle:b,rendered:k,zIndex:h,afterEnter:A,afterLeave:W,beforeLeave:s,handleClose:L,onModalClick:B,onOpenAutoFocus:j,onCloseAutoFocus:_,onCloseRequested:ee,onFocusoutPrevented:O,displayButtons:N,buttonLayoutClass:T}=eo(l,n,{closeOnClickModal:r,closeOnPressEscape:z});Ie(ve,{dialogRef:n,headerRef:V,bodyId:g,ns:p,rendered:k,style:f,displayButtons:N,buttonLayoutClass:T});const u=Oe(B),E=D(()=>l.draggable&&!l.fullscreen);return o({visible:c,dialogContentRef:m,resetPosition:()=>{m.value?.resetPosition()}}),(t,M)=>(y(),te(a(Pe),{to:t.appendTo,disabled:t.appendTo!=="body"?!1:!t.appendToBody},{default:w(()=>[ae(we,{name:"dialog-fade",onAfterEnter:a(A),onAfterLeave:a(W),onBeforeLeave:a(s)},{default:w(()=>[ze(ae(a(je),{"custom-mask-event":"",mask:t.modal,"overlay-class":t.modalClass,"z-index":a(h)},{default:w(()=>[oe("div",{role:"dialog","aria-modal":"true","aria-label":t.title||void 0,"aria-labelledby":t.title?void 0:a(S),"aria-describedby":a(g),class:C(`${a(p).namespace.value}-overlay-dialog`),style:me(a(b)),onClick:M[0]||(M[0]=(...$)=>a(u).onClick&&a(u).onClick(...$)),onMousedown:M[1]||(M[1]=(...$)=>a(u).onMousedown&&a(u).onMousedown(...$)),onMouseup:M[2]||(M[2]=(...$)=>a(u).onMouseup&&a(u).onMouseup(...$))},[ae(a(Ge),{loop:"",trapped:a(c),"focus-start-el":"container",onFocusAfterTrapped:a(j),onFocusAfterReleased:a(_),onFocusoutPrevented:a(O),onReleaseRequested:a(ee)},{default:w(()=>[a(k)?(y(),te(ye,Se({key:0,ref_key:"dialogContentRef",ref:m},t.$attrs,{"align-center":t.alignCenter,draggable:E.value,overflow:t.overflow,fullscreen:t.fullscreen,"header-class":t.headerClass,"body-class":t.bodyClass,"footer-class":t.footerClass,"show-close":t.showClose,title:t.title,"aria-level":t.ariaLevel,width:t.width,"size-mode":t.sizeMode,"footer-buttons":t.footerButtons,onClose:a(L)}),Te({default:w(()=>[F(t.$slots,"default")]),_:2},[t.$slots.header?{name:"header",fn:w(()=>[F(t.$slots,"header")]),key:"0"}:void 0,t.$slots.image?{name:"image",fn:w(()=>[F(t.$slots,"image")]),key:"1"}:void 0,t.$slots.footer?{name:"footer",fn:w(()=>[F(t.$slots,"footer")]),key:"2"}:void 0]),1040,["align-center","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","width","size-mode","footer-buttons","onClose"])):q("",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,lo)]),_:3},8,["mask","overlay-class","z-index"]),[[Me,a(c)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});x.__docgenInfo={exportName:"default",displayName:"dialog",description:"",tags:{},expose:[{name:"visible",tags:[{title:"description",content:"whether the dialog is visible"}]},{name:"dialogContentRef"},{name:"resetPosition"}],slots:[{name:"header"},{name:"image"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dialog/src/dialog.vue"]};const so="1.1.4",Po={title:"Data/Dialog",component:x,argTypes:{modelValue:{control:"boolean",description:"Controla la visibilidad del dialog",table:{defaultValue:{summary:"false"}}},title:{control:"text",description:"Título del dialog",table:{defaultValue:{summary:""}}},width:{control:"text",description:"Ancho del dialog. Requiere size-mode='fixed'.",table:{defaultValue:{summary:"undefined"}}},sizeMode:{control:"select",options:["default","fixed","adaptive"],description:`Controla el comportamiento del ancho del dialog:
      - default: usa max-width predeterminado
      - fixed: usa width prop sin max-width
      - adaptive: se adapta al contenido con restricciones min/max`,table:{defaultValue:{summary:"default"}}},draggable:{control:"boolean",description:"Permite arrastrar el dialog. No compatible con fullscreen",table:{defaultValue:{summary:"false"}}},fullscreen:{control:"boolean",description:"El dialog ocupa toda la pantalla",table:{defaultValue:{summary:"false"}}},showClose:{control:"boolean",description:"Mostrar botón de cerrar",table:{defaultValue:{summary:"true"}}},alignCenter:{control:"boolean",description:"Alinear el dialog horizontal y verticalmente",table:{defaultValue:{summary:"true"}}},appendToBody:{control:"boolean",description:"Añadir el dialog directamente al body del documento",table:{defaultValue:{summary:"false"}}},headerClass:{control:"text",description:"Clases CSS personalizadas para el header",table:{defaultValue:{summary:""}}},bodyClass:{control:"text",description:"Clases CSS personalizadas para el body",table:{defaultValue:{summary:""}}},footerClass:{control:"text",description:"Clases CSS personalizadas para el footer",table:{defaultValue:{summary:""}}},ariaLevel:{control:"text",description:"Nivel de encabezado ARIA para el título",table:{defaultValue:{summary:"2"}}},closeOnClickModal:{control:"boolean",description:"Si el dialog se cierra al hacer clic en el overlay",table:{defaultValue:{summary:"true"}}},closeOnPressEscape:{control:"boolean",description:"Si el dialog se cierra al presionar ESC",table:{defaultValue:{summary:"true"}}},destroyOnClose:{control:"boolean",description:"Destruir el contenido del dialog cuando se cierra",table:{defaultValue:{summary:"false"}}},footerButtons:{control:"object",description:`Array de configuración para los botones del footer (máximo 3 botones). Cada botón debe tener:
      - text: Texto del botón
      - onClick: Función a ejecutar al hacer clic
      - variant: Variante del botón (primary/secondary/tertiary)`,table:{defaultValue:{summary:"[]"},type:{summary:"Array<{ text: string, onClick: () => void, variant: 'primary' | 'secondary' | 'tertiary' }>"}}},"onUpdate:modelValue":{description:"Se emite al actualizar la visibilidad del dialog",table:{category:"Eventos",type:{summary:"(value: boolean) => void"}}},onOpen:{description:"Se emite cuando el dialog se abre",table:{category:"Eventos",type:{summary:"() => void"}}},onOpened:{description:"Se emite cuando termina la animación de apertura del dialog",table:{category:"Eventos",type:{summary:"() => void"}}},onClose:{description:"Se emite cuando el dialog se cierra",table:{category:"Eventos",type:{summary:"() => void"}}},onClosed:{description:"Se emite cuando termina la animación de cierre del dialog",table:{category:"Eventos",type:{summary:"() => void"}}},default:{description:"Contenido principal del dialog",table:{category:"Slots",type:{summary:"slot"}}},header:{description:"Contenido personalizado para el encabezado del dialog",table:{category:"Slots",type:{summary:"slot"}}},footer:{description:"Contenido personalizado para el pie del dialog",table:{category:"Slots",type:{summary:"slot"}}},image:{description:"Slot para mostrar una imagen en la parte superior del dialog",table:{category:"Slots",type:{summary:"slot"}}}},parameters:{docs:{description:{component:`
# Dialog Component

El componente Dialog proporciona una ventana modal configurable para mostrar información y acciones.

> Versión actual: ${so}

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
      `}}}},io=e=>({components:{GDialog:x,GConfigProvider:G,GButton:P},setup(){const o=d(!1),i=()=>{o.value=!1};return{args:e,dialogVisible:o,handleClose:i,processFooterButtons:()=>!e.footerButtons||e.footerButtons.length===0?[{text:"Aceptar",onClick:i,variant:"primary"},{text:"Cancelar",onClick:()=>o.value=!1,variant:"secondary"}]:e.footerButtons.map(p=>({...p,onClick:()=>{o.value=!1}}))}},template:`
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
  `}),R=io.bind({});R.args={title:"Dialog Básico",showClose:!0,footerButtons:[{text:"Aceptar",onClick:()=>{},variant:"primary"},{text:"Cancelar",onClick:()=>{},variant:"secondary"}]};R.parameters={docs:{description:{story:"Dialog básico con contenido de texto y dos botones de acción."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const no=e=>({components:{GDialog:x,GConfigProvider:G,GButton:P},setup(){const o=d(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        append-to-body
        @close="handleClose"
      >
        <template #header>
          <h2 class="text-primary-txt text-6 font-semibold">Dialog con Imagen</h2>
        </template>
        <template #image>
            <img 
              src="https://placehold.co/112x112"
              alt="Imagen"
              class="rounded mt-xl"
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
  `}),U=no.bind({});U.args={showClose:!0,sizeMode:"default"};U.parameters={docs:{description:{story:"Dialog con imagen y botones configurados mediante la prop footerButtons."},source:{code:`
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
<\/script>`}}};const ro=e=>({components:{GDialog:x,GConfigProvider:G,GButton:P},setup(){const o=d(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),Y=ro.bind({});Y.args={title:"Mensaje Importante",showClose:!1,sizeMode:"default"};Y.parameters={docs:{description:{story:"Dialog sin botón de cerrar, con texto y un solo botón."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const co=e=>({components:{GDialog:x,GConfigProvider:G,GButton:P},setup(){const o=d(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),K=co.bind({});K.args={title:"Dialog con Ancho Personalizado",showClose:!0,width:"800",sizeMode:"fixed"};K.parameters={docs:{description:{story:"Dialog con ancho personalizado definido a 800px. Requiere size-mode='fixed'"},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const go=e=>({components:{GDialog:x,GConfigProvider:G,GButton:P},setup(){const o=d(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),H=go.bind({});H.args={title:"Dialog Adaptable",showClose:!0,sizeMode:"adaptive"};H.parameters={docs:{description:{story:"Dialog que se adapta al contenido, útil para imágenes grandes o contenido variable."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const uo=e=>({components:{GDialog:x,GConfigProvider:G,GButton:P},setup(){const o=d(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),Z=uo.bind({});Z.args={title:"Dialog con Botones",showClose:!0};Z.parameters={docs:{description:{story:"Dialog con dos botones."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const po=e=>({components:{GDialog:x,GConfigProvider:G,GButton:P},setup(){const o=d(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),J=po.bind({});J.args={title:"Dialog con Tres Botones",showClose:!0};J.parameters={docs:{description:{story:"Dialog con tres botones: dos en la primera fila y uno centrado abajo. En móviles, todos los botones se muestran en columna."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const mo=e=>({components:{GDialog:x,GConfigProvider:G,GButton:P},setup(){const o=d(!1),i=d(!1),l=d(!1);return{args:e,defaultDialogVisible:o,fixedDialogVisible:i,adaptiveDialogVisible:l,closeDefaultDialog:()=>{o.value=!1},closeFixedDialog:()=>{i.value=!1},closeAdaptiveDialog:()=>{l.value=!1}}},template:`
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
  `}),Q=mo.bind({});Q.args={showClose:!0};Q.parameters={docs:{description:{story:"Comparativa de los tres modos de tamaño disponibles: default, fixed y adaptive."},source:{code:`
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
</g-dialog>`,language:"html",type:"auto"}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => ({
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
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        append-to-body
        @close="handleClose"
      >
        <template #header>
          <h2 class="text-primary-txt text-6 font-semibold">Dialog con Imagen</h2>
        </template>
        <template #image>
            <img 
              src="https://placehold.co/112x112"
              alt="Imagen"
              class="rounded mt-xl"
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
})`,...U.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => ({
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
})`,...Y.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => ({
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
})`,...K.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => ({
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
})`,...H.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => ({
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
})`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => ({
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
})`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => ({
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
})`,...Q.parameters?.docs?.source}}};const Lo=["Basic","WithImage","NoCloseButton","CustomWidth","WithLargeImage","TwoButtonsStacked","ThreeButtonsLayout","SizeModeComparison"];export{R as Basic,K as CustomWidth,Y as NoCloseButton,Q as SizeModeComparison,J as ThreeButtonsLayout,Z as TwoButtonsStacked,U as WithImage,H as WithLargeImage,Lo as __namedExportsOrder,Po as default};
