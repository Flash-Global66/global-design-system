import{k as l,G as d,K as c,T as p,m as s,l as m,C as i,n as u,r}from"./vue.esm-bundler-ENg2wqJc.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const t=l({name:"Loader",props:{show:{default:!1,type:Boolean}}}),g=""+new URL("preloader-C2KrFHCF.gif",import.meta.url).href,_={key:0,class:"gui-loader",style:{"background-color":"rgba(4, 16, 66, 0.8)"}};function L(a,o,h,k,w,y){return s(),d(p,{name:"fade"},{default:c(()=>[a.show?(s(),m("div",_,o[0]||(o[0]=[u("img",{src:g,class:"h-12"},null,-1)]))):i("",!0)]),_:1})}const n=f(t,[["render",L]]);t.__docgenInfo={displayName:"Loader",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/loader/Loader.vue"]};r(!1);r(!1);const x={title:"Feedback/Loader",component:n},b=a=>({components:{Loader:n},template:'<Loader v-bind="args"/>',setup(){return{args:a}}}),e=b.bind({});e.args={show:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Loader
  },
  template: \`<Loader v-bind="args"/>\`,
  setup() {
    return {
      args
    };
  }
})`,...e.parameters?.docs?.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,x as default};
