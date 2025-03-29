import{k as J,r as c,p as Q,c as q,B as W,o as X,l as y,n as E,z as Z,C as S,D as V,F as _,E as ee,G as T,u as w,H as O,m as v}from"./vue.esm-bundler-ENg2wqJc.js";import{a as G}from"./index-CM9FzEWq.js";import{F as N}from"./index.es-B5q-6M42.js";import{f as te,a as ae}from"./index-DDVpgGx_.js";import{G as oe}from"./ConfigProvider-C0wXp6tN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ne={class:"gui-input-code-wrapper"},se={class:"gui-input-code-container"},le=["autoFocus","data-id","value","required","disabled","onFocus"],ue={class:"gui-input-code-icon"},re={key:0,class:"gui-input-code-error"},ce={name:"GInputCode"},D=J({...ce,props:{password:{type:Boolean,default:!1},textError:{type:String,default:""},hideTextError:{type:Boolean,default:!1},fields:{type:Number,default:4},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!0},iconPassword:{type:Boolean,default:!0},classInput:{type:String,default:""},classContent:{type:String,default:""}},emits:["change","complete","validate"],setup(n,{expose:F,emit:m}){const i=n,g=m,d={backspace:8,enter:13,left:37,up:38,right:39,down:40},a=c([]),u=c([]),f=c([]),r=Q(i,"fields"),B=c(0),C=c(!0),b=c(0),x=c(!1),K=()=>{let e=[];if(a?.value?.length){for(let t=0;t<r.value;t++)e.push(a.value[t]||"");B.value=a.value.length>=r.value?0:a.value.length}else e=Array(r.value).fill("");u.value=[];for(let t=0;t<r.value;t++)u.value.push(t+1);a.value=e},$=q(()=>i.textError?"gui-input-code-text-error":x.value?"gui-input-code-text-success":"text-blue-3"),j=e=>!i.password||!C.value?"":e!==b.value&&!a.value[e].length?"circle":e!==b.value&&a.value[e].length?"point":"";function z(e,t){b.value=t,e.target.select(e)}function A(){b.value=-1}const M=e=>{const t=parseInt(e.target.dataset.id);e.target.value=e.target.value.replace(/[^\d]/gi,"");let l;const o=e.target.value;if(a.value=Object.assign([],a.value),e.target.value===""||!e.target.validity.valid)return I(a.value);if(o.length>1){let s=o.length+t-1;s>=r.value&&(s=r.value-1),l=u.value[s],o.split("").forEach((p,Y)=>{const P=t+Y;P<r.value&&(a.value[P]=p)})}else l=u.value[t+1],a.value[t]=o;if(l){const s=f.value[l];s.focus(),s.select()}I(a.value)},R=e=>{const t=e.clipboardData.getData("text");if(!isNaN(t)&&t.length===6){const l=t.split("");for(let o=0;o<r.value;o++)a.value[o]=l[o];f.value[r.value-1].focus()}},H=e=>{const t=parseInt(e.target.dataset.id),l=t-1,o=t+1,s=u.value[l],k=u.value[o];switch(e.keyCode){case d.backspace:{e.preventDefault();const p=[...a.value];a.value[t]?(p[t]="",a.value=p,I(p)):s&&(p[l]="",f.value[s].focus(),a.value=p,I(p));break}case d.left:e.preventDefault(),s&&f.value[s].focus();break;case d.right:e.preventDefault(),k&&f.value[k].focus();break;case d.up:case d.down:e.preventDefault();break;case d.enter:e.preventDefault(),g("validate");break}},I=(e=a.value)=>{const t=e.join("");x.value=t.length>=r.value,g("change",t),g("complete",x.value)},L=(e,t)=>{e&&(f.value[t]=e)},U=()=>{a.value=a.value.map(()=>"")};return K(),W(()=>{f.value=[]}),X(()=>{const e=document.querySelector('[data-id="0"]');e&&e.focus()}),F({clearValues:U}),(e,t)=>(v(),y("section",ne,[E("div",se,[E("div",{class:V([n.classContent,"gui-input-content"])},[(v(!0),y(_,null,ee(a.value,(l,o)=>(v(),y("div",{key:o,class:V(["gui-input-item",[{password:n.password},{error:!!n.textError},{success:x.value},{disabled:n.disabled},j(o)]])},[E("input",{ref_for:!0,ref:s=>L(s,o+1),class:V([n.classInput?n.classInput:`gui-input ${$.value}`]),type:"tel",pattern:"[0-9]+",autoFocus:o===B.value,"data-id":o,value:l,required:i.required,disabled:i.disabled,maxlength:"1",onInput:M,onFocus:s=>z(s,o),onBlur:A,onKeydown:H,onPaste:R},null,42,le)],2))),128))],2),n.password&&n.iconPassword?(v(),y("div",{key:0,onClick:t[0]||(t[0]=l=>C.value=!C.value),class:"gui-input-code-password"},[C.value?(v(),T(w(N),{key:1,icon:w(ae)},null,8,["icon"])):(v(),T(w(N),{key:0,icon:w(te)},null,8,["icon"])),E("p",ue,O(C.value?"Mostrar":"Ocultar"),1)])):S("",!0)]),Z(e.$slots,"error",{},()=>[n.textError&&!n.hideTextError?(v(),y("p",re,O(n.textError),1)):S("",!0)])]))}});D.__docgenInfo={exportName:"default",displayName:"InputCode",description:"",tags:{},expose:[{name:"clearValues"}],props:[{name:"password",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"textError",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"hideTextError",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fields",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"iconPassword",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"classInput",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"classContent",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"change"},{name:"complete"},{name:"validate"}],slots:[{name:"error",description:"error custom message error."}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/input-code/InputCode.vue"]};const Ce={title:"Form/Input Code",component:D,argTypes:{password:{control:{type:"boolean"},defaultValue:!1}}},ie=(n,F)=>({components:{GInputCode:D,GConfigProvider:oe},setup(){const m=c(!1),i=c(""),g=q(()=>n.textError?"Error":m.value?"Completo":"Incompleto");function d(u){i.value=u,G("change")}function a(u){m.value=u,G("complete")}return{codeCompleted:m,codeOTP:i,status:g,args:n,onChangeCode:d,onComplete:a}},template:`
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
    `}),h=ie.bind({});h.parameters={docs:{description:{component:""}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args, selected) => {
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
}`,...h.parameters?.docs?.source}}};const ye=["Default"];export{h as Default,ye as __namedExportsOrder,Ce as default};
