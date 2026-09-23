import{l as ce,k as Ce,p as le,r,c as f,s as ne,t as ye,q as he,C as De,d as ge,x as se,o as u,y as V,g,u as o,i as k,j as M,b as Q,f as X,z as ie,F as xe,A as Ve,a as ae,w as v,B as ke,n as ue,T as Ae,e as Be,m as Ee,h as ze,v as Se,D as we}from"./iframe-Dct5CHxr.js";import{i as Fe,a as Ie,L as Te,b as Me}from"./index-DxlLUiSm.js";import{a as Ge,b as Pe,G as Le,u as je}from"./index-B1cyEMyk.js";import{a as Oe,b as $e,c as qe,i as Ne,u as Re}from"./useEmptyValues-BnYvcW4O.js";import{U as pe}from"./event.constant-LtAI3-H4.js";import{u as re}from"./useId-MLHLvdkG.js";import{u as de}from"./index-pMiYc9r3.js";import{R as Ue}from"./index-1T7U7QlS.js";import{c as We}from"./index-QAcBYSVr.js";import{c as Ke}from"./refs.util-D3l8TA3E.js";import{G as A}from"./index-BeqF1NXI.js";import{G as B}from"./ConfigProvider-7dg58IlU.js";import"./preload-helper-Dch09mLN.js";import"./index-CZoNQBHQ.js";import"./install.util-cBz1HN_T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const me=Symbol.for("dialogInjectionKey"),fe=ce({fullscreen:Boolean,draggable:Boolean,overflow:{type:Boolean,default:!0},alignCenter:{type:Boolean,default:!1},sizeMode:{type:String,values:["default","fixed","adaptive"],default:"default"},title:{type:String,default:""},headerClass:String,bodyClass:String,footerClass:String,showClose:{type:Boolean,default:!0},width:{type:[String,Number]},ariaLevel:{type:String,default:"2"},footerButtons:{type:Array,default:()=>[]}}),Xe=e=>{const{sizeMode:a,width:l}=e;a==="fixed"&&(!l||l==="")&&console.warn('[g-dialog] When sizeMode is set to "fixed", width must be defined.')},Ze={close:()=>!0},He=ce({...fe,appendToBody:{type:Boolean,default:!1},appendTo:{type:le([String,Object]),default:"body"},beforeClose:{type:le(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,headerClass:String,bodyClass:String,footerClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!0},ariaLevel:{type:String,default:"2"}}),Je={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[pe]:e=>Ce(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Qe=(e,a,{closeOnClickModal:l,closeOnPressEscape:s})=>{const d=he().emit,{nextZIndex:b}=Oe();let G="";const i=re(),E=re(),p=r(!1),z=r(!1),h=r(!1),S=r(e.zIndex??b()),w=f(()=>e.footerButtons?.slice(0,3)||[]),U=f(()=>w.value.length===3?"layout-dual-row":"layout-single-column");let F,I;const n=$e("namespace","gui"),W=f(()=>{const c={},te=`--${n.value}-dialog`;return e.fullscreen||(e.top&&(c[`${te}-margin-top`]=e.top),e.width&&(c[`${te}-width`]=qe(e.width))),c}),D=f(()=>e.alignCenter?{display:"flex"}:{});function K(){d("opened")}function Y(){d("closed"),d(pe,!1),e.destroyOnClose&&(h.value=!1)}function _(){d("close")}function H(){I?.(),F?.(),e.openDelay&&e.openDelay>0?{stop:F}=de(()=>oe(),e.openDelay):oe()}function J(){F?.(),I?.(),e.closeDelay&&e.closeDelay>0?{stop:I}=de(()=>t(),e.closeDelay):t()}const m=()=>{e.showClose&&(e.beforeClose?e.beforeClose(t):t())};function ee(){l.value&&m()}function oe(){Ne&&(p.value=!0)}function t(){p.value=!1}function x(){d("openAutoFocus")}function T(){d("closeAutoFocus")}function be(c){c.detail?.focusReason==="pointer"&&c.preventDefault()}e.lockScroll&&Ge(p);function ve(){s.value&&m()}return ne(()=>e.modelValue,c=>{c?(z.value=!1,H(),h.value=!0,S.value=Fe(e.zIndex)?b():S.value++,De(()=>{d("open"),a.value&&(a.value.parentElement.scrollTop=0,a.value.parentElement.scrollLeft=0,a.value.scrollTop=0)})):p.value&&J()}),ne(()=>e.fullscreen,c=>{a.value&&(c?(G=a.value.style.transform,a.value.style.transform=""):a.value.style.transform=G)}),ye(()=>{e.modelValue&&(p.value=!0,h.value=!0,H())}),{afterEnter:K,afterLeave:Y,beforeLeave:_,handleClose:m,onModalClick:ee,close:J,doClose:t,onOpenAutoFocus:x,onCloseAutoFocus:T,onCloseRequested:ve,onFocusoutPrevented:be,titleId:i,bodyId:E,closed:z,style:W,overlayDialogStyle:D,rendered:h,visible:p,zIndex:S,displayButtons:w,buttonLayoutClass:U}},Ye={key:0,class:"header-content"},_e=["id"],eo=["aria-level"],oo=ge({__name:"dialog-content",props:fe,emits:Ze,setup(e,{expose:a,emit:l}){const s=e,y=l;Xe(s);const{dialogRef:d,headerRef:b,bodyId:G,ns:i,style:E,displayButtons:p,buttonLayoutClass:z}=se(me),{focusTrapRef:h}=se(Ie,{focusTrapRef:d,onKeydown:()=>{}}),S=f(()=>{const n=s.fullscreen?"fullscreen":s.sizeMode||"default";return[i.b(),i.is("draggable",s.draggable),i.is("align-center",s.alignCenter),i.is(n)]}),w=Ke(h,d),U=f(()=>s.draggable&&!s.fullscreen),F=f(()=>s.overflow),{resetPosition:I}=Pe(d,d,U,F);a({resetPosition:I});const Z=()=>{y("close")};return(n,W)=>(u(),V("div",{ref:o(w),class:g(S.value),style:ue(o(E)),tabindex:"-1"},[n.showClose||n.$slots.header?(u(),V("header",{key:0,ref_key:"headerRef",ref:b,class:g([o(i).e("header"),n.headerClass])},[n.$slots.header?(u(),V("div",Ye,[k(n.$slots,"header")])):M("",!0),n.showClose?(u(),V("button",{key:1,"aria-label":"Close",class:g(o(i).e("headerbtn")),type:"button",onClick:Z},[Q(o(Ue),{name:"regular times",class:g(o(i).e("close"))},null,8,["class"])],2)):M("",!0)],2)):M("",!0),X("div",{id:o(G),class:g([o(i).e("body"),n.bodyClass])},[X("div",null,[n.$slots.image?(u(),V("div",{key:0,class:g(o(i).e("image"))},[k(n.$slots,"image")],2)):M("",!0),n.title?(u(),V("span",{key:1,class:g(o(i).e("title")),role:"heading","aria-level":n.ariaLevel},ie(n.title),11,eo)):M("",!0),X("div",{class:g(o(i).e("content"))},[k(n.$slots,"default")],2)])],10,_e),X("footer",{class:g([o(i).e("footer"),n.footerClass])},[k(n.$slots,"footer",{},()=>[s.footerButtons?.length?(u(),V("div",{key:0,class:g([o(i).e("footer-buttons"),o(z)])},[(u(!0),V(xe,null,Ve(o(p),(D,K)=>(u(),ae(o(We),{key:K,variant:D.variant,disabled:D.disabled,full:"",onClick:D.onClick},{default:v(()=>[ke(ie(D.text),1)]),_:2},1032,["variant","disabled","onClick"]))),128))],2)):M("",!0)])],2)],6))}}),ao=["aria-label","aria-labelledby","aria-describedby"],C=ge({__name:"dialog",props:He,emits:Je,setup(e,{expose:a}){const l=e,s=Re("dialog"),y=r(),d=r(),b=r(),G=f(()=>l.showClose&&l.closeOnClickModal),i=f(()=>l.showClose&&l.closeOnPressEscape),{visible:E,titleId:p,bodyId:z,style:h,overlayDialogStyle:S,rendered:w,zIndex:U,afterEnter:F,afterLeave:I,beforeLeave:Z,handleClose:n,onModalClick:W,onOpenAutoFocus:D,onCloseAutoFocus:K,onCloseRequested:Y,onFocusoutPrevented:_,displayButtons:H,buttonLayoutClass:J}=Qe(l,y,{closeOnClickModal:G,closeOnPressEscape:i});we(me,{dialogRef:y,headerRef:d,bodyId:z,ns:s,rendered:w,style:h,displayButtons:H,buttonLayoutClass:J});const m=je(W),ee=f(()=>l.draggable&&!l.fullscreen);return a({visible:E,dialogContentRef:b,resetPosition:()=>{b.value?.resetPosition()}}),(t,x)=>(u(),ae(o(Me),{to:t.appendTo,disabled:t.appendTo!=="body"?!1:!t.appendToBody},{default:v(()=>[Q(Ae,{name:"dialog-fade",onAfterEnter:o(F),onAfterLeave:o(I),onBeforeLeave:o(Z)},{default:v(()=>[Be(Q(o(Le),{"custom-mask-event":"",mask:t.modal,"overlay-class":t.modalClass,"z-index":o(U)},{default:v(()=>[X("div",{role:"dialog","aria-modal":"true","aria-label":t.title||void 0,"aria-labelledby":t.title?void 0:o(p),"aria-describedby":o(z),class:g(`${o(s).namespace.value}-overlay-dialog`),style:ue(o(S)),onClick:x[0]||(x[0]=(...T)=>o(m).onClick&&o(m).onClick(...T)),onMousedown:x[1]||(x[1]=(...T)=>o(m).onMousedown&&o(m).onMousedown(...T)),onMouseup:x[2]||(x[2]=(...T)=>o(m).onMouseup&&o(m).onMouseup(...T))},[Q(o(Te),{loop:"",trapped:o(E),"focus-start-el":"container",onFocusAfterTrapped:o(D),onFocusAfterReleased:o(K),onFocusoutPrevented:o(_),onReleaseRequested:o(Y)},{default:v(()=>[o(w)?(u(),ae(oo,Ee({key:0,ref_key:"dialogContentRef",ref:b},t.$attrs,{"align-center":t.alignCenter,draggable:ee.value,overflow:t.overflow,fullscreen:t.fullscreen,"header-class":t.headerClass,"body-class":t.bodyClass,"footer-class":t.footerClass,"show-close":t.showClose,title:t.title,"aria-level":t.ariaLevel,width:t.width,"size-mode":t.sizeMode,"footer-buttons":t.footerButtons,onClose:o(n)}),ze({default:v(()=>[k(t.$slots,"default")]),_:2},[t.$slots.header?{name:"header",fn:v(()=>[k(t.$slots,"header")]),key:"0"}:void 0,t.$slots.image?{name:"image",fn:v(()=>[k(t.$slots,"image")]),key:"1"}:void 0,t.$slots.footer?{name:"footer",fn:v(()=>[k(t.$slots,"footer")]),key:"2"}:void 0]),1040,["align-center","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","width","size-mode","footer-buttons","onClose"])):M("",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,ao)]),_:3},8,["mask","overlay-class","z-index"]),[[Se,o(E)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}}),to="1.2.21",So={title:"Data/Dialog",component:C,argTypes:{modelValue:{control:"boolean",description:"Controla la visibilidad del dialog",table:{defaultValue:{summary:"false"}}},title:{control:"text",description:"Título del dialog",table:{defaultValue:{summary:""}}},width:{control:"text",description:"Ancho del dialog. Requiere size-mode='fixed'.",table:{defaultValue:{summary:"undefined"}}},sizeMode:{control:"select",options:["default","fixed","adaptive"],description:`Controla el comportamiento del ancho del dialog:
      - default: usa max-width predeterminado
      - fixed: usa width prop sin max-width
      - adaptive: se adapta al contenido con restricciones min/max`,table:{defaultValue:{summary:"default"}}},draggable:{control:"boolean",description:"Permite arrastrar el dialog. No compatible con fullscreen",table:{defaultValue:{summary:"false"}}},fullscreen:{control:"boolean",description:"El dialog ocupa toda la pantalla",table:{defaultValue:{summary:"false"}}},showClose:{control:"boolean",description:"Mostrar botón de cerrar",table:{defaultValue:{summary:"true"}}},alignCenter:{control:"boolean",description:"Alinear el dialog horizontal y verticalmente",table:{defaultValue:{summary:"true"}}},appendToBody:{control:"boolean",description:"Añadir el dialog directamente al body del documento",table:{defaultValue:{summary:"false"}}},headerClass:{control:"text",description:"Clases CSS personalizadas para el header",table:{defaultValue:{summary:""}}},bodyClass:{control:"text",description:"Clases CSS personalizadas para el body",table:{defaultValue:{summary:""}}},footerClass:{control:"text",description:"Clases CSS personalizadas para el footer",table:{defaultValue:{summary:""}}},ariaLevel:{control:"text",description:"Nivel de encabezado ARIA para el título",table:{defaultValue:{summary:"2"}}},closeOnClickModal:{control:"boolean",description:"Si el dialog se cierra al hacer clic en el overlay",table:{defaultValue:{summary:"true"}}},closeOnPressEscape:{control:"boolean",description:"Si el dialog se cierra al presionar ESC",table:{defaultValue:{summary:"true"}}},destroyOnClose:{control:"boolean",description:"Destruir el contenido del dialog cuando se cierra",table:{defaultValue:{summary:"false"}}},footerButtons:{control:"object",description:`Array de configuración para los botones del footer (máximo 3 botones). Cada botón debe tener:
      - text: Texto del botón
      - onClick: Función a ejecutar al hacer clic
      - variant: Variante del botón (primary/secondary/tertiary)`,table:{defaultValue:{summary:"[]"},type:{summary:"Array<{ text: string, onClick: () => void, variant: 'primary' | 'secondary' | 'tertiary' }>"}}},"onUpdate:modelValue":{description:"Se emite al actualizar la visibilidad del dialog",table:{category:"Eventos",type:{summary:"(value: boolean) => void"}}},onOpen:{description:"Se emite cuando el dialog se abre",table:{category:"Eventos",type:{summary:"() => void"}}},onOpened:{description:"Se emite cuando termina la animación de apertura del dialog",table:{category:"Eventos",type:{summary:"() => void"}}},onClose:{description:"Se emite cuando el dialog se cierra",table:{category:"Eventos",type:{summary:"() => void"}}},onClosed:{description:"Se emite cuando termina la animación de cierre del dialog",table:{category:"Eventos",type:{summary:"() => void"}}},default:{description:"Contenido principal del dialog",table:{category:"Slots",type:{summary:"slot"}}},header:{description:"Contenido personalizado para el encabezado del dialog",table:{category:"Slots",type:{summary:"slot"}}},footer:{description:"Contenido personalizado para el pie del dialog",table:{category:"Slots",type:{summary:"slot"}}},image:{description:"Slot para mostrar una imagen en la parte superior del dialog",table:{category:"Slots",type:{summary:"slot"}}}},parameters:{docs:{description:{component:`
