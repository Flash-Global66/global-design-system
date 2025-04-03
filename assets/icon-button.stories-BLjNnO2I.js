import{f as I}from"./index-imBTNTrX.js";import{x as C,r as w,c as m,d as P,b as z,e as E,q as D,u as r,s as R,o as k,g as x,f as V,n as M,T as F,h as S,F as T,m as $,p as A}from"./vue.esm-bundler-BUoj5ptC.js";import{v as G,y as j,u as q}from"./ConfigProvider-CrOhbRZ6.js";import{d as h}from"./error-Cq9Fpw4b.js";import{_ as L}from"./Icon-HxEiN7t9.js";import{u as O}from"./index-Dh3Gw0Zf.js";import{u as H}from"./use-form-item-D23pHYNr.js";import{generateIconOptions as K}from"./icon-font.stories-B_VKatzO.js";import{a as N}from"./index-Br0BFi8U.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index.es-DwVakxBA.js";import"./index-DDVpgGx_.js";import"./index-BOx2y-Jl.js";import"./index-KaGzp0yT.js";import"./_initCloneObject-MVraUcJR.js";import"./castArray-DceVieY3.js";import"./constants-Dnj8X3EN.js";import"./index-3b0zog6D.js";import"./index-Wt8uPs2i.js";import"./event-BB_Ol6Sd.js";import"./index-BcGPpLRa.js";import"./use-form-common-props-DyLglXeD.js";import"./index-CGH_u4Oy.js";import"./index-DESZvTKR.js";import"./index-JLKkvi6K.js";import"./index-BpTSg4uy.js";import"./v4-CtRu48qb.js";const U=G({disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},href:{type:String,default:void 0},target:{type:String,default:void 0},download:{type:String,default:void 0},variant:{type:String,default:"grey"},icon:{type:String,default:"solid check"},size:{type:String,default:"medium"},border:{type:Boolean,default:!1}}),W={click:e=>e instanceof MouseEvent,mousedown:e=>e instanceof MouseEvent};function X(e){const t=["grey","black","blue"];(!C(e.variant)||!t.includes(e.variant))&&h("Icon Button",`Invalid prop "variant": expected one of ${t.join(", ")}, but received "${e.variant}".`),j(e.disabled)||h("Button",`Invalid prop "disabled": expected a boolean, but received "${typeof e.disabled}".`),e.icon&&!C(e.icon)&&h("Icon Button",`Invalid prop "icon": expected a string for icon name, but received "${typeof e.icon}".`)}const Y=e=>{const t=w([]);let o=0;const p=s=>{if(e())return;const u=s.currentTarget.getBoundingClientRect(),d=s.clientX-u.left,a=s.clientY-u.top;o++;const i={id:o,x:d,y:a};t.value.push(i),O(()=>c(i.id),700)},c=s=>{t.value=t.value.filter(l=>l.id!==s)};return{ripples:t,handleRipple:p,removeRipple:c}},J=(e,t)=>{const o=m(()=>e.disabled),p=w();H();const{ripples:c,handleRipple:s,removeRipple:l}=Y(()=>o.value),u=m(()=>e.href?"a":"button"),d=m(()=>e.href?{}:{disabled:o.value,autofocus:e.autofocus}),a=m(()=>({...d.value,"aria-disabled":e.disabled,role:e.href?"link":"button",...e.href?{href:e.href,target:e.target,download:e.download}:{autofocus:e.autofocus},onClick:i,onMousedown:y,onPointerdown:s,onKeydown:[n=>n.key===" "&&(n.preventDefault(),i(n)),n=>n.key==="Enter"&&(n.preventDefault(),i(n))]})),i=n=>{if(o.value){n.preventDefault(),n.stopPropagation();return}t("click",n)},y=n=>{if(o.value){n.preventDefault();return}t("mousedown",n)};return{_ref:p,_disabled:o,_props:d,handleClick:i,handleMouseDown:y,ripples:c,handleRipple:s,removeRipple:l,componentId:u,allAttrs:a}},Q={class:"hover-effect"},Z=["onAnimationend"],B=P({__name:"IconButton",props:U,emits:W,setup(e,{emit:t}){const o=e,p=t;X(o);const{_ref:c,componentId:s,ripples:l,removeRipple:u,allAttrs:d}=J(o,p),a=q("icon-button",w("gui")),i=m(()=>[o.variant&&a.m(`variant-${o.variant}`),o.size&&a.m(o.size),o.border&&a.m("border")]),y=m(()=>[a.b(),...i.value,a.is("disabled",o.disabled),a.is("href",!!o.href)].flat().filter(Boolean));return(n,ee)=>(k(),z(R(r(s)),D({ref_key:"_ref",ref:c},r(d),{class:y.value}),{default:E(()=>[x(r(L),{name:n.icon,class:M(r(a).e("icon"))},null,8,["name","class"]),V("span",Q,[x(F,{name:"ripple"},{default:E(()=>[(k(!0),S(T,null,$(r(l),v=>(k(),S("div",{key:v.id,class:M(r(a).e("ripple")),style:A({left:v.x+"px",top:v.y+"px"}),onAnimationend:oe=>r(u)(v.id)},null,46,Z))),128))]),_:1})])]),_:1},16,["class"]))}});B.__docgenInfo={exportName:"default",displayName:"IconButton",description:"",tags:{},sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/icon-button/src/IconButton.vue"]};const Se={title:"Basic/Icon Button",component:B,parameters:{docs:{description:{component:'\n### Uso básico\nEjemplo de uso básico:\n``` vue\n<g-icon-button variant="grey" icon="solid check"/>\n```\n        '}}},argTypes:{variant:{control:"select",options:["grey","black","blue"],description:"Variante visual del icono botón",table:{type:{summary:"string"},category:"Principales"}},size:{control:"select",options:["medium","small"],description:"Variante tamaño del icono botón",table:{type:{summary:"string"},category:"Principales"}},border:{control:"boolean",description:"Deshabilita el icono botón",table:{type:{summary:"boolean"},category:"Principales"}},icon:{control:"select",options:K(),description:`Icono renderizado utilizando el componente IconFont.

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
})`,...g.parameters?.docs?.source}}};const Ne=["grey","black","blue"];export{Ne as __namedExportsOrder,b as black,g as blue,Se as default,f as grey};
