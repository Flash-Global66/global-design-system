import{d as c,h as p,o as i,b as k,j as P,u as s,n as b,a6 as G,r as E,D as z,w as R,K as A,k as f,F as w,m as I,g as F,q as N,_,e as C,$ as B,X as V}from"./vue.esm-bundler-BUoj5ptC.js";import{v as x,l as q,u as T,i as L,w as U,N as W,x as H,G as S}from"./ConfigProvider-CrOhbRZ6.js";import{p as K}from"./index-Br95U766.js";import{_ as D}from"./plugin-vue_export-helper-CqGSI99y.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";const X=x({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:q([Number,Object])}}),Y=x({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),J=c({name:"ElSkeletonItem"}),Q=c({...J,props:Y,setup(e){const t=T("skeleton");return(a,o)=>(i(),p("div",{class:b([s(t).e("item"),s(t).e(a.variant)])},[a.variant==="image"?(i(),k(s(K),{key:0})):P("v-if",!0)],2))}});var h=D(Q,[["__file","skeleton-item.vue"]]);const Z=(e,t=0)=>{if(t===0)return e;const a=G(t)&&!!t.initVal,o=E(a);let r=null;const n=l=>{if(U(l)){o.value=e.value;return}r&&clearTimeout(r),r=setTimeout(()=>{o.value=e.value},l)},m=l=>{l==="leading"?L(t)?n(t):n(t.leading):G(t)?n(t.trailing):o.value=!1};return z(()=>m("leading")),R(()=>e.value,l=>{m(l?"leading":"trailing")}),o},ee=c({name:"ElSkeleton"}),te=c({...ee,props:X,setup(e,{expose:t}){const a=e,o=T("skeleton"),r=Z(A(a,"loading"),a.throttle);return t({uiLoading:r}),(n,m)=>s(r)?(i(),p("div",N({key:0,class:[s(o).b(),s(o).is("animated",n.animated)]},n.$attrs),[(i(!0),p(w,null,I(n.count,l=>(i(),p(w,{key:l},[s(r)?f(n.$slots,"template",{key:l},()=>[F(h,{class:b(s(o).is("first")),variant:"p"},null,8,["class"]),(i(!0),p(w,null,I(n.rows,$=>(i(),k(h,{key:$,class:b([s(o).e("paragraph"),s(o).is("last",$===n.rows&&n.rows>1)]),variant:"p"},null,8,["class"]))),128))]):P("v-if",!0)],64))),128))],16)):f(n.$slots,"default",_(N({key:1},n.$attrs)))}});var ne=D(te,[["__file","skeleton.vue"]]);const oe=H(ne,{SkeletonItem:h}),se=W(h),M=c({name:"GSkeleton",components:{ElSkeleton:oe},props:{animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},throttle:{type:Number}}});function ae(e,t,a,o,r,n){const m=V("el-skeleton");return i(),k(m,_(B({...e.$attrs,...e.$props})),{template:C(()=>[f(e.$slots,"template")]),default:C(()=>[f(e.$slots,"default")]),_:3},16)}const v=O(M,[["render",ae]]);M.__docgenInfo={displayName:"GSkeleton",exportName:"default",description:"",tags:{},props:[{name:"animated",description:"whether showing the animation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"count",description:"how many fake items to render to the DOM",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"rows",description:"numbers of the row, only useful when no template slot were given",type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"throttle",description:"Rendering delay in milliseconds",type:{name:"number"}}],slots:[{name:"default",description:"Real rendering DOM"},{name:"template",description:"Custom rendering skeleton template"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/skeleton/Skeleton.vue"]};const j=c({name:"GSkeletonItem",components:{ElSkeletonItem:se},props:{variant:{type:String,default:"text"}}});function re(e,t,a,o,r,n){const m=V("el-skeleton-item");return i(),k(m,_(B({...e.$attrs,...e.$props})),null,16)}const y=O(j,[["render",re]]);j.__docgenInfo={displayName:"GSkeletonItem",exportName:"default",description:"",tags:{},props:[{name:"variant",description:"The current rendering skeleton type\n`'circle' | 'rect' | 'h1' | 'h3' | 'text' | 'caption' | 'p' | 'image' | 'button'`",type:{name:"SkeletonVariant"},defaultValue:{func:!1,value:"'text'"}}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/skeleton/SkeletonItem.vue"]};const fe={title:"Data/Skeleton",component:v,subcomponents:{GSkeletonItem:y},argTypes:{animated:{defaultValue:!0},count:{defaultValue:1},rows:{defaultValue:3}},parameters:{docs:{description:{component:"When loading data, and you need a rich experience for visual and interactions for your end users, you can choose `skeleton`. <br /> <br /> You can configure the row numbers yourself, for more precise rendering effect, the actual rendered row number will always be 1 row more than the given number, that is because we are rendering a title row with 33% width of the other. <br /> We have provided a switch flag indicating whether showing the loading animation, called animated when this is true, all children of g-skeleton will show animation"}}}},le=e=>({components:{GSkeleton:v,GConfigProvider:S,GSkeletonItem:y},template:`
    <g-config-provider>
      <g-skeleton v-bind="args" />
      <br />
      <g-skeleton style="--gui-skeleton-circle-size: 100px" animated>
        <template #template>
          <g-skeleton-item variant="circle" />
        </template>
      </g-skeleton>
    </g-config-provider>
  `,setup(){return{args:e}}}),g=le.bind({}),ie=()=>({components:{GSkeleton:v,GConfigProvider:S,GSkeletonItem:y},template:`
    <g-config-provider>
      <g-skeleton style="width: 240px" animated>
        <template #template>
          <g-skeleton-item variant="image" class="w-60 h-60 rounded-sm" />
          <g-skeleton-item class="mt-3 w-7/12" variant="p" />
          <div class="w-full flex items-center justify-between">
            <g-skeleton-item variant="text" class="mr-5" />
            <g-skeleton-item variant="text" class="w-1/3" style="--gui-skeleton-color: purple;" />
          </div>
        </template>
      </g-skeleton>
    </g-config-provider>
  `}),u=ie.bind({});u.parameters={docs:{description:{story:"Global66 B2B UI only provides the most common template, sometimes that could be a problem, so you have a slot named template to do that work. <br /> <br /> Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference."}}};const me=()=>({components:{GSkeleton:v,GConfigProvider:S,GSkeletonItem:y},template:`
    <g-config-provider>
      <g-skeleton :throttle="500" animated />
    </g-config-provider>
  `}),d=me.bind({});d.parameters={docs:{description:{story:"Sometimes API responds very quickly, when that happens, the skeleton just gets rendered to the DOM then it needs to switch back to real DOM, that causes the sudden flashy. To avoid such thing, you can use the `throttle` attribute."}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GSkeleton,
    GConfigProvider,
    GSkeletonItem
  },
  template: \`
    <g-config-provider>
      <g-skeleton v-bind="args" />
      <br />
      <g-skeleton style="--gui-skeleton-circle-size: 100px" animated>
        <template #template>
          <g-skeleton-item variant="circle" />
        </template>
      </g-skeleton>
    </g-config-provider>
  \`,
  setup() {
    return {
      args
    };
  }
})`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GSkeleton,
    GConfigProvider,
    GSkeletonItem
  },
  template: \`
    <g-config-provider>
      <g-skeleton style="width: 240px" animated>
        <template #template>
          <g-skeleton-item variant="image" class="w-60 h-60 rounded-sm" />
          <g-skeleton-item class="mt-3 w-7/12" variant="p" />
          <div class="w-full flex items-center justify-between">
            <g-skeleton-item variant="text" class="mr-5" />
            <g-skeleton-item variant="text" class="w-1/3" style="--gui-skeleton-color: purple;" />
          </div>
        </template>
      </g-skeleton>
    </g-config-provider>
  \`
})`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GSkeleton,
    GConfigProvider,
    GSkeletonItem
  },
  template: \`
    <g-config-provider>
      <g-skeleton :throttle="500" animated />
    </g-config-provider>
  \`
})`,...d.parameters?.docs?.source}}};const he=["Default","Custom","Bouncing"];export{d as Bouncing,u as Custom,g as Default,he as __namedExportsOrder,fe as default};