# Dialog Component

El componente Dialog proporciona una ventana modal configurable para mostrar información y acciones.

> Versión actual: ${to}

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
      `}}}},lo=e=>({components:{GDialog:C,GConfigProvider:B,GButton:A},setup(){const a=r(!1),l=()=>{a.value=!1};return{args:e,dialogVisible:a,handleClose:l,processFooterButtons:()=>!e.footerButtons||e.footerButtons.length===0?[{text:"Aceptar",onClick:l,variant:"primary"},{text:"Cancelar",onClick:()=>a.value=!1,variant:"secondary"}]:e.footerButtons.map(y=>({...y,onClick:()=>{a.value=!1}}))}},template:`
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
  `}),P=lo.bind({});P.args={title:"Dialog Básico",showClose:!0,footerButtons:[{text:"Aceptar",onClick:()=>{},variant:"primary"},{text:"Cancelar",onClick:()=>{},variant:"secondary"}]};P.parameters={docs:{description:{story:"Dialog básico con contenido de texto y dos botones de acción."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const no=e=>({components:{GDialog:C,GConfigProvider:B,GButton:A},setup(){const a=r(!1);return{args:e,dialogVisible:a,handleClose:()=>{a.value=!1}}},template:`
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
  `}),L=no.bind({});L.args={showClose:!0,sizeMode:"default"};L.parameters={docs:{description:{story:"Dialog con imagen y botones configurados mediante la prop footerButtons."},source:{code:`
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
<\/script>`}}};const so=e=>({components:{GDialog:C,GConfigProvider:B,GButton:A},setup(){const a=r(!1);return{args:e,dialogVisible:a,handleClose:()=>{a.value=!1}}},template:`
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
  `}),j=so.bind({});j.args={title:"Mensaje Importante",showClose:!1,sizeMode:"default"};j.parameters={docs:{description:{story:"Dialog sin botón de cerrar, con texto y un solo botón."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const io=e=>({components:{GDialog:C,GConfigProvider:B,GButton:A},setup(){const a=r(!1);return{args:e,dialogVisible:a,handleClose:()=>{a.value=!1}}},template:`
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
  `}),O=io.bind({});O.args={title:"Dialog con Ancho Personalizado",showClose:!0,width:"800",sizeMode:"fixed"};O.parameters={docs:{description:{story:"Dialog con ancho personalizado definido a 800px. Requiere size-mode='fixed'"},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const ro=e=>({components:{GDialog:C,GConfigProvider:B,GButton:A},setup(){const a=r(!1);return{args:e,dialogVisible:a,handleClose:()=>{a.value=!1}}},template:`
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
  `}),$=ro.bind({});$.args={title:"Dialog Adaptable",showClose:!0,sizeMode:"adaptive"};$.parameters={docs:{description:{story:"Dialog que se adapta al contenido, útil para imágenes grandes o contenido variable."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const co=e=>({components:{GDialog:C,GConfigProvider:B,GButton:A},setup(){const a=r(!1);return{args:e,dialogVisible:a,handleClose:()=>{a.value=!1}}},template:`
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
  `}),q=co.bind({});q.args={title:"Dialog con Botones",showClose:!0};q.parameters={docs:{description:{story:"Dialog con dos botones."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const go=e=>({components:{GDialog:C,GConfigProvider:B,GButton:A},setup(){const a=r(!1);return{args:e,dialogVisible:a,handleClose:()=>{a.value=!1}}},template:`
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
  `}),N=go.bind({});N.args={title:"Dialog con Tres Botones",showClose:!0};N.parameters={docs:{description:{story:"Dialog con tres botones: dos en la primera fila y uno centrado abajo. En móviles, todos los botones se muestran en columna."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const uo=e=>({components:{GDialog:C,GConfigProvider:B,GButton:A},setup(){const a=r(!1),l=r(!1),s=r(!1);return{args:e,defaultDialogVisible:a,fixedDialogVisible:l,adaptiveDialogVisible:s,closeDefaultDialog:()=>{a.value=!1},closeFixedDialog:()=>{l.value=!1},closeAdaptiveDialog:()=>{s.value=!1}}},template:`
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
  `}),R=uo.bind({});R.args={showClose:!0};R.parameters={docs:{description:{story:"Comparativa de los tres modos de tamaño disponibles: default, fixed y adaptive."},source:{code:`
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
</g-dialog>`,language:"html",type:"auto"}}};const wo=["Basic","WithImage","NoCloseButton","CustomWidth","WithLargeImage","TwoButtonsStacked","ThreeButtonsLayout","SizeModeComparison"];P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => ({
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
})`,...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => ({
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
})`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => ({
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
})`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => ({
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
})`,...O.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => ({
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
})`,...$.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => ({
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
})`,...q.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => ({
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
})`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => ({
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
})`,...R.parameters?.docs?.source}}};export{P as Basic,O as CustomWidth,j as NoCloseButton,R as SizeModeComparison,N as ThreeButtonsLayout,q as TwoButtonsStacked,L as WithImage,$ as WithLargeImage,wo as __namedExportsOrder,So as default};
