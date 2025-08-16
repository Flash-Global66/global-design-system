import{d as q,a as b,c as k,u as oe,x as G,e as C,s as $,a1 as ee,n as Re,l as D,m as _,k as Q,b as L,Z as y,y as ce,p as H,F as ge,r as f,g as fe,f as v,h as T,w as Be,C as je,E as de,V as pe,D as F,z as Ae,q as Me}from"./vue.esm-bundler-DNj4lB-B.js";import{s as Pe,G as ze,l as Fe,j as Oe,b as Ke}from"./index-DU2SjY3o.js";import{q as Ne}from"./index-C8CQkgZh.js";import{z as ve}from"./index-CaavzhHJ.js";import{S as Ve,Y as Le,M as He,k as qe,E as xe,$ as Ye,f as Ue,P as Je,a as We}from"./index-WhYFpXn2.js";import{a as Ze}from"./index-DwSrO8lq.js";import{o as ne,l as I,u as te,w as _e,C as ye}from"./install-B47IWttr.js";import{E as m}from"./aria-BUADUvnR.js";import{c as be}from"./refs-DjqKERfo.js";import{c as B,w as me}from"./event-Ds2lZ8Nv.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as Qe,G as Y}from"./ConfigProvider-Dyindn-M.js";import{u as Xe,c as eo}from"./index-CKHqQBpj.js";import{b as oo}from"./style-DaKCY8yC.js";import{y as we}from"./index-Dad15riJ.js";import{G as he}from"./index-CD74Um9H.js";import{G as no}from"./index-BlxIuNFu.js";import{G as Ce}from"./index-DTLKUGg1.js";import{a as to,b as ue}from"./documentation-stories-CcUs_BjN.js";import"./index-CP3_1Uby.js";import"./index-BkReybPT.js";import"./index-D13eYU9p.js";import"./index-DG2QIyoI.js";import"./_arrayPush-BERo1YoZ.js";import"./index-C250A6Bf.js";import"./index-Dr5vG_oW.js";import"./use-form-item-DrFQs5hU.js";import"./constants-Dnj8X3EN.js";import"./index-C0ZH0EVy.js";import"./error-Cq9Fpw4b.js";import"./event-HEVJa2N9.js";import"./index.es-2JMmQRgQ.js";import"./index-DdPf6Guz.js";import"./index-CBLwdtnY.js";const U=Symbol("gDropdown"),ro=ne({trigger:Fe.trigger,triggerKeys:{type:I(Array),default:()=>[m.enter,m.numpadEnter,m.space,m.down]},placement:{type:I(String),default:"bottom"},popperOptions:{type:I(Object),default:()=>({})},id:String,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:I([Number,String]),default:0},maxHeight:{type:I([Number,String]),default:""},popperClass:{type:String,default:""},actions:{type:I(Array),required:!0,default:()=>[]},disabled:Boolean,role:{type:String,values:ze,default:"menu"},teleported:Pe.teleported,persistent:{type:Boolean,default:!0}}),Ee=ne({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,title:{type:String,default:"",required:!0},description:String,action:Function,icon:{type:String}}),ao=ne({onKeydown:{type:I(Function)}}),io=[m.down,m.pageDown,m.home],ke=[m.up,m.pageUp,m.end],so=[...io,...ke],{GCollection:lo,GCollectionItem:co,COLLECTION_INJECTION_KEY:po,COLLECTION_ITEM_INJECTION_KEY:mo}=Ve("Dropdown"),Ie=q({name:"GDropdownMenu",props:ao,setup(e){const o=te("dropdown"),{focusTrapRef:l,onKeydown:s}=b(Ze,void 0),{contentRef:u,role:c,triggerId:t}=b(U,void 0),{collectionRef:n,getItems:i}=b(po,void 0),{rovingFocusGroupRef:w,rovingFocusGroupRootStyle:d,tabIndex:h,onBlur:E,onFocus:r,onMousedown:p}=b(Le,void 0),{collectionRef:A}=b(He,void 0),J=k(()=>[o.b("menu")]),M=be(u,n,l,w,A),W=B(g=>{e.onKeydown?.(g)},g=>{const{currentTarget:Z,code:S,target:P}=g;if(Z.contains(P),m.tab===S&&g.stopImmediatePropagation(),g.preventDefault(),P!==oe(u)||!so.includes(S))return;const z=i().filter(R=>!R.disabled).map(R=>R.ref);ke.includes(S)&&z.reverse(),qe(z)});return{rovingFocusGroupRootStyle:d,tabIndex:h,dropdownKls:J,role:c,triggerId:t,dropdownListWrapperRef:M,handleKeydown:g=>{W(g),s(g)},onBlur:E,onFocus:r,onMousedown:p}}}),uo=["role","aria-labelledby"];function go(e,o,l,s,u,c){return C(),G("ul",{ref:e.dropdownListWrapperRef,class:D(e.dropdownKls),style:Re(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...t)=>e.onBlur&&e.onBlur(...t)),onFocus:o[1]||(o[1]=(...t)=>e.onFocus&&e.onFocus(...t)),onKeydown:o[2]||(o[2]=ee((...t)=>e.handleKeydown&&e.handleKeydown(...t),["self"])),onMousedown:o[3]||(o[3]=ee((...t)=>e.onMousedown&&e.onMousedown(...t),["self"]))},[$(e.$slots,"default")],46,uo)}const re=x(Ie,[["render",go]]);Ie.__docgenInfo={displayName:"GDropdownMenu",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown-menu.vue"]};const De=q({name:"DropdownItemImpl",components:{GIconFont:ve},props:Ee,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const l=te("dropdown"),{role:s}=b(U,void 0),{collectionItemRef:u}=b(mo,void 0),{collectionItemRef:c}=b(Ye,void 0),{rovingFocusGroupItemRef:t,tabIndex:n,handleFocus:i,handleKeydown:w,handleMousedown:d}=b(Ue,void 0),h=be(u,c,t),E=k(()=>s.value==="menu"?"menuitem":s.value==="navigation"?"link":"button"),r=B(p=>{if([m.enter,m.numpadEnter,m.space].includes(p.code))return p.preventDefault(),p.stopImmediatePropagation(),o("clickimpl",p),!0},w);return{ns:l,itemRef:h,dataset:{[xe]:""},role:E,tabIndex:n,handleFocus:i,handleKeydown:r,handleMousedown:d}}}),fo=["aria-disabled","tabindex","role"];function vo(e,o,l,s,u,c){const t=y("g-icon-font");return C(),G(ge,null,[e.divided?(C(),G("li",{key:0,role:"separator",class:D(e.ns.bem("menu","item","divided"))},null,2)):_("",!0),Q("li",H({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=n=>{e.action&&e.action?.(n),e.$emit("clickimpl",n)}),onFocus:o[1]||(o[1]=(...n)=>e.handleFocus&&e.handleFocus(...n)),onKeydown:o[2]||(o[2]=ee((...n)=>e.handleKeydown&&e.handleKeydown(...n),["self"])),onMousedown:o[3]||(o[3]=(...n)=>e.handleMousedown&&e.handleMousedown(...n)),onPointermove:o[4]||(o[4]=n=>e.$emit("pointermove",n)),onPointerleave:o[5]||(o[5]=n=>e.$emit("pointerleave",n))}),[$(e.$slots,"default",{},()=>[e.icon?(C(),L(t,{key:0,name:e.icon,class:D(e.ns.bem("menu","item","icon"))},null,8,["name","class"])):_("",!0),Q("div",{class:D(e.ns.bem("menu","item","content"))},[Q("span",{class:D(e.ns.bem("menu","item","title"))},ce(e.title),3),e.description?(C(),G("span",{key:0,class:D(e.ns.bem("menu","item","description"))},ce(e.description),3)):_("",!0)],2)])],16,fo)],64)}const yo=x(De,[["render",vo]]);De.__docgenInfo={displayName:"DropdownItemImpl",exportName:"default",description:"",tags:{},events:[{name:"clickimpl"},{name:"pointermove"},{name:"pointerleave"},{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown-item-impl.vue"]};const bo=()=>({gDropdown:b("gDropdown",{})}),Te=q({name:"GDropdownItem",components:{GDropdownCollectionItem:co,GRovingFocusItem:Je,GDropdownItemImpl:yo},inheritAttrs:!1,props:Ee,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:l}){const{gDropdown:s}=bo(),u=fe(),c=f(null),t=k(()=>oe(c)?.textContent??""),{onItemEnter:n,onItemLeave:i}=b(U,void 0),w=B(r=>(o("pointermove",r),r.defaultPrevented),me(r=>{if(e.disabled){i(r);return}const p=r.currentTarget;p===document.activeElement||p.contains(document.activeElement)||(n(r),r.defaultPrevented||p?.focus())})),d=B(r=>(o("pointerleave",r),r.defaultPrevented),me(i)),h=B(r=>{if(!e.disabled)return o("click",r),r.type!=="keydown"&&r.defaultPrevented},r=>{if(e.disabled){r.stopImmediatePropagation();return}s?.hideOnClick?.value&&s.handleClick?.(),s.commandHandler?.(e.command,u,r)}),E=k(()=>({...e,...l}));return{handleClick:h,handlePointerMove:w,handlePointerLeave:d,textContent:t,propsAndAttrs:E}}});function wo(e,o,l,s,u,c){const t=y("g-dropdown-item-impl"),n=y("g-roving-focus-item"),i=y("g-dropdown-collection-item");return C(),L(i,{disabled:e.disabled,"text-value":e.title??e.textContent},{default:v(()=>[T(n,{focusable:!e.disabled},{default:v(()=>[T(t,H(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:v(()=>[$(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}const ae=x(Te,[["render",wo]]);Te.__docgenInfo={displayName:"GDropdownItem",exportName:"default",description:"",tags:{},events:[{name:"pointermove"},{name:"pointerleave"},{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown-item.vue"]};const Ge=q({name:"GDropdown",components:{GScrollbar:Ne,GDropdownCollection:lo,GDropdownMenu:re,GDropdownItem:ae,GTooltip:Ke,GRovingFocusGroup:We,GOnlyChild:Oe,GIconFont:ve},props:ro,emits:["visible-change","click","command"],setup(e,{emit:o}){const l=fe(),s=te("dropdown"),{t:u}=Qe(),c=f(),t=f(),n=f(),i=f(),w=f(null),d=f(null),h=f(!1),E=k(()=>({maxHeight:oo(e.maxHeight)})),r=k(()=>eo(e.trigger)),p=Xe().value,A=k(()=>e.id||p);Be([c,r],([a,Se],[le])=>{le?.$el?.removeEventListener&&le.$el.removeEventListener("pointerenter",g),a?.$el?.removeEventListener&&a.$el.removeEventListener("pointerenter",g),a?.$el?.addEventListener&&Se.includes("hover")&&a.$el.addEventListener("pointerenter",g)},{immediate:!0,flush:"post"}),je(()=>{c.value?.$el?.removeEventListener&&c.value.$el.removeEventListener("pointerenter",g)});function J(){M()}function M(){n.value?.onClose()}function W(){n.value?.onOpen()}function ie(...a){o("command",...a)}function g(){c?.value?.$el?.focus()}function Z(){}function S(){const a=oe(i);r.value.includes("hover")&&a&&F(()=>{a?.focus()}),d.value=null}function P(a){F(()=>{d.value=a})}function se(a){h.value||(a.preventDefault(),a.stopImmediatePropagation())}function z(){o("visible-change",!0)}function R(a){a?.type==="keydown"&&i?.value&&F(()=>{i?.value?.focus()})}function $e(){o("visible-change",!1)}return de(U,{contentRef:i,role:k(()=>e.role),triggerId:A,isUsingKeyboard:h,onItemEnter:Z,onItemLeave:S}),de("gDropdown",{instance:l,handleClick:J,commandHandler:ie,trigger:pe(e,"trigger"),hideOnClick:pe(e,"hideOnClick")}),{t:u,ns:s,scrollbar:w,wrapStyle:E,triggerId:A,currentTabId:d,handleCurrentTabIdChange:P,handlerMainButtonClick:a=>{o("click",a)},handleEntryFocus:se,handleClose:M,handleOpen:W,handleBeforeShowTooltip:z,handleShowTooltip:R,handleBeforeHideTooltip:$e,onFocusAfterTrapped:a=>{a.preventDefault(),i?.value?.focus&&F(()=>{i.value?.focus({preventScroll:!0})})},popperRef:n,contentRef:i,triggeringElementRef:c,referenceElementRef:t,actions:k(()=>e.actions)}}});function ho(e,o,l,s,u,c){const t=y("g-dropdown-item"),n=y("g-dropdown-menu"),i=y("g-dropdown-collection"),w=y("g-roving-focus-group"),d=y("g-scrollbar"),h=y("g-only-child"),E=y("g-tooltip");return C(),G("div",{class:D([e.ns.b(),e.ns.is("disabled",e.disabled)])},[T(E,{ref:"popperRef",role:e.role,effect:"light","fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"is-component":"","hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":`${e.ns.e("popper")} ${e.popperClass??""}`,"reference-element":e.referenceElementRef?.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:e.persistent,onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},{content:v(()=>[T(d,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:v(()=>[T(w,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:v(()=>[T(i,null,{default:v(()=>[e.actions.length>0?(C(),L(n,{key:0},{default:v(()=>[(C(!0),G(ge,null,Ae(e.actions,(r,p)=>(C(),L(t,H({key:`action-${p}`,ref_for:!0},r),Me({_:2},[e.$slots.option?{name:"default",fn:v(()=>[$(e.$slots,"option",H({ref_for:!0},r))]),key:"0"}:void 0]),1040))),128))]),_:3})):$(e.$slots,"dropdown",{key:1})]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),default:v(()=>[T(h,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:v(()=>[$(e.$slots,"default")]),_:3},8,["id","tabindex"])]),_:3},8,["role","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","disabled","transition","teleported","persistent","onBeforeShow","onShow","onBeforeHide"])],2)}const Co=x(Ge,[["render",ho]]);Ge.__docgenInfo={displayName:"GDropdown",exportName:"default",description:"",tags:{},events:[{name:"visible-change"},{name:"click"},{name:"command"}],slots:[{name:"option",scoped:!0,bindings:[]},{name:"dropdown"},{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown.vue"]};const j=_e(Co,{DropdownItem:ae,DropdownMenu:re});ye(ae);ye(re);const Eo="0.1.2",X={"@flash-global66/g-collection":"^0.1.1","@flash-global66/g-focus-trap":"^0.0.9","@flash-global66/g-icon-font":"^0.13.0","@flash-global66/g-popper":"^0.0.10","@flash-global66/g-roving-focus-group":"^0.1.1","@flash-global66/g-scrollbar":"^0.1.0","@flash-global66/g-slot":"^0.0.2","@flash-global66/g-tooltip":"^0.1.0","@popperjs/core":"^2.11.6","element-plus":"^2.9.0",vue:"^3.2.0"},an={title:"Data/Dropdown",component:j,parameters:{docs:{description:{component:`\`GDropdown\` - Componente que permite crear un menú desplegable con múltiples opciones y acciones.

Un elemento de interfaz de usuario que permite a los usuarios seleccionar una opción de una lista de opciones. Puede contener texto, iconos y otros elementos interactivos.

> La versión de este componente es \`${Eo}\`.

### Características principales:

- Múltiples tipos de disparadores (click, hover, focus).
- Múltiples tipos de contenido (texto, iconos, botones).
- Múltiples tipos de acciones (abrir, cerrar, ejecutar función).
- Soporte para slots personalizados.
- Soporte para eventos personalizados.
- Soporte para accesibilidad (ARIA).

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
${to(X)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${ue(X)}

# Dependencias externas
yarn add ${ue(X,!0)}
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
    }
  },
  {
    title: 'Buscar',
    icon: 'regular magnifying-glass',
    description: 'Esta acción te permite buscar un elemento',
    action: () => {
      console.log('Buscar')
    }
  },
  {
    title: 'Exportar',
    icon: 'regular arrow-up-from-bracket',
    description: 'Esta acción te permite exportar un elemento',
    action: () => {
      console.log('Exportar')
    }
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
}`},defaultValue:{summary:"[]"}}},trigger:{description:"Tipo de disparador del drawer",control:"select",options:["click","hover","contextmenu"],table:{category:"Comportamiento y Activación",type:{summary:"string"},defaultValue:{summary:"hover"}}},triggerKeys:{name:"trigger-keys",description:"Teclas de disparo del drawer",control:"array",table:{category:"Comportamiento y Activación",type:{summary:"string[]"},defaultValue:{summary:"[]"}}},hideOnClick:{name:"hide-on-click",description:"Ocultar al hacer clic en el drawer",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showTimeout:{name:"show-timeout",description:"Retraso para mostrar el drawer",control:"number",table:{category:"Comportamiento y Activación",type:{summary:"number"},defaultValue:{summary:"150"}}},hideTimeout:{name:"hide-timeout",description:"Retraso para ocultar el drawer",control:"number",table:{category:"Comportamiento y Activación",type:{summary:"number"},defaultValue:{summary:"150"}}},teleported:{description:"Teletransporta el dropdown al elemento append-to",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},persistent:{description:"Tooltip persistente",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"false"}}},command:{name:"command",description:"Se activa al ejecutar un comando en el drawer",table:{category:"Eventos y Métodos",type:{summary:"(...args: any[]) => void"}}},visibleChange:{name:"visible-change",description:"Se activa al cambiar la visibilidad del drawer",table:{category:"Eventos y Métodos",type:{summary:"(visible: boolean) => void"}}},handleClose:{name:"handle-close",description:"Método para cerrar el dropdown",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},handleOpen:{name:"handle-open",description:"Método para abrir el dropdown",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},popperOptions:{name:"popper-options",description:"Opciones de Popper.js",control:"object",table:{category:"Configuración Avanzada",type:{summary:"object"},defaultValue:{summary:"{}"}}},default:{description:"Disparador del dropdown",table:{category:"Slot",type:{summary:"Slot"}},control:!1}},args:{maxHeight:"100%",disabled:!1,placement:"bottom-start",trigger:"hover",triggerKeys:["enter"],hideOnClick:!0,showTimeout:150,hideTimeout:150,role:"menu",tabindex:0,popperOptions:{},teleported:!0,persistent:!1,actions:[{title:"Abrir",icon:"regular arrow-up-right-from-square",action:()=>{console.log("Abrir")}},{title:"Editar",icon:"regular pen",action:()=>{console.log("Editar")}},{title:"Eliminar",icon:"regular trash",action:()=>{console.log("Eliminar")}},{title:"Actualizar",icon:"regular arrows-rotate",disabled:!0,action:()=>{console.log("Actualizar")}}]}},O={name:"Básico",render:e=>({components:{GDropdown:j,GConfigProvider:Y,GIconButton:he},setup(){return{args:e}},template:`
      <g-config-provider>
        <g-dropdown v-bind="args">
          <g-icon-button icon="regular plus-circle" />
        </g-dropdown>
      </g-config-provider>
    `})},K={name:"Todos los tipos de disparadores",parameters:{docs:{description:{story:`Este ejemplo muestra cómo se ven los diferentes tipos de disparadores.
- Disparador de clic
- Disparador de desplazamiento
- Disparador de enfoque`}}},render:()=>({components:{GDropdown:j,GConfigProvider:Y,GRadioGroup:no,GTag:Ce},setup(){const e=f("click");return{actions:[{title:"Enviar correo",icon:"regular envelope",description:"Esta acción te permite enviar un correo electrónico",action:()=>{console.log("Enviar correo")}},{title:"Buscar",icon:"regular magnifying-glass",description:"Esta acción te permite buscar un elemento",action:()=>{console.log("Buscar")}},{title:"Exportar",icon:"regular arrow-up-from-bracket",description:"Esta acción te permite exportar un elemento",action:()=>{console.log("Exportar")}}],triggers:[{value:"click",label:"Click"},{value:"hover",label:"Hover"},{value:"contextmenu",label:"Context Menu"}],trigger:e}},template:`
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
- Al hacer clic en una opción, se muestra un mensaje en la consola con el nombre de la opción seleccionada.`}}},render:()=>({components:{GDropdown:j,GConfigProvider:Y,GButton:we,GTag:Ce},setup(){const e=f("");return{actions:[{title:"Enviar correo",icon:"regular envelope",command:"send-email",description:"Esta acción te permite enviar un correo electrónico",action:()=>{console.log("Enviar correo")}},{title:"Buscar",icon:"regular magnifying-glass",command:"search",description:"Esta acción te permite buscar un elemento",action:()=>{console.log("Buscar")}},{title:"Exportar",icon:"regular arrow-up-from-bracket",command:"export",description:"Esta acción te permite exportar un elemento",action:()=>{console.log("Exportar")}}],handleCommand:s=>{e.value=s},commandClicked:e}},template:`
      <g-config-provider>
        <div class="flex gap-4 w-full items-center justify-center flex-col">
          <g-dropdown trigger="click" :actions="actions" @command="handleCommand">
            <g-button type="primary" size="sm">Abrir menú</g-button>
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
- Se utiliza un botón para cerrar el menú desplegable.`}}},render:()=>({components:{GDropdown:j,GConfigProvider:Y,GButton:we,GIconButton:he},setup(){const e=f(null),o=f([]),l=f(""),s=async()=>{try{return(await(await fetch("https://restcountries.com/v3.1/all")).json()).slice(0,25).map(d=>({icon:d.flags.svg,title:d.name.common,command:d.flags.svg}))}catch(t){return console.error("Error fetching data:",t),[]}};return{dropdownRef:e,handleVisibleChange:t=>{t&&o.value.length===0&&s().then(n=>{o.value=n})},countries:o,handleCommand:t=>{l.value=t},svgCurrentCountry:l}},template:`
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
              placement="bottom-start"
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
        }
      }, {
        title: 'Buscar',
        icon: 'regular magnifying-glass',
        description: 'Esta acción te permite buscar un elemento',
        action: () => {
          console.log('Buscar');
        }
      }, {
        title: 'Exportar',
        icon: 'regular arrow-up-from-bracket',
        description: 'Esta acción te permite exportar un elemento',
        action: () => {
          console.log('Exportar');
        }
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
        }
      }, {
        title: 'Buscar',
        icon: 'regular magnifying-glass',
        command: 'search',
        description: 'Esta acción te permite buscar un elemento',
        action: () => {
          console.log('Buscar');
        }
      }, {
        title: 'Exportar',
        icon: 'regular arrow-up-from-bracket',
        command: 'export',
        description: 'Esta acción te permite exportar un elemento',
        action: () => {
          console.log('Exportar');
        }
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
          const response = await fetch('https://restcountries.com/v3.1/all');
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
              placement="bottom-start"
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
}`,...V.parameters?.docs?.source}}};const sn=["Basic","allTypesOfTriggers","commandEvent","dropdownMethods"];export{O as Basic,sn as __namedExportsOrder,K as allTypesOfTriggers,N as commandEvent,an as default,V as dropdownMethods};
