import{g as ye,r,c as f,w as le,o as he,A as De,d as ce,s as se,t as x,b as u,l as M,j as X,k as g,u as o,q as k,f as Q,x as ie,F as Ve,y as xe,a as ae,e as C,z as ke,n as ge,T as Ae,h as Be,m as Ee,p as ze,v as we,B as Se}from"./vue.esm-bundler-Deokl1F5.js";import{i as Ie,a as Te,L as Fe,b as Me}from"./index-C-KaQxZk.js";import{u as Ge,b as Pe,G as Le,a as je}from"./index-YJ08PnKj.js";import{u as Oe,a as Ne,b as $e,i as qe,c as Re}from"./useEmptyValues-S5EffpHc.js";import{b as ue,i as Ue,d as ne}from"./props.util-Dtwzmmnf.js";import{U as pe}from"./event.constant-LtAI3-H4.js";import{u as re}from"./index-iviVQk4X.js";import{u as de}from"./index-D9lthdDW.js";import{_ as We}from"./index-B-U0DsHd.js";import{c as Ke}from"./index-ygpgr_4h.js";import{c as Xe}from"./refs.util-Cv1vLSS5.js";import{G as A}from"./index-DplprqvC.js";import{G as B}from"./ConfigProvider-DiWOjIRd.js";import"./error.util-CmMZjXeT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const me=Symbol.for("dialogInjectionKey"),fe=ue({fullscreen:Boolean,draggable:Boolean,overflow:{type:Boolean,default:!0},alignCenter:{type:Boolean,default:!1},sizeMode:{type:String,values:["default","fixed","adaptive"],default:"default"},title:{type:String,default:""},headerClass:String,bodyClass:String,footerClass:String,showClose:{type:Boolean,default:!0},width:{type:[String,Number]},ariaLevel:{type:String,default:"2"},footerButtons:{type:Array,default:()=>[]}}),Ze=e=>{const{sizeMode:a,width:l}=e;a==="fixed"&&(!l||l==="")&&console.warn('[g-dialog] When sizeMode is set to "fixed", width must be defined.')},He={close:()=>!0},Je=ue({...fe,appendToBody:{type:Boolean,default:!1},appendTo:{type:ne([String,Object]),default:"body"},beforeClose:{type:ne(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,headerClass:String,bodyClass:String,footerClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!0},ariaLevel:{type:String,default:"2"}}),Qe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[pe]:e=>Ue(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ye=(e,a,{closeOnClickModal:l,closeOnPressEscape:i})=>{const d=ye().emit,{nextZIndex:v}=Oe();let G="";const n=re(),E=re(),p=r(!1),z=r(!1),h=r(!1),w=r(e.zIndex??v()),S=f(()=>e.footerButtons?.slice(0,3)||[]),U=f(()=>S.value.length===3?"layout-dual-row":"layout-single-column");let I,T;const s=Ne("namespace","gui"),W=f(()=>{const c={},te=`--${s.value}-dialog`;return e.fullscreen||(e.top&&(c[`${te}-margin-top`]=e.top),e.width&&(c[`${te}-width`]=$e(e.width))),c}),D=f(()=>e.alignCenter?{display:"flex"}:{});function K(){d("opened")}function Y(){d("closed"),d(pe,!1),e.destroyOnClose&&(h.value=!1)}function _(){d("close")}function H(){T?.(),I?.(),e.openDelay&&e.openDelay>0?{stop:I}=de(()=>oe(),e.openDelay):oe()}function J(){I?.(),T?.(),e.closeDelay&&e.closeDelay>0?{stop:T}=de(()=>t(),e.closeDelay):t()}const m=()=>{e.showClose&&(e.beforeClose?e.beforeClose(t):t())};function ee(){l.value&&m()}function oe(){qe&&(p.value=!0)}function t(){p.value=!1}function V(){d("openAutoFocus")}function F(){d("closeAutoFocus")}function ve(c){c.detail?.focusReason==="pointer"&&c.preventDefault()}e.lockScroll&&Ge(p);function Ce(){i.value&&m()}return le(()=>e.modelValue,c=>{c?(z.value=!1,H(),h.value=!0,w.value=Ie(e.zIndex)?v():w.value++,De(()=>{d("open"),a.value&&(a.value.parentElement.scrollTop=0,a.value.parentElement.scrollLeft=0,a.value.scrollTop=0)})):p.value&&J()}),le(()=>e.fullscreen,c=>{a.value&&(c?(G=a.value.style.transform,a.value.style.transform=""):a.value.style.transform=G)}),he(()=>{e.modelValue&&(p.value=!0,h.value=!0,H())}),{afterEnter:K,afterLeave:Y,beforeLeave:_,handleClose:m,onModalClick:ee,close:J,doClose:t,onOpenAutoFocus:V,onCloseAutoFocus:F,onCloseRequested:Ce,onFocusoutPrevented:ve,titleId:n,bodyId:E,closed:z,style:W,overlayDialogStyle:D,rendered:h,visible:p,zIndex:w,displayButtons:S,buttonLayoutClass:U}},_e={key:0,class:"header-content"},eo=["id"],oo=["aria-level"],be=ce({__name:"dialog-content",props:fe,emits:He,setup(e,{expose:a,emit:l}){const i=e,y=l;Ze(i);const{dialogRef:d,headerRef:v,bodyId:G,ns:n,style:E,displayButtons:p,buttonLayoutClass:z}=se(me),{focusTrapRef:h}=se(Te,{focusTrapRef:d,onKeydown:()=>{}}),w=f(()=>{const s=i.fullscreen?"fullscreen":i.sizeMode||"default";return[n.b(),n.is("draggable",i.draggable),n.is("align-center",i.alignCenter),n.is(s)]}),S=Xe(h,d),U=f(()=>i.draggable&&!i.fullscreen),I=f(()=>i.overflow),{resetPosition:T}=Pe(d,d,U,I);a({resetPosition:T});const Z=()=>{y("close")};return(s,W)=>(u(),x("div",{ref:o(S),class:g(w.value),style:ge(o(E)),tabindex:"-1"},[s.showClose||s.$slots.header?(u(),x("header",{key:0,ref_key:"headerRef",ref:v,class:g([o(n).e("header"),s.headerClass])},[s.$slots.header?(u(),x("div",_e,[k(s.$slots,"header")])):M("",!0),s.showClose?(u(),x("button",{key:1,"aria-label":"Close",class:g(o(n).e("headerbtn")),type:"button",onClick:Z},[Q(o(We),{name:"regular times",class:g(o(n).e("close"))},null,8,["class"])],2)):M("",!0)],2)):M("",!0),X("div",{id:o(G),class:g([o(n).e("body"),s.bodyClass])},[X("div",null,[s.$slots.image?(u(),x("div",{key:0,class:g(o(n).e("image"))},[k(s.$slots,"image")],2)):M("",!0),s.title?(u(),x("span",{key:1,class:g(o(n).e("title")),role:"heading","aria-level":s.ariaLevel},ie(s.title),11,oo)):M("",!0),X("div",{class:g(o(n).e("content"))},[k(s.$slots,"default")],2)])],10,eo),X("footer",{class:g([o(n).e("footer"),s.footerClass])},[k(s.$slots,"footer",{},()=>[i.footerButtons?.length?(u(),x("div",{key:0,class:g([o(n).e("footer-buttons"),o(z)])},[(u(!0),x(Ve,null,xe(o(p),(D,K)=>(u(),ae(o(Ke),{key:K,variant:D.variant,disabled:D.disabled,full:"",onClick:D.onClick},{default:C(()=>[ke(ie(D.text),1)]),_:2},1032,["variant","disabled","onClick"]))),128))],2)):M("",!0)])],2)],6))}});be.__docgenInfo={exportName:"default",displayName:"dialog-content",description:"",tags:{},expose:[{name:"resetPosition"}],slots:[{name:"header"},{name:"image"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dialog/src/dialog-content.vue"]};const ao=["aria-label","aria-labelledby","aria-describedby"],b=ce({__name:"dialog",props:Je,emits:Qe,setup(e,{expose:a}){const l=e,i=Re("dialog"),y=r(),d=r(),v=r(),G=f(()=>l.showClose&&l.closeOnClickModal),n=f(()=>l.showClose&&l.closeOnPressEscape),{visible:E,titleId:p,bodyId:z,style:h,overlayDialogStyle:w,rendered:S,zIndex:U,afterEnter:I,afterLeave:T,beforeLeave:Z,handleClose:s,onModalClick:W,onOpenAutoFocus:D,onCloseAutoFocus:K,onCloseRequested:Y,onFocusoutPrevented:_,displayButtons:H,buttonLayoutClass:J}=Ye(l,y,{closeOnClickModal:G,closeOnPressEscape:n});Se(me,{dialogRef:y,headerRef:d,bodyId:z,ns:i,rendered:S,style:h,displayButtons:H,buttonLayoutClass:J});const m=je(W),ee=f(()=>l.draggable&&!l.fullscreen);return a({visible:E,dialogContentRef:v,resetPosition:()=>{v.value?.resetPosition()}}),(t,V)=>(u(),ae(o(Me),{to:t.appendTo,disabled:t.appendTo!=="body"?!1:!t.appendToBody},{default:C(()=>[Q(Ae,{name:"dialog-fade",onAfterEnter:o(I),onAfterLeave:o(T),onBeforeLeave:o(Z)},{default:C(()=>[Be(Q(o(Le),{"custom-mask-event":"",mask:t.modal,"overlay-class":t.modalClass,"z-index":o(U)},{default:C(()=>[X("div",{role:"dialog","aria-modal":"true","aria-label":t.title||void 0,"aria-labelledby":t.title?void 0:o(p),"aria-describedby":o(z),class:g(`${o(i).namespace.value}-overlay-dialog`),style:ge(o(w)),onClick:V[0]||(V[0]=(...F)=>o(m).onClick&&o(m).onClick(...F)),onMousedown:V[1]||(V[1]=(...F)=>o(m).onMousedown&&o(m).onMousedown(...F)),onMouseup:V[2]||(V[2]=(...F)=>o(m).onMouseup&&o(m).onMouseup(...F))},[Q(o(Fe),{loop:"",trapped:o(E),"focus-start-el":"container",onFocusAfterTrapped:o(D),onFocusAfterReleased:o(K),onFocusoutPrevented:o(_),onReleaseRequested:o(Y)},{default:C(()=>[o(S)?(u(),ae(be,Ee({key:0,ref_key:"dialogContentRef",ref:v},t.$attrs,{"align-center":t.alignCenter,draggable:ee.value,overflow:t.overflow,fullscreen:t.fullscreen,"header-class":t.headerClass,"body-class":t.bodyClass,"footer-class":t.footerClass,"show-close":t.showClose,title:t.title,"aria-level":t.ariaLevel,width:t.width,"size-mode":t.sizeMode,"footer-buttons":t.footerButtons,onClose:o(s)}),ze({default:C(()=>[k(t.$slots,"default")]),_:2},[t.$slots.header?{name:"header",fn:C(()=>[k(t.$slots,"header")]),key:"0"}:void 0,t.$slots.image?{name:"image",fn:C(()=>[k(t.$slots,"image")]),key:"1"}:void 0,t.$slots.footer?{name:"footer",fn:C(()=>[k(t.$slots,"footer")]),key:"2"}:void 0]),1040,["align-center","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","width","size-mode","footer-buttons","onClose"])):M("",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,ao)]),_:3},8,["mask","overlay-class","z-index"]),[[we,o(E)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});b.__docgenInfo={exportName:"default",displayName:"dialog",description:"",tags:{},expose:[{name:"visible",tags:[{title:"description",content:"whether the dialog is visible"}]},{name:"dialogContentRef"},{name:"resetPosition"}],slots:[{name:"header"},{name:"image"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dialog/src/dialog.vue"]};const to="1.2.18",zo={title:"Data/Dialog",component:b,argTypes:{modelValue:{control:"boolean",description:"Controla la visibilidad del dialog",table:{defaultValue:{summary:"false"}}},title:{control:"text",description:"Título del dialog",table:{defaultValue:{summary:""}}},width:{control:"text",description:"Ancho del dialog. Requiere size-mode='fixed'.",table:{defaultValue:{summary:"undefined"}}},sizeMode:{control:"select",options:["default","fixed","adaptive"],description:`Controla el comportamiento del ancho del dialog:
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
      `}}}},lo=e=>({components:{GDialog:b,GConfigProvider:B,GButton:A},setup(){const a=r(!1),l=()=>{a.value=!1};return{args:e,dialogVisible:a,handleClose:l,processFooterButtons:()=>!e.footerButtons||e.footerButtons.length===0?[{text:"Aceptar",onClick:l,variant:"primary"},{text:"Cancelar",onClick:()=>a.value=!1,variant:"secondary"}]:e.footerButtons.map(y=>({...y,onClick:()=>{a.value=!1}}))}},template:`
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
<\/script>`,language:"html",type:"auto"}}};const so=e=>({components:{GDialog:b,GConfigProvider:B,GButton:A},setup(){const a=r(!1);return{args:e,dialogVisible:a,handleClose:()=>{a.value=!1}}},template:`
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
  `}),L=so.bind({});L.args={showClose:!0,sizeMode:"default"};L.parameters={docs:{description:{story:"Dialog con imagen y botones configurados mediante la prop footerButtons."},source:{code:`
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
<\/script>`}}};const io=e=>({components:{GDialog:b,GConfigProvider:B,GButton:A},setup(){const a=r(!1);return{args:e,dialogVisible:a,handleClose:()=>{a.value=!1}}},template:`
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
  `}),j=io.bind({});j.args={title:"Mensaje Importante",showClose:!1,sizeMode:"default"};j.parameters={docs:{description:{story:"Dialog sin botón de cerrar, con texto y un solo botón."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const no=e=>({components:{GDialog:b,GConfigProvider:B,GButton:A},setup(){const a=r(!1);return{args:e,dialogVisible:a,handleClose:()=>{a.value=!1}}},template:`
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
  `}),O=no.bind({});O.args={title:"Dialog con Ancho Personalizado",showClose:!0,width:"800",sizeMode:"fixed"};O.parameters={docs:{description:{story:"Dialog con ancho personalizado definido a 800px. Requiere size-mode='fixed'"},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const ro=e=>({components:{GDialog:b,GConfigProvider:B,GButton:A},setup(){const a=r(!1);return{args:e,dialogVisible:a,handleClose:()=>{a.value=!1}}},template:`
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
  `}),N=ro.bind({});N.args={title:"Dialog Adaptable",showClose:!0,sizeMode:"adaptive"};N.parameters={docs:{description:{story:"Dialog que se adapta al contenido, útil para imágenes grandes o contenido variable."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const co=e=>({components:{GDialog:b,GConfigProvider:B,GButton:A},setup(){const a=r(!1);return{args:e,dialogVisible:a,handleClose:()=>{a.value=!1}}},template:`
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
  `}),$=co.bind({});$.args={title:"Dialog con Botones",showClose:!0};$.parameters={docs:{description:{story:"Dialog con dos botones."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const go=e=>({components:{GDialog:b,GConfigProvider:B,GButton:A},setup(){const a=r(!1);return{args:e,dialogVisible:a,handleClose:()=>{a.value=!1}}},template:`
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
  `}),q=go.bind({});q.args={title:"Dialog con Tres Botones",showClose:!0};q.parameters={docs:{description:{story:"Dialog con tres botones: dos en la primera fila y uno centrado abajo. En móviles, todos los botones se muestran en columna."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const uo=e=>({components:{GDialog:b,GConfigProvider:B,GButton:A},setup(){const a=r(!1),l=r(!1),i=r(!1);return{args:e,defaultDialogVisible:a,fixedDialogVisible:l,adaptiveDialogVisible:i,closeDefaultDialog:()=>{a.value=!1},closeFixedDialog:()=>{l.value=!1},closeAdaptiveDialog:()=>{i.value=!1}}},template:`
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
</g-dialog>`,language:"html",type:"auto"}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => ({
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
})`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => ({
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
})`,...N.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => ({
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
})`,...q.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => ({
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
})`,...R.parameters?.docs?.source}}};const wo=["Basic","WithImage","NoCloseButton","CustomWidth","WithLargeImage","TwoButtonsStacked","ThreeButtonsLayout","SizeModeComparison"];export{P as Basic,O as CustomWidth,j as NoCloseButton,R as SizeModeComparison,q as ThreeButtonsLayout,$ as TwoButtonsStacked,L as WithImage,N as WithLargeImage,wo as __namedExportsOrder,zo as default};
