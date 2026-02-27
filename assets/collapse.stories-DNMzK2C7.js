import{R as de,Y as Ae,r as v,w as Ge,c as r,E as $e,ak as ne,d as ee,b as V,e as f,f as K,s as L,p as G,al as Se,u as n,T as Ne,a as je,x as C,k as D,h as Re,m as oe,l as g,F as X,z as Z,$ as se,a0 as He,a2 as we,a1 as Y,y as te,j as qe,v as ze,H as me}from"./vue.esm-bundler-C43JrhH2.js";import{e as pe,u as _,m as Fe}from"./index-D5bIuBCX.js";import{b as ue,d as I,w as Oe,c as Ve}from"./install-CfJGiCvs.js";import{C as ge,U as fe}from"./event-BB_Ol6Sd.js";import{m as ie}from"./typescript-Bp3YSIOJ.js";import{c as le,a as Ke}from"./index-DH2w0SzE.js";import{t as Be}from"./error-Cq9Fpw4b.js";import{F as B}from"./index-B1PxvDbZ.js";import{G as _e}from"./index-DGopGXg3.js";import{G as ve,a as be}from"./index-BocNJzgi.js";import{G as ye}from"./index-G8MyKf0F.js";import{G as Me}from"./index-1xDgUv1h.js";import{G as Ue}from"./index-D6FS4XlE.js";import{G as P}from"./ConfigProvider-Br84NlF7.js";import{a as Je,b as re}from"./documentation-stories-DKOl0nGm.js";import"./index-fhkPmQjX.js";import"./index-DmfABaPz.js";import"./_arrayPush-BhjrZnJY.js";import"./index-CdSB2Bdf.js";import"./index-CRx4dHSJ.js";import"./index-BDKGuxIf.js";import"./index-BjhK0CHr.js";import"./index-D_xYoXKA.js";import"./index-Bn_3zeFh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";const ce=a=>pe(a)||de(a)||Ae(a),We=ue({accordion:Boolean,modelValue:{type:I([Array,String,Number]),default:()=>ie([])},expandIconPosition:{type:I([String]),default:"right"},beforeCollapse:{type:I(Function)},items:{type:I(Array),default:()=>ie([])}}),Ye={[fe]:ce,[ge]:ce,"header-click":a=>de(a)||pe(a)},he=Symbol("collapseContextKey"),Qe="GCollapse",Xe=(a,s)=>{const o=v(le(a.modelValue)),t=i=>{o.value=i;const c=a.accordion?o.value[0]:o.value;s(fe,c),s(ge,c)},e=i=>{if(a.accordion)t([o.value[0]===i?"":i]);else{const c=[...o.value],d=c.indexOf(i);d>-1?c.splice(d,1):c.push(i),t(c)}},l=async i=>{const{beforeCollapse:c}=a;if(!c){e(i);return}const d=c(i);[ne(d),Fe(d)].includes(!0)||Be(Qe,"beforeCollapse must return type `Promise<boolean>` or `boolean`"),ne(d)?d.then(u=>{u!==!1&&e(i)}).catch(u=>{}):d&&e(i)},p=i=>{s("header-click",i)};return Ge(()=>a.modelValue,()=>o.value=le(a.modelValue),{deep:!0}),$e(he,{activeNames:o,handleItemClick:l,handleHeaderOnlyClick:p}),{activeNames:o,setActiveNames:t}},Ze=a=>{const s=_("collapse");return{rootKls:r(()=>[s.b()]),expandIconPosition:r(()=>a.expandIconPosition)}},ea=(a,s)=>(a.install=o=>{for(const t of[a,...Object.values({})])o.component(t.name,t)},a),aa=ee({name:"GCollapseTransition",__name:"collapse-transition",setup(a){const s=_("collapse-transition"),o=e=>{e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom},t={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height&&(e.dataset.elExistsHeight=e.style.height),e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){requestAnimationFrame(()=>{e.dataset.oldOverflow=e.style.overflow,e.dataset.elExistsHeight?e.style.maxHeight=e.dataset.elExistsHeight:e.scrollHeight!==0?e.style.maxHeight=`${e.scrollHeight}px`:e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom,e.style.overflow="hidden"})},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},enterCancelled(e){o(e)},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){e.scrollHeight!==0&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){o(e)},leaveCancelled(e){o(e)}};return(e,l)=>(f(),V(Ne,G({name:n(s).b()},Se(t)),{default:K(()=>[L(e.$slots,"default")]),_:3},16,["name"]))}}),na=ea(aa),oa=ue({title:{type:String,default:""},name:{type:I([String,Number]),default:void 0},disabled:Boolean,iconsRight:{type:I(Array),default:()=>[]},iconsLeft:{type:I(Array),default:()=>[]},description:{type:String,default:""},content:{type:I([String,Function]),default:""},expandIconPosition:{type:I(String),default:"right"},headerOnly:{type:Boolean,default:!1},hideIcon:{type:Boolean,default:!1}}),sa=a=>{const s=je(he),{namespace:o}=_("collapse"),t=v(!1),e=v(!1),l=Ke(),p=r(()=>l.current++),i=r(()=>a.name??`${o.value}-id-${l.prefix}-${n(p)}`),c=r(()=>s?.activeNames.value.includes(n(i))),d=r(()=>[...a.expandIconPosition==="left"&&!a.hideIcon?[{icon:"regular angle-right",onClick:()=>{s?.handleItemClick(n(i))}}]:[],...a.iconsLeft||[]]),y=r(()=>[...a.expandIconPosition==="right"&&!a.hideIcon?[{icon:"regular angle-right",onClick:()=>{s?.handleItemClick(n(i))}}]:[],...a.iconsRight||[]].slice().reverse()),u=r(()=>typeof a.content=="string"?a.content:a.content?.()||""),h=r(()=>({isActive:c.value,name:i.value,title:a.title,description:a.description,disabled:a.disabled,headerOnly:a.headerOnly,expandIconPosition:a.expandIconPosition,hideIcon:a.hideIcon,iconsLeft:d.value,iconsRight:y.value,focusing:t.value}));return{focusing:t,id:p,isActive:c,handleFocus:()=>{setTimeout(()=>{e.value?e.value=!1:t.value=!0},50)},handleHeaderClick:()=>{a.disabled||(a.headerOnly?s?.handleHeaderOnlyClick?.(n(i)):s?.handleItemClick(n(i)),t.value=!1,e.value=!0)},handleEnterClick:()=>{a.headerOnly?s?.handleHeaderOnlyClick?.(n(i)):s?.handleItemClick(n(i))},iconsLeft:d,iconsRight:y,content:u,name:i,slotProps:h}},ta=(a,{focusing:s,isActive:o,id:t})=>{const e=_("collapse"),l=r(()=>[e.b("item"),e.is("active",n(o)),e.is("disabled",a.disabled)]),p=r(()=>[e.be("item","header"),e.is("active",n(o)),{focusing:n(s)&&!a.disabled}]),i=r(()=>[e.bem("item","header","icon-left")]),c=r(()=>[e.bem("item","header","icon-right")]),d=r(()=>[e.bem("item","header","content")]),y=r(()=>[e.be("item","arrow"),e.is("active",n(o))]),u=r(()=>[e.be("item","title")]),h=r(()=>[e.be("item","description")]),x=r(()=>[e.bem("item","header","text")]),A=r(()=>e.be("item","wrap")),$=r(()=>e.be("item","content")),S=r(()=>e.b(`content-${n(t)}`)),U=r(()=>e.b(`head-${n(t)}`));return{itemTitleKls:u,arrowKls:y,headKls:p,rootKls:l,itemWrapperKls:A,itemContentKls:$,scopedContentId:S,scopedHeadId:U,itemDescriptionKls:h,iconsLeftKls:i,iconsRightKls:c,contentHeaderKls:d,contentHeaderTextKls:x}},ia=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],la=["id","aria-hidden","aria-labelledby"],ra=["innerHTML"],M=ee({name:"GCollapseItem",__name:"collapse-item",props:oa,setup(a,{expose:s}){const o=a,{focusing:t,id:e,isActive:l,handleFocus:p,handleHeaderClick:i,handleEnterClick:c,content:d,iconsLeft:y,iconsRight:u,name:h,slotProps:x}=sa(o),{arrowKls:A,headKls:$,rootKls:S,itemTitleKls:U,itemWrapperKls:Ce,itemContentKls:Ie,scopedContentId:J,scopedHeadId:ae,contentHeaderKls:Pe,iconsLeftKls:ke,iconsRightKls:Ee,contentHeaderTextKls:Te,itemDescriptionKls:De}=ta(o,{focusing:t,isActive:l,id:e});return s({isActive:l}),(T,k)=>(f(),C("div",{class:g(n(S))},[D("button",{id:n(ae),class:g(n($)),"aria-expanded":n(l),"aria-controls":n(J),"aria-describedby":n(J),tabindex:T.disabled?-1:0,type:"button",onClick:k[0]||(k[0]=(...m)=>n(i)&&n(i)(...m)),onKeydown:k[1]||(k[1]=we(Y((...m)=>n(c)&&n(c)(...m),["stop","prevent"]),["space","enter"])),onFocus:k[2]||(k[2]=(...m)=>n(p)&&n(p)(...m)),onBlur:k[3]||(k[3]=m=>t.value=!1)},[D("div",{class:g(n(Pe))},[n(y).length>0?(f(),C("div",{key:0,class:g(n(ke))},[(f(!0),C(X,null,Z(n(y),(m,W)=>(f(),V(n(B),{key:W,name:m.icon,class:g(m.icon==="regular angle-right"?n(A):""),onClick:Y(Le=>!T.disabled&&m?.onClick&&m?.onClick(n(h),m.icon,n(l)),["stop"]),spin:m.spin},null,8,["name","class","onClick","spin"]))),128))],2)):oe("",!0),D("div",{class:g(n(Te))},[L(T.$slots,"header",se(He(n(x))),()=>[D("h5",{class:g(n(U))},te(T.title),3),D("span",{class:g(n(De))},te(T.description),3)])],2)],2),n(u).length>0?(f(),C("div",{key:0,class:g(n(Ee))},[(f(!0),C(X,null,Z(n(u),(m,W)=>(f(),V(n(B),{key:W,name:m.icon,class:g(m.icon==="regular angle-right"?n(A):""),onClick:Y(Le=>!T.disabled&&m?.onClick&&m.onClick(n(h),m.icon,n(l)),["stop"]),spin:m.spin},null,8,["name","class","onClick","spin"]))),128))],2)):oe("",!0)],42,ia),Re(n(na),null,{default:K(()=>[qe(D("div",{id:n(J),role:"region",class:g(n(Ce)),"aria-hidden":!n(l),"aria-labelledby":n(ae)},[D("div",{class:g(n(Ie))},[n(d)?(f(),C("div",{key:0,innerHTML:n(d)},null,8,ra)):L(T.$slots,"default",se(G({key:1},n(x))))],2)],10,la),[[ze,n(l)]])]),_:3})],2))}});M.__docgenInfo={name:"GCollapseItem",exportName:"default",displayName:"collapse-item",description:"",tags:{},expose:[{name:"isActive",tags:[{title:"description",content:"current collapse-item whether active"}]}],slots:[{name:"header",scoped:!0,bindings:[]},{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/collapse/src/collapse-item.vue"]};const xe=ee({name:"GCollapse",__name:"collapse",props:We,emits:Ye,setup(a,{expose:s,emit:o}){const t=a,e=o,{activeNames:l,setActiveNames:p}=Xe(t,e),{rootKls:i,expandIconPosition:c}=Ze(t);return s({activeNames:l,setActiveNames:p}),(d,y)=>(f(),C("div",{class:g(n(i))},[t.items.length>0?(f(),C("div",{key:0,class:g(n(i))},[(f(!0),C(X,null,Z(t.items,(u,h)=>(f(),V(M,G({key:u.name||h},{ref_for:!0},u,{name:u.name||h,"expand-icon-position":n(c)}),{default:K(x=>[L(d.$slots,"default",G({ref_for:!0},x,{item:u}))]),header:K(x=>[L(d.$slots,"header",G({ref_for:!0},x,{item:u}))]),_:2},1040,["name","expand-icon-position"]))),128))],2)):L(d.$slots,"dynamic",{key:1})],2))}});xe.__docgenInfo={name:"GCollapse",exportName:"default",displayName:"collapse",description:"",tags:{},expose:[{name:"activeNames",tags:[{title:"description",content:"active names"}]},{name:"setActiveNames",tags:[{title:"description",content:"set active names"}]}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"header",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"dynamic"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/collapse/src/collapse.vue"]};const b=Oe(xe,{CollapseItem:M}),E=Ve(M),ca="0.4.1",Q={"@flash-global66/g-collapse-transition":"^0.0.1","@flash-global66/g-icon-font":"^0.10.0","element-plus":"^2.9.0","lodash-unified":"^1.0.3",vue:"^3.2.0"},qa={title:"Data/Collapse",component:b,parameters:{docs:{description:{component:`\`GCollapse\` - Componente de colapso para mostrar u ocultar contenido de manera dinámica.
        
> La versión de este componente es \`${ca}\`.

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

${Je(Q)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${re(Q)}

# Dependencias externas
yarn add ${re(Q,!0)}
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
`}}},argTypes:{modelValue:{name:"model-value / v-model",description:"Valor reactivo que controla qué items están abiertos. Puede ser un string, number o array.",control:"object",table:{category:"Props (Padre)",type:{summary:"string | number | array"},defaultValue:{summary:"[]"}}},accordion:{name:"accordion",description:"Si se activa, solo un elemento puede estar abierto a la vez.",control:"boolean",table:{category:"Props (Padre)",type:{summary:"boolean"},defaultValue:{summary:"false"}}},expandIconPosition:{name:"expand-icon-position",description:"Posición del icono de expansión.",control:"select",options:["left","right"],table:{category:"Props (Padre)",type:{summary:"string"},defaultValue:{summary:"right"}}},beforeCollapse:{name:"before-collapse",description:"Hook que se ejecuta antes de cambiar el estado de colapso. Si se devuelve `false` o una `Promise` que se rechaza, se detendrá el colapso.",control:!1,table:{category:"Props (Padre)",type:{summary:"Function",detail:"() => Promise<boolean> | boolean"}}},items:{name:"items",description:'Lista de elementos del colapso. Formato: `Array<{title: string, name?: string|number, iconsRight?: IconsType[], disabled?: boolean, iconsLeft?: IconsType[], description?: string, content?: string|(()=>string), headerOnly?: boolean, expandIconPosition?: "left"|"right"}>`',control:"object",table:{category:"Props (Padre)",type:{summary:"Array<CollapseItemType>",detail:`
{
  title: string;
  name?: string | number;
  iconsRight?: IconsType[];
  disabled?: boolean;
  iconsLeft?: IconsType[];
  description?: string;
  content?: string | (() => string);
  headerOnly?: boolean;
  expandIconPosition?: 'left' | 'right';
}
          `},defaultValue:{summary:"[]"}}},change:{name:"change",description:"Evento que se dispara cuando cambia el estado del colapso.",control:!1,table:{category:"Eventos (Padre)",type:{summary:"Function",detail:"(activeNames: array | string) => void"}}},headerClick:{name:"header-click",description:"Evento que se dispara cuando se hace click en un header con headerOnly=true.",control:!1,table:{category:"Eventos (Padre)",type:{summary:"Function",detail:"(name: string | number) => void"}}},slotDefaultCollapse:{name:"default (collapse)",description:"Slot para contenido dentro de cada elemento del colapso cuando se usan items. Recibe slotData e item.",control:!1,table:{category:"Slots (Padre)",type:{summary:"Slot",detail:`
Props disponibles:
{
  ...slotData, // Props del slot del item
  item: CollapseItemType // Objeto completo del item
}
          `}}},slotHeaderCollapse:{name:"header (collapse)",description:"Slot para personalizar el header cuando se usan items. Recibe slotData e item.",control:!1,table:{category:"Slots (Padre)",type:{summary:"Slot",detail:`
Props disponibles:
{
  ...slotData,
  item: CollapseItemType
}
          `}}},dynamic:{name:"dynamic",description:"Slot para contenido dinámico dentro del colapso general. Se usa cuando no se pasan items.",control:!1,table:{category:"Slots (Padre)",type:{summary:"Slot"}}},activeNames:{name:"active-names",description:"Propiedad reactiva que contiene los nombres de los elementos activos.",control:!1,table:{category:"Métodos expuestos (Padre)",type:{summary:"object",detail:"ComputedRef<(string | number)[]>"}}},setActiveNames:{name:"set-active-names",description:"Método para establecer los nombres activos del colapso.",control:!1,table:{category:"Métodos expuestos (Padre)",type:{summary:"Function",detail:"(activeNames: (string | number)[]) => void"}}},title:{name:"title",description:"Título del collapse item.",control:!1,table:{category:"Props (Hijo)",type:{summary:"string"}}},name:{name:"name",description:"Nombre único del item del collapse.",control:!1,table:{category:"Props (Hijo)",type:{summary:"string | number"}}},disabled:{name:"disabled",description:"Deshabilita el item del collapse.",control:!1,table:{category:"Props (Hijo)",type:{summary:"boolean"},defaultValue:{summary:"false"}}},iconsRight:{name:"icons-right",description:"Iconos a la derecha del item del collapse. Formato: `Array<{icon: IconString, onClick?: Function, spin?: boolean}>`",control:!1,table:{category:"Props (Hijo)",type:{summary:"IconsType[]"},defaultValue:{summary:"[]"}}},iconsLeft:{name:"icons-left",description:"Iconos a la izquierda del item del collapse. Formato: `Array<{icon: IconString, onClick?: Function, spin?: boolean}>`",control:!1,table:{category:"Props (Hijo)",type:{summary:"IconsType[]"},defaultValue:{summary:"[]"}}},description:{name:"description",description:"Descripción del item del collapse.",control:!1,table:{category:"Props (Hijo)",type:{summary:"string"},defaultValue:{summary:""}}},content:{name:"content",description:"Contenido del item del collapse, puede ser un string o una función que retorne un string.",control:!1,table:{category:"Props (Hijo)",type:{summary:"string | (() => string)"},defaultValue:{summary:""}}},expandIconPositionItem:{name:"expand-icon-position",description:"Posición del icono de expansión dentro del item del collapse.",control:!1,table:{category:"Props (Hijo)",type:{summary:"string"},defaultValue:{summary:"right"}}},headerOnly:{name:"header-only",description:"Si es true, el header solo ejecuta un evento sin abrir/cerrar el body. Útil para acciones como navegación, mostrar modales, etc.",control:"boolean",table:{category:"Props (Hijo)",type:{summary:"boolean"},defaultValue:{summary:"false"}}},hideIcon:{name:"hide-icon",description:"Si es true, oculta el icono de expansión/colapso (flecha). El collapse sigue funcionando normalmente, solo se oculta el indicador visual.",control:"boolean",table:{category:"Props (Hijo)",type:{summary:"boolean"},defaultValue:{summary:"false"}}},slotHeader:{name:"header",description:"Slot para personalizar el header del collapse item. Recibe las props del item.",control:!1,table:{category:"Slots (Hijo)",type:{summary:"Slot",detail:`
Props disponibles:
{
  isActive: boolean;
  name: string | number;
  title: string;
  description: string;
  disabled: boolean;
  headerOnly: boolean;
  expandIconPosition: 'left' | 'right';
  hideIcon: boolean;
  iconsLeft: IconsType[];
  iconsRight: IconsType[];
  focusing: boolean;
}
          `}}},slotDefaultItem:{name:"default",description:"Slot para contenido del body del collapse item. Recibe las mismas props que el slot header.",control:!1,table:{category:"Slots (Hijo)",type:{summary:"Slot",detail:`
Props disponibles:
{
  isActive: boolean;
  name: string | number;
  title: string;
  description: string;
  disabled: boolean;
  headerOnly: boolean;
  expandIconPosition: 'left' | 'right';
  hideIcon: boolean;
  iconsLeft: IconsType[];
  iconsRight: IconsType[];
  focusing: boolean;
}
          `}}}},args:{accordion:!1,expandIconPosition:"right",items:[{title:"Este es un título",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",iconsLeft:[{icon:"regular tag"}],content:"Este es el contenido del colapso. Puedes poner cualquier cosa aquí, incluso HTML."}]}},N={name:"Básico",render:a=>({components:{GCollapse:b,GConfigProvider:P},setup(){return{args:a}},template:`
      <g-config-provider>
        <g-collapse v-model="args.modelValue" :accordion="args.accordion" :expand-icon-position="args.expandIconPosition" :items="args.items" class="flex flex-col gap-4" />
      </g-config-provider>
    `})},j={name:"Acordeón",parameters:{docs:{description:{story:"Ejemplo de uso del modo acordeón, donde solo un elemento puede estar abierto a la vez."}}},render:()=>({components:{GConfigProvider:P,GCollapse:b,GCollapseItem:E},setup(){return{items:[{title:"Consistencia",name:"1",disabled:!1,description:"La consistencia es clave para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Feedback",name:"2",disabled:!1,description:"El feedback es importante para mejorar la experiencia del usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Eficiencia",name:"3",disabled:!1,description:"La eficiencia es fundamental para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."}]}},template:`
      <g-config-provider>
        <g-collapse :items="items" class="flex flex-col gap-4" accordion />
      </g-config-provider>
    `})},R={name:"Iconos personalizados",parameters:{docs:{description:{story:"Ejemplo de uso de iconos personalizados en los elementos del colapso. Puedes agregar iconos a la izquierda y derecha de cada elemento, y definir acciones al hacer clic en ellos."}}},render:()=>({components:{GConfigProvider:P,GCollapse:b,GCollapseItem:E},setup(){return{items:[{title:"Consistencia",name:"1",disabled:!1,description:"La consistencia es clave para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",iconsLeft:[{icon:"regular globe",onClick:(s,o,t)=>{console.info(`Icono izquierdo clickeado en Consistencia: ${o}, Activo: ${t}, Id: ${s}`)}}],iconsRight:[{icon:"regular heart",onClick:(s,o,t)=>{console.info(`Icono derecho clickeado en Feedback: ${o}, Activo: ${t}, Id: ${s}`)}}]},{title:"Feedback",name:"2",disabled:!1,description:"El feedback es importante para mejorar la experiencia del usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",iconsLeft:[{icon:"regular landmark",onClick:(s,o,t)=>{console.info(`Icono izquierdo clickeado en Feedback: ${o}, Activo: ${t}, Id: ${s}`)}}],iconsRight:[{icon:"regular heart",onClick:(s,o,t)=>{console.info(`Icono derecho clickeado en Feedback: ${o}, Activo: ${t}, Id: ${s}`)}}]},{title:"Eficiencia",name:"3",disabled:!1,description:"La eficiencia es fundamental para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",iconsLeft:[{icon:"regular gear",onClick:(s,o,t)=>{console.info(`Icono izquierdo clickeado en Eficiencia: ${o}, Activo: ${t}, Id: ${s}`)}}],iconsRight:[{icon:"regular heart",onClick:(s,o,t)=>{console.info(`Icono derecho clickeado en Eficiencia: ${o}, Activo: ${t}, Id: ${s}`)}}]},{title:"Accesibilidad",name:"4",disabled:!1,description:"La accesibilidad es esencial para que todos los usuarios puedan interactuar con el sistema.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",iconsLeft:[{icon:"regular store",onClick:(s,o,t)=>{console.info(`Icono izquierdo clickeado en Accesibilidad: ${o}, Activo: ${t}, Id: ${s}`)}}],iconsRight:[{icon:"regular heart",onClick:(s,o,t)=>{console.info(`Icono derecho clickeado en Accesibilidad: ${o}, Activo: ${t}, Id: ${s}`)}}]}]}},template:`
      <g-config-provider>
        <g-collapse :items="items" class="flex flex-col gap-4" accordion />
      </g-config-provider>
    `})},H={name:"Posición del icono de expansión",parameters:{docs:{description:{story:"Puedes cambiar la posición del icono de expansión a la izquierda o derecha de cada elemento del colapso."}}},render:()=>({components:{GConfigProvider:P,GCollapse:b,GCollapseItem:E,GRadioGroup:_e},setup(){const a=v("right");return{items:[{title:"Consistencia",name:"1",disabled:!1,description:"La consistencia es clave para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Feedback",name:"2",disabled:!1,description:"El feedback es importante para mejorar la experiencia del usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Eficiencia",name:"3",disabled:!1,description:"La eficiencia es fundamental para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Accesibilidad",name:"4",disabled:!1,description:"La accesibilidad es esencial para que todos los usuarios puedan interactuar con el sistema.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."}],options:[{value:"left",label:"Izquierda"},{value:"right",label:"Derecha"}],selectedValue:a}},template:`
      <g-config-provider>
        <div class="flex items-center justify-center">
          <g-radio-group v-model="selectedValue" :options="options" class="mb-4" />
        </div>
        <g-collapse :items="items" class="flex flex-col gap-4" :expand-icon-position="selectedValue" />
      </g-config-provider>
    `})},w={name:"Prevención de collapse",parameters:{docs:{description:{story:"Puedes prevenir el colapso de un elemento utilizando el hook `before-collapse`. Si este hook devuelve `false` o una `Promise` que se rechaza, el colapso no ocurrirá."}}},render:()=>({components:{GConfigProvider:P,GCollapse:b,GCollapseItem:E},setup(){const a=v(["1"]),s=v(!1),o=v([{title:"Consistencia",name:"1",disabled:!1,description:"La consistencia es clave para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Feedback",name:"2",disabled:!1,description:"El feedback es importante para mejorar la experiencia del usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."},{title:"Eficiencia",name:"3",disabled:!1,description:"La eficiencia es fundamental para una buena experiencia de usuario.",content:"Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."}]);return{items:o,activeNames:a,beforeCollapse:e=>(o.value[parseInt(e)-1].iconsLeft=[{icon:"regular arrows-rotate",spin:!0}],new Promise(l=>{setTimeout(()=>(o.value[parseInt(e)-1].iconsLeft=[],l(!0)),1500)})),loading:s}},template:`
      <g-config-provider>
        <g-collapse v-model="activeNames" :items="items" class="flex flex-col gap-4" :before-collapse="(name) => beforeCollapse(name)" />
      </g-config-provider>
    `})},q={name:"Slot Default",parameters:{docs:{description:{story:"Puedes utilizar el slot `default` para agregar contenido dentro de cada elemento del collapse. Este slot se renderiza dentro de cada `g-collapse-item`."}}},render:()=>({components:{GConfigProvider:P,GCollapse:b,GCollapseItem:E,GForm:be,GFormItem:ve,GInput:ye,GButton:Me,GTag:Ue},setup(){const a=v(["1"]),s=me({name:"Juan Pérez",email:"juan@ejemplo.com",phone:"+51 999888777",address:"Av. Principal 123",ciudad:"Lima",country:"Perú"}),o=[{icon:"regular trash-xmark",onClick:l=>{t.value=t.value.filter(p=>p.name!==l)}}],t=v([{title:"Representante Legal 1",name:"1",iconsLeft:[{icon:"regular user"}],description:"CUIL 1902945728",iconsRight:o},{title:"Representante Legal 2",name:"2",iconsLeft:[{icon:"regular user"}],description:"CUIL 1902945728",iconsRight:o},{title:"Representante Legal 3",name:"3",iconsLeft:[{icon:"regular user"}],description:"CUIL 1902945728",iconsRight:o}]);return{items:t,formData:s,activeNames:a,handleSaveRepresentative:l=>{a.value=a.value.filter(p=>p!==l)}}},template:`
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
    `})},z={name:"Collapse item con formularios",parameters:{docs:{description:{story:"Ejemplo de uso de GCollapseItem con un formulario."}}},render:()=>({components:{GConfigProvider:P,GCollapse:b,GCollapseItem:E,GForm:be,GFormItem:ve,GInput:ye},setup(){const a=v(1),s=me({name:"Pepito",lastName:"Perez",phone:"999888777",email:"pepito@ejemplo.com",city:"Lima",address:""});return{activeNames:a,formData:s}},template:`
      <g-config-provider>
        <g-collapse v-model="activeNames" class="flex flex-col gap-4" accordion>
          <template #dynamic>
            <g-collapse-item name="1">
              <template #header>
                <p class="text-6 font-semibold text-blue-600">Datos básicos</p>
              </template>
              <template #default>
                <g-form :model="formData" class="w-full">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <g-form-item label="Nombre">
                      <g-input v-model="formData.name" label="Nombre" />
                    </g-form-item>
                    <g-form-item label="Apellido">
                      <g-input v-model="formData.lastName" label="Apellido" />
                    </g-form-item>
                  </div>
                </g-form>
              </template>
            </g-collapse-item>

            <g-collapse-item name="2" title="Datos de contacto">
              <g-form :model="formData" class="w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <g-form-item label="Teléfono">
                    <g-input v-model="formData.phone" label="Teléfono" />
                  </g-form-item>
                  <g-form-item label="Email">
                    <g-input v-model="formData.email" label="Email" />
                  </g-form-item>
                </div>
              </g-form>
            </g-collapse-item>

            <g-collapse-item name="3" title="Datos de dirección">
              <g-form :model="formData" class="w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <g-form-item label="Ciudad">
                    <g-input v-model="formData.city" label="Ciudad" />
                  </g-form-item>
                  <g-form-item label="Dirección">
                    <g-input v-model="formData.address" label="Dirección" />
                  </g-form-item>
                </div>
              </g-form>
            </g-collapse-item>
          </template>
        </g-collapse>
      </g-config-provider>
    `})},F={name:"Header solo click",parameters:{docs:{description:{story:"Ejemplo de uso de las props `headerOnly` y `hideIcon` en GCollapseItem. \n        \n- **headerOnly**: El item solo ejecuta un evento sin expandirse, pero mantiene el icono de flecha.\n- **hideIcon**: Solo oculta el icono de flecha, el collapse sigue funcionando normalmente."}}},render:()=>({components:{GConfigProvider:P,GCollapse:b,GCollapseItem:E,GIconFont:B},setup(){const a=v(["1"]),s=v("");return{activeNames:a,message:s,handleHeaderClick:t=>{s.value=`Se hizo clic en el header: ${t} a las ${new Date().toLocaleTimeString()}`,console.log("Header clickeado:",t)}}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <div v-if="message" class="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p class="text-blue-800">{{ message }}</p>
          </div>
          
          <g-collapse v-model="activeNames" class="flex flex-col gap-4" @header-click="handleHeaderClick">
            <template #dynamic>
              <!-- Item normal que se abre/cierra -->
              <g-collapse-item name="1" title="Abrir normal">
                <template #default>
                  <div class="p-4 bg-gray-50 rounded-lg">
                    <p>Este es un item normal que se abre y cierra al hacer click en el header.</p>
                  </div> 
                </template>
              </g-collapse-item>

             <!-- Item con headerOnly que solo ejecuta evento -->
              <g-collapse-item name="2" title="Ejecutar evento" header-only>
                <template #default>
                  <div class="p-4 bg-green-50 rounded-lg">
                    <p>Este contenido nunca se mostrará porque headerOnly es true.</p>
                  </div>
                </template>
              </g-collapse-item>
              <g-collapse-item name="3" title="Ejecutar evento 2" header-only>
                <template #default>
                  <div class="p-4 bg-green-50 rounded-lg">
                    <p>Este contenido nunca se mostrará porque headerOnly es true.</p>
                  </div>
                </template>
              </g-collapse-item>

              <!-- Item con hideIcon (sin icono, se expande normalmente) -->
              <g-collapse-item name="4" title="hideIcon (sin icono)" hide-icon>
                <template #default>
                  <div class="p-4 bg-yellow-50 rounded-lg">
                    <p>Este item no muestra el icono pero se expande normalmente.</p>
                  </div>
                </template>
              </g-collapse-item>
            </template>
          </g-collapse>
        </div>
      </g-config-provider>
    `})},O={name:"Slot default con props",parameters:{docs:{description:{story:"Ejemplo que demuestra las props disponibles en el slot default de GCollapseItem: isActive, name, title, description, disabled, headerOnly, expandIconPosition, hideIcon, iconsLeft, iconsRight, focusing."}}},render:()=>({components:{GConfigProvider:P,GCollapse:b,GCollapseItem:E,GIconFont:B},setup(){return{activeNames:v(["1"])}},template:`
      <g-config-provider>
        <g-collapse v-model="activeNames" class="flex flex-col gap-4">
          <template #dynamic>
            <!-- Item normal con lista de props -->
            <g-collapse-item 
              name="1" 
              title="Item normal" 
              description="Descripción del item"
              :icons-left="[{ icon: 'regular user' }]"
              :icons-right="[{ icon: 'regular gear' }]"
            >
              <template #default="slotData">
                <div class="p-4 bg-blue-50 rounded-lg">
                  <h4 class="font-semibold text-blue-800 mb-3">Props disponibles:</h4>
                  <ul class="space-y-1 text-sm">
                    <li v-for="[key, value] in Object.entries(slotData)" :key="key">
                      <strong>{{ key }}: </strong> 
                      <span :class="typeof value === 'boolean' ? (value ? 'text-green-600' : 'text-red-600') : 'text-gray-700'">
                        {{ typeof value === 'object' ? JSON.stringify(value) : value }}
                      </span>
                    </li>
                  </ul>
                </div>
              </template>
            </g-collapse-item>
          </template>
        </g-collapse>
      </g-config-provider>
    `})};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Básico",
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
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Acordeón",
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
        title: "Consistencia",
        name: "1",
        disabled: false,
        description: "La consistencia es clave para una buena experiencia de usuario.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."
      }, {
        title: "Feedback",
        name: "2",
        disabled: false,
        description: "El feedback es importante para mejorar la experiencia del usuario.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."
      }, {
        title: "Eficiencia",
        name: "3",
        disabled: false,
        description: "La eficiencia es fundamental para una buena experiencia de usuario.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."
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
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Iconos personalizados",
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
        title: "Consistencia",
        name: "1",
        disabled: false,
        description: "La consistencia es clave para una buena experiencia de usuario.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        iconsLeft: [{
          icon: "regular globe",
          onClick: (name, icon, isActive) => {
            console.info(\`Icono izquierdo clickeado en Consistencia: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }],
        iconsRight: [{
          icon: "regular heart",
          onClick: (name, icon, isActive) => {
            console.info(\`Icono derecho clickeado en Feedback: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }]
      }, {
        title: "Feedback",
        name: "2",
        disabled: false,
        description: "El feedback es importante para mejorar la experiencia del usuario.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        iconsLeft: [{
          icon: "regular landmark",
          onClick: (name, icon, isActive) => {
            console.info(\`Icono izquierdo clickeado en Feedback: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }],
        iconsRight: [{
          icon: "regular heart",
          onClick: (name, icon, isActive) => {
            console.info(\`Icono derecho clickeado en Feedback: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }]
      }, {
        title: "Eficiencia",
        name: "3",
        disabled: false,
        description: "La eficiencia es fundamental para una buena experiencia de usuario.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        iconsLeft: [{
          icon: "regular gear",
          onClick: (name, icon, isActive) => {
            console.info(\`Icono izquierdo clickeado en Eficiencia: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }],
        iconsRight: [{
          icon: "regular heart",
          onClick: (name, icon, isActive) => {
            console.info(\`Icono derecho clickeado en Eficiencia: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }]
      }, {
        title: "Accesibilidad",
        name: "4",
        disabled: false,
        description: "La accesibilidad es esencial para que todos los usuarios puedan interactuar con el sistema.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        iconsLeft: [{
          icon: "regular store",
          onClick: (name, icon, isActive) => {
            console.info(\`Icono izquierdo clickeado en Accesibilidad: \${icon}, Activo: \${isActive}, Id: \${name}\`);
          }
        }],
        iconsRight: [{
          icon: "regular heart",
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
}`,...R.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Posición del icono de expansión",
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
      const selectedValue = ref("right");
      const items: CollapseItemType[] = [{
        title: "Consistencia",
        name: "1",
        disabled: false,
        description: "La consistencia es clave para una buena experiencia de usuario.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."
      }, {
        title: "Feedback",
        name: "2",
        disabled: false,
        description: "El feedback es importante para mejorar la experiencia del usuario.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."
      }, {
        title: "Eficiencia",
        name: "3",
        disabled: false,
        description: "La eficiencia es fundamental para una buena experiencia de usuario.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."
      }, {
        title: "Accesibilidad",
        name: "4",
        disabled: false,
        description: "La accesibilidad es esencial para que todos los usuarios puedan interactuar con el sistema.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."
      }];
      const options = [{
        value: "left",
        label: "Izquierda"
      }, {
        value: "right",
        label: "Derecha"
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
}`,...H.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Prevención de collapse",
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
      const activeNames = ref(["1"]);
      const loading = ref(false);
      const items = ref<CollapseItemType[]>([{
        title: "Consistencia",
        name: "1",
        disabled: false,
        description: "La consistencia es clave para una buena experiencia de usuario.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."
      }, {
        title: "Feedback",
        name: "2",
        disabled: false,
        description: "El feedback es importante para mejorar la experiencia del usuario.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."
      }, {
        title: "Eficiencia",
        name: "3",
        disabled: false,
        description: "La eficiencia es fundamental para una buena experiencia de usuario.",
        content: "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario."
      }]);
      const beforeCollapse = (name: string): Promise<boolean> => {
        items.value[parseInt(name) - 1].iconsLeft = [{
          icon: "regular arrows-rotate",
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
}`,...w.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Slot Default",
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
      const activeNames = ref(["1"]);
      const formData = reactive({
        name: "Juan Pérez",
        email: "juan@ejemplo.com",
        phone: "+51 999888777",
        address: "Av. Principal 123",
        ciudad: "Lima",
        country: "Perú"
      });
      const iconRight: CollapseItemType["iconsRight"] = [{
        icon: "regular trash-xmark",
        onClick: name => {
          items.value = items.value.filter(item => item.name !== name);
        }
      }];
      const items = ref<CollapseItemType[]>([{
        title: "Representante Legal 1",
        name: "1",
        iconsLeft: [{
          icon: "regular user"
        }],
        description: "CUIL 1902945728",
        iconsRight: iconRight
      }, {
        title: "Representante Legal 2",
        name: "2",
        iconsLeft: [{
          icon: "regular user"
        }],
        description: "CUIL 1902945728",
        iconsRight: iconRight
      }, {
        title: "Representante Legal 3",
        name: "3",
        iconsLeft: [{
          icon: "regular user"
        }],
        description: "CUIL 1902945728",
        iconsRight: iconRight
      }]);
      const handleSaveRepresentative = (item: CollapseItemType["name"]) => {
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
}`,...q.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Collapse item con formularios",
  parameters: {
    docs: {
      description: {
        story: \`Ejemplo de uso de GCollapseItem con un formulario.\`
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
      GInput
    },
    setup() {
      const activeNames = ref(1);
      const formData = reactive({
        name: "Pepito",
        lastName: "Perez",
        phone: "999888777",
        email: "pepito@ejemplo.com",
        city: "Lima",
        address: ""
      });
      return {
        activeNames,
        formData
      };
    },
    template: \`
      <g-config-provider>
        <g-collapse v-model="activeNames" class="flex flex-col gap-4" accordion>
          <template #dynamic>
            <g-collapse-item name="1">
              <template #header>
                <p class="text-6 font-semibold text-blue-600">Datos básicos</p>
              </template>
              <template #default>
                <g-form :model="formData" class="w-full">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <g-form-item label="Nombre">
                      <g-input v-model="formData.name" label="Nombre" />
                    </g-form-item>
                    <g-form-item label="Apellido">
                      <g-input v-model="formData.lastName" label="Apellido" />
                    </g-form-item>
                  </div>
                </g-form>
              </template>
            </g-collapse-item>

            <g-collapse-item name="2" title="Datos de contacto">
              <g-form :model="formData" class="w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <g-form-item label="Teléfono">
                    <g-input v-model="formData.phone" label="Teléfono" />
                  </g-form-item>
                  <g-form-item label="Email">
                    <g-input v-model="formData.email" label="Email" />
                  </g-form-item>
                </div>
              </g-form>
            </g-collapse-item>

            <g-collapse-item name="3" title="Datos de dirección">
              <g-form :model="formData" class="w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <g-form-item label="Ciudad">
                    <g-input v-model="formData.city" label="Ciudad" />
                  </g-form-item>
                  <g-form-item label="Dirección">
                    <g-input v-model="formData.address" label="Dirección" />
                  </g-form-item>
                </div>
              </g-form>
            </g-collapse-item>
          </template>
        </g-collapse>
      </g-config-provider>
    \`
  })
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Header solo click",
  parameters: {
    docs: {
      description: {
        story: \`Ejemplo de uso de las props \\\`headerOnly\\\` y \\\`hideIcon\\\` en GCollapseItem. 
        
- **headerOnly**: El item solo ejecuta un evento sin expandirse, pero mantiene el icono de flecha.
- **hideIcon**: Solo oculta el icono de flecha, el collapse sigue funcionando normalmente.\`
      }
    }
  },
  render: () => ({
    components: {
      GConfigProvider,
      GCollapse,
      GCollapseItem,
      GIconFont
    },
    setup() {
      const activeNames = ref(["1"]);
      const message = ref("");
      const handleHeaderClick = (name: string | number) => {
        message.value = \`Se hizo clic en el header: \${name} a las \${new Date().toLocaleTimeString()}\`;
        console.log("Header clickeado:", name);
      };
      return {
        activeNames,
        message,
        handleHeaderClick
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <div v-if="message" class="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p class="text-blue-800">{{ message }}</p>
          </div>
          
          <g-collapse v-model="activeNames" class="flex flex-col gap-4" @header-click="handleHeaderClick">
            <template #dynamic>
              <!-- Item normal que se abre/cierra -->
              <g-collapse-item name="1" title="Abrir normal">
                <template #default>
                  <div class="p-4 bg-gray-50 rounded-lg">
                    <p>Este es un item normal que se abre y cierra al hacer click en el header.</p>
                  </div> 
                </template>
              </g-collapse-item>

             <!-- Item con headerOnly que solo ejecuta evento -->
              <g-collapse-item name="2" title="Ejecutar evento" header-only>
                <template #default>
                  <div class="p-4 bg-green-50 rounded-lg">
                    <p>Este contenido nunca se mostrará porque headerOnly es true.</p>
                  </div>
                </template>
              </g-collapse-item>
              <g-collapse-item name="3" title="Ejecutar evento 2" header-only>
                <template #default>
                  <div class="p-4 bg-green-50 rounded-lg">
                    <p>Este contenido nunca se mostrará porque headerOnly es true.</p>
                  </div>
                </template>
              </g-collapse-item>

              <!-- Item con hideIcon (sin icono, se expande normalmente) -->
              <g-collapse-item name="4" title="hideIcon (sin icono)" hide-icon>
                <template #default>
                  <div class="p-4 bg-yellow-50 rounded-lg">
                    <p>Este item no muestra el icono pero se expande normalmente.</p>
                  </div>
                </template>
              </g-collapse-item>
            </template>
          </g-collapse>
        </div>
      </g-config-provider>
    \`
  })
}`,...F.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Slot default con props",
  parameters: {
    docs: {
      description: {
        story: \`Ejemplo que demuestra las props disponibles en el slot default de GCollapseItem: isActive, name, title, description, disabled, headerOnly, expandIconPosition, hideIcon, iconsLeft, iconsRight, focusing.\`
      }
    }
  },
  render: () => ({
    components: {
      GConfigProvider,
      GCollapse,
      GCollapseItem,
      GIconFont
    },
    setup() {
      const activeNames = ref(["1"]);
      return {
        activeNames
      };
    },
    template: \`
      <g-config-provider>
        <g-collapse v-model="activeNames" class="flex flex-col gap-4">
          <template #dynamic>
            <!-- Item normal con lista de props -->
            <g-collapse-item 
              name="1" 
              title="Item normal" 
              description="Descripción del item"
              :icons-left="[{ icon: 'regular user' }]"
              :icons-right="[{ icon: 'regular gear' }]"
            >
              <template #default="slotData">
                <div class="p-4 bg-blue-50 rounded-lg">
                  <h4 class="font-semibold text-blue-800 mb-3">Props disponibles:</h4>
                  <ul class="space-y-1 text-sm">
                    <li v-for="[key, value] in Object.entries(slotData)" :key="key">
                      <strong>{{ key }}: </strong> 
                      <span :class="typeof value === 'boolean' ? (value ? 'text-green-600' : 'text-red-600') : 'text-gray-700'">
                        {{ typeof value === 'object' ? JSON.stringify(value) : value }}
                      </span>
                    </li>
                  </ul>
                </div>
              </template>
            </g-collapse-item>
          </template>
        </g-collapse>
      </g-config-provider>
    \`
  })
}`,...O.parameters?.docs?.source}}};const za=["Basic","accordionExample","CustomIcons","positionIcon","preventCollpsing","slotDefault","simpleDifferentContent","headerOnlyExample","slotDefaultWithProps"];export{N as Basic,R as CustomIcons,za as __namedExportsOrder,j as accordionExample,qa as default,F as headerOnlyExample,H as positionIcon,w as preventCollpsing,z as simpleDifferentContent,q as slotDefault,O as slotDefaultWithProps};
