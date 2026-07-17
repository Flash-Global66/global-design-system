import{d as H,s as b,c as I,u as oe,t as S,b as C,q as D,N as ee,n as Se,k as $,l as Z,j as X,a as V,x as de,m as x,F as ge,O as y,r as g,g as fe,e as v,f as G,w as Re,P as je,B as ce,Q as pe,A as P,y as Be,p as Ae}from"./vue.esm-bundler-Deokl1F5.js";import{Z as Oe,O as Me,_ as ze,E as Pe,n as Fe}from"./index-CL9Y1TT6.js";import{x as Ne}from"./index-D9ZVf-UW.js";import{S as Ke,Y as Le,M as Ve,x as xe,E as He,C as qe,r as Ye,G as Ue,O as Je}from"./index-DR0bKhCG.js";import{a as We}from"./index-C-KaQxZk.js";import{b as te,d as T,c as B,w as me,e as Qe}from"./props.util-Dtwzmmnf.js";import{E as m}from"./event.constant-LtAI3-H4.js";import{c as ne,b as Ze}from"./useEmptyValues-S5EffpHc.js";import{c as ve}from"./refs.util-Cv1vLSS5.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as Xe}from"./index-B-U0DsHd.js";import{u as _e}from"./index-iviVQk4X.js";import{u as eo}from"./useLocale-DyTUnJYo.js";import{w as oo,a as ye}from"./error.util-CmMZjXeT.js";import{c as be}from"./index-ygpgr_4h.js";import{G as we}from"./index-BFEUnIyw.js";import{G as to}from"./index-CoXRUp5a.js";import{G as he}from"./index-Dby77y5h.js";import{G as Y}from"./ConfigProvider-DiWOjIRd.js";import{a as no,b as ue}from"./documentation-stories-ZyKnmB2F.js";import"./index-Cla1j_Lq.js";import"./index-D9lthdDW.js";import"./index-BmLAfq-y.js";import"./index-BXyPvuAD.js";const U=Symbol.for("gDropdown"),ro=te({trigger:ze.trigger,triggerKeys:{type:T(Array),default:()=>[m.enter,m.numpadEnter,m.space,m.down]},placement:{type:T(String),default:"bottom"},popperOptions:{type:T(Object),default:()=>({})},id:String,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:T([Number,String]),default:0},maxHeight:{type:T([Number,String]),default:""},popperClass:{type:String,default:""},actions:{type:T(Array),required:!0,default:()=>[]},disabled:Boolean,role:{type:String,values:Me,default:"menu"},teleported:Oe.teleported,persistent:{type:Boolean,default:!0}}),Ce=te({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,title:{type:String,default:"",required:!0},description:String,action:Function,icon:{type:String}}),ao=te({onKeydown:{type:T(Function)}}),io=[m.down,m.pageDown,m.home],Ee=[m.up,m.pageUp,m.end],so=[...io,...Ee],{GCollection:lo,GCollectionItem:co,COLLECTION_INJECTION_KEY:po,COLLECTION_ITEM_INJECTION_KEY:mo}=Ke("Dropdown"),ke=H({name:"GDropdownMenu",props:ao,setup(e){const o=ne("dropdown"),{focusTrapRef:l,onKeydown:s}=b(We,void 0),{contentRef:p,role:d,triggerId:n}=b(U,void 0),{collectionRef:t,getItems:i}=b(po,void 0),{rovingFocusGroupRef:w,rovingFocusGroupRootStyle:c,tabIndex:h,onBlur:E,onFocus:r,onMousedown:f}=b(Le,void 0),{collectionRef:k}=b(Ve,void 0),J=I(()=>[o.b("menu")]),O=ve(p,t,l,w,k),W=B(u=>{e.onKeydown?.(u)},u=>{const{currentTarget:Q,code:R,target:M}=u;if(Q.contains(M),m.tab===R&&u.stopImmediatePropagation(),u.preventDefault(),M!==oe(p)||!so.includes(R))return;const z=i().filter(j=>!j.disabled).map(j=>j.ref);Ee.includes(R)&&z.reverse(),xe(z)});return{rovingFocusGroupRootStyle:c,tabIndex:h,dropdownKls:J,role:d,triggerId:n,dropdownListWrapperRef:O,handleKeydown:u=>{W(u),s(u)},onBlur:E,onFocus:r,onMousedown:f}}}),uo=["role","aria-labelledby"];function go(e,o,l,s,p,d){return C(),S("ul",{ref:e.dropdownListWrapperRef,class:$(e.dropdownKls),style:Se(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...n)=>e.onBlur&&e.onBlur(...n)),onFocus:o[1]||(o[1]=(...n)=>e.onFocus&&e.onFocus(...n)),onKeydown:o[2]||(o[2]=ee((...n)=>e.handleKeydown&&e.handleKeydown(...n),["self"])),onMousedown:o[3]||(o[3]=ee((...n)=>e.onMousedown&&e.onMousedown(...n),["self"]))},[D(e.$slots,"default")],46,uo)}const re=q(ke,[["render",go]]);ke.__docgenInfo={displayName:"GDropdownMenu",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown-menu.vue"]};const Ie=H({name:"DropdownItemImpl",components:{GIconFont:Xe},props:Ce,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o,attrs:l}){const s=ne("dropdown"),{role:p}=b(U,void 0),{collectionItemRef:d}=b(mo,void 0),{collectionItemRef:n}=b(qe,void 0),{rovingFocusGroupItemRef:t,tabIndex:i,handleFocus:w,handleKeydown:c,handleMousedown:h}=b(Ye,void 0),E=ve(d,n,t),r=I(()=>p.value==="menu"?"menuitem":p.value==="navigation"?"link":"button"),f=B(k=>{if([m.enter,m.numpadEnter,m.space].includes(k.code))return k.preventDefault(),k.stopImmediatePropagation(),o("clickimpl",k),!0},c);return{ns:s,itemRef:E,dataset:{[He]:""},role:r,tabIndex:i,handleFocus:w,handleKeydown:f,handleMousedown:h,attrs:l}}}),fo=["aria-disabled","tabindex","role","data-test"];function vo(e,o,l,s,p,d){const n=y("g-icon-font");return C(),S(ge,null,[e.divided?(C(),S("li",{key:0,role:"separator",class:$(e.ns.bem("menu","item","divided"))},null,2)):Z("",!0),X("li",x({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,"data-test":e.attrs["data-test"]??`dropdown-item:${e.title}`,onClick:o[0]||(o[0]=t=>{e.action&&e.action?.(t),e.$emit("clickimpl",t)}),onFocus:o[1]||(o[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onKeydown:o[2]||(o[2]=ee((...t)=>e.handleKeydown&&e.handleKeydown(...t),["self"])),onMousedown:o[3]||(o[3]=(...t)=>e.handleMousedown&&e.handleMousedown(...t)),onPointermove:o[4]||(o[4]=t=>e.$emit("pointermove",t)),onPointerleave:o[5]||(o[5]=t=>e.$emit("pointerleave",t))}),[D(e.$slots,"default",{},()=>[e.icon?(C(),V(n,{key:0,name:e.icon,class:$(e.ns.bem("menu","item","icon"))},null,8,["name","class"])):Z("",!0),X("div",{class:$(e.ns.bem("menu","item","content"))},[X("span",{class:$(e.ns.bem("menu","item","title"))},de(e.title),3),e.description?(C(),S("span",{key:0,class:$(e.ns.bem("menu","item","description"))},de(e.description),3)):Z("",!0)],2)])],16,fo)],64)}const yo=q(Ie,[["render",vo]]);Ie.__docgenInfo={displayName:"DropdownItemImpl",exportName:"default",description:"",tags:{},events:[{name:"clickimpl"},{name:"pointermove"},{name:"pointerleave"},{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown-item-impl.vue"]};const bo=()=>({gDropdown:b("gDropdown",{})}),De=H({name:"GDropdownItem",components:{GDropdownCollectionItem:co,GRovingFocusItem:Ue,GDropdownItemImpl:yo},inheritAttrs:!1,props:Ce,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:l}){const{gDropdown:s}=bo(),p=fe(),d=g(null),n=I(()=>oe(d)?.textContent??""),{onItemEnter:t,onItemLeave:i}=b(U,void 0),w=B(r=>(o("pointermove",r),r.defaultPrevented),me(r=>{if(e.disabled){i(r);return}const f=r.currentTarget;f===document.activeElement||f.contains(document.activeElement)||(t(r),r.defaultPrevented||f?.focus())})),c=B(r=>(o("pointerleave",r),r.defaultPrevented),me(i)),h=B(r=>{if(!e.disabled)return o("click",r),r.type!=="keydown"&&r.defaultPrevented},r=>{if(e.disabled){r.stopImmediatePropagation();return}s?.hideOnClick?.value&&s.handleClick?.(),s.commandHandler?.(e.command,p,r)}),E=I(()=>({...e,...l}));return{handleClick:h,handlePointerMove:w,handlePointerLeave:c,textContent:n,propsAndAttrs:E}}});function wo(e,o,l,s,p,d){const n=y("g-dropdown-item-impl"),t=y("g-roving-focus-item"),i=y("g-dropdown-collection-item");return C(),V(i,{disabled:e.disabled,"text-value":e.title??e.textContent},{default:v(()=>[G(t,{focusable:!e.disabled},{default:v(()=>[G(n,x(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:v(()=>[D(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}const ae=q(De,[["render",wo]]);De.__docgenInfo={displayName:"GDropdownItem",exportName:"default",description:"",tags:{},events:[{name:"pointermove"},{name:"pointerleave"},{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown-item.vue"]};const Te=H({name:"GDropdown",components:{GScrollbar:Ne,GDropdownCollection:lo,GDropdownMenu:re,GDropdownItem:ae,GTooltip:Fe,GRovingFocusGroup:Je,GOnlyChild:Pe},props:ro,emits:["visible-change","click","command"],setup(e,{emit:o}){const l=fe(),s=ne("dropdown"),{t:p}=eo(),d=g(),n=g(),t=g(),i=g(),w=g(null),c=g(null),h=g(!1),E=I(()=>({maxHeight:Ze(e.maxHeight)})),r=I(()=>Qe(e.trigger)),f=_e().value,k=I(()=>e.id||f);Re([d,r],([a,Ge],[le])=>{le?.$el?.removeEventListener&&le.$el.removeEventListener("pointerenter",u),a?.$el?.removeEventListener&&a.$el.removeEventListener("pointerenter",u),a?.$el?.addEventListener&&Ge.includes("hover")&&a.$el.addEventListener("pointerenter",u)},{immediate:!0,flush:"post"}),je(()=>{d.value?.$el?.removeEventListener&&d.value.$el.removeEventListener("pointerenter",u)});function J(){O()}function O(){t.value?.onClose()}function W(){t.value?.onOpen()}function ie(...a){o("command",...a)}function u(){d?.value?.$el?.focus()}function Q(){}function R(){const a=oe(i);r.value.includes("hover")&&a&&P(()=>{a?.focus()}),c.value=null}function M(a){P(()=>{c.value=a})}function se(a){h.value||(a.preventDefault(),a.stopImmediatePropagation())}function z(){o("visible-change",!0)}function j(a){a?.type==="keydown"&&i?.value&&P(()=>{i?.value?.focus()})}function $e(){o("visible-change",!1)}return ce(U,{contentRef:i,role:I(()=>e.role),triggerId:k,isUsingKeyboard:h,onItemEnter:Q,onItemLeave:R}),ce("gDropdown",{instance:l,handleClick:J,commandHandler:ie,trigger:pe(e,"trigger"),hideOnClick:pe(e,"hideOnClick")}),{t:p,ns:s,scrollbar:w,wrapStyle:E,triggerId:k,currentTabId:c,handleCurrentTabIdChange:M,handlerMainButtonClick:a=>{o("click",a)},handleEntryFocus:se,handleClose:O,handleOpen:W,handleBeforeShowTooltip:z,handleShowTooltip:j,handleBeforeHideTooltip:$e,onFocusAfterTrapped:a=>{a.preventDefault(),i?.value?.focus&&P(()=>{i.value?.focus({preventScroll:!0})})},popperRef:t,contentRef:i,triggeringElementRef:d,referenceElementRef:n,actions:I(()=>e.actions)}}});function ho(e,o,l,s,p,d){const n=y("g-dropdown-item"),t=y("g-dropdown-menu"),i=y("g-dropdown-collection"),w=y("g-roving-focus-group"),c=y("g-scrollbar"),h=y("g-only-child"),E=y("g-tooltip");return C(),S("div",{class:$([e.ns.b(),e.ns.is("disabled",e.disabled)])},[G(E,{ref:"popperRef",role:e.role,effect:"light","fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"is-component":"","hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":`${e.ns.e("popper")} ${e.popperClass??""}`,"reference-element":e.referenceElementRef?.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:e.persistent,onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},{content:v(()=>[G(c,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:v(()=>[D(e.$slots,"dropdown-additional-top"),G(w,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:v(()=>[G(i,null,{default:v(()=>[e.actions.length>0?(C(),V(t,{key:0},{default:v(()=>[(C(!0),S(ge,null,Be(e.actions,(r,f)=>(C(),V(n,x({key:`action-${f}`},{ref_for:!0},r),Ae({_:2},[e.$slots.option?{name:"default",fn:v(()=>[D(e.$slots,"option",x({ref_for:!0},r))]),key:"0"}:void 0]),1040))),128))]),_:3})):D(e.$slots,"dropdown",{key:1})]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"]),D(e.$slots,"dropdown-additional-bottom")]),_:3},8,["wrap-style","view-class"])]),default:v(()=>[G(h,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:v(()=>[D(e.$slots,"default")]),_:3},8,["id","tabindex"])]),_:3},8,["role","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","disabled","transition","teleported","persistent","onBeforeShow","onShow","onBeforeHide"])],2)}const Co=q(Te,[["render",ho]]);Te.__docgenInfo={displayName:"GDropdown",exportName:"default",description:"",tags:{},events:[{name:"visible-change"},{name:"click"},{name:"command"}],slots:[{name:"dropdown-additional-top"},{name:"option",scoped:!0,bindings:[]},{name:"dropdown"},{name:"dropdown-additional-bottom"},{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown.vue"]};const A=oo(Co,{DropdownItem:ae,DropdownMenu:re});ye(ae);ye(re);const Eo="0.2.15",_={"@popperjs/core":"^2.11.6",vue:"^3.2.0"},Wo={title:"Data/Dropdown",component:A,parameters:{docs:{description:{component:`\`GDropdown\` - Componente que permite crear un menú desplegable con múltiples opciones y acciones.

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
}`},defaultValue:{summary:"[]"}}},trigger:{description:"Tipo de disparador del drawer",control:"select",options:["click","hover","contextmenu"],table:{category:"Comportamiento y Activación",type:{summary:"string"},defaultValue:{summary:"hover"}}},triggerKeys:{name:"trigger-keys",description:"Teclas de disparo del drawer",control:"array",table:{category:"Comportamiento y Activación",type:{summary:"string[]"},defaultValue:{summary:"[]"}}},hideOnClick:{name:"hide-on-click",description:"Ocultar al hacer clic en el drawer",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showTimeout:{name:"show-timeout",description:"Retraso para mostrar el drawer",control:"number",table:{category:"Comportamiento y Activación",type:{summary:"number"},defaultValue:{summary:"150"}}},hideTimeout:{name:"hide-timeout",description:"Retraso para ocultar el drawer",control:"number",table:{category:"Comportamiento y Activación",type:{summary:"number"},defaultValue:{summary:"150"}}},teleported:{description:"Teletransporta el dropdown al elemento append-to",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},persistent:{description:"Tooltip persistente",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"false"}}},command:{name:"command",description:"Se activa al ejecutar un comando en el drawer",table:{category:"Eventos y Métodos",type:{summary:"(...args: any[]) => void"}}},visibleChange:{name:"visible-change",description:"Se activa al cambiar la visibilidad del drawer",table:{category:"Eventos y Métodos",type:{summary:"(visible: boolean) => void"}}},handleClose:{name:"handle-close",description:"Método para cerrar el dropdown",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},handleOpen:{name:"handle-open",description:"Método para abrir el dropdown",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},popperOptions:{name:"popper-options",description:"Opciones de Popper.js",control:"object",table:{category:"Configuración Avanzada",type:{summary:"object"},defaultValue:{summary:"{}"}}},default:{description:"Disparador del dropdown",table:{category:"Slot",type:{summary:"Slot"}},control:!1}},args:{maxHeight:"100%",disabled:!1,placement:"bottom-start",trigger:"hover",triggerKeys:["enter"],hideOnClick:!0,showTimeout:150,hideTimeout:150,role:"menu",tabindex:0,popperOptions:{},teleported:!0,persistent:!1,actions:[{title:"Abrir",icon:"regular arrow-up-right-from-square",action:()=>{console.log("Abrir")}},{title:"Editar",icon:"regular pen",action:()=>{console.log("Editar")}},{title:"Eliminar",icon:"regular trash",action:()=>{console.log("Eliminar")}},{title:"Actualizar",icon:"regular arrows-rotate",disabled:!0,action:()=>{console.log("Actualizar")}}]}},F={name:"Básico",render:e=>({components:{GDropdown:A,GConfigProvider:Y,GIconButton:we},setup(){return{args:e}},template:`
      <g-config-provider>
        <g-dropdown v-bind="args">
          <g-icon-button icon="regular plus-circle" />
        </g-dropdown>
      </g-config-provider>
    `})},N={name:"Todos los tipos de disparadores",parameters:{docs:{description:{story:`Este ejemplo muestra cómo se ven los diferentes tipos de disparadores.
- Disparador de clic
- Disparador de desplazamiento
- Disparador de enfoque`}}},render:()=>({components:{GDropdown:A,GConfigProvider:Y,GRadioGroup:to,GTag:he},setup(){const e=g("click");return{actions:[{title:"Enviar correo",icon:"regular envelope",description:"Esta acción te permite enviar un correo electrónico",action:()=>{console.log("Enviar correo")},"data-test":"send-email"},{title:"Buscar",icon:"regular search",description:"Esta acción te permite buscar un elemento",action:()=>{console.log("Buscar")},"data-test":"search"},{title:"Exportar",icon:"regular arrow-up-from-bracket",description:"Esta acción te permite exportar un elemento",action:()=>{console.log("Exportar")},"data-test":"export"}],triggers:[{value:"click",label:"Click"},{value:"hover",label:"Hover"},{value:"contextmenu",label:"Context Menu"}],trigger:e}},template:`
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
- Al hacer clic en una opción, se muestra un mensaje en la consola con el nombre de la opción seleccionada.`}}},render:()=>({components:{GDropdown:A,GConfigProvider:Y,GButton:be,GTag:he},setup(){const e=g("");return{actions:[{title:"Enviar correo",icon:"regular envelope",command:"send-email",description:"Esta acción te permite enviar un correo electrónico",action:()=>{console.log("Enviar correo")},"data-test":"send-email"},{title:"Buscar",icon:"regular search",command:"search",description:"Esta acción te permite buscar un elemento",action:()=>{console.log("Buscar")},"data-test":"search"},{title:"Exportar",icon:"regular arrow-up-from-bracket",command:"export",description:"Esta acción te permite exportar un elemento",action:()=>{console.log("Exportar")},"data-test":"export"}],handleCommand:s=>{e.value=s},commandClicked:e}},template:`
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
    `})},L={name:"Métodos del dropdown",parameters:{docs:{description:{story:`Este ejemplo muestra cómo usar los métodos del dropdown.

- Se utiliza un botón para abrir el menú desplegable.
- Se utiliza un botón para cerrar el menú desplegable.`}}},render:()=>({components:{GDropdown:A,GConfigProvider:Y,GButton:be,GIconButton:we},setup(){const e=g(null),o=g([]),l=g(""),s=async()=>{try{return(await(await fetch("https://restcountries.com/v3.1/all?fields=name,flags")).json()).slice(0,25).map(c=>({icon:c.flags.svg,title:c.name.common,command:c.flags.svg}))}catch(n){return console.error("Error fetching data:",n),[]}};return{dropdownRef:e,handleVisibleChange:n=>{n&&o.value.length===0&&s().then(t=>{o.value=t})},countries:o,handleCommand:n=>{l.value=n},svgCurrentCountry:l}},template:`
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
    `})};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const Qo=["Basic","allTypesOfTriggers","commandEvent","dropdownMethods"];export{F as Basic,Qo as __namedExportsOrder,N as allTypesOfTriggers,K as commandEvent,Wo as default,L as dropdownMethods};
