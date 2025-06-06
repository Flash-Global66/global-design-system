import{r as o,d as S,w as x,x as w,s as p,e as G,E as z,a as K,c as I,k as C,h as B,u as m,f as M,T as U,l as A,A as J,y as Q,m as R,j as W,v as X}from"./vue.esm-bundler-CjRFyT5z.js";import{F as Y}from"./index.es-DWBUHxqm.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{G as q}from"./ConfigProvider-HvX_Zy0c.js";import"./install-l_-A8haV.js";const ee={active:o(null),count:o(0),accordion:o(!1),disabled:o(!1),hideIcon:o(!1),setActiveItem:()=>console.log},N=Symbol("GCollapse"),te={class:"gui-accordion"},ae={name:"GCollapseContent"},V=S({...ae,props:{modelValue:{type:Number,default:null},default:{type:Number,default:null},disabled:{type:Boolean,default:!1},accordion:{type:Boolean,default:!1},hideIcon:{type:Boolean,default:!1}},emits:["update:modelValue","click-collapse"],setup(c,{emit:d}){const e=c,i=d,g=o(0),n=o(e.modelValue||e.default),s=o(e.accordion),v=o(e.disabled),b=o(e.hideIcon);return!e.accordion&&e.modelValue!==void 0&&!Array.isArray(e.modelValue)&&console.error("El v-model no es un array. Envuelva su referencia en un array."),e.accordion&&Array.isArray(e.modelValue)&&console.error("El v-model es un array. Su referencia debe ser en un tipo primitivo."),e.modelValue||(s.value?n.value=e.default:n.value=e.default!==null?[e.default]:[]),x(()=>e.modelValue,a=>{Array.isArray(a)&&console.log(a[0],typeof a),n.value=a},{deep:!0,immediate:!0}),x(()=>e.disabled,a=>{v.value=a}),x(()=>e.hideIcon,a=>{b.value=a}),z(N,{count:g,active:n,accordion:s,disabled:v,hideIcon:b,setActiveItem:(a,l)=>{let r=a;const _=n.value;if(s.value&&l&&(n.value=a),!s.value&&Array.isArray(n.value)){const u=n.value,y=u.findIndex(h=>h===a);y!==-1?u.splice(y,1):u.push(a),r=u,n.value=u}i("click-collapse",{itemOld:_,itemNew:r,itemCurrent:a,visible:l}),i("update:modelValue",r)}}),(a,l)=>(G(),w("div",te,[p(a.$slots,"default")]))}});V.__docgenInfo={exportName:"default",displayName:"Collapse",description:"",tags:{},props:[{name:"modelValue",type:{name:"ValueCollapse"},defaultValue:{func:!1,value:"null"}},{name:"default",type:{name:"number | string"},defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"accordion",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["ValueCollapse"]}},{name:"click-collapse",type:{names:["ChangeCollapse"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/collapse/Collapse.vue"]};const le=["aria-disabled"],ne={class:"flex"},oe={name:"GCollapseItem"},E=S({...oe,props:{classHead:{type:String,default:""},classIcon:{type:String,default:""},classContent:{type:String,default:""},disabled:{type:Boolean,default:!1},name:{type:String},title:{type:String,default:""},hideIcon:{type:Boolean,default:!1}},emits:["open","close","opened","closed","click-item"],setup(c,{emit:d}){const e=c,i=d,{count:g,active:n,disabled:s,accordion:v,setActiveItem:b,hideIcon:D}=K(N,ee),a=o(e.name?e.name:g.value++),l=o(!1),r=I(()=>s.value||e.disabled),_=I(()=>D.value||e.hideIcon),u=I(()=>[e.classHead.length?e.classHead:"flex w-full justify-between border-solid border-2 border-gray-18 px-4 sm:px-6 py-3 rounded-md flex-1 items-center",!e.classHead.length&&r.value?"bg-gray-18 text-gray-4":"bg-white text-gray-1 font-medium",r.value?"cursor-not-allowed select-none":"cursor-pointer"]),y=I(()=>[e.classIcon.length?e.classIcon:"flex items-center text-6",r.value?"text-gray-5":"text-gray-3",{"active-icon":l.value}]);x(n,()=>{h()});function h(){v.value&&Array.isArray(n.value)?l.value=n.value.includes(a.value):l.value=n.value===a.value}h();function H(t){t.preventDefault(),!r.value&&(l.value=!l.value,b(a.value,l.value),i("click-item",{event:t,itemKey:a.value,visible:l.value,disabled:s.value}))}function $(t){t.style.height="0px"}function F(t){i("open"),requestAnimationFrame(()=>{t.style.height=t.scrollHeight+"px"})}function P(t){i("opened"),t.style.height="auto"}function O(t){t.style.height=t.scrollHeight+"px"}function j(t){i("close"),requestAnimationFrame(()=>{t.style.height="0"})}function L(t){i("close"),requestAnimationFrame(()=>{t.style.height="0"})}return(t,ce)=>(G(),w("section",null,[C("div",{onClick:H},[p(t.$slots,"head",{active:l.value,disabled:m(s)},()=>[C("button",{class:A([u.value,{active:l.value}]),"aria-disabled":m(s)},[p(t.$slots,"title",{active:l.value,disabled:m(s)},()=>[J(Q(c.title),1)],!0),C("div",ne,[p(t.$slots,"icon",{active:l.value,disabled:m(s)},()=>[_.value?R("",!0):(G(),w("div",{key:0,class:A([...y.value,"duration-200"])},[B(m(Y),{icon:["far","chevron-down"]})],2))],!0),p(t.$slots,"right",{active:l.value,disabled:m(s)},void 0,!0)])],10,le)],!0)]),B(U,{name:"gui-collapse",onBeforeEnter:$,onEnter:F,onAfterEnter:P,onBeforeLeave:O,onLeave:j,onAfterLeave:L},{default:M(()=>[W(C("div",{class:A(c.classContent)},[p(t.$slots,"content",{active:l.value,disabled:m(s)},void 0,!0)],2),[[X,l.value]])]),_:3})]))}}),T=Z(E,[["__scopeId","data-v-a90d8bf8"]]);E.__docgenInfo={exportName:"default",displayName:"CollapseItem",description:"",tags:{},props:[{name:"classHead",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"classIcon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"classContent",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"name",type:{name:"string"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"open"},{name:"close"},{name:"opened"},{name:"closed"},{name:"click-item"}],slots:[{name:"head",scoped:!0,bindings:[{name:"active",title:"binding"},{name:"disabled",title:"binding"}]},{name:"title",scoped:!0,bindings:[{name:"active",title:"binding"},{name:"disabled",title:"binding"}]},{name:"icon",scoped:!0,bindings:[{name:"active",title:"binding"},{name:"disabled",title:"binding"}]},{name:"right",scoped:!0,bindings:[{name:"active",title:"binding"},{name:"disabled",title:"binding"}]},{name:"content",scoped:!0,bindings:[{name:"active",title:"binding"},{name:"disabled",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/collapse/CollapseItem.vue"]};const ge={title:"Data/Collapse",component:V,subcomponents:{GCollapseItem:T},argTypes:{animated:{defaultValue:!0},count:{defaultValue:1},rows:{defaultValue:3}},parameters:{docs:{description:{component:"The collapse component will help us to compress the information, to be able to make it work like an accordion, this means that only one can be open"}}}},se=c=>({components:{GCollapse:V,GConfigProvider:q,GCollapseItem:T},template:`
    <g-config-provider>
      <button @click="toggleDisabled">
        click {{ disabled }}
      </button>
      <g-collapse
        v-model="accordionIndex"
        accordion
        :disabled="disabled"
        prevent-default
        @click-item="onClickItem"
        class="grid grid-cols-1 gap-y-6 mt-6">
          <g-collapse-item title="Titulo 01" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
          <g-collapse-item title="Titulo 02" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
      </g-collapse>
    </g-config-provider>
  `,setup(){const d=o(!1),e=o(0);function i(n){console.log(n)}function g(){d.value=!d.value}return{args:c,toggleDisabled:g,disabled:d,onClickItem:i,accordionIndex:e}}}),k=se.bind({}),ie=()=>({components:{GCollapse:V,GConfigProvider:q,GCollapseItem:T},template:`
    <g-config-provider>
      accordionIndex: {{ accordionIndex }}
      <g-collapse
        v-model="accordionIndex"
        @click-item="onClickItem"
        class="grid grid-cols-1 gap-y-6 mt-6">
          <g-collapse-item title="Titulo 01" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
          <g-collapse-item title="Titulo 02" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
      </g-collapse>
    </g-config-provider>
  `,setup(){const c=o([0]);function d(e){console.log(e)}return{onClickItem:d,accordionIndex:c}}}),f=ie.bind({});f.parameters={docs:{description:{story:"Global66 B2B UI only provides the most common template, sometimes that could be a problem, so you have a slot named template to do that work. <br /> <br /> Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference."}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GCollapse,
    GConfigProvider,
    GCollapseItem
  },
  template: \`
    <g-config-provider>
      <button @click="toggleDisabled">
        click {{ disabled }}
      </button>
      <g-collapse
        v-model="accordionIndex"
        accordion
        :disabled="disabled"
        prevent-default
        @click-item="onClickItem"
        class="grid grid-cols-1 gap-y-6 mt-6">
          <g-collapse-item title="Titulo 01" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
          <g-collapse-item title="Titulo 02" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
      </g-collapse>
    </g-config-provider>
  \`,
  setup() {
    const disabled = ref(false);
    const accordionIndex = ref(0);
    function onClickItem(item) {
      console.log(item);
    }
    function toggleDisabled() {
      disabled.value = !disabled.value;
    }
    return {
      args,
      toggleDisabled,
      disabled,
      onClickItem,
      accordionIndex
    };
  }
})`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GCollapse,
    GConfigProvider,
    GCollapseItem
  },
  template: \`
    <g-config-provider>
      accordionIndex: {{ accordionIndex }}
      <g-collapse
        v-model="accordionIndex"
        @click-item="onClickItem"
        class="grid grid-cols-1 gap-y-6 mt-6">
          <g-collapse-item title="Titulo 01" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
          <g-collapse-item title="Titulo 02" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
      </g-collapse>
    </g-config-provider>
  \`,
  setup() {
    const accordionIndex = ref([0]);
    function onClickItem(item) {
      console.log(item);
    }
    return {
      onClickItem,
      accordionIndex
    };
  }
})`,...f.parameters?.docs?.source}}};const fe=["Default","Custom"];export{f as Custom,k as Default,fe as __namedExportsOrder,ge as default};
