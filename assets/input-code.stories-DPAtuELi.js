import{d as J,r as c,V as Q,c as G,af as W,o as X,x as y,k as E,s as Z,m as S,l as V,F as _,z as ee,b as T,u as w,y as O,e as v}from"./vue.esm-bundler-C43JrhH2.js";import{a as N}from"./index-Br0BFi8U.js";import{F as q}from"./index.es-C2QpDZT9.js";import{f as te,a as ae}from"./index-DVmIhHla.js";import{G as oe}from"./ConfigProvider-Br84NlF7.js";import"./v4-CtRu48qb.js";import"./index-CvPWi8JN.js";import"./index-D5bIuBCX.js";import"./install-CfJGiCvs.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ne={class:"gui-input-code-wrapper"},se={class:"gui-input-code-container"},le=["autoFocus","data-id","value","required","disabled","onFocus"],re={class:"gui-input-code-icon"},ue={key:0,class:"gui-input-code-error"},ce={name:"GInputCode"},F=J({...ce,props:{password:{type:Boolean,default:!1},textError:{type:String,default:""},hideTextError:{type:Boolean,default:!1},fields:{type:Number,default:4},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!0},iconPassword:{type:Boolean,default:!0},classInput:{type:String,default:""},classContent:{type:String,default:""}},emits:["change","complete","validate"],setup(n,{expose:D,emit:m}){const i=n,g=m,d={backspace:8,enter:13,left:37,up:38,right:39,down:40},a=c([]),r=c([]),p=c([]),u=Q(i,"fields"),B=c(0),C=c(!0),b=c(0),x=c(!1),K=()=>{let e=[];if(a?.value?.length){for(let t=0;t<u.value;t++)e.push(a.value[t]||"");B.value=a.value.length>=u.value?0:a.value.length}else e=Array(u.value).fill("");r.value=[];for(let t=0;t<u.value;t++)r.value.push(t+1);a.value=e},$=G(()=>i.textError?"gui-input-code-text-error":x.value?"gui-input-code-text-success":"text-blue-3"),j=e=>!i.password||!C.value?"":e!==b.value&&!a.value[e].length?"circle":e!==b.value&&a.value[e].length?"point":"";function z(e,t){b.value=t,e.target.select(e)}function A(){b.value=-1}const M=e=>{const t=parseInt(e.target.dataset.id);e.target.value=e.target.value.replace(/[^\d]/gi,"");let l;const o=e.target.value;if(a.value=Object.assign([],a.value),e.target.value===""||!e.target.validity.valid)return I(a.value);if(o.length>1){let s=o.length+t-1;s>=u.value&&(s=u.value-1),l=r.value[s],o.split("").forEach((f,H)=>{const P=t+H;P<u.value&&(a.value[P]=f)})}else l=r.value[t+1],a.value[t]=o;if(l){const s=p.value[l];s.focus(),s.select()}I(a.value)},R=e=>{const t=e.clipboardData.getData("text");if(!isNaN(t)&&t.length===6){const l=t.split("");for(let o=0;o<u.value;o++)a.value[o]=l[o];p.value[u.value-1].focus()}},L=e=>{const t=parseInt(e.target.dataset.id),l=t-1,o=t+1,s=r.value[l],k=r.value[o];switch(e.keyCode){case d.backspace:{e.preventDefault();const f=[...a.value];a.value[t]?(f[t]="",a.value=f,I(f)):s&&(f[l]="",p.value[s].focus(),a.value=f,I(f));break}case d.left:e.preventDefault(),s&&p.value[s].focus();break;case d.right:e.preventDefault(),k&&p.value[k].focus();break;case d.up:case d.down:e.preventDefault();break;case d.enter:e.preventDefault(),g("validate");break}},I=(e=a.value)=>{const t=e.join("");x.value=t.length>=u.value,g("change",t),g("complete",x.value)},U=(e,t)=>{e&&(p.value[t]=e)},Y=()=>{a.value=a.value.map(()=>""),p.value[1].focus()};return K(),W(()=>{p.value=[]}),X(()=>{const e=document.querySelector('[data-id="0"]');e&&e.focus()}),D({clearValues:Y}),(e,t)=>(v(),y("section",ne,[E("div",se,[E("div",{class:V([n.classContent,"gui-input-content"])},[(v(!0),y(_,null,ee(a.value,(l,o)=>(v(),y("div",{key:o,class:V(["gui-input-item",[{password:n.password},{error:!!n.textError},{success:x.value},{disabled:n.disabled},j(o)]])},[E("input",{ref_for:!0,ref:s=>U(s,o+1),class:V([n.classInput?n.classInput:`gui-input ${$.value}`]),type:"tel",pattern:"[0-9]+",autoFocus:o===B.value,"data-id":o,value:l,required:i.required,disabled:i.disabled,maxlength:"1",onInput:M,onFocus:s=>z(s,o),onBlur:A,onKeydown:L,onPaste:R},null,42,le)],2))),128))],2),n.password&&n.iconPassword?(v(),y("div",{key:0,onClick:t[0]||(t[0]=l=>C.value=!C.value),class:"gui-input-code-password"},[C.value?(v(),T(w(q),{key:1,icon:w(ae)},null,8,["icon"])):(v(),T(w(q),{key:0,icon:w(te)},null,8,["icon"])),E("p",re,O(C.value?"Mostrar":"Ocultar"),1)])):S("",!0)]),Z(e.$slots,"error",{},()=>[n.textError&&!n.hideTextError?(v(),y("p",ue,O(n.textError),1)):S("",!0)])]))}});F.__docgenInfo={exportName:"default",displayName:"InputCode",description:"",tags:{},expose:[{name:"clearValues"}],props:[{name:"password",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"textError",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"hideTextError",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fields",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"iconPassword",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"classInput",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"classContent",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"change"},{name:"complete"},{name:"validate"}],slots:[{name:"error",description:"error custom message error."}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/input-code/InputCode.vue"]};const xe={title:"Form/Input Code",component:F,argTypes:{password:{control:{type:"boolean"},defaultValue:!1}}},ie=(n,D)=>({components:{GInputCode:F,GConfigProvider:oe},setup(){const m=c(!1),i=c(""),g=G(()=>n.textError?"Error":m.value?"Completo":"Incompleto");function d(r){i.value=r,N("change")}function a(r){m.value=r,N("complete")}return{codeCompleted:m,codeOTP:i,status:g,args:n,onChangeCode:d,onComplete:a}},template:`
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
}`,...h.parameters?.docs?.source}}};const Ie=["Default"];export{h as Default,Ie as __namedExportsOrder,xe as default};
