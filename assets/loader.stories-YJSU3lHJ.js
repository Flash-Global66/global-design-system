import{d,b as l,f as c,T as p,e as s,x as m,m as i,k as u,r}from"./vue.esm-bundler-BQ5MY6wY.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const t=d({name:"Loader",props:{show:{default:!1,type:Boolean}}}),g=""+new URL("preloader-C2KrFHCF.gif",import.meta.url).href,_={key:0,class:"gui-loader",style:{"background-color":"rgba(4, 16, 66, 0.8)"}};function b(a,o,h,k,w,y){return s(),l(p,{name:"fade"},{default:c(()=>[a.show?(s(),m("div",_,o[0]||(o[0]=[u("img",{src:g,class:"h-12"},null,-1)]))):i("",!0)]),_:1})}const n=f(t,[["render",b]]);t.__docgenInfo={displayName:"Loader",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/loader/Loader.vue"]};r(!1);r(!1);const B={title:"Feedback/Loader",component:n},L=a=>({components:{Loader:n},template:'<Loader v-bind="args"/>',setup(){return{args:a}}}),e=L.bind({});e.args={show:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Loader
  },
  template: \`<Loader v-bind="args"/>\`,
  setup() {
    return {
      args
    };
  }
})`,...e.parameters?.docs?.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,B as default};
