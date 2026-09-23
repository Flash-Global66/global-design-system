import{l as ne,p as T,d as H,x as b,c as I,S as j,u as oe,o as C,y as G,i as D,R as ee,n as De,g as $,U as y,j as Z,f as Q,a as L,z as de,m as N,F as ge,r as g,V as ce,q as fe,w as v,b as S,W as Te,s as $e,X as Se,D as pe,Y as me,C as z,A as Ge,h as Re}from"./iframe-Dct5CHxr.js";import{Z as Fe,O as je,_ as Be,E as Ae,n as xe}from"./index-BpP4et0s.js";import{x as Oe}from"./index-Bx14T361.js";import{S as ze,Y as Me,M as Pe,x as Ke,C as Ve,r as Le,E as Ne,G as He,O as qe}from"./index-DalCjv79.js";import{a as Ye}from"./index-DxlLUiSm.js";import{E as m}from"./event.constant-LtAI3-H4.js";import{u as te,c as Ue}from"./useEmptyValues-BnYvcW4O.js";import{c as ve}from"./refs.util-D3l8TA3E.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{R as We}from"./index-1T7U7QlS.js";import{u as Je}from"./useId-MLHLvdkG.js";import{u as Xe}from"./useLocale-pH4k1Kvj.js";import{w as Ze,a as ye}from"./install.util-cBz1HN_T.js";import{c as be}from"./index-QAcBYSVr.js";import{G as we}from"./index-CC-LNghG.js";import{G as Qe}from"./index-XrXeeEoZ.js";import{G as he}from"./index-5OiSV4ne.js";import{G as Y}from"./ConfigProvider-7dg58IlU.js";import{a as _e,b as ue}from"./documentation-stories-DmJzCMmf.js";import"./preload-helper-Dch09mLN.js";import"./index-DWhPhD7W.js";import"./index-pMiYc9r3.js";import"./index-CZoNQBHQ.js";import"./index-BgdLHs-h.js";import"./index-GU5Cqqg3.js";const U=Symbol.for("gDropdown"),en=ne({trigger:Be.trigger,triggerKeys:{type:T(Array),default:()=>[m.enter,m.numpadEnter,m.space,m.down]},placement:{type:T(String),default:"bottom"},popperOptions:{type:T(Object),default:()=>({})},id:String,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:T([Number,String]),default:0},maxHeight:{type:T([Number,String]),default:""},popperClass:{type:String,default:""},actions:{type:T(Array),required:!0,default:()=>[]},disabled:Boolean,role:{type:String,values:je,default:"menu"},teleported:Fe.teleported,persistent:{type:Boolean,default:!0}}),Ce=ne({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,title:{type:String,default:"",required:!0},description:String,action:Function,icon:{type:String}}),nn=ne({onKeydown:{type:T(Function)}}),on=[m.down,m.pageDown,m.home],Ee=[m.up,m.pageUp,m.end],tn=[...on,...Ee],{GCollection:rn,GCollectionItem:an,COLLECTION_INJECTION_KEY:sn,COLLECTION_ITEM_INJECTION_KEY:ln}=ze("Dropdown"),dn=H({name:"GDropdownMenu",props:nn,setup(e){const n=te("dropdown"),{focusTrapRef:l,onKeydown:s}=b(Ye,void 0),{contentRef:p,role:d,triggerId:t}=b(U,void 0),{collectionRef:o,getItems:i}=b(sn,void 0),{rovingFocusGroupRef:w,rovingFocusGroupRootStyle:c,tabIndex:h,onBlur:E,onFocus:r,onMousedown:f}=b(Me,void 0),{collectionRef:k}=b(Pe,void 0),W=I(()=>[n.b("menu")]),A=ve(p,o,l,w,k),J=j(u=>{e.onKeydown?.(u)},u=>{const{currentTarget:X,code:R,target:x}=u;if(X.contains(x),m.tab===R&&u.stopImmediatePropagation(),u.preventDefault(),x!==oe(p)||!tn.includes(R))return;const O=i().filter(F=>!F.disabled).map(F=>F.ref);Ee.includes(R)&&O.reverse(),Ke(O)});return{rovingFocusGroupRootStyle:c,tabIndex:h,dropdownKls:W,role:d,triggerId:t,dropdownListWrapperRef:A,handleKeydown:u=>{J(u),s(u)},onBlur:E,onFocus:r,onMousedown:f}}}),cn=["role","aria-labelledby"];function pn(e,n,l,s,p,d){return C(),G("ul",{ref:e.dropdownListWrapperRef,class:$(e.dropdownKls),style:De(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:n[0]||(n[0]=(...t)=>e.onBlur&&e.onBlur(...t)),onFocus:n[1]||(n[1]=(...t)=>e.onFocus&&e.onFocus(...t)),onKeydown:n[2]||(n[2]=ee((...t)=>e.handleKeydown&&e.handleKeydown(...t),["self"])),onMousedown:n[3]||(n[3]=ee((...t)=>e.onMousedown&&e.onMousedown(...t),["self"]))},[D(e.$slots,"default")],46,cn)}const re=q(dn,[["render",pn]]),mn=H({name:"DropdownItemImpl",components:{GIconFont:We},props:Ce,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:n,attrs:l}){const s=te("dropdown"),{role:p}=b(U,void 0),{collectionItemRef:d}=b(ln,void 0),{collectionItemRef:t}=b(Ve,void 0),{rovingFocusGroupItemRef:o,tabIndex:i,handleFocus:w,handleKeydown:c,handleMousedown:h}=b(Le,void 0),E=ve(d,t,o),r=I(()=>p.value==="menu"?"menuitem":p.value==="navigation"?"link":"button"),f=j(k=>{if([m.enter,m.numpadEnter,m.space].includes(k.code))return k.preventDefault(),k.stopImmediatePropagation(),n("clickimpl",k),!0},c);return{ns:s,itemRef:E,dataset:{[Ne]:""},role:r,tabIndex:i,handleFocus:w,handleKeydown:f,handleMousedown:h,attrs:l}}}),un=["aria-disabled","tabindex","role","data-test"];function gn(e,n,l,s,p,d){const t=y("g-icon-font");return C(),G(ge,null,[e.divided?(C(),G("li",{key:0,role:"separator",class:$(e.ns.bem("menu","item","divided"))},null,2)):Z("",!0),Q("li",N({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,"data-test":e.attrs["data-test"]??`dropdown-item:${e.title}`,onClick:n[0]||(n[0]=o=>{e.action&&e.action?.(o),e.$emit("clickimpl",o)}),onFocus:n[1]||(n[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onKeydown:n[2]||(n[2]=ee((...o)=>e.handleKeydown&&e.handleKeydown(...o),["self"])),onMousedown:n[3]||(n[3]=(...o)=>e.handleMousedown&&e.handleMousedown(...o)),onPointermove:n[4]||(n[4]=o=>e.$emit("pointermove",o)),onPointerleave:n[5]||(n[5]=o=>e.$emit("pointerleave",o))}),[D(e.$slots,"default",{},()=>[e.icon?(C(),L(t,{key:0,name:e.icon,class:$(e.ns.bem("menu","item","icon"))},null,8,["name","class"])):Z("",!0),Q("div",{class:$(e.ns.bem("menu","item","content"))},[Q("span",{class:$(e.ns.bem("menu","item","title"))},de(e.title),3),e.description?(C(),G("span",{key:0,class:$(e.ns.bem("menu","item","description"))},de(e.description),3)):Z("",!0)],2)])],16,un)],64)}const fn=q(mn,[["render",gn]]),vn=()=>({gDropdown:b("gDropdown",{})}),yn=H({name:"GDropdownItem",components:{GDropdownCollectionItem:an,GRovingFocusItem:He,GDropdownItemImpl:fn},inheritAttrs:!1,props:Ce,emits:["pointermove","pointerleave","click"],setup(e,{emit:n,attrs:l}){const{gDropdown:s}=vn(),p=fe(),d=g(null),t=I(()=>oe(d)?.textContent??""),{onItemEnter:o,onItemLeave:i}=b(U,void 0),w=j(r=>(n("pointermove",r),r.defaultPrevented),ce(r=>{if(e.disabled){i(r);return}const f=r.currentTarget;f===document.activeElement||f.contains(document.activeElement)||(o(r),r.defaultPrevented||f?.focus())})),c=j(r=>(n("pointerleave",r),r.defaultPrevented),ce(i)),h=j(r=>{if(!e.disabled)return n("click",r),r.type!=="keydown"&&r.defaultPrevented},r=>{if(e.disabled){r.stopImmediatePropagation();return}s?.hideOnClick?.value&&s.handleClick?.(),s.commandHandler?.(e.command,p,r)}),E=I(()=>({...e,...l}));return{handleClick:h,handlePointerMove:w,handlePointerLeave:c,textContent:t,propsAndAttrs:E}}});function bn(e,n,l,s,p,d){const t=y("g-dropdown-item-impl"),o=y("g-roving-focus-item"),i=y("g-dropdown-collection-item");return C(),L(i,{disabled:e.disabled,"text-value":e.title??e.textContent},{default:v(()=>[S(o,{focusable:!e.disabled},{default:v(()=>[S(t,N(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:v(()=>[D(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}const ae=q(yn,[["render",bn]]),wn=H({name:"GDropdown",components:{GScrollbar:Oe,GDropdownCollection:rn,GDropdownMenu:re,GDropdownItem:ae,GTooltip:xe,GRovingFocusGroup:qe,GOnlyChild:Ae},props:en,emits:["visible-change","click","command"],setup(e,{emit:n}){const l=fe(),s=te("dropdown"),{t:p}=Xe(),d=g(),t=g(),o=g(),i=g(),w=g(null),c=g(null),h=g(!1),E=I(()=>({maxHeight:Ue(e.maxHeight)})),r=I(()=>Te(e.trigger)),f=Je().value,k=I(()=>e.id||f);$e([d,r],([a,Ie],[le])=>{le?.$el?.removeEventListener&&le.$el.removeEventListener("pointerenter",u),a?.$el?.removeEventListener&&a.$el.removeEventListener("pointerenter",u),a?.$el?.addEventListener&&Ie.includes("hover")&&a.$el.addEventListener("pointerenter",u)},{immediate:!0,flush:"post"}),Se(()=>{d.value?.$el?.removeEventListener&&d.value.$el.removeEventListener("pointerenter",u)});function W(){A()}function A(){o.value?.onClose()}function J(){o.value?.onOpen()}function ie(...a){n("command",...a)}function u(){d?.value?.$el?.focus()}function X(){}function R(){const a=oe(i);r.value.includes("hover")&&a&&z(()=>{a?.focus()}),c.value=null}function x(a){z(()=>{c.value=a})}function se(a){h.value||(a.preventDefault(),a.stopImmediatePropagation())}function O(){n("visible-change",!0)}function F(a){a?.type==="keydown"&&i?.value&&z(()=>{i?.value?.focus()})}function ke(){n("visible-change",!1)}return pe(U,{contentRef:i,role:I(()=>e.role),triggerId:k,isUsingKeyboard:h,onItemEnter:X,onItemLeave:R}),pe("gDropdown",{instance:l,handleClick:W,commandHandler:ie,trigger:me(e,"trigger"),hideOnClick:me(e,"hideOnClick")}),{t:p,ns:s,scrollbar:w,wrapStyle:E,triggerId:k,currentTabId:c,handleCurrentTabIdChange:x,handlerMainButtonClick:a=>{n("click",a)},handleEntryFocus:se,handleClose:A,handleOpen:J,handleBeforeShowTooltip:O,handleShowTooltip:F,handleBeforeHideTooltip:ke,onFocusAfterTrapped:a=>{a.preventDefault(),i?.value?.focus&&z(()=>{i.value?.focus({preventScroll:!0})})},popperRef:o,contentRef:i,triggeringElementRef:d,referenceElementRef:t,actions:I(()=>e.actions)}}});function hn(e,n,l,s,p,d){const t=y("g-dropdown-item"),o=y("g-dropdown-menu"),i=y("g-dropdown-collection"),w=y("g-roving-focus-group"),c=y("g-scrollbar"),h=y("g-only-child"),E=y("g-tooltip");return C(),G("div",{class:$([e.ns.b(),e.ns.is("disabled",e.disabled)])},[S(E,{ref:"popperRef",role:e.role,effect:"light","fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"is-component":"","hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":`${e.ns.e("popper")} ${e.popperClass??""}`,"reference-element":e.referenceElementRef?.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:e.persistent,onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},{content:v(()=>[S(c,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:v(()=>[D(e.$slots,"dropdown-additional-top"),S(w,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:v(()=>[S(i,null,{default:v(()=>[e.actions.length>0?(C(),L(o,{key:0},{default:v(()=>[(C(!0),G(ge,null,Ge(e.actions,(r,f)=>(C(),L(t,N({key:`action-${f}`},{ref_for:!0},r),Re({_:2},[e.$slots.option?{name:"default",fn:v(()=>[D(e.$slots,"option",N({ref_for:!0},r))]),key:"0"}:void 0]),1040))),128))]),_:3})):D(e.$slots,"dropdown",{key:1})]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"]),D(e.$slots,"dropdown-additional-bottom")]),_:3},8,["wrap-style","view-class"])]),default:v(()=>[S(h,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:v(()=>[D(e.$slots,"default")]),_:3},8,["id","tabindex"])]),_:3},8,["role","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","disabled","transition","teleported","persistent","onBeforeShow","onShow","onBeforeHide"])],2)}const Cn=q(wn,[["render",hn]]),B=Ze(Cn,{DropdownItem:ae,DropdownMenu:re});ye(ae);ye(re);const En="0.2.18",_={"@popperjs/core":"^2.11.6",vue:"^3.2.0"},Xn={title:"Data/Dropdown",component:B,parameters:{docs:{description:{component:`\`GDropdown\` - Componente que permite crear un menú desplegable con múltiples opciones y acciones.

Un elemento de interfaz de usuario que permite a los usuarios seleccionar una opción de una lista de opciones. Puede contener texto, iconos y otros elementos interactivos.

> La versión de este componente es \`${En}\`.

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
${_e(_)}

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
    icon: 'regular search',
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
}`},defaultValue:{summary:"[]"}}},trigger:{description:"Tipo de disparador del drawer",control:"select",options:["click","hover","contextmenu"],table:{category:"Comportamiento y Activación",type:{summary:"string"},defaultValue:{summary:"hover"}}},triggerKeys:{name:"trigger-keys",description:"Teclas de disparo del drawer",control:"array",table:{category:"Comportamiento y Activación",type:{summary:"string[]"},defaultValue:{summary:"[]"}}},hideOnClick:{name:"hide-on-click",description:"Ocultar al hacer clic en el drawer",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showTimeout:{name:"show-timeout",description:"Retraso para mostrar el drawer",control:"number",table:{category:"Comportamiento y Activación",type:{summary:"number"},defaultValue:{summary:"150"}}},hideTimeout:{name:"hide-timeout",description:"Retraso para ocultar el drawer",control:"number",table:{category:"Comportamiento y Activación",type:{summary:"number"},defaultValue:{summary:"150"}}},teleported:{description:"Teletransporta el dropdown al elemento append-to",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},persistent:{description:"Tooltip persistente",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"false"}}},command:{name:"command",description:"Se activa al ejecutar un comando en el drawer",table:{category:"Eventos y Métodos",type:{summary:"(...args: any[]) => void"}}},visibleChange:{name:"visible-change",description:"Se activa al cambiar la visibilidad del drawer",table:{category:"Eventos y Métodos",type:{summary:"(visible: boolean) => void"}}},handleClose:{name:"handle-close",description:"Método para cerrar el dropdown",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},handleOpen:{name:"handle-open",description:"Método para abrir el dropdown",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},popperOptions:{name:"popper-options",description:"Opciones de Popper.js",control:"object",table:{category:"Configuración Avanzada",type:{summary:"object"},defaultValue:{summary:"{}"}}},default:{description:"Disparador del dropdown",table:{category:"Slot",type:{summary:"Slot"}},control:!1}},args:{maxHeight:"100%",disabled:!1,placement:"bottom-start",trigger:"hover",triggerKeys:["enter"],hideOnClick:!0,showTimeout:150,hideTimeout:150,role:"menu",tabindex:0,popperOptions:{},teleported:!0,persistent:!1,actions:[{title:"Abrir",icon:"regular arrow-up-right-from-square",action:()=>{console.log("Abrir")}},{title:"Editar",icon:"regular pen",action:()=>{console.log("Editar")}},{title:"Eliminar",icon:"regular trash",action:()=>{console.log("Eliminar")}},{title:"Actualizar",icon:"regular arrows-rotate",disabled:!0,action:()=>{console.log("Actualizar")}}]}},M={name:"Básico",render:e=>({components:{GDropdown:B,GConfigProvider:Y,GIconButton:we},setup(){return{args:e}},template:`
      <g-config-provider>
        <g-dropdown v-bind="args">
          <g-icon-button icon="regular plus-circle" />
        </g-dropdown>
      </g-config-provider>
    `})},P={name:"Todos los tipos de disparadores",parameters:{docs:{description:{story:`Este ejemplo muestra cómo se ven los diferentes tipos de disparadores.
- Disparador de clic
- Disparador de desplazamiento
- Disparador de enfoque`}}},render:()=>({components:{GDropdown:B,GConfigProvider:Y,GRadioGroup:Qe,GTag:he},setup(){const e=g("click");return{actions:[{title:"Enviar correo",icon:"regular envelope",description:"Esta acción te permite enviar un correo electrónico",action:()=>{console.log("Enviar correo")},"data-test":"send-email"},{title:"Buscar",icon:"regular search",description:"Esta acción te permite buscar un elemento",action:()=>{console.log("Buscar")},"data-test":"search"},{title:"Exportar",icon:"regular arrow-up-from-bracket",description:"Esta acción te permite exportar un elemento",action:()=>{console.log("Exportar")},"data-test":"export"}],triggers:[{value:"click",label:"Click"},{value:"hover",label:"Hover"},{value:"contextmenu",label:"Context Menu"}],trigger:e}},template:`
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
    `})},K={name:"Manejo de la opción de comando",parameters:{docs:{description:{story:`Este ejemplo muestra cómo manejar el evento de comando.
- Se utiliza un botón para abrir el menú desplegable.
- Al hacer clic en una opción, se muestra un mensaje en la consola con el nombre de la opción seleccionada.`}}},render:()=>({components:{GDropdown:B,GConfigProvider:Y,GButton:be,GTag:he},setup(){const e=g("");return{actions:[{title:"Enviar correo",icon:"regular envelope",command:"send-email",description:"Esta acción te permite enviar un correo electrónico",action:()=>{console.log("Enviar correo")},"data-test":"send-email"},{title:"Buscar",icon:"regular search",command:"search",description:"Esta acción te permite buscar un elemento",action:()=>{console.log("Buscar")},"data-test":"search"},{title:"Exportar",icon:"regular arrow-up-from-bracket",command:"export",description:"Esta acción te permite exportar un elemento",action:()=>{console.log("Exportar")},"data-test":"export"}],handleCommand:s=>{e.value=s},commandClicked:e}},template:`
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
- Se utiliza un botón para cerrar el menú desplegable.`}}},render:()=>({components:{GDropdown:B,GConfigProvider:Y,GButton:be,GIconButton:we},setup(){const e=g(null),n=g([]),l=g(""),s=async()=>{try{return(await(await fetch("https://restcountries.com/v3.1/all?fields=name,flags")).json()).slice(0,25).map(c=>({icon:c.flags.svg,title:c.name.common,command:c.flags.svg}))}catch(t){return console.error("Error fetching data:",t),[]}};return{dropdownRef:e,handleVisibleChange:t=>{t&&n.value.length===0&&s().then(o=>{n.value=o})},countries:n,handleCommand:t=>{l.value=t},svgCurrentCountry:l}},template:`
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
    `})},Zn=["Basic","allTypesOfTriggers","commandEvent","dropdownMethods"];M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
        icon: 'regular search',
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
}`,...P.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
        icon: 'regular search',
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
}`,...K.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};export{M as Basic,Zn as __namedExportsOrder,P as allTypesOfTriggers,K as commandEvent,Xn as default,V as dropdownMethods};
