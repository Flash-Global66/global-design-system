import{R as _,_ as Se,I as Oe,r as C,c as f,af as ke,w as ia,Y as da,Z as ga,H as Pe,d as ca,x as U,k as j,m as oe,l as D,u as a,s as re,b as Re,j as Fe,F as Ne,z as ze,f as ne,a7 as pa,p as ma,a0 as ua,y as se,v as fa,S as Me,n as Le,e as V,h as $e,A as Ge}from"./vue.esm-bundler-BCWWDzSy.js";import{a as Q}from"./index-Br0BFi8U.js";import{A as qe,Y as we}from"./index-aQeg2A3h.js";import{b as va}from"./index-ccEuFv3G.js";import{q as ya}from"./index-Bz0y6LhV.js";import{Y as ba,H as ha,G as Ta}from"./index-DJArRuUx.js";import{e as Be,v as ge,u as Ke}from"./index-CU2PSoyO.js";import{b as xa,d as le,w as Ca}from"./install-CHjgJfcB.js";import{I as ie,C as ee,U as de}from"./event-BB_Ol6Sd.js";import{E as ae}from"./aria-BUADUvnR.js";import{u as Ea,a as Ia}from"./index-CAxa7STg.js";import{a as We}from"./index-DL4FoQEl.js";import{u as Aa}from"./index-DCbSzXKS.js";import{G as Da}from"./index-Dl4ud5t1.js";import{G as O}from"./ConfigProvider-BAdTAJXu.js";import{G as He,a as Ye}from"./index-O6rd-9ah.js";import{G as Xe}from"./index-CyadN433.js";import{a as Sa,b as Ue}from"./documentation-stories-DH-Utv5z.js";import"./v4-CtRu48qb.js";import"./index-AiuvB28q.js";import"./index-Chx1QtW8.js";import"./index-lV95ywNu.js";import"./index-BoOdRfEY.js";import"./_arrayPush-DXBsyDbg.js";import"./index-tMAtNoGV.js";import"./index-CAlYKJ_p.js";import"./use-form-item-CSfUVDVI.js";import"./constants-Dnj8X3EN.js";import"./index-B9DYlcmC.js";import"./index-CkP4L3ZS.js";import"./typescript-Bp3YSIOJ.js";import"./index-O-vcCYpo.js";import"./error-Cq9Fpw4b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CRx4dHSJ.js";import"./index-CNqC7f2T.js";const Ra=xa({helpText:{type:String,default:void 0},modelValue:{type:le(Array),default:()=>[]},max:Number,tagType:{...qe.type,default:"info"},tagEffect:{...qe.effect,default:"light"},effect:{type:le(String),default:"light"},trigger:{type:le(String),default:ae.enter},draggable:Boolean,delimiter:{type:le([String,RegExp]),default:""},size:{type:String,values:["large","default","small"],default:"default"},clearable:Boolean,clearIcon:{type:le(String),default:"regular circle-xmark"},disabled:{type:Boolean,default:void 0},validateEvent:{type:Boolean,default:!0},readonly:Boolean,autofocus:Boolean,id:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},placeholder:String,autocomplete:{type:String,default:"off"},saveOnBlur:{type:Boolean,default:!0},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},ariaLabel:String}),Ga={[de]:e=>Se(e)||ge(e)||_(e),[ee]:e=>Se(e)||ge(e)||_(e),[ie]:e=>_(e),"add-tag":e=>_(e)||Se(e),"remove-tag":(e,o)=>_(e)&&Be(o),"drag-tag":(e,o,E)=>Be(e)&&Be(o)&&_(E),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0};function wa({wrapperRef:e,handleDragged:o,afterDragged:E}){const d=Ke("input-tag"),I=Oe(),S=C(!1);let r,b,g,m;function R(c){return`.${d.e("inner")} > .${d.e("tag-wrapper")}:nth-child(${c+1})`}function P(c,y){r=y,b=e.value.querySelector(R(y)),b&&(b.style.opacity="0.5"),c.dataTransfer&&(c.dataTransfer.effectAllowed="move")}function w(c,y){if(g=y,c.preventDefault(),c.dataTransfer&&(c.dataTransfer.dropEffect="move"),ge(r)||r===y){S.value=!1;return}const h=e.value.querySelector(R(y)).getBoundingClientRect(),A=r+1!==y,$=r-1!==y,q=c.clientX-h.left,B=A?$?.5:1:-1,k=$?A?.5:0:1;q<=h.width*B?m="before":q>h.width*k?m="after":m=void 0;const T=e.value.querySelector(`.${d.e("inner")}`),x=T.getBoundingClientRect(),G=Number.parseFloat(window.getComputedStyle(T).gap||"6")/2,W=h.top-x.top;let H=-9999;if(m==="before")H=Math.max(h.left-x.left-G,Math.floor(-G/2));else if(m==="after"){const Y=h.right-x.left;H=Y+(x.width===Y?Math.floor(G/2):G)}I.value&&(I.value.style.top=`${W}px`,I.value.style.left=`${H}px`),S.value=!!m}function K(c){c.preventDefault(),b&&(b.style.opacity=""),m&&!ge(r)&&!ge(g)&&r!==g&&o(r,g,m),S.value=!1,r=void 0,b=null,g=void 0,m=void 0,E?.()}return{dropIndicatorRef:I,showDropIndicator:S,handleDragStart:P,handleDragOver:w,handleDragEnd:K}}function Ba(){const e=C(!1);return{hovering:e,handleMouseEnter:()=>{e.value=!0},handleMouseLeave:()=>{e.value=!1}}}const Va=e=>Array.isArray(e)?e:[e],je=e=>e.code||e.key,Pa=()=>typeof navigator>"u"?!1:/android/i.test(navigator.userAgent);function ka({props:e,emit:o,formItem:E}){const d=ba(),I=f(()=>e.size??"default"),S=Oe(),r=C(""),b=C(),g=f(()=>I.value==="small"?"xs":I.value==="large"?"md":"sm"),m=f(()=>e.modelValue?.length?void 0:e.placeholder),R=f(()=>!(e.readonly||d.value)),P=f(()=>{if(e.max===void 0||e.max===null)return!1;const t=e.max;return(e.modelValue?.length??0)>=t}),w=f(()=>e.collapseTags?e.modelValue?.slice(0,e.maxCollapseTags):e.modelValue),K=f(()=>e.collapseTags?e.modelValue?.slice(e.maxCollapseTags):[]),c=t=>{if(e.readonly||d.value)return;const l=e.modelValue??[],p=Va(t),u=[];for(const z of p)!l.includes(z)&&!u.includes(z)&&u.push(z);if(e.max!==void 0&&e.max!==null){const z=Math.max(e.max-l.length,0);u.splice(z)}if(!u.length){r.value="";return}const F=[...l,...u],N=u.length===1?u[0]:u;o(de,F),o(ee,F),o("add-tag",N),r.value=""},y=t=>{const l=t.split(e.delimiter),p=l.length>1?l.map(u=>u.trim()).filter(Boolean):[];return p.length===1?p[0]:p},h=t=>{const l=t.clipboardData?.getData("text");if(e.readonly||d.value||P.value||!e.delimiter||!l)return;const p=t.target,{selectionStart:u,selectionEnd:F,value:N}=p,z=u??0,Ie=F??0,Ae=N.slice(0,z)+l+N.slice(Ie),Z=y(Ae);(Array.isArray(Z)?Z.length:Z)&&(c(Z),o(ie,r.value),t.preventDefault())},A=t=>{if(P.value){r.value="",o(ie,"");return}if(!X.value){if(e.delimiter&&r.value){const l=y(r.value),p=Array.isArray(l)?l:l?[l]:[];p.length&&c(p)}o(ie,r.value)}},$=t=>{if(X.value)return;switch(je(t)){case e.trigger:t.preventDefault(),t.stopPropagation(),B();break;case ae.numpadEnter:e.trigger===ae.enter&&(t.preventDefault(),t.stopPropagation(),B());break;case ae.backspace:if(e.readonly||d.value)return;!r.value&&e.modelValue?.length&&(t.preventDefault(),t.stopPropagation(),k(e.modelValue.length-1));break}},q=t=>{if(X.value||!Pa())return;switch(je(t)){case ae.space:e.trigger===ae.space&&(t.preventDefault(),t.stopPropagation(),B());break}},B=()=>{if(e.readonly||d.value)return;const t=r.value?.trim();!t||P.value||c(t)},k=t=>{if(e.readonly||d.value)return;const l=(e.modelValue??[]).slice(),[p]=l.splice(t,1);o(de,l),o(ee,l),o("remove-tag",p,t)},T=()=>{if(e.readonly||d.value)return;const t=[];r.value="",o(de,t),o(ee,t),o(ie,""),o("clear")},x=(t,l,p)=>{if(e.readonly||d.value)return;const u=(e.modelValue??[]).slice(),[F]=u.splice(t,1),N=l>t&&p==="before"?-1:l<t&&p==="after"?1:0;u.splice(l+N,0,F),o(de,u),o(ee,u),o("drag-tag",t,l+N,F)},G=()=>{S.value?.focus()},W=()=>{S.value?.blur()},H=t=>{o("focus",t)},Y=t=>{o("blur",t)},{wrapperRef:ce,isFocused:pe}=Ea(S,{beforeBlur(t){const p=b.value?.isFocusInsideContent;return typeof p=="function"?!!p(t):!1},afterBlur(){e.saveOnBlur?B():r.value="",e.validateEvent&&E?.validate?.("blur").catch(ke)}}),{isComposing:X,handleCompositionStart:me,handleCompositionUpdate:ue,handleCompositionEnd:Ee}=Ia({afterComposition:A});return ia(()=>e.modelValue,()=>{e.validateEvent&&E?.validate?.(ee).catch(ke)}),{inputRef:S,wrapperRef:ce,tagTooltipRef:b,isFocused:pe,isComposing:X,inputValue:r,size:I,tagSize:g,placeholder:m,closable:R,disabled:d,inputLimit:P,showTagList:w,collapseTagList:K,handleDragged:x,handlePaste:h,handleInput:A,handleKeydown:$,handleKeyup:q,handleAddTag:B,handleRemoveTag:k,handleClear:T,handleCompositionStart:me,handleCompositionUpdate:ue,handleCompositionEnd:Ee,handleFocus:H,handleBlur:Y,focus:G,blur:W}}function Fa({props:e,isFocused:o,hovering:E,disabled:d,inputValue:I,size:S}){const r=da(),b=ga(),g=Ke("input-tag"),m=C(),R=C(),P=f(()=>[g.b(),g.is("focused",o.value),g.is("complete",!!(e.modelValue?.length||I.value)),g.is("hovering",E.value),g.is("disabled",d.value),g.m(S.value),r.class]),w=f(()=>[r.style]),K=f(()=>{const T={};for(const x in r)x==="class"||x==="style"||(T[x]=r[x]);return T}),c=f(()=>[g.e("inner"),g.is("draggable",!!e.draggable),g.is("left-space",!e.modelValue?.length&&!b.prefix),g.is("right-space",!e.modelValue?.length&&!b.suffix)]),y=f(()=>!!(e.clearable&&!d.value&&!e.readonly&&(e.modelValue?.length||I.value)&&(o.value||E.value))),h=f(()=>!!(b.suffix||y.value)),A=Pe({innerWidth:0,collapseItemWidth:0}),$=()=>{if(!R.value)return 0;const T=window.getComputedStyle(R.value);return Number.parseFloat(T.gap||"6px")},q=()=>{R.value&&(A.innerWidth=Number.parseFloat(window.getComputedStyle(R.value).width))},B=()=>{m.value&&(A.collapseItemWidth=m.value.getBoundingClientRect().width)},k=f(()=>{if(!e.collapseTags)return{};const T=$(),G=T+11,W=m.value&&e.maxCollapseTags===1?A.innerWidth-A.collapseItemWidth-T-G:A.innerWidth-G;return{maxWidth:`${Math.max(W,0)}px`}});return We(R,q),We(m,B),{ns:g,containerKls:P,containerStyle:w,inputAttrs:K,innerKls:c,showClear:y,showSuffix:h,tagStyle:k,collapseItemRef:m,innerRef:R}}const Na=["draggable","onDragstart","onDragover"],za=["id","minlength","maxlength","disabled","readonly","autocomplete","tabindex","placeholder","autofocus","aria-label"],Ma=["textContent"],Ze=ca({name:"GInputTag",inheritAttrs:!1,__name:"input-tag",props:Ra,emits:Ga,setup(e,{expose:o,emit:E}){const d=e,S=E,{formItem:r}=Ta(),{inputId:b}=ha(d,{formItemContext:r}),{inputRef:g,wrapperRef:m,tagTooltipRef:R,isFocused:P,inputValue:w,size:K,tagSize:c,placeholder:y,closable:h,disabled:A,showTagList:$,collapseTagList:q,handleDragged:B,handlePaste:k,handleInput:T,handleKeydown:x,handleKeyup:G,handleRemoveTag:W,handleClear:H,handleCompositionStart:Y,handleCompositionUpdate:ce,handleCompositionEnd:pe,handleFocus:X,handleBlur:me,focus:ue,blur:Ee}=ka({props:d,emit:S,formItem:r}),{hovering:t,handleMouseEnter:l,handleMouseLeave:p}=Ba(),{calculatorRef:u,inputStyle:F}=Aa(),{dropIndicatorRef:N,showDropIndicator:z,handleDragStart:Ie,handleDragOver:Ae,handleDragEnd:Z}=wa({wrapperRef:m,handleDragged:B,afterDragged:ue}),{ns:v,containerKls:Je,containerStyle:Qe,inputAttrs:_e,innerKls:ea,showClear:aa,showSuffix:ta,tagStyle:oa,collapseItemRef:ra,innerRef:na}=Fa({props:d,isFocused:P,hovering:t,disabled:A,inputValue:w,size:K}),te=f(()=>!!(r?.shouldShowErrorChild||r?.showMessage==="child"&&r?.validateState==="error")),De=f(()=>r?.validateMessage),sa=f(()=>[v.e("help-text"),{[v.e("help-error")]:te.value}]),la=f(()=>De.value||d.helpText||r?.$el);return o({focus:ue,blur:Ee}),(n,i)=>(V(),U("div",{class:D(a(v).e("container"))},[j("div",{ref_key:"wrapperRef",ref:m,class:D([a(Je),a(v).is("error",te.value||a(r)?.shouldShowError)]),style:Le(a(Qe)),onMouseenter:i[12]||(i[12]=(...s)=>a(l)&&a(l)(...s)),onMouseleave:i[13]||(i[13]=(...s)=>a(p)&&a(p)(...s))},[n.$slots.prefix?(V(),U("div",{key:0,class:D(a(v).e("prefix"))},[re(n.$slots,"prefix")],2)):oe("",!0),j("div",{ref_key:"innerRef",ref:na,class:D(a(ea))},[(V(!0),U(Ne,null,ze(a($),(s,M)=>(V(),U("div",{key:`${M}-${s}`,class:D([a(v).e("tag-wrapper"),a(h)&&n.draggable?a(v).is("draggable",!0):""]),draggable:a(h)&&n.draggable?!0:void 0,onDragstart:J=>a(Ie)(J,M),onDragover:J=>a(Ae)(J,M),onDragend:i[0]||(i[0]=(...J)=>a(Z)&&a(Z)(...J)),onDrop:i[1]||(i[1]=Me(()=>{},["stop"]))},[$e(a(we),{size:a(c),closable:a(h),type:n.tagType,effect:n.tagEffect,"disable-transitions":"",style:Le(a(oa)),onClose:J=>a(W)(M)},{default:ne(()=>[re(n.$slots,"tag",{value:s,index:M},()=>[Ge(se(s),1)])]),_:2},1032,["size","closable","type","effect","style","onClose"])],42,Na))),128)),n.collapseTags&&n.modelValue&&n.modelValue.length>n.maxCollapseTags?(V(),Re(a(va),{key:0,ref_key:"tagTooltipRef",ref:R,disabled:!n.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:n.effect,placement:"bottom"},{default:ne(()=>[j("div",{ref_key:"collapseItemRef",ref:ra,class:D(a(v).e("collapse-tag"))},[$e(a(we),{closable:!1,size:a(c),type:n.tagType,effect:n.tagEffect,"disable-transitions":""},{default:ne(()=>[Ge(" + "+se(n.modelValue.length-n.maxCollapseTags),1)]),_:1},8,["size","type","effect"])],2)]),content:ne(()=>[j("div",{class:D(a(v).e("input-tag-list"))},[(V(!0),U(Ne,null,ze(a(q),(s,M)=>(V(),Re(a(we),{key:`c-${M}-${s}`,size:a(c),closable:a(h),type:n.tagType,effect:n.tagEffect,"disable-transitions":"",onClose:J=>a(W)(M+n.maxCollapseTags)},{default:ne(()=>[re(n.$slots,"tag",{value:s,index:M+n.maxCollapseTags},()=>[Ge(se(s),1)])]),_:2},1032,["size","closable","type","effect","onClose"]))),128))],2)]),_:3},8,["disabled","effect"])):oe("",!0),j("div",{class:D(a(v).e("input-wrapper"))},[Fe(j("input",ma({id:a(b),ref_key:"inputRef",ref:g,"onUpdate:modelValue":i[2]||(i[2]=s=>ua(w)?w.value=s:null),type:"text"},a(_e),{minlength:n.minlength,maxlength:n.maxlength,disabled:a(A),readonly:n.readonly,autocomplete:n.autocomplete,tabindex:n.tabindex,placeholder:a(y),autofocus:n.autofocus,"aria-label":n.ariaLabel,class:a(v).e("input"),style:a(F),onCompositionstart:i[3]||(i[3]=(...s)=>a(Y)&&a(Y)(...s)),onCompositionupdate:i[4]||(i[4]=(...s)=>a(ce)&&a(ce)(...s)),onCompositionend:i[5]||(i[5]=(...s)=>a(pe)&&a(pe)(...s)),onPaste:i[6]||(i[6]=(...s)=>a(k)&&a(k)(...s)),onInput:i[7]||(i[7]=(...s)=>a(T)&&a(T)(...s)),onKeydown:i[8]||(i[8]=(...s)=>a(x)&&a(x)(...s)),onKeyup:i[9]||(i[9]=(...s)=>a(G)&&a(G)(...s)),onFocus:i[10]||(i[10]=(...s)=>a(X)&&a(X)(...s)),onBlur:i[11]||(i[11]=(...s)=>a(me)&&a(me)(...s))}),null,16,za),[[pa,a(w)]]),j("span",{ref_key:"calculatorRef",ref:u,"aria-hidden":"true",class:D(a(v).e("input-calculator")),textContent:se(a(w))},null,10,Ma)],2),Fe(j("div",{ref_key:"dropIndicatorRef",ref:N,class:D(a(v).e("drop-indicator"))},null,2),[[fa,a(z)]])],2),a(ta)?(V(),U("div",{key:1,class:D(a(v).e("suffix"))},[re(n.$slots,"suffix"),a(aa)?(V(),Re(a(ya),{key:0,class:D([a(v).e("icon"),a(v).e("clear")]),onMousedown:Me(()=>{},["prevent"]),onClick:a(H),name:n.clearIcon},null,8,["class","onClick","name"])):oe("",!0)],2)):oe("",!0)],38),la.value?(V(),U("div",{key:0,class:D(a(v).e("help"))},[re(n.$slots,"helpText",{error:De.value,isError:te.value},()=>[(V(),U("p",{key:te.value?"error":"help",class:D(sa.value)},se(te.value?De.value:d.helpText),3))])],2)):oe("",!0)],2))}});Ze.__docgenInfo={name:"GInputTag",exportName:"default",displayName:"input-tag",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],slots:[{name:"prefix"},{name:"tag",scoped:!0,bindings:[{name:"value",title:"binding"},{name:"index",title:"binding"}]},{name:"suffix"},{name:"helpText",scoped:!0,bindings:[{name:"error",title:"binding"},{name:"isError",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/input-tag/src/input-tag.vue"]};const L=Ca(Ze),La="0.2.1",Ve={"@flash-global66/g-form":"^0.1.0","@flash-global66/g-icon-font":"^0.0.8","@flash-global66/g-tag":"^0.2.2","@flash-global66/g-tooltip":"^0.1.1","@vueuse/core":"^13.0.0","element-plus":"^2.9.0","lodash-unified":"^1.0.3",vue:"^3.2.0"},Ct={title:"Form/InputTag",component:L,parameters:{docs:{description:{component:`
El componente \`GInputTag\` permite crear y gestionar una colección de etiquetas (tags) como un input,
ideal para filtros multi-valor, listados, palabras clave y formularios con valores múltiples.

> Versión actual: ${La}

## Características
- Añade tags con Enter/Space, delimitadores o pegando valores.
- Límite máximo de tags configurable.
- Etiquetas colapsables con tooltip de desbordamiento.
- Reordenamiento por drag & drop.
- Integración con \`GForm\` (validación \`change\` y \`blur\`).
- Limpieza con icono y soporte de \`readonly\`/\`disabled\`.
- Icono de cierre y de clear personalizables mediante \`IconString\`.

### Instalación

\`\`\`bash
yarn add @flash-global66/g-input-tag
\`\`\`

### Importación del componente

\`\`\`typescript
import { GInputTag } from '@flash-global66/g-input-tag'
import '@flash-global66/g-input-tag/styles.scss'
\`\`\`

## Dependencias
${Sa(Ve)}

\`\`\`bash
# Dependencias global66
yarn add ${Ue(Ve)}

# Dependencias externas
yarn add ${Ue(Ve,!0)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<template>
  <g-input-tag
    v-model="tags"
    placeholder="Escribe y presiona Enter"
    @add-tag="onAdd"
    @remove-tag="onRemove"
  />
</template>

<script setup>
import { ref } from 'vue';
import { GInputTag } from '@flash-global66/g-input-tag';

const tags = ref(['vue', 'ts']);
const onAdd = (value) => console.log('añadido', value);
const onRemove = (value) => console.log('eliminado', value);
<\/script>
\`\`\`
`}}},argTypes:{modelValue:{control:"object",description:"Listado de tags (v-model)",table:{type:{summary:"string[]"},category:"Datos"}},max:{control:"number",description:"Número máximo de tags permitidos",table:{category:"Comportamiento"}},tagType:{control:{type:"select"},options:["success","info","warning","error","grey"],description:"Tipo de tag (color)",table:{category:"Apariencia"}},tagEffect:{control:{type:"select"},options:["light","dark"],description:"Efecto visual del tag",table:{category:"Apariencia"}},effect:{control:{type:"select"},options:["light","dark"],description:"Tema del tooltip de overflow",table:{category:"Apariencia"}},trigger:{control:{type:"select"},options:["Enter","Space"],description:"Tecla que confirma el tag",table:{category:"Comportamiento"}},draggable:{control:"boolean",description:"Permite reordenar los tags arrastrándolos",table:{category:"Comportamiento"}},delimiter:{control:"text",description:'Carácter o expresión que separa tags (por ejemplo, ",")',table:{category:"Comportamiento"}},size:{control:{type:"select"},options:["large","default","small"],description:"Tamaño del input",table:{category:"Apariencia"}},clearable:{control:"boolean",description:"Muestra el botón para limpiar",table:{category:"Comportamiento"}},clearIcon:{control:"text",description:'Icono de clear (IconString, p. ej. "regular circle-xmark")',table:{category:"Apariencia"}},helpText:{control:"text",description:"Texto de ayuda mostrado debajo del input tag",table:{category:"Contenido"}},disabled:{control:"boolean",description:"Deshabilita el input y la gestión de tags",table:{category:"Estado"}},readonly:{control:"boolean",description:"Sólo lectura",table:{category:"Estado"}},validateEvent:{control:"boolean",description:"Emite eventos de validación hacia GFormItem",table:{category:"Form"}},collapseTags:{control:"boolean",description:'Colapsa los tags en un indicador "+N"',table:{category:"Apariencia"}},collapseTagsTooltip:{control:"boolean",description:"Muestra tooltip con los tags colapsados",table:{category:"Apariencia"}},maxCollapseTags:{control:"number",description:"Cantidad de tags visibles antes de colapsar",table:{category:"Apariencia"}},saveOnBlur:{control:"boolean",description:"Guarda el contenido del input al perder el foco",table:{category:"Comportamiento"}},placeholder:{control:"text",description:"Placeholder del input",table:{category:"Contenido"}},"onUpdate:modelValue":{description:"Se emite al actualizar el listado de tags",table:{category:"Eventos"}},onChange:{description:"Se emite cuando cambia el listado de tags",table:{category:"Eventos"}},onAddTag:{description:"Se emite al añadir un nuevo tag",table:{category:"Eventos"}},onRemoveTag:{description:"Se emite al eliminar un tag",table:{category:"Eventos"}},onDragTag:{description:"Se emite al reordenar un tag",table:{category:"Eventos"}},onClear:{description:"Se emite al limpiar todos los tags",table:{category:"Eventos"}}},args:{modelValue:["vue","typescript"],placeholder:"Escribe y presiona Enter",tagType:"info",tagEffect:"light",effect:"light",trigger:"Enter",draggable:!1,delimiter:"",size:"default",clearable:!0,clearIcon:"regular circle-xmark",disabled:!1,readonly:!1,validateEvent:!0,collapseTags:!1,collapseTagsTooltip:!1,maxCollapseTags:1,saveOnBlur:!0,helpText:"Escribe un tag y presiona Enter"}},fe={name:"Básico",parameters:{docs:{description:{story:"Uso básico. v-model con un array de strings. Pulsa Enter para añadir un tag."}}},render:e=>({components:{GInputTag:L,GConfigProvider:O},setup(){const o=C(["vue","ts"]);return{args:e,tags:o,onAdd:Q("add-tag"),onRemove:Q("remove-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          v-bind="args"
          @add-tag="onAdd"
          @remove-tag="onRemove"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},ve={name:"Límite y duplicados",parameters:{docs:{description:{story:"Define un máximo de tags con la prop `max`. Los tags duplicados se bloquean automáticamente al añadir con Enter."}}},render:()=>({components:{GInputTag:L,GConfigProvider:O},setup(){return{tags:C(["vue","ts"]),onAdd:Q("add-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          :max="3"
          placeholder="Sólo 3 tags permitidos"
          @add-tag="onAdd"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},ye={name:"Delimitador",parameters:{docs:{description:{story:"Con la prop `delimiter` puedes separar múltiples tags en una sola entrada (por ejemplo, con coma o Enter)."}}},render:()=>({components:{GInputTag:L,GConfigProvider:O},setup(){return{tags:C(["vue"]),onAdd:Q("add-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          delimiter=","
          placeholder="Escribe valores separados por coma"
          @add-tag="onAdd"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},be={name:"Tags colapsados",parameters:{docs:{description:{story:'Cuando hay muchos tags, `collapseTags` muestra los primeros y un indicador "+N" con tooltip para ver el resto.'}}},render:()=>({components:{GInputTag:L,GConfigProvider:O},setup(){return{tags:C(["vue","ts","css","html","js","scss","tailwind"])}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          collapse-tags
          collapse-tags-tooltip
          :max-collapse-tags="2"
          placeholder="Lista larga de tags"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},he={name:"Reordenable (drag & drop)",parameters:{docs:{description:{story:"Habilita `draggable` para permitir reordenar los tags arrastrándolos."}}},render:()=>({components:{GInputTag:L,GConfigProvider:O},setup(){return{tags:C(["primero","segundo","tercero","cuarto"]),onDrag:Q("drag-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          draggable
          placeholder="Arrastra los tags"
          @drag-tag="onDrag"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},Te={name:"Disabled y Readonly",parameters:{docs:{description:{story:"En estado `disabled` o `readonly` no se pueden añadir ni eliminar tags. El botón de clear tampoco está disponible."}}},render:()=>({components:{GInputTag:L,GConfigProvider:O},setup(){const e=C(["vue","ts"]),o=C(["vue","ts"]);return{tagsA:e,tagsB:o}},template:`
      <g-config-provider>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <strong>Disabled</strong>
            <g-input-tag v-model="tagsA" disabled />
          </div>
          <div>
            <strong>Readonly</strong>
            <g-input-tag v-model="tagsB" readonly />
          </div>
        </div>
      </g-config-provider>
    `})},xe={name:"Integración con GForm",parameters:{docs:{description:{story:"Cuando el componente está dentro de un `GFormItem` con reglas, la validación se dispara al cambiar (change) y al perder el foco (blur)."}}},render:()=>({components:{GInputTag:L,GConfigProvider:O,GForm:Ye,GFormItem:He,GButton:Xe},setup(){const e=C(),o=Pe({tags:[]});return{formRef:e,model:o,submit:async()=>{const d=await e.value?.validate().catch(()=>!1);Q("submit")(d?"valid":"invalid")}}},template:`
      <g-config-provider>
        <g-form ref="formRef" :model="model">
          <g-form-item
            label="Tags"
            prop="tags"
            show-message="child"
            :rules="[
              { type: 'array', required: true, message: 'Agrega al menos un tag', trigger: 'change' },
              { type: 'array', min: 2, message: 'Necesitas al menos 2 tags', trigger: 'change' }
            ]"
          >
            <g-input-tag
              v-model="model.tags"
              placeholder="Mínimo 2 tags"
              help-text="Agrega al menos dos tecnologías"
            />
          </g-form-item>
        </g-form>
        <g-button
          type-native="button"
          variant="primary"
          title="Validar formulario"
          style="margin-top: 12px;"
          @click="submit"
        />
      </g-config-provider>
    `})},Ce={name:"Reglas desde GForm padre",parameters:{docs:{description:{story:"Ejemplo comparativo con `GInput` y `GInputTag` usando reglas definidas en el `GForm` padre. `GInputTag` requiere reglas de tipo `array` para validar correctamente tags vacíos o incompletos."}}},render:()=>({components:{GInputTag:L,GInput:Da,GConfigProvider:O,GForm:Ye,GFormItem:He,GButton:Xe},setup(){const e=C(),o=Pe({name:"",tags:[]});return{formRef:e,model:o,rules:{name:[{required:!0,message:"Ingresa un nombre",trigger:"change"},{min:3,message:"El nombre debe tener al menos 3 caracteres",trigger:"change"}],tags:[{type:"array",required:!0,message:"Agrega al menos un tag",trigger:"change"},{type:"array",min:2,message:"Necesitas al menos 2 tags",trigger:"change"}]},submit:async()=>{const I=await e.value?.validate().catch(()=>!1);Q("parent-rules-submit")(I?"valid":"invalid")}}},template:`
      <g-config-provider>
        <g-form ref="formRef" :model="model" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="name" show-message="child">
            <g-input
              v-model="model.name"
              label="Nombre"
              placeholder="Ingresa un nombre"
              help-text="Mínimo 3 caracteres"
            />
          </g-form-item>

          <g-form-item prop="tags" show-message="child">
            <g-input-tag
              v-model="model.tags"
              placeholder="Agrega tecnologías"
              help-text="Agrega al menos dos tags"
            />
          </g-form-item>
        </g-form>
        <g-button
          type-native="button"
          variant="primary"
          title="Validar formulario"
          style="margin-top: 12px;"
          @click="submit"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ model }}</pre>
      </g-config-provider>
    `})};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Uso básico. v-model con un array de strings. Pulsa Enter para añadir un tag.'
      }
    }
  },
  render: args => ({
    components: {
      GInputTag,
      GConfigProvider
    },
    setup() {
      const tags = ref<string[]>(['vue', 'ts']);
      return {
        args,
        tags,
        onAdd: action('add-tag'),
        onRemove: action('remove-tag')
      };
    },
    template: \`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          v-bind="args"
          @add-tag="onAdd"
          @remove-tag="onRemove"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    \`
  })
}`,...fe.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
  name: 'Límite y duplicados',
  parameters: {
    docs: {
      description: {
        story: 'Define un máximo de tags con la prop \`max\`. Los tags duplicados se bloquean automáticamente al añadir con Enter.'
      }
    }
  },
  render: () => ({
    components: {
      GInputTag,
      GConfigProvider
    },
    setup() {
      const tags = ref<string[]>(['vue', 'ts']);
      return {
        tags,
        onAdd: action('add-tag')
      };
    },
    template: \`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          :max="3"
          placeholder="Sólo 3 tags permitidos"
          @add-tag="onAdd"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    \`
  })
}`,...ve.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  name: 'Delimitador',
  parameters: {
    docs: {
      description: {
        story: 'Con la prop \`delimiter\` puedes separar múltiples tags en una sola entrada (por ejemplo, con coma o Enter).'
      }
    }
  },
  render: () => ({
    components: {
      GInputTag,
      GConfigProvider
    },
    setup() {
      const tags = ref<string[]>(['vue']);
      return {
        tags,
        onAdd: action('add-tag')
      };
    },
    template: \`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          delimiter=","
          placeholder="Escribe valores separados por coma"
          @add-tag="onAdd"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    \`
  })
}`,...ye.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  name: 'Tags colapsados',
  parameters: {
    docs: {
      description: {
        story: 'Cuando hay muchos tags, \`collapseTags\` muestra los primeros y un indicador "+N" con tooltip para ver el resto.'
      }
    }
  },
  render: () => ({
    components: {
      GInputTag,
      GConfigProvider
    },
    setup() {
      const tags = ref<string[]>(['vue', 'ts', 'css', 'html', 'js', 'scss', 'tailwind']);
      return {
        tags
      };
    },
    template: \`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          collapse-tags
          collapse-tags-tooltip
          :max-collapse-tags="2"
          placeholder="Lista larga de tags"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    \`
  })
}`,...be.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  name: 'Reordenable (drag & drop)',
  parameters: {
    docs: {
      description: {
        story: 'Habilita \`draggable\` para permitir reordenar los tags arrastrándolos.'
      }
    }
  },
  render: () => ({
    components: {
      GInputTag,
      GConfigProvider
    },
    setup() {
      const tags = ref<string[]>(['primero', 'segundo', 'tercero', 'cuarto']);
      return {
        tags,
        onDrag: action('drag-tag')
      };
    },
    template: \`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          draggable
          placeholder="Arrastra los tags"
          @drag-tag="onDrag"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    \`
  })
}`,...he.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  name: 'Disabled y Readonly',
  parameters: {
    docs: {
      description: {
        story: 'En estado \`disabled\` o \`readonly\` no se pueden añadir ni eliminar tags. El botón de clear tampoco está disponible.'
      }
    }
  },
  render: () => ({
    components: {
      GInputTag,
      GConfigProvider
    },
    setup() {
      const tagsA = ref<string[]>(['vue', 'ts']);
      const tagsB = ref<string[]>(['vue', 'ts']);
      return {
        tagsA,
        tagsB
      };
    },
    template: \`
      <g-config-provider>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <strong>Disabled</strong>
            <g-input-tag v-model="tagsA" disabled />
          </div>
          <div>
            <strong>Readonly</strong>
            <g-input-tag v-model="tagsB" readonly />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...Te.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`{
  name: 'Integración con GForm',
  parameters: {
    docs: {
      description: {
        story: 'Cuando el componente está dentro de un \`GFormItem\` con reglas, la validación se dispara al cambiar (change) y al perder el foco (blur).'
      }
    }
  },
  render: () => ({
    components: {
      GInputTag,
      GConfigProvider,
      GForm,
      GFormItem,
      GButton
    },
    setup() {
      const formRef = ref<FormInstance>();
      const model = reactive<Record<string, string[]>>({
        tags: []
      });
      const submit = async () => {
        const valid = await formRef.value?.validate().catch(() => false);
        action('submit')(valid ? 'valid' : 'invalid');
      };
      return {
        formRef,
        model,
        submit
      };
    },
    template: \`
      <g-config-provider>
        <g-form ref="formRef" :model="model">
          <g-form-item
            label="Tags"
            prop="tags"
            show-message="child"
            :rules="[
              { type: 'array', required: true, message: 'Agrega al menos un tag', trigger: 'change' },
              { type: 'array', min: 2, message: 'Necesitas al menos 2 tags', trigger: 'change' }
            ]"
          >
            <g-input-tag
              v-model="model.tags"
              placeholder="Mínimo 2 tags"
              help-text="Agrega al menos dos tecnologías"
            />
          </g-form-item>
        </g-form>
        <g-button
          type-native="button"
          variant="primary"
          title="Validar formulario"
          style="margin-top: 12px;"
          @click="submit"
        />
      </g-config-provider>
    \`
  })
}`,...xe.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
  name: 'Reglas desde GForm padre',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo comparativo con \`GInput\` y \`GInputTag\` usando reglas definidas en el \`GForm\` padre. \`GInputTag\` requiere reglas de tipo \`array\` para validar correctamente tags vacíos o incompletos.'
      }
    }
  },
  render: () => ({
    components: {
      GInputTag,
      GInput,
      GConfigProvider,
      GForm,
      GFormItem,
      GButton
    },
    setup() {
      const formRef = ref<FormInstance>();
      const model = reactive({
        name: '',
        tags: [] as string[]
      });
      const rules = {
        name: [{
          required: true,
          message: 'Ingresa un nombre',
          trigger: 'change'
        }, {
          min: 3,
          message: 'El nombre debe tener al menos 3 caracteres',
          trigger: 'change'
        }],
        tags: [{
          type: 'array',
          required: true,
          message: 'Agrega al menos un tag',
          trigger: 'change'
        }, {
          type: 'array',
          min: 2,
          message: 'Necesitas al menos 2 tags',
          trigger: 'change'
        }]
      };
      const submit = async () => {
        const valid = await formRef.value?.validate().catch(() => false);
        action('parent-rules-submit')(valid ? 'valid' : 'invalid');
      };
      return {
        formRef,
        model,
        rules,
        submit
      };
    },
    template: \`
      <g-config-provider>
        <g-form ref="formRef" :model="model" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="name" show-message="child">
            <g-input
              v-model="model.name"
              label="Nombre"
              placeholder="Ingresa un nombre"
              help-text="Mínimo 3 caracteres"
            />
          </g-form-item>

          <g-form-item prop="tags" show-message="child">
            <g-input-tag
              v-model="model.tags"
              placeholder="Agrega tecnologías"
              help-text="Agrega al menos dos tags"
            />
          </g-form-item>
        </g-form>
        <g-button
          type-native="button"
          variant="primary"
          title="Validar formulario"
          style="margin-top: 12px;"
          @click="submit"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ model }}</pre>
      </g-config-provider>
    \`
  })
}`,...Ce.parameters?.docs?.source}}};const Et=["Primary","LimitsAndDuplicates","Delimiter","CollapsedTags","Draggable","DisabledAndReadonly","FormValidation","ParentFormRules"];export{be as CollapsedTags,ye as Delimiter,Te as DisabledAndReadonly,he as Draggable,xe as FormValidation,ve as LimitsAndDuplicates,Ce as ParentFormRules,fe as Primary,Et as __namedExportsOrder,Ct as default};
