import{d as D,r as i,c as C,C as se,V as q,b as V,T as le,u as E,f as Z,a as ee,e as T,j as ie,v as ce,k as I,n as W,l as N,x as te,F as de,h as X,w as Y,E as pe,H as me,S as ue,o as ve,D as J,U as ge,m as fe,P as be,a8 as ye,s as he}from"./vue.esm-bundler-C43JrhH2.js";import{u as U,a as Se}from"./index-BDKGuxIf.js";import{b as F,d as we,w as ze}from"./install-CfJGiCvs.js";import{u as re,a as xe,e as H}from"./index-D5bIuBCX.js";import{t as Ce}from"./error-Cq9Fpw4b.js";import{u as ke}from"./index-CdSB2Bdf.js";import{b as Q}from"./style-c1qAcfu9.js";import{G as P}from"./ConfigProvider-Br84NlF7.js";import"./index-DmfABaPz.js";import"./_arrayPush-BhjrZnJY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x=4,Ee={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},He=({move:a,size:c,bar:n})=>({[n.size]:c,transform:`translate${n.axis}(${a}%)`}),K=Symbol("scrollbarContextKey"),Te=F({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Ne="Thumb",$=D({__name:"thumb",props:Te,setup(a){const c=a,n=ee(K),r=re("scrollbar");n||Ce(Ne,"can not inject scrollbar context");const p=i(),l=i(),y=i({}),u=i(!1);let m=!1,v=!1,S=xe?document.onselectstart:null;const t=C(()=>Ee[c.vertical?"vertical":"horizontal"]),o=C(()=>He({size:c.size,move:c.move,bar:t.value})),s=C(()=>p.value[t.value.offset]**2/n.wrapElement[t.value.scrollSize]/c.ratio/l.value[t.value.offset]),g=e=>{if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;window.getSelection()?.removeAllRanges(),z(e);const d=e.currentTarget;d&&(y.value[t.value.axis]=d[t.value.offset]-(e[t.value.client]-d.getBoundingClientRect()[t.value.direction]))},w=e=>{if(!l.value||!p.value||!n.wrapElement)return;const d=Math.abs(e.target.getBoundingClientRect()[t.value.direction]-e[t.value.client]),G=l.value[t.value.offset]/2,j=(d-G)*100*s.value/p.value[t.value.offset];n.wrapElement[t.value.scroll]=j*n.wrapElement[t.value.scrollSize]/100},z=e=>{e.stopImmediatePropagation(),m=!0,document.addEventListener("mousemove",f),document.addEventListener("mouseup",b),S=document.onselectstart,document.onselectstart=()=>!1},f=e=>{if(!p.value||!l.value||m===!1)return;const d=y.value[t.value.axis];if(!d)return;const G=(p.value.getBoundingClientRect()[t.value.direction]-e[t.value.client])*-1,j=l.value[t.value.offset]-d,ne=(G-j)*100*s.value/p.value[t.value.offset];n.wrapElement[t.value.scroll]=ne*n.wrapElement[t.value.scrollSize]/100},b=()=>{m=!1,y.value[t.value.axis]=0,document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",b),h(),v&&(u.value=!1)},M=()=>{v=!1,u.value=!!c.size},O=()=>{v=!0,u.value=m};se(()=>{h(),document.removeEventListener("mouseup",b)});const h=()=>{document.onselectstart!==S&&(document.onselectstart=S)};return U(q(n,"scrollbarElement"),"mousemove",M),U(q(n,"scrollbarElement"),"mouseleave",O),(e,d)=>(T(),V(le,{name:E(r).b("fade")},{default:Z(()=>[ie(I("div",{ref_key:"instance",ref:p,class:N([E(r).e("bar"),E(r).is(t.value.key)]),onMousedown:w},[I("div",{ref_key:"thumb",ref:l,class:N(E(r).e("thumb")),style:W(o.value),onMousedown:g},null,38)],34),[[ce,e.always||u.value]])]),_:1},8,["name"]))}});$.__docgenInfo={exportName:"default",displayName:"thumb",description:"",tags:{},sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/scrollbar/src/thumb.vue"]};const Pe=F({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),ae=D({__name:"bar",props:Pe,setup(a,{expose:c}){const n=a,r=ee(K),p=i(0),l=i(0),y=i(""),u=i(""),m=i(1),v=i(1);return c({handleScroll:o=>{if(o){const s=o.offsetHeight-x,g=o.offsetWidth-x;l.value=o.scrollTop*100/s*m.value,p.value=o.scrollLeft*100/g*v.value}},update:()=>{const o=r?.wrapElement;if(!o)return;const s=o.offsetHeight-x,g=o.offsetWidth-x,w=s**2/o.scrollHeight,z=g**2/o.scrollWidth,f=Math.max(w,n.minSize),b=Math.max(z,n.minSize);m.value=w/(s-w)/(f/(s-f)),v.value=z/(g-z)/(b/(g-b)),u.value=f+x<s?`${f}px`:"",y.value=b+x<g?`${b}px`:""}}),(o,s)=>(T(),te(de,null,[X($,{move:p.value,ratio:v.value,size:y.value,always:o.always},null,8,["move","ratio","size","always"]),X($,{move:l.value,ratio:m.value,size:u.value,vertical:"",always:o.always},null,8,["move","ratio","size","always"])],64))}});ae.__docgenInfo={exportName:"default",displayName:"bar",description:"",tags:{},expose:[{name:"handleScroll"},{name:"update"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/scrollbar/src/bar.vue"]};const _e=F({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:we([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},tabindex:{type:[String,Number],default:void 0},id:String,role:String,...ke(["ariaLabel","ariaOrientation"])}),Le={scroll:({scrollTop:a,scrollLeft:c})=>[a,c].every(H)},Ae=["tabindex"],Re="GScrollbar",oe=D({name:Re,__name:"scrollbar",props:_e,emits:Le,setup(a,{expose:c,emit:n}){const r=a,p=n,l=re("scrollbar");let y,u,m=0,v=0;const S=i(),t=i(),o=i(),s=i(),g=C(()=>{const e={};return r.height&&(e.height=Q(r.height)),r.maxHeight&&(e.maxHeight=Q(r.maxHeight)),[r.wrapStyle,e]}),w=C(()=>[r.wrapClass,l.e("wrap"),{[l.em("wrap","hidden-default")]:!r.native}]),z=C(()=>[l.e("view"),r.viewClass]),f=()=>{t.value&&(s.value?.handleScroll(t.value),m=t.value.scrollTop,v=t.value.scrollLeft,p("scroll",{scrollTop:t.value.scrollTop,scrollLeft:t.value.scrollLeft}))};function b(e,d){ye(e)?t.value.scrollTo(e):H(e)&&H(d)&&t.value.scrollTo(e,d)}const M=e=>{H(e)&&(t.value.scrollTop=e)},O=e=>{H(e)&&(t.value.scrollLeft=e)},h=()=>{s.value?.update()};return Y(()=>r.noresize,e=>{e?(y?.(),u?.()):({stop:y}=Se(o,h),u=U("resize",h))},{immediate:!0}),Y(()=>[r.maxHeight,r.height],()=>{r.native||J(()=>{h(),t.value&&s.value?.handleScroll(t.value)})}),pe(K,me({scrollbarElement:S,wrapElement:t})),ue(()=>{t.value&&(t.value.scrollTop=m,t.value.scrollLeft=v)}),ve(()=>{r.native||J(()=>{h()})}),ge(()=>h()),c({wrapRef:t,update:h,scrollTo:b,setScrollTop:M,setScrollLeft:O,handleScroll:f}),(e,d)=>(T(),te("div",{ref_key:"scrollbarRef",ref:S,class:N(E(l).b())},[I("div",{ref_key:"wrapRef",ref:t,class:N(w.value),style:W(g.value),tabindex:e.tabindex,onScroll:f},[(T(),V(be(e.tag),{id:e.id,ref_key:"resizeRef",ref:o,class:N(z.value),style:W(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:Z(()=>[he(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],46,Ae),e.native?fe("",!0):(T(),V(ae,{key:0,ref_key:"barRef",ref:s,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}});oe.__docgenInfo={exportName:"default",displayName:"scrollbar",description:"",tags:{},expose:[{name:"wrapRef",tags:[{title:"description",content:"scrollbar wrap ref"}]},{name:"update",tags:[{title:"description",content:"update scrollbar state manually"}]},{name:"scrollTo",tags:[{title:"description",content:"scrolls to a particular set of coordinates"}]},{name:"setScrollTop",tags:[{title:"description",content:"set distance to scroll top"}]},{name:"setScrollLeft",tags:[{title:"description",content:"set distance to scroll left"}]},{name:"handleScroll",tags:[{title:"description",content:"handle scroll event"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/scrollbar/src/scrollbar.vue"]};const k=ze(oe),Fe={title:"Basic/Scrollbar",component:k,parameters:{docs:{description:{component:"Componente personalizado de scrollbar que proporciona una barra de desplazamiento personalizable."}}},argTypes:{height:{description:"Altura del contenedor del scrollbar",control:"text",table:{type:{summary:"string | number"}}},maxHeight:{description:"Altura máxima del contenedor del scrollbar",control:"text",table:{type:{summary:"string | number"}}},native:{description:"Usa la barra de desplazamiento nativa del navegador",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},wrapStyle:{description:"Estilos personalizados para el contenedor envolvente",control:"object",table:{type:{summary:"StyleValue"}}},wrapClass:{description:"Clase personalizada para el contenedor envolvente",control:"text",table:{type:{summary:"string"}}},viewClass:{description:"Clase personalizada para la vista del contenido",control:"text",table:{type:{summary:"string"}}},noresize:{description:"No responder a cambios de tamaño del contenedor",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},tag:{description:"Elemento HTML usado para el contenedor de la vista",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"div"}}},always:{description:"Mostrar siempre la barra de desplazamiento",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},minSize:{description:"Tamaño mínimo de la barra de desplazamiento",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"20"}}},role:{description:"Atributo ARIA role",control:"text",table:{type:{summary:"string"}}},ariaLabel:{description:"Etiqueta ARIA para accesibilidad",control:"text",table:{type:{summary:"string"}}},ariaOrientation:{description:"Orientación ARIA (horizontal/vertical)",control:"select",options:["horizontal","vertical",void 0],table:{type:{summary:"string"}}},onScroll:{description:"Se emite cuando ocurre el evento de scroll",table:{type:{summary:"{ scrollTop: number, scrollLeft: number }"},category:"events"}},default:{description:"Contenido dentro del scrollbar",table:{type:{summary:"slot"},category:"slots"}}},args:{height:"",maxHeight:"",native:!1,noresize:!1,tag:"div",always:!1,minSize:20}},_={render:a=>({components:{GScrollbar:k,GConfigProvider:P},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 300px">
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Contenido de ejemplo para el scrollbar
          </div>
        </g-scrollbar>
      </g-config-provider>
    `}),args:{}},L={parameters:{docs:{description:{story:"Usa la barra de desplazamiento nativa del navegador en lugar de la personalizada."}}},render:a=>({components:{GScrollbar:k,GConfigProvider:P},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 300px" native>
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Contenido con scrollbar nativo
          </div>
        </g-scrollbar>
      </g-config-provider>
    `}),args:{native:!0}},A={parameters:{docs:{description:{story:"Ejemplo de scroll horizontal con contenido ancho."}}},render:a=>({components:{GScrollbar:k,GConfigProvider:P},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 100px; width: 300px">
          <div style="width: 800px; white-space: nowrap;">
            <div v-for="item in 20" :key="item" style="display: inline-block; padding: 12px;">
              Item {{ item }}
            </div>
          </div>
        </g-scrollbar>
      </g-config-provider>
    `}),args:{}},R={parameters:{docs:{description:{story:"Muestra siempre las barras de desplazamiento incluso cuando no son necesarias."}}},render:a=>({components:{GScrollbar:k,GConfigProvider:P},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 300px" always>
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Barras siempre visibles
          </div>
        </g-scrollbar>
      </g-config-provider>
    `}),args:{always:!0}},B={parameters:{docs:{description:{story:"Ejemplo con altura personalizada usando la prop height."}}},render:a=>({components:{GScrollbar:k,GConfigProvider:P},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-scrollbar v-bind="args" height="200px">
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Contenido en contenedor de 200px de alto
          </div>
        </g-scrollbar>
      </g-config-provider>
    `}),args:{height:"200px"}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      GScrollbar,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 300px">
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Contenido de ejemplo para el scrollbar
          </div>
        </g-scrollbar>
      </g-config-provider>
    \`
  }),
  args: {}
}`,..._.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Usa la barra de desplazamiento nativa del navegador en lugar de la personalizada."
      }
    }
  },
  render: args => ({
    components: {
      GScrollbar,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 300px" native>
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Contenido con scrollbar nativo
          </div>
        </g-scrollbar>
      </g-config-provider>
    \`
  }),
  args: {
    native: true
  }
}`,...L.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Ejemplo de scroll horizontal con contenido ancho."
      }
    }
  },
  render: args => ({
    components: {
      GScrollbar,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 100px; width: 300px">
          <div style="width: 800px; white-space: nowrap;">
            <div v-for="item in 20" :key="item" style="display: inline-block; padding: 12px;">
              Item {{ item }}
            </div>
          </div>
        </g-scrollbar>
      </g-config-provider>
    \`
  }),
  args: {}
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Muestra siempre las barras de desplazamiento incluso cuando no son necesarias."
      }
    }
  },
  render: args => ({
    components: {
      GScrollbar,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 300px" always>
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Barras siempre visibles
          </div>
        </g-scrollbar>
      </g-config-provider>
    \`
  }),
  args: {
    always: true
  }
}`,...R.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Ejemplo con altura personalizada usando la prop height."
      }
    }
  },
  render: args => ({
    components: {
      GScrollbar,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-scrollbar v-bind="args" height="200px">
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Contenido en contenedor de 200px de alto
          </div>
        </g-scrollbar>
      </g-config-provider>
    \`
  }),
  args: {
    height: "200px"
  }
}`,...B.parameters?.docs?.source}}};const Ke=["Primary","NativeScrollbar","HorizontalScroll","AlwaysVisible","CustomHeight"];export{R as AlwaysVisible,B as CustomHeight,A as HorizontalScroll,L as NativeScrollbar,_ as Primary,Ke as __namedExportsOrder,Fe as default};
