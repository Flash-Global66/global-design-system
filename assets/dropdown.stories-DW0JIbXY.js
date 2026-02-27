import{d as H,a as y,c as I,u as oe,x as S,e as C,s as D,a1 as ee,n as Re,l as $,m as Q,k as X,b as L,Z as b,y as de,p as x,F as ge,r as g,g as fe,f as v,h as G,w as je,C as Be,E as ce,V as pe,D as F,z as Ae,q as Me}from"./vue.esm-bundler-C43JrhH2.js";import{s as ze,G as Pe,l as Fe,j as Oe,b as Ke}from"./index-Bjwq1aDC.js";import{q as Ne}from"./index-Dk612rNp.js";import{F as ve}from"./index-B1PxvDbZ.js";import{S as Ve,Y as Le,M as xe,k as He,E as qe,$ as Ye,f as Ue,P as Je,a as We}from"./index-rC-zqevB.js";import{a as Ze}from"./index-dphAcb1L.js";import{b as te,d as T,w as Qe,c as be}from"./install-CfJGiCvs.js";import{E as m}from"./aria-BUADUvnR.js";import{u as ne}from"./index-D5bIuBCX.js";import{c as ye}from"./refs-BXlkjTcd.js";import{c as B,w as me}from"./event-Ds2lZ8Nv.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as Xe,G as Y}from"./ConfigProvider-Br84NlF7.js";import{u as _e,c as eo}from"./index-DH2w0SzE.js";import{b as oo}from"./style-c1qAcfu9.js";import{y as we}from"./index-C3gUrHC2.js";import{G as he}from"./index-Cw62VlXt.js";import{G as to}from"./index-DGopGXg3.js";import{G as Ce}from"./index-D6FS4XlE.js";import{a as no,b as ue}from"./documentation-stories-DKOl0nGm.js";import"./index-BDKGuxIf.js";import"./index-DmfABaPz.js";import"./index-CMNLjZZP.js";import"./index-CdSB2Bdf.js";import"./_arrayPush-BhjrZnJY.js";import"./index-CmBD9wVo.js";import"./index-y9qm_QyA.js";import"./use-form-item-BgBoyOyI.js";import"./constants-Dnj8X3EN.js";import"./index-fhkPmQjX.js";import"./error-Cq9Fpw4b.js";import"./event-BB_Ol6Sd.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";const U=Symbol("gDropdown"),ro=te({trigger:Fe.trigger,triggerKeys:{type:T(Array),default:()=>[m.enter,m.numpadEnter,m.space,m.down]},placement:{type:T(String),default:"bottom"},popperOptions:{type:T(Object),default:()=>({})},id:String,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:T([Number,String]),default:0},maxHeight:{type:T([Number,String]),default:""},popperClass:{type:String,default:""},actions:{type:T(Array),required:!0,default:()=>[]},disabled:Boolean,role:{type:String,values:Pe,default:"menu"},teleported:ze.teleported,persistent:{type:Boolean,default:!0}}),Ee=te({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,title:{type:String,default:"",required:!0},description:String,action:Function,icon:{type:String}}),ao=te({onKeydown:{type:T(Function)}}),io=[m.down,m.pageDown,m.home],ke=[m.up,m.pageUp,m.end],so=[...io,...ke],{GCollection:lo,GCollectionItem:co,COLLECTION_INJECTION_KEY:po,COLLECTION_ITEM_INJECTION_KEY:mo}=Ve("Dropdown"),Ie=H({name:"GDropdownMenu",props:ao,setup(e){const o=ne("dropdown"),{focusTrapRef:l,onKeydown:s}=y(Ze,void 0),{contentRef:p,role:d,triggerId:n}=y(U,void 0),{collectionRef:t,getItems:i}=y(po,void 0),{rovingFocusGroupRef:w,rovingFocusGroupRootStyle:c,tabIndex:h,onBlur:E,onFocus:r,onMousedown:f}=y(Le,void 0),{collectionRef:k}=y(xe,void 0),J=I(()=>[o.b("menu")]),M=ye(p,t,l,w,k),W=B(u=>{e.onKeydown?.(u)},u=>{const{currentTarget:Z,code:R,target:z}=u;if(Z.contains(z),m.tab===R&&u.stopImmediatePropagation(),u.preventDefault(),z!==oe(p)||!so.includes(R))return;const P=i().filter(j=>!j.disabled).map(j=>j.ref);ke.includes(R)&&P.reverse(),He(P)});return{rovingFocusGroupRootStyle:c,tabIndex:h,dropdownKls:J,role:d,triggerId:n,dropdownListWrapperRef:M,handleKeydown:u=>{W(u),s(u)},onBlur:E,onFocus:r,onMousedown:f}}}),uo=["role","aria-labelledby"];function go(e,o,l,s,p,d){return C(),S("ul",{ref:e.dropdownListWrapperRef,class:$(e.dropdownKls),style:Re(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...n)=>e.onBlur&&e.onBlur(...n)),onFocus:o[1]||(o[1]=(...n)=>e.onFocus&&e.onFocus(...n)),onKeydown:o[2]||(o[2]=ee((...n)=>e.handleKeydown&&e.handleKeydown(...n),["self"])),onMousedown:o[3]||(o[3]=ee((...n)=>e.onMousedown&&e.onMousedown(...n),["self"]))},[D(e.$slots,"default")],46,uo)}const re=q(Ie,[["render",go]]);Ie.__docgenInfo={displayName:"GDropdownMenu",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown-menu.vue"]};const De=H({name:"DropdownItemImpl",components:{GIconFont:ve},props:Ee,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o,attrs:l}){const s=ne("dropdown"),{role:p}=y(U,void 0),{collectionItemRef:d}=y(mo,void 0),{collectionItemRef:n}=y(Ye,void 0),{rovingFocusGroupItemRef:t,tabIndex:i,handleFocus:w,handleKeydown:c,handleMousedown:h}=y(Ue,void 0),E=ye(d,n,t),r=I(()=>p.value==="menu"?"menuitem":p.value==="navigation"?"link":"button"),f=B(k=>{if([m.enter,m.numpadEnter,m.space].includes(k.code))return k.preventDefault(),k.stopImmediatePropagation(),o("clickimpl",k),!0},c);return{ns:s,itemRef:E,dataset:{[qe]:""},role:r,tabIndex:i,handleFocus:w,handleKeydown:f,handleMousedown:h,attrs:l}}}),fo=["aria-disabled","tabindex","role","data-test"];function vo(e,o,l,s,p,d){const n=b("g-icon-font");return C(),S(ge,null,[e.divided?(C(),S("li",{key:0,role:"separator",class:$(e.ns.bem("menu","item","divided"))},null,2)):Q("",!0),X("li",x({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,"data-test":e.attrs["data-test"]??`dropdown-item:${e.title}`,onClick:o[0]||(o[0]=t=>{e.action&&e.action?.(t),e.$emit("clickimpl",t)}),onFocus:o[1]||(o[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onKeydown:o[2]||(o[2]=ee((...t)=>e.handleKeydown&&e.handleKeydown(...t),["self"])),onMousedown:o[3]||(o[3]=(...t)=>e.handleMousedown&&e.handleMousedown(...t)),onPointermove:o[4]||(o[4]=t=>e.$emit("pointermove",t)),onPointerleave:o[5]||(o[5]=t=>e.$emit("pointerleave",t))}),[D(e.$slots,"default",{},()=>[e.icon?(C(),L(n,{key:0,name:e.icon,class:$(e.ns.bem("menu","item","icon"))},null,8,["name","class"])):Q("",!0),X("div",{class:$(e.ns.bem("menu","item","content"))},[X("span",{class:$(e.ns.bem("menu","item","title"))},de(e.title),3),e.description?(C(),S("span",{key:0,class:$(e.ns.bem("menu","item","description"))},de(e.description),3)):Q("",!0)],2)])],16,fo)],64)}const bo=q(De,[["render",vo]]);De.__docgenInfo={displayName:"DropdownItemImpl",exportName:"default",description:"",tags:{},events:[{name:"clickimpl"},{name:"pointermove"},{name:"pointerleave"},{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown-item-impl.vue"]};const yo=()=>({gDropdown:y("gDropdown",{})}),Te=H({name:"GDropdownItem",components:{GDropdownCollectionItem:co,GRovingFocusItem:Je,GDropdownItemImpl:bo},inheritAttrs:!1,props:Ee,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:l}){const{gDropdown:s}=yo(),p=fe(),d=g(null),n=I(()=>oe(d)?.textContent??""),{onItemEnter:t,onItemLeave:i}=y(U,void 0),w=B(r=>(o("pointermove",r),r.defaultPrevented),me(r=>{if(e.disabled){i(r);return}const f=r.currentTarget;f===document.activeElement||f.contains(document.activeElement)||(t(r),r.defaultPrevented||f?.focus())})),c=B(r=>(o("pointerleave",r),r.defaultPrevented),me(i)),h=B(r=>{if(!e.disabled)return o("click",r),r.type!=="keydown"&&r.defaultPrevented},r=>{if(e.disabled){r.stopImmediatePropagation();return}s?.hideOnClick?.value&&s.handleClick?.(),s.commandHandler?.(e.command,p,r)}),E=I(()=>({...e,...l}));return{handleClick:h,handlePointerMove:w,handlePointerLeave:c,textContent:n,propsAndAttrs:E}}});function wo(e,o,l,s,p,d){const n=b("g-dropdown-item-impl"),t=b("g-roving-focus-item"),i=b("g-dropdown-collection-item");return C(),L(i,{disabled:e.disabled,"text-value":e.title??e.textContent},{default:v(()=>[G(t,{focusable:!e.disabled},{default:v(()=>[G(n,x(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:v(()=>[D(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}const ae=q(Te,[["render",wo]]);Te.__docgenInfo={displayName:"GDropdownItem",exportName:"default",description:"",tags:{},events:[{name:"pointermove"},{name:"pointerleave"},{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown-item.vue"]};const $e=H({name:"GDropdown",components:{GScrollbar:Ne,GDropdownCollection:lo,GDropdownMenu:re,GDropdownItem:ae,GTooltip:Ke,GRovingFocusGroup:We,GOnlyChild:Oe,GIconFont:ve},props:ro,emits:["visible-change","click","command"],setup(e,{emit:o}){const l=fe(),s=ne("dropdown"),{t:p}=Xe(),d=g(),n=g(),t=g(),i=g(),w=g(null),c=g(null),h=g(!1),E=I(()=>({maxHeight:oo(e.maxHeight)})),r=I(()=>eo(e.trigger)),f=_e().value,k=I(()=>e.id||f);je([d,r],([a,Se],[le])=>{le?.$el?.removeEventListener&&le.$el.removeEventListener("pointerenter",u),a?.$el?.removeEventListener&&a.$el.removeEventListener("pointerenter",u),a?.$el?.addEventListener&&Se.includes("hover")&&a.$el.addEventListener("pointerenter",u)},{immediate:!0,flush:"post"}),Be(()=>{d.value?.$el?.removeEventListener&&d.value.$el.removeEventListener("pointerenter",u)});function J(){M()}function M(){t.value?.onClose()}function W(){t.value?.onOpen()}function ie(...a){o("command",...a)}function u(){d?.value?.$el?.focus()}function Z(){}function R(){const a=oe(i);r.value.includes("hover")&&a&&F(()=>{a?.focus()}),c.value=null}function z(a){F(()=>{c.value=a})}function se(a){h.value||(a.preventDefault(),a.stopImmediatePropagation())}function P(){o("visible-change",!0)}function j(a){a?.type==="keydown"&&i?.value&&F(()=>{i?.value?.focus()})}function Ge(){o("visible-change",!1)}return ce(U,{contentRef:i,role:I(()=>e.role),triggerId:k,isUsingKeyboard:h,onItemEnter:Z,onItemLeave:R}),ce("gDropdown",{instance:l,handleClick:J,commandHandler:ie,trigger:pe(e,"trigger"),hideOnClick:pe(e,"hideOnClick")}),{t:p,ns:s,scrollbar:w,wrapStyle:E,triggerId:k,currentTabId:c,handleCurrentTabIdChange:z,handlerMainButtonClick:a=>{o("click",a)},handleEntryFocus:se,handleClose:M,handleOpen:W,handleBeforeShowTooltip:P,handleShowTooltip:j,handleBeforeHideTooltip:Ge,onFocusAfterTrapped:a=>{a.preventDefault(),i?.value?.focus&&F(()=>{i.value?.focus({preventScroll:!0})})},popperRef:t,contentRef:i,triggeringElementRef:d,referenceElementRef:n,actions:I(()=>e.actions)}}});function ho(e,o,l,s,p,d){const n=b("g-dropdown-item"),t=b("g-dropdown-menu"),i=b("g-dropdown-collection"),w=b("g-roving-focus-group"),c=b("g-scrollbar"),h=b("g-only-child"),E=b("g-tooltip");return C(),S("div",{class:$([e.ns.b(),e.ns.is("disabled",e.disabled)])},[G(E,{ref:"popperRef",role:e.role,effect:"light","fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"is-component":"","hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":`${e.ns.e("popper")} ${e.popperClass??""}`,"reference-element":e.referenceElementRef?.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:e.persistent,onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},{content:v(()=>[G(c,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:v(()=>[D(e.$slots,"dropdown-additional-top"),G(w,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:v(()=>[G(i,null,{default:v(()=>[e.actions.length>0?(C(),L(t,{key:0},{default:v(()=>[(C(!0),S(ge,null,Ae(e.actions,(r,f)=>(C(),L(n,x({key:`action-${f}`},{ref_for:!0},r),Me({_:2},[e.$slots.option?{name:"default",fn:v(()=>[D(e.$slots,"option",x({ref_for:!0},r))]),key:"0"}:void 0]),1040))),128))]),_:3})):D(e.$slots,"dropdown",{key:1})]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"]),D(e.$slots,"dropdown-additional-bottom")]),_:3},8,["wrap-style","view-class"])]),default:v(()=>[G(h,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:v(()=>[D(e.$slots,"default")]),_:3},8,["id","tabindex"])]),_:3},8,["role","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","disabled","transition","teleported","persistent","onBeforeShow","onShow","onBeforeHide"])],2)}const Co=q($e,[["render",ho]]);$e.__docgenInfo={displayName:"GDropdown",exportName:"default",description:"",tags:{},events:[{name:"visible-change"},{name:"click"},{name:"command"}],slots:[{name:"dropdown-additional-top"},{name:"option",scoped:!0,bindings:[]},{name:"dropdown"},{name:"dropdown-additional-bottom"},{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown.vue"]};const A=Qe(Co,{DropdownItem:ae,DropdownMenu:re});be(ae);be(re);const Eo="0.1.4",_={"@flash-global66/g-collection":"^0.1.1","@flash-global66/g-focus-trap":"^0.0.9","@flash-global66/g-icon-font":"^0.13.0","@flash-global66/g-popper":"^0.0.10","@flash-global66/g-roving-focus-group":"^0.1.1","@flash-global66/g-scrollbar":"^0.1.0","@flash-global66/g-slot":"^0.0.2","@flash-global66/g-tooltip":"^0.1.0","@popperjs/core":"^2.11.6","element-plus":"^2.9.0",vue:"^3.2.0"},it={title:"Data/Dropdown",component:A,parameters:{docs:{description:{component:`\`GDropdown\` - Componente que permite crear un menú desplegable con múltiples opciones y acciones.

Un elemento de interfaz de usuario que permite a los usuarios seleccionar una opción de una lista de opciones. Puede contener texto, iconos y otros elementos interactivos.

> La versión de este componente es \`${Eo}\`.

### Características principales:

- Múltiples tipos de disparadores (click, hover, focus).
- Múltiples tipos de contenido (texto, iconos, botones).
- Múltiples tipos de acciones (abrir, cerrar, ejecutar función).
- Soporte para slots personalizados.
- Soporte para eventos personalizados.
- Soporte para accesibilidad (ARIA).
- Soporte para datos de prueba por item y global (data-test).

### Instalación

\`\`\`bash
yarn add @flash-global66/g-dropdown
\`\`\`

### Importación básica

\`\`\`typescript
# importar donde se va a utilizar
import { GDropdown, type actionType } from '@flash-global66/g-dropdown'

# recomendado importar en los estilos globales
import '@flash-global66/g-dropdown/styles.scss'
\`\`\`

### Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${no(_)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${ue(_)}

# Dependencias externas
yarn add ${ue(_,!0)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<template>
  <g-dropdown :actions="actions" class="pt-6">
    <g-tag type="success" size="sm">
      Ejemplo de Dropdown
    </g-tag>
  </g-dropdown>
</template>

<script setup>
const actions: actionType[] = [
  {
    title: 'Enviar correo',
    icon: 'regular envelope',
    description: 'Esta acción te permite enviar un correo electrónico',
    action: () => {
      console.log('Enviar correo')
    },
    'data-test': 'action:send-email'
  },
  {
    title: 'Buscar',
    icon: 'regular magnifying-glass',
    description: 'Esta acción te permite buscar un elemento',
    action: () => {
      console.log('Buscar')
    },
    'data-test': 'action:search'
  },
  {
    title: 'Exportar',
    icon: 'regular arrow-up-from-bracket',
    description: 'Esta acción te permite exportar un elemento',
    action: () => {
      console.log('Exportar')
    },
    'data-test': 'action:export'
  }
]
<\/script>
\`\`\`
`}}},argTypes:{maxHeight:{name:"max-height",description:"Altura máxima del drawer",control:"text",table:{category:"Apariencia y Dimensiones",type:{summary:"string | number"},defaultValue:{summary:"100%"}}},placement:{name:"placement",description:"Ubicación del drawer",control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"],table:{category:"Apariencia y Dimensiones",type:{summary:"string"},defaultValue:{summary:"top"}}},role:{description:"Rol del drawer",control:"text",table:{category:"Apariencia y Dimensiones",type:{summary:"string"},defaultValue:{summary:"menu"}}},tabindex:{description:"Tabindex del drawer",control:"number",table:{category:"Apariencia y Dimensiones",type:{summary:"number"},defaultValue:{summary:"0"}}},disabled:{description:"Deshabilitar el drawer",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"false"}}},actions:{description:"Array de acciones personalizadas para el drawer",control:"object",table:{category:"Comportamiento y Activación",type:{summary:"actionType[]",detail:`
            type OptionType = {
  title: string
  icon?: string
  description?: string
  disabled?: boolean
  action?: () => void
  divider?: boolean
}`},defaultValue:{summary:"[]"}}},trigger:{description:"Tipo de disparador del drawer",control:"select",options:["click","hover","contextmenu"],table:{category:"Comportamiento y Activación",type:{summary:"string"},defaultValue:{summary:"hover"}}},triggerKeys:{name:"trigger-keys",description:"Teclas de disparo del drawer",control:"array",table:{category:"Comportamiento y Activación",type:{summary:"string[]"},defaultValue:{summary:"[]"}}},hideOnClick:{name:"hide-on-click",description:"Ocultar al hacer clic en el drawer",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showTimeout:{name:"show-timeout",description:"Retraso para mostrar el drawer",control:"number",table:{category:"Comportamiento y Activación",type:{summary:"number"},defaultValue:{summary:"150"}}},hideTimeout:{name:"hide-timeout",description:"Retraso para ocultar el drawer",control:"number",table:{category:"Comportamiento y Activación",type:{summary:"number"},defaultValue:{summary:"150"}}},teleported:{description:"Teletransporta el dropdown al elemento append-to",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},persistent:{description:"Tooltip persistente",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"false"}}},command:{name:"command",description:"Se activa al ejecutar un comando en el drawer",table:{category:"Eventos y Métodos",type:{summary:"(...args: any[]) => void"}}},visibleChange:{name:"visible-change",description:"Se activa al cambiar la visibilidad del drawer",table:{category:"Eventos y Métodos",type:{summary:"(visible: boolean) => void"}}},handleClose:{name:"handle-close",description:"Método para cerrar el dropdown",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},handleOpen:{name:"handle-open",description:"Método para abrir el dropdown",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},popperOptions:{name:"popper-options",description:"Opciones de Popper.js",control:"object",table:{category:"Configuración Avanzada",type:{summary:"object"},defaultValue:{summary:"{}"}}},default:{description:"Disparador del dropdown",table:{category:"Slot",type:{summary:"Slot"}},control:!1}},args:{maxHeight:"100%",disabled:!1,placement:"bottom-start",trigger:"hover",triggerKeys:["enter"],hideOnClick:!0,showTimeout:150,hideTimeout:150,role:"menu",tabindex:0,popperOptions:{},teleported:!0,persistent:!1,actions:[{title:"Abrir",icon:"regular arrow-up-right-from-square",action:()=>{console.log("Abrir")}},{title:"Editar",icon:"regular pen",action:()=>{console.log("Editar")}},{title:"Eliminar",icon:"regular trash",action:()=>{console.log("Eliminar")}},{title:"Actualizar",icon:"regular arrows-rotate",disabled:!0,action:()=>{console.log("Actualizar")}}]}},O={name:"Básico",render:e=>({components:{GDropdown:A,GConfigProvider:Y,GIconButton:he},setup(){return{args:e}},template:`
      <g-config-provider>
        <g-dropdown v-bind="args">
          <g-icon-button icon="regular plus-circle" />
        </g-dropdown>
      </g-config-provider>
    `})},K={name:"Todos los tipos de disparadores",parameters:{docs:{description:{story:`Este ejemplo muestra cómo se ven los diferentes tipos de disparadores.
- Disparador de clic
- Disparador de desplazamiento
- Disparador de enfoque`}}},render:()=>({components:{GDropdown:A,GConfigProvider:Y,GRadioGroup:to,GTag:Ce},setup(){const e=g("click");return{actions:[{title:"Enviar correo",icon:"regular envelope",description:"Esta acción te permite enviar un correo electrónico",action:()=>{console.log("Enviar correo")},"data-test":"send-email"},{title:"Buscar",icon:"regular magnifying-glass",description:"Esta acción te permite buscar un elemento",action:()=>{console.log("Buscar")},"data-test":"search"},{title:"Exportar",icon:"regular arrow-up-from-bracket",description:"Esta acción te permite exportar un elemento",action:()=>{console.log("Exportar")},"data-test":"export"}],triggers:[{value:"click",label:"Click"},{value:"hover",label:"Hover"},{value:"contextmenu",label:"Context Menu"}],trigger:e}},template:`
      <g-config-provider>
        <div class="flex gap-2 w-full items-center justify-center flex-col">
          <g-radio-group v-model="trigger" :options="triggers" />
          <div class="flex min-h-72 justify-center items-start">
            <g-dropdown :trigger="trigger" :actions="actions" class="pt-6">
              <g-tag type="success" size="sm">
                {{ trigger }}
              </g-tag>
            </g-dropdown>
          </div>
        </div>
      </g-config-provider>
    `})},N={name:"Manejo de la opción de comando",parameters:{docs:{description:{story:`Este ejemplo muestra cómo manejar el evento de comando.
- Se utiliza un botón para abrir el menú desplegable.
- Al hacer clic en una opción, se muestra un mensaje en la consola con el nombre de la opción seleccionada.`}}},render:()=>({components:{GDropdown:A,GConfigProvider:Y,GButton:we,GTag:Ce},setup(){const e=g("");return{actions:[{title:"Enviar correo",icon:"regular envelope",command:"send-email",description:"Esta acción te permite enviar un correo electrónico",action:()=>{console.log("Enviar correo")},"data-test":"send-email"},{title:"Buscar",icon:"regular magnifying-glass",command:"search",description:"Esta acción te permite buscar un elemento",action:()=>{console.log("Buscar")},"data-test":"search"},{title:"Exportar",icon:"regular arrow-up-from-bracket",command:"export",description:"Esta acción te permite exportar un elemento",action:()=>{console.log("Exportar")},"data-test":"export"}],handleCommand:s=>{e.value=s},commandClicked:e}},template:`
      <g-config-provider>
        <div class="flex gap-4 w-full items-center justify-center flex-col">
          <g-dropdown trigger="click" :actions="actions" @command="handleCommand">
            <g-button type="primary" size="sm">Abrir menú</g-button>
            <template #dropdown-additional-top>
              <div class="flex w-full justify-center items-center pt-4">
                <g-tag type="info" size="sm">
                  Información adicional arriba
                </g-tag>
              </div>
            </template>
            <template #dropdown-additional-bottom>
              <div class="flex w-full justify-center items-center pb-4">
                <g-tag type="info" size="sm">
                  Información adicional abajo
                </g-tag>
              </div>
            </template>
          </g-dropdown>
          <span class="text-2 text-primary-def font-medium flex gap-2 justify-center items-center">
            El comando que se ejecuto fue:
            <g-tag type="info" size="sm" v-if="commandClicked">
              {{ commandClicked }}
            </g-tag>
          </span>
        </div>

      </g-config-provider>
    `})},V={name:"Métodos del dropdown",parameters:{docs:{description:{story:`Este ejemplo muestra cómo usar los métodos del dropdown.

- Se utiliza un botón para abrir el menú desplegable.
- Se utiliza un botón para cerrar el menú desplegable.`}}},render:()=>({components:{GDropdown:A,GConfigProvider:Y,GButton:we,GIconButton:he},setup(){const e=g(null),o=g([]),l=g(""),s=async()=>{try{return(await(await fetch("https://restcountries.com/v3.1/all?fields=name,flags")).json()).slice(0,25).map(c=>({icon:c.flags.svg,title:c.name.common,command:c.flags.svg}))}catch(n){return console.error("Error fetching data:",n),[]}};return{dropdownRef:e,handleVisibleChange:n=>{n&&o.value.length===0&&s().then(t=>{o.value=t})},countries:o,handleCommand:n=>{l.value=n},svgCurrentCountry:l}},template:`
      <g-config-provider>
        <div class="flex gap-4 w-full items-center justify-center flex-col">
          <div class="flex gap-2">
            <g-button @click="$refs.dropdownRef?.handleOpen()" size="sm">Abrir</g-button>
            <g-button @click="$refs.dropdownRef?.handleClose()" size="sm" variant="secondary">Cerrar</g-button>
          </div>
          <div class="flex min-h-72 justify-center items-start">
            <g-dropdown 
              ref="dropdownRef" 
              trigger="click" 
              :actions="countries" 
              @visible-change="handleVisibleChange" 
              max-height="280px" 
              placement="bottom-end"
              class="pt-6"
              @command="handleCommand"
            >
              <template #default>
                <img class="w-[17.5px] h-[17.5px]  rounded-full object-cover" v-if="Boolean(svgCurrentCountry)" :src="svgCurrentCountry" />
                <g-icon-button v-else icon="regular globe" />
              </template>
              <template #option="{ title, icon }">
                <img class="w-8 h-8 rounded-full object-cover mr-4" :src="icon" />
                <div class="text-4 text-secondary-txt font-medium overflow-hidden text-ellipsis w-full">
                  {{ title }}
                </div>
              </template>
            </g-dropdown>
          </div>
        </div>
      </g-config-provider>
    `})};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  render: args => ({
    components: {
      GDropdown,
      GConfigProvider,
      GIconButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-dropdown v-bind="args">
          <g-icon-button icon="regular plus-circle" />
        </g-dropdown>
      </g-config-provider>
    \`
  })
}`,...O.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Todos los tipos de disparadores',
  parameters: {
    docs: {
      description: {
        story: \`Este ejemplo muestra cómo se ven los diferentes tipos de disparadores.
- Disparador de clic
- Disparador de desplazamiento
- Disparador de enfoque\`
      }
    }
  },
  render: () => ({
    components: {
      GDropdown,
      GConfigProvider,
      GRadioGroup,
      GTag
    },
    setup() {
      const trigger = ref<string>('click');
      const triggers = [{
        value: 'click',
        label: 'Click'
      }, {
        value: 'hover',
        label: 'Hover'
      }, {
        value: 'contextmenu',
        label: 'Context Menu'
      }];
      const actions: actionType[] = [{
        title: 'Enviar correo',
        icon: 'regular envelope',
        description: 'Esta acción te permite enviar un correo electrónico',
        action: () => {
          console.log('Enviar correo');
        },
        'data-test': 'send-email'
      }, {
        title: 'Buscar',
        icon: 'regular magnifying-glass',
        description: 'Esta acción te permite buscar un elemento',
        action: () => {
          console.log('Buscar');
        },
        'data-test': 'search'
      }, {
        title: 'Exportar',
        icon: 'regular arrow-up-from-bracket',
        description: 'Esta acción te permite exportar un elemento',
        action: () => {
          console.log('Exportar');
        },
        'data-test': 'export'
      }];
      return {
        actions,
        triggers,
        trigger
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex gap-2 w-full items-center justify-center flex-col">
          <g-radio-group v-model="trigger" :options="triggers" />
          <div class="flex min-h-72 justify-center items-start">
            <g-dropdown :trigger="trigger" :actions="actions" class="pt-6">
              <g-tag type="success" size="sm">
                {{ trigger }}
              </g-tag>
            </g-dropdown>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...K.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Manejo de la opción de comando',
  parameters: {
    docs: {
      description: {
        story: \`Este ejemplo muestra cómo manejar el evento de comando.
- Se utiliza un botón para abrir el menú desplegable.
- Al hacer clic en una opción, se muestra un mensaje en la consola con el nombre de la opción seleccionada.\`
      }
    }
  },
  render: () => ({
    components: {
      GDropdown,
      GConfigProvider,
      GButton,
      GTag
    },
    setup() {
      const commandClicked = ref<string>('');
      const actions: actionType[] = [{
        title: 'Enviar correo',
        icon: 'regular envelope',
        command: 'send-email',
        description: 'Esta acción te permite enviar un correo electrónico',
        action: () => {
          console.log('Enviar correo');
        },
        'data-test': 'send-email'
      }, {
        title: 'Buscar',
        icon: 'regular magnifying-glass',
        command: 'search',
        description: 'Esta acción te permite buscar un elemento',
        action: () => {
          console.log('Buscar');
        },
        'data-test': 'search'
      }, {
        title: 'Exportar',
        icon: 'regular arrow-up-from-bracket',
        command: 'export',
        description: 'Esta acción te permite exportar un elemento',
        action: () => {
          console.log('Exportar');
        },
        'data-test': 'export'
      }];
      const handleCommand = (command: string) => {
        commandClicked.value = command;
      };
      return {
        actions,
        handleCommand,
        commandClicked
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex gap-4 w-full items-center justify-center flex-col">
          <g-dropdown trigger="click" :actions="actions" @command="handleCommand">
            <g-button type="primary" size="sm">Abrir menú</g-button>
            <template #dropdown-additional-top>
              <div class="flex w-full justify-center items-center pt-4">
                <g-tag type="info" size="sm">
                  Información adicional arriba
                </g-tag>
              </div>
            </template>
            <template #dropdown-additional-bottom>
              <div class="flex w-full justify-center items-center pb-4">
                <g-tag type="info" size="sm">
                  Información adicional abajo
                </g-tag>
              </div>
            </template>
          </g-dropdown>
          <span class="text-2 text-primary-def font-medium flex gap-2 justify-center items-center">
            El comando que se ejecuto fue:
            <g-tag type="info" size="sm" v-if="commandClicked">
              {{ commandClicked }}
            </g-tag>
          </span>
        </div>

      </g-config-provider>
    \`
  })
}`,...N.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Métodos del dropdown',
  parameters: {
    docs: {
      description: {
        story: \`Este ejemplo muestra cómo usar los métodos del dropdown.

- Se utiliza un botón para abrir el menú desplegable.
- Se utiliza un botón para cerrar el menú desplegable.\`
      }
    }
  },
  render: () => ({
    components: {
      GDropdown,
      GConfigProvider,
      GButton,
      GIconButton
    },
    setup() {
      const dropdownRef = ref<GDropdownInstance | null>(null);
      const countries = ref<actionType[]>([]);
      const svgCurrentCountry = ref<string>('');
      const getCountries = async () => {
        try {
          const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
          const data = await response.json();
          const limitedData = data.slice(0, 25);
          const countries = limitedData.map(country => ({
            icon: country.flags.svg,
            title: country.name.common,
            command: country.flags.svg
          }));
          return countries;
        } catch (error) {
          console.error('Error fetching data:', error);
          return [];
        }
      };
      const handleVisibleChange = (visible: boolean) => {
        if (visible && countries.value.length === 0) {
          getCountries().then(data => {
            countries.value = data;
          });
        }
      };
      const handleCommand = (command: string) => {
        svgCurrentCountry.value = command;
      };
      return {
        dropdownRef,
        handleVisibleChange,
        countries,
        handleCommand,
        svgCurrentCountry
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex gap-4 w-full items-center justify-center flex-col">
          <div class="flex gap-2">
            <g-button @click="$refs.dropdownRef?.handleOpen()" size="sm">Abrir</g-button>
            <g-button @click="$refs.dropdownRef?.handleClose()" size="sm" variant="secondary">Cerrar</g-button>
          </div>
          <div class="flex min-h-72 justify-center items-start">
            <g-dropdown 
              ref="dropdownRef" 
              trigger="click" 
              :actions="countries" 
              @visible-change="handleVisibleChange" 
              max-height="280px" 
              placement="bottom-end"
              class="pt-6"
              @command="handleCommand"
            >
              <template #default>
                <img class="w-[17.5px] h-[17.5px]  rounded-full object-cover" v-if="Boolean(svgCurrentCountry)" :src="svgCurrentCountry" />
                <g-icon-button v-else icon="regular globe" />
              </template>
              <template #option="{ title, icon }">
                <img class="w-8 h-8 rounded-full object-cover mr-4" :src="icon" />
                <div class="text-4 text-secondary-txt font-medium overflow-hidden text-ellipsis w-full">
                  {{ title }}
                </div>
              </template>
            </g-dropdown>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...V.parameters?.docs?.source}}};const st=["Basic","allTypesOfTriggers","commandEvent","dropdownMethods"];export{O as Basic,st as __namedExportsOrder,K as allTypesOfTriggers,N as commandEvent,it as default,V as dropdownMethods};
