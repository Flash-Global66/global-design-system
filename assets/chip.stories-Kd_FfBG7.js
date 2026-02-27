import{d as H,x as z,e as u,s as C,a1 as oe,n as Te,l as b,a as I,c as S,u as g,t as Le,Z as k,b as U,f as x,h as P,p as q,r as E,g as Ce,F as Fe,z as Me,q as Oe,w as Be,C as je,E as ge,V as ve,D as J,m as R,k as N,y as de,a2 as ye,H as ne}from"./vue.esm-bundler-C43JrhH2.js";import{F as B}from"./index-B1PxvDbZ.js";import{s as Ve,G as Ne,l as Ke,j as Ue,b as qe}from"./index-Bjwq1aDC.js";import{q as He}from"./index-Dk612rNp.js";import{k as _e,S as We,Y as Je,M as Ye,P as Ze,a as Qe,$ as Xe,f as et,E as tt}from"./index-rC-zqevB.js";import{a as it}from"./index-dphAcb1L.js";import{f as ot,b as nt,d as A,w as at}from"./install-CfJGiCvs.js";import{u as ae}from"./index-D5bIuBCX.js";import{E as h}from"./aria-BUADUvnR.js";import{c as rt,G as T}from"./ConfigProvider-Br84NlF7.js";import{c as lt,u as st}from"./index-DH2w0SzE.js";import{g as he,a as dt,b as xe}from"./documentation-stories-DKOl0nGm.js";import"./index-BDKGuxIf.js";import"./index-DmfABaPz.js";import"./index-CMNLjZZP.js";import"./index-CdSB2Bdf.js";import"./_arrayPush-BhjrZnJY.js";import"./index-CmBD9wVo.js";import"./index-y9qm_QyA.js";import"./use-form-item-BgBoyOyI.js";import"./constants-Dnj8X3EN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-fhkPmQjX.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";import"./error-Cq9Fpw4b.js";/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ct=()=>{},pt=Object.prototype.hasOwnProperty,be=(e,t)=>pt.call(e,t),mt=e=>typeof e=="function",ke=e=>typeof e=="string",Ee=e=>e!==null&&typeof e=="object",ft=e=>typeof e=="number",ut=e=>ke(e)?!Number.isNaN(Number(e)):!1,K=(e,t,{checkForDefaultPrevented:r=!0}={})=>l=>{const n=e?.(l);if(r===!1||!n)return t?.(l)},we=e=>t=>t.pointerType==="mouse"?e(t):void 0;function gt(e,t="px"){if(!e)return"";if(ft(e)||ut(e))return`${e}${t}`;if(ke(e))return e}const ze="__epPropKey",G=e=>e,vt=e=>Ee(e)&&!!e[ze],yt=(e,t)=>{if(!Ee(e)||vt(e))return e;const{values:r,required:l,default:n,type:m,validator:a}=e,o={type:m,required:!!l,validator:r||a?s=>{let c=!1,p=[];if(r&&(p=Array.from(r),be(e,"default")&&p.push(n),c||(c=p.includes(s))),a&&(c||(c=a(s))),!c&&p.length>0){const v=[...new Set(p)].map(i=>JSON.stringify(i)).join(", ");Le(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${v}], got value ${JSON.stringify(s)}.`)}return c}:void 0,[ze]:!0};return be(e,"default")&&(o.default=n),o},pe=e=>ot(Object.entries(e).map(([t,r])=>[t,yt(r,t)])),ht=(e,t)=>{if(e.install=r=>{for(const l of[e,...Object.values(t??{})])r.component(l.name,l)},t)for(const[r,l]of Object.entries(t))e[r]=l;return e},Ie=e=>(e.install=ct,e),Se=(...e)=>t=>{e.forEach(r=>{mt(r)?r(t):r.value=t})},re=Symbol("gDropdown"),xt=pe({trigger:Ke.trigger,triggerKeys:{type:G(Array),default:()=>[h.enter,h.numpadEnter,h.space,h.down]},placement:{type:G(String),default:"bottom"},popperOptions:{type:G(Object),default:()=>({})},id:String,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:G([Number,String]),default:0},maxHeight:{type:G([Number,String]),default:""},popperClass:{type:String,default:""},actions:{type:G(Array),required:!0,default:()=>[]},disabled:Boolean,role:{type:String,values:Ne,default:"menu"},teleported:Ve.teleported,persistent:{type:Boolean,default:!0}}),Pe=pe({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,title:{type:String,default:"",required:!0},description:String,action:Function,icon:{type:String}}),bt=pe({onKeydown:{type:G(Function)}}),wt=[h.down,h.pageDown,h.home],Ae=[h.up,h.pageUp,h.end],Ct=[...wt,...Ae],{GCollection:Ft,GCollectionItem:kt,COLLECTION_INJECTION_KEY:Et,COLLECTION_ITEM_INJECTION_KEY:zt}=We("Dropdown"),It=H({name:"GDropdownMenu",props:bt,setup(e){const t=ae("dropdown"),{focusTrapRef:r,onKeydown:l}=I(it,void 0),{contentRef:n,role:m,triggerId:a}=I(re,void 0),{collectionRef:o,getItems:s}=I(Et,void 0),{rovingFocusGroupRef:c,rovingFocusGroupRootStyle:p,tabIndex:v,onBlur:i,onFocus:d,onMousedown:y}=I(Je,void 0),{collectionRef:w}=I(Ye,void 0),L=S(()=>[t.b("menu")]),j=Se(n,o,r,c,w),_=K(F=>{e.onKeydown?.(F)},F=>{const{currentTarget:$,code:M,target:O}=F;if($.contains(O),h.tab===M&&F.stopImmediatePropagation(),F.preventDefault(),O!==g(n)||!Ct.includes(M))return;const W=s().filter(V=>!V.disabled).map(V=>V.ref);Ae.includes(M)&&W.reverse(),_e(W)});return{rovingFocusGroupRootStyle:p,tabIndex:v,dropdownKls:L,role:m,triggerId:a,dropdownListWrapperRef:j,handleKeydown:F=>{_(F),l(F)},onBlur:i,onFocus:d,onMousedown:y}}}),le=(e,t)=>{const r=e.__vccOpts||e;for(const[l,n]of t)r[l]=n;return r},St=["role","aria-labelledby"];function Pt(e,t,r,l,n,m){return u(),z("ul",{ref:e.dropdownListWrapperRef,class:b(e.dropdownKls),style:Te(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:t[0]||(t[0]=(...a)=>e.onBlur&&e.onBlur(...a)),onFocus:t[1]||(t[1]=(...a)=>e.onFocus&&e.onFocus(...a)),onKeydown:t[2]||(t[2]=oe((...a)=>e.handleKeydown&&e.handleKeydown(...a),["self"])),onMousedown:t[3]||(t[3]=oe((...a)=>e.onMousedown&&e.onMousedown(...a),["self"]))},[C(e.$slots,"default")],46,St)}const me=le(It,[["render",Pt]]),At=H({name:"DropdownItemImpl",components:{GIconFont:B},props:Pe,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:t,attrs:r}){const l=ae("dropdown"),{role:n}=I(re,void 0),{collectionItemRef:m}=I(zt,void 0),{collectionItemRef:a}=I(Xe,void 0),{rovingFocusGroupItemRef:o,tabIndex:s,handleFocus:c,handleKeydown:p,handleMousedown:v}=I(et,void 0),i=Se(m,a,o),d=S(()=>n.value==="menu"?"menuitem":n.value==="navigation"?"link":"button"),y=K(w=>{if([h.enter,h.numpadEnter,h.space].includes(w.code))return w.preventDefault(),w.stopImmediatePropagation(),t("clickimpl",w),!0},p);return{ns:l,itemRef:i,dataset:{[tt]:""},role:d,tabIndex:s,handleFocus:c,handleKeydown:y,handleMousedown:v,attrs:r}}}),Dt=["aria-disabled","tabindex","role","data-test"];function $t(e,t,r,l,n,m){const a=k("g-icon-font");return u(),z(Fe,null,[e.divided?(u(),z("li",{key:0,role:"separator",class:b(e.ns.bem("menu","item","divided"))},null,2)):R("",!0),N("li",q({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,"data-test":e.attrs["data-test"]??`dropdown-item:${e.title}`,onClick:t[0]||(t[0]=o=>{e.action&&e.action?.(o),e.$emit("clickimpl",o)}),onFocus:t[1]||(t[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onKeydown:t[2]||(t[2]=oe((...o)=>e.handleKeydown&&e.handleKeydown(...o),["self"])),onMousedown:t[3]||(t[3]=(...o)=>e.handleMousedown&&e.handleMousedown(...o)),onPointermove:t[4]||(t[4]=o=>e.$emit("pointermove",o)),onPointerleave:t[5]||(t[5]=o=>e.$emit("pointerleave",o))}),[C(e.$slots,"default",{},()=>[e.icon?(u(),U(a,{key:0,name:e.icon,class:b(e.ns.bem("menu","item","icon"))},null,8,["name","class"])):R("",!0),N("div",{class:b(e.ns.bem("menu","item","content"))},[N("span",{class:b(e.ns.bem("menu","item","title"))},de(e.title),3),e.description?(u(),z("span",{key:0,class:b(e.ns.bem("menu","item","description"))},de(e.description),3)):R("",!0)],2)])],16,Dt)],64)}const Gt=le(At,[["render",$t]]),Rt=()=>({gDropdown:I("gDropdown",{})}),Tt=H({name:"GDropdownItem",components:{GDropdownCollectionItem:kt,GRovingFocusItem:Ze,GDropdownItemImpl:Gt},inheritAttrs:!1,props:Pe,emits:["pointermove","pointerleave","click"],setup(e,{emit:t,attrs:r}){const{gDropdown:l}=Rt(),n=Ce(),m=E(null),a=S(()=>g(m)?.textContent??""),{onItemEnter:o,onItemLeave:s}=I(re,void 0),c=K(d=>(t("pointermove",d),d.defaultPrevented),we(d=>{if(e.disabled){s(d);return}const y=d.currentTarget;y===document.activeElement||y.contains(document.activeElement)||(o(d),d.defaultPrevented||y?.focus())})),p=K(d=>(t("pointerleave",d),d.defaultPrevented),we(s)),v=K(d=>{if(!e.disabled)return t("click",d),d.type!=="keydown"&&d.defaultPrevented},d=>{if(e.disabled){d.stopImmediatePropagation();return}l?.hideOnClick?.value&&l.handleClick?.(),l.commandHandler?.(e.command,n,d)}),i=S(()=>({...e,...r}));return{handleClick:v,handlePointerMove:c,handlePointerLeave:p,textContent:a,propsAndAttrs:i}}});function Lt(e,t,r,l,n,m){const a=k("g-dropdown-item-impl"),o=k("g-roving-focus-item"),s=k("g-dropdown-collection-item");return u(),U(s,{disabled:e.disabled,"text-value":e.title??e.textContent},{default:x(()=>[P(o,{focusable:!e.disabled},{default:x(()=>[P(a,q(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:x(()=>[C(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}const fe=le(Tt,[["render",Lt]]),Mt=H({name:"GDropdown",components:{GScrollbar:He,GDropdownCollection:Ft,GDropdownMenu:me,GDropdownItem:fe,GTooltip:qe,GRovingFocusGroup:Qe,GOnlyChild:Ue,GIconFont:B},props:xt,emits:["visible-change","click","command"],setup(e,{emit:t}){const r=Ce(),l=ae("dropdown"),{t:n}=rt(),m=E(),a=E(),o=E(),s=E(),c=E(null),p=E(null),v=E(!1),i=S(()=>({maxHeight:gt(e.maxHeight)})),d=S(()=>lt(e.trigger)),y=st().value,w=S(()=>e.id||y);Be([m,d],([f,Re],[ue])=>{ue?.$el?.removeEventListener&&ue.$el.removeEventListener("pointerenter",$),f?.$el?.removeEventListener&&f.$el.removeEventListener("pointerenter",$),f?.$el?.addEventListener&&Re.includes("hover")&&f.$el.addEventListener("pointerenter",$)},{immediate:!0,flush:"post"}),je(()=>{m.value?.$el?.removeEventListener&&m.value.$el.removeEventListener("pointerenter",$)});function L(){j()}function j(){o.value?.onClose()}function _(){o.value?.onOpen()}function F(...f){t("command",...f)}function $(){m?.value?.$el?.focus()}function M(){}function O(){const f=g(s);d.value.includes("hover")&&f&&J(()=>{f?.focus()}),p.value=null}function W(f){J(()=>{p.value=f})}function V(f){v.value||(f.preventDefault(),f.stopImmediatePropagation())}function De(){t("visible-change",!0)}function $e(f){f?.type==="keydown"&&s?.value&&J(()=>{s?.value?.focus()})}function Ge(){t("visible-change",!1)}return ge(re,{contentRef:s,role:S(()=>e.role),triggerId:w,isUsingKeyboard:v,onItemEnter:M,onItemLeave:O}),ge("gDropdown",{instance:r,handleClick:L,commandHandler:F,trigger:ve(e,"trigger"),hideOnClick:ve(e,"hideOnClick")}),{t:n,ns:l,scrollbar:c,wrapStyle:i,triggerId:w,currentTabId:p,handleCurrentTabIdChange:W,handlerMainButtonClick:f=>{t("click",f)},handleEntryFocus:V,handleClose:j,handleOpen:_,handleBeforeShowTooltip:De,handleShowTooltip:$e,handleBeforeHideTooltip:Ge,onFocusAfterTrapped:f=>{f.preventDefault(),s?.value?.focus&&J(()=>{s.value?.focus({preventScroll:!0})})},popperRef:o,contentRef:s,triggeringElementRef:m,referenceElementRef:a,actions:S(()=>e.actions)}}});function Ot(e,t,r,l,n,m){const a=k("g-dropdown-item"),o=k("g-dropdown-menu"),s=k("g-dropdown-collection"),c=k("g-roving-focus-group"),p=k("g-scrollbar"),v=k("g-only-child"),i=k("g-tooltip");return u(),z("div",{class:b([e.ns.b(),e.ns.is("disabled",e.disabled)])},[P(i,{ref:"popperRef",role:e.role,effect:"light","fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"is-component":"","hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":`${e.ns.e("popper")} ${e.popperClass??""}`,"reference-element":e.referenceElementRef?.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:e.persistent,onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},{content:x(()=>[P(p,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:x(()=>[C(e.$slots,"dropdown-additional-top"),P(c,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:x(()=>[P(s,null,{default:x(()=>[e.actions.length>0?(u(),U(o,{key:0},{default:x(()=>[(u(!0),z(Fe,null,Me(e.actions,(d,y)=>(u(),U(a,q({key:`action-${y}`},{ref_for:!0},d),Oe({_:2},[e.$slots.option?{name:"default",fn:x(()=>[C(e.$slots,"option",q({ref_for:!0},d))]),key:"0"}:void 0]),1040))),128))]),_:3})):C(e.$slots,"dropdown",{key:1})]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"]),C(e.$slots,"dropdown-additional-bottom")]),_:3},8,["wrap-style","view-class"])]),default:x(()=>[P(v,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:x(()=>[C(e.$slots,"default")]),_:3},8,["id","tabindex"])]),_:3},8,["role","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","disabled","transition","teleported","persistent","onBeforeShow","onShow","onBeforeHide"])],2)}const Bt=le(Mt,[["render",Ot]]),jt=ht(Bt,{DropdownItem:fe,DropdownMenu:me}),Vt=Ie(fe),Nt=Ie(me),Kt="close",Ut="click",qt="command",Ht="visible-change",_t=["primary","secondary"],Wt=["solid","outline"],Jt=["sm","md"],Yt=nt({type:{type:A(String),values:_t,default:"primary"},variant:{type:A(String),values:Wt,default:"solid"},size:{type:A(String),values:Jt,default:"md"},iconLeft:{type:A(String),default:void 0},iconRight:{type:A(String),default:void 0},closable:Boolean,text:{type:String,default:void 0},selected:Boolean,disabled:Boolean,dropdownEnabled:Boolean,actions:{type:A(Array),default:void 0},trigger:{type:A(String),default:"click"},placement:{type:A(String),default:"bottom-start"}}),Zt={[Kt]:e=>e instanceof MouseEvent,[Ut]:e=>e instanceof Event,[qt]:e=>typeof e=="string"||typeof e=="number"||typeof e=="object"&&e!==null,[Ht]:e=>typeof e=="boolean"},Qt=["tabindex","aria-pressed","aria-disabled","title"],Xt={key:0},ei=["aria-label"],ce=H({name:"GChip",__name:"chip",props:Yt,emits:Zt,setup(e,{emit:t}){const r=e,l=t,n=ae("chip"),m=E(!1),a=S(()=>{const{type:i,variant:d,size:y,iconLeft:w,iconRight:L,closable:j,text:_,selected:F,disabled:$,dropdownEnabled:M,...O}=r;return O}),o=S(()=>{const{variant:i,size:d,selected:y,disabled:w,type:L}=r;return[n.b(),n.m(L),n.m(i),n.e(d),n.is("selected",y),n.is("disabled",w)]}),s=i=>{l("close",i)},c=i=>{r.disabled||l("click",i)},p=i=>{l("command",i)},v=i=>{m.value=i,l("visible-change",i)};return(i,d)=>(u(),U(g(jt),q(a.value,{disabled:i.disabled||!i.dropdownEnabled,onCommand:p,onVisibleChange:v}),{dropdown:x(()=>[C(i.$slots,"dropdown")]),default:x(()=>[N("span",{class:b(o.value),tabindex:i.disabled?-1:0,onClick:c,onKeydown:[ye(c,["enter"]),ye(c,["space"])],role:"button","aria-pressed":i.selected?"true":"false","aria-disabled":i.disabled?"true":"false",title:i.text},[i.$slots.prefix||i.iconLeft?C(i.$slots,"prefix",{key:0},()=>[i.iconLeft?(u(),z("span",{key:0,class:b(g(n).em(i.size,"prefix-icon"))},[P(g(B),{name:i.iconLeft},null,8,["name"])],2)):R("",!0)]):R("",!0),N("span",{class:b(g(n).e("content"))},[i.text?(u(),z("span",Xt,de(i.text),1)):C(i.$slots,"default",{key:1})],2),i.$slots.suffix||i.iconRight||i.closable||i.dropdownEnabled?C(i.$slots,"suffix",{key:1},()=>[i.iconRight&&!i.closable&&!i.dropdownEnabled?(u(),z("span",{key:0,class:b(g(n).em(i.size,"suffix-icon"))},[P(g(B),{name:i.iconRight},null,8,["name"])],2)):i.dropdownEnabled&&!i.closable?(u(),z("span",{key:1,class:b([g(n).em(i.size,"suffix-icon"),g(n).e("dropdown-icon")])},[P(g(B),{name:m.value?"regular chevron-up":"regular chevron-down"},null,8,["name"])],2)):i.closable?(u(),z("span",{key:2,onClick:oe(s,["stop"]),class:b([g(n).em(i.size,"suffix-icon"),g(n).e("close")]),"aria-label":`Remove ${i.text}`},[P(g(B),{name:"regular times"})],10,ei)):R("",!0)]):R("",!0)],42,Qt)]),_:3},16,["disabled"]))}});ce.__docgenInfo={name:"GChip",exportName:"default",displayName:"chip",description:"",tags:{},slots:[{name:"prefix"},{name:"default"},{name:"suffix"},{name:"dropdown"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/chip/src/chip.vue"]};const D=at(ce,{Chip:ce}),ti="1.1.0",se={"@flash-global66/g-dropdown":"^0.1.0","@flash-global66/g-icon-font":"^0.11.0","@flash-global66/g-popover":"^0.0.7","element-plus":"^2.9.0",vue:"^3.2.0"},Pi={title:"Data/Chip",component:D,parameters:{docs:{description:{component:`
El componente Chip es un elemento interactivo compacto que representa una entrada, atributo o acción. Es ideal para filtros, tags, categorías, estados y selección múltiple.

> Versión actual: ${ti}

## Características
- **Interactividad completa**: Soporte para selección, estados y cierre
- **Dos variantes visuales**: \`solid\` (fondo gris) y \`outline\` (borde únicamente)
- **Control de radio**: \`primary\` (redondeado completo) y \`secondary\` (esquinas suaves)
- **Múltiples tamaños**: \`sm\` y \`md\` con iconos adaptados
- **Estados visuales**: enabled, hover, disabled, selected
- **Iconos flexibles**: Prefijo y sufijo con IconFont integrado
- **Popover integrado**: Información contextual sin componentes adicionales
- **Accesibilidad**: Soporte completo para ARIA, navegación por teclado y manejo de foco visible.

### Instalación

\`\`\`bash
yarn add @flash-global66/g-chip
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GChip } from '@flash-global66/g-chip'

# recomendado importar en los estilos globales
import '@flash-global66/g-chip/styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${dt(se)}

> Revisar la documentación de cada dependencia para mas información.

\`\`\`bash
# Dependencias global66
yarn add ${xe(se)}

# Dependencias externas
yarn add ${xe(se,!0)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<script setup lang="ts">
import { GChip } from '@flash-global66/g-chip'
<\/script>

<template>
    <g-chip
      type="primary"
      variant="solid"
      size="md"
      text="Chip"
      icon-left="solid check"
      icon-right="solid check"
      closable
    />
</template>
\`\`\`

`}}},argTypes:{size:{description:"Tamaño del chip: md (30px) incluye más padding, sm (26px) es más compacto",control:"select",options:["sm","md"],table:{category:"Apariencia",type:{summary:"string"},defaultValue:{summary:"md"}}},type:{description:"Tipo que controla el border radius: primary (redondeado completo), secondary (esquinas suaves)",control:"select",options:["primary","secondary"],table:{category:"Apariencia",type:{summary:"string"},defaultValue:{summary:"primary"}}},variant:{description:"Variante visual: solid (fondo gris para tags), outline (solo borde para filtros)",control:"select",options:["solid","outline"],table:{category:"Apariencia",type:{summary:"string"},defaultValue:{summary:"solid"}}},iconLeft:{name:"icon-left",description:"Ícono a la izquierda",control:"select",options:["",...he()],table:{category:"Iconos",type:{summary:"string"},defaultValue:{summary:"undefined"}}},iconRight:{name:"icon-right",description:"Ícono a la derecha",control:"select",options:["",...he()],table:{category:"Iconos",type:{summary:"string"},defaultValue:{summary:"undefined"}}},text:{description:"Texto a mostrar en el chip",control:"text",table:{category:"Contenido",type:{summary:"string"},defaultValue:{summary:"undefined"}}},closable:{description:"Habilita el botón de cerrar",control:"boolean",table:{category:"Comportamiento",type:{summary:"boolean"},defaultValue:{summary:"false"}}},selected:{description:"Estado seleccionado: para outline cambia a fondo azul, para solid mantiene apariencia",control:"boolean",table:{category:"Estado",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Estado deshabilitado: evita interacciones y aplica estilos visuales de disabled",control:"boolean",table:{category:"Estado",type:{summary:"boolean"},defaultValue:{summary:"false"}}},dropdownEnabled:{description:"Habilita el dropdown integrado. Automáticamente muestra un icono chevron-down en el sufijo cuando está habilitado. Para configurar el dropdown, usa las props estándar de GDropdown.",control:"boolean",table:{category:"Dropdown",type:{summary:"boolean"},defaultValue:{summary:"false"}}},actions:{description:"Acciones del dropdown (array de objetos { title: string, command: any }). Para más opciones de configuración, consulta la documentación de GDropdown.",control:"object",table:{category:"Dropdown",type:{summary:"Array<object>"}}},trigger:{description:"Cómo se activa el dropdown: 'hover', 'click', 'contextmenu'. Para más opciones, consulta la documentación de GDropdown.",control:"select",options:["hover","click","contextmenu"],table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"hover"}}},placement:{description:"Posición del dropdown. Para todas las opciones de posicionamiento disponibles, consulta la documentación de GDropdown.",control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"bottom"},description:"**Nota:** Todas las demás props de GDropdown se pasan directamente al componente. Para configuración avanzada (triggerKeys, popperOptions, hideOnClick, timeouts, etc.), consulta la documentación de GDropdown."}},close:{description:"Evento emitido al cerrar",action:"close",table:{category:"Eventos",type:{summary:"Event",detail:"() => void"},defaultValue:{summary:"() => void"}},control:!1},click:{description:"Evento emitido al hacer clic",action:"click",table:{category:"Eventos",type:{summary:"Event",detail:"() => void"},defaultValue:{summary:"() => void"}},control:!1},command:{description:"Evento emitido al seleccionar un elemento del dropdown",action:"command",table:{category:"Eventos",type:{summary:"any",detail:"(command: any) => void"},defaultValue:{summary:"() => void"}},control:!1},prefix:{description:"slot para el inicio del chip",table:{category:"Slots",type:{summary:"slot"}},control:!1},default:{description:"slot para el contenido del chip",table:{category:"Slots",type:{summary:"slot"}},control:!1},suffix:{description:"slot para el final del chip",table:{category:"Slots",type:{summary:"slot"}},control:!1},dropdown:{description:"slot para el contenido personalizado del dropdown",table:{category:"Slots",type:{summary:"slot"}},control:!1}},args:{text:"Chip",size:"md",type:"primary",variant:"solid",iconLeft:"",iconRight:"",closable:!1,selected:!1,disabled:!1,dropdownEnabled:!1,actions:[],trigger:"hover",placement:"bottom"}},Y={name:"Básico",render:e=>({components:{GChip:D,GConfigProvider:T},setup(){return{args:e}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-chip v-bind="args" />
        </div>
      </g-config-provider>
    `})},Z={name:"Combinaciones de variantes y tamaños",render:()=>({components:{GChip:D,GConfigProvider:T},setup(){return{state:ne({types:["primary","secondary"],sizes:["sm","md"],variants:["solid","outline"]})}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div v-for="type in state.types" :key="type" class="flex flex-row gap-6 items-center justify-center">
            <div v-for="size in state.sizes" :key="size" class="flex flex-col gap-4">
              <div v-for="variant in state.variants" :key="variant">
                <g-chip
                  :type="type"
                  :size="size"
                  :variant="variant"
                  text="Chip"
                />
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},Q={name:"Chips con iconos",render:()=>({components:{GChip:D,GConfigProvider:T},setup(){return{iconExamples:[{iconLeft:"solid check",text:"Verificado"},{iconRight:"regular chevron-down",text:"Dropdown"},{iconLeft:"solid user",iconRight:"solid check",text:"Usuario activo"},{iconLeft:"regular heart",text:"Favorito",variant:"outline"},{iconLeft:"regular bell",text:"Notificación",type:"secondary"},{iconRight:"solid arrow-right",text:"Siguiente",variant:"outline",type:"secondary"}]}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <div>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Ejemplos con iconos</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
              Diferentes combinaciones de iconos prefijo y sufijo
            </p>
            <div class="flex flex-wrap gap-3">
              <g-chip
                v-for="(example, index) in iconExamples"
                :key="index"
                :text="example.text"
                :icon-left="example.iconLeft"
                :icon-right="example.iconRight"
                :variant="example.variant || 'solid'"
                :type="example.type || 'primary'"
                size="md"
              />
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Solo iconos prefijo</h4>
            <div class="flex flex-wrap gap-2">
              <g-chip text="Check" icon-left="solid check" size="sm" />
              <g-chip text="Usuario" icon-left="solid user" size="sm" />
              <g-chip text="Home" icon-left="solid home" size="sm" />
              <g-chip text="Search" icon-left="solid search" size="sm" />
              <g-chip text="Filter" icon-left="solid filter" size="sm" />
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Solo iconos sufijo</h4>
            <div class="flex flex-wrap gap-2">
              <g-chip text="Dropdown" icon-right="regular chevron-down" size="sm" variant="outline" />
              <g-chip text="Arrow" icon-right="solid arrow-right" size="sm" variant="outline" />
              <g-chip text="Times" icon-right="solid times" size="sm" variant="outline" />
              <g-chip text="Info" icon-right="solid info-circle" size="sm" variant="outline" />
              <g-chip text="Edit" icon-right="solid edit" size="sm" variant="outline" />
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Ambos iconos</h4>
            <div class="flex flex-wrap gap-2">
              <g-chip 
                text="Usuario activo" 
                icon-left="solid user" 
                icon-right="solid check" 
                variant="solid" 
                type="primary" 
              />
              <g-chip 
                text="Filtro aplicado" 
                icon-left="solid filter" 
                icon-right="solid times" 
                variant="outline" 
                type="secondary" 
              />
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},X={name:"Chips eliminables",render:()=>({components:{GChip:D,GConfigProvider:T},setup(){const e=[{text:"Chip 1",type:"primary",variant:"solid"},{text:"Chip 2",type:"secondary",variant:"solid"},{text:"Chip 3",type:"primary",variant:"outline"},{text:"Chip 4",type:"secondary",variant:"outline"}],t=ne([...e]);return{dynamicChips:t,handleClose:l=>{if(t.length===1){t.splice(-1,1,...e);return}t.splice(t.findIndex(n=>n.text===l),1)}}},template:`
      <g-config-provider>
        <div class="flex flex-row gap-4">
          <g-chip
            v-for="(chip, index) in dynamicChips"
            :key="chip.text"
            :type="chip.type"
            :variant="chip.variant"
            :text="chip.text"
            closable
            @close="() => handleClose(chip.text)"
          />
        </div>
      </g-config-provider>
    `})},ee={name:"Tipos y variantes (separados)",render:()=>({components:{GChip:D,GConfigProvider:T},setup(){return{}},template:`
      <g-config-provider>
        <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <span style="font-weight: 600; margin-bottom: 8px;">Tipos (radio)</span>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Primary (xl radius)</span>
              <g-chip type="primary" variant="solid" text="Primary" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Secondary (sm radius)</span>
              <g-chip type="secondary" variant="solid" text="Secondary" />
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <span style="font-weight: 600; margin-bottom: 8px;">Variantes (color)</span>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Solid (grey-100)</span>
              <g-chip type="primary" variant="solid" text="Solid" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Outline (everBlue-100 border)</span>
              <g-chip type="primary" variant="outline" text="Outline" />
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <span style="font-weight: 600; margin-bottom: 8px;">Combinaciones</span>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <g-chip type="primary" variant="solid" text="Primary + Solid" />
              <g-chip type="primary" variant="outline" text="Primary + Outline" />
              <g-chip type="secondary" variant="solid" text="Secondary + Solid" />
              <g-chip type="secondary" variant="outline" text="Secondary + Outline" />
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},te={name:"Sistema de filtros en cascada",parameters:{docs:{source:{code:`<script setup lang="ts">
import { reactive, ref } from 'vue'
import { GChip } from '@flash-global66/g-chip'

interface MainFilter {
  id: string
  text: string
  selected: boolean
  options: string[]
}

interface AppliedFilter {
  id: string
  category: string
  value: string
  text: string
}

const mainFilters = reactive<MainFilter[]>([
  { id: 'year', text: 'Año', selected: false, options: ['2015', '2016', '2017', '2018', '2019', '2020'] },
  { id: 'category', text: 'Categoría', selected: false, options: ['Importaciones', 'Exportaciones'] },
  { id: 'country', text: 'País', selected: false, options: ['Chile', 'Argentina', 'Brasil'] }
])

const appliedFilters = ref<AppliedFilter[]>([])

const toggleMainFilter = (filterId: string) => {
  const filter = mainFilters.find(f => f.id === filterId)
  if (filter) {
    filter.selected = !filter.selected
    if (!filter.selected) {
      const filteredItems = appliedFilters.value.filter(af => af.category !== filterId)
      appliedFilters.value.splice(0, appliedFilters.value.length)
      appliedFilters.value.push(...filteredItems)
    }
  }
}

const addAppliedFilter = (category: string, value: string, categoryText: string) => {
  const exists = appliedFilters.value.find(af => af.category === category && af.value === value)
  if (!exists) {
    appliedFilters.value.push({
      id: \`\${category}-\${value}\`,
      category,
      value,
      text: \`\${categoryText}: \${value}\`
    })
  }
}

const removeAppliedFilter = (filterId: string) => {
  const index = appliedFilters.value.findIndex(af => af.id === filterId)
  if (index > -1) {
    appliedFilters.value.splice(index, 1)
  }
}

const clearAllFilters = () => {
  appliedFilters.value.splice(0)
  mainFilters.forEach(filter => filter.selected = false)
}
<\/script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h4>Categorías disponibles</h4>
      <div class="flex flex-wrap gap-3">
        <g-chip
          v-for="filter in mainFilters"
          :key="filter.id"
          variant="outline"
          type="primary"
          :text="filter.text"
          :selected="filter.selected"
          @click="toggleMainFilter(filter.id)"
        />
      </div>
    </div>
    
    <div v-for="filter in mainFilters.filter(f => f.selected)" :key="'options-' + filter.id">
      <h4>Opciones de {{ filter.text }}:</h4>
      <div class="flex flex-wrap gap-2">
        <g-chip
          v-for="option in filter.options"
          :key="filter.id + '-' + option"
          variant="outline"
          type="secondary"
          :text="option"
          :selected="appliedFilters.some(af => af.category === filter.id && af.value === option)"
          @click="addAppliedFilter(filter.id, option, filter.text)"
          size="sm"
        />
      </div>
    </div>
    
    <!-- Filtros aplicados -->
    <div v-if="appliedFilters.length > 0">
      <div style="display: flex; align-items: center; gap: 12px;">
        <h4>Filtros aplicados</h4>
        <g-chip
          variant="outline"
          type="secondary"
          text="Limpiar todo"
          size="sm"
          @click="clearAllFilters"
        />
      </div>
      <div class="flex flex-wrap gap-2">
        <g-chip
          v-for="applied in appliedFilters"
          :key="applied.id"
          variant="solid"
          type="primary"
          :text="applied.text"
          closable
          @close="removeAppliedFilter(applied.id)"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>`}}},render:()=>({components:{GChip:D,GConfigProvider:T},setup(){const e=ne([{id:"year",text:"Año",selected:!1,options:["2015","2016","2017","2018","2019","2020"]},{id:"category",text:"Categoría",selected:!1,options:["Importaciones","Exportaciones","Balanza comercial"]},{id:"country",text:"País",selected:!1,options:["Chile","Argentina","Brasil","Colombia","Perú"]},{id:"currency",text:"Moneda",selected:!1,options:["USD","EUR","CLP","ARS"]}]),t=E([]);return{mainFilters:e,appliedFilters:t,toggleMainFilter:a=>{const o=e.find(s=>s.id===a);if(o&&(o.selected=!o.selected,!o.selected)){const s=t.value.filter(c=>c.category!==a);t.value.splice(0,t.value.length),t.value.push(...s)}},addAppliedFilter:(a,o,s)=>{t.value.find(p=>p.category===a&&p.value===o)||t.value.push({id:`${a}-${o}`,category:a,value:o,text:`${s}: ${o}`})},removeAppliedFilter:a=>{const o=t.value.findIndex(s=>s.id===a);o>-1&&t.value.splice(o,1)},clearAllFilters:()=>{t.value.splice(0),e.forEach(a=>a.selected=!1)}}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-6" style="max-width: 800px;">
          
          <!-- Título -->
          <div>
            <h3 style="margin: 0 0 8px 0; font-size: 16px;">Sistema de filtros - Ejemplo financiero</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">
              Selecciona categorías de filtro, luego elige valores específicos que aparecerán como chips eliminables.
            </p>
          </div>
          
          <!-- Filtros principales (categorías) -->
          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600;">Categorías disponibles</h4>
            <div class="flex flex-wrap gap-3">
              <g-chip
                v-for="filter in mainFilters"
                :key="filter.id"
                variant="outline"
                type="primary"
                :text="filter.text"
                :selected="filter.selected"
                @click="toggleMainFilter(filter.id)"
              />
            </div>
          </div>
          
          <!-- Opciones para categorías seleccionadas -->
          <div v-for="filter in mainFilters.filter(f => f.selected)" :key="'options-' + filter.id">
            <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 500;">
              Opciones de {{ filter.text }}:
            </h4>
            <div class="flex flex-wrap gap-2" style="margin-bottom: 16px;">
              <g-chip
                v-for="option in filter.options"
                :key="filter.id + '-' + option"
                variant="outline"
                type="secondary"
                :text="option"
                :selected="appliedFilters.some(af => af.category === filter.id && af.value === option)"
                @click="addAppliedFilter(filter.id, option, filter.text)"
                style="cursor: pointer; font-size: 12px;"
                size="sm"
              />
            </div>
          </div>
          
          <!-- Filtros aplicados -->
          <div v-if="appliedFilters.length > 0">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <h4 style="margin: 0; font-size: 14px; font-weight: 600;">Filtros aplicados</h4>
              <g-chip
                variant="outline"
                type="secondary"
                text="Limpiar todo"
                size="sm"
                @click="clearAllFilters"
                style="cursor: pointer; color: #666;"
              />
            </div>
            <div class="flex flex-wrap gap-2">
              <g-chip
                v-for="applied in appliedFilters"
                :key="applied.id"
                variant="solid"
                type="primary"
                :text="applied.text"
                closable
                @close="removeAppliedFilter(applied.id)"
                size="sm"
              />
            </div>
          </div>
          
          <!-- Estado actual -->
          <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; font-size: 12px;">
            <strong>Estado actual:</strong><br>
            Categorías activas: {{ mainFilters.filter(f => f.selected).map(f => f.text).join(', ') || 'Ninguna' }}<br>
            Filtros aplicados: {{ appliedFilters.length }} filtro(s)
          </div>
          
        </div>
      </g-config-provider>
    `})},ie={name:"Chip con dropdown integrado",parameters:{docs:{source:{code:`<script setup lang="ts">
import { reactive, ref } from 'vue'
import { GChip } from '@flash-global66/g-chip'
import { GDropdownMenu, GDropdownItem } from '@flash-global66/g-dropdown'

const currencies = reactive([
  { title: 'Pesos colombianos', command: 'COP', flag: '🇨🇴' },
  { title: 'Dólar estadounidense', command: 'USD', flag: '🇺🇸' },
  { title: 'Euro', command: 'EUR', flag: '🇪🇺' }
])

const selectedCurrency = ref(currencies[0])

const handleCurrencyCommand = (command) => {
  selectedCurrency.value = currencies.find(c => c.command === command)
}
<\/script>

<template>
  <g-chip 
    :text="selectedCurrency.command"
    variant="outline"
    type="primary"
    :dropdown-enabled="true"
    trigger="click"
    placement="bottom-start"
    @command="handleCurrencyCommand"
  >
    <template #prefix>
      <span style="margin-right: 4px;">{{ selectedCurrency.flag }}</span>
    </template>
    
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item
          v-for="currency in currencies"
          :key="currency.command"
          :command="currency.command"
        >
          <span style="margin-right: 12px; font-size: 18px;">{{ currency.flag }}</span>
          <span style="font-size: 14px; color: #333;">{{ currency.title }}</span>
        </g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-chip>

  <!-- Ejemplo menú contextual -->
<div>
  <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Menú contextual</h3>
  <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
    Click derecho para ver el menú contextual
  </p>
  
  <g-chip 
    text="Click derecho aquí"
    variant="solid"
    type="secondary"
    :dropdown-enabled="true"
    trigger="contextmenu"
    placement="bottom-start"
    :actions="[
      { title: 'Copiar', command: 'copy' },
      { title: 'Editar', command: 'edit' },
      { title: 'Eliminar', command: 'delete' },
      { title: 'Compartir', command: 'share' }
    ]"
    @command="(command) => console.log('Comando ejecutado:', command)"
  />
</div>
</template>`}}},render:()=>({components:{GChip:D,GConfigProvider:T,GDropdownMenu:Nt,GDropdownItem:Vt},setup(){const e=ne([{title:"Pesos colombianos",command:"COP",flag:"🇨🇴"},{title:"Dólar estadounidense",command:"USD",flag:"🇺🇸"},{title:"Pesos argentinos",command:"ARS",flag:"🇦🇷"},{title:"Pesos chilenos",command:"CLP",flag:"🇨🇱"},{title:"Euro",command:"EUR",flag:"🇪🇺"},{title:"Real brasileño",command:"BRL",flag:"🇧🇷"}]),t=E(e[0]);return{currencies:e,selectedCurrency:t,handleCurrencyCommand:l=>{t.value=e.find(n=>n.command===l)||e[0]}}},template:`
      <g-config-provider>
        <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
          
          <div>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Selector de moneda</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
              Click en el chip para seleccionar una moneda desde el dropdown
            </p>
            
            <g-chip
              :text="selectedCurrency.command"
              variant="outline"
              type="primary"
              :dropdown-enabled="true"
              trigger="click"
              placement="bottom-start"
              @command="handleCurrencyCommand"
            >
              <template #prefix>
                <span style="margin-right: 4px;">{{ selectedCurrency.flag }}</span>
              </template>

              <template #dropdown>
                <g-dropdown-menu>
                  <g-dropdown-item
                    v-for="currency in currencies"
                    :key="currency.command"
                    :command="currency.command"
                  >
                    <span style="margin-right: 12px; font-size: 18px;">{{ currency.flag }}</span>
                    <span style="font-size: 14px; color: #333;">{{ currency.title }}</span>
                  </g-dropdown-item>
                </g-dropdown-menu>
              </template>
            </g-chip>

            <div style="margin-top: 12px; padding: 12px; background: #f8f9fa; border-radius: 6px; font-size: 14px;">
              <strong>Moneda seleccionada:</strong> {{ selectedCurrency.flag }} {{ selectedCurrency.title }} ({{ selectedCurrency.command }})
            </div>
          </div>
          
          <div>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Menú contextual</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
              Click derecho para ver el menú contextual
            </p>
            
            <g-chip 
              text="Click derecho aquí"
              variant="solid"
              type="secondary"
              :dropdown-enabled="true"
              trigger="contextmenu"
              placement="bottom-start"
              :actions="[
                { title: 'Copiar', command: 'copy' },
                { title: 'Editar', command: 'edit' },
                { title: 'Eliminar', command: 'delete' },
                { title: 'Compartir', command: 'share' }
              ]"
              @command="(command) => console.log('Comando ejecutado:', command)"
            />
          </div>
          
        </div>
      </g-config-provider>
    `})};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Básico",
  render: args => ({
    components: {
      GChip,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-chip v-bind="args" />
        </div>
      </g-config-provider>
    \`
  })
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Combinaciones de variantes y tamaños",
  render: () => ({
    components: {
      GChip,
      GConfigProvider
    },
    setup() {
      const state = reactive({
        types: ["primary", "secondary"],
        sizes: ["sm", "md"],
        variants: ["solid", "outline"]
      });
      return {
        state
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div v-for="type in state.types" :key="type" class="flex flex-row gap-6 items-center justify-center">
            <div v-for="size in state.sizes" :key="size" class="flex flex-col gap-4">
              <div v-for="variant in state.variants" :key="variant">
                <g-chip
                  :type="type"
                  :size="size"
                  :variant="variant"
                  text="Chip"
                />
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...Z.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Chips con iconos",
  render: () => ({
    components: {
      GChip,
      GConfigProvider
    },
    setup() {
      const iconExamples = [{
        iconLeft: "solid check",
        text: "Verificado"
      }, {
        iconRight: "regular chevron-down",
        text: "Dropdown"
      }, {
        iconLeft: "solid user",
        iconRight: "solid check",
        text: "Usuario activo"
      }, {
        iconLeft: "regular heart",
        text: "Favorito",
        variant: "outline"
      }, {
        iconLeft: "regular bell",
        text: "Notificación",
        type: "secondary"
      }, {
        iconRight: "solid arrow-right",
        text: "Siguiente",
        variant: "outline",
        type: "secondary"
      }];
      return {
        iconExamples
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <div>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Ejemplos con iconos</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
              Diferentes combinaciones de iconos prefijo y sufijo
            </p>
            <div class="flex flex-wrap gap-3">
              <g-chip
                v-for="(example, index) in iconExamples"
                :key="index"
                :text="example.text"
                :icon-left="example.iconLeft"
                :icon-right="example.iconRight"
                :variant="example.variant || 'solid'"
                :type="example.type || 'primary'"
                size="md"
              />
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Solo iconos prefijo</h4>
            <div class="flex flex-wrap gap-2">
              <g-chip text="Check" icon-left="solid check" size="sm" />
              <g-chip text="Usuario" icon-left="solid user" size="sm" />
              <g-chip text="Home" icon-left="solid home" size="sm" />
              <g-chip text="Search" icon-left="solid search" size="sm" />
              <g-chip text="Filter" icon-left="solid filter" size="sm" />
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Solo iconos sufijo</h4>
            <div class="flex flex-wrap gap-2">
              <g-chip text="Dropdown" icon-right="regular chevron-down" size="sm" variant="outline" />
              <g-chip text="Arrow" icon-right="solid arrow-right" size="sm" variant="outline" />
              <g-chip text="Times" icon-right="solid times" size="sm" variant="outline" />
              <g-chip text="Info" icon-right="solid info-circle" size="sm" variant="outline" />
              <g-chip text="Edit" icon-right="solid edit" size="sm" variant="outline" />
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Ambos iconos</h4>
            <div class="flex flex-wrap gap-2">
              <g-chip 
                text="Usuario activo" 
                icon-left="solid user" 
                icon-right="solid check" 
                variant="solid" 
                type="primary" 
              />
              <g-chip 
                text="Filtro aplicado" 
                icon-left="solid filter" 
                icon-right="solid times" 
                variant="outline" 
                type="secondary" 
              />
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Chips eliminables",
  render: () => ({
    components: {
      GChip,
      GConfigProvider
    },
    setup() {
      const initChips = [{
        text: "Chip 1",
        type: "primary",
        variant: "solid"
      }, {
        text: "Chip 2",
        type: "secondary",
        variant: "solid"
      }, {
        text: "Chip 3",
        type: "primary",
        variant: "outline"
      }, {
        text: "Chip 4",
        type: "secondary",
        variant: "outline"
      }];
      const dynamicChips = reactive([...initChips]);
      const handleClose = (chip: string) => {
        if (dynamicChips.length === 1) {
          dynamicChips.splice(-1, 1, ...initChips);
          return;
        }
        dynamicChips.splice(dynamicChips.findIndex(item => item.text === chip), 1);
      };
      return {
        dynamicChips,
        handleClose
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-row gap-4">
          <g-chip
            v-for="(chip, index) in dynamicChips"
            :key="chip.text"
            :type="chip.type"
            :variant="chip.variant"
            :text="chip.text"
            closable
            @close="() => handleClose(chip.text)"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...X.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  name: "Tipos y variantes (separados)",
  render: () => ({
    components: {
      GChip,
      GConfigProvider
    },
    setup() {
      return {};
    },
    template: \`
      <g-config-provider>
        <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <span style="font-weight: 600; margin-bottom: 8px;">Tipos (radio)</span>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Primary (xl radius)</span>
              <g-chip type="primary" variant="solid" text="Primary" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Secondary (sm radius)</span>
              <g-chip type="secondary" variant="solid" text="Secondary" />
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <span style="font-weight: 600; margin-bottom: 8px;">Variantes (color)</span>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Solid (grey-100)</span>
              <g-chip type="primary" variant="solid" text="Solid" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Outline (everBlue-100 border)</span>
              <g-chip type="primary" variant="outline" text="Outline" />
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <span style="font-weight: 600; margin-bottom: 8px;">Combinaciones</span>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <g-chip type="primary" variant="solid" text="Primary + Solid" />
              <g-chip type="primary" variant="outline" text="Primary + Outline" />
              <g-chip type="secondary" variant="solid" text="Secondary + Solid" />
              <g-chip type="secondary" variant="outline" text="Secondary + Outline" />
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  name: 'Sistema de filtros en cascada',
  parameters: {
    docs: {
      source: {
        code: \`<script setup lang="ts">
import { reactive, ref } from 'vue'
import { GChip } from '@flash-global66/g-chip'

interface MainFilter {
  id: string
  text: string
  selected: boolean
  options: string[]
}

interface AppliedFilter {
  id: string
  category: string
  value: string
  text: string
}

const mainFilters = reactive<MainFilter[]>([
  { id: 'year', text: 'Año', selected: false, options: ['2015', '2016', '2017', '2018', '2019', '2020'] },
  { id: 'category', text: 'Categoría', selected: false, options: ['Importaciones', 'Exportaciones'] },
  { id: 'country', text: 'País', selected: false, options: ['Chile', 'Argentina', 'Brasil'] }
])

const appliedFilters = ref<AppliedFilter[]>([])

const toggleMainFilter = (filterId: string) => {
  const filter = mainFilters.find(f => f.id === filterId)
  if (filter) {
    filter.selected = !filter.selected
    if (!filter.selected) {
      const filteredItems = appliedFilters.value.filter(af => af.category !== filterId)
      appliedFilters.value.splice(0, appliedFilters.value.length)
      appliedFilters.value.push(...filteredItems)
    }
  }
}

const addAppliedFilter = (category: string, value: string, categoryText: string) => {
  const exists = appliedFilters.value.find(af => af.category === category && af.value === value)
  if (!exists) {
    appliedFilters.value.push({
      id: \\\`\\\${category}-\\\${value}\\\`,
      category,
      value,
      text: \\\`\\\${categoryText}: \\\${value}\\\`
    })
  }
}

const removeAppliedFilter = (filterId: string) => {
  const index = appliedFilters.value.findIndex(af => af.id === filterId)
  if (index > -1) {
    appliedFilters.value.splice(index, 1)
  }
}

const clearAllFilters = () => {
  appliedFilters.value.splice(0)
  mainFilters.forEach(filter => filter.selected = false)
}
<\/script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h4>Categorías disponibles</h4>
      <div class="flex flex-wrap gap-3">
        <g-chip
          v-for="filter in mainFilters"
          :key="filter.id"
          variant="outline"
          type="primary"
          :text="filter.text"
          :selected="filter.selected"
          @click="toggleMainFilter(filter.id)"
        />
      </div>
    </div>
    
    <div v-for="filter in mainFilters.filter(f => f.selected)" :key="'options-' + filter.id">
      <h4>Opciones de {{ filter.text }}:</h4>
      <div class="flex flex-wrap gap-2">
        <g-chip
          v-for="option in filter.options"
          :key="filter.id + '-' + option"
          variant="outline"
          type="secondary"
          :text="option"
          :selected="appliedFilters.some(af => af.category === filter.id && af.value === option)"
          @click="addAppliedFilter(filter.id, option, filter.text)"
          size="sm"
        />
      </div>
    </div>
    
    <!-- Filtros aplicados -->
    <div v-if="appliedFilters.length > 0">
      <div style="display: flex; align-items: center; gap: 12px;">
        <h4>Filtros aplicados</h4>
        <g-chip
          variant="outline"
          type="secondary"
          text="Limpiar todo"
          size="sm"
          @click="clearAllFilters"
        />
      </div>
      <div class="flex flex-wrap gap-2">
        <g-chip
          v-for="applied in appliedFilters"
          :key="applied.id"
          variant="solid"
          type="primary"
          :text="applied.text"
          closable
          @close="removeAppliedFilter(applied.id)"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>\`
      }
    }
  },
  render: () => ({
    components: {
      GChip,
      GConfigProvider
    },
    setup() {
      const mainFilters = reactive<MainFilter[]>([{
        id: 'year',
        text: 'Año',
        selected: false,
        options: ['2015', '2016', '2017', '2018', '2019', '2020']
      }, {
        id: 'category',
        text: 'Categoría',
        selected: false,
        options: ['Importaciones', 'Exportaciones', 'Balanza comercial']
      }, {
        id: 'country',
        text: 'País',
        selected: false,
        options: ['Chile', 'Argentina', 'Brasil', 'Colombia', 'Perú']
      }, {
        id: 'currency',
        text: 'Moneda',
        selected: false,
        options: ['USD', 'EUR', 'CLP', 'ARS']
      }]);
      const appliedFilters = ref<AppliedFilter[]>([]);
      const toggleMainFilter = (filterId: string) => {
        const filter = mainFilters.find(f => f.id === filterId);
        if (filter) {
          filter.selected = !filter.selected;
          if (!filter.selected) {
            const filteredItems = appliedFilters.value.filter(af => af.category !== filterId);
            appliedFilters.value.splice(0, appliedFilters.value.length);
            appliedFilters.value.push(...filteredItems);
          }
        }
      };
      const addAppliedFilter = (category: string, value: string, categoryText: string) => {
        const exists = appliedFilters.value.find(af => af.category === category && af.value === value);
        if (!exists) {
          appliedFilters.value.push({
            id: \`\${category}-\${value}\`,
            category,
            value,
            text: \`\${categoryText}: \${value}\`
          });
        }
      };
      const removeAppliedFilter = (filterId: string) => {
        const index = appliedFilters.value.findIndex(af => af.id === filterId);
        if (index > -1) {
          appliedFilters.value.splice(index, 1);
        }
      };
      const clearAllFilters = () => {
        appliedFilters.value.splice(0);
        mainFilters.forEach(filter => filter.selected = false);
      };
      return {
        mainFilters,
        appliedFilters,
        toggleMainFilter,
        addAppliedFilter,
        removeAppliedFilter,
        clearAllFilters
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-6" style="max-width: 800px;">
          
          <!-- Título -->
          <div>
            <h3 style="margin: 0 0 8px 0; font-size: 16px;">Sistema de filtros - Ejemplo financiero</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">
              Selecciona categorías de filtro, luego elige valores específicos que aparecerán como chips eliminables.
            </p>
          </div>
          
          <!-- Filtros principales (categorías) -->
          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600;">Categorías disponibles</h4>
            <div class="flex flex-wrap gap-3">
              <g-chip
                v-for="filter in mainFilters"
                :key="filter.id"
                variant="outline"
                type="primary"
                :text="filter.text"
                :selected="filter.selected"
                @click="toggleMainFilter(filter.id)"
              />
            </div>
          </div>
          
          <!-- Opciones para categorías seleccionadas -->
          <div v-for="filter in mainFilters.filter(f => f.selected)" :key="'options-' + filter.id">
            <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 500;">
              Opciones de {{ filter.text }}:
            </h4>
            <div class="flex flex-wrap gap-2" style="margin-bottom: 16px;">
              <g-chip
                v-for="option in filter.options"
                :key="filter.id + '-' + option"
                variant="outline"
                type="secondary"
                :text="option"
                :selected="appliedFilters.some(af => af.category === filter.id && af.value === option)"
                @click="addAppliedFilter(filter.id, option, filter.text)"
                style="cursor: pointer; font-size: 12px;"
                size="sm"
              />
            </div>
          </div>
          
          <!-- Filtros aplicados -->
          <div v-if="appliedFilters.length > 0">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <h4 style="margin: 0; font-size: 14px; font-weight: 600;">Filtros aplicados</h4>
              <g-chip
                variant="outline"
                type="secondary"
                text="Limpiar todo"
                size="sm"
                @click="clearAllFilters"
                style="cursor: pointer; color: #666;"
              />
            </div>
            <div class="flex flex-wrap gap-2">
              <g-chip
                v-for="applied in appliedFilters"
                :key="applied.id"
                variant="solid"
                type="primary"
                :text="applied.text"
                closable
                @close="removeAppliedFilter(applied.id)"
                size="sm"
              />
            </div>
          </div>
          
          <!-- Estado actual -->
          <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; font-size: 12px;">
            <strong>Estado actual:</strong><br>
            Categorías activas: {{ mainFilters.filter(f => f.selected).map(f => f.text).join(', ') || 'Ninguna' }}<br>
            Filtros aplicados: {{ appliedFilters.length }} filtro(s)
          </div>
          
        </div>
      </g-config-provider>
    \`
  })
}`,...te.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  name: "Chip con dropdown integrado",
  parameters: {
    docs: {
      source: {
        code: \`<script setup lang="ts">
import { reactive, ref } from 'vue'
import { GChip } from '@flash-global66/g-chip'
import { GDropdownMenu, GDropdownItem } from '@flash-global66/g-dropdown'

const currencies = reactive([
  { title: 'Pesos colombianos', command: 'COP', flag: '🇨🇴' },
  { title: 'Dólar estadounidense', command: 'USD', flag: '🇺🇸' },
  { title: 'Euro', command: 'EUR', flag: '🇪🇺' }
])

const selectedCurrency = ref(currencies[0])

const handleCurrencyCommand = (command) => {
  selectedCurrency.value = currencies.find(c => c.command === command)
}
<\/script>

<template>
  <g-chip 
    :text="selectedCurrency.command"
    variant="outline"
    type="primary"
    :dropdown-enabled="true"
    trigger="click"
    placement="bottom-start"
    @command="handleCurrencyCommand"
  >
    <template #prefix>
      <span style="margin-right: 4px;">{{ selectedCurrency.flag }}</span>
    </template>
    
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item
          v-for="currency in currencies"
          :key="currency.command"
          :command="currency.command"
        >
          <span style="margin-right: 12px; font-size: 18px;">{{ currency.flag }}</span>
          <span style="font-size: 14px; color: #333;">{{ currency.title }}</span>
        </g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-chip>

  <!-- Ejemplo menú contextual -->
<div>
  <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Menú contextual</h3>
  <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
    Click derecho para ver el menú contextual
  </p>
  
  <g-chip 
    text="Click derecho aquí"
    variant="solid"
    type="secondary"
    :dropdown-enabled="true"
    trigger="contextmenu"
    placement="bottom-start"
    :actions="[
      { title: 'Copiar', command: 'copy' },
      { title: 'Editar', command: 'edit' },
      { title: 'Eliminar', command: 'delete' },
      { title: 'Compartir', command: 'share' }
    ]"
    @command="(command) => console.log('Comando ejecutado:', command)"
  />
</div>
</template>\`
      }
    }
  },
  render: () => ({
    components: {
      GChip,
      GConfigProvider,
      GDropdownMenu,
      GDropdownItem
    },
    setup() {
      const currencies = reactive([{
        title: "Pesos colombianos",
        command: "COP",
        flag: "🇨🇴"
      }, {
        title: "Dólar estadounidense",
        command: "USD",
        flag: "🇺🇸"
      }, {
        title: "Pesos argentinos",
        command: "ARS",
        flag: "🇦🇷"
      }, {
        title: "Pesos chilenos",
        command: "CLP",
        flag: "🇨🇱"
      }, {
        title: "Euro",
        command: "EUR",
        flag: "🇪🇺"
      }, {
        title: "Real brasileño",
        command: "BRL",
        flag: "🇧🇷"
      }]);
      const selectedCurrency = ref(currencies[0]);
      const handleCurrencyCommand = (command: string) => {
        selectedCurrency.value = currencies.find(c => c.command === command) || currencies[0];
      };
      return {
        currencies,
        selectedCurrency,
        handleCurrencyCommand
      };
    },
    template: \`
      <g-config-provider>
        <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
          
          <div>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Selector de moneda</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
              Click en el chip para seleccionar una moneda desde el dropdown
            </p>
            
            <g-chip
              :text="selectedCurrency.command"
              variant="outline"
              type="primary"
              :dropdown-enabled="true"
              trigger="click"
              placement="bottom-start"
              @command="handleCurrencyCommand"
            >
              <template #prefix>
                <span style="margin-right: 4px;">{{ selectedCurrency.flag }}</span>
              </template>

              <template #dropdown>
                <g-dropdown-menu>
                  <g-dropdown-item
                    v-for="currency in currencies"
                    :key="currency.command"
                    :command="currency.command"
                  >
                    <span style="margin-right: 12px; font-size: 18px;">{{ currency.flag }}</span>
                    <span style="font-size: 14px; color: #333;">{{ currency.title }}</span>
                  </g-dropdown-item>
                </g-dropdown-menu>
              </template>
            </g-chip>

            <div style="margin-top: 12px; padding: 12px; background: #f8f9fa; border-radius: 6px; font-size: 14px;">
              <strong>Moneda seleccionada:</strong> {{ selectedCurrency.flag }} {{ selectedCurrency.title }} ({{ selectedCurrency.command }})
            </div>
          </div>
          
          <div>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Menú contextual</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
              Click derecho para ver el menú contextual
            </p>
            
            <g-chip 
              text="Click derecho aquí"
              variant="solid"
              type="secondary"
              :dropdown-enabled="true"
              trigger="contextmenu"
              placement="bottom-start"
              :actions="[
                { title: 'Copiar', command: 'copy' },
                { title: 'Editar', command: 'edit' },
                { title: 'Eliminar', command: 'delete' },
                { title: 'Compartir', command: 'share' }
              ]"
              @command="(command) => console.log('Comando ejecutado:', command)"
            />
          </div>
          
        </div>
      </g-config-provider>
    \`
  })
}`,...ie.parameters?.docs?.source}}};const Ai=["Basic","AllCombinations","WithIcons","ClosableDynamic","TypesWithAutomaticRadius","SelectableFilters","WithIntegratedDropdown"];export{Z as AllCombinations,Y as Basic,X as ClosableDynamic,te as SelectableFilters,ee as TypesWithAutomaticRadius,Q as WithIcons,ie as WithIntegratedDropdown,Ai as __namedExportsOrder,Pi as default};
