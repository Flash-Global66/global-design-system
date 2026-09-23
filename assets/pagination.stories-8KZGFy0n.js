import{l as H,d as T,c as g,o as f,y as x,b as Z,u as d,g as N,r as y,O as _,j as F,a as D,F as ee,A as ae,z as X,ac as ne,q as te,s as Y,D as re,N as L}from"./iframe-Dct5CHxr.js";import{R as I}from"./index-1T7U7QlS.js";import{u as $,f as M}from"./useEmptyValues-BnYvcW4O.js";import{C as U}from"./event.constant-LtAI3-H4.js";import{w as oe}from"./install.util-cBz1HN_T.js";import{G as se}from"./index-BeqF1NXI.js";import{G as W}from"./ConfigProvider-7dg58IlU.js";import"./preload-helper-Dch09mLN.js";import"./index-CZoNQBHQ.js";import"./useId-MLHLvdkG.js";import"./index-pMiYc9r3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ie=Symbol.for("gPaginationKey"),le=H({disabled:Boolean,currentPage:{type:Number,default:1}}),ue={click:e=>e instanceof MouseEvent},de=["disabled","aria-disabled"],ce=T({name:"GPaginationPrev",__name:"prev",props:le,emits:ue,setup(e){const s=e,a=$("pagination"),i=g(()=>s.disabled||s.currentPage<=1);return(l,c)=>(f(),x("button",{type:"button",class:N(d(a).e("btn-prev")),disabled:i.value,"aria-label":"previous","aria-disabled":i.value,onClick:c[0]||(c[0]=p=>l.$emit("click",p))},[Z(d(I),{name:"regular angle-left"})],10,de))}}),ge=H({disabled:Boolean,currentPage:{type:Number,default:1},pageCount:{type:Number,default:50}}),pe=["disabled","aria-disabled"],me=T({name:"GPaginationNext",__name:"next",props:ge,emits:["click"],setup(e){const s=e,a=$("pagination"),i=g(()=>s.disabled||s.currentPage===s.pageCount||s.pageCount===0);return(l,c)=>(f(),x("button",{type:"button",class:N(d(a).e("btn-next")),disabled:i.value,"aria-label":"next","aria-disabled":i.value,onClick:c[0]||(c[0]=p=>l.$emit("click",p))},[Z(d(I),{name:"regular angle-right"})],10,pe))}}),fe=H({currentPage:{type:Number,default:1},pageCount:{type:Number,required:!0},pagerCount:{type:Number,default:7},disabled:Boolean}),ve=["aria-current","tabindex"],be=["tabindex"],ye=["aria-current","aria-label","tabindex"],Pe=["tabindex","aria-label"],Ce=["aria-current","aria-label","tabindex"],xe=T({name:"GPaginationPager",__name:"pager",props:fe,emits:[U],setup(e,{emit:s}){const a=e,i=s,l=$("pager"),c=$("icon"),p=y(!1),P=y(!1),w=y(!1),z=y(!1),v=y(!1),u=y(!1),q=g(()=>{const n=a.pagerCount,r=(n-1)/2,o=Number(a.currentPage),h=Number(a.pageCount);let S=!1,k=!1;h>n&&(o>n-r&&(S=!0),o<h-r&&(k=!0));const V=[];if(S&&!k){const b=h-(n-2);for(let j=b;j<h;j++)V.push(j)}else if(!S&&k)for(let b=2;b<n;b++)V.push(b);else if(S&&k){const b=Math.floor(n/2)-1;for(let j=o-b;j<=o+b;j++)V.push(j)}else for(let b=2;b<h;b++)V.push(b);return V}),J=g(()=>["more","btn-quickprev",c.b(),l.is("disabled",a.disabled)]),Q=g(()=>["more","btn-quicknext",c.b(),l.is("disabled",a.disabled)]),E=g(()=>a.disabled?-1:0);_(()=>{const n=(a.pagerCount-1)/2;p.value=!1,P.value=!1,a.pageCount>a.pagerCount&&(a.currentPage>a.pagerCount-n&&(p.value=!0),a.currentPage<a.pageCount-n&&(P.value=!0))});function G(n=!1){a.disabled||(n?w.value=!0:z.value=!0)}function t(n=!1){n?v.value=!0:u.value=!0}function m(n){const r=n.target;if(r.tagName.toLowerCase()==="li"&&Array.from(r.classList).includes("number")){const o=Number(r.textContent);o!==a.currentPage&&i(U,o)}else r.tagName.toLowerCase()==="li"&&Array.from(r.classList).includes("more")&&B(n)}function B(n){const r=n.target;if(r.tagName.toLowerCase()==="ul"||a.disabled)return;let o=Number(r.textContent);const h=a.pageCount,S=a.currentPage,k=a.pagerCount-2;r.className.includes("more")&&(r.className.includes("quickprev")?o=S-k:r.className.includes("quicknext")&&(o=S+k)),Number.isNaN(+o)||(o<1&&(o=1),o>h&&(o=h)),o!==S&&i(U,o)}return(n,r)=>(f(),x("ul",{class:N(d(l).b()),onClick:B,onKeyup:ne(m,["enter"])},[n.pageCount>0?(f(),x("li",{key:0,class:N([[d(l).is("active",n.currentPage===1),d(l).is("disabled",n.disabled)],"number"]),"aria-current":n.currentPage===1,"aria-label":"currentPage pager: 1",tabindex:E.value}," 1 ",10,ve)):F("",!0),p.value?(f(),x("li",{key:1,class:N(J.value),tabindex:E.value,"aria-label":"prevPages pager: pagerCount - 2",onMouseenter:r[0]||(r[0]=o=>G(!0)),onMouseleave:r[1]||(r[1]=o=>w.value=!1),onFocus:r[2]||(r[2]=o=>t(!0)),onBlur:r[3]||(r[3]=o=>v.value=!1)},[(w.value||v.value)&&!n.disabled?(f(),D(d(I),{key:0,name:"regular angles-left"})):(f(),D(d(I),{key:1,name:"regular ellipsis"}))],42,be)):F("",!0),(f(!0),x(ee,null,ae(q.value,o=>(f(),x("li",{key:o,class:N([[d(l).is("active",n.currentPage===o),d(l).is("disabled",n.disabled)],"number"]),"aria-current":n.currentPage===o,"aria-label":`currentPage pager: ${o}`,tabindex:E.value},X(o),11,ye))),128)),P.value?(f(),x("li",{key:2,class:N(Q.value),tabindex:E.value,"aria-label":`nextPages pager: ${n.pagerCount-2}`,onMouseenter:r[4]||(r[4]=o=>G()),onMouseleave:r[5]||(r[5]=o=>z.value=!1),onFocus:r[6]||(r[6]=o=>t()),onBlur:r[7]||(r[7]=o=>u.value=!1)},[(z.value||u.value)&&!n.disabled?(f(),D(d(I),{key:0,name:"regular angles-right"})):(f(),D(d(I),{key:1,name:"regular ellipsis"}))],42,Pe)):F("",!0),n.pageCount>1?(f(),x("li",{key:3,class:N([[d(l).is("active",n.currentPage===n.pageCount),d(l).is("disabled",n.disabled)],"number"]),"aria-current":n.currentPage===n.pageCount,"aria-label":`currentPage pager: ${n.pageCount}`,tabindex:E.value},X(n.pageCount),11,Ce)):F("",!0)],34))}}),C=e=>typeof e!="number",he=H({align:{type:String,values:["left","center","right"],default:"left"},pageSize:Number,total:Number,pageCount:Number,pagerCount:{type:Number,validator:e=>M(e)&&Math.trunc(e)===e&&e>4&&e<22&&e%2===1,default:7},currentPage:Number,disabled:Boolean,hideOnSinglePage:{type:Boolean,default:!0}}),Se={"update:current-page":e=>M(e),"update:page-size":e=>M(e),change:(e,s)=>M(e)&&M(s),"prev-click":e=>M(e),"next-click":e=>M(e)},Ne="GPagination",ze=T({name:Ne,props:he,emits:Se,setup(e,{emit:s}){const a=$("pagination"),i=te().vnode.props||{},l="onUpdate:currentPage"in i||"onUpdate:current-page"in i||"onCurrentChange"in i,c="onUpdate:pageSize"in i||"onUpdate:page-size"in i||"onSizeChange"in i,p=g(()=>!(C(e.total)&&C(e.pageCount)||!C(e.currentPage)&&!l)),P=y(10),w=y(1),z=g({get(){return C(e.pageSize)?P.value:e.pageSize},set(t){C(e.pageSize)&&(P.value=t),c&&s("update:page-size",t)}}),v=g(()=>{let t=0;return C(e.pageCount)?C(e.total)||(t=Math.max(1,Math.ceil(e.total/z.value))):t=e.pageCount,t}),u=g({get(){return C(e.currentPage)?w.value:e.currentPage},set(t){let m=t;t<1?m=1:t>v.value&&(m=v.value),C(e.currentPage)&&(w.value=m),l&&s("update:current-page",m)}});Y(v,t=>{u.value>t&&(u.value=t)}),Y([u,z],t=>{s(U,...t)},{flush:"post"});function q(t){u.value=t}function J(t){z.value=t;const m=v.value;u.value>m&&(u.value=m)}function Q(){e.disabled||(u.value-=1,s("prev-click",u.value))}function E(){e.disabled||(u.value+=1,s("next-click",u.value))}function G(t,m){t&&(t.props||(t.props={}),t.props.class=[t.props.class,m].join(" "))}return re(ie,{pageCount:v,disabled:g(()=>e.disabled),currentPage:u,changeEvent:q,handleSizeChange:J}),()=>{if(!p.value||e.hideOnSinglePage&&v.value<=1)return null;const t=L(ce,{disabled:e.disabled,currentPage:u.value,onClick:Q}),m=L(xe,{currentPage:u.value,pageCount:v.value,pagerCount:e.pagerCount,onChange:q,disabled:e.disabled}),B=L(me,{disabled:e.disabled,currentPage:u.value,pageCount:v.value,onClick:E});return G(t,a.is("first")),G(B,a.is("last")),L("div",{class:[a.b(),a.m(e.align)]},[t,m,B])}}}),R=oe(ze),De={title:"Data/Pagination",component:R,parameters:{docs:{description:{component:`✨ \`GPagination\` - Componente para navegar entre múltiples páginas de datos.

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
`}}},argTypes:{currentPage:{name:"current-page / v-model:current-page",description:"Número de página actual. requiere listener (update:current-page) para cambios",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"undefined"}}},align:{description:"Alineación del componente",control:"select",options:["left","center","right"],table:{category:"Estado y Control",type:{summary:"string"},defaultValue:{summary:"left"}}},pageSize:{name:"page-size / v-model:page-size",description:"Número de elementos por página. requiere listener (update:current-size) para cambios",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"undefined"}}},disabled:{description:"Deshabilita el componente de paginación",control:"boolean",table:{category:"Estado y Control",type:{summary:"boolean"},defaultValue:{summary:"false"}}},hideOnSinglePage:{name:"hide-on-single-page",description:"Oculta la paginación cuando solo hay una página",control:"boolean",table:{category:"Estado y Control",type:{summary:"boolean"},defaultValue:{summary:"true"}}},total:{description:"Número total de elementos",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"undefined"}}},pageCount:{name:"page-count",description:"Número total de páginas (alternativa a total). Tiene prioridad sobre total si se proporcionan ambos",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"undefined"}}},pagerCount:{name:"pager-count",description:"Número de botones de página mostrados (debe ser impar entre 5 y 21)",control:{type:"range",min:5,max:21,step:2},table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"7"}}},change:{description:"Se dispara cuando cambia la página actual o el tamaño de página",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(currentPage: number, pageSize: number) => void"}}},"prev-click":{description:"Se dispara cuando se hace clic en el botón anterior",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(currentPage: number) => void"}}},"next-click":{description:"Se dispara cuando se hace clic en el botón siguiente",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(currentPage: number) => void"}}},"update:current-page":{description:"Se dispara cuando cambia la página actual (para v-model)",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(currentPage: number) => void"}}},"update:page-size":{description:"Se dispara cuando cambia el tamaño de página (para v-model)",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(pageSize: number) => void"}}}},args:{total:1e3,align:"left",pagerCount:7,disabled:!1,hideOnSinglePage:!0,currentPage:void 0,pageSize:void 0}},A={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico de paginación con 1000 elementos totales."}}},render:e=>({components:{GPagination:R,GConfigProvider:W},setup(){return{args:e}},template:`
      <g-config-provider>
        <g-pagination v-bind="args" />
      </g-config-provider>
    `})},O={name:"Controlado con v-model",parameters:{docs:{description:{story:"Ejemplo de paginación controlada con v-model, mostrando la página actual."}}},render:e=>({components:{GPagination:R,GConfigProvider:W},setup(){const s=y(1),a=10,i=1e4,l=g(()=>(s.value-1)*a+1),c=g(()=>Math.min(s.value*a,i));return{args:e,currentPage:s,pageSize:a,total:i,startItem:l,endItem:c,totalPages:Math.ceil(i/a)}},template:`
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
    `})},K={name:"Paginación de tarjetas",parameters:{docs:{description:{story:"Ejemplo práctico de paginación aplicada a una colección de tarjetas, donde cada tarjeta muestra su número y la página actual."}}},render:e=>({components:{GPagination:R,GConfigProvider:W,GButton:se},setup(){const s=y(1),a=y(6),i=30,l=Array.from({length:i},(p,P)=>({id:P+1,content:`Contenido de ejemplo para la tarjeta ${P+1}`})),c=g(()=>{const p=(s.value-1)*a.value;return l.slice(p,p+a.value)});return{args:e,currentPage:s,pageSize:a,total:i,visibleCards:c,totalPages:Math.ceil(i/a.value)}},template:`
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
    `})},Le=["Basic","LargeDataset","CardPagination"];A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};export{A as Basic,K as CardPagination,O as LargeDataset,Le as __namedExportsOrder,De as default};
