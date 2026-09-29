import{l as la,p as ne,L as _,a4 as Se,G as Ke,r as D,c as f,az as Pe,s as ia,a2 as da,a3 as ca,E as Fe,d as ga,o as B,y as W,f as q,g as A,u as a,i as oe,j as re,F as Me,A as Ne,R as ke,b as ze,w as se,B as Re,z as le,n as Le,a as Ge,e as $e,ad as pa,m as ua,a6 as ma,v as fa}from"./iframe-D68-21rR.js";import{f as we,u as je}from"./useEmptyValues-BYEtC3GK.js";import{u as va}from"./useCalcInputWidth-OVgT0EXV.js";import{G as Oe,H as Ve}from"./index-h9Rlcmqz.js";import{n as ya}from"./index-BVnpmW92.js";import{R as ba}from"./index-Sx9bRU2o.js";import{a as ce,M as ha,L as Ta,z as xa}from"./index-Dg8kVpmC.js";import{E as ee,I as ie,C as ae,U as de}from"./event.constant-LtAI3-H4.js";import{a as Ea,b as Ca}from"./useAttrs-tN5KTYTF.js";import{a as Ue}from"./index-BM4-nLmm.js";import{w as Ia}from"./install.util-cBz1HN_T.js";import{G as Aa}from"./index-Drzmzde9.js";import{G as K}from"./ConfigProvider-DYFTuwcc.js";import{G as He,a as Ye}from"./index-wedrlwXE.js";import{G as Xe}from"./index-D5_wuKzy.js";import{a as Da,b as We}from"./documentation-stories-Dyq0-kcC.js";import"./preload-helper-Dch09mLN.js";import"./index-ByZHqiBk.js";import"./useId-CBmop3sp.js";import"./index-CIL--9Ko.js";import"./index-Pjkal7aR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CRx4dHSJ.js";import"./index-D9zTHOIQ.js";const Sa=la({helpText:{type:String,default:void 0},modelValue:{type:ne(Array),default:()=>[]},max:Number,tagType:{...Oe.type,default:"info"},tagEffect:{...Oe.effect,default:"light"},effect:{type:ne(String),default:"light"},trigger:{type:ne(String),default:ee.enter},draggable:Boolean,delimiter:{type:ne([String,RegExp]),default:""},size:{type:String,values:["large","default","small"],default:"default"},clearable:Boolean,clearIcon:{type:ne(String),default:"regular circle-xmark"},disabled:{type:Boolean,default:void 0},validateEvent:{type:Boolean,default:!0},readonly:Boolean,autofocus:Boolean,id:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},placeholder:String,autocomplete:{type:String,default:"off"},saveOnBlur:{type:Boolean,default:!0},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},ariaLabel:String}),Ra={[de]:e=>Se(e)||ce(e)||_(e),[ae]:e=>Se(e)||ce(e)||_(e),[ie]:e=>_(e),"add-tag":e=>_(e)||Se(e),"remove-tag":(e,n)=>_(e)&&we(n),"drag-tag":(e,n,y)=>we(e)&&we(n)&&_(y),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0};function Ga({wrapperRef:e,handleDragged:n,afterDragged:y}){const i=je("input-tag"),C=Ke(),S=D(!1);let o,h,c,p;function R(g){return`.${i.e("inner")} > .${i.e("tag-wrapper")}:nth-child(${g+1})`}function F(g,b){o=b,h=e.value.querySelector(R(b)),h&&(h.style.opacity="0.5"),g.dataTransfer&&(g.dataTransfer.effectAllowed="move")}function w(g,b){if(c=b,g.preventDefault(),g.dataTransfer&&(g.dataTransfer.dropEffect="move"),ce(o)||o===b){S.value=!1;return}const T=e.value.querySelector(R(b)).getBoundingClientRect(),I=o+1!==b,$=o-1!==b,O=g.clientX-T.left,V=I?$?.5:1:-1,P=$?I?.5:0:1;O<=T.width*V?p="before":O>T.width*P?p="after":p=void 0;const x=e.value.querySelector(`.${i.e("inner")}`),E=x.getBoundingClientRect(),G=Number.parseFloat(window.getComputedStyle(x).gap||"6")/2,U=T.top-E.top;let H=-9999;if(p==="before")H=Math.max(T.left-E.left-G,Math.floor(-G/2));else if(p==="after"){const Y=T.right-E.left;H=Y+(E.width===Y?Math.floor(G/2):G)}C.value&&(C.value.style.top=`${U}px`,C.value.style.left=`${H}px`),S.value=!!p}function j(g){g.preventDefault(),h&&(h.style.opacity=""),p&&!ce(o)&&!ce(c)&&o!==c&&n(o,c,p),S.value=!1,o=void 0,h=null,c=void 0,p=void 0,y?.()}return{dropIndicatorRef:C,showDropIndicator:S,handleDragStart:F,handleDragOver:w,handleDragEnd:j}}function wa(){const e=D(!1);return{hovering:e,handleMouseEnter:()=>{e.value=!0},handleMouseLeave:()=>{e.value=!1}}}const Va=e=>Array.isArray(e)?e:[e],qe=e=>e.code||e.key,Ba=()=>typeof navigator>"u"?!1:/android/i.test(navigator.userAgent);function Fa({props:e,emit:n,formItem:y}){const i=ha(),C=f(()=>e.size??"default"),S=Ke(),o=D(""),h=D(),c=f(()=>C.value==="small"?"xs":C.value==="large"?"md":"sm"),p=f(()=>e.modelValue?.length?void 0:e.placeholder),R=f(()=>!(e.readonly||i.value)),F=f(()=>{if(e.max===void 0||e.max===null)return!1;const t=e.max;return(e.modelValue?.length??0)>=t}),w=f(()=>e.collapseTags?e.modelValue?.slice(0,e.maxCollapseTags):e.modelValue),j=f(()=>e.collapseTags?e.modelValue?.slice(e.maxCollapseTags):[]),g=t=>{if(e.readonly||i.value)return;const d=e.modelValue??[],m=Va(t),u=[];for(const k of m)!d.includes(k)&&!u.includes(k)&&u.push(k);if(e.max!==void 0&&e.max!==null){const k=Math.max(e.max-d.length,0);u.splice(k)}if(!u.length){o.value="";return}const M=[...d,...u],N=u.length===1?u[0]:u;n(de,M),n(ae,M),n("add-tag",N),o.value=""},b=t=>{const d=t.split(e.delimiter),m=d.length>1?d.map(u=>u.trim()).filter(Boolean):[];return m.length===1?m[0]:m},T=t=>{const d=t.clipboardData?.getData("text");if(e.readonly||i.value||F.value||!e.delimiter||!d)return;const m=t.target,{selectionStart:u,selectionEnd:M,value:N}=m,k=u??0,Ie=M??0,Ae=N.slice(0,k)+d+N.slice(Ie),J=b(Ae);(Array.isArray(J)?J.length:J)&&(g(J),n(ie,o.value),t.preventDefault())},I=()=>{if(F.value){o.value="",n(ie,"");return}if(!X.value){if(e.delimiter&&o.value){const t=b(o.value),d=Array.isArray(t)?t:t?[t]:[];d.length&&g(d)}n(ie,o.value)}},$=t=>{if(X.value)return;switch(qe(t)){case e.trigger:t.preventDefault(),t.stopPropagation(),V();break;case ee.numpadEnter:e.trigger===ee.enter&&(t.preventDefault(),t.stopPropagation(),V());break;case ee.backspace:if(e.readonly||i.value)return;!o.value&&e.modelValue?.length&&(t.preventDefault(),t.stopPropagation(),P(e.modelValue.length-1));break}},O=t=>{if(X.value||!Ba())return;switch(qe(t)){case ee.space:e.trigger===ee.space&&(t.preventDefault(),t.stopPropagation(),V());break}},V=()=>{if(e.readonly||i.value)return;const t=o.value?.trim();!t||F.value||g(t)},P=t=>{if(e.readonly||i.value)return;const d=(e.modelValue??[]).slice(),[m]=d.splice(t,1);n(de,d),n(ae,d),n("remove-tag",m,t)},x=()=>{if(e.readonly||i.value)return;const t=[];o.value="",n(de,t),n(ae,t),n(ie,""),n("clear")},E=(t,d,m)=>{if(e.readonly||i.value)return;const u=(e.modelValue??[]).slice(),[M]=u.splice(t,1),N=d>t&&m==="before"?-1:d<t&&m==="after"?1:0;u.splice(d+N,0,M),n(de,u),n(ae,u),n("drag-tag",t,d+N,M)},G=()=>{S.value?.focus()},U=()=>{S.value?.blur()},H=t=>{n("focus",t)},Y=t=>{n("blur",t)},{wrapperRef:ge,isFocused:pe}=Ea(S,{beforeBlur(t){const m=h.value?.isFocusInsideContent;return typeof m=="function"?!!m(t):!1},afterBlur(){e.saveOnBlur?V():o.value="",e.validateEvent&&y?.validate?.("blur").catch(Pe)}}),{isComposing:X,handleCompositionStart:ue,handleCompositionUpdate:me,handleCompositionEnd:Ce}=Ca({afterComposition:I});return ia(()=>e.modelValue,()=>{e.validateEvent&&y?.validate?.(ae).catch(Pe)}),{inputRef:S,wrapperRef:ge,tagTooltipRef:h,isFocused:pe,isComposing:X,inputValue:o,size:C,tagSize:c,placeholder:p,closable:R,disabled:i,inputLimit:F,showTagList:w,collapseTagList:j,handleDragged:E,handlePaste:T,handleInput:I,handleKeydown:$,handleKeyup:O,handleAddTag:V,handleRemoveTag:P,handleClear:x,handleCompositionStart:ue,handleCompositionUpdate:me,handleCompositionEnd:Ce,handleFocus:H,handleBlur:Y,focus:G,blur:U}}function Pa({props:e,isFocused:n,hovering:y,disabled:i,inputValue:C,size:S}){const o=da(),h=ca(),c=je("input-tag"),p=D(),R=D(),F=f(()=>[c.b(),c.is("focused",n.value),c.is("complete",!!(e.modelValue?.length||C.value)),c.is("hovering",y.value),c.is("disabled",i.value),c.m(S.value),o.class]),w=f(()=>[o.style]),j=f(()=>{const x={};for(const E in o)E==="class"||E==="style"||(x[E]=o[E]);return x}),g=f(()=>[c.e("inner"),c.is("draggable",!!e.draggable),c.is("left-space",!e.modelValue?.length&&!h.prefix),c.is("right-space",!e.modelValue?.length&&!h.suffix)]),b=f(()=>!!(e.clearable&&!i.value&&!e.readonly&&(e.modelValue?.length||C.value)&&(n.value||y.value))),T=f(()=>!!(h.suffix||b.value)),I=Fe({innerWidth:0,collapseItemWidth:0}),$=()=>{if(!R.value)return 0;const x=window.getComputedStyle(R.value);return Number.parseFloat(x.gap||"6px")},O=()=>{R.value&&(I.innerWidth=Number.parseFloat(window.getComputedStyle(R.value).width))},V=()=>{p.value&&(I.collapseItemWidth=p.value.getBoundingClientRect().width)},P=f(()=>{if(!e.collapseTags)return{};const x=$(),G=x+11,U=p.value&&e.maxCollapseTags===1?I.innerWidth-I.collapseItemWidth-x-G:I.innerWidth-G;return{maxWidth:`${Math.max(U,0)}px`}});return Ue(R,O),Ue(p,V),{ns:c,containerKls:F,containerStyle:w,inputAttrs:j,innerKls:g,showClear:b,showSuffix:T,tagStyle:P,collapseItemRef:p,innerRef:R}}const Ma=["draggable","onDragstart","onDragover"],Na=["id","minlength","maxlength","disabled","readonly","autocomplete","tabindex","placeholder","autofocus","aria-label"],ka=["textContent"],za=ga({name:"GInputTag",inheritAttrs:!1,__name:"input-tag",props:Sa,emits:Ra,setup(e,{expose:n,emit:y}){const i=e,S=y,{formItem:o}=Ta(),{inputId:h}=xa(i,{formItemContext:o}),{inputRef:c,wrapperRef:p,tagTooltipRef:R,isFocused:F,inputValue:w,size:j,tagSize:g,placeholder:b,closable:T,disabled:I,showTagList:$,collapseTagList:O,handleDragged:V,handlePaste:P,handleInput:x,handleKeydown:E,handleKeyup:G,handleRemoveTag:U,handleClear:H,handleCompositionStart:Y,handleCompositionUpdate:ge,handleCompositionEnd:pe,handleFocus:X,handleBlur:ue,focus:me,blur:Ce}=Fa({props:i,emit:S,formItem:o}),{hovering:t,handleMouseEnter:d,handleMouseLeave:m}=wa(),{calculatorRef:u,inputStyle:M}=va(),{dropIndicatorRef:N,showDropIndicator:k,handleDragStart:Ie,handleDragOver:Ae,handleDragEnd:J}=Ga({wrapperRef:p,handleDragged:V,afterDragged:me}),{ns:v,containerKls:Je,containerStyle:Qe,inputAttrs:Ze,innerKls:_e,showClear:ea,showSuffix:aa,tagStyle:ta,collapseItemRef:na,innerRef:oa}=Pa({props:i,isFocused:F,hovering:t,disabled:I,inputValue:w,size:j}),te=f(()=>!!(o?.shouldShowErrorChild||o?.showMessage==="child"&&o?.validateState==="error")),De=f(()=>o?.validateMessage),ra=f(()=>[v.e("help-text"),{[v.e("help-error")]:te.value}]),sa=f(()=>De.value||i.helpText||o?.$el);return n({focus:me,blur:Ce}),(r,l)=>(B(),W("div",{class:A(a(v).e("container"))},[q("div",{ref_key:"wrapperRef",ref:p,class:A([a(Je),a(v).is("error",te.value||a(o)?.shouldShowError)]),style:Le(a(Qe)),onMouseenter:l[12]||(l[12]=(...s)=>a(d)&&a(d)(...s)),onMouseleave:l[13]||(l[13]=(...s)=>a(m)&&a(m)(...s))},[r.$slots.prefix?(B(),W("div",{key:0,class:A(a(v).e("prefix"))},[oe(r.$slots,"prefix")],2)):re("",!0),q("div",{ref_key:"innerRef",ref:oa,class:A(a(_e))},[(B(!0),W(Me,null,Ne(a($),(s,z)=>(B(),W("div",{key:`${z}-${s}`,class:A([a(v).e("tag-wrapper"),a(T)&&r.draggable?a(v).is("draggable",!0):""]),draggable:a(T)&&r.draggable?!0:void 0,onDragstart:Q=>a(Ie)(Q,z),onDragover:Q=>a(Ae)(Q,z),onDragend:l[0]||(l[0]=(...Q)=>a(J)&&a(J)(...Q)),onDrop:l[1]||(l[1]=ke(()=>{},["stop"]))},[ze(a(Ve),{size:a(g),closable:a(T),type:r.tagType,effect:r.tagEffect,"disable-transitions":"",style:Le(a(ta)),onClose:Q=>a(U)(z)},{default:se(()=>[oe(r.$slots,"tag",{value:s,index:z},()=>[Re(le(s),1)])]),_:2},1032,["size","closable","type","effect","style","onClose"])],42,Ma))),128)),r.collapseTags&&r.modelValue&&r.modelValue.length>r.maxCollapseTags?(B(),Ge(a(ya),{key:0,ref_key:"tagTooltipRef",ref:R,disabled:!r.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:r.effect,placement:"bottom"},{default:se(()=>[q("div",{ref_key:"collapseItemRef",ref:na,class:A(a(v).e("collapse-tag"))},[ze(a(Ve),{closable:!1,size:a(g),type:r.tagType,effect:r.tagEffect,"disable-transitions":""},{default:se(()=>[Re(" + "+le(r.modelValue.length-r.maxCollapseTags),1)]),_:1},8,["size","type","effect"])],2)]),content:se(()=>[q("div",{class:A(a(v).e("input-tag-list"))},[(B(!0),W(Me,null,Ne(a(O),(s,z)=>(B(),Ge(a(Ve),{key:`c-${z}-${s}`,size:a(g),closable:a(T),type:r.tagType,effect:r.tagEffect,"disable-transitions":"",onClose:Q=>a(U)(z+r.maxCollapseTags)},{default:se(()=>[oe(r.$slots,"tag",{value:s,index:z+r.maxCollapseTags},()=>[Re(le(s),1)])]),_:2},1032,["size","closable","type","effect","onClose"]))),128))],2)]),_:3},8,["disabled","effect"])):re("",!0),q("div",{class:A(a(v).e("input-wrapper"))},[$e(q("input",ua({id:a(h),ref_key:"inputRef",ref:c,"onUpdate:modelValue":l[2]||(l[2]=s=>ma(w)?w.value=s:null),type:"text"},a(Ze),{minlength:r.minlength,maxlength:r.maxlength,disabled:a(I),readonly:r.readonly,autocomplete:r.autocomplete,tabindex:r.tabindex,placeholder:a(b),autofocus:r.autofocus,"aria-label":r.ariaLabel,class:a(v).e("input"),style:a(M),onCompositionstart:l[3]||(l[3]=(...s)=>a(Y)&&a(Y)(...s)),onCompositionupdate:l[4]||(l[4]=(...s)=>a(ge)&&a(ge)(...s)),onCompositionend:l[5]||(l[5]=(...s)=>a(pe)&&a(pe)(...s)),onPaste:l[6]||(l[6]=(...s)=>a(P)&&a(P)(...s)),onInput:l[7]||(l[7]=(...s)=>a(x)&&a(x)(...s)),onKeydown:l[8]||(l[8]=(...s)=>a(E)&&a(E)(...s)),onKeyup:l[9]||(l[9]=(...s)=>a(G)&&a(G)(...s)),onFocus:l[10]||(l[10]=(...s)=>a(X)&&a(X)(...s)),onBlur:l[11]||(l[11]=(...s)=>a(ue)&&a(ue)(...s))}),null,16,Na),[[pa,a(w)]]),q("span",{ref_key:"calculatorRef",ref:u,"aria-hidden":"true",class:A(a(v).e("input-calculator")),textContent:le(a(w))},null,10,ka)],2),$e(q("div",{ref_key:"dropIndicatorRef",ref:N,class:A(a(v).e("drop-indicator"))},null,2),[[fa,a(k)]])],2),a(aa)?(B(),W("div",{key:1,class:A(a(v).e("suffix"))},[oe(r.$slots,"suffix"),a(ea)?(B(),Ge(a(ba),{key:0,class:A([a(v).e("icon"),a(v).e("clear")]),onMousedown:ke(()=>{},["prevent"]),onClick:a(H),name:r.clearIcon},null,8,["class","onClick","name"])):re("",!0)],2)):re("",!0)],38),sa.value?(B(),W("div",{key:0,class:A(a(v).e("help"))},[oe(r.$slots,"helpText",{error:De.value,isError:te.value},()=>[(B(),W("p",{key:te.value?"error":"help",class:A(ra.value)},le(te.value?De.value:i.helpText),3))])],2)):re("",!0)],2))}}),L=Ia(za),La="0.3.17",Be={"@vueuse/core":"^13.0.0","lodash-unified":"^1.0.3",vue:"^3.2.0"},{action:Z}=__STORYBOOK_MODULE_ACTIONS__,{useArgs:$a}=__STORYBOOK_MODULE_PREVIEW_API__,gt={title:"Form/InputTag",component:L,parameters:{docs:{description:{component:`
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
${Da(Be)}

\`\`\`bash
# Dependencias global66
yarn add ${We(Be)}

# Dependencias externas
yarn add ${We(Be,!0)}
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
`}}},argTypes:{modelValue:{control:"object",description:"Listado de tags (v-model)",table:{type:{summary:"string[]"},category:"Datos"}},max:{control:"number",description:"Número máximo de tags permitidos",table:{category:"Comportamiento"}},tagType:{control:{type:"select"},options:["success","info","warning","error","grey"],description:"Tipo de tag (color)",table:{category:"Apariencia"}},tagEffect:{control:{type:"select"},options:["light","dark"],description:"Efecto visual del tag",table:{category:"Apariencia"}},effect:{control:{type:"select"},options:["light","dark"],description:"Tema del tooltip de overflow",table:{category:"Apariencia"}},trigger:{control:{type:"select"},options:["Enter","Space"],description:"Tecla que confirma el tag",table:{category:"Comportamiento"}},draggable:{control:"boolean",description:"Permite reordenar los tags arrastrándolos",table:{category:"Comportamiento"}},delimiter:{control:"text",description:'Carácter o expresión que separa tags (por ejemplo, ",")',table:{category:"Comportamiento"}},size:{control:{type:"select"},options:["large","default","small"],description:"Tamaño del input",table:{category:"Apariencia"}},clearable:{control:"boolean",description:"Muestra el botón para limpiar",table:{category:"Comportamiento"}},clearIcon:{control:"text",description:'Icono de clear (IconString, p. ej. "regular circle-xmark")',table:{category:"Apariencia"}},helpText:{control:"text",description:"Texto de ayuda mostrado debajo del input tag",table:{category:"Contenido"}},disabled:{control:"boolean",description:"Deshabilita el input y la gestión de tags",table:{category:"Estado"}},readonly:{control:"boolean",description:"Sólo lectura",table:{category:"Estado"}},validateEvent:{control:"boolean",description:"Emite eventos de validación hacia GFormItem",table:{category:"Form"}},collapseTags:{control:"boolean",description:'Colapsa los tags en un indicador "+N"',table:{category:"Apariencia"}},collapseTagsTooltip:{control:"boolean",description:"Muestra tooltip con los tags colapsados",table:{category:"Apariencia"}},maxCollapseTags:{control:"number",description:"Cantidad de tags visibles antes de colapsar",table:{category:"Apariencia"}},saveOnBlur:{control:"boolean",description:"Guarda el contenido del input al perder el foco",table:{category:"Comportamiento"}},placeholder:{control:"text",description:"Placeholder del input",table:{category:"Contenido"}},"onUpdate:modelValue":{description:"Se emite al actualizar el listado de tags",table:{category:"Eventos"}},onChange:{description:"Se emite cuando cambia el listado de tags",table:{category:"Eventos"}},onAddTag:{description:"Se emite al añadir un nuevo tag",table:{category:"Eventos"}},onRemoveTag:{description:"Se emite al eliminar un tag",table:{category:"Eventos"}},onDragTag:{description:"Se emite al reordenar un tag",table:{category:"Eventos"}},onClear:{description:"Se emite al limpiar todos los tags",table:{category:"Eventos"}}},args:{modelValue:["vue","typescript"],placeholder:"Escribe y presiona Enter",tagType:"info",tagEffect:"light",effect:"light",trigger:"Enter",draggable:!1,delimiter:"",size:"default",clearable:!0,clearIcon:"regular circle-xmark",disabled:!1,readonly:!1,validateEvent:!0,collapseTags:!1,collapseTagsTooltip:!1,maxCollapseTags:1,saveOnBlur:!0,helpText:"Escribe un tag y presiona Enter"}},fe={name:"Básico",parameters:{docs:{description:{story:"Uso básico. v-model con un array de strings. Pulsa Enter para añadir un tag."}}},render:e=>{const[,n]=$a();return{components:{GInputTag:L,GConfigProvider:K},setup(){function y(i){n({modelValue:i})}return{args:e,onUpdateModelValue:y,onAdd:Z("add-tag"),onRemove:Z("remove-tag")}},template:`
        <g-config-provider>
          <g-input-tag
            v-bind="args"
            @update:model-value="onUpdateModelValue"
            @add-tag="onAdd"
            @remove-tag="onRemove"
          />
          <pre style="margin-top: 12px; font-size: 12px;">{{ args.modelValue }}</pre>
        </g-config-provider>
      `}}},ve={name:"Límite y duplicados",parameters:{docs:{description:{story:"Define un máximo de tags con la prop `max`. Los tags duplicados se bloquean automáticamente al añadir con Enter."}}},render:()=>({components:{GInputTag:L,GConfigProvider:K},setup(){return{tags:D(["vue","ts"]),onAdd:Z("add-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          :max="3"
          placeholder="Sólo 3 tags permitidos"
          @add-tag="onAdd"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},ye={name:"Delimitador",parameters:{docs:{description:{story:"Con la prop `delimiter` puedes separar múltiples tags en una sola entrada (por ejemplo, con coma o Enter)."}}},render:()=>({components:{GInputTag:L,GConfigProvider:K},setup(){return{tags:D(["vue"]),onAdd:Z("add-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          delimiter=","
          placeholder="Escribe valores separados por coma"
          @add-tag="onAdd"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},be={name:"Tags colapsados",parameters:{docs:{description:{story:'Cuando hay muchos tags, `collapseTags` muestra los primeros y un indicador "+N" con tooltip para ver el resto.'}}},render:()=>({components:{GInputTag:L,GConfigProvider:K},setup(){return{tags:D(["vue","ts","css","html","js","scss","tailwind"])}},template:`
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
    `})},he={name:"Reordenable (drag & drop)",parameters:{docs:{description:{story:"Habilita `draggable` para permitir reordenar los tags arrastrándolos."}}},render:()=>({components:{GInputTag:L,GConfigProvider:K},setup(){return{tags:D(["primero","segundo","tercero","cuarto"]),onDrag:Z("drag-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          draggable
          placeholder="Arrastra los tags"
          @drag-tag="onDrag"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},Te={name:"Disabled y Readonly",parameters:{docs:{description:{story:"En estado `disabled` o `readonly` no se pueden añadir ni eliminar tags. El botón de clear tampoco está disponible."}}},render:()=>({components:{GInputTag:L,GConfigProvider:K},setup(){const e=D(["vue","ts"]),n=D(["vue","ts"]);return{tagsA:e,tagsB:n}},template:`
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
    `})},xe={name:"Integración con GForm",parameters:{docs:{description:{story:"Cuando el componente está dentro de un `GFormItem` con reglas, la validación se dispara al cambiar (change) y al perder el foco (blur)."}}},render:()=>({components:{GInputTag:L,GConfigProvider:K,GForm:Ye,GFormItem:He,GButton:Xe},setup(){const e=D(),n=Fe({tags:[]});return{formRef:e,model:n,submit:async()=>{const i=await e.value?.validate().catch(()=>!1);Z("submit")(i?"valid":"invalid")}}},template:`
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
    `})},Ee={name:"Reglas desde GForm padre",parameters:{docs:{description:{story:"Ejemplo comparativo con `GInput` y `GInputTag` usando reglas definidas en el `GForm` padre. `GInputTag` requiere reglas de tipo `array` para validar correctamente tags vacíos o incompletos."}}},render:()=>({components:{GInputTag:L,GInput:Aa,GConfigProvider:K,GForm:Ye,GFormItem:He,GButton:Xe},setup(){const e=D(),n=Fe({name:"",tags:[]});return{formRef:e,model:n,rules:{name:[{required:!0,message:"Ingresa un nombre",trigger:"change"},{min:3,message:"El nombre debe tener al menos 3 caracteres",trigger:"change"}],tags:[{type:"array",required:!0,message:"Agrega al menos un tag",trigger:"change"},{type:"array",min:2,message:"Necesitas al menos 2 tags",trigger:"change"}]},submit:async()=>{const C=await e.value?.validate().catch(()=>!1);Z("parent-rules-submit")(C?"valid":"invalid")}}},template:`
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
    `})},pt=["Primary","LimitsAndDuplicates","Delimiter","CollapsedTags","Draggable","DisabledAndReadonly","FormValidation","ParentFormRules"];fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Uso básico. v-model con un array de strings. Pulsa Enter para añadir un tag.'
      }
    }
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return {
      components: {
        GInputTag,
        GConfigProvider
      },
      setup() {
        function onUpdateModelValue(tags: string[]) {
          updateArgs({
            modelValue: tags
          });
        }
        return {
          args,
          onUpdateModelValue,
          onAdd: action('add-tag'),
          onRemove: action('remove-tag')
        };
      },
      template: \`
        <g-config-provider>
          <g-input-tag
            v-bind="args"
            @update:model-value="onUpdateModelValue"
            @add-tag="onAdd"
            @remove-tag="onRemove"
          />
          <pre style="margin-top: 12px; font-size: 12px;">{{ args.modelValue }}</pre>
        </g-config-provider>
      \`
    };
  }
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
}`,...xe.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
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
}`,...Ee.parameters?.docs?.source}}};export{be as CollapsedTags,ye as Delimiter,Te as DisabledAndReadonly,he as Draggable,xe as FormValidation,ve as LimitsAndDuplicates,Ee as ParentFormRules,fe as Primary,pt as __namedExportsOrder,gt as default};
