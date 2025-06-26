import{d as R,s as G,r as f,a as b,o as Ye,u as I,C as ye,E as z,c as E,Y,J as He,w as we,b as V,e as _,f as h,h as D,$ as Ue,a0 as qe,Z as C,D as Je,x as K,a1 as ae,n as We,l as M,m as ne,k as te,y as me,p as Q,F as he,g as Ce,z as Ze,q as Qe}from"./vue.esm-bundler-BJr11hwL.js";import{s as Xe,G as eo,l as oo,j as no,b as to}from"./index-Bw_TJs8B.js";import{q as ro}from"./index-C_xCk5Bq.js";import{o as Ie}from"./index-CndGOJhM.js";import{a as ao}from"./index-DBpRHzck.js";import{o as X,l as O,u as se,w as so,C as Ee}from"./install-BguVdh6e.js";import{c as k,w as ge}from"./event-Ds2lZ8Nv.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as Te,c as io}from"./index-BTFHqAey.js";import{E as y}from"./aria-BUADUvnR.js";import{F as lo}from"./index-DGyh2IJz.js";import{c as _e}from"./refs-D0aCVajf.js";import{c as co,G as ee}from"./ConfigProvider-ilMzuFCG.js";import{b as po}from"./style-CI9YSOY4.js";import{y as Ge}from"./index-BHhmUDaL.js";import{G as ke}from"./index-7qGOi27u.js";import{G as uo}from"./index-D9XzRqN7.js";import{G as $e}from"./index-CsXFTp2Q.js";import{a as mo,b as fe}from"./documentation-stories-CHsh0W6O.js";import"./index-CuGeqn-1.js";import"./index-BPX3jD76.js";import"./_arrayPush-pzQDnaVN.js";import"./index-CcnpMbNE.js";import"./index-CeJqMXT-.js";import"./index-ChJ8fEFj.js";import"./use-form-item-D36Qv7kt.js";import"./constants-Dnj8X3EN.js";import"./index-B8ScOe4Z.js";import"./error-Cq9Fpw4b.js";import"./event-HEVJa2N9.js";import"./index.es-CbzxfxNJ.js";import"./index-DdPf6Guz.js";import"./index-DKfhJB4Q.js";const Fe=R({inheritAttrs:!1,__name:"collection",setup(e){return(o,s)=>G(o.$slots,"default")}});Fe.__docgenInfo={exportName:"default",displayName:"collection",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/collection/src/collection.vue"]};const Ne=R({name:"GCollectionItem",inheritAttrs:!1,__name:"collection-item",setup(e){return(o,s)=>G(o.$slots,"default")}});Ne.__docgenInfo={name:"GCollectionItem",exportName:"default",displayName:"collection-item",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/collection/src/collection-item.vue"]};const Oe="data-g-collection-item",Re=e=>{const o=`G${e}Collection`,s=`${o}Item`,a=Symbol(o),l=Symbol(s),c={...Fe,name:o,setup(){const t=f(),d=new Map;z(a,{itemMap:d,getItems:()=>{const p=I(t);if(!p)return[];const u=Array.from(p.querySelectorAll(`[${Oe}]`));return[...d.values()].sort((n,i)=>u.indexOf(n.ref)-u.indexOf(i.ref))},collectionRef:t})}},r={...Ne,name:s,setup(t,{attrs:d}){const g=f(),p=b(a,void 0);z(l,{collectionItemRef:g}),Ye(()=>{const u=I(g);u&&p.itemMap.set(u,{ref:u,...d})}),ye(()=>{const u=I(g);p.itemMap.delete(u)})}};return{COLLECTION_INJECTION_KEY:a,COLLECTION_ITEM_INJECTION_KEY:l,GCollection:c,GCollectionItem:r}},go=X({style:{type:O([String,Array,Object])},currentTabId:{type:O(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:O(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{GCollection:fo,GCollectionItem:vo,COLLECTION_INJECTION_KEY:ie,COLLECTION_ITEM_INJECTION_KEY:bo}=Re("RovingFocusGroup"),le=Symbol("elRovingFocusGroup"),Se=Symbol("elRovingFocusGroupItem"),yo={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},wo=(e,o)=>e,ho=(e,o,s)=>{const a=wo(e.code);return yo[a]},Co=(e,o)=>e.map((s,a)=>e[(a+o)%e.length]),ce=e=>{const{activeElement:o}=document;for(const s of e)if(s===o||(s.focus(),o!==document.activeElement))return},ve="currentTabIdChange",be="rovingFocusGroup.entryFocus",Io={bubbles:!1,cancelable:!0},De=R({name:"GRovingFocusGroupImpl",inheritAttrs:!1,props:go,emits:[ve,"entryFocus"],setup(e,{emit:o}){const s=f((e.currentTabId||e.defaultCurrentTabId)??null),a=f(!1),l=f(!1),c=f(),{getItems:r}=b(ie,void 0),t=E(()=>[{outline:"none"},e.style]),d=i=>{o(ve,i)},g=()=>{a.value=!0},p=k(i=>{e.onMousedown?.(i)},()=>{l.value=!0}),u=k(i=>{e.onFocus?.(i)},i=>{const S=!I(l),{target:A,currentTarget:$}=i;if(A===$&&S&&!I(a)){const F=new Event(be,Io);if($?.dispatchEvent(F),!F.defaultPrevented){const B=r().filter(N=>N.focusable),m=B.find(N=>N.active),T=B.find(N=>N.id===I(s)),L=[m,T,...B].filter(Boolean).map(N=>N.ref);ce(L)}}l.value=!1}),w=k(i=>{e.onBlur?.(i)},()=>{a.value=!1}),n=(...i)=>{o("entryFocus",...i)};z(le,{currentTabbedId:He(s),loop:Y(e,"loop"),tabIndex:E(()=>I(a)?-1:0),rovingFocusGroupRef:c,rovingFocusGroupRootStyle:t,orientation:Y(e,"orientation"),dir:Y(e,"dir"),onItemFocus:d,onItemShiftTab:g,onBlur:w,onFocus:u,onMousedown:p}),we(()=>e.currentTabId,i=>{s.value=i??null}),ao(c,be,n)}});function Eo(e,o,s,a,l,c){return G(e.$slots,"default")}const To=j(De,[["render",Eo]]);De.__docgenInfo={displayName:"GRovingFocusGroupImpl",exportName:"default",description:"",tags:{},events:[{name:"entryFocus"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/roving-focus-group/src/roving-focus-group-impl.vue"]};const Ae=R({name:"ElRovingFocusGroup",components:{GFocusGroupCollection:fo,GRovingFocusGroupImpl:To}});function _o(e,o,s,a,l,c){const r=C("g-roving-focus-group-impl"),t=C("g-focus-group-collection");return _(),V(t,null,{default:h(()=>[D(r,Ue(qe(e.$attrs)),{default:h(()=>[G(e.$slots,"default")]),_:3},16)]),_:3})}const Go=j(Ae,[["render",_o]]);Ae.__docgenInfo={displayName:"ElRovingFocusGroup",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/roving-focus-group/src/roving-focus-group.vue"]};const Be=R({components:{GRovingFocusCollectionItem:vo},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:s,loop:a,onItemFocus:l,onItemShiftTab:c}=b(le,void 0),{getItems:r}=b(ie,void 0),t=Te(),d=f(),g=k(n=>{o("mousedown",n)},n=>{e.focusable?l(I(t)):n.preventDefault()}),p=k(n=>{o("focus",n)},()=>{l(I(t))}),u=k(n=>{o("keydown",n)},n=>{const{code:i,shiftKey:S,target:A,currentTarget:$}=n;if(i===y.tab&&S){c();return}if(A!==$)return;const F=ho(n);if(F){n.preventDefault();let m=r().filter(T=>T.focusable).map(T=>T.ref);switch(F){case"last":{m.reverse();break}case"prev":case"next":{F==="prev"&&m.reverse();const T=m.indexOf($);m=a.value?Co(m,T+1):m.slice(T+1);break}}Je(()=>{ce(m)})}}),w=E(()=>s.value===I(t));return z(Se,{rovingFocusGroupItemRef:d,tabIndex:E(()=>I(w)?0:-1),handleMousedown:g,handleFocus:p,handleKeydown:u}),{id:t,handleKeydown:u,handleFocus:p,handleMousedown:g}}});function ko(e,o,s,a,l,c){const r=C("g-roving-focus-collection-item");return _(),V(r,{id:e.id,focusable:e.focusable,active:e.active},{default:h(()=>[G(e.$slots,"default")]),_:3},8,["id","focusable","active"])}const $o=j(Be,[["render",ko]]);Be.__docgenInfo={exportName:"default",displayName:"roving-focus-item",description:"",tags:{},props:[{name:"focusable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"active",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"mousedown"},{name:"focus"},{name:"keydown"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/roving-focus-group/src/roving-focus-item.vue"]};const oe=Symbol("gDropdown"),Fo=X({trigger:oo.trigger,triggerKeys:{type:O(Array),default:()=>[y.enter,y.numpadEnter,y.space,y.down]},placement:{type:O(String),default:"bottom"},popperOptions:{type:O(Object),default:()=>({})},id:String,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:O([Number,String]),default:0},maxHeight:{type:O([Number,String]),default:""},popperClass:{type:String,default:""},actions:{type:O(Array),required:!0,default:()=>[]},disabled:Boolean,role:{type:String,values:eo,default:"menu"},teleported:Xe.teleported,persistent:{type:Boolean,default:!0}}),Me=X({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,title:{type:String,default:"",required:!0},description:String,action:Function,icon:{type:String}}),No=X({onKeydown:{type:O(Function)}}),Oo=[y.down,y.pageDown,y.home],je=[y.up,y.pageUp,y.end],Ro=[...Oo,...je],{GCollection:So,GCollectionItem:Do,COLLECTION_INJECTION_KEY:Ao,COLLECTION_ITEM_INJECTION_KEY:Bo}=Re("Dropdown"),Pe=R({name:"GDropdownMenu",props:No,setup(e){const o=se("dropdown"),{focusTrapRef:s,onKeydown:a}=b(lo,void 0),{contentRef:l,role:c,triggerId:r}=b(oe,void 0),{collectionRef:t,getItems:d}=b(Ao,void 0),{rovingFocusGroupRef:g,rovingFocusGroupRootStyle:p,tabIndex:u,onBlur:w,onFocus:n,onMousedown:i}=b(le,void 0),{collectionRef:S}=b(ie,void 0),A=E(()=>[o.b("menu")]),$=_e(l,t,s,g,S),F=k(m=>{e.onKeydown?.(m)},m=>{const{currentTarget:T,code:P,target:L}=m;if(T.contains(L),y.tab===P&&m.stopImmediatePropagation(),m.preventDefault(),L!==I(l)||!Ro.includes(P))return;const U=d().filter(x=>!x.disabled).map(x=>x.ref);je.includes(P)&&U.reverse(),ce(U)});return{rovingFocusGroupRootStyle:p,tabIndex:u,dropdownKls:A,role:c,triggerId:r,dropdownListWrapperRef:$,handleKeydown:m=>{F(m),a(m)},onBlur:w,onFocus:n,onMousedown:i}}}),Mo=["role","aria-labelledby"];function jo(e,o,s,a,l,c){return _(),K("ul",{ref:e.dropdownListWrapperRef,class:M(e.dropdownKls),style:We(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...r)=>e.onBlur&&e.onBlur(...r)),onFocus:o[1]||(o[1]=(...r)=>e.onFocus&&e.onFocus(...r)),onKeydown:o[2]||(o[2]=ae((...r)=>e.handleKeydown&&e.handleKeydown(...r),["self"])),onMousedown:o[3]||(o[3]=ae((...r)=>e.onMousedown&&e.onMousedown(...r),["self"]))},[G(e.$slots,"default")],46,Mo)}const de=j(Pe,[["render",jo]]);Pe.__docgenInfo={displayName:"GDropdownMenu",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown-menu.vue"]};const Le=R({name:"DropdownItemImpl",components:{GIconFont:Ie},props:Me,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const s=se("dropdown"),{role:a}=b(oe,void 0),{collectionItemRef:l}=b(Bo,void 0),{collectionItemRef:c}=b(bo,void 0),{rovingFocusGroupItemRef:r,tabIndex:t,handleFocus:d,handleKeydown:g,handleMousedown:p}=b(Se,void 0),u=_e(l,c,r),w=E(()=>a.value==="menu"?"menuitem":a.value==="navigation"?"link":"button"),n=k(i=>{if([y.enter,y.numpadEnter,y.space].includes(i.code))return i.preventDefault(),i.stopImmediatePropagation(),o("clickimpl",i),!0},g);return{ns:s,itemRef:u,dataset:{[Oe]:""},role:w,tabIndex:t,handleFocus:d,handleKeydown:n,handleMousedown:p}}}),Po=["aria-disabled","tabindex","role"];function Lo(e,o,s,a,l,c){const r=C("g-icon-font");return _(),K(he,null,[e.divided?(_(),K("li",{key:0,role:"separator",class:M(e.ns.bem("menu","item","divided"))},null,2)):ne("",!0),te("li",Q({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=t=>{e.action&&e.action?.(t),e.$emit("clickimpl",t)}),onFocus:o[1]||(o[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onKeydown:o[2]||(o[2]=ae((...t)=>e.handleKeydown&&e.handleKeydown(...t),["self"])),onMousedown:o[3]||(o[3]=(...t)=>e.handleMousedown&&e.handleMousedown(...t)),onPointermove:o[4]||(o[4]=t=>e.$emit("pointermove",t)),onPointerleave:o[5]||(o[5]=t=>e.$emit("pointerleave",t))}),[G(e.$slots,"default",{},()=>[e.icon?(_(),V(r,{key:0,name:e.icon,class:M(e.ns.bem("menu","item","icon"))},null,8,["name","class"])):ne("",!0),te("div",{class:M(e.ns.bem("menu","item","content"))},[te("span",{class:M(e.ns.bem("menu","item","title"))},me(e.title),3),e.description?(_(),K("span",{key:0,class:M(e.ns.bem("menu","item","description"))},me(e.description),3)):ne("",!0)],2)])],16,Po)],64)}const Ko=j(Le,[["render",Lo]]);Le.__docgenInfo={displayName:"DropdownItemImpl",exportName:"default",description:"",tags:{},events:[{name:"clickimpl"},{name:"pointermove"},{name:"pointerleave"},{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown-item-impl.vue"]};const zo=()=>({gDropdown:b("gDropdown",{})}),Ke=R({name:"GDropdownItem",components:{GDropdownCollectionItem:Do,GRovingFocusItem:$o,GDropdownItemImpl:Ko},inheritAttrs:!1,props:Me,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:s}){const{gDropdown:a}=zo(),l=Ce(),c=f(null),r=E(()=>I(c)?.textContent??""),{onItemEnter:t,onItemLeave:d}=b(oe,void 0),g=k(n=>(o("pointermove",n),n.defaultPrevented),ge(n=>{if(e.disabled){d(n);return}const i=n.currentTarget;i===document.activeElement||i.contains(document.activeElement)||(t(n),n.defaultPrevented||i?.focus())})),p=k(n=>(o("pointerleave",n),n.defaultPrevented),ge(d)),u=k(n=>{if(!e.disabled)return o("click",n),n.type!=="keydown"&&n.defaultPrevented},n=>{if(e.disabled){n.stopImmediatePropagation();return}a?.hideOnClick?.value&&a.handleClick?.(),a.commandHandler?.(e.command,l,n)}),w=E(()=>({...e,...s}));return{handleClick:u,handlePointerMove:g,handlePointerLeave:p,textContent:r,propsAndAttrs:w}}});function Vo(e,o,s,a,l,c){const r=C("g-dropdown-item-impl"),t=C("g-roving-focus-item"),d=C("g-dropdown-collection-item");return _(),V(d,{disabled:e.disabled,"text-value":e.title??e.textContent},{default:h(()=>[D(t,{focusable:!e.disabled},{default:h(()=>[D(r,Q(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:h(()=>[G(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}const pe=j(Ke,[["render",Vo]]);Ke.__docgenInfo={displayName:"GDropdownItem",exportName:"default",description:"",tags:{},events:[{name:"pointermove"},{name:"pointerleave"},{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown-item.vue"]};const ze=R({name:"GDropdown",components:{GScrollbar:ro,GDropdownCollection:So,GDropdownMenu:de,GDropdownItem:pe,GTooltip:to,GRovingFocusGroup:Go,GOnlyChild:no,GIconFont:Ie},props:Fo,emits:["visible-change","click","command"],setup(e,{emit:o}){const s=Ce(),a=se("dropdown"),{t:l}=co(),c=f(),r=f(),t=f(),d=f(),g=f(null),p=f(null),u=f(!1),w=E(()=>({maxHeight:po(e.maxHeight)})),n=E(()=>io(e.trigger)),i=Te().value,S=E(()=>e.id||i);we([c,n],([v,xe],[ue])=>{ue?.$el?.removeEventListener&&ue.$el.removeEventListener("pointerenter",m),v?.$el?.removeEventListener&&v.$el.removeEventListener("pointerenter",m),v?.$el?.addEventListener&&xe.includes("hover")&&v.$el.addEventListener("pointerenter",m)},{immediate:!0}),ye(()=>{c.value?.$el?.removeEventListener&&c.value.$el.removeEventListener("pointerenter",m)});function A(){$()}function $(){t.value?.onClose()}function F(){t.value?.onOpen()}function B(...v){o("command",...v)}function m(){c.value?.$el?.focus()}function T(){}function P(){const v=I(d);n.value.includes("hover")&&v?.focus(),p.value=null}function L(v){p.value=v}function N(v){u.value||(v.preventDefault(),v.stopImmediatePropagation())}function U(){o("visible-change",!0)}function x(v){v?.type==="keydown"&&d.value?.focus()}function Ve(){o("visible-change",!1)}return z(oe,{contentRef:d,role:E(()=>e.role),triggerId:S,isUsingKeyboard:u,onItemEnter:T,onItemLeave:P}),z("gDropdown",{instance:s,handleClick:A,commandHandler:B,trigger:Y(e,"trigger"),hideOnClick:Y(e,"hideOnClick")}),{t:l,ns:a,scrollbar:g,wrapStyle:w,triggerId:S,currentTabId:p,handleCurrentTabIdChange:L,handlerMainButtonClick:v=>{o("click",v)},handleEntryFocus:N,handleClose:$,handleOpen:F,handleBeforeShowTooltip:U,handleShowTooltip:x,handleBeforeHideTooltip:Ve,onFocusAfterTrapped:v=>{v.preventDefault(),d.value?.focus?.({preventScroll:!0})},popperRef:t,contentRef:d,triggeringElementRef:c,referenceElementRef:r,actions:E(()=>e.actions)}}});function xo(e,o,s,a,l,c){const r=C("g-dropdown-item"),t=C("g-dropdown-menu"),d=C("g-dropdown-collection"),g=C("g-roving-focus-group"),p=C("g-scrollbar"),u=C("g-only-child"),w=C("g-tooltip");return _(),K("div",{class:M([e.ns.b(),e.ns.is("disabled",e.disabled)])},[D(w,{ref:"popperRef",role:e.role,effect:"light","fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"is-component":"","hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":`${e.ns.e("popper")} ${e.popperClass??""}`,"reference-element":e.referenceElementRef?.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:e.persistent,onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},{content:h(()=>[D(p,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:h(()=>[D(g,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:h(()=>[D(d,null,{default:h(()=>[e.actions.length>0?(_(),V(t,{key:0},{default:h(()=>[(_(!0),K(he,null,Ze(e.actions,(n,i)=>(_(),V(r,Q({key:i,ref_for:!0},n),Qe({_:2},[e.$slots.option?{name:"default",fn:h(()=>[G(e.$slots,"option",Q({ref_for:!0},n))]),key:"0"}:void 0]),1040))),128))]),_:3})):G(e.$slots,"dropdown",{key:1})]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),default:h(()=>[D(u,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:h(()=>[G(e.$slots,"default")]),_:3},8,["id","tabindex"])]),_:3},8,["role","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","disabled","transition","teleported","persistent","onBeforeShow","onShow","onBeforeHide"])],2)}const Yo=j(ze,[["render",xo]]);ze.__docgenInfo={displayName:"GDropdown",exportName:"default",description:"",tags:{},events:[{name:"visible-change"},{name:"click"},{name:"command"}],slots:[{name:"option",scoped:!0,bindings:[]},{name:"dropdown"},{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dropdown/src/dropdown.vue"]};const H=so(Yo,{DropdownItem:pe,DropdownMenu:de});Ee(pe);Ee(de);const Ho="0.1.0",re={"@flash-global66/g-collection":"^0.0.1","@flash-global66/g-focus-trap":"^0.0.7","@flash-global66/g-icon-font":"^0.4.0","@flash-global66/g-popper":"^0.0.10","@flash-global66/g-roving-focus-group":"^0.0.1","@flash-global66/g-scrollbar":"^0.1.0","@flash-global66/g-slot":"^0.0.2","@flash-global66/g-tooltip":"^0.1.0","@popperjs/core":"^2.11.6","element-plus":"^2.9.0",vue:"^3.2.0"},Fn={title:"Data/Dropdown",component:H,parameters:{docs:{description:{component:`\`GDropdown\` - Componente que permite crear un menú desplegable con múltiples opciones y acciones.

Un elemento de interfaz de usuario que permite a los usuarios seleccionar una opción de una lista de opciones. Puede contener texto, iconos y otros elementos interactivos.

> La versión de este componente es \`${Ho}\`.

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
${mo(re)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${fe(re)}

# Dependencias externas
yarn add ${fe(re,!0)}
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
}`},defaultValue:{summary:"[]"}}},trigger:{description:"Tipo de disparador del drawer",control:"select",options:["click","hover","contextmenu"],table:{category:"Comportamiento y Activación",type:{summary:"string"},defaultValue:{summary:"hover"}}},triggerKeys:{name:"trigger-keys",description:"Teclas de disparo del drawer",control:"array",table:{category:"Comportamiento y Activación",type:{summary:"string[]"},defaultValue:{summary:"[]"}}},hideOnClick:{name:"hide-on-click",description:"Ocultar al hacer clic en el drawer",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showTimeout:{name:"show-timeout",description:"Retraso para mostrar el drawer",control:"number",table:{category:"Comportamiento y Activación",type:{summary:"number"},defaultValue:{summary:"150"}}},hideTimeout:{name:"hide-timeout",description:"Retraso para ocultar el drawer",control:"number",table:{category:"Comportamiento y Activación",type:{summary:"number"},defaultValue:{summary:"150"}}},teleported:{description:"Teletransporta el dropdown al elemento append-to",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},persistent:{description:"Tooltip persistente",control:"boolean",table:{category:"Comportamiento y Activación",type:{summary:"boolean"},defaultValue:{summary:"false"}}},command:{name:"command",description:"Se activa al ejecutar un comando en el drawer",table:{category:"Eventos y Métodos",type:{summary:"(...args: any[]) => void"}}},visibleChange:{name:"visible-change",description:"Se activa al cambiar la visibilidad del drawer",table:{category:"Eventos y Métodos",type:{summary:"(visible: boolean) => void"}}},handleClose:{name:"handle-close",description:"Método para cerrar el dropdown",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},handleOpen:{name:"handle-open",description:"Método para abrir el dropdown",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},popperOptions:{name:"popper-options",description:"Opciones de Popper.js",control:"object",table:{category:"Configuración Avanzada",type:{summary:"object"},defaultValue:{summary:"{}"}}},default:{description:"Disparador del dropdown",table:{category:"Slot",type:{summary:"Slot"}},control:!1}},args:{maxHeight:"100%",disabled:!1,placement:"bottom-start",trigger:"hover",triggerKeys:["enter"],hideOnClick:!0,showTimeout:150,hideTimeout:150,role:"menu",tabindex:0,popperOptions:{},teleported:!0,persistent:!1,actions:[{title:"Abrir",icon:"regular arrow-up-right-from-square",action:()=>{console.log("Abrir")}},{title:"Editar",icon:"regular pen",action:()=>{console.log("Editar")}},{title:"Eliminar",icon:"regular trash",action:()=>{console.log("Eliminar")}},{title:"Actualizar",icon:"regular arrows-rotate",disabled:!0,action:()=>{console.log("Actualizar")}}]}},q={name:"Básico",render:e=>({components:{GDropdown:H,GConfigProvider:ee,GIconButton:ke},setup(){return{args:e}},template:`
      <g-config-provider>
        <g-dropdown v-bind="args">
          <g-icon-button icon="regular plus-circle" />
        </g-dropdown>
      </g-config-provider>
    `})},J={name:"Todos los tipos de disparadores",parameters:{docs:{description:{story:`Este ejemplo muestra cómo se ven los diferentes tipos de disparadores.
- Disparador de clic
- Disparador de desplazamiento
- Disparador de enfoque`}}},render:()=>({components:{GDropdown:H,GConfigProvider:ee,GRadioGroup:uo,GTag:$e},setup(){const e=f("click");return{actions:[{title:"Enviar correo",icon:"regular envelope",description:"Esta acción te permite enviar un correo electrónico",action:()=>{console.log("Enviar correo")}},{title:"Buscar",icon:"regular magnifying-glass",description:"Esta acción te permite buscar un elemento",action:()=>{console.log("Buscar")}},{title:"Exportar",icon:"regular arrow-up-from-bracket",description:"Esta acción te permite exportar un elemento",action:()=>{console.log("Exportar")}}],triggers:[{value:"click",label:"Click"},{value:"hover",label:"Hover"},{value:"contextmenu",label:"Context Menu"}],trigger:e}},template:`
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
    `})},W={name:"Manejo de la opción de comando",parameters:{docs:{description:{story:`Este ejemplo muestra cómo manejar el evento de comando.
- Se utiliza un botón para abrir el menú desplegable.
- Al hacer clic en una opción, se muestra un mensaje en la consola con el nombre de la opción seleccionada.`}}},render:()=>({components:{GDropdown:H,GConfigProvider:ee,GButton:Ge,GTag:$e},setup(){const e=f("");return{actions:[{title:"Enviar correo",icon:"regular envelope",command:"send-email",description:"Esta acción te permite enviar un correo electrónico",action:()=>{console.log("Enviar correo")}},{title:"Buscar",icon:"regular magnifying-glass",command:"search",description:"Esta acción te permite buscar un elemento",action:()=>{console.log("Buscar")}},{title:"Exportar",icon:"regular arrow-up-from-bracket",command:"export",description:"Esta acción te permite exportar un elemento",action:()=>{console.log("Exportar")}}],handleCommand:a=>{e.value=a},commandClicked:e}},template:`
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
    `})},Z={name:"Métodos del dropdown",parameters:{docs:{description:{story:`Este ejemplo muestra cómo usar los métodos del dropdown.

- Se utiliza un botón para abrir el menú desplegable.
- Se utiliza un botón para cerrar el menú desplegable.`}}},render:()=>({components:{GDropdown:H,GConfigProvider:ee,GButton:Ge,GIconButton:ke},setup(){const e=f(null),o=f([]),s=f(""),a=async()=>{try{return(await(await fetch("https://restcountries.com/v3.1/all")).json()).slice(0,25).map(p=>({icon:p.flags.svg,title:p.name.common,command:p.flags.svg}))}catch(r){return console.error("Error fetching data:",r),[]}};return{dropdownRef:e,handleVisibleChange:r=>{r&&o.value.length===0&&a().then(t=>{o.value=t})},countries:o,handleCommand:r=>{s.value=r},svgCurrentCountry:s}},template:`
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
    `})};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};const Nn=["Basic","allTypesOfTriggers","commandEvent","dropdownMethods"];export{q as Basic,Nn as __namedExportsOrder,J as allTypesOfTriggers,W as commandEvent,Fn as default,Z as dropdownMethods};
