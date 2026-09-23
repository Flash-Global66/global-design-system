import{d as f,c as r,y as p,i as l,b,w as y,T as v,g as u,o as S,e as $,f as h,n as B,B as C,z as N,v as D}from"./iframe-Dct5CHxr.js";import{u as w}from"./useEmptyValues-BnYvcW4O.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{G as z}from"./ConfigProvider-7dg58IlU.js";import"./preload-helper-Dch09mLN.js";const g=(e,s="px")=>e?`${e}${s}`:"",T=f({name:"GBadge",props:{value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,default:"danger"},showZero:{type:Boolean,default:!0},color:String,badgeStyle:{type:[String,Object,Array],default:()=>({})},offset:{type:Array,default:()=>[0,0]},badgeClass:{type:String}},emits:["change","visible-change","remove-tag","clear","blur","focus"],setup(e,{slots:s}){const t=w("badge"),i=r(()=>{if(e.isDot)return"";const{value:n,max:a}=e;return typeof n=="number"&&typeof a=="number"?a<n?`${a}+`:`${n}`:`${n}`}),c=r(()=>[t.e("content"),t.em("content",e.type),t.is("fixed",!!s.default),t.is("dot",e.isDot),t.is("hide-zero",!e.showZero&&e.value===0),e.badgeClass]),d=r(()=>{const[n,a]=e.offset;return[{backgroundColor:e.color,marginRight:g(-n),marginTop:g(a)},e.badgeStyle??{}]});return{ns:t,content:i,contentClasses:c,contentStyle:d}}});function V(e,s,t,i,c,d){return S(),p("div",{class:u(e.ns.b())},[l(e.$slots,"default"),b(v,{name:`${e.ns.namespace.value}-zoom-in-center`},{default:y(()=>[$(h("sup",{class:u(e.contentClasses),style:B(e.contentStyle)},[l(e.$slots,"content",{value:e.content},()=>[C(N(e.content),1)])],6),[[D,!e.hidden&&(e.content||e.isDot||!!e.$slots.content)]])]),_:3},8,["name"])],2)}const m=G(T,[["render",V]]),j={title:"Data/Badge",component:m},k=e=>({components:{GBadge:m,GConfigProvider:z},template:`
  <g-config-provider>
    <g-badge value="8" v-bind="args">
      Hola
    </g-badge>
  </g-config-provider>
  `,setup(){return{args:e}}}),o=k.bind({});o.args={text:"JA"};const x=["Default"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GBadge,
    GConfigProvider
  },
  template: \`
  <g-config-provider>
    <g-badge value="8" v-bind="args">
      Hola
    </g-badge>
  </g-config-provider>
  \`,
  setup() {
    return {
      args
    };
  }
})`,...o.parameters?.docs?.source}}};export{o as Default,x as __namedExportsOrder,j as default};
