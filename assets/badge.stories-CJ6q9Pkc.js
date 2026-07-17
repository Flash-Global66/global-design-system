import{d as f,c as i,t as b,q as c,f as y,e as v,T as h,k as u,b as S,h as w,j as B,n as $,z as C,x as N,v as V}from"./vue.esm-bundler-Deokl1F5.js";import{c as D}from"./useEmptyValues-S5EffpHc.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{G as x}from"./ConfigProvider-DiWOjIRd.js";import"./props.util-Dtwzmmnf.js";const m=(e,o="px")=>e?`${e}${o}`:"",g=f({name:"GBadge",props:{value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,default:"danger"},showZero:{type:Boolean,default:!0},color:String,badgeStyle:{type:[String,Object,Array],default:()=>({})},offset:{type:Array,default:()=>[0,0]},badgeClass:{type:String}},emits:["change","visible-change","remove-tag","clear","blur","focus"],setup(e,{slots:o}){const t=D("badge"),r=i(()=>{if(e.isDot)return"";const{value:n,max:a}=e;return typeof n=="number"&&typeof a=="number"?a<n?`${a}+`:`${n}`:`${n}`}),d=i(()=>[t.e("content"),t.em("content",e.type),t.is("fixed",!!o.default),t.is("dot",e.isDot),t.is("hide-zero",!e.showZero&&e.value===0),e.badgeClass]),l=i(()=>{const[n,a]=e.offset;return[{backgroundColor:e.color,marginRight:m(-n),marginTop:m(a)},e.badgeStyle??{}]});return{ns:t,content:r,contentClasses:d,contentStyle:l}}});function z(e,o,t,r,d,l){return S(),b("div",{class:u(e.ns.b())},[c(e.$slots,"default"),y(h,{name:`${e.ns.namespace.value}-zoom-in-center`},{default:v(()=>[w(B("sup",{class:u(e.contentClasses),style:$(e.contentStyle)},[c(e.$slots,"content",{value:e.content},()=>[C(N(e.content),1)])],6),[[V,!e.hidden&&(e.content||e.isDot||!!e.$slots.content)]])]),_:3},8,["name"])],2)}const p=k(g,[["render",z]]);g.__docgenInfo={displayName:"GBadge",exportName:"default",description:"",tags:{},props:[{name:"value",tags:{description:[{description:"display value.",title:"description"}]},type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"max",tags:{description:[{description:"maximum value, shows `{max}+` when exceeded. Only works if value is a number.",title:"description"}]},type:{name:"number"},defaultValue:{func:!1,value:"99"}},{name:"isDot",tags:{description:[{description:"if a little dot is displayed.",title:"description"}]},type:{name:"boolean"}},{name:"hidden",tags:{description:[{description:"hidden badge.",title:"description"}]},type:{name:"boolean"}},{name:"type",tags:{description:[{description:"badge type.",title:"description"}]},type:{name:"BadgeType"},defaultValue:{func:!1,value:"'danger'"}},{name:"showZero",tags:{description:[{description:"whether to show badge when value is zero.",title:"description"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"color",tags:{description:[{description:"customize dot background color",title:"description"}]},type:{name:"string"}},{name:"badgeStyle",tags:{description:[{description:"CSS style of badge",title:"description"}]},type:{name:"StyleValue"},defaultValue:{func:!0,value:"() => ({})"}},{name:"offset",tags:{description:[{description:"set offset of the badge",title:"description"}]},type:{name:"[number, number]"},defaultValue:{func:!0,value:"() => [0, 0]"}},{name:"badgeClass",tags:{description:[{description:"custom class name of badge",title:"description"}]},type:{name:"string"}}],events:[{name:"change",description:"triggers when the bound value changes"},{name:"visible-change"},{name:"remove-tag"},{name:"clear"},{name:"blur"},{name:"focus"}],slots:[{name:"default"},{name:"content",scoped:!0,bindings:[{name:"value",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/badge/Badge.vue"]};const H={title:"Data/Badge",component:p},G=e=>({components:{GBadge:p,GConfigProvider:x},template:`
  <g-config-provider>
    <g-badge value="8" v-bind="args">
      Hola
    </g-badge>
  </g-config-provider>
  `,setup(){return{args:e}}}),s=G.bind({});s.args={text:"JA"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
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
})`,...s.parameters?.docs?.source}}};const M=["Default"];export{s as Default,M as __namedExportsOrder,H as default};
