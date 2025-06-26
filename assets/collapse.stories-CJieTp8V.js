import{R as ye,V as he,r as x,w as xe,c,E as Ce,aj as Y,d as Q,b as q,e as u,f as H,s as E,p as F,ak as ke,u as a,T as Ie,a as Pe,x as y,k as I,h as Ee,m as Z,l as p,F as J,z as W,a2 as Te,a1 as M,y as ee,j as Ae,v as Le,H as $e}from"./vue.esm-bundler-BJr11hwL.js";import{e as Ge,o as ie,l as h,u as V,q as Re,w as De,C as Se}from"./install-BguVdh6e.js";import{C as le,U as re}from"./event-HEVJa2N9.js";import{m as ae}from"./typescript-Bp3YSIOJ.js";import{c as se,a as Ne}from"./index-BTFHqAey.js";import{t as we}from"./error-Cq9Fpw4b.js";import{o as ne}from"./index-CndGOJhM.js";import{G as ze}from"./index-D9XzRqN7.js";import{G as Fe,a as qe}from"./index-Dbh7JLkW.js";import{G as He}from"./index-CAi1QIuT.js";import{G as Ve}from"./index-zeNtPGP9.js";import{G as je}from"./index-CsXFTp2Q.js";import{G as T}from"./ConfigProvider-ilMzuFCG.js";import{a as Ke,b as oe}from"./documentation-stories-CHsh0W6O.js";import"./index-B8ScOe4Z.js";import"./index-CeJqMXT-.js";import"./_arrayPush-pzQDnaVN.js";import"./index-BPX3jD76.js";import"./index-DBpRHzck.js";import"./index-D9ZpuxHj.js";import"./index-LMcTKzc2.js";import"./index-CqYTtxeV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index.es-CbzxfxNJ.js";import"./index-DdPf6Guz.js";import"./index-DKfhJB4Q.js";const te=n=>Ge(n)||ye(n)||he(n),Be=ie({accordion:Boolean,modelValue:{type:h([Array,String,Number]),default:()=>ae([])},expandIconPosition:{type:h([String]),default:"right"},beforeCollapse:{type:h(Function)},items:{type:h(Array),default:()=>ae([])}}),_e={[re]:te,[le]:te},ce=Symbol("collapseContextKey"),Oe="GCollapse",Me=(n,t)=>{const s=x(se(n.modelValue)),o=i=>{s.value=i;const l=n.accordion?s.value[0]:s.value;t(re,l),t(le,l)},e=i=>{if(n.accordion)o([s.value[0]===i?"":i]);else{const l=[...s.value],m=l.indexOf(i);m>-1?l.splice(m,1):l.push(i),o(l)}},r=async i=>{const{beforeCollapse:l}=n;if(!l){e(i);return}const m=l(i);[Y(m),Re(m)].includes(!0)||we(Oe,"beforeCollapse must return type `Promise<boolean>` or `boolean`"),Y(m)?m.then(b=>{b!==!1&&e(i)}).catch(b=>{}):m&&e(i)};return xe(()=>n.modelValue,()=>s.value=se(n.modelValue),{deep:!0}),Ce(ce,{activeNames:s,handleItemClick:r}),{activeNames:s,setActiveNames:o}},Ue=n=>{const t=V("collapse");return{rootKls:c(()=>[t.b()]),expandIconPosition:c(()=>n.expandIconPosition)}},Je=(n,t)=>(n.install=s=>{for(const o of[n,...Object.values({})])s.component(o.name,o)},n),We=Q({name:"GCollapseTransition",__name:"collapse-transition",setup(n){const t=V("collapse-transition"),s=e=>{e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom},o={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height&&(e.dataset.elExistsHeight=e.style.height),e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){requestAnimationFrame(()=>{e.dataset.oldOverflow=e.style.overflow,e.dataset.elExistsHeight?e.style.maxHeight=e.dataset.elExistsHeight:e.scrollHeight!==0?e.style.maxHeight=`${e.scrollHeight}px`:e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom,e.style.overflow="hidden"})},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},enterCancelled(e){s(e)},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){e.scrollHeight!==0&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){s(e)},leaveCancelled(e){s(e)}};return(e,r)=>(u(),q(Ie,F({name:a(t).b()},ke(o)),{default:H(()=>[E(e.$slots,"default")]),_:3},16,["name"]))}}),Qe=Je(We),Xe=ie({title:{type:String,default:""},name:{type:h([String,Number]),default:void 0},disabled:Boolean,iconsRight:{type:h(Array),default:()=>[]},iconsLeft:{type:h(Array),default:()=>[]},description:{type:String,default:""},content:{type:h([String,Function]),default:""},expandIconPosition:{type:h(String),default:"right"}}),Ye=n=>{const t=Pe(ce),{namespace:s}=V("collapse"),o=x(!1),e=x(!1),r=Ne(),i=c(()=>r.current++),l=c(()=>n.name??`${s.value}-id-${r.prefix}-${a(i)}`),m=c(()=>t?.activeNames.value.includes(a(l))),f=c(()=>[...n.expandIconPosition==="left"?[{icon:"regular angle-right",onClick:()=>{t?.handleItemClick(a(l))}}]:[],...n.iconsLeft||[]]),b=c(()=>[...n.expandIconPosition==="right"?[{icon:"regular angle-right",onClick:()=>{t?.handleItemClick(a(l))}}]:[],...n.iconsRight||[]].toReversed()),g=c(()=>typeof n.content=="string"?n.content:n.content?.()||"");return{focusing:o,id:i,isActive:m,handleFocus:()=>{setTimeout(()=>{e.value?e.value=!1:o.value=!0},50)},handleHeaderClick:()=>{n.disabled||(t?.handleItemClick(a(l)),o.value=!1,e.value=!0)},handleEnterClick:()=>{t?.handleItemClick(a(l))},iconsLeft:f,iconsRight:b,content:g,name:l}},Ze=(n,{focusing:t,isActive:s,id:o})=>{const e=V("collapse"),r=c(()=>[e.b("item"),e.is("active",a(s)),e.is("disabled",n.disabled)]),i=c(()=>[e.be("item","header"),e.is("active",a(s)),{focusing:a(t)&&!n.disabled}]),l=c(()=>[e.bem("item","header","icon-left")]),m=c(()=>[e.bem("item","header","icon-right")]),f=c(()=>[e.bem("item","header","content")]),b=c(()=>[e.be("item","arrow"),e.is("active",a(s))]),g=c(()=>[e.be("item","title")]),C=c(()=>[e.be("item","description")]),v=c(()=>[e.bem("item","header","text")]),$=c(()=>e.be("item","wrap")),G=c(()=>e.be("item","content")),K=c(()=>e.b(`content-${a(o)}`)),B=c(()=>e.b(`head-${a(o)}`));return{itemTitleKls:g,arrowKls:b,headKls:i,rootKls:r,itemWrapperKls:$,itemContentKls:G,scopedContentId:K,scopedHeadId:B,itemDescriptionKls:C,iconsLeftKls:l,iconsRightKls:m,contentHeaderKls:f,contentHeaderTextKls:v}},ea=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],aa=["id","aria-hidden","aria-labelledby"],sa=["innerHTML"],j=Q({name:"GCollapseItem",__name:"collapse-item",props:Xe,setup(n,{expose:t}){const s=n,{focusing:o,id:e,isActive:r,handleFocus:i,handleHeaderClick:l,handleEnterClick:m,content:f,iconsLeft:b,iconsRight:g,name:C}=Ye(s),{arrowKls:v,headKls:$,rootKls:G,itemTitleKls:K,itemWrapperKls:B,itemContentKls:me,scopedContentId:_,scopedHeadId:X,contentHeaderKls:pe,iconsLeftKls:ue,iconsRightKls:ge,contentHeaderTextKls:fe,itemDescriptionKls:be}=Ze(s,{focusing:o,isActive:r,id:e});return t({isActive:r}),(A,k)=>(u(),y("div",{class:p(a(G))},[I("button",{id:a(X),class:p(a($)),"aria-expanded":a(r),"aria-controls":a(_),"aria-describedby":a(_),tabindex:A.disabled?-1:0,type:"button",onClick:k[0]||(k[0]=(...d)=>a(l)&&a(l)(...d)),onKeydown:k[1]||(k[1]=Te(M((...d)=>a(m)&&a(m)(...d),["stop","prevent"]),["space","enter"])),onFocus:k[2]||(k[2]=(...d)=>a(i)&&a(i)(...d)),onBlur:k[3]||(k[3]=d=>o.value=!1)},[I("div",{class:p(a(pe))},[a(b).length>0?(u(),y("div",{key:0,class:p(a(ue))},[(u(!0),y(J,null,W(a(b),(d,O)=>(u(),q(a(ne),{key:O,name:d.icon,class:p(d.icon==="regular angle-right"?a(v):""),onClick:M(ve=>d?.onClick&&d?.onClick(a(C),d.icon,a(r)),["stop"]),spin:d.spin},null,8,["name","class","onClick","spin"]))),128))],2)):Z("",!0),I("div",{class:p(a(fe))},[E(A.$slots,"header",{isActive:a(r)},()=>[I("h5",{class:p(a(K))},ee(A.title),3),I("span",{class:p(a(be))},ee(A.description),3)])],2)],2),a(g).length>0?(u(),y("div",{key:0,class:p(a(ge))},[(u(!0),y(J,null,W(a(g),(d,O)=>(u(),q(a(ne),{key:O,name:d.icon,class:p(d.icon==="regular angle-right"?a(v):""),onClick:M(ve=>d?.onClick&&d.onClick(a(C),d.icon,a(r)),["stop"]),spin:d.spin},null,8,["name","class","onClick","spin"]))),128))],2)):Z("",!0)],42,ea),Ee(a(Qe),null,{default:H(()=>[Ae(I("div",{id:a(_),role:"region",class:p(a(B)),"aria-hidden":!a(r),"aria-labelledby":a(X)},[I("div",{class:p(a(me))},[a(f)?(u(),y("div",{key:0,innerHTML:a(f)},null,8,sa)):E(A.$slots,"default",{key:1})],2)],10,aa),[[Le,a(r)]])]),_:3})],2))}});j.__docgenInfo={name:"GCollapseItem",exportName:"default",displayName:"collapse-item",description:"",tags:{},expose:[{name:"isActive",tags:[{title:"description",content:"current collapse-item whether active"}]}],slots:[{name:"header",scoped:!0,bindings:[{name:"is-active",title:"binding"}]},{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/collapse/src/collapse-item.vue"]};const de=Q({name:"GCollapse",__name:"collapse",props:Be,emits:_e,setup(n,{expose:t,emit:s}){const o=n,e=s,{activeNames:r,setActiveNames:i}=Me(o,e),{rootKls:l,expandIconPosition:m}=Ue(o);return t({activeNames:r,setActiveNames:i}),(f,b)=>(u(),y("div",{class:p(a(l))},[o.items.length>0?(u(),y("div",{key:0,class:p(a(l))},[(u(!0),y(J,null,W(o.items,(g,C)=>(u(),q(j,F({key:g.name||C,ref_for:!0},g,{name:g.name||C,"expand-icon-position":a(m)}),{default:H(v=>[E(f.$slots,"default",F({ref_for:!0},v,{item:g}))]),header:H(v=>[E(f.$slots,"header",F({ref_for:!0},v,{item:g}))]),_:2},1040,["name","expand-icon-position"]))),128))],2)):E(f.$slots,"dynamic",{key:1})],2))}});de.__docgenInfo={name:"GCollapse",exportName:"default",displayName:"collapse",description:"",tags:{},expose:[{name:"activeNames",tags:[{title:"description",content:"active names"}]},{name:"setActiveNames",tags:[{title:"description",content:"set active names"}]}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"header",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"dynamic"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/collapse/src/collapse.vue"]};const P=De(de,{CollapseItem:j}),L=Se(j),na="0.1.0",U={"@flash-global66/g-collapse-transition":"^0.0.1","@flash-global66/g-icon-font":"^0.10.0","element-plus":"^2.9.0","lodash-unified":"^1.0.3",vue:"^3.2.0"},Ga={title:"Data/Collapse",component:P,parameters:{docs:{description:{component:`\`GCollapse\` - Componente de colapso para mostrar u ocultar contenido de manera dinámica.
        
> La versión de este componente es \`${na}\`.

### Características principales:

- Permite mostrar u ocultar contenido de manera dinámica.
- Soporta múltiples elementos colapsables.
- Personalizable con slots para íconos y contenido.

### Instalación

\`\`\`bash
yarn add @flash-global66/g-collapse
\`\`\`

### Importación básica

\`\`\`typescript
# importar donde se va a utilizar
import { GCollapse, GCollapseItem, type CollapseItemType } from '@flash-global66/g-collapse'

# recomendado importar en los estilos globales
import '@flash-global66/g-collapse/styles.css'
\`\`\`

### Dependencias

Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.

${Ke(U)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${oe(U)}

# Dependencias externas
yarn add ${oe(U,!0)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<template>
  <g-collapse  class="flex flex-col gap-4" :items="items" v-model="modelValue" :accordion="false" :expand-icon-position="'right'">
</template>

<script setup>
const items: CollapseItemType[] = [
  {
    title: 'Tag 1',
    name: '1',
    disabled: false,
    iconsRight: [
      {
        icon: 'regular trash-xmark',
        onClick: (name, icon, isActive) => {
          console.log('Collapse item clicked:', name, icon, isActive)
        }
      }
    ],
    description: 'Descripción del Tag 1'
  },
  {
    title: 'Tag 2',
    name: '2',
    disabled: false,
    iconsLeft: [
      {
        icon: 'regular tag',
        onClick: (name, icon, isActive) => {
          console.log('Collapse item clicked:', name, icon, isActive)
        }
      }
    ],
    content: 'Contenido del Tag 2',
    description: 'Descripción del Tag 2'
  }
]
<\/script>
\`\`\`
`}}},argTypes:{modelValue:{name:"model-value / v-model",description:"Texto para la fila de resumen",control:"object",table:{category:"Atributos",type:{summary:"string | array"},defaultValue:{summary:"[]"}}},accordion:{name:"accordion",description:"Si se activa, solo un elemento puede estar abierto a la vez.",control:"boolean",table:{category:"Atributos",type:{summary:"boolean"},defaultValue:{summary:"false"}}},expandIconPosition:{name:"expand-icon-position",description:"Posición del icono de expansión.",control:"select",options:["left","right"],table:{category:"Atributos",type:{summary:"string"},defaultValue:{summary:"right"}}},beforeCollapse:{name:"before-collapse",description:"Hook que se ejecuta antes de cambiar el estado de colapso. Si se devuelve `false` o una `Promise` que se rechaza, se detendrá el colapso.",control:!1,table:{category:"Atributos",type:{summary:"Function",detail:"() => Promise<boolean> | boolen"}}},items:{name:"items",description:"Lista de elementos del colapso, este es opcional (formato recomendado).",control:"object",table:{category:"Atributos",type:{summary:"Array<CollapseItemType>",detail:`
{
  title: string;
  name?: string | number;
  iconsRight?: IconsType[];
  disabled?: boolean;
  iconsLeft?: IconsType[];
  description?: string;
  content?: string | (() => string);
}
          `},defaultValue:{summary:"[]"}}},change:{name:"change",description:"Evento que se dispara cuando cambia el estado del colapso.",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(activeNames: array | string) => void"}}},slotDefault:{name:"default",description:"Slot para contenido dentro de cada elemento del colapso.",control:!1,table:{category:"Slots",type:{summary:"Slot"}}},dynamic:{name:"dynamic",description:"Slot para contenido dinámico dentro del colapso general.",control:!1,table:{category:"Slots",type:{summary:"Slot"}}},activeNames:{name:"active-names",description:"Propiedad reactiva que contiene los nombres de los elementos activos.",control:!1,table:{category:"Metodos expuestos",type:{summary:"object",detail:"ComputedRef<(string | number)[]>"}}},setActiveNames:{name:"set-active-names",description:"Método para establecer los nombres activos del colapso.",control:!1,table:{category:"Metodos expuestos",type:{summary:"Function",detail:"(activeNames: (string | number)[]) => void"}}},title:{name:"title",description:"Titulo del collapse.",control:!1,table:{category:"Atributos del item",type:{summary:"string"}}},name:{name:"name",description:"Nombre único del item del collapse.",control:!1,table:{category:"Atributos del item",type:{summary:"string | number"}}},disabled:{name:"disabled",description:"Deshabilita el item del collapse.",control:!1,table:{category:"Atributos del item",type:{summary:"boolean"},defaultValue:{summary:"false"}}},iconsRight:{name:"icons-right",description:"Iconos a la derecha del item del collapse.",control:!1,table:{category:"Atributos del item",type:{summary:"IconsType[]"},defaultValue:{summary:"[]"}}},iconsLeft:{name:"icons-left",description:"Iconos a la izquierda del item del collapse.",control:!1,table:{category:"Atributos del item",type:{summary:"IconsType[]"},defaultValue:{summary:"[]"}}},description:{name:"description",description:"Descripción del item del collapse.",control:!1,table:{category:"Atributos del item",type:{summary:"string"},defaultValue:{summary:""}}},content:{name:"content",description:"Contenido del item del collapse, puede ser un string o una función que retorne un string.",control:!1,table:{category:"Atributos del item",type:{summary:"string | (() => string)"},defaultValue:{summary:""}}},expandIconPositionItem:{name:"expand-icon-position",description:"Posición del icono de expansión dentro del item del collapse.",control:!1,table:{category:"Atributos del item",type:{summary:"string"},defaultValue:{summary:"right"}}}},args:{accordion:!1,expandIconPosition:"right",items:[{title:"Este es un título",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",iconsLeft:[{icon:"regular tag"}],content:"Este es el contenido del colapso. Puedes poner cualquier cosa aquí, incluso HTML."}]}},R={name:"Básico",render:n=>({components:{GCollapse:P,GConfigProvider:T},setup(){return{args:n}},template:`
      <g-config-provider>
        <g-collapse v-model="args.modelValue" :accordion="args.accordion" :expand-icon-position="args.expandIconPosition" :items="args.items" class="flex flex-col gap-4" />
      </g-config-provider>
    `})},D={name:"Acordeón",parameters:{docs:{description:{story:"Ejemplo de uso del modo acordeón, donde solo un elemento puede estar abierto a la vez."}}},render:()=>({components:{GConfigProvider:T,GCollapse:P,GCollapseItem:L},setup(){return{items:[{title:"Consistencia",name:"1",disabled:!1,description:"La consistencia es clave para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Feedback",name:"2",disabled:!1,description:"El feedback es importante para mejorar la experiencia del usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Eficiencia",name:"3",disabled:!1,description:"La eficiencia es fundamental para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."}]}},template:`
      <g-config-provider>
        <g-collapse :items="items" class="flex flex-col gap-4" accordion />
      </g-config-provider>
    `})},S={name:"Iconos personalizados",parameters:{docs:{description:{story:"Ejemplo de uso de iconos personalizados en los elementos del colapso. Puedes agregar iconos a la izquierda y derecha de cada elemento, y definir acciones al hacer clic en ellos."}}},render:()=>({components:{GConfigProvider:T,GCollapse:P,GCollapseItem:L},setup(){return{items:[{title:"Consistencia",name:"1",disabled:!1,description:"La consistencia es clave para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",iconsLeft:[{icon:"regular globe",onClick:(t,s,o)=>{console.info(`Icono izquierdo clickeado en Consistencia: ${s}, Activo: ${o}, Id: ${t}`)}}],iconsRight:[{icon:"regular heart",onClick:(t,s,o)=>{console.info(`Icono derecho clickeado en Feedback: ${s}, Activo: ${o}, Id: ${t}`)}}]},{title:"Feedback",name:"2",disabled:!1,description:"El feedback es importante para mejorar la experiencia del usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",iconsLeft:[{icon:"regular landmark",onClick:(t,s,o)=>{console.info(`Icono izquierdo clickeado en Feedback: ${s}, Activo: ${o}, Id: ${t}`)}}],iconsRight:[{icon:"regular heart",onClick:(t,s,o)=>{console.info(`Icono derecho clickeado en Feedback: ${s}, Activo: ${o}, Id: ${t}`)}}]},{title:"Eficiencia",name:"3",disabled:!1,description:"La eficiencia es fundamental para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",iconsLeft:[{icon:"regular gear",onClick:(t,s,o)=>{console.info(`Icono izquierdo clickeado en Eficiencia: ${s}, Activo: ${o}, Id: ${t}`)}}],iconsRight:[{icon:"regular heart",onClick:(t,s,o)=>{console.info(`Icono derecho clickeado en Eficiencia: ${s}, Activo: ${o}, Id: ${t}`)}}]},{title:"Accesibilidad",name:"4",disabled:!1,description:"La accesibilidad es esencial para que todos los usuarios puedan interactuar con el sistema.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",iconsLeft:[{icon:"regular store",onClick:(t,s,o)=>{console.info(`Icono izquierdo clickeado en Accesibilidad: ${s}, Activo: ${o}, Id: ${t}`)}}],iconsRight:[{icon:"regular heart",onClick:(t,s,o)=>{console.info(`Icono derecho clickeado en Accesibilidad: ${s}, Activo: ${o}, Id: ${t}`)}}]}]}},template:`
      <g-config-provider>
        <g-collapse :items="items" class="flex flex-col gap-4" accordion />
      </g-config-provider>
    `})},N={name:"Posición del icono de expansión",parameters:{docs:{description:{story:"Puedes cambiar la posición del icono de expansión a la izquierda o derecha de cada elemento del colapso."}}},render:()=>({components:{GConfigProvider:T,GCollapse:P,GCollapseItem:L,GRadioGroup:ze},setup(){const n=x("right");return{items:[{title:"Consistencia",name:"1",disabled:!1,description:"La consistencia es clave para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Feedback",name:"2",disabled:!1,description:"El feedback es importante para mejorar la experiencia del usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Eficiencia",name:"3",disabled:!1,description:"La eficiencia es fundamental para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Accesibilidad",name:"4",disabled:!1,description:"La accesibilidad es esencial para que todos los usuarios puedan interactuar con el sistema.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."}],options:[{value:"left",label:"Izquierda"},{value:"right",label:"Derecha"}],selectedValue:n}},template:`
      <g-config-provider>
        <div class="flex items-center justify-center">
          <g-radio-group v-model="selectedValue" :options="options" class="mb-4" />
        </div>
        <g-collapse :items="items" class="flex flex-col gap-4" :expand-icon-position="selectedValue" />
      </g-config-provider>
    `})},w={name:"Prevención de collapse",parameters:{docs:{description:{story:"Puedes prevenir el colapso de un elemento utilizando el hook `before-collapse`. Si este hook devuelve `false` o una `Promise` que se rechaza, el colapso no ocurrirá."}}},render:()=>({components:{GConfigProvider:T,GCollapse:P,GCollapseItem:L},setup(){const n=x(["1"]),t=x(!1),s=x([{title:"Consistencia",name:"1",disabled:!1,description:"La consistencia es clave para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Feedback",name:"2",disabled:!1,description:"El feedback es importante para mejorar la experiencia del usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Eficiencia",name:"3",disabled:!1,description:"La eficiencia es fundamental para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."}]);return{items:s,activeNames:n,beforeCollapse:e=>(s.value[parseInt(e)-1].iconsLeft=[{icon:"regular arrows-rotate",spin:!0}],new Promise(r=>{setTimeout(()=>(s.value[parseInt(e)-1].iconsLeft=[],r(!0)),1500)})),loading:t}},template:`
      <g-config-provider>
        <g-collapse v-model="activeNames" :items="items" class="flex flex-col gap-4" :before-collapse="(name) => beforeCollapse(name)" />
      </g-config-provider>
    `})},z={name:"Slot Default",parameters:{docs:{description:{story:"Puedes utilizar el slot `default` para agregar contenido dentro de cada elemento del collapse. Este slot se renderiza dentro de cada `g-collapse-item`."}}},render:()=>({components:{GConfigProvider:T,GCollapse:P,GCollapseItem:L,GForm:qe,GFormItem:Fe,GInput:He,GButton:Ve,GTag:je},setup(){const n=x(["1"]),t=$e({name:"Juan Pérez",email:"juan@ejemplo.com",phone:"+51 999888777",address:"Av. Principal 123",ciudad:"Lima",country:"Perú"}),s=[{icon:"regular trash-xmark",onClick:r=>{o.value=o.value.filter(i=>i.name!==r)}}],o=x([{title:"Representante Legal 1",name:"1",iconsLeft:[{icon:"regular user"}],description:"CUIL 1902945728",iconsRight:s},{title:"Representante Legal 2",name:"2",iconsLeft:[{icon:"regular user"}],description:"CUIL 1902945728",iconsRight:s},{title:"Representante Legal 3",name:"3",iconsLeft:[{icon:"regular user"}],description:"CUIL 1902945728",iconsRight:s}]);return{items:o,formData:t,activeNames:n,handleSaveRepresentative:r=>{n.value=n.value.filter(i=>i!==r)}}},template:`
      <g-config-provider>
        <g-collapse :items="items" class="flex flex-col gap-6" v-model="activeNames">
          <template #header="{ item }">
            <div class="flex items-start flex-col gap-xxs">
              <h6 class="text-6 font-semibold text-primary-txt line-clamp-2 overflow-hidden text-ellipsis">
                {{ item.title }}
              </h6>
              <span class="text-2 font-medium text-secondary-txt line-clamp-1 overflow-hidden text-ellipsis">
                {{ item.description }}
              </span>
              <g-tag text="completado" size="xs" type="success" prefix-icon="solid check" suffix-icon="solid check" />
            </div>
          </template>
          <template #default="{ item }">
            <div class="flex w-full">
              <g-form :model="formData" class="w-full">
                <div class="grid grid-cols-2 gap-4">
                  <g-form-item>
                    <g-input v-model="formData.name" label="Nombre Completo" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.email" label="Correo Electrónico" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.phone" label="Teléfono" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.address" label="Dirección" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.ciudad" label="Ciudad" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.country" label="País" />
                  </g-form-item>
                </div>
                <div class="flex gap-4 mt-4">
                  <g-button
                    @click="() => handleSaveRepresentative(item.name)"
                  >
                    Guardar
                  </g-button>
                  <g-button @click="() => handleSaveRepresentative(item.name)" variant="secondary">Cancelar</g-button>
                </div>
              </g-form>
            </div>
          </template>
        </g-collapse>
      </g-config-provider>
    `})};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  render: args => ({
    components: {
      GCollapse,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-collapse v-model="args.modelValue" :accordion="args.accordion" :expand-icon-position="args.expandIconPosition" :items="args.items" class="flex flex-col gap-4" />
      </g-config-provider>
    \`
  })
}`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Acordeón',
  parameters: {
    docs: {
      description: {
        story: \`Ejemplo de uso del modo acordeón, donde solo un elemento puede estar abierto a la vez.\`
      }
    }
  },
  render: () => ({
    components: {
      GConfigProvider,
      GCollapse,
      GCollapseItem
    },
    setup() {
      const items: CollapseItemType[] = [{
        title: 'Consistencia',
        name: '1',
        disabled: false,
        description: 'La consistencia es clave para una buena experiencia de usuario.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.'
      }, {
        title: 'Feedback',
        name: '2',
        disabled: false,
        description: 'El feedback es importante para mejorar la experiencia del usuario.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.'
      }, {
        title: 'Eficiencia',
        name: '3',
        disabled: false,
        description: 'La eficiencia es fundamental para una buena experiencia de usuario.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.'
      }];
      return {
        items
      };
    },
    template: \`
      <g-config-provider>
        <g-collapse :items="items" class="flex flex-col gap-4" accordion />
      </g-config-provider>
    \`
  })
}`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Iconos personalizados',
  parameters: {
    docs: {
      description: {
        story: \`Ejemplo de uso de iconos personalizados en los elementos del colapso. Puedes agregar iconos a la izquierda y derecha de cada elemento, y definir acciones al hacer clic en ellos.\`
      }
    }
  },
  render: () => ({
    components: {
      GConfigProvider,
      GCollapse,
      GCollapseItem
    },
    setup() {
      const items: CollapseItemType[] = [{
        title: 'Consistencia',
        name: '1',
        disabled: false,
        description: 'La consistencia es clave para una buena experiencia de usuario.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.',
        iconsLeft: [{
          icon: 'regular globe',
          onClick: (name, icon, isActive) => {
            console.info(\`Icono izquierdo clickeado en Consistencia: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }],
        iconsRight: [{
          icon: 'regular heart',
          onClick: (name, icon, isActive) => {
            console.info(\`Icono derecho clickeado en Feedback: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }]
      }, {
        title: 'Feedback',
        name: '2',
        disabled: false,
        description: 'El feedback es importante para mejorar la experiencia del usuario.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.',
        iconsLeft: [{
          icon: 'regular landmark',
          onClick: (name, icon, isActive) => {
            console.info(\`Icono izquierdo clickeado en Feedback: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }],
        iconsRight: [{
          icon: 'regular heart',
          onClick: (name, icon, isActive) => {
            console.info(\`Icono derecho clickeado en Feedback: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }]
      }, {
        title: 'Eficiencia',
        name: '3',
        disabled: false,
        description: 'La eficiencia es fundamental para una buena experiencia de usuario.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.',
        iconsLeft: [{
          icon: 'regular gear',
          onClick: (name, icon, isActive) => {
            console.info(\`Icono izquierdo clickeado en Eficiencia: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }],
        iconsRight: [{
          icon: 'regular heart',
          onClick: (name, icon, isActive) => {
            console.info(\`Icono derecho clickeado en Eficiencia: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }]
      }, {
        title: 'Accesibilidad',
        name: '4',
        disabled: false,
        description: 'La accesibilidad es esencial para que todos los usuarios puedan interactuar con el sistema.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.',
        iconsLeft: [{
          icon: 'regular store',
          onClick: (name, icon, isActive) => {
            console.info(\`Icono izquierdo clickeado en Accesibilidad: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }],
        iconsRight: [{
          icon: 'regular heart',
          onClick: (name, icon, isActive) => {
            console.info(\`Icono derecho clickeado en Accesibilidad: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }]
      }];
      return {
        items
      };
    },
    template: \`
      <g-config-provider>
        <g-collapse :items="items" class="flex flex-col gap-4" accordion />
      </g-config-provider>
    \`
  })
}`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Posición del icono de expansión',
  parameters: {
    docs: {
      description: {
        story: \`Puedes cambiar la posición del icono de expansión a la izquierda o derecha de cada elemento del colapso.\`
      }
    }
  },
  render: () => ({
    components: {
      GConfigProvider,
      GCollapse,
      GCollapseItem,
      GRadioGroup
    },
    setup() {
      const selectedValue = ref('right');
      const items: CollapseItemType[] = [{
        title: 'Consistencia',
        name: '1',
        disabled: false,
        description: 'La consistencia es clave para una buena experiencia de usuario.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.'
      }, {
        title: 'Feedback',
        name: '2',
        disabled: false,
        description: 'El feedback es importante para mejorar la experiencia del usuario.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.'
      }, {
        title: 'Eficiencia',
        name: '3',
        disabled: false,
        description: 'La eficiencia es fundamental para una buena experiencia de usuario.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.'
      }, {
        title: 'Accesibilidad',
        name: '4',
        disabled: false,
        description: 'La accesibilidad es esencial para que todos los usuarios puedan interactuar con el sistema.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.'
      }];
      const options = [{
        value: 'left',
        label: 'Izquierda'
      }, {
        value: 'right',
        label: 'Derecha'
      }];
      return {
        items,
        options,
        selectedValue
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex items-center justify-center">
          <g-radio-group v-model="selectedValue" :options="options" class="mb-4" />
        </div>
        <g-collapse :items="items" class="flex flex-col gap-4" :expand-icon-position="selectedValue" />
      </g-config-provider>
    \`
  })
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Prevención de collapse',
  parameters: {
    docs: {
      description: {
        story: \`Puedes prevenir el colapso de un elemento utilizando el hook \\\`before-collapse\\\`. Si este hook devuelve \\\`false\\\` o una \\\`Promise\\\` que se rechaza, el colapso no ocurrirá.\`
      }
    }
  },
  render: () => ({
    components: {
      GConfigProvider,
      GCollapse,
      GCollapseItem
    },
    setup() {
      const activeNames = ref(['1']);
      const loading = ref(false);
      const items = ref<CollapseItemType[]>([{
        title: 'Consistencia',
        name: '1',
        disabled: false,
        description: 'La consistencia es clave para una buena experiencia de usuario.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.'
      }, {
        title: 'Feedback',
        name: '2',
        disabled: false,
        description: 'El feedback es importante para mejorar la experiencia del usuario.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.'
      }, {
        title: 'Eficiencia',
        name: '3',
        disabled: false,
        description: 'La eficiencia es fundamental para una buena experiencia de usuario.',
        content: 'Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.'
      }]);
      const beforeCollapse = (name: string): Promise<boolean> => {
        items.value[parseInt(name) - 1].iconsLeft = [{
          icon: 'regular arrows-rotate',
          spin: true
        }];
        return new Promise(resolve => {
          setTimeout(() => {
            items.value[parseInt(name) - 1].iconsLeft = [];
            return resolve(true);
          }, 1500);
        });
      };
      return {
        items,
        activeNames,
        beforeCollapse,
        loading
      };
    },
    template: \`
      <g-config-provider>
        <g-collapse v-model="activeNames" :items="items" class="flex flex-col gap-4" :before-collapse="(name) => beforeCollapse(name)" />
      </g-config-provider>
    \`
  })
}`,...w.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Slot Default',
  parameters: {
    docs: {
      description: {
        story: \`Puedes utilizar el slot \\\`default\\\` para agregar contenido dentro de cada elemento del collapse. Este slot se renderiza dentro de cada \\\`g-collapse-item\\\`.\`
      }
    }
  },
  render: () => ({
    components: {
      GConfigProvider,
      GCollapse,
      GCollapseItem,
      GForm,
      GFormItem,
      GInput,
      GButton,
      GTag
    },
    setup() {
      const activeNames = ref(['1']);
      const formData = reactive({
        name: 'Juan Pérez',
        email: 'juan@ejemplo.com',
        phone: '+51 999888777',
        address: 'Av. Principal 123',
        ciudad: 'Lima',
        country: 'Perú'
      });
      const iconRight: CollapseItemType['iconsRight'] = [{
        icon: 'regular trash-xmark',
        onClick: name => {
          items.value = items.value.filter(item => item.name !== name);
        }
      }];
      const items = ref<CollapseItemType[]>([{
        title: 'Representante Legal 1',
        name: '1',
        iconsLeft: [{
          icon: 'regular user'
        }],
        description: 'CUIL 1902945728',
        iconsRight: iconRight
      }, {
        title: 'Representante Legal 2',
        name: '2',
        iconsLeft: [{
          icon: 'regular user'
        }],
        description: 'CUIL 1902945728',
        iconsRight: iconRight
      }, {
        title: 'Representante Legal 3',
        name: '3',
        iconsLeft: [{
          icon: 'regular user'
        }],
        description: 'CUIL 1902945728',
        iconsRight: iconRight
      }]);
      const handleSaveRepresentative = (item: CollapseItemType['name']) => {
        activeNames.value = activeNames.value.filter(name => name !== item);
      };
      return {
        items,
        formData,
        activeNames,
        handleSaveRepresentative
      };
    },
    template: \`
      <g-config-provider>
        <g-collapse :items="items" class="flex flex-col gap-6" v-model="activeNames">
          <template #header="{ item }">
            <div class="flex items-start flex-col gap-xxs">
              <h6 class="text-6 font-semibold text-primary-txt line-clamp-2 overflow-hidden text-ellipsis">
                {{ item.title }}
              </h6>
              <span class="text-2 font-medium text-secondary-txt line-clamp-1 overflow-hidden text-ellipsis">
                {{ item.description }}
              </span>
              <g-tag text="completado" size="xs" type="success" prefix-icon="solid check" suffix-icon="solid check" />
            </div>
          </template>
          <template #default="{ item }">
            <div class="flex w-full">
              <g-form :model="formData" class="w-full">
                <div class="grid grid-cols-2 gap-4">
                  <g-form-item>
                    <g-input v-model="formData.name" label="Nombre Completo" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.email" label="Correo Electrónico" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.phone" label="Teléfono" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.address" label="Dirección" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.ciudad" label="Ciudad" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.country" label="País" />
                  </g-form-item>
                </div>
                <div class="flex gap-4 mt-4">
                  <g-button
                    @click="() => handleSaveRepresentative(item.name)"
                  >
                    Guardar
                  </g-button>
                  <g-button @click="() => handleSaveRepresentative(item.name)" variant="secondary">Cancelar</g-button>
                </div>
              </g-form>
            </div>
          </template>
        </g-collapse>
      </g-config-provider>
    \`
  })
}`,...z.parameters?.docs?.source}}};const Ra=["Basic","accordionExample","CustomIcons","positionIcon","preventCollpsing","slotDefault"];export{R as Basic,S as CustomIcons,Ra as __namedExportsOrder,D as accordionExample,Ga as default,N as positionIcon,w as preventCollpsing,z as slotDefault};
