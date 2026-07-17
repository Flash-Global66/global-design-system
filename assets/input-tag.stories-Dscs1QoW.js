import{D as Oe,r as C,c as f,w as ia,U as da,V as ga,C as Ne,d as ca,t as U,j,l as oe,k as A,u as a,q as re,a as Se,h as Pe,F as ke,y as Fe,e as ne,a2 as pa,m as ma,X as ua,x as se,v as fa,N as ze,n as Me,b as V,f as Le,z as Re}from"./vue.esm-bundler-Deokl1F5.js";import{a as Z}from"./index-Br0BFi8U.js";import{d as Ge,c as Ke}from"./useEmptyValues-S5EffpHc.js";import{u as va}from"./useCalcInputWidth-BebK83ol.js";import{G as $e,H as we}from"./index-BCJKNGWg.js";import{n as ya}from"./index-CL9Y1TT6.js";import{_ as ba}from"./index-B-U0DsHd.js";import{a as ge,M as ha,z as Ta,L as xa}from"./index-iviVQk4X.js";import{a as _,h as Be,b as Ca,d as le,N as qe}from"./props.util-Dtwzmmnf.js";import{I as ie,C as ee,U as de,E as ae}from"./event.constant-LtAI3-H4.js";import{u as Ea,a as Ia}from"./useFocusController-C2BXcCNp.js";import{a as We}from"./index-Cla1j_Lq.js";import{w as Da}from"./error.util-CmMZjXeT.js";import{G as Aa}from"./index-My2UDBtR.js";import{G as O}from"./ConfigProvider-DiWOjIRd.js";import{G as He,a as Xe}from"./index-BqTclQlI.js";import{G as Je}from"./index-DplprqvC.js";import{a as Sa,b as Ue}from"./documentation-stories-ZyKnmB2F.js";import"./v4-CtRu48qb.js";import"./index-C-KaQxZk.js";import"./index-BmLAfq-y.js";import"./index-D9lthdDW.js";import"./useAttrs-DU4L9I3P.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CRx4dHSJ.js";import"./index-BXyPvuAD.js";const Ra=Ca({helpText:{type:String,default:void 0},modelValue:{type:le(Array),default:()=>[]},max:Number,tagType:{...$e.type,default:"info"},tagEffect:{...$e.effect,default:"light"},effect:{type:le(String),default:"light"},trigger:{type:le(String),default:ae.enter},draggable:Boolean,delimiter:{type:le([String,RegExp]),default:""},size:{type:String,values:["large","default","small"],default:"default"},clearable:Boolean,clearIcon:{type:le(String),default:"regular circle-xmark"},disabled:{type:Boolean,default:void 0},validateEvent:{type:Boolean,default:!0},readonly:Boolean,autofocus:Boolean,id:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},placeholder:String,autocomplete:{type:String,default:"off"},saveOnBlur:{type:Boolean,default:!0},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},ariaLabel:String}),Ga={[de]:e=>Be(e)||ge(e)||_(e),[ee]:e=>Be(e)||ge(e)||_(e),[ie]:e=>_(e),"add-tag":e=>_(e)||Be(e),"remove-tag":(e,o)=>_(e)&&Ge(o),"drag-tag":(e,o,E)=>Ge(e)&&Ge(o)&&_(E),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0};function wa({wrapperRef:e,handleDragged:o,afterDragged:E}){const d=Ke("input-tag"),I=Oe(),S=C(!1);let r,b,g,p;function R(c){return`.${d.e("inner")} > .${d.e("tag-wrapper")}:nth-child(${c+1})`}function N(c,y){r=y,b=e.value.querySelector(R(y)),b&&(b.style.opacity="0.5"),c.dataTransfer&&(c.dataTransfer.effectAllowed="move")}function w(c,y){if(g=y,c.preventDefault(),c.dataTransfer&&(c.dataTransfer.dropEffect="move"),ge(r)||r===y){S.value=!1;return}const h=e.value.querySelector(R(y)).getBoundingClientRect(),D=r+1!==y,$=r-1!==y,q=c.clientX-h.left,B=D?$?.5:1:-1,P=$?D?.5:0:1;q<=h.width*B?p="before":q>h.width*P?p="after":p=void 0;const T=e.value.querySelector(`.${d.e("inner")}`),x=T.getBoundingClientRect(),G=Number.parseFloat(window.getComputedStyle(T).gap||"6")/2,W=h.top-x.top;let H=-9999;if(p==="before")H=Math.max(h.left-x.left-G,Math.floor(-G/2));else if(p==="after"){const X=h.right-x.left;H=X+(x.width===X?Math.floor(G/2):G)}I.value&&(I.value.style.top=`${W}px`,I.value.style.left=`${H}px`),S.value=!!p}function K(c){c.preventDefault(),b&&(b.style.opacity=""),p&&!ge(r)&&!ge(g)&&r!==g&&o(r,g,p),S.value=!1,r=void 0,b=null,g=void 0,p=void 0,E?.()}return{dropIndicatorRef:I,showDropIndicator:S,handleDragStart:N,handleDragOver:w,handleDragEnd:K}}function Ba(){const e=C(!1);return{hovering:e,handleMouseEnter:()=>{e.value=!0},handleMouseLeave:()=>{e.value=!1}}}const Va=e=>Array.isArray(e)?e:[e],je=e=>e.code||e.key,Na=()=>typeof navigator>"u"?!1:/android/i.test(navigator.userAgent);function Pa({props:e,emit:o,formItem:E}){const d=ha(),I=f(()=>e.size??"default"),S=Oe(),r=C(""),b=C(),g=f(()=>I.value==="small"?"xs":I.value==="large"?"md":"sm"),p=f(()=>e.modelValue?.length?void 0:e.placeholder),R=f(()=>!(e.readonly||d.value)),N=f(()=>{if(e.max===void 0||e.max===null)return!1;const t=e.max;return(e.modelValue?.length??0)>=t}),w=f(()=>e.collapseTags?e.modelValue?.slice(0,e.maxCollapseTags):e.modelValue),K=f(()=>e.collapseTags?e.modelValue?.slice(e.maxCollapseTags):[]),c=t=>{if(e.readonly||d.value)return;const i=e.modelValue??[],u=Va(t),m=[];for(const z of u)!i.includes(z)&&!m.includes(z)&&m.push(z);if(e.max!==void 0&&e.max!==null){const z=Math.max(e.max-i.length,0);m.splice(z)}if(!m.length){r.value="";return}const k=[...i,...m],F=m.length===1?m[0]:m;o(de,k),o(ee,k),o("add-tag",F),r.value=""},y=t=>{const i=t.split(e.delimiter),u=i.length>1?i.map(m=>m.trim()).filter(Boolean):[];return u.length===1?u[0]:u},h=t=>{const i=t.clipboardData?.getData("text");if(e.readonly||d.value||N.value||!e.delimiter||!i)return;const u=t.target,{selectionStart:m,selectionEnd:k,value:F}=u,z=m??0,Ie=k??0,De=F.slice(0,z)+i+F.slice(Ie),Q=y(De);(Array.isArray(Q)?Q.length:Q)&&(c(Q),o(ie,r.value),t.preventDefault())},D=()=>{if(N.value){r.value="",o(ie,"");return}if(!J.value){if(e.delimiter&&r.value){const t=y(r.value),i=Array.isArray(t)?t:t?[t]:[];i.length&&c(i)}o(ie,r.value)}},$=t=>{if(J.value)return;switch(je(t)){case e.trigger:t.preventDefault(),t.stopPropagation(),B();break;case ae.numpadEnter:e.trigger===ae.enter&&(t.preventDefault(),t.stopPropagation(),B());break;case ae.backspace:if(e.readonly||d.value)return;!r.value&&e.modelValue?.length&&(t.preventDefault(),t.stopPropagation(),P(e.modelValue.length-1));break}},q=t=>{if(J.value||!Na())return;switch(je(t)){case ae.space:e.trigger===ae.space&&(t.preventDefault(),t.stopPropagation(),B());break}},B=()=>{if(e.readonly||d.value)return;const t=r.value?.trim();!t||N.value||c(t)},P=t=>{if(e.readonly||d.value)return;const i=(e.modelValue??[]).slice(),[u]=i.splice(t,1);o(de,i),o(ee,i),o("remove-tag",u,t)},T=()=>{if(e.readonly||d.value)return;const t=[];r.value="",o(de,t),o(ee,t),o(ie,""),o("clear")},x=(t,i,u)=>{if(e.readonly||d.value)return;const m=(e.modelValue??[]).slice(),[k]=m.splice(t,1),F=i>t&&u==="before"?-1:i<t&&u==="after"?1:0;m.splice(i+F,0,k),o(de,m),o(ee,m),o("drag-tag",t,i+F,k)},G=()=>{S.value?.focus()},W=()=>{S.value?.blur()},H=t=>{o("focus",t)},X=t=>{o("blur",t)},{wrapperRef:ce,isFocused:pe}=Ea(S,{beforeBlur(t){const u=b.value?.isFocusInsideContent;return typeof u=="function"?!!u(t):!1},afterBlur(){e.saveOnBlur?B():r.value="",e.validateEvent&&E?.validate?.("blur").catch(qe)}}),{isComposing:J,handleCompositionStart:me,handleCompositionUpdate:ue,handleCompositionEnd:Ee}=Ia({afterComposition:D});return ia(()=>e.modelValue,()=>{e.validateEvent&&E?.validate?.(ee).catch(qe)}),{inputRef:S,wrapperRef:ce,tagTooltipRef:b,isFocused:pe,isComposing:J,inputValue:r,size:I,tagSize:g,placeholder:p,closable:R,disabled:d,inputLimit:N,showTagList:w,collapseTagList:K,handleDragged:x,handlePaste:h,handleInput:D,handleKeydown:$,handleKeyup:q,handleAddTag:B,handleRemoveTag:P,handleClear:T,handleCompositionStart:me,handleCompositionUpdate:ue,handleCompositionEnd:Ee,handleFocus:H,handleBlur:X,focus:G,blur:W}}function ka({props:e,isFocused:o,hovering:E,disabled:d,inputValue:I,size:S}){const r=da(),b=ga(),g=Ke("input-tag"),p=C(),R=C(),N=f(()=>[g.b(),g.is("focused",o.value),g.is("complete",!!(e.modelValue?.length||I.value)),g.is("hovering",E.value),g.is("disabled",d.value),g.m(S.value),r.class]),w=f(()=>[r.style]),K=f(()=>{const T={};for(const x in r)x==="class"||x==="style"||(T[x]=r[x]);return T}),c=f(()=>[g.e("inner"),g.is("draggable",!!e.draggable),g.is("left-space",!e.modelValue?.length&&!b.prefix),g.is("right-space",!e.modelValue?.length&&!b.suffix)]),y=f(()=>!!(e.clearable&&!d.value&&!e.readonly&&(e.modelValue?.length||I.value)&&(o.value||E.value))),h=f(()=>!!(b.suffix||y.value)),D=Ne({innerWidth:0,collapseItemWidth:0}),$=()=>{if(!R.value)return 0;const T=window.getComputedStyle(R.value);return Number.parseFloat(T.gap||"6px")},q=()=>{R.value&&(D.innerWidth=Number.parseFloat(window.getComputedStyle(R.value).width))},B=()=>{p.value&&(D.collapseItemWidth=p.value.getBoundingClientRect().width)},P=f(()=>{if(!e.collapseTags)return{};const T=$(),G=T+11,W=p.value&&e.maxCollapseTags===1?D.innerWidth-D.collapseItemWidth-T-G:D.innerWidth-G;return{maxWidth:`${Math.max(W,0)}px`}});return We(R,q),We(p,B),{ns:g,containerKls:N,containerStyle:w,inputAttrs:K,innerKls:c,showClear:y,showSuffix:h,tagStyle:P,collapseItemRef:p,innerRef:R}}const Fa=["draggable","onDragstart","onDragover"],za=["id","minlength","maxlength","disabled","readonly","autocomplete","tabindex","placeholder","autofocus","aria-label"],Ma=["textContent"],Qe=ca({name:"GInputTag",inheritAttrs:!1,__name:"input-tag",props:Ra,emits:Ga,setup(e,{expose:o,emit:E}){const d=e,S=E,{formItem:r}=xa(),{inputId:b}=Ta(d,{formItemContext:r}),{inputRef:g,wrapperRef:p,tagTooltipRef:R,isFocused:N,inputValue:w,size:K,tagSize:c,placeholder:y,closable:h,disabled:D,showTagList:$,collapseTagList:q,handleDragged:B,handlePaste:P,handleInput:T,handleKeydown:x,handleKeyup:G,handleRemoveTag:W,handleClear:H,handleCompositionStart:X,handleCompositionUpdate:ce,handleCompositionEnd:pe,handleFocus:J,handleBlur:me,focus:ue,blur:Ee}=Pa({props:d,emit:S,formItem:r}),{hovering:t,handleMouseEnter:i,handleMouseLeave:u}=Ba(),{calculatorRef:m,inputStyle:k}=va(),{dropIndicatorRef:F,showDropIndicator:z,handleDragStart:Ie,handleDragOver:De,handleDragEnd:Q}=wa({wrapperRef:p,handleDragged:B,afterDragged:ue}),{ns:v,containerKls:Ye,containerStyle:Ze,inputAttrs:_e,innerKls:ea,showClear:aa,showSuffix:ta,tagStyle:oa,collapseItemRef:ra,innerRef:na}=ka({props:d,isFocused:N,hovering:t,disabled:D,inputValue:w,size:K}),te=f(()=>!!(r?.shouldShowErrorChild||r?.showMessage==="child"&&r?.validateState==="error")),Ae=f(()=>r?.validateMessage),sa=f(()=>[v.e("help-text"),{[v.e("help-error")]:te.value}]),la=f(()=>Ae.value||d.helpText||r?.$el);return o({focus:ue,blur:Ee}),(n,l)=>(V(),U("div",{class:A(a(v).e("container"))},[j("div",{ref_key:"wrapperRef",ref:p,class:A([a(Ye),a(v).is("error",te.value||a(r)?.shouldShowError)]),style:Me(a(Ze)),onMouseenter:l[12]||(l[12]=(...s)=>a(i)&&a(i)(...s)),onMouseleave:l[13]||(l[13]=(...s)=>a(u)&&a(u)(...s))},[n.$slots.prefix?(V(),U("div",{key:0,class:A(a(v).e("prefix"))},[re(n.$slots,"prefix")],2)):oe("",!0),j("div",{ref_key:"innerRef",ref:na,class:A(a(ea))},[(V(!0),U(ke,null,Fe(a($),(s,M)=>(V(),U("div",{key:`${M}-${s}`,class:A([a(v).e("tag-wrapper"),a(h)&&n.draggable?a(v).is("draggable",!0):""]),draggable:a(h)&&n.draggable?!0:void 0,onDragstart:Y=>a(Ie)(Y,M),onDragover:Y=>a(De)(Y,M),onDragend:l[0]||(l[0]=(...Y)=>a(Q)&&a(Q)(...Y)),onDrop:l[1]||(l[1]=ze(()=>{},["stop"]))},[Le(a(we),{size:a(c),closable:a(h),type:n.tagType,effect:n.tagEffect,"disable-transitions":"",style:Me(a(oa)),onClose:Y=>a(W)(M)},{default:ne(()=>[re(n.$slots,"tag",{value:s,index:M},()=>[Re(se(s),1)])]),_:2},1032,["size","closable","type","effect","style","onClose"])],42,Fa))),128)),n.collapseTags&&n.modelValue&&n.modelValue.length>n.maxCollapseTags?(V(),Se(a(ya),{key:0,ref_key:"tagTooltipRef",ref:R,disabled:!n.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:n.effect,placement:"bottom"},{default:ne(()=>[j("div",{ref_key:"collapseItemRef",ref:ra,class:A(a(v).e("collapse-tag"))},[Le(a(we),{closable:!1,size:a(c),type:n.tagType,effect:n.tagEffect,"disable-transitions":""},{default:ne(()=>[Re(" + "+se(n.modelValue.length-n.maxCollapseTags),1)]),_:1},8,["size","type","effect"])],2)]),content:ne(()=>[j("div",{class:A(a(v).e("input-tag-list"))},[(V(!0),U(ke,null,Fe(a(q),(s,M)=>(V(),Se(a(we),{key:`c-${M}-${s}`,size:a(c),closable:a(h),type:n.tagType,effect:n.tagEffect,"disable-transitions":"",onClose:Y=>a(W)(M+n.maxCollapseTags)},{default:ne(()=>[re(n.$slots,"tag",{value:s,index:M+n.maxCollapseTags},()=>[Re(se(s),1)])]),_:2},1032,["size","closable","type","effect","onClose"]))),128))],2)]),_:3},8,["disabled","effect"])):oe("",!0),j("div",{class:A(a(v).e("input-wrapper"))},[Pe(j("input",ma({id:a(b),ref_key:"inputRef",ref:g,"onUpdate:modelValue":l[2]||(l[2]=s=>ua(w)?w.value=s:null),type:"text"},a(_e),{minlength:n.minlength,maxlength:n.maxlength,disabled:a(D),readonly:n.readonly,autocomplete:n.autocomplete,tabindex:n.tabindex,placeholder:a(y),autofocus:n.autofocus,"aria-label":n.ariaLabel,class:a(v).e("input"),style:a(k),onCompositionstart:l[3]||(l[3]=(...s)=>a(X)&&a(X)(...s)),onCompositionupdate:l[4]||(l[4]=(...s)=>a(ce)&&a(ce)(...s)),onCompositionend:l[5]||(l[5]=(...s)=>a(pe)&&a(pe)(...s)),onPaste:l[6]||(l[6]=(...s)=>a(P)&&a(P)(...s)),onInput:l[7]||(l[7]=(...s)=>a(T)&&a(T)(...s)),onKeydown:l[8]||(l[8]=(...s)=>a(x)&&a(x)(...s)),onKeyup:l[9]||(l[9]=(...s)=>a(G)&&a(G)(...s)),onFocus:l[10]||(l[10]=(...s)=>a(J)&&a(J)(...s)),onBlur:l[11]||(l[11]=(...s)=>a(me)&&a(me)(...s))}),null,16,za),[[pa,a(w)]]),j("span",{ref_key:"calculatorRef",ref:m,"aria-hidden":"true",class:A(a(v).e("input-calculator")),textContent:se(a(w))},null,10,Ma)],2),Pe(j("div",{ref_key:"dropIndicatorRef",ref:F,class:A(a(v).e("drop-indicator"))},null,2),[[fa,a(z)]])],2),a(ta)?(V(),U("div",{key:1,class:A(a(v).e("suffix"))},[re(n.$slots,"suffix"),a(aa)?(V(),Se(a(ba),{key:0,class:A([a(v).e("icon"),a(v).e("clear")]),onMousedown:ze(()=>{},["prevent"]),onClick:a(H),name:n.clearIcon},null,8,["class","onClick","name"])):oe("",!0)],2)):oe("",!0)],38),la.value?(V(),U("div",{key:0,class:A(a(v).e("help"))},[re(n.$slots,"helpText",{error:Ae.value,isError:te.value},()=>[(V(),U("p",{key:te.value?"error":"help",class:A(sa.value)},se(te.value?Ae.value:d.helpText),3))])],2)):oe("",!0)],2))}});Qe.__docgenInfo={name:"GInputTag",exportName:"default",displayName:"input-tag",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],slots:[{name:"prefix"},{name:"tag",scoped:!0,bindings:[{name:"value",title:"binding"},{name:"index",title:"binding"}]},{name:"suffix"},{name:"helpText",scoped:!0,bindings:[{name:"error",title:"binding"},{name:"isError",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/input-tag/src/input-tag.vue"]};const L=Da(Qe),La="0.3.14",Ve={"@vueuse/core":"^13.0.0","lodash-unified":"^1.0.3",vue:"^3.2.0"},pt={title:"Form/InputTag",component:L,parameters:{docs:{description:{component:`
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
`}}},argTypes:{modelValue:{control:"object",description:"Listado de tags (v-model)",table:{type:{summary:"string[]"},category:"Datos"}},max:{control:"number",description:"Número máximo de tags permitidos",table:{category:"Comportamiento"}},tagType:{control:{type:"select"},options:["success","info","warning","error","grey"],description:"Tipo de tag (color)",table:{category:"Apariencia"}},tagEffect:{control:{type:"select"},options:["light","dark"],description:"Efecto visual del tag",table:{category:"Apariencia"}},effect:{control:{type:"select"},options:["light","dark"],description:"Tema del tooltip de overflow",table:{category:"Apariencia"}},trigger:{control:{type:"select"},options:["Enter","Space"],description:"Tecla que confirma el tag",table:{category:"Comportamiento"}},draggable:{control:"boolean",description:"Permite reordenar los tags arrastrándolos",table:{category:"Comportamiento"}},delimiter:{control:"text",description:'Carácter o expresión que separa tags (por ejemplo, ",")',table:{category:"Comportamiento"}},size:{control:{type:"select"},options:["large","default","small"],description:"Tamaño del input",table:{category:"Apariencia"}},clearable:{control:"boolean",description:"Muestra el botón para limpiar",table:{category:"Comportamiento"}},clearIcon:{control:"text",description:'Icono de clear (IconString, p. ej. "regular circle-xmark")',table:{category:"Apariencia"}},helpText:{control:"text",description:"Texto de ayuda mostrado debajo del input tag",table:{category:"Contenido"}},disabled:{control:"boolean",description:"Deshabilita el input y la gestión de tags",table:{category:"Estado"}},readonly:{control:"boolean",description:"Sólo lectura",table:{category:"Estado"}},validateEvent:{control:"boolean",description:"Emite eventos de validación hacia GFormItem",table:{category:"Form"}},collapseTags:{control:"boolean",description:'Colapsa los tags en un indicador "+N"',table:{category:"Apariencia"}},collapseTagsTooltip:{control:"boolean",description:"Muestra tooltip con los tags colapsados",table:{category:"Apariencia"}},maxCollapseTags:{control:"number",description:"Cantidad de tags visibles antes de colapsar",table:{category:"Apariencia"}},saveOnBlur:{control:"boolean",description:"Guarda el contenido del input al perder el foco",table:{category:"Comportamiento"}},placeholder:{control:"text",description:"Placeholder del input",table:{category:"Contenido"}},"onUpdate:modelValue":{description:"Se emite al actualizar el listado de tags",table:{category:"Eventos"}},onChange:{description:"Se emite cuando cambia el listado de tags",table:{category:"Eventos"}},onAddTag:{description:"Se emite al añadir un nuevo tag",table:{category:"Eventos"}},onRemoveTag:{description:"Se emite al eliminar un tag",table:{category:"Eventos"}},onDragTag:{description:"Se emite al reordenar un tag",table:{category:"Eventos"}},onClear:{description:"Se emite al limpiar todos los tags",table:{category:"Eventos"}}},args:{modelValue:["vue","typescript"],placeholder:"Escribe y presiona Enter",tagType:"info",tagEffect:"light",effect:"light",trigger:"Enter",draggable:!1,delimiter:"",size:"default",clearable:!0,clearIcon:"regular circle-xmark",disabled:!1,readonly:!1,validateEvent:!0,collapseTags:!1,collapseTagsTooltip:!1,maxCollapseTags:1,saveOnBlur:!0,helpText:"Escribe un tag y presiona Enter"}},fe={name:"Básico",parameters:{docs:{description:{story:"Uso básico. v-model con un array de strings. Pulsa Enter para añadir un tag."}}},render:e=>({components:{GInputTag:L,GConfigProvider:O},setup(){const o=C(["vue","ts"]);return{args:e,tags:o,onAdd:Z("add-tag"),onRemove:Z("remove-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          v-bind="args"
          @add-tag="onAdd"
          @remove-tag="onRemove"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},ve={name:"Límite y duplicados",parameters:{docs:{description:{story:"Define un máximo de tags con la prop `max`. Los tags duplicados se bloquean automáticamente al añadir con Enter."}}},render:()=>({components:{GInputTag:L,GConfigProvider:O},setup(){return{tags:C(["vue","ts"]),onAdd:Z("add-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          :max="3"
          placeholder="Sólo 3 tags permitidos"
          @add-tag="onAdd"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},ye={name:"Delimitador",parameters:{docs:{description:{story:"Con la prop `delimiter` puedes separar múltiples tags en una sola entrada (por ejemplo, con coma o Enter)."}}},render:()=>({components:{GInputTag:L,GConfigProvider:O},setup(){return{tags:C(["vue"]),onAdd:Z("add-tag")}},template:`
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
    `})},he={name:"Reordenable (drag & drop)",parameters:{docs:{description:{story:"Habilita `draggable` para permitir reordenar los tags arrastrándolos."}}},render:()=>({components:{GInputTag:L,GConfigProvider:O},setup(){return{tags:C(["primero","segundo","tercero","cuarto"]),onDrag:Z("drag-tag")}},template:`
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
    `})},xe={name:"Integración con GForm",parameters:{docs:{description:{story:"Cuando el componente está dentro de un `GFormItem` con reglas, la validación se dispara al cambiar (change) y al perder el foco (blur)."}}},render:()=>({components:{GInputTag:L,GConfigProvider:O,GForm:Xe,GFormItem:He,GButton:Je},setup(){const e=C(),o=Ne({tags:[]});return{formRef:e,model:o,submit:async()=>{const d=await e.value?.validate().catch(()=>!1);Z("submit")(d?"valid":"invalid")}}},template:`
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
    `})},Ce={name:"Reglas desde GForm padre",parameters:{docs:{description:{story:"Ejemplo comparativo con `GInput` y `GInputTag` usando reglas definidas en el `GForm` padre. `GInputTag` requiere reglas de tipo `array` para validar correctamente tags vacíos o incompletos."}}},render:()=>({components:{GInputTag:L,GInput:Aa,GConfigProvider:O,GForm:Xe,GFormItem:He,GButton:Je},setup(){const e=C(),o=Ne({name:"",tags:[]});return{formRef:e,model:o,rules:{name:[{required:!0,message:"Ingresa un nombre",trigger:"change"},{min:3,message:"El nombre debe tener al menos 3 caracteres",trigger:"change"}],tags:[{type:"array",required:!0,message:"Agrega al menos un tag",trigger:"change"},{type:"array",min:2,message:"Necesitas al menos 2 tags",trigger:"change"}]},submit:async()=>{const I=await e.value?.validate().catch(()=>!1);Z("parent-rules-submit")(I?"valid":"invalid")}}},template:`
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
}`,...Ce.parameters?.docs?.source}}};const mt=["Primary","LimitsAndDuplicates","Delimiter","CollapsedTags","Draggable","DisabledAndReadonly","FormValidation","ParentFormRules"];export{be as CollapsedTags,ye as Delimiter,Te as DisabledAndReadonly,he as Draggable,xe as FormValidation,ve as LimitsAndDuplicates,Ce as ParentFormRules,fe as Primary,mt as __namedExportsOrder,pt as default};
