import{l as I,d as U,x as J,a0 as oe,r as i,c as C,X as ne,Y as X,o as T,a as V,T as se,u as k,w as ee,e as le,f as W,g as P,n as $,v as ie,y as re,F as ce,b as Y,p as de,s as q,D as pe,E as ue,Z as me,t as ve,C as F,_ as ge,i as fe,Q as be,j as ye,$ as he}from"./iframe-Dct5CHxr.js";import{u as D,a as Se}from"./index-DWhPhD7W.js";import{u as te,i as we,e as ze,f as H,c as Q}from"./useEmptyValues-BnYvcW4O.js";import{w as xe}from"./install.util-cBz1HN_T.js";import{G as A}from"./ConfigProvider-7dg58IlU.js";import"./preload-helper-Dch09mLN.js";import"./index-pMiYc9r3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x=4,Ce={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Ee=({move:a,size:c,bar:n})=>({[n.size]:c,transform:`translate${n.axis}(${a}%)`}),K=Symbol.for("scrollbarContextKey"),ke=I({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),He="Thumb",Z=U({__name:"thumb",props:ke,setup(a){const c=a,n=J(K),t=te("scrollbar");n||oe(He,"can not inject scrollbar context");const p=i(),l=i(),y=i({}),m=i(!1);let u=!1,v=!1,S=we?document.onselectstart:null;const r=C(()=>Ce[c.vertical?"vertical":"horizontal"]),o=C(()=>Ee({size:c.size,move:c.move,bar:r.value})),s=C(()=>p.value[r.value.offset]**2/n.wrapElement[r.value.scrollSize]/c.ratio/l.value[r.value.offset]),g=e=>{if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;window.getSelection()?.removeAllRanges(),z(e);const d=e.currentTarget;d&&(y.value[r.value.axis]=d[r.value.offset]-(e[r.value.client]-d.getBoundingClientRect()[r.value.direction]))},w=e=>{if(!l.value||!p.value||!n.wrapElement)return;const d=Math.abs(e.target.getBoundingClientRect()[r.value.direction]-e[r.value.client]),G=l.value[r.value.offset]/2,j=(d-G)*100*s.value/p.value[r.value.offset];n.wrapElement[r.value.scroll]=j*n.wrapElement[r.value.scrollSize]/100},z=e=>{e.stopImmediatePropagation(),u=!0,document.addEventListener("mousemove",f),document.addEventListener("mouseup",b),S=document.onselectstart,document.onselectstart=()=>!1},f=e=>{if(!p.value||!l.value||u===!1)return;const d=y.value[r.value.axis];if(!d)return;const G=(p.value.getBoundingClientRect()[r.value.direction]-e[r.value.client])*-1,j=l.value[r.value.offset]-d,ae=(G-j)*100*s.value/p.value[r.value.offset];n.wrapElement[r.value.scroll]=ae*n.wrapElement[r.value.scrollSize]/100},b=()=>{u=!1,y.value[r.value.axis]=0,document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",b),h(),v&&(m.value=!1)},M=()=>{v=!1,m.value=!!c.size},O=()=>{v=!0,m.value=u};ne(()=>{h(),document.removeEventListener("mouseup",b)});const h=()=>{document.onselectstart!==S&&(document.onselectstart=S)};return D(X(n,"scrollbarElement"),"mousemove",M),D(X(n,"scrollbarElement"),"mouseleave",O),(e,d)=>(T(),V(se,{name:k(t).b("fade")},{default:ee(()=>[le(W("div",{ref_key:"instance",ref:p,class:P([k(t).e("bar"),k(t).is(r.value.key)]),onMousedown:w},[W("div",{ref_key:"thumb",ref:l,class:P(k(t).e("thumb")),style:$(o.value),onMousedown:g},null,38)],34),[[ie,e.always||m.value]])]),_:1},8,["name"]))}}),Te=I({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),Pe=U({__name:"bar",props:Te,setup(a,{expose:c}){const n=a,t=J(K),p=i(0),l=i(0),y=i(""),m=i(""),u=i(1),v=i(1);return c({handleScroll:o=>{if(o){const s=o.offsetHeight-x,g=o.offsetWidth-x;l.value=o.scrollTop*100/s*u.value,p.value=o.scrollLeft*100/g*v.value}},update:()=>{const o=t?.wrapElement;if(!o)return;const s=o.offsetHeight-x,g=o.offsetWidth-x,w=s**2/o.scrollHeight,z=g**2/o.scrollWidth,f=Math.max(w,n.minSize),b=Math.max(z,n.minSize);u.value=w/(s-w)/(f/(s-f)),v.value=z/(g-z)/(b/(g-b)),m.value=f+x<s?`${f}px`:"",y.value=b+x<g?`${b}px`:""}}),(o,s)=>(T(),re(ce,null,[Y(Z,{move:p.value,ratio:v.value,size:y.value,always:o.always},null,8,["move","ratio","size","always"]),Y(Z,{move:l.value,ratio:u.value,size:m.value,vertical:"",always:o.always},null,8,["move","ratio","size","always"])],64))}}),Ae=I({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:de([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},tabindex:{type:[String,Number],default:void 0},id:String,role:String,...ze(["ariaLabel","ariaOrientation"])}),Le={scroll:({scrollTop:a,scrollLeft:c})=>[a,c].every(H)},Ne=["tabindex"],Re="GScrollbar",_e=U({name:Re,__name:"scrollbar",props:Ae,emits:Le,setup(a,{expose:c,emit:n}){const t=a,p=n,l=te("scrollbar");let y,m,u=0,v=0;const S=i(),r=i(),o=i(),s=i(),g=C(()=>{const e={};return t.height&&(e.height=Q(t.height)),t.maxHeight&&(e.maxHeight=Q(t.maxHeight)),[t.wrapStyle,e]}),w=C(()=>[t.wrapClass,l.e("wrap"),{[l.em("wrap","hidden-default")]:!t.native}]),z=C(()=>[l.e("view"),t.viewClass]),f=()=>{r.value&&(s.value?.handleScroll(r.value),u=r.value.scrollTop,v=r.value.scrollLeft,p("scroll",{scrollTop:r.value.scrollTop,scrollLeft:r.value.scrollLeft}))};function b(e,d){he(e)?r.value.scrollTo(e):H(e)&&H(d)&&r.value.scrollTo(e,d)}const M=e=>{H(e)&&(r.value.scrollTop=e)},O=e=>{H(e)&&(r.value.scrollLeft=e)},h=()=>{s.value?.update()};return q(()=>t.noresize,e=>{e?(y?.(),m?.()):({stop:y}=Se(o,h),m=D("resize",h))},{immediate:!0}),q(()=>[t.maxHeight,t.height],()=>{t.native||F(()=>{h(),r.value&&s.value?.handleScroll(r.value)})}),pe(K,ue({scrollbarElement:S,wrapElement:r})),me(()=>{r.value&&(r.value.scrollTop=u,r.value.scrollLeft=v)}),ve(()=>{t.native||F(()=>{h()})}),ge(()=>h()),c({wrapRef:r,update:h,scrollTo:b,setScrollTop:M,setScrollLeft:O,handleScroll:f}),(e,d)=>(T(),re("div",{ref_key:"scrollbarRef",ref:S,class:P(k(l).b())},[W("div",{ref_key:"wrapRef",ref:r,class:P(w.value),style:$(g.value),tabindex:e.tabindex,onScroll:f},[(T(),V(be(e.tag),{id:e.id,ref_key:"resizeRef",ref:o,class:P(z.value),style:$(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:ee(()=>[fe(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],46,Ne),e.native?ye("",!0):(T(),V(Pe,{key:0,ref_key:"barRef",ref:s,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}}),E=xe(_e),De={title:"Basic/Scrollbar",component:E,parameters:{docs:{description:{component:"Componente personalizado de scrollbar que proporciona una barra de desplazamiento personalizable."}}},argTypes:{height:{description:"Altura del contenedor del scrollbar",control:"text",table:{type:{summary:"string | number"}}},maxHeight:{description:"Altura máxima del contenedor del scrollbar",control:"text",table:{type:{summary:"string | number"}}},native:{description:"Usa la barra de desplazamiento nativa del navegador",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},wrapStyle:{description:"Estilos personalizados para el contenedor envolvente",control:"object",table:{type:{summary:"StyleValue"}}},wrapClass:{description:"Clase personalizada para el contenedor envolvente",control:"text",table:{type:{summary:"string"}}},viewClass:{description:"Clase personalizada para la vista del contenido",control:"text",table:{type:{summary:"string"}}},noresize:{description:"No responder a cambios de tamaño del contenedor",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},tag:{description:"Elemento HTML usado para el contenedor de la vista",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"div"}}},always:{description:"Mostrar siempre la barra de desplazamiento",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},minSize:{description:"Tamaño mínimo de la barra de desplazamiento",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"20"}}},role:{description:"Atributo ARIA role",control:"text",table:{type:{summary:"string"}}},ariaLabel:{description:"Etiqueta ARIA para accesibilidad",control:"text",table:{type:{summary:"string"}}},ariaOrientation:{description:"Orientación ARIA (horizontal/vertical)",control:"select",options:["horizontal","vertical",void 0],table:{type:{summary:"string"}}},onScroll:{description:"Se emite cuando ocurre el evento de scroll",table:{type:{summary:"{ scrollTop: number, scrollLeft: number }"},category:"events"}},default:{description:"Contenido dentro del scrollbar",table:{type:{summary:"slot"},category:"slots"}}},args:{height:"",maxHeight:"",native:!1,noresize:!1,tag:"div",always:!1,minSize:20}},L={render:a=>({components:{GScrollbar:E,GConfigProvider:A},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 300px">
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Contenido de ejemplo para el scrollbar
          </div>
        </g-scrollbar>
      </g-config-provider>
    `}),args:{}},N={parameters:{docs:{description:{story:"Usa la barra de desplazamiento nativa del navegador en lugar de la personalizada."}}},render:a=>({components:{GScrollbar:E,GConfigProvider:A},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 300px" native>
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Contenido con scrollbar nativo
          </div>
        </g-scrollbar>
      </g-config-provider>
    `}),args:{native:!0}},R={parameters:{docs:{description:{story:"Ejemplo de scroll horizontal con contenido ancho."}}},render:a=>({components:{GScrollbar:E,GConfigProvider:A},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 100px; width: 300px">
          <div style="width: 800px; white-space: nowrap;">
            <div v-for="item in 20" :key="item" style="display: inline-block; padding: 12px;">
              Item {{ item }}
            </div>
          </div>
        </g-scrollbar>
      </g-config-provider>
    `}),args:{}},_={parameters:{docs:{description:{story:"Muestra siempre las barras de desplazamiento incluso cuando no son necesarias."}}},render:a=>({components:{GScrollbar:E,GConfigProvider:A},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 300px" always>
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Barras siempre visibles
          </div>
        </g-scrollbar>
      </g-config-provider>
    `}),args:{always:!0}},B={parameters:{docs:{description:{story:"Ejemplo con altura personalizada usando la prop height."}}},render:a=>({components:{GScrollbar:E,GConfigProvider:A},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-scrollbar v-bind="args" height="200px">
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Contenido en contenedor de 200px de alto
          </div>
        </g-scrollbar>
      </g-config-provider>
    `}),args:{height:"200px"}},Ie=["Primary","NativeScrollbar","HorizontalScroll","AlwaysVisible","CustomHeight"];L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Usa la barra de desplazamiento nativa del navegador en lugar de la personalizada.'
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
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de scroll horizontal con contenido ancho.'
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
}`,...R.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Muestra siempre las barras de desplazamiento incluso cuando no son necesarias.'
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
}`,..._.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con altura personalizada usando la prop height.'
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
    height: '200px'
  }
}`,...B.parameters?.docs?.source}}};export{_ as AlwaysVisible,B as CustomHeight,R as HorizontalScroll,N as NativeScrollbar,L as Primary,Ie as __namedExportsOrder,De as default};
