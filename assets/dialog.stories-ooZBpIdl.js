import{D as ce,E as We,a7 as Ce,r as m,d as ne,w as te,u as n,C as be,x as Xe,P as Me,k as S,b as de,o as B,a8 as Ye,g as ae,a3 as He,G as Ze,c as M,I as xe,h as U,j as K,f as oe,n as w,t as Ve,F as Je,m as Qe,e as N,l as eo,p as ze,M as oo,R as to,q as ao,Z as lo,a2 as no}from"./vue.esm-bundler-BUoj5ptC.js";import{m as ke,c as so,v as ue,l as le,x as io,u as Oe,y as ro,J as co,K as uo,b as go,L as po,G as j}from"./ConfigProvider-CrOhbRZ6.js";import{i as fo,u as mo,E as bo,a as vo}from"./index-DwPJD4c3.js";import{_ as Co}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as Ge,a as yo}from"./index-DLojGMWh.js";import{P as pe}from"./vnode-H7hbk9aL.js";import{U as Ne}from"./event-BB_Ol6Sd.js";import{a as Ae}from"./index-KaGzp0yT.js";import{b as ve}from"./style-BR37xKJb.js";import{u as Te}from"./index-Dh3Gw0Zf.js";import{_ as ho}from"./Icon-HxEiN7t9.js";import{b as Do}from"./index-CvOSMUbh.js";import{c as Eo}from"./refs-CgLmdcfT.js";import{G as R}from"./index-BpTSg4uy.js";import"./error-Cq9Fpw4b.js";import"./scroll-DxFYRWxb.js";import"./_initCloneObject-MVraUcJR.js";import"./castArray-DceVieY3.js";import"./index.es-DwVakxBA.js";import"./index-DDVpgGx_.js";import"./index-BOx2y-Jl.js";const xo=(e,o,l,t)=>{let d={offsetX:0,offsetY:0};const i=A=>{const y=A.clientX,E=A.clientY,{offsetX:h,offsetY:D}=d,a=e.value.getBoundingClientRect(),s=a.left,u=a.top,f=a.width,C=a.height,g=document.documentElement.clientWidth,I=document.documentElement.clientHeight,x=-s+h,O=-u+D,P=g-s-f+h,L=I-u-C+D,T=$=>{let p=h+$.clientX-y,k=D+$.clientY-E;t?.value||(p=Math.min(Math.max(p,x),P),k=Math.min(Math.max(k,O),L)),d={offsetX:p,offsetY:k},e.value&&(e.value.style.transform=`translate(${ve(p)}, ${ve(k)})`)},V=()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",V)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",V)},b=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",i)},v=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",i)},c=()=>{d={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return ce(()=>{We(()=>{l.value?b():v()})}),Ce(()=>{v()}),{resetPosition:c}},fe="focus-trap.focus-after-trapped",me="focus-trap.focus-after-released",Vo="focus-trap.focusout-prevented",Fe={cancelable:!0,bubbles:!1},ko={cancelable:!0,bubbles:!1},we="focusAfterTrapped",Be="focusAfterReleased",_e=Symbol("elFocusTrap"),ye=m(),ge=m(0),he=m(0);let se=0;const je=e=>{const o=[],l=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>{const d=t.tagName==="INPUT"&&t.type==="hidden";return t.disabled||t.hidden||d?NodeFilter.FILTER_SKIP:t.tabIndex>=0||t===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;l.nextNode();)o.push(l.currentNode);return o},Se=(e,o)=>{for(const l of e)if(!Ao(l,o))return l},Ao=(e,o)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(o&&e===o)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},To=e=>{const o=je(e),l=Se(o,e),t=Se(o.reverse(),e);return[l,t]},Fo=e=>e instanceof HTMLInputElement&&"select"in e,_=(e,o)=>{if(e&&e.focus){const l=document.activeElement;let t=!1;ke(e)&&!fo(e)&&!e.getAttribute("tabindex")&&(e.setAttribute("tabindex","-1"),t=!0),e.focus({preventScroll:!0}),he.value=window.performance.now(),e!==l&&Fo(e)&&o&&e.select(),ke(e)&&t&&e.removeAttribute("tabindex")}};function Ie(e,o){const l=[...e],t=e.indexOf(o);return t!==-1&&l.splice(t,1),l}const wo=()=>{let e=[];return{push:t=>{const d=e[0];d&&t!==d&&d.pause(),e=Ie(e,t),e.unshift(t)},remove:t=>{e=Ie(e,t),e[0]?.resume?.()}}},Bo=(e,o=!1)=>{const l=document.activeElement;for(const t of e)if(_(t,o),document.activeElement!==l)return},Pe=wo(),So=()=>ge.value>he.value,ie=()=>{ye.value="pointer",ge.value=window.performance.now()},Le=()=>{ye.value="keyboard",ge.value=window.performance.now()},Io=()=>(ce(()=>{se===0&&(document.addEventListener("mousedown",ie),document.addEventListener("touchstart",ie),document.addEventListener("keydown",Le)),se++}),Ce(()=>{se--,se<=0&&(document.removeEventListener("mousedown",ie),document.removeEventListener("touchstart",ie),document.removeEventListener("keydown",Le))}),{focusReason:ye,lastUserFocusTimestamp:ge,lastAutomatedFocusTimestamp:he}),re=e=>new CustomEvent(Vo,{...ko,detail:e}),Re=ne({name:"GFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[we,Be,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:o}){const l=m();let t,d;const{focusReason:i}=Io();mo(a=>{e.trapped&&!b.paused&&o("release-requested",a)});const b={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},v=a=>{if(!e.loop&&!e.trapped||b.paused)return;const{code:s,altKey:u,ctrlKey:f,metaKey:C,currentTarget:g,shiftKey:I}=a,{loop:x}=e,O=s===bo.tab&&!u&&!f&&!C,P=document.activeElement;if(O&&P){const L=g,[T,V]=To(L);if(T&&V){if(!I&&P===V){const p=re({focusReason:i.value});o("focusout-prevented",p),p.defaultPrevented||(a.preventDefault(),x&&_(T,!0))}else if(I&&[T,L].includes(P)){const p=re({focusReason:i.value});o("focusout-prevented",p),p.defaultPrevented||(a.preventDefault(),x&&_(V,!0))}}else if(P===L){const p=re({focusReason:i.value});o("focusout-prevented",p),p.defaultPrevented||a.preventDefault()}}};Me(_e,{focusTrapRef:l,onKeydown:v}),te(()=>e.focusTrapEl,a=>{a&&(l.value=a)},{immediate:!0}),te([l],([a],[s])=>{a&&(a.addEventListener("keydown",v),a.addEventListener("focusin",y),a.addEventListener("focusout",E)),s&&(s.removeEventListener("keydown",v),s.removeEventListener("focusin",y),s.removeEventListener("focusout",E))});const c=a=>{o(we,a)},A=a=>o(Be,a),y=a=>{const s=n(l);if(!s)return;const u=a.target,f=a.relatedTarget,C=u&&s.contains(u);e.trapped||f&&s.contains(f)||(t=f),C&&o("focusin",a),!b.paused&&e.trapped&&(C?d=u:_(d,!0))},E=a=>{const s=n(l);if(!(b.paused||!s))if(e.trapped){const u=a.relatedTarget;!so(u)&&!s.contains(u)&&setTimeout(()=>{if(!b.paused&&e.trapped){const f=re({focusReason:i.value});o("focusout-prevented",f),f.defaultPrevented||_(d,!0)}},0)}else{const u=a.target;u&&s.contains(u)||o("focusout",a)}};async function h(){await be();const a=n(l);if(a){Pe.push(b);const s=a.contains(document.activeElement)?t:document.activeElement;if(t=s,!a.contains(s)){const f=new Event(fe,Fe);a.addEventListener(fe,c),a.dispatchEvent(f),f.defaultPrevented||be(()=>{let C=e.focusStartEl;Xe(C)||(_(C),document.activeElement!==C&&(C="first")),C==="first"&&Bo(je(a),!0),(document.activeElement===s||C==="container")&&_(a)})}}}function D(){const a=n(l);if(a){a.removeEventListener(fe,c);const s=new CustomEvent(me,{...Fe,detail:{focusReason:i.value}});a.addEventListener(me,A),a.dispatchEvent(s),!s.defaultPrevented&&(i.value=="keyboard"||!So()||a.contains(document.activeElement))&&_(t??document.body),a.removeEventListener(me,A),Pe.remove(b)}}return ce(()=>{e.trapped&&h(),te(()=>e.trapped,a=>{a?h():D()})}),Ce(()=>{e.trapped&&D(),l.value&&(l.value.removeEventListener("keydown",v),l.value.removeEventListener("focusin",y),l.value.removeEventListener("focusout",E),l.value=void 0)}),{onKeydown:v}}});function Po(e,o,l,t,d,i){return S(e.$slots,"default",{handleKeydown:e.onKeydown})}const Lo=Co(Re,[["render",Po]]);Re.__docgenInfo={displayName:"GFocusTrap",exportName:"default",description:"",tags:{},props:[{name:"loop",type:{name:"boolean"}},{name:"trapped",type:{name:"boolean"}},{name:"focusTrapEl",type:{name:"HTMLElement"}},{name:"focusStartEl",type:{name:"'container' | 'first' | HTMLElement"},defaultValue:{func:!1,value:"'first'"}}],events:[{name:"focusin"},{name:"focusout"},{name:"focusout-prevented"},{name:"release-requested"}],slots:[{name:"default",scoped:!0,bindings:[{name:"handle-keydown",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/focus-trap/focus-trap.vue"]};const Mo=ue({to:{type:le([String,Object]),required:!0},disabled:Boolean}),$e=ne({__name:"teleport",props:Mo,setup(e){return(o,l)=>o.disabled?S(o.$slots,"default",{key:0}):(B(),de(Ye,{key:1,to:o.to},[S(o.$slots,"default")],8,["to"]))}});$e.__docgenInfo={exportName:"default",displayName:"teleport",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/teleport/teleport.vue"]};const zo=io($e),Oo=ue({mask:{type:Boolean,default:!0},customMaskEvent:Boolean,overlayClass:{type:le([String,Array,Object])},zIndex:{type:le([String,Number])}}),Go={click:e=>e instanceof MouseEvent},No="overlay",_o=ne({name:"GOverlay",props:Oo,emits:Go,setup(e,{slots:o,emit:l}){const t=Oe(No),d=c=>{l("click",c)},{onClick:i,onMousedown:b,onMouseup:v}=Ge(e.customMaskEvent?void 0:d);return()=>e.mask?ae("div",{class:[t.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:i,onMousedown:b,onMouseup:v},[S(o,"default")],pe.STYLE|pe.CLASS|pe.PROPS,["onClick","onMouseup","onMousedown"]):He("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[S(o,"default")])}}),jo=_o,qe=Symbol("dialogInjectionKey"),Ue=ue({alignCenter:{type:Boolean,default:!0},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,headerClass:String,bodyClass:String,footerClass:String,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"},width:{type:[String,Number]},sizeMode:{type:String,default:"default",validator:e=>["default","fixed","adaptive"].includes(e)},footerButtons:{type:Array,default:()=>[],validator:e=>Array.isArray(e)}}),Ro={close:()=>!0,buttonClick:e=>e};function $o(e){e.draggable&&e.fullscreen,e.width&&(e.fullscreen||e.sizeMode),e.footerButtons&&e.footerButtons.length>3}const qo=ue({...Ue,appendToBody:{type:Boolean,default:!1},appendTo:{type:le([String,Object]),default:"body"},beforeClose:{type:le(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,headerClass:String,bodyClass:String,footerClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!0},ariaLevel:{type:String,default:"2"}}),Uo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Ne]:e=>ro(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ko=(e,o,{closeOnClickModal:l,closeOnPressEscape:t})=>{const i=Ze().emit,{nextZIndex:b}=co();let v="";const c=Ae(),A=Ae(),y=m(!1),E=m(!1),h=m(!1),D=m(e.zIndex??b()),a=M(()=>e.footerButtons?.slice(0,3)||[]),s=M(()=>a.value.length===3?"layout-dual-row":"layout-single-column");let u,f;const C=uo("namespace",po),g=M(()=>{const F={},Ee=`--${C.value}-dialog`;return e.fullscreen||(e.top&&(F[`${Ee}-margin-top`]=e.top),e.width&&(F[`${Ee}-width`]=ve(e.width))),F}),I=M(()=>e.alignCenter?{display:"flex"}:{});function x(){i("opened")}function O(){i("closed"),i(Ne,!1),e.destroyOnClose&&(h.value=!1)}function P(){i("close")}function L(){f?.(),u?.(),e.openDelay&&e.openDelay>0?{stop:u}=Te(()=>p(),e.openDelay):p()}function T(){u?.(),f?.(),e.closeDelay&&e.closeDelay>0?{stop:f}=Te(()=>k(),e.closeDelay):k()}const V=()=>{e.showClose&&(e.beforeClose?e.beforeClose(k):k())};function $(){l.value&&V()}function p(){go&&(y.value=!0)}function k(){y.value=!1}function De(){i("openAutoFocus")}function r(){i("closeAutoFocus")}function G(F){F.detail?.focusReason==="pointer"&&F.preventDefault()}e.lockScroll&&yo(y);function q(){t.value&&V()}return te(()=>e.modelValue,F=>{F?(E.value=!1,L(),h.value=!0,D.value=vo(e.zIndex)?b():D.value++,be(()=>{i("open"),o.value&&(o.value.parentElement.scrollTop=0,o.value.parentElement.scrollLeft=0,o.value.scrollTop=0)})):y.value&&T()}),te(()=>e.fullscreen,F=>{o.value&&(F?(v=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=v)}),ce(()=>{e.modelValue&&(y.value=!0,h.value=!0,L())}),{afterEnter:x,afterLeave:O,beforeLeave:P,handleClose:V,onModalClick:$,close:T,doClose:k,onOpenAutoFocus:De,onCloseAutoFocus:r,onCloseRequested:q,onFocusoutPrevented:G,titleId:c,bodyId:A,closed:E,style:g,overlayDialogStyle:I,rendered:h,visible:y,zIndex:D,displayButtons:a,buttonLayoutClass:s}},Wo=["id"],Xo=["aria-level"],Ke=ne({__name:"DialogContent",props:Ue,emits:Ro,setup(e,{expose:o,emit:l}){const t=e,d=l;$o(t);const{dialogRef:i,headerRef:b,bodyId:v,ns:c,style:A,displayButtons:y,buttonLayoutClass:E}=xe(qe),{focusTrapRef:h}=xe(_e),D=M(()=>{const g=t.fullscreen?"fullscreen":t.sizeMode||"default";return[c.b(),c.is("draggable",t.draggable),c.is("align-center",t.alignCenter),c.is(g)]}),a=Eo(h,i),s=M(()=>t.draggable&&!t.fullscreen),u=M(()=>t.overflow),{resetPosition:f}=xo(i,i,s,u);o({resetPosition:f});const C=()=>{d("close")};return(g,I)=>(B(),U("div",{ref:n(a),class:w(D.value),style:ze(n(A)),tabindex:"-1"},[g.showClose?(B(),U("header",{key:0,ref_key:"headerRef",ref:b,class:w([n(c).e("header"),g.headerClass])},[g.showClose?(B(),U("button",{key:0,"aria-label":"Close",class:w(n(c).e("headerbtn")),type:"button",onClick:C},[ae(n(ho),{name:"regular times",class:w(n(c).e("close"))},null,8,["class"])],2)):K("",!0)],2)):K("",!0),oe("div",{id:n(v),class:w([n(c).e("body"),g.bodyClass])},[oe("div",null,[g.$slots.image?(B(),U("div",{key:0,class:w(n(c).e("image"))},[S(g.$slots,"image")],2)):K("",!0),g.title?(B(),U("span",{key:1,class:w(n(c).e("title")),role:"heading","aria-level":g.ariaLevel},Ve(g.title),11,Xo)):K("",!0),oe("div",{class:w(n(c).e("content"))},[S(g.$slots,"default")],2)])],10,Wo),oe("footer",{class:w([n(c).e("footer"),g.footerClass])},[S(g.$slots,"footer",{},()=>[t.footerButtons?.length?(B(),U("div",{key:0,class:w([n(c).e("footer-buttons"),n(E)])},[(B(!0),U(Je,null,Qe(n(y),(x,O)=>(B(),de(n(Do),{key:O,variant:x.variant,full:"",onClick:x.onClick},{default:N(()=>[eo(Ve(x.text),1)]),_:2},1032,["variant","onClick"]))),128))],2)):K("",!0)])],2)],6))}});Ke.__docgenInfo={exportName:"default",displayName:"DialogContent",description:"",tags:{},expose:[{name:"resetPosition"}],slots:[{name:"image"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dialog/DialogContent.vue"]};const Yo=["aria-label","aria-labelledby","aria-describedby"],z=ne({__name:"Dialog",props:qo,emits:Uo,setup(e,{expose:o,emit:l}){const t=e,d=Oe("dialog"),i=m(),b=m(),v=m(),c=M(()=>t.showClose&&t.closeOnClickModal),A=M(()=>t.showClose&&t.closeOnPressEscape),{visible:y,titleId:E,bodyId:h,style:D,overlayDialogStyle:a,rendered:s,zIndex:u,afterEnter:f,afterLeave:C,beforeLeave:g,handleClose:I,onModalClick:x,onOpenAutoFocus:O,onCloseAutoFocus:P,onCloseRequested:L,onFocusoutPrevented:T,displayButtons:V,buttonLayoutClass:$}=Ko(t,i,{closeOnClickModal:c,closeOnPressEscape:A});Me(qe,{dialogRef:i,headerRef:b,bodyId:h,ns:d,rendered:s,style:D,displayButtons:V,buttonLayoutClass:$});const p=Ge(x),k=M(()=>t.draggable&&!t.fullscreen);return o({visible:y,dialogContentRef:v,resetPosition:()=>{v.value?.resetPosition()}}),(r,G)=>(B(),de(n(zo),{to:r.appendTo,disabled:r.appendTo!=="body"?!1:!r.appendToBody},{default:N(()=>[ae(oo,{name:"dialog-fade",onAfterEnter:n(f),onAfterLeave:n(C),onBeforeLeave:n(g)},{default:N(()=>[to(ae(n(jo),{"custom-mask-event":"",mask:r.modal,"overlay-class":r.modalClass,"z-index":n(u)},{default:N(()=>[oe("div",{role:"dialog","aria-modal":"true","aria-label":r.title||void 0,"aria-labelledby":r.title?void 0:n(E),"aria-describedby":n(h),class:w(`${n(d).namespace.value}-overlay-dialog`),style:ze(n(a)),onClick:G[0]||(G[0]=(...q)=>n(p).onClick&&n(p).onClick(...q)),onMousedown:G[1]||(G[1]=(...q)=>n(p).onMousedown&&n(p).onMousedown(...q)),onMouseup:G[2]||(G[2]=(...q)=>n(p).onMouseup&&n(p).onMouseup(...q))},[ae(n(Lo),{loop:"",trapped:n(y),"focus-start-el":"container",onFocusAfterTrapped:n(O),onFocusAfterReleased:n(P),onFocusoutPrevented:n(T),onReleaseRequested:n(L)},{default:N(()=>[n(s)?(B(),de(Ke,ao({key:0,ref_key:"dialogContentRef",ref:v},r.$attrs,{"align-center":r.alignCenter,draggable:k.value,overflow:r.overflow,fullscreen:r.fullscreen,"header-class":r.headerClass,"body-class":r.bodyClass,"footer-class":r.footerClass,"show-close":r.showClose,title:r.title,"aria-level":r.ariaLevel,width:r.width,"size-mode":r.sizeMode,"footer-buttons":r.footerButtons,onClose:n(I)}),lo({default:N(()=>[S(r.$slots,"default")]),_:2},[r.$slots.image?{name:"image",fn:N(()=>[S(r.$slots,"image")]),key:"0"}:void 0,r.$slots.footer?{name:"footer",fn:N(()=>[S(r.$slots,"footer")]),key:"1"}:void 0]),1040,["align-center","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","width","size-mode","footer-buttons","onClose"])):K("",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Yo)]),_:3},8,["mask","overlay-class","z-index"]),[[no,n(y)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});z.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},expose:[{name:"visible",tags:[{title:"description",content:"whether the dialog is visible"}]},{name:"dialogContentRef"},{name:"resetPosition"}],slots:[{name:"image"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dialog/Dialog.vue"]};const kt={title:"Data/Dialog",component:z,argTypes:{modelValue:{control:"boolean",description:"Controla la visibilidad del dialog",table:{defaultValue:{summary:"false"}}},title:{control:"text",description:"Título del dialog",table:{defaultValue:{summary:""}}},width:{control:"text",description:"Ancho del dialog. Requiere size-mode='fixed'.",table:{defaultValue:{summary:"undefined"}}},sizeMode:{control:"select",options:["default","fixed","adaptive"],description:`Controla el comportamiento del ancho del dialog:
      - default: usa max-width predeterminado
      - fixed: usa width prop sin max-width
      - adaptive: se adapta al contenido con restricciones min/max`,table:{defaultValue:{summary:"default"}}},draggable:{control:"boolean",description:"Permite arrastrar el dialog. No compatible con fullscreen",table:{defaultValue:{summary:"false"}}},fullscreen:{control:"boolean",description:"El dialog ocupa toda la pantalla",table:{defaultValue:{summary:"false"}}},showClose:{control:"boolean",description:"Mostrar botón de cerrar",table:{defaultValue:{summary:"true"}}},alignCenter:{control:"boolean",description:"Alinear el dialog horizontal y verticalmente",table:{defaultValue:{summary:"true"}}},appendToBody:{control:"boolean",description:"Añadir el dialog directamente al body del documento",table:{defaultValue:{summary:"false"}}},headerClass:{control:"text",description:"Clases CSS personalizadas para el header",table:{defaultValue:{summary:""}}},bodyClass:{control:"text",description:"Clases CSS personalizadas para el body",table:{defaultValue:{summary:""}}},footerClass:{control:"text",description:"Clases CSS personalizadas para el footer",table:{defaultValue:{summary:""}}},ariaLevel:{control:"text",description:"Nivel de encabezado ARIA para el título",table:{defaultValue:{summary:"2"}}},closeOnClickModal:{control:"boolean",description:"Si el dialog se cierra al hacer clic en el overlay",table:{defaultValue:{summary:"true"}}},closeOnPressEscape:{control:"boolean",description:"Si el dialog se cierra al presionar ESC",table:{defaultValue:{summary:"true"}}},destroyOnClose:{control:"boolean",description:"Destruir el contenido del dialog cuando se cierra",table:{defaultValue:{summary:"false"}}},footerButtons:{control:"object",description:`Array de configuración para los botones del footer (máximo 3 botones). Cada botón debe tener:
      - text: Texto del botón
      - onClick: Función a ejecutar al hacer clic
      - variant: Variante del botón (primary/secondary/tertiary)`,table:{defaultValue:{summary:"[]"},type:{summary:"Array<{ text: string, onClick: () => void, variant: 'primary' | 'secondary' | 'tertiary' }>"}}}},parameters:{docs:{description:{component:`
# Dialog Component

El componente Dialog proporciona una ventana modal configurable para mostrar información y acciones:

## Características
- Tres modos de tamaño: default, fixed y adaptive
- Soporte para imágenes y contenido personalizado
- Configuración flexible de botones en el footer (máximo 3)

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

Nota: Asegúrate de tener instaladas estas dependencias para que el componente funcione correctamente y sus archivos sass respectivos importados.

## Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
@use "@flash-global66/g-dialog/dialog.styles.scss" as *;
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
- Con 2 botones: Se muestran uno encima del otro
- Con 1 botón: Ocupa todo el ancho disponible
      `}}}},Ho=e=>({components:{GDialog:z,GConfigProvider:j,GButton:R},setup(){const o=m(!1),l=()=>{o.value=!1};return{args:e,dialogVisible:o,handleClose:l,processFooterButtons:()=>!e.footerButtons||e.footerButtons.length===0?[{text:"Aceptar",onClick:l,variant:"primary"},{text:"Cancelar",onClick:()=>o.value=!1,variant:"secondary"}]:e.footerButtons.map(d=>({...d,onClick:()=>{o.value=!1}}))}},template:`
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
  `}),Zo=e=>({components:{GDialog:z,GConfigProvider:j,GButton:R},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),Jo=e=>({components:{GDialog:z,GConfigProvider:j,GButton:R},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),Qo=e=>({components:{GDialog:z,GConfigProvider:j,GButton:R},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),et=e=>({components:{GDialog:z,GConfigProvider:j,GButton:R},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),ot=e=>({components:{GDialog:z,GConfigProvider:j,GButton:R},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),tt=e=>({components:{GDialog:z,GConfigProvider:j,GButton:R},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),at=e=>({components:{GDialog:z,GConfigProvider:j,GButton:R},setup(){const o=m(!1),l=m(!1),t=m(!1);return{args:e,defaultDialogVisible:o,fixedDialogVisible:l,adaptiveDialogVisible:t,closeDefaultDialog:()=>{o.value=!1},closeFixedDialog:()=>{l.value=!1},closeAdaptiveDialog:()=>{t.value=!1}}},template:`
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
  `}),W=Ho.bind({});W.args={title:"Dialog Básico",showClose:!0,footerButtons:[{text:"Aceptar",onClick:()=>{},variant:"primary"},{text:"Cancelar",onClick:()=>{},variant:"secondary"}]};W.parameters={docs:{description:{story:"Dialog básico con contenido de texto y dos botones de acción."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const X=Zo.bind({});X.args={title:"Dialog con Imagen",showClose:!0,sizeMode:"default",footerButtons:[{text:"Aceptar",onClick:()=>{},variant:"primary"},{text:"Cancelar",onClick:()=>{},variant:"secondary"}]};X.parameters={docs:{description:{story:"Dialog con imagen y botones configurados mediante la prop footerButtons."},source:{code:`
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
<\/script>`}}};const Y=Jo.bind({});Y.args={title:"Mensaje Importante",showClose:!1,sizeMode:"default"};Y.parameters={docs:{description:{story:"Dialog sin botón de cerrar, con texto y un solo botón."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const H=Qo.bind({});H.args={title:"Dialog con Ancho Personalizado",showClose:!0,width:"800",sizeMode:"fixed"};H.parameters={docs:{description:{story:"Dialog con ancho personalizado definido a 800px. Requiere size-mode='fixed'"},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const Z=et.bind({});Z.args={title:"Dialog Adaptable",showClose:!0,sizeMode:"adaptive"};Z.parameters={docs:{description:{story:"Dialog que se adapta al contenido, útil para imágenes grandes o contenido variable."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const J=ot.bind({});J.args={title:"Dialog con Botones",showClose:!0};J.parameters={docs:{description:{story:"Dialog con dos botones."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const Q=tt.bind({});Q.args={title:"Dialog con Tres Botones",showClose:!0};Q.parameters={docs:{description:{story:"Dialog con tres botones: dos en la primera fila y uno centrado abajo. En móviles, todos los botones se muestran en columna."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const ee=at.bind({});ee.args={showClose:!0};ee.parameters={docs:{description:{story:"Comparativa de los tres modos de tamaño disponibles: default, fixed y adaptive."},source:{code:`
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
</g-dialog>`,language:"html",type:"auto"}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => ({
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
})`,...Y.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => ({
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
})`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => ({
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
})`,...Q.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`args => ({
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
})`,...ee.parameters?.docs?.source}}};const At=["Basic","WithImage","NoCloseButton","CustomWidth","WithLargeImage","TwoButtonsStacked","ThreeButtonsLayout","SizeModeComparison"];export{W as Basic,H as CustomWidth,Y as NoCloseButton,ee as SizeModeComparison,Q as ThreeButtonsLayout,J as TwoButtonsStacked,X as WithImage,Z as WithLargeImage,At as __namedExportsOrder,kt as default};
