import{f as I}from"./index-imBTNTrX.js";import{d as C,r as w,c as m,k as D,G as P,K as E,A as z,u as r,W as R,m as k,J as M,n as V,D as x,X as F,l as S,F as $,E as A,M as G}from"./vue.esm-bundler-ENg2wqJc.js";import{l as T,o as j,k as K}from"./ConfigProvider-C0wXp6tN.js";import{d as h}from"./error-Cq9Fpw4b.js";import{_ as L}from"./Icon-FXFhsub2.js";import{g as O}from"./index-7iQn0g8-.js";import{u as W}from"./use-form-item-DZ9Jam3e.js";import{generateIconOptions as X}from"./icon-font.stories-u5VhJLLZ.js";import{a as N}from"./index-CM9FzEWq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index.es-B5q-6M42.js";import"./index-DDVpgGx_.js";import"./index-DPhcbnwv.js";import"./index-B9rbiiWl.js";import"./castArray-BELTYCwk.js";import"./_initCloneObject-CdrlhK9a.js";import"./constants-Dnj8X3EN.js";import"./index-GIS5GJip.js";import"./index-BvcaQ_JV.js";import"./event-BB_Ol6Sd.js";import"./index-vXs6_7_J.js";import"./use-form-common-props-BOb29c3_.js";import"./index-BirDoDwW.js";import"./use-form-common-props-DRD3TCcZ.js";import"./index-BXey_ta_.js";import"./typescript-Bp3YSIOJ.js";import"./index-Dqz3uMBK.js";import"./index-Dl3p_Mv0.js";import"./Button-BVCxNWl8.js";const q=T({disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},href:{type:String,default:void 0},target:{type:String,default:void 0},download:{type:String,default:void 0},variant:{type:String,default:"grey"},icon:{type:String,default:"solid check"},size:{type:String,default:"medium"},border:{type:Boolean,default:!1}}),H={click:e=>e instanceof MouseEvent,mousedown:e=>e instanceof MouseEvent};function J(e){const t=["grey","black","blue"];(!C(e.variant)||!t.includes(e.variant))&&h("Icon Button",`Invalid prop "variant": expected one of ${t.join(", ")}, but received "${e.variant}".`),j(e.disabled)||h("Button",`Invalid prop "disabled": expected a boolean, but received "${typeof e.disabled}".`),e.icon&&!C(e.icon)&&h("Icon Button",`Invalid prop "icon": expected a string for icon name, but received "${typeof e.icon}".`)}const U=e=>{const t=w([]);let o=0;const p=s=>{if(e())return;const u=s.currentTarget.getBoundingClientRect(),d=s.clientX-u.left,a=s.clientY-u.top;o++;const i={id:o,x:d,y:a};t.value.push(i),O(()=>c(i.id),700)},c=s=>{t.value=t.value.filter(l=>l.id!==s)};return{ripples:t,handleRipple:p,removeRipple:c}},Y=(e,t)=>{const o=m(()=>e.disabled),p=w();W();const{ripples:c,handleRipple:s,removeRipple:l}=U(()=>o.value),u=m(()=>e.href?"a":"button"),d=m(()=>e.href?{}:{disabled:o.value,autofocus:e.autofocus}),a=m(()=>({...d.value,"aria-disabled":e.disabled,role:e.href?"link":"button",...e.href?{href:e.href,target:e.target,download:e.download}:{autofocus:e.autofocus},onClick:i,onMousedown:y,onPointerdown:s,onKeydown:[n=>n.key===" "&&(n.preventDefault(),i(n)),n=>n.key==="Enter"&&(n.preventDefault(),i(n))]})),i=n=>{if(o.value){n.preventDefault(),n.stopPropagation();return}t("click",n)},y=n=>{if(o.value){n.preventDefault();return}t("mousedown",n)};return{_ref:p,_disabled:o,_props:d,handleClick:i,handleMouseDown:y,ripples:c,handleRipple:s,removeRipple:l,componentId:u,allAttrs:a}},Q={class:"hover-effect"},Z=["onAnimationend"],B=D({__name:"IconButton",props:q,emits:H,setup(e,{emit:t}){const o=e,p=t;J(o);const{_ref:c,componentId:s,ripples:l,removeRipple:u,allAttrs:d}=Y(o,p),a=K("icon-button",w("gui")),i=m(()=>[o.variant&&a.m(`variant-${o.variant}`),o.size&&a.m(o.size),o.border&&a.m("border")]),y=m(()=>[a.b(),...i.value,a.is("disabled",o.disabled),a.is("href",!!o.href)].flat().filter(Boolean));return(n,ee)=>(k(),P(R(r(s)),z({ref_key:"_ref",ref:c},r(d),{class:y.value}),{default:E(()=>[M(r(L),{name:n.icon,class:x(r(a).e("icon"))},null,8,["name","class"]),V("span",Q,[M(F,{name:"ripple"},{default:E(()=>[(k(!0),S($,null,A(r(l),v=>(k(),S("div",{key:v.id,class:x(r(a).e("ripple")),style:G({left:v.x+"px",top:v.y+"px"}),onAnimationend:oe=>r(u)(v.id)},null,46,Z))),128))]),_:1})])]),_:1},16,["class"]))}});B.__docgenInfo={exportName:"default",displayName:"IconButton",description:"",tags:{},sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/icon-button/src/IconButton.vue"]};const De={title:"Basic/Icon Button",component:B,parameters:{docs:{description:{component:'\n### Uso básico\nEjemplo de uso básico:\n``` vue\n<g-icon-button variant="grey" icon="solid check"/>\n```\n        '}}},argTypes:{variant:{control:"select",options:["grey","black","blue"],description:"Variante visual del icono botón",table:{type:{summary:"string"},category:"Principales"}},size:{control:"select",options:["medium","small"],description:"Variante tamaño del icono botón",table:{type:{summary:"string"},category:"Principales"}},border:{control:"boolean",description:"Deshabilita el icono botón",table:{type:{summary:"boolean"},category:"Principales"}},icon:{control:"select",options:X(),description:`Icono renderizado utilizando el componente IconFont.

Ver [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.

Ejemplo 'solid check''`,table:{type:{summary:"Iconos"},defaultValue:{summary:""}}},autofocus:{control:"boolean",description:"El icono botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",table:{category:"Comportamiento",type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Deshabilita el icono botón",table:{category:"Comportamiento",type:{summary:"boolean"}}},download:{control:"text",description:`Especifica que el elemento se descargará cuando el usuario haga clic en el enlace.

 ⚠️ **Nota:**  Solo funciona si la propiedad href está definida.`,table:{defaultValue:{summary:"undefined"},category:"Enlaces",type:{summary:"string"}}},href:{control:"text",description:"Convierte el icono botón en un enlace",table:{category:"Enlaces",type:{summary:"string"}}},target:{control:"text",description:"Atributo target del enlace",table:{category:"Enlaces",type:{summary:"string"}}},onClick:{description:"Se dispara al hacer clic en el icono botón. No se dispara si el icono botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}},onMousedown:{description:"Se dispara cuando se presiona el icono botón del mouse. No se dispara si el icono botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}}}},_=e=>({components:{GIconButton:B},setup(){return{args:e,onClick:I(N("click")),onMousedown:I(N("mousedown"))}},template:`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  `}),f=_.bind({});f.args={variant:"grey"};const b=_.bind({});b.args={variant:"black"};const g=_.bind({});g.args={variant:"blue"};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GIconButton
  },
  setup() {
    return {
      args,
      onClick: fn(action("click")),
      onMousedown: fn(action("mousedown"))
    };
  },
  template: \`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  \`
})`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GIconButton
  },
  setup() {
    return {
      args,
      onClick: fn(action("click")),
      onMousedown: fn(action("mousedown"))
    };
  },
  template: \`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  \`
})`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GIconButton
  },
  setup() {
    return {
      args,
      onClick: fn(action("click")),
      onMousedown: fn(action("mousedown"))
    };
  },
  template: \`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  \`
})`,...g.parameters?.docs?.source}}};const Pe=["grey","black","blue"];export{Pe as __namedExportsOrder,b as black,g as blue,De as default,f as grey};
