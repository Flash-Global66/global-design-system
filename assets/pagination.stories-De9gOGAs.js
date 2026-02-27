import{d as T,c as p,x as C,h as Y,u as c,l as S,e as v,r as y,B as te,m as D,b as L,F as ne,z as re,y as W,a2 as oe,g as se,w as X,E as ie,I as A}from"./vue.esm-bundler-C43JrhH2.js";import{F as G}from"./index-B1PxvDbZ.js";import{b as _,w as le}from"./install-CfJGiCvs.js";import{u as $,e as w}from"./index-D5bIuBCX.js";import{C as H}from"./event-BB_Ol6Sd.js";import{a as ue,G as R}from"./ConfigProvider-Br84NlF7.js";import{G as de}from"./index-1xDgUv1h.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./error-Cq9Fpw4b.js";import"./index-DH2w0SzE.js";import"./index-fhkPmQjX.js";import"./index-DmfABaPz.js";import"./_arrayPush-BhjrZnJY.js";const ce=Symbol("gPaginationKey"),ge=_({disabled:Boolean,currentPage:{type:Number,default:1}}),pe={click:e=>e instanceof MouseEvent},me=["disabled","aria-disabled"],Z=T({name:"GPaginationPrev",__name:"prev",props:ge,emits:pe,setup(e){const s=e,t=$("pagination"),l=p(()=>s.disabled||s.currentPage<=1);return(i,d)=>(v(),C("button",{type:"button",class:S(c(t).e("btn-prev")),disabled:l.value,"aria-label":"previous","aria-disabled":l.value,onClick:d[0]||(d[0]=m=>i.$emit("click",m))},[Y(c(G),{name:"regular angle-left"})],10,me))}});Z.__docgenInfo={name:"GPaginationPrev",exportName:"default",displayName:"prev",description:"",tags:{},events:[{name:"click"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/pagination/src/components/prev.vue"]};const ve=_({disabled:Boolean,currentPage:{type:Number,default:1},pageCount:{type:Number,default:50}}),fe=["disabled","aria-disabled"],ee=T({name:"GPaginationNext",__name:"next",props:ve,emits:["click"],setup(e){const s=e,t=$("pagination"),l=p(()=>s.disabled||s.currentPage===s.pageCount||s.pageCount===0);return(i,d)=>(v(),C("button",{type:"button",class:S(c(t).e("btn-next")),disabled:l.value,"aria-label":"next","aria-disabled":l.value,onClick:d[0]||(d[0]=m=>i.$emit("click",m))},[Y(c(G),{name:"regular angle-right"})],10,fe))}});ee.__docgenInfo={name:"GPaginationNext",exportName:"default",displayName:"next",description:"",tags:{},events:[{name:"click"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/pagination/src/components/next.vue"]};const be=_({currentPage:{type:Number,default:1},pageCount:{type:Number,required:!0},pagerCount:{type:Number,default:7},disabled:Boolean}),ye=["aria-current","tabindex"],Pe=["tabindex"],Ce=["aria-current","aria-label","tabindex"],xe=["tabindex","aria-label"],he=["aria-current","aria-label","tabindex"],ae=T({name:"GPaginationPager",__name:"pager",props:be,emits:[H],setup(e,{emit:s}){const t=e,l=s,i=$("pager"),d=$("icon"),m=y(!1),x=y(!1),M=y(!1),I=y(!1),z=y(!1),f=y(!1),u=p(()=>{const a=t.pagerCount,n=(a-1)/2,r=Number(t.currentPage),h=Number(t.pageCount);let N=!1,E=!1;h>a&&(r>a-n&&(N=!0),r<h-n&&(E=!0));const V=[];if(N&&!E){const b=h-(a-2);for(let j=b;j<h;j++)V.push(j)}else if(!N&&E)for(let b=2;b<a;b++)V.push(b);else if(N&&E){const b=Math.floor(a/2)-1;for(let j=r-b;j<=r+b;j++)V.push(j)}else for(let b=2;b<h;b++)V.push(b);return V}),q=p(()=>["more","btn-quickprev",d.b(),i.is("disabled",t.disabled)]),Q=p(()=>["more","btn-quicknext",d.b(),i.is("disabled",t.disabled)]),k=p(()=>t.disabled?-1:0);te(()=>{const a=(t.pagerCount-1)/2;m.value=!1,x.value=!1,t.pageCount>t.pagerCount&&(t.currentPage>t.pagerCount-a&&(m.value=!0),t.currentPage<t.pageCount-a&&(x.value=!0))});function F(a=!1){t.disabled||(a?M.value=!0:I.value=!0)}function B(a=!1){a?z.value=!0:f.value=!0}function o(a){const n=a.target;if(n.tagName.toLowerCase()==="li"&&Array.from(n.classList).includes("number")){const r=Number(n.textContent);r!==t.currentPage&&l(H,r)}else n.tagName.toLowerCase()==="li"&&Array.from(n.classList).includes("more")&&g(a)}function g(a){const n=a.target;if(n.tagName.toLowerCase()==="ul"||t.disabled)return;let r=Number(n.textContent);const h=t.pageCount,N=t.currentPage,E=t.pagerCount-2;n.className.includes("more")&&(n.className.includes("quickprev")?r=N-E:n.className.includes("quicknext")&&(r=N+E)),Number.isNaN(+r)||(r<1&&(r=1),r>h&&(r=h)),r!==N&&l(H,r)}return(a,n)=>(v(),C("ul",{class:S(c(i).b()),onClick:g,onKeyup:oe(o,["enter"])},[a.pageCount>0?(v(),C("li",{key:0,class:S([[c(i).is("active",a.currentPage===1),c(i).is("disabled",a.disabled)],"number"]),"aria-current":a.currentPage===1,"aria-label":"currentPage pager: 1",tabindex:k.value}," 1 ",10,ye)):D("",!0),m.value?(v(),C("li",{key:1,class:S(q.value),tabindex:k.value,"aria-label":"prevPages pager: pagerCount - 2",onMouseenter:n[0]||(n[0]=r=>F(!0)),onMouseleave:n[1]||(n[1]=r=>M.value=!1),onFocus:n[2]||(n[2]=r=>B(!0)),onBlur:n[3]||(n[3]=r=>z.value=!1)},[(M.value||z.value)&&!a.disabled?(v(),L(c(G),{key:0,name:"regular angles-left"})):(v(),L(c(G),{key:1,name:"regular ellipsis"}))],42,Pe)):D("",!0),(v(!0),C(ne,null,re(u.value,r=>(v(),C("li",{key:r,class:S([[c(i).is("active",a.currentPage===r),c(i).is("disabled",a.disabled)],"number"]),"aria-current":a.currentPage===r,"aria-label":`currentPage pager: ${r}`,tabindex:k.value},W(r),11,Ce))),128)),x.value?(v(),C("li",{key:2,class:S(Q.value),tabindex:k.value,"aria-label":`nextPages pager: ${a.pagerCount-2}`,onMouseenter:n[4]||(n[4]=r=>F()),onMouseleave:n[5]||(n[5]=r=>I.value=!1),onFocus:n[6]||(n[6]=r=>B()),onBlur:n[7]||(n[7]=r=>f.value=!1)},[(I.value||f.value)&&!a.disabled?(v(),L(c(G),{key:0,name:"regular angles-right"})):(v(),L(c(G),{key:1,name:"regular ellipsis"}))],42,xe)):D("",!0),a.pageCount>1?(v(),C("li",{key:3,class:S([[c(i).is("active",a.currentPage===a.pageCount),c(i).is("disabled",a.disabled)],"number"]),"aria-current":a.currentPage===a.pageCount,"aria-label":`currentPage pager: ${a.pageCount}`,tabindex:k.value},W(a.pageCount),11,he)):D("",!0)],34))}});ae.__docgenInfo={name:"GPaginationPager",exportName:"default",displayName:"pager",description:"",tags:{},sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/pagination/src/components/pager.vue"]};const P=e=>typeof e!="number",Ne=_({align:{type:String,values:["left","center","right"],default:"left"},pageSize:Number,total:Number,pageCount:Number,pagerCount:{type:Number,validator:e=>w(e)&&Math.trunc(e)===e&&e>4&&e<22&&e%2===1,default:7},currentPage:Number,disabled:Boolean,hideOnSinglePage:{type:Boolean,default:!0}}),Se={"update:current-page":e=>w(e),"update:page-size":e=>w(e),change:(e,s)=>w(e)&&w(s),"prev-click":e=>w(e),"next-click":e=>w(e)},ze="GPagination",ke=T({name:ze,props:Ne,emits:Se,setup(e,{emit:s,slots:t}){const l=$("pagination"),i=se().vnode.props||{};ue();const d="onUpdate:currentPage"in i||"onUpdate:current-page"in i||"onCurrentChange"in i,m="onUpdate:pageSize"in i||"onUpdate:page-size"in i||"onSizeChange"in i,x=p(()=>!(P(e.total)&&P(e.pageCount)||!P(e.currentPage)&&!d)),M=y(10),I=y(1),z=p({get(){return P(e.pageSize)?M.value:e.pageSize},set(o){P(e.pageSize)&&(M.value=o),m&&s("update:page-size",o)}}),f=p(()=>{let o=0;return P(e.pageCount)?P(e.total)||(o=Math.max(1,Math.ceil(e.total/z.value))):o=e.pageCount,o}),u=p({get(){return P(e.currentPage)?I.value:e.currentPage},set(o){let g=o;o<1?g=1:o>f.value&&(g=f.value),P(e.currentPage)&&(I.value=g),d&&s("update:current-page",g)}});X(f,o=>{u.value>o&&(u.value=o)}),X([u,z],o=>{s(H,...o)},{flush:"post"});function q(o){u.value=o}function Q(o){z.value=o;const g=f.value;u.value>g&&(u.value=g)}function k(){e.disabled||(u.value-=1,s("prev-click",u.value))}function F(){e.disabled||(u.value+=1,s("next-click",u.value))}function B(o,g){o&&(o.props||(o.props={}),o.props.class=[o.props.class,g].join(" "))}return ie(ce,{pageCount:f,disabled:p(()=>e.disabled),currentPage:u,changeEvent:q,handleSizeChange:Q}),()=>{if(!x.value||e.hideOnSinglePage&&f.value<=1)return null;const o=A(Z,{disabled:e.disabled,currentPage:u.value,onClick:k}),g=A(ae,{currentPage:u.value,pageCount:f.value,pagerCount:e.pagerCount,onChange:q,disabled:e.disabled}),a=A(ee,{disabled:e.disabled,currentPage:u.value,pageCount:f.value,onClick:F});return B(o,l.is("first")),B(a,l.is("last")),A("div",{class:[l.b(),l.m(e.align)]},[o,g,a])}}}),J=le(ke),Ae={title:"Data/Pagination",component:J,parameters:{docs:{description:{component:`✨ \`GPagination\` - Componente para navegar entre múltiples páginas de datos.

> Este componente usa la versión \`2.9.7\` de Element Plus.

**Características principales:**

- Navegación intuitiva entre páginas
- Soporte para paginación controlada
- Manejo automático de límites de página

🚀 **Instalación**

\`\`\`bash
yarn add @flash-global66/g-pagination
\`\`\`

🪝 **Dependencias**

Este componente requiere:

> - @flash-global66/g-icon-button
> - element-plus
> - vue

📥 **Importación básica**

\`\`\`typescript
import { GPagination } from '@flash-global66/g-pagination'
import '@flash-global66/g-pagination/styles.scss'
\`\`\`
`}}},argTypes:{currentPage:{name:"current-page / v-model:current-page",description:"Número de página actual. requiere listener (update:current-page) para cambios",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"undefined"}}},align:{description:"Alineación del componente",control:"select",options:["left","center","right"],table:{category:"Estado y Control",type:{summary:"string"},defaultValue:{summary:"left"}}},pageSize:{name:"page-size / v-model:page-size",description:"Número de elementos por página. requiere listener (update:current-size) para cambios",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"undefined"}}},disabled:{description:"Deshabilita el componente de paginación",control:"boolean",table:{category:"Estado y Control",type:{summary:"boolean"},defaultValue:{summary:"false"}}},hideOnSinglePage:{name:"hide-on-single-page",description:"Oculta la paginación cuando solo hay una página",control:"boolean",table:{category:"Estado y Control",type:{summary:"boolean"},defaultValue:{summary:"true"}}},total:{description:"Número total de elementos",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"undefined"}}},pageCount:{name:"page-count",description:"Número total de páginas (alternativa a total). Tiene prioridad sobre total si se proporcionan ambos",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"undefined"}}},pagerCount:{name:"pager-count",description:"Número de botones de página mostrados (debe ser impar entre 5 y 21)",control:{type:"range",min:5,max:21,step:2},table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"7"}}},change:{description:"Se dispara cuando cambia la página actual o el tamaño de página",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(currentPage: number, pageSize: number) => void"}}},"prev-click":{description:"Se dispara cuando se hace clic en el botón anterior",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(currentPage: number) => void"}}},"next-click":{description:"Se dispara cuando se hace clic en el botón siguiente",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(currentPage: number) => void"}}},"update:current-page":{description:"Se dispara cuando cambia la página actual (para v-model)",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(currentPage: number) => void"}}},"update:page-size":{description:"Se dispara cuando cambia el tamaño de página (para v-model)",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(pageSize: number) => void"}}}},args:{total:1e3,align:"left",pagerCount:7,disabled:!1,hideOnSinglePage:!0,currentPage:void 0,pageSize:void 0}},O={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico de paginación con 1000 elementos totales."}}},render:e=>({components:{GPagination:J,GConfigProvider:R},setup(){return{args:e}},template:`
      <g-config-provider>
        <g-pagination v-bind="args" />
      </g-config-provider>
    `})},K={name:"Controlado con v-model",parameters:{docs:{description:{story:"Ejemplo de paginación controlada con v-model, mostrando la página actual."}}},render:e=>({components:{GPagination:J,GConfigProvider:R},setup(){const s=y(1),t=10,l=1e4,i=p(()=>(s.value-1)*t+1),d=p(()=>Math.min(s.value*t,l));return{args:e,currentPage:s,pageSize:t,total:l,startItem:i,endItem:d,totalPages:Math.ceil(l/t)}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div class="bg-grey-20 p-xs rounded-md text-center">
            <p class="font-bold">Página {{ currentPage }} de {{ totalPages }}</p>
            <p class="text-3 text-grey-600">
              Mostrando elementos {{ startItem }} - {{ endItem }} de {{ total }} en total
            </p>
          </div>
          
          <div class="flex justify-center">
            <g-pagination 
              v-model:current-page="currentPage"
              :page-size="pageSize"
              :total="total"
            />
          </div>
        </div>
      </g-config-provider>
    `})},U={name:"Paginación de tarjetas",parameters:{docs:{description:{story:"Ejemplo práctico de paginación aplicada a una colección de tarjetas, donde cada tarjeta muestra su número y la página actual."}}},render:e=>({components:{GPagination:J,GConfigProvider:R,GButton:de},setup(){const s=y(1),t=y(6),l=30,i=Array.from({length:l},(m,x)=>({id:x+1,content:`Contenido de ejemplo para la tarjeta ${x+1}`})),d=p(()=>{const m=(s.value-1)*t.value;return i.slice(m,m+t.value)});return{args:e,currentPage:s,pageSize:t,total:l,visibleCards:d,totalPages:Math.ceil(l/t.value)}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <div class="bg-grey-20 p-4 rounded-md text-center">
            <p class="font-bold">Página {{ currentPage }} de {{ totalPages }}</p>
            <p class="text-3 text-grey-600">Mostrando {{ visibleCards.length }} tarjetas de {{ total }} en total</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              v-for="card in visibleCards" 
              :key="card.id"
              class="border border-grey-200 rounded-lg overflow-hidden flex flex-col"
            >
              <div class="bg-gray-50 p-4 border-b border-grey-200">
                <div class="flex justify-between items-center">
                  <h3 class="font-bold">ID: {{ card.id }}</h3>
                  <span class="bg-primary-500 text-white px-2 py-1 rounded-full text-xs">
                    Página {{ currentPage }}
                  </span>
                </div>
              </div>
              
              <div class="p-4 flex-grow">
                <p>{{ card.content }}</p>
              </div>
              
              <div class="bg-gray-50 p-4 border-t border-grey-200 flex justify-end">
                <g-button>Ver detalles</g-button>
              </div>
            </div>
          </div>
          
          <div class="flex justify-center mt-4">
            <g-pagination 
              v-model:current-page="currentPage"
              :page-size="pageSize"
              :total="total"
              :hide-on-single-page="true"
            />
          </div>
        </div>
      </g-config-provider>
    `})};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico de paginación con 1000 elementos totales.'
      }
    }
  },
  render: args => ({
    components: {
      GPagination,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-pagination v-bind="args" />
      </g-config-provider>
    \`
  })
}`,...O.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Controlado con v-model',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de paginación controlada con v-model, mostrando la página actual.'
      }
    }
  },
  render: args => ({
    components: {
      GPagination,
      GConfigProvider
    },
    setup() {
      const currentPage = ref(1);
      const pageSize = 10;
      const total = 10000;
      const startItem = computed(() => {
        return (currentPage.value - 1) * pageSize + 1;
      });
      const endItem = computed(() => {
        return Math.min(currentPage.value * pageSize, total);
      });
      return {
        args,
        currentPage,
        pageSize,
        total,
        startItem,
        endItem,
        totalPages: Math.ceil(total / pageSize)
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div class="bg-grey-20 p-xs rounded-md text-center">
            <p class="font-bold">Página {{ currentPage }} de {{ totalPages }}</p>
            <p class="text-3 text-grey-600">
              Mostrando elementos {{ startItem }} - {{ endItem }} de {{ total }} en total
            </p>
          </div>
          
          <div class="flex justify-center">
            <g-pagination 
              v-model:current-page="currentPage"
              :page-size="pageSize"
              :total="total"
            />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Paginación de tarjetas',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo práctico de paginación aplicada a una colección de tarjetas, donde cada tarjeta muestra su número y la página actual.'
      }
    }
  },
  render: args => ({
    components: {
      GPagination,
      GConfigProvider,
      GButton
    },
    setup() {
      const currentPage = ref(1);
      const pageSize = ref(6);
      const total = 30;

      // Generar datos para las tarjetas
      const allCards = Array.from({
        length: total
      }, (_, i) => ({
        id: i + 1,
        content: \`Contenido de ejemplo para la tarjeta \${i + 1}\`
      }));
      const visibleCards = computed(() => {
        const startIndex = (currentPage.value - 1) * pageSize.value;
        return allCards.slice(startIndex, startIndex + pageSize.value);
      });
      return {
        args,
        currentPage,
        pageSize,
        total,
        visibleCards,
        totalPages: Math.ceil(total / pageSize.value)
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <div class="bg-grey-20 p-4 rounded-md text-center">
            <p class="font-bold">Página {{ currentPage }} de {{ totalPages }}</p>
            <p class="text-3 text-grey-600">Mostrando {{ visibleCards.length }} tarjetas de {{ total }} en total</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              v-for="card in visibleCards" 
              :key="card.id"
              class="border border-grey-200 rounded-lg overflow-hidden flex flex-col"
            >
              <div class="bg-gray-50 p-4 border-b border-grey-200">
                <div class="flex justify-between items-center">
                  <h3 class="font-bold">ID: {{ card.id }}</h3>
                  <span class="bg-primary-500 text-white px-2 py-1 rounded-full text-xs">
                    Página {{ currentPage }}
                  </span>
                </div>
              </div>
              
              <div class="p-4 flex-grow">
                <p>{{ card.content }}</p>
              </div>
              
              <div class="bg-gray-50 p-4 border-t border-grey-200 flex justify-end">
                <g-button>Ver detalles</g-button>
              </div>
            </div>
          </div>
          
          <div class="flex justify-center mt-4">
            <g-pagination 
              v-model:current-page="currentPage"
              :page-size="pageSize"
              :total="total"
              :hide-on-single-page="true"
            />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...U.parameters?.docs?.source}}};const Oe=["Basic","LargeDataset","CardPagination"];export{O as Basic,U as CardPagination,K as LargeDataset,Oe as __namedExportsOrder,Ae as default};
