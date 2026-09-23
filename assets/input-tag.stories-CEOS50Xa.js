import{l as la,p as ne,L as _,a4 as Se,G as je,r as E,c as f,az as Pe,s as ia,a2 as da,a3 as ca,E as Ve,d as ga,o as F,y as W,f as U,g as A,u as a,i as oe,j as re,F as Ne,A as ke,R as ze,b as Me,w as se,B as Re,z as le,n as Le,a as Ge,e as $e,ad as pa,m as ma,a6 as ua,v as fa}from"./iframe-Dct5CHxr.js";import{f as we,u as Ke}from"./useEmptyValues-BnYvcW4O.js";import{u as va}from"./useCalcInputWidth-BGo-O_zj.js";import{G as qe,H as Be}from"./index-pWeg55FS.js";import{n as ya}from"./index-BpP4et0s.js";import{R as ba}from"./index-1T7U7QlS.js";import{a as ce,M as ha,L as Ta,z as xa}from"./index-CZoNQBHQ.js";import{E as ee,I as ie,C as ae,U as de}from"./event.constant-LtAI3-H4.js";import{a as Ea,b as Ca}from"./useAttrs-BZi71rd1.js";import{a as Oe}from"./index-DWhPhD7W.js";import{w as Ia}from"./install.util-cBz1HN_T.js";import{G as Da}from"./index-CiBki8_N.js";import{G as j}from"./ConfigProvider-7dg58IlU.js";import{G as He,a as Xe}from"./index-DOcpSnVP.js";import{G as Ye}from"./index-BeqF1NXI.js";import{a as Aa,b as We}from"./documentation-stories-DmJzCMmf.js";import"./preload-helper-Dch09mLN.js";import"./index-DxlLUiSm.js";import"./useId-MLHLvdkG.js";import"./index-BgdLHs-h.js";import"./index-pMiYc9r3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CRx4dHSJ.js";import"./index-GU5Cqqg3.js";const Sa=la({helpText:{type:String,default:void 0},modelValue:{type:ne(Array),default:()=>[]},max:Number,tagType:{...qe.type,default:"info"},tagEffect:{...qe.effect,default:"light"},effect:{type:ne(String),default:"light"},trigger:{type:ne(String),default:ee.enter},draggable:Boolean,delimiter:{type:ne([String,RegExp]),default:""},size:{type:String,values:["large","default","small"],default:"default"},clearable:Boolean,clearIcon:{type:ne(String),default:"regular circle-xmark"},disabled:{type:Boolean,default:void 0},validateEvent:{type:Boolean,default:!0},readonly:Boolean,autofocus:Boolean,id:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},placeholder:String,autocomplete:{type:String,default:"off"},saveOnBlur:{type:Boolean,default:!0},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},ariaLabel:String}),Ra={[de]:e=>Se(e)||ce(e)||_(e),[ae]:e=>Se(e)||ce(e)||_(e),[ie]:e=>_(e),"add-tag":e=>_(e)||Se(e),"remove-tag":(e,n)=>_(e)&&we(n),"drag-tag":(e,n,C)=>we(e)&&we(n)&&_(C),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0};function Ga({wrapperRef:e,handleDragged:n,afterDragged:C}){const d=Ke("input-tag"),I=je(),S=E(!1);let o,b,c,p;function R(g){return`.${d.e("inner")} > .${d.e("tag-wrapper")}:nth-child(${g+1})`}function V(g,y){o=y,b=e.value.querySelector(R(y)),b&&(b.style.opacity="0.5"),g.dataTransfer&&(g.dataTransfer.effectAllowed="move")}function w(g,y){if(c=y,g.preventDefault(),g.dataTransfer&&(g.dataTransfer.dropEffect="move"),ce(o)||o===y){S.value=!1;return}const h=e.value.querySelector(R(y)).getBoundingClientRect(),D=o+1!==y,$=o-1!==y,q=g.clientX-h.left,B=D?$?.5:1:-1,P=$?D?.5:0:1;q<=h.width*B?p="before":q>h.width*P?p="after":p=void 0;const T=e.value.querySelector(`.${d.e("inner")}`),x=T.getBoundingClientRect(),G=Number.parseFloat(window.getComputedStyle(T).gap||"6")/2,O=h.top-x.top;let H=-9999;if(p==="before")H=Math.max(h.left-x.left-G,Math.floor(-G/2));else if(p==="after"){const X=h.right-x.left;H=X+(x.width===X?Math.floor(G/2):G)}I.value&&(I.value.style.top=`${O}px`,I.value.style.left=`${H}px`),S.value=!!p}function K(g){g.preventDefault(),b&&(b.style.opacity=""),p&&!ce(o)&&!ce(c)&&o!==c&&n(o,c,p),S.value=!1,o=void 0,b=null,c=void 0,p=void 0,C?.()}return{dropIndicatorRef:I,showDropIndicator:S,handleDragStart:V,handleDragOver:w,handleDragEnd:K}}function wa(){const e=E(!1);return{hovering:e,handleMouseEnter:()=>{e.value=!0},handleMouseLeave:()=>{e.value=!1}}}const Ba=e=>Array.isArray(e)?e:[e],Ue=e=>e.code||e.key,Fa=()=>typeof navigator>"u"?!1:/android/i.test(navigator.userAgent);function Va({props:e,emit:n,formItem:C}){const d=ha(),I=f(()=>e.size??"default"),S=je(),o=E(""),b=E(),c=f(()=>I.value==="small"?"xs":I.value==="large"?"md":"sm"),p=f(()=>e.modelValue?.length?void 0:e.placeholder),R=f(()=>!(e.readonly||d.value)),V=f(()=>{if(e.max===void 0||e.max===null)return!1;const t=e.max;return(e.modelValue?.length??0)>=t}),w=f(()=>e.collapseTags?e.modelValue?.slice(0,e.maxCollapseTags):e.modelValue),K=f(()=>e.collapseTags?e.modelValue?.slice(e.maxCollapseTags):[]),g=t=>{if(e.readonly||d.value)return;const i=e.modelValue??[],u=Ba(t),m=[];for(const z of u)!i.includes(z)&&!m.includes(z)&&m.push(z);if(e.max!==void 0&&e.max!==null){const z=Math.max(e.max-i.length,0);m.splice(z)}if(!m.length){o.value="";return}const N=[...i,...m],k=m.length===1?m[0]:m;n(de,N),n(ae,N),n("add-tag",k),o.value=""},y=t=>{const i=t.split(e.delimiter),u=i.length>1?i.map(m=>m.trim()).filter(Boolean):[];return u.length===1?u[0]:u},h=t=>{const i=t.clipboardData?.getData("text");if(e.readonly||d.value||V.value||!e.delimiter||!i)return;const u=t.target,{selectionStart:m,selectionEnd:N,value:k}=u,z=m??0,Ie=N??0,De=k.slice(0,z)+i+k.slice(Ie),J=y(De);(Array.isArray(J)?J.length:J)&&(g(J),n(ie,o.value),t.preventDefault())},D=()=>{if(V.value){o.value="",n(ie,"");return}if(!Y.value){if(e.delimiter&&o.value){const t=y(o.value),i=Array.isArray(t)?t:t?[t]:[];i.length&&g(i)}n(ie,o.value)}},$=t=>{if(Y.value)return;switch(Ue(t)){case e.trigger:t.preventDefault(),t.stopPropagation(),B();break;case ee.numpadEnter:e.trigger===ee.enter&&(t.preventDefault(),t.stopPropagation(),B());break;case ee.backspace:if(e.readonly||d.value)return;!o.value&&e.modelValue?.length&&(t.preventDefault(),t.stopPropagation(),P(e.modelValue.length-1));break}},q=t=>{if(Y.value||!Fa())return;switch(Ue(t)){case ee.space:e.trigger===ee.space&&(t.preventDefault(),t.stopPropagation(),B());break}},B=()=>{if(e.readonly||d.value)return;const t=o.value?.trim();!t||V.value||g(t)},P=t=>{if(e.readonly||d.value)return;const i=(e.modelValue??[]).slice(),[u]=i.splice(t,1);n(de,i),n(ae,i),n("remove-tag",u,t)},T=()=>{if(e.readonly||d.value)return;const t=[];o.value="",n(de,t),n(ae,t),n(ie,""),n("clear")},x=(t,i,u)=>{if(e.readonly||d.value)return;const m=(e.modelValue??[]).slice(),[N]=m.splice(t,1),k=i>t&&u==="before"?-1:i<t&&u==="after"?1:0;m.splice(i+k,0,N),n(de,m),n(ae,m),n("drag-tag",t,i+k,N)},G=()=>{S.value?.focus()},O=()=>{S.value?.blur()},H=t=>{n("focus",t)},X=t=>{n("blur",t)},{wrapperRef:ge,isFocused:pe}=Ea(S,{beforeBlur(t){const u=b.value?.isFocusInsideContent;return typeof u=="function"?!!u(t):!1},afterBlur(){e.saveOnBlur?B():o.value="",e.validateEvent&&C?.validate?.("blur").catch(Pe)}}),{isComposing:Y,handleCompositionStart:me,handleCompositionUpdate:ue,handleCompositionEnd:Ce}=Ca({afterComposition:D});return ia(()=>e.modelValue,()=>{e.validateEvent&&C?.validate?.(ae).catch(Pe)}),{inputRef:S,wrapperRef:ge,tagTooltipRef:b,isFocused:pe,isComposing:Y,inputValue:o,size:I,tagSize:c,placeholder:p,closable:R,disabled:d,inputLimit:V,showTagList:w,collapseTagList:K,handleDragged:x,handlePaste:h,handleInput:D,handleKeydown:$,handleKeyup:q,handleAddTag:B,handleRemoveTag:P,handleClear:T,handleCompositionStart:me,handleCompositionUpdate:ue,handleCompositionEnd:Ce,handleFocus:H,handleBlur:X,focus:G,blur:O}}function Pa({props:e,isFocused:n,hovering:C,disabled:d,inputValue:I,size:S}){const o=da(),b=ca(),c=Ke("input-tag"),p=E(),R=E(),V=f(()=>[c.b(),c.is("focused",n.value),c.is("complete",!!(e.modelValue?.length||I.value)),c.is("hovering",C.value),c.is("disabled",d.value),c.m(S.value),o.class]),w=f(()=>[o.style]),K=f(()=>{const T={};for(const x in o)x==="class"||x==="style"||(T[x]=o[x]);return T}),g=f(()=>[c.e("inner"),c.is("draggable",!!e.draggable),c.is("left-space",!e.modelValue?.length&&!b.prefix),c.is("right-space",!e.modelValue?.length&&!b.suffix)]),y=f(()=>!!(e.clearable&&!d.value&&!e.readonly&&(e.modelValue?.length||I.value)&&(n.value||C.value))),h=f(()=>!!(b.suffix||y.value)),D=Ve({innerWidth:0,collapseItemWidth:0}),$=()=>{if(!R.value)return 0;const T=window.getComputedStyle(R.value);return Number.parseFloat(T.gap||"6px")},q=()=>{R.value&&(D.innerWidth=Number.parseFloat(window.getComputedStyle(R.value).width))},B=()=>{p.value&&(D.collapseItemWidth=p.value.getBoundingClientRect().width)},P=f(()=>{if(!e.collapseTags)return{};const T=$(),G=T+11,O=p.value&&e.maxCollapseTags===1?D.innerWidth-D.collapseItemWidth-T-G:D.innerWidth-G;return{maxWidth:`${Math.max(O,0)}px`}});return Oe(R,q),Oe(p,B),{ns:c,containerKls:V,containerStyle:w,inputAttrs:K,innerKls:g,showClear:y,showSuffix:h,tagStyle:P,collapseItemRef:p,innerRef:R}}const Na=["draggable","onDragstart","onDragover"],ka=["id","minlength","maxlength","disabled","readonly","autocomplete","tabindex","placeholder","autofocus","aria-label"],za=["textContent"],Ma=ga({name:"GInputTag",inheritAttrs:!1,__name:"input-tag",props:Sa,emits:Ra,setup(e,{expose:n,emit:C}){const d=e,S=C,{formItem:o}=Ta(),{inputId:b}=xa(d,{formItemContext:o}),{inputRef:c,wrapperRef:p,tagTooltipRef:R,isFocused:V,inputValue:w,size:K,tagSize:g,placeholder:y,closable:h,disabled:D,showTagList:$,collapseTagList:q,handleDragged:B,handlePaste:P,handleInput:T,handleKeydown:x,handleKeyup:G,handleRemoveTag:O,handleClear:H,handleCompositionStart:X,handleCompositionUpdate:ge,handleCompositionEnd:pe,handleFocus:Y,handleBlur:me,focus:ue,blur:Ce}=Va({props:d,emit:S,formItem:o}),{hovering:t,handleMouseEnter:i,handleMouseLeave:u}=wa(),{calculatorRef:m,inputStyle:N}=va(),{dropIndicatorRef:k,showDropIndicator:z,handleDragStart:Ie,handleDragOver:De,handleDragEnd:J}=Ga({wrapperRef:p,handleDragged:B,afterDragged:ue}),{ns:v,containerKls:Je,containerStyle:Qe,inputAttrs:Ze,innerKls:_e,showClear:ea,showSuffix:aa,tagStyle:ta,collapseItemRef:na,innerRef:oa}=Pa({props:d,isFocused:V,hovering:t,disabled:D,inputValue:w,size:K}),te=f(()=>!!(o?.shouldShowErrorChild||o?.showMessage==="child"&&o?.validateState==="error")),Ae=f(()=>o?.validateMessage),ra=f(()=>[v.e("help-text"),{[v.e("help-error")]:te.value}]),sa=f(()=>Ae.value||d.helpText||o?.$el);return n({focus:ue,blur:Ce}),(r,l)=>(F(),W("div",{class:A(a(v).e("container"))},[U("div",{ref_key:"wrapperRef",ref:p,class:A([a(Je),a(v).is("error",te.value||a(o)?.shouldShowError)]),style:Le(a(Qe)),onMouseenter:l[12]||(l[12]=(...s)=>a(i)&&a(i)(...s)),onMouseleave:l[13]||(l[13]=(...s)=>a(u)&&a(u)(...s))},[r.$slots.prefix?(F(),W("div",{key:0,class:A(a(v).e("prefix"))},[oe(r.$slots,"prefix")],2)):re("",!0),U("div",{ref_key:"innerRef",ref:oa,class:A(a(_e))},[(F(!0),W(Ne,null,ke(a($),(s,M)=>(F(),W("div",{key:`${M}-${s}`,class:A([a(v).e("tag-wrapper"),a(h)&&r.draggable?a(v).is("draggable",!0):""]),draggable:a(h)&&r.draggable?!0:void 0,onDragstart:Q=>a(Ie)(Q,M),onDragover:Q=>a(De)(Q,M),onDragend:l[0]||(l[0]=(...Q)=>a(J)&&a(J)(...Q)),onDrop:l[1]||(l[1]=ze(()=>{},["stop"]))},[Me(a(Be),{size:a(g),closable:a(h),type:r.tagType,effect:r.tagEffect,"disable-transitions":"",style:Le(a(ta)),onClose:Q=>a(O)(M)},{default:se(()=>[oe(r.$slots,"tag",{value:s,index:M},()=>[Re(le(s),1)])]),_:2},1032,["size","closable","type","effect","style","onClose"])],42,Na))),128)),r.collapseTags&&r.modelValue&&r.modelValue.length>r.maxCollapseTags?(F(),Ge(a(ya),{key:0,ref_key:"tagTooltipRef",ref:R,disabled:!r.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:r.effect,placement:"bottom"},{default:se(()=>[U("div",{ref_key:"collapseItemRef",ref:na,class:A(a(v).e("collapse-tag"))},[Me(a(Be),{closable:!1,size:a(g),type:r.tagType,effect:r.tagEffect,"disable-transitions":""},{default:se(()=>[Re(" + "+le(r.modelValue.length-r.maxCollapseTags),1)]),_:1},8,["size","type","effect"])],2)]),content:se(()=>[U("div",{class:A(a(v).e("input-tag-list"))},[(F(!0),W(Ne,null,ke(a(q),(s,M)=>(F(),Ge(a(Be),{key:`c-${M}-${s}`,size:a(g),closable:a(h),type:r.tagType,effect:r.tagEffect,"disable-transitions":"",onClose:Q=>a(O)(M+r.maxCollapseTags)},{default:se(()=>[oe(r.$slots,"tag",{value:s,index:M+r.maxCollapseTags},()=>[Re(le(s),1)])]),_:2},1032,["size","closable","type","effect","onClose"]))),128))],2)]),_:3},8,["disabled","effect"])):re("",!0),U("div",{class:A(a(v).e("input-wrapper"))},[$e(U("input",ma({id:a(b),ref_key:"inputRef",ref:c,"onUpdate:modelValue":l[2]||(l[2]=s=>ua(w)?w.value=s:null),type:"text"},a(Ze),{minlength:r.minlength,maxlength:r.maxlength,disabled:a(D),readonly:r.readonly,autocomplete:r.autocomplete,tabindex:r.tabindex,placeholder:a(y),autofocus:r.autofocus,"aria-label":r.ariaLabel,class:a(v).e("input"),style:a(N),onCompositionstart:l[3]||(l[3]=(...s)=>a(X)&&a(X)(...s)),onCompositionupdate:l[4]||(l[4]=(...s)=>a(ge)&&a(ge)(...s)),onCompositionend:l[5]||(l[5]=(...s)=>a(pe)&&a(pe)(...s)),onPaste:l[6]||(l[6]=(...s)=>a(P)&&a(P)(...s)),onInput:l[7]||(l[7]=(...s)=>a(T)&&a(T)(...s)),onKeydown:l[8]||(l[8]=(...s)=>a(x)&&a(x)(...s)),onKeyup:l[9]||(l[9]=(...s)=>a(G)&&a(G)(...s)),onFocus:l[10]||(l[10]=(...s)=>a(Y)&&a(Y)(...s)),onBlur:l[11]||(l[11]=(...s)=>a(me)&&a(me)(...s))}),null,16,ka),[[pa,a(w)]]),U("span",{ref_key:"calculatorRef",ref:m,"aria-hidden":"true",class:A(a(v).e("input-calculator")),textContent:le(a(w))},null,10,za)],2),$e(U("div",{ref_key:"dropIndicatorRef",ref:k,class:A(a(v).e("drop-indicator"))},null,2),[[fa,a(z)]])],2),a(aa)?(F(),W("div",{key:1,class:A(a(v).e("suffix"))},[oe(r.$slots,"suffix"),a(ea)?(F(),Ge(a(ba),{key:0,class:A([a(v).e("icon"),a(v).e("clear")]),onMousedown:ze(()=>{},["prevent"]),onClick:a(H),name:r.clearIcon},null,8,["class","onClick","name"])):re("",!0)],2)):re("",!0)],38),sa.value?(F(),W("div",{key:0,class:A(a(v).e("help"))},[oe(r.$slots,"helpText",{error:Ae.value,isError:te.value},()=>[(F(),W("p",{key:te.value?"error":"help",class:A(ra.value)},le(te.value?Ae.value:d.helpText),3))])],2)):re("",!0)],2))}}),L=Ia(Ma),La="0.3.17",Fe={"@vueuse/core":"^13.0.0","lodash-unified":"^1.0.3",vue:"^3.2.0"},{action:Z}=__STORYBOOK_MODULE_ACTIONS__,ct={title:"Form/InputTag",component:L,parameters:{docs:{description:{component:`
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
${Aa(Fe)}

\`\`\`bash
# Dependencias global66
yarn add ${We(Fe)}

# Dependencias externas
yarn add ${We(Fe,!0)}
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
`}}},argTypes:{modelValue:{control:"object",description:"Listado de tags (v-model)",table:{type:{summary:"string[]"},category:"Datos"}},max:{control:"number",description:"Número máximo de tags permitidos",table:{category:"Comportamiento"}},tagType:{control:{type:"select"},options:["success","info","warning","error","grey"],description:"Tipo de tag (color)",table:{category:"Apariencia"}},tagEffect:{control:{type:"select"},options:["light","dark"],description:"Efecto visual del tag",table:{category:"Apariencia"}},effect:{control:{type:"select"},options:["light","dark"],description:"Tema del tooltip de overflow",table:{category:"Apariencia"}},trigger:{control:{type:"select"},options:["Enter","Space"],description:"Tecla que confirma el tag",table:{category:"Comportamiento"}},draggable:{control:"boolean",description:"Permite reordenar los tags arrastrándolos",table:{category:"Comportamiento"}},delimiter:{control:"text",description:'Carácter o expresión que separa tags (por ejemplo, ",")',table:{category:"Comportamiento"}},size:{control:{type:"select"},options:["large","default","small"],description:"Tamaño del input",table:{category:"Apariencia"}},clearable:{control:"boolean",description:"Muestra el botón para limpiar",table:{category:"Comportamiento"}},clearIcon:{control:"text",description:'Icono de clear (IconString, p. ej. "regular circle-xmark")',table:{category:"Apariencia"}},helpText:{control:"text",description:"Texto de ayuda mostrado debajo del input tag",table:{category:"Contenido"}},disabled:{control:"boolean",description:"Deshabilita el input y la gestión de tags",table:{category:"Estado"}},readonly:{control:"boolean",description:"Sólo lectura",table:{category:"Estado"}},validateEvent:{control:"boolean",description:"Emite eventos de validación hacia GFormItem",table:{category:"Form"}},collapseTags:{control:"boolean",description:'Colapsa los tags en un indicador "+N"',table:{category:"Apariencia"}},collapseTagsTooltip:{control:"boolean",description:"Muestra tooltip con los tags colapsados",table:{category:"Apariencia"}},maxCollapseTags:{control:"number",description:"Cantidad de tags visibles antes de colapsar",table:{category:"Apariencia"}},saveOnBlur:{control:"boolean",description:"Guarda el contenido del input al perder el foco",table:{category:"Comportamiento"}},placeholder:{control:"text",description:"Placeholder del input",table:{category:"Contenido"}},"onUpdate:modelValue":{description:"Se emite al actualizar el listado de tags",table:{category:"Eventos"}},onChange:{description:"Se emite cuando cambia el listado de tags",table:{category:"Eventos"}},onAddTag:{description:"Se emite al añadir un nuevo tag",table:{category:"Eventos"}},onRemoveTag:{description:"Se emite al eliminar un tag",table:{category:"Eventos"}},onDragTag:{description:"Se emite al reordenar un tag",table:{category:"Eventos"}},onClear:{description:"Se emite al limpiar todos los tags",table:{category:"Eventos"}}},args:{modelValue:["vue","typescript"],placeholder:"Escribe y presiona Enter",tagType:"info",tagEffect:"light",effect:"light",trigger:"Enter",draggable:!1,delimiter:"",size:"default",clearable:!0,clearIcon:"regular circle-xmark",disabled:!1,readonly:!1,validateEvent:!0,collapseTags:!1,collapseTagsTooltip:!1,maxCollapseTags:1,saveOnBlur:!0,helpText:"Escribe un tag y presiona Enter"}},fe={name:"Básico",parameters:{docs:{description:{story:"Uso básico. v-model con un array de strings. Pulsa Enter para añadir un tag."}}},render:e=>({components:{GInputTag:L,GConfigProvider:j},setup(){const n=E(["vue","ts"]);return{args:e,tags:n,onAdd:Z("add-tag"),onRemove:Z("remove-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          v-bind="args"
          @add-tag="onAdd"
          @remove-tag="onRemove"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},ve={name:"Límite y duplicados",parameters:{docs:{description:{story:"Define un máximo de tags con la prop `max`. Los tags duplicados se bloquean automáticamente al añadir con Enter."}}},render:()=>({components:{GInputTag:L,GConfigProvider:j},setup(){return{tags:E(["vue","ts"]),onAdd:Z("add-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          :max="3"
          placeholder="Sólo 3 tags permitidos"
          @add-tag="onAdd"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},ye={name:"Delimitador",parameters:{docs:{description:{story:"Con la prop `delimiter` puedes separar múltiples tags en una sola entrada (por ejemplo, con coma o Enter)."}}},render:()=>({components:{GInputTag:L,GConfigProvider:j},setup(){return{tags:E(["vue"]),onAdd:Z("add-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          delimiter=","
          placeholder="Escribe valores separados por coma"
          @add-tag="onAdd"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},be={name:"Tags colapsados",parameters:{docs:{description:{story:'Cuando hay muchos tags, `collapseTags` muestra los primeros y un indicador "+N" con tooltip para ver el resto.'}}},render:()=>({components:{GInputTag:L,GConfigProvider:j},setup(){return{tags:E(["vue","ts","css","html","js","scss","tailwind"])}},template:`
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
    `})},he={name:"Reordenable (drag & drop)",parameters:{docs:{description:{story:"Habilita `draggable` para permitir reordenar los tags arrastrándolos."}}},render:()=>({components:{GInputTag:L,GConfigProvider:j},setup(){return{tags:E(["primero","segundo","tercero","cuarto"]),onDrag:Z("drag-tag")}},template:`
      <g-config-provider>
        <g-input-tag
          v-model="tags"
          draggable
          placeholder="Arrastra los tags"
          @drag-tag="onDrag"
        />
        <pre style="margin-top: 12px; font-size: 12px;">{{ tags }}</pre>
      </g-config-provider>
    `})},Te={name:"Disabled y Readonly",parameters:{docs:{description:{story:"En estado `disabled` o `readonly` no se pueden añadir ni eliminar tags. El botón de clear tampoco está disponible."}}},render:()=>({components:{GInputTag:L,GConfigProvider:j},setup(){const e=E(["vue","ts"]),n=E(["vue","ts"]);return{tagsA:e,tagsB:n}},template:`
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
    `})},xe={name:"Integración con GForm",parameters:{docs:{description:{story:"Cuando el componente está dentro de un `GFormItem` con reglas, la validación se dispara al cambiar (change) y al perder el foco (blur)."}}},render:()=>({components:{GInputTag:L,GConfigProvider:j,GForm:Xe,GFormItem:He,GButton:Ye},setup(){const e=E(),n=Ve({tags:[]});return{formRef:e,model:n,submit:async()=>{const d=await e.value?.validate().catch(()=>!1);Z("submit")(d?"valid":"invalid")}}},template:`
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
    `})},Ee={name:"Reglas desde GForm padre",parameters:{docs:{description:{story:"Ejemplo comparativo con `GInput` y `GInputTag` usando reglas definidas en el `GForm` padre. `GInputTag` requiere reglas de tipo `array` para validar correctamente tags vacíos o incompletos."}}},render:()=>({components:{GInputTag:L,GInput:Da,GConfigProvider:j,GForm:Xe,GFormItem:He,GButton:Ye},setup(){const e=E(),n=Ve({name:"",tags:[]});return{formRef:e,model:n,rules:{name:[{required:!0,message:"Ingresa un nombre",trigger:"change"},{min:3,message:"El nombre debe tener al menos 3 caracteres",trigger:"change"}],tags:[{type:"array",required:!0,message:"Agrega al menos un tag",trigger:"change"},{type:"array",min:2,message:"Necesitas al menos 2 tags",trigger:"change"}]},submit:async()=>{const I=await e.value?.validate().catch(()=>!1);Z("parent-rules-submit")(I?"valid":"invalid")}}},template:`
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
    `})},gt=["Primary","LimitsAndDuplicates","Delimiter","CollapsedTags","Draggable","DisabledAndReadonly","FormValidation","ParentFormRules"];fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
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
}`,...Ee.parameters?.docs?.source}}};export{be as CollapsedTags,ye as Delimiter,Te as DisabledAndReadonly,he as Draggable,xe as FormValidation,ve as LimitsAndDuplicates,Ee as ParentFormRules,fe as Primary,gt as __namedExportsOrder,ct as default};
