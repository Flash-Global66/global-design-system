import{d as H,r as c,Y as J,c as V,al as Q,t as W,y as h,f as k,g as D,F as X,A as Z,a as F,u as P,z as S,j as T,i as ee,o as v}from"./iframe-Dct5CHxr.js";import{R as G}from"./index-1T7U7QlS.js";import{G as te}from"./ConfigProvider-7dg58IlU.js";import"./preload-helper-Dch09mLN.js";import"./install.util-cBz1HN_T.js";import"./useEmptyValues-BnYvcW4O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ne={class:"gui-input-code-wrapper"},oe={class:"gui-input-code-container"},ae=["onClick"],se=["autoFocus","data-id","value","required","disabled","onFocus"],le={class:"gui-input-code-icon"},re={key:0,class:"gui-input-code-error"},ue={name:"GInputCode"},_=H({...ue,props:{password:{type:Boolean,default:!1},textError:{type:String,default:""},hideTextError:{type:Boolean,default:!1},fields:{type:Number,default:4},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!0},iconPassword:{type:Boolean,default:!0},classInput:{type:String,default:""},classContent:{type:String,default:""}},emits:["change","complete","validate"],setup(s,{expose:g,emit:x}){const p=s,m=x,i={backspace:8,enter:13,left:37,up:38,right:39,down:40},n=c([]),f=c([]),u=c([]),r=J(p,"fields"),O=c(0),C=c(!0),b=c(0),I=c(!1),q=()=>{let e=[];if(n?.value?.length){for(let t=0;t<r.value;t++)e.push(n.value[t]||"");O.value=n.value.length>=r.value?0:n.value.length}else e=Array(r.value).fill("");f.value=[];for(let t=0;t<r.value;t++)f.value.push(t+1);n.value=e},R=V(()=>p.textError?"gui-input-code-text-error":I.value?"gui-input-code-text-success":"text-blue-3"),K=e=>!p.password||!C.value?"":e!==b.value&&!n.value[e].length?"circle":e!==b.value&&n.value[e].length?"point":"";function $(e,t){b.value=t,e.target.select(e)}function j(){b.value=-1}const A=e=>{const t=parseInt(e.target.dataset.id);e.target.value=e.target.value.replace(/[^\d]/gi,"");let l;const o=e.target.value;if(n.value=Object.assign([],n.value),e.target.value===""||!e.target.validity.valid)return E(n.value);if(o.length>1){let a=o.length+t-1;a>=r.value&&(a=r.value-1),l=f.value[a],o.split("").forEach((d,U)=>{const B=t+U;B<r.value&&(n.value[B]=d)})}else l=f.value[t+1],n.value[t]=o;if(l){const a=u.value[l];a.focus(),a.select()}E(n.value)},M=e=>{const t=e.clipboardData.getData("text");if(!isNaN(t)&&t.length===6){const l=t.split("");for(let o=0;o<r.value;o++)n.value[o]=l[o];u.value[r.value-1].focus()}},Y=e=>{const t=parseInt(e.target.dataset.id),l=t-1,o=t+1,a=f.value[l],w=f.value[o];switch(e.keyCode){case i.backspace:{e.preventDefault();const d=[...n.value];n.value[t]?(d[t]="",n.value=d,E(d)):a&&(d[l]="",u.value[a].focus(),n.value=d,E(d));break}case i.left:e.preventDefault(),a&&u.value[a].focus();break;case i.right:e.preventDefault(),w&&u.value[w].focus();break;case i.up:case i.down:e.preventDefault();break;case i.enter:e.preventDefault(),m("validate");break}},E=(e=n.value)=>{const t=e.join("");I.value=t.length>=r.value,m("change",t),m("complete",I.value)},z=(e,t)=>{e&&(u.value[t]=e)},L=()=>{n.value=n.value.map(()=>""),u.value[1].focus()};return q(),Q(()=>{u.value=[]}),W(()=>{const e=document.querySelector('[data-id="0"]');e&&e.focus()}),g({clearValues:L}),(e,t)=>(v(),h("section",ne,[k("div",oe,[k("div",{class:D([s.classContent,"gui-input-content"])},[(v(!0),h(X,null,Z(n.value,(l,o)=>(v(),h("div",{key:o,class:D(["gui-input-item",[{password:s.password},{error:!!s.textError},{success:I.value},{disabled:s.disabled},K(o)]]),onClick:a=>u.value[o+1]?.focus()},[k("input",{ref_for:!0,ref:a=>z(a,o+1),class:D([s.classInput?s.classInput:`gui-input ${R.value}`]),type:"tel",pattern:"[0-9]+",autoFocus:o===O.value,"data-id":o,value:l,required:p.required,disabled:p.disabled,maxlength:"1",onInput:A,onFocus:a=>$(a,o),onBlur:j,onKeydown:Y,onPaste:M},null,42,se)],10,ae))),128))],2),s.password&&s.iconPassword?(v(),h("div",{key:0,onClick:t[0]||(t[0]=l=>C.value=!C.value),class:"gui-input-code-password"},[C.value?(v(),F(P(G),{key:1,name:"solid eye-slash"})):(v(),F(P(G),{key:0,name:"solid eye"})),k("p",le,S(C.value?"Mostrar":"Ocultar"),1)])):T("",!0)]),ee(e.$slots,"error",{},()=>[s.textError&&!s.hideTextError?(v(),h("p",re,S(s.textError),1)):T("",!0)])]))}}),{action:N}=__STORYBOOK_MODULE_ACTIONS__,Ce={title:"Form/Input Code",component:_,argTypes:{password:{control:{type:"boolean"},defaultValue:!1}}},ce=s=>({components:{GInputCode:_,GConfigProvider:te},setup(){const g=c(!1),x=c(""),p=V(()=>s.textError?"Error":g.value?"Completo":"Incompleto");function m(n){x.value=n,N("change")}function i(n){g.value=n,N("complete")}return{codeCompleted:g,codeOTP:x,status:p,args:s,onChangeCode:m,onComplete:i}},template:`
      <g-config-provider>
        <div class="flex items-center flex-col">
          <p class="text-center mb-4 text-gray-2">Estado: {{ status }}</p>
          <g-input-code
            v-bind="args"
            @complete="onComplete"
            @change="onChangeCode"
          />
        </div>
      </g-config-provider>
    `}),y=ce.bind({});y.parameters={docs:{description:{component:""}}};const he=["Default"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  return {
    components: {
      GInputCode,
      GConfigProvider
    },
    setup() {
      const codeCompleted = ref(false);
      const codeOTP = ref('');
      const status = computed(() => {
        if (!!args.textError) return 'Error';
        if (codeCompleted.value) return 'Completo';
        return 'Incompleto';
      });
      function onChangeCode(code: string) {
        codeOTP.value = code;
        action('change');
      }
      function onComplete(e: boolean) {
        codeCompleted.value = e;
        action('complete');
      }
      return {
        codeCompleted,
        codeOTP,
        status,
        args,
        onChangeCode,
        onComplete
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex items-center flex-col">
          <p class="text-center mb-4 text-gray-2">Estado: {{ status }}</p>
          <g-input-code
            v-bind="args"
            @complete="onComplete"
            @change="onChangeCode"
          />
        </div>
      </g-config-provider>
    \`
  };
}`,...y.parameters?.docs?.source}}};export{y as Default,he as __namedExportsOrder,Ce as default};
