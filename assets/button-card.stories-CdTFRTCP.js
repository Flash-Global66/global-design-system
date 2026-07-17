import{d as g,t as i,j as o,q as s,k as n,b as l,a as p,l as r,u as y}from"./vue.esm-bundler-Deokl1F5.js";import{_ as b}from"./index-B-U0DsHd.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as k}from"./documentation-stories-ZyKnmB2F.js";import{a as v}from"./index-Br0BFi8U.js";import{f as x}from"./index-DqLvk0wd.js";import"./error.util-CmMZjXeT.js";import"./props.util-Dtwzmmnf.js";import"./index-BXyPvuAD.js";import"./v4-CtRu48qb.js";const C={class:""},B=["innerHTML"],V=["innerHTML"],S=["innerHTML"],T={name:"GButtonCard"},c=g({...T,props:{title:{type:String,default:""},subtitle:{type:String,default:""},note:{type:String,default:""},icon:{type:String,default:""},disabled:{type:Boolean,default:!1},iconRounded:{type:Boolean,default:!1},height:{type:String,default:""}},emits:["click"],setup(e,{emit:d}){const m=d;function f(t){t.preventDefault(),m("click")}return(t,H)=>(l(),i("div",C,[o("section",{onClick:f,class:n(["card group",[e.disabled?"card-disabled":"card-active",e.height.length?e.height:"card-height"]])},[s(t.$slots,"image",{},()=>[o("div",{class:n({"w-20 h-20 bg-gray-9 rounded-full flex justify-center items-center":e.iconRounded})},[e.icon?(l(),p(y(b),{key:0,class:"text-blue-1 text-12 duration-200 group-hover:text-gray-3",name:e.icon},null,8,["name"])):r("",!0)],2)],!0),s(t.$slots,"title",{},()=>[o("h4",{class:n([e.disabled?"text-gray-5":"text-gray-2","font-semibold text-6 leading-6 mb-2 text mt-5"]),innerHTML:e.title},null,10,B)],!0),s(t.$slots,"subtitle",{},()=>[o("p",{class:n([e.disabled?"text-gray-5":"text-gray-2","leading-6 text"]),innerHTML:e.subtitle},null,10,V)],!0)],2),s(t.$slots,"note",{},()=>[e.note.length?(l(),i("p",{key:0,class:n(["text-center font-normal text-3 mt-4",e.disabled?"text-gray-4":"text-gray-2"]),innerHTML:e.note},null,10,S)):r("",!0)],!0)]))}}),u=h(c,[["__scopeId","data-v-553200a5"]]);c.__docgenInfo={exportName:"default",displayName:"ButtonCard",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"note",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"icon",type:{name:"IconString"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconRounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"height",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click"}],slots:[{name:"image"},{name:"title"},{name:"subtitle"},{name:"note"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/button-card/ButtonCard.vue"]};const F={title:"Basic/Button Card",component:u,argTypes:{icon:{description:'Icono a mostrar en la card. Formato `"weight name"` (ej. `"duotone copy"`).',control:"select",options:k(),table:{type:{summary:"IconString"},defaultValue:{summary:""}}}},args:{title:"Links individuales",subtitle:"Este es el subtitulo",note:"Generar link individual con monto, moneda y propósito para cada uno de tus clientes. Esto te permite tener un mejor control de tus cobranzas.",icon:"duotone copy"}},L=e=>({components:{GButtonCard:u},template:`
    <g-button-card
      v-bind="args"
      @click="onClick"
    />
  `,setup(){return{args:e,onClick:x(v("click"))}}}),a=L.bind({});a.parameters={docs:{description:{component:"Commonly used button."}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GButtonCard
  },
  template: \`
    <g-button-card
      v-bind="args"
      @click="onClick"
    />
  \`,
  setup() {
    return {
      args,
      onClick: fn(action('click'))
    };
  }
})`,...a.parameters?.docs?.source}}};const O=["Primary"];export{a as Primary,O as __namedExportsOrder,F as default};
