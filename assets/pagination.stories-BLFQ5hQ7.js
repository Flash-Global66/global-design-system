import{d as _,c as g,t as x,f as Y,u as d,k as S,b as f,r as y,K as te,l as D,a as F,F as ne,y as re,x as W,a1 as oe,g as se,w as X,B as ie,J as L}from"./vue.esm-bundler-Deokl1F5.js";import{_ as I}from"./index-B-U0DsHd.js";import{b as H}from"./props.util-Dtwzmmnf.js";import{c as $,d as w}from"./useEmptyValues-S5EffpHc.js";import{C as U}from"./event.constant-LtAI3-H4.js";import{w as le}from"./error.util-CmMZjXeT.js";import{G as ue}from"./index-DplprqvC.js";import{G as R}from"./ConfigProvider-DiWOjIRd.js";import"./index-iviVQk4X.js";import"./index-D9lthdDW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const de=Symbol.for("gPaginationKey"),ce=H({disabled:Boolean,currentPage:{type:Number,default:1}}),ge={click:e=>e instanceof MouseEvent},pe=["disabled","aria-disabled"],Z=_({name:"GPaginationPrev",__name:"prev",props:ce,emits:ge,setup(e){const s=e,a=$("pagination"),i=g(()=>s.disabled||s.currentPage<=1);return(l,c)=>(f(),x("button",{type:"button",class:S(d(a).e("btn-prev")),disabled:i.value,"aria-label":"previous","aria-disabled":i.value,onClick:c[0]||(c[0]=p=>l.$emit("click",p))},[Y(d(I),{name:"regular angle-left"})],10,pe))}});Z.__docgenInfo={name:"GPaginationPrev",exportName:"default",displayName:"prev",description:"",tags:{},events:[{name:"click"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/pagination/src/components/prev.vue"]};const me=H({disabled:Boolean,currentPage:{type:Number,default:1},pageCount:{type:Number,default:50}}),fe=["disabled","aria-disabled"],ee=_({name:"GPaginationNext",__name:"next",props:me,emits:["click"],setup(e){const s=e,a=$("pagination"),i=g(()=>s.disabled||s.currentPage===s.pageCount||s.pageCount===0);return(l,c)=>(f(),x("button",{type:"button",class:S(d(a).e("btn-next")),disabled:i.value,"aria-label":"next","aria-disabled":i.value,onClick:c[0]||(c[0]=p=>l.$emit("click",p))},[Y(d(I),{name:"regular angle-right"})],10,fe))}});ee.__docgenInfo={name:"GPaginationNext",exportName:"default",displayName:"next",description:"",tags:{},events:[{name:"click"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/pagination/src/components/next.vue"]};const ve=H({currentPage:{type:Number,default:1},pageCount:{type:Number,required:!0},pagerCount:{type:Number,default:7},disabled:Boolean}),be=["aria-current","tabindex"],ye=["tabindex"],Pe=["aria-current","aria-label","tabindex"],Ce=["tabindex","aria-label"],xe=["aria-current","aria-label","tabindex"],ae=_({name:"GPaginationPager",__name:"pager",props:ve,emits:[U],setup(e,{emit:s}){const a=e,i=s,l=$("pager"),c=$("icon"),p=y(!1),P=y(!1),M=y(!1),k=y(!1),v=y(!1),u=y(!1),q=g(()=>{const t=a.pagerCount,r=(t-1)/2,o=Number(a.currentPage),h=Number(a.pageCount);let N=!1,E=!1;h>t&&(o>t-r&&(N=!0),o<h-r&&(E=!0));const V=[];if(N&&!E){const b=h-(t-2);for(let j=b;j<h;j++)V.push(j)}else if(!N&&E)for(let b=2;b<t;b++)V.push(b);else if(N&&E){const b=Math.floor(t/2)-1;for(let j=o-b;j<=o+b;j++)V.push(j)}else for(let b=2;b<h;b++)V.push(b);return V}),J=g(()=>["more","btn-quickprev",c.b(),l.is("disabled",a.disabled)]),Q=g(()=>["more","btn-quicknext",c.b(),l.is("disabled",a.disabled)]),z=g(()=>a.disabled?-1:0);te(()=>{const t=(a.pagerCount-1)/2;p.value=!1,P.value=!1,a.pageCount>a.pagerCount&&(a.currentPage>a.pagerCount-t&&(p.value=!0),a.currentPage<a.pageCount-t&&(P.value=!0))});function G(t=!1){a.disabled||(t?M.value=!0:k.value=!0)}function n(t=!1){t?v.value=!0:u.value=!0}function m(t){const r=t.target;if(r.tagName.toLowerCase()==="li"&&Array.from(r.classList).includes("number")){const o=Number(r.textContent);o!==a.currentPage&&i(U,o)}else r.tagName.toLowerCase()==="li"&&Array.from(r.classList).includes("more")&&B(t)}function B(t){const r=t.target;if(r.tagName.toLowerCase()==="ul"||a.disabled)return;let o=Number(r.textContent);const h=a.pageCount,N=a.currentPage,E=a.pagerCount-2;r.className.includes("more")&&(r.className.includes("quickprev")?o=N-E:r.className.includes("quicknext")&&(o=N+E)),Number.isNaN(+o)||(o<1&&(o=1),o>h&&(o=h)),o!==N&&i(U,o)}return(t,r)=>(f(),x("ul",{class:S(d(l).b()),onClick:B,onKeyup:oe(m,["enter"])},[t.pageCount>0?(f(),x("li",{key:0,class:S([[d(l).is("active",t.currentPage===1),d(l).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===1,"aria-label":"currentPage pager: 1",tabindex:z.value}," 1 ",10,be)):D("",!0),p.value?(f(),x("li",{key:1,class:S(J.value),tabindex:z.value,"aria-label":"prevPages pager: pagerCount - 2",onMouseenter:r[0]||(r[0]=o=>G(!0)),onMouseleave:r[1]||(r[1]=o=>M.value=!1),onFocus:r[2]||(r[2]=o=>n(!0)),onBlur:r[3]||(r[3]=o=>v.value=!1)},[(M.value||v.value)&&!t.disabled?(f(),F(d(I),{key:0,name:"regular angles-left"})):(f(),F(d(I),{key:1,name:"regular ellipsis"}))],42,ye)):D("",!0),(f(!0),x(ne,null,re(q.value,o=>(f(),x("li",{key:o,class:S([[d(l).is("active",t.currentPage===o),d(l).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===o,"aria-label":`currentPage pager: ${o}`,tabindex:z.value},W(o),11,Pe))),128)),P.value?(f(),x("li",{key:2,class:S(Q.value),tabindex:z.value,"aria-label":`nextPages pager: ${t.pagerCount-2}`,onMouseenter:r[4]||(r[4]=o=>G()),onMouseleave:r[5]||(r[5]=o=>k.value=!1),onFocus:r[6]||(r[6]=o=>n()),onBlur:r[7]||(r[7]=o=>u.value=!1)},[(k.value||u.value)&&!t.disabled?(f(),F(d(I),{key:0,name:"regular angles-right"})):(f(),F(d(I),{key:1,name:"regular ellipsis"}))],42,Ce)):D("",!0),t.pageCount>1?(f(),x("li",{key:3,class:S([[d(l).is("active",t.currentPage===t.pageCount),d(l).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===t.pageCount,"aria-label":`currentPage pager: ${t.pageCount}`,tabindex:z.value},W(t.pageCount),11,xe)):D("",!0)],34))}});ae.__docgenInfo={name:"GPaginationPager",exportName:"default",displayName:"pager",description:"",tags:{},sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/pagination/src/components/pager.vue"]};const C=e=>typeof e!="number",he=H({align:{type:String,values:["left","center","right"],default:"left"},pageSize:Number,total:Number,pageCount:Number,pagerCount:{type:Number,validator:e=>w(e)&&Math.trunc(e)===e&&e>4&&e<22&&e%2===1,default:7},currentPage:Number,disabled:Boolean,hideOnSinglePage:{type:Boolean,default:!0}}),Ne={"update:current-page":e=>w(e),"update:page-size":e=>w(e),change:(e,s)=>w(e)&&w(s),"prev-click":e=>w(e),"next-click":e=>w(e)},Se="GPagination",ke=_({name:Se,props:he,emits:Ne,setup(e,{emit:s}){const a=$("pagination"),i=se().vnode.props||{},l="onUpdate:currentPage"in i||"onUpdate:current-page"in i||"onCurrentChange"in i,c="onUpdate:pageSize"in i||"onUpdate:page-size"in i||"onSizeChange"in i,p=g(()=>!(C(e.total)&&C(e.pageCount)||!C(e.currentPage)&&!l)),P=y(10),M=y(1),k=g({get(){return C(e.pageSize)?P.value:e.pageSize},set(n){C(e.pageSize)&&(P.value=n),c&&s("update:page-size",n)}}),v=g(()=>{let n=0;return C(e.pageCount)?C(e.total)||(n=Math.max(1,Math.ceil(e.total/k.value))):n=e.pageCount,n}),u=g({get(){return C(e.currentPage)?M.value:e.currentPage},set(n){let m=n;n<1?m=1:n>v.value&&(m=v.value),C(e.currentPage)&&(M.value=m),l&&s("update:current-page",m)}});X(v,n=>{u.value>n&&(u.value=n)}),X([u,k],n=>{s(U,...n)},{flush:"post"});function q(n){u.value=n}function J(n){k.value=n;const m=v.value;u.value>m&&(u.value=m)}function Q(){e.disabled||(u.value-=1,s("prev-click",u.value))}function z(){e.disabled||(u.value+=1,s("next-click",u.value))}function G(n,m){n&&(n.props||(n.props={}),n.props.class=[n.props.class,m].join(" "))}return ie(de,{pageCount:v,disabled:g(()=>e.disabled),currentPage:u,changeEvent:q,handleSizeChange:J}),()=>{if(!p.value||e.hideOnSinglePage&&v.value<=1)return null;const n=L(Z,{disabled:e.disabled,currentPage:u.value,onClick:Q}),m=L(ae,{currentPage:u.value,pageCount:v.value,pagerCount:e.pagerCount,onChange:q,disabled:e.disabled}),B=L(ee,{disabled:e.disabled,currentPage:u.value,pageCount:v.value,onClick:z});return G(n,a.is("first")),G(B,a.is("last")),L("div",{class:[a.b(),a.m(e.align)]},[n,m,B])}}}),T=le(ke),De={title:"Data/Pagination",component:T,parameters:{docs:{description:{component:`✨ \`GPagination\` - Componente para navegar entre múltiples páginas de datos.

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
`}}},argTypes:{currentPage:{name:"current-page / v-model:current-page",description:"Número de página actual. requiere listener (update:current-page) para cambios",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"undefined"}}},align:{description:"Alineación del componente",control:"select",options:["left","center","right"],table:{category:"Estado y Control",type:{summary:"string"},defaultValue:{summary:"left"}}},pageSize:{name:"page-size / v-model:page-size",description:"Número de elementos por página. requiere listener (update:current-size) para cambios",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"undefined"}}},disabled:{description:"Deshabilita el componente de paginación",control:"boolean",table:{category:"Estado y Control",type:{summary:"boolean"},defaultValue:{summary:"false"}}},hideOnSinglePage:{name:"hide-on-single-page",description:"Oculta la paginación cuando solo hay una página",control:"boolean",table:{category:"Estado y Control",type:{summary:"boolean"},defaultValue:{summary:"true"}}},total:{description:"Número total de elementos",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"undefined"}}},pageCount:{name:"page-count",description:"Número total de páginas (alternativa a total). Tiene prioridad sobre total si se proporcionan ambos",control:"number",table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"undefined"}}},pagerCount:{name:"pager-count",description:"Número de botones de página mostrados (debe ser impar entre 5 y 21)",control:{type:"range",min:5,max:21,step:2},table:{category:"Estado y Control",type:{summary:"number"},defaultValue:{summary:"7"}}},change:{description:"Se dispara cuando cambia la página actual o el tamaño de página",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(currentPage: number, pageSize: number) => void"}}},"prev-click":{description:"Se dispara cuando se hace clic en el botón anterior",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(currentPage: number) => void"}}},"next-click":{description:"Se dispara cuando se hace clic en el botón siguiente",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(currentPage: number) => void"}}},"update:current-page":{description:"Se dispara cuando cambia la página actual (para v-model)",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(currentPage: number) => void"}}},"update:page-size":{description:"Se dispara cuando cambia el tamaño de página (para v-model)",table:{category:"Eventos",type:{summary:"function"},defaultValue:{summary:"(pageSize: number) => void"}}}},args:{total:1e3,align:"left",pagerCount:7,disabled:!1,hideOnSinglePage:!0,currentPage:void 0,pageSize:void 0}},A={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico de paginación con 1000 elementos totales."}}},render:e=>({components:{GPagination:T,GConfigProvider:R},setup(){return{args:e}},template:`
      <g-config-provider>
        <g-pagination v-bind="args" />
      </g-config-provider>
    `})},K={name:"Controlado con v-model",parameters:{docs:{description:{story:"Ejemplo de paginación controlada con v-model, mostrando la página actual."}}},render:e=>({components:{GPagination:T,GConfigProvider:R},setup(){const s=y(1),a=10,i=1e4,l=g(()=>(s.value-1)*a+1),c=g(()=>Math.min(s.value*a,i));return{args:e,currentPage:s,pageSize:a,total:i,startItem:l,endItem:c,totalPages:Math.ceil(i/a)}},template:`
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
    `})},O={name:"Paginación de tarjetas",parameters:{docs:{description:{story:"Ejemplo práctico de paginación aplicada a una colección de tarjetas, donde cada tarjeta muestra su número y la página actual."}}},render:e=>({components:{GPagination:T,GConfigProvider:R,GButton:ue},setup(){const s=y(1),a=y(6),i=30,l=Array.from({length:i},(p,P)=>({id:P+1,content:`Contenido de ejemplo para la tarjeta ${P+1}`})),c=g(()=>{const p=(s.value-1)*a.value;return l.slice(p,p+a.value)});return{args:e,currentPage:s,pageSize:a,total:i,visibleCards:c,totalPages:Math.ceil(i/a.value)}},template:`
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
    `})};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const Fe=["Basic","LargeDataset","CardPagination"];export{A as Basic,O as CardPagination,K as LargeDataset,Fe as __namedExportsOrder,De as default};
