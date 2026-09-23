import{d as A,r as B,c as n,u as c,g as w,y as u,b as T,w as m,U,o as g,i as b,z as h,j as G,B as N}from"./iframe-Dct5CHxr.js";import{Z as a,_ as v,n as E}from"./index-BpP4et0s.js";import{Y as l}from"./index--vN8FzlQ.js";import{u as k,c as V}from"./useEmptyValues-BnYvcW4O.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{G as R}from"./index-BeqF1NXI.js";import{G as $}from"./ConfigProvider-7dg58IlU.js";import"./preload-helper-Dch09mLN.js";import"./index-DWhPhD7W.js";import"./index-pMiYc9r3.js";import"./index-CZoNQBHQ.js";import"./useId-MLHLvdkG.js";import"./install.util-cBz1HN_T.js";import"./index-DxlLUiSm.js";import"./event.constant-LtAI3-H4.js";import"./index-BgdLHs-h.js";import"./index-1T7U7QlS.js";import"./index-Bx14T361.js";import"./index-DalCjv79.js";import"./useLocale-pH4k1Kvj.js";import"./refs.util-D3l8TA3E.js";const P="onUpdate:visible",j=A({name:"GPopover",components:{GTooltip:E},emits:["show","before-enter","after-enter","hide","before-leave","after-leave","update:visible"],props:{trigger:v.trigger,placement:l.placement,disabled:v.disabled,visible:a.visible,transition:{type:String,default:"gui-fade-in-linear"},popperOptions:l.popperOptions,tabindex:l.tabindex,content:a.content,popperStyle:{type:[String,Array,Object]},popperClass:{type:[String,Array,Object]},teleported:a.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},enterable:{...a.enterable,default:!0},effect:{...a.effect,default:"light"},"onUpdate:visible":{type:Function}},setup(e,{emit:t}){const o=k("popover"),i=B(),d=n(()=>e[P]),f=r=>{d.value?.(r)},p=n(()=>c(i)?.popperRef),S=n(()=>[{width:V(e.width)},e.popperStyle]),O=n(()=>w([o.b(),e.popperClass,{[o.m("plain")]:!!e.content}])),C=n(()=>e.transition===`${o.namespace.value}-fade-in-linear`);return{ns:o,tooltipRef:i,popperRef:p,style:S,kls:O,gpuAcceleration:C,handleUpdateVisible:f,hide:()=>{c(i)?.hide()},beforeEnter:()=>{t("before-enter")},beforeLeave:()=>{t("before-leave")},handleShow:r=>{t("show",r),t("after-enter")},handleHide:r=>{t("update:visible",!1),t("hide",r),t("after-leave")}}}}),D={class:"gui-popover-wrapper"};function L(e,t,o,i,d,f){const p=U("g-tooltip");return g(),u("div",D,[T(p,{ref:"tooltipRef",trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":e.kls,"popper-style":e.style,teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":e.gpuAcceleration,"onUpdate:visible":e.handleUpdateVisible,onBeforeShow:e.beforeEnter,onBeforeHide:e.beforeLeave,onShow:e.handleShow,onHide:e.handleHide},{content:m(()=>[e.title?(g(),u("div",{key:0,class:w(e.ns.e("title")),role:"title"},h(e.title),3)):G("",!0),b(e.$slots,"default",{},()=>[N(h(e.content),1)])]),default:m(()=>[b(e.$slots,"reference")]),_:3},8,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible","onBeforeShow","onBeforeHide","onShow","onHide"])])}const y=H(j,[["render",L]]),{action:Y}=__STORYBOOK_MODULE_ACTIONS__,{fn:K}=__STORYBOOK_MODULE_TEST__,ge={title:"Feedback/Popover",component:y,argTypes:{placement:{options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],defaultValue:"top-start"},trigger:{options:["click","hover","contextmenu"],defaultValue:"hover"}},args:{content:"this is content, this is content, this is content",width:200,title:"Title",placement:"top-start",trigger:"hover"},parameters:{docs:{description:{component:"The trigger attribute is used to define how popover is triggered: `hover`, `click`, `contextmenu`. If you want to manually control it, you can set `:visible`."}}}},z=e=>({components:{GPopover:y,GConfigProvider:$,GButton:R},setup(){return{args:e,onChange:K(Y("change"))}},template:`
      <g-config-provider>
        <div class="flex items-center justify-center gap-3 h-72 px-10">

          <g-popover v-bind="args">
            <template #reference>
              <g-button class="w-56">Action</g-button>
            </template>
          </g-popover>

        </div>
      </g-config-provider>
    `}),s=z.bind({}),be=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  return {
    components: {
      GPopover,
      GConfigProvider,
      GButton
    },
    setup() {
      return {
        args,
        onChange: fn(action('change'))
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex items-center justify-center gap-3 h-72 px-10">

          <g-popover v-bind="args">
            <template #reference>
              <g-button class="w-56">Action</g-button>
            </template>
          </g-popover>

        </div>
      </g-config-provider>
    \`
  };
}`,...s.parameters?.docs?.source}}};export{s as Default,be as __namedExportsOrder,ge as default};
