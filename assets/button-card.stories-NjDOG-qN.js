import{d as g,y as i,f as a,i as r,g as n,o as s,a as f,u as p,j as c}from"./iframe-Dct5CHxr.js";import{R as y}from"./index-1T7U7QlS.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as h}from"./documentation-stories-DmJzCMmf.js";import"./preload-helper-Dch09mLN.js";import"./install.util-cBz1HN_T.js";import"./index-GU5Cqqg3.js";const k={class:""},x=["innerHTML"],C=["innerHTML"],B=["innerHTML"],T={name:"GButtonCard"},S=g({...T,props:{title:{type:String,default:""},subtitle:{type:String,default:""},note:{type:String,default:""},icon:{type:String,default:""},disabled:{type:Boolean,default:!1},iconRounded:{type:Boolean,default:!1},height:{type:String,default:""}},emits:["click"],setup(t,{emit:d}){const u=d;function m(e){e.preventDefault(),u("click")}return(e,M)=>(s(),i("div",k,[a("section",{onClick:m,class:n(["card group",[t.disabled?"card-disabled":"card-active",t.height.length?t.height:"card-height"]])},[r(e.$slots,"image",{},()=>[a("div",{class:n({"w-20 h-20 bg-gray-9 rounded-full flex justify-center items-center":t.iconRounded})},[t.icon?(s(),f(p(y),{key:0,class:"text-blue-1 text-12 duration-200 group-hover:text-gray-3",name:t.icon},null,8,["name"])):c("",!0)],2)],!0),r(e.$slots,"title",{},()=>[a("h4",{class:n([t.disabled?"text-gray-5":"text-gray-2","font-semibold text-6 leading-6 mb-2 text mt-5"]),innerHTML:t.title},null,10,x)],!0),r(e.$slots,"subtitle",{},()=>[a("p",{class:n([t.disabled?"text-gray-5":"text-gray-2","leading-6 text"]),innerHTML:t.subtitle},null,10,C)],!0)],2),r(e.$slots,"note",{},()=>[t.note.length?(s(),i("p",{key:0,class:n(["text-center font-normal text-3 mt-4",t.disabled?"text-gray-4":"text-gray-2"]),innerHTML:t.note},null,10,B)):c("",!0)],!0)]))}}),l=b(S,[["__scopeId","data-v-553200a5"]]),{action:O}=__STORYBOOK_MODULE_ACTIONS__,{fn:v}=__STORYBOOK_MODULE_TEST__,$={title:"Basic/Button Card",component:l,argTypes:{icon:{description:'Icono a mostrar en la card. Formato `"weight name"` (ej. `"duotone copy"`).',control:"select",options:h(),table:{type:{summary:"IconString"},defaultValue:{summary:""}}}},args:{title:"Links individuales",subtitle:"Este es el subtitulo",note:"Generar link individual con monto, moneda y propósito para cada uno de tus clientes. Esto te permite tener un mejor control de tus cobranzas.",icon:"duotone copy"}},L=t=>({components:{GButtonCard:l},template:`
    <g-button-card
      v-bind="args"
      @click="onClick"
    />
  `,setup(){return{args:t,onClick:v(O("click"))}}}),o=L.bind({});o.parameters={docs:{description:{component:"Commonly used button."}}};const D=["Primary"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
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
})`,...o.parameters?.docs?.source}}};export{o as Primary,D as __namedExportsOrder,$ as default};
