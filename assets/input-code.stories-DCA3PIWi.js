import{d as H,r as i,V as J,c as G,ai as Q,o as W,x as y,k as E,s as X,m as S,l as V,F as Z,z as ee,b as T,u as k,y as O,e as v}from"./vue.esm-bundler-zSksWcXm.js";import{a as N}from"./index-Br0BFi8U.js";import{F as q}from"./index.es-D-BNhwXn.js";import{f as te,a as ae}from"./index-ChD3B9oG.js";import{G as oe}from"./ConfigProvider-COkria8u.js";import"./v4-CtRu48qb.js";import"./index-CvPWi8JN.js";import"./index-Z55bXupt.js";import"./install-Dtu3xeh_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ne={class:"gui-input-code-wrapper"},se={class:"gui-input-code-container"},le=["onClick"],ue=["autoFocus","data-id","value","required","disabled","onFocus"],re={class:"gui-input-code-icon"},ce={key:0,class:"gui-input-code-error"},ie={name:"GInputCode"},F=H({...ie,props:{password:{type:Boolean,default:!1},textError:{type:String,default:""},hideTextError:{type:Boolean,default:!1},fields:{type:Number,default:4},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!0},iconPassword:{type:Boolean,default:!0},classInput:{type:String,default:""},classContent:{type:String,default:""}},emits:["change","complete","validate"],setup(s,{expose:D,emit:m}){const d=s,g=m,p={backspace:8,enter:13,left:37,up:38,right:39,down:40},a=i([]),u=i([]),c=i([]),r=J(d,"fields"),B=i(0),C=i(!0),b=i(0),x=i(!1),$=()=>{let e=[];if(a?.value?.length){for(let t=0;t<r.value;t++)e.push(a.value[t]||"");B.value=a.value.length>=r.value?0:a.value.length}else e=Array(r.value).fill("");u.value=[];for(let t=0;t<r.value;t++)u.value.push(t+1);a.value=e},K=G(()=>d.textError?"gui-input-code-text-error":x.value?"gui-input-code-text-success":"text-blue-3"),j=e=>!d.password||!C.value?"":e!==b.value&&!a.value[e].length?"circle":e!==b.value&&a.value[e].length?"point":"";function z(e,t){b.value=t,e.target.select(e)}function A(){b.value=-1}const M=e=>{const t=parseInt(e.target.dataset.id);e.target.value=e.target.value.replace(/[^\d]/gi,"");let l;const o=e.target.value;if(a.value=Object.assign([],a.value),e.target.value===""||!e.target.validity.valid)return I(a.value);if(o.length>1){let n=o.length+t-1;n>=r.value&&(n=r.value-1),l=u.value[n],o.split("").forEach((f,Y)=>{const P=t+Y;P<r.value&&(a.value[P]=f)})}else l=u.value[t+1],a.value[t]=o;if(l){const n=c.value[l];n.focus(),n.select()}I(a.value)},R=e=>{const t=e.clipboardData.getData("text");if(!isNaN(t)&&t.length===6){const l=t.split("");for(let o=0;o<r.value;o++)a.value[o]=l[o];c.value[r.value-1].focus()}},_=e=>{const t=parseInt(e.target.dataset.id),l=t-1,o=t+1,n=u.value[l],w=u.value[o];switch(e.keyCode){case p.backspace:{e.preventDefault();const f=[...a.value];a.value[t]?(f[t]="",a.value=f,I(f)):n&&(f[l]="",c.value[n].focus(),a.value=f,I(f));break}case p.left:e.preventDefault(),n&&c.value[n].focus();break;case p.right:e.preventDefault(),w&&c.value[w].focus();break;case p.up:case p.down:e.preventDefault();break;case p.enter:e.preventDefault(),g("validate");break}},I=(e=a.value)=>{const t=e.join("");x.value=t.length>=r.value,g("change",t),g("complete",x.value)},L=(e,t)=>{e&&(c.value[t]=e)},U=()=>{a.value=a.value.map(()=>""),c.value[1].focus()};return $(),Q(()=>{c.value=[]}),W(()=>{const e=document.querySelector('[data-id="0"]');e&&e.focus()}),D({clearValues:U}),(e,t)=>(v(),y("section",ne,[E("div",se,[E("div",{class:V([s.classContent,"gui-input-content"])},[(v(!0),y(Z,null,ee(a.value,(l,o)=>(v(),y("div",{key:o,class:V(["gui-input-item",[{password:s.password},{error:!!s.textError},{success:x.value},{disabled:s.disabled},j(o)]]),onClick:n=>c.value[o+1]?.focus()},[E("input",{ref_for:!0,ref:n=>L(n,o+1),class:V([s.classInput?s.classInput:`gui-input ${K.value}`]),type:"tel",pattern:"[0-9]+",autoFocus:o===B.value,"data-id":o,value:l,required:d.required,disabled:d.disabled,maxlength:"1",onInput:M,onFocus:n=>z(n,o),onBlur:A,onKeydown:_,onPaste:R},null,42,ue)],10,le))),128))],2),s.password&&s.iconPassword?(v(),y("div",{key:0,onClick:t[0]||(t[0]=l=>C.value=!C.value),class:"gui-input-code-password"},[C.value?(v(),T(k(q),{key:1,icon:k(ae)},null,8,["icon"])):(v(),T(k(q),{key:0,icon:k(te)},null,8,["icon"])),E("p",re,O(C.value?"Mostrar":"Ocultar"),1)])):S("",!0)]),X(e.$slots,"error",{},()=>[s.textError&&!s.hideTextError?(v(),y("p",ce,O(s.textError),1)):S("",!0)])]))}});F.__docgenInfo={exportName:"default",displayName:"InputCode",description:"",tags:{},expose:[{name:"clearValues"}],props:[{name:"password",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"textError",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"hideTextError",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fields",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"iconPassword",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"classInput",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"classContent",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"change"},{name:"complete"},{name:"validate"}],slots:[{name:"error",description:"error custom message error."}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/input-code/InputCode.vue"]};const Ie={title:"Form/Input Code",component:F,argTypes:{password:{control:{type:"boolean"},defaultValue:!1}}},de=(s,D)=>({components:{GInputCode:F,GConfigProvider:oe},setup(){const m=i(!1),d=i(""),g=G(()=>s.textError?"Error":m.value?"Completo":"Incompleto");function p(u){d.value=u,N("change")}function a(u){m.value=u,N("complete")}return{codeCompleted:m,codeOTP:d,status:g,args:s,onChangeCode:p,onComplete:a}},template:`
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
    `}),h=de.bind({});h.parameters={docs:{description:{component:""}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args, selected) => {
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
}`,...h.parameters?.docs?.source}}};const Ee=["Default"];export{h as Default,Ee as __namedExportsOrder,Ie as default};
