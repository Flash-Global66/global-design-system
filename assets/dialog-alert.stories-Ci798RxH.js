import{G as b}from"./index-CyadN433.js";import{d as W,x as f,e as g,u as l,l as T,n as Z,r as v,c as w,J as Y,o as ee,C as te,w as X,t as re,h as ae,N as ne,ao as E,b as O,f as N,m as G,F as oe,z as ie}from"./vue.esm-bundler-BCWWDzSy.js";import{_ as t}from"./iframe-C8kXZIkA.js";import{d as se}from"./index-DL4FoQEl.js";import{f as le,b as ce,d as _,w as pe}from"./install-CHjgJfcB.js";import{u as U}from"./index-CU2PSoyO.js";import{w as de}from"./index-DO8X0Jy6.js";import{q as me}from"./index-DgQo9YaK.js";import{G as H}from"./ConfigProvider-BAdTAJXu.js";import{I as ue,a as ye}from"./Image-bG-8xFaS.js";import{a as ge,b as q}from"./documentation-stories-DH-Utv5z.js";import"./error-Cq9Fpw4b.js";import"./index-Bz0y6LhV.js";import"./index-DJArRuUx.js";import"./index-B9DYlcmC.js";import"./index-tMAtNoGV.js";import"./_arrayPush-DXBsyDbg.js";import"../sb-preview/runtime.js";import"./index-Chx1QtW8.js";import"./index-lV95ywNu.js";import"./aria-BUADUvnR.js";import"./index-Corq57P2.js";import"./style-B-OtozZQ.js";import"./vnode-Bi-i9bxn.js";import"./index-HX2jAHe6.js";import"./index-BoOdRfEY.js";import"./event-BB_Ol6Sd.js";import"./isEqual-6LQK51M6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CNqC7f2T.js";/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const xe=Object.prototype.hasOwnProperty,R=(e,r)=>xe.call(e,r),F=e=>e!==null&&typeof e=="object";const Q="__epPropKey",fe=e=>F(e)&&!!e[Q],be=(e,r)=>{if(!F(e)||fe(e))return e;const{values:a,required:s,default:p,type:c,validator:m}=e,y={type:c,required:!!s,validator:a||m?u=>{let n=!1,o=[];if(a&&(o=Array.from(a),R(e,"default")&&o.push(p),n||(n=o.includes(u))),m&&(n||(n=m(u))),!n&&o.length>0){const i=[...new Set(o)].map(x=>JSON.stringify(x)).join(", ");re(`Invalid prop: validation failed${r?` for prop "${r}"`:""}. Expected one of [${i}], got value ${JSON.stringify(u)}.`)}return n}:void 0,[Q]:!0};return R(e,"default")&&(y.default=p),y},he=e=>le(Object.entries(e).map(([r,a])=>[r,be(a,r)])),M=["alert","at","barrier","bell","bolt","calendar","card","celebration","chat-bubble","check","clock","disconnected-plug","discount","document","dollar-currency","door","email","euro-currency","face-recognition","fingerprint","footsteps","gift-box","global66","globe","headset","id-card-back","id-card-front","information","location-pin","lock","magnifying-glass","otp","paper-airplane","pound-currency","price-tags","prohibited","prohibited-red","refresh","sales","scissors","stairs","user","users","warning-sign","warning-sign-yellow","whatsapp","wrench","people","vault","usdt-usdc","code"],Ae={xs:"44px",sm:"64px",md:"80px",lg:"112px",xl:"160px","2xl":"208px","3xl":"260px"},Te=he({name:{type:String,required:!0},size:{type:String,default:"md"},lazyLoad:{type:Boolean,default:!0}});function ve(e){e.name&&!M.includes(e.name)&&(`${e.name}${M.join(", ")}`,void 0)}const we=Object.assign({"../assets/illustrations/alert.webp":()=>t(()=>import("./alert-Ds4vm8MS-DgDTgKnE.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/at.webp":()=>t(()=>import("./at-Dqfl47s4-BPUt3BWE.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/barrier.webp":()=>t(()=>import("./barrier-CjOLGbeE-Dh8hn_NP.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/bell.webp":()=>t(()=>import("./bell-eS05Cvak-Bk88w6nq.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/bolt.webp":()=>t(()=>import("./bolt-CNTBluKD-BQdxlCA-.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/calendar.webp":()=>t(()=>import("./calendar-zuhHKJ64-D71eVouD.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/card.webp":()=>t(()=>import("./card-BuB0okbw-D_GsKdc7.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/celebration.webp":()=>t(()=>import("./celebration-BoTgB2_s-DF0-X9Fo.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/chat-bubble.webp":()=>t(()=>import("./chat-bubble-KYrL7a0j-iNI2jZmb.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/check.webp":()=>t(()=>import("./check-BulcMdYJ-CvqgBhSh.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/clock.webp":()=>t(()=>import("./clock-BAuMMMOu-C-4gYtXW.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/code.webp":()=>t(()=>import("./code-BnBrCPGD-xZk5x8G6.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/disconnected-plug.webp":()=>t(()=>import("./disconnected-plug-BIQnXKLO-Ch5rZ2dY.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/discount.webp":()=>t(()=>import("./discount-CItX6mmk-DRmtQb0m.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/document.webp":()=>t(()=>import("./document-CRU-Ni-T-B1i6n9MN.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/dollar-currency.webp":()=>t(()=>import("./dollar-currency-DUj5BUdr-COueuQAK.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/door.webp":()=>t(()=>import("./door-fA5qVWIa-B_qWK4Fv.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/email.webp":()=>t(()=>import("./email-VxHpTtRN-079_t1L9.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/euro-currency.webp":()=>t(()=>import("./euro-currency-CgPx5nVe-BtcanAiQ.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/face-recognition.webp":()=>t(()=>import("./face-recognition-BJNpD86z-BP1-MK3L.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/fingerprint.webp":()=>t(()=>import("./fingerprint-B5gxjtBM-C7LiuPys.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/footsteps.webp":()=>t(()=>import("./footsteps-pPjnLG40-CeghwUlE.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/gift-box.webp":()=>t(()=>import("./gift-box-gqHy_zU1-CSve4931.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/global66.webp":()=>t(()=>import("./global66-DRXiEDxY-CvAHZfFy.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/globe.webp":()=>t(()=>import("./globe-CiDb50kL-CgiB6FON.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/headset.webp":()=>t(()=>import("./headset-CXbXtAge-_rALZ1qD.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/id-card-back.webp":()=>t(()=>import("./id-card-back-D1MsyO4r-JIJ57EGX.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/id-card-front.webp":()=>t(()=>import("./id-card-front-CKjJlh3f-CaWa1bFi.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/information.webp":()=>t(()=>import("./information-C31PQaSA-BsAjc0BQ.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/location-pin.webp":()=>t(()=>import("./location-pin-Bgi3a62z-D8bxsLUJ.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/lock.webp":()=>t(()=>import("./lock-DZJbK_Qx-CTLdb3io.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/magnifying-glass.webp":()=>t(()=>import("./magnifying-glass-BTyS_ju3-OAr_NmpK.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/otp.webp":()=>t(()=>import("./otp-CLeaAqIC-BZ2sG7wK.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/paper-airplane.webp":()=>t(()=>import("./paper-airplane-XRvC3cHP-UW1nOmST.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/people.webp":()=>t(()=>import("./people-CiIuOSAH-BsbQbcvV.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/pound-currency.webp":()=>t(()=>import("./pound-currency-D9CgyJOC-BxSH4IzZ.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/price-tags.webp":()=>t(()=>import("./price-tags-D6xB-Hvj-D8nBr9uy.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/prohibited-red.webp":()=>t(()=>import("./prohibited-red-Cg8-FSxj-CbCpRJzB.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/prohibited.webp":()=>t(()=>import("./prohibited-DfHwyu0L-CgfD6Op0.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/refresh.webp":()=>t(()=>import("./refresh-BFYe_puv-Dxo07Nnv.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/sales.webp":()=>t(()=>import("./sales-CjTDyeeR-BPJedHC0.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/scissors.webp":()=>t(()=>import("./scissors-CpmycfN--kSLKykNG.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/stairs.webp":()=>t(()=>import("./stairs-Cx7v3XOe-1Bm7RRb0.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/usdt-usdc.webp":()=>t(()=>import("./usdt-usdc-Ca5ueQmN-DvNAHSQy.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/user.webp":()=>t(()=>import("./user-DOeXE9cC-CHY6Ez7o.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/users.webp":()=>t(()=>import("./users-BI80-Mth-DongjlFl.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/vault.webp":()=>t(()=>import("./vault-B3ThoWq4-DKviXM36.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/warning-sign-yellow.webp":()=>t(()=>import("./warning-sign-yellow-DGGW7UIi-DmqwGsG_.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/warning-sign.webp":()=>t(()=>import("./warning-sign-CYFI5ZSD-BkdZv0Rm.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/whatsapp.webp":()=>t(()=>import("./whatsapp-B0u8BIQV-DQ7C13jc.js"),[],import.meta.url).then(e=>e.default),"../assets/illustrations/wrench.webp":()=>t(()=>import("./wrench-BnDeYFeQ-CpdZvmQw.js"),[],import.meta.url).then(e=>e.default)}),Ee=e=>{const r=v(!1),a=v(!1),s=v(null),p=v("");let c=null;const m=w(()=>Ae[e.size]),y=async()=>{const i=we[`../assets/illustrations/${e.name}.webp`];if(!i){a.value=!0;return}try{p.value=await i()}catch{a.value=!0}},u=()=>{a.value=!0},n=async()=>{await y(),r.value=!0},o=()=>{if(!e.lazyLoad){n();return}if(c&&(c(),c=null),s.value){const{stop:i}=se(s,([{isIntersecting:x}])=>{x&&(n(),i())},{threshold:.1,rootMargin:"50px"});c=i}};return ee(()=>{o()}),te(()=>{c&&c()}),X(()=>e.name,()=>{r.value=!1,p.value="",o()}),{sizeValue:m,isLoaded:r,hasError:a,imageSrc:Y(p),imageContainer:s,handleImageError:u}},_e=["src","alt"],Ce=["aria-label"],Ie=W({__name:"Image",props:Te,setup(e){const r=e;ve(r);const a=U("image"),{sizeValue:s,isLoaded:p,imageSrc:c,imageContainer:m,handleImageError:y,hasError:u}=Ee(r);return(n,o)=>(g(),f("figure",{class:T(l(a).b("container")),ref_key:"imageContainer",ref:m,style:Z({width:l(s),height:l(s),minWidth:l(s),minHeight:l(s)})},[l(p)&&!l(u)?(g(),f("img",{key:0,src:l(c),alt:n.name,class:T(l(a).b()),onError:o[0]||(o[0]=(...i)=>l(y)&&l(y)(...i))},null,42,_e)):l(u)?(g(),f("div",{key:2,class:T([l(a).e("placeholder"),`text-size-${n.size}`]),role:"img","aria-label":"Error al cargar la imagen"}," 404 ",2)):(g(),f("div",{key:1,class:T(l(a).e("placeholder")),role:"img","aria-label":`Cargando imagen: ${n.name}`},null,10,Ce))],6))}}),Be=ce({showAlert:{type:Boolean,default:!1},type:{type:_(String),default:"info"},title:{type:String,default:""},description:{type:String,default:""},imageName:{type:_(String),default:""},imageSize:{type:_(String),default:"lg"},primaryText:{type:String,default:""},secondaryText:{type:String,default:""},tertiaryText:{type:String,default:""},hideButtonClose:{type:Boolean,default:!1},checkboxes:{type:_(Array),default:()=>[]}});function V(e,r,a){const s=a.length?{checkboxStates:[...a]}:{};e("next",{...r,...s})}const ke=(e,r)=>{const a={success:"check",error:"prohibited-red",warning:"warning-sign-yellow",info:"information",important:"alert"},s=w(()=>e.imageName||(e.type?a[e.type]:"information")),p=w(()=>e.imageSize||"lg"),c=v([]);X(()=>e.checkboxes,o=>{o?.length?c.value=o.map(i=>i.checked??!1):c.value=[]},{immediate:!0,deep:!0});const m=w(()=>{const o=e.checkboxes;return o?.length?o.some((i,x)=>i.required===!0&&!c.value[x]):!1}),y=(o,i)=>{const x=!!i;c.value[o]=x,e.checkboxes?.[o]?.onChange?.(x)},u=w(()=>{const o=[],i=()=>[...c.value];return e.primaryText&&o.push({text:e.primaryText,variant:"primary",disabled:m.value,onClick:()=>V(r,{isPrimary:!0,isSecondary:!1,isTertiary:!1},i())}),e.secondaryText&&o.push({text:e.secondaryText,variant:"secondary",onClick:()=>V(r,{isPrimary:!1,isSecondary:!0,isTertiary:!1},i())}),e.tertiaryText&&o.push({text:e.tertiaryText,variant:"tertiary",onClick:()=>V(r,{isPrimary:!1,isSecondary:!1,isTertiary:!0},i())}),o});return{computedImageName:s,computedImageSize:p,footerButtons:u,handleClose:()=>{r("close")},checkboxStates:c,onCheckboxModelUpdate:y}};let A=null,$=0;function d(e){return new Promise(r=>{const a=++$;if(A){const n=A;if(A=null,n.closedRef.current){E(null,n.container);try{n.container.remove()}catch{}}else{n.closedRef.current=!0,E(null,n.container);try{n.container.remove()}catch{}n.resolve({isPrimary:!1,isSecondary:!1,isTertiary:!1,isCloseByOtherAlert:!0})}}if(a!==$){r({isPrimary:!1,isSecondary:!1,isTertiary:!1,isCloseByOtherAlert:!0});return}const s=document.createElement("div");document.body.appendChild(s);const p={current:!1},c=()=>{E(null,s);try{s.remove()}catch{}A?.container===s&&(A=null)},m=n=>{p.current||(p.current=!0,c(),r(n))},y=ae(P,{showAlert:!0,type:e.type||"info",title:e.title||"",description:e.description||"",imageName:e.imageName||"",imageSize:e.imageSize||"lg",primaryText:e.primaryText||"",secondaryText:e.secondaryText||"",tertiaryText:e.tertiaryText||"",hideButtonClose:e.hideButtonClose||!1,checkboxes:e.checkboxes??[],onNext:n=>m(n),onClose:()=>m({isPrimary:!1,isSecondary:!1,isTertiary:!1,dismissedByClose:!0})}),u=ne(H,null,{default:()=>[y]});A={container:s,resolve:r,closedRef:p,requestId:a},E(u,s)})}const De=["innerHTML"],P=W({__name:"dialog-alert",props:Be,emits:["close","next"],setup(e,{emit:r}){const a=e,s=r,p=U("dialog-alert"),{computedImageName:c,computedImageSize:m,footerButtons:y,handleClose:u,checkboxStates:n,onCheckboxModelUpdate:o}=ke(a,s);return(i,x)=>(g(),O(l(de),{"model-value":i.showAlert,"show-close":!i.hideButtonClose,title:i.title,"footer-buttons":l(y),"append-to-body":"",onClose:l(u)},{image:N(()=>[l(c)?(g(),O(l(Ie),{key:0,name:l(c),size:l(m)},null,8,["name","size"])):G("",!0)]),default:N(()=>[i.description?(g(),f("div",{key:0,class:T(l(p).e("description")),innerHTML:i.description},null,10,De)):G("",!0),i.checkboxes?.length?(g(),f("div",{key:1,class:T(l(p).e("checkboxes"))},[(g(!0),f(oe,null,ie(i.checkboxes,(J,L)=>(g(),O(l(me),{key:L,"model-value":l(n)[L],label:J.label,"onUpdate:modelValue":K=>l(o)(L,K)},null,8,["model-value","label","onUpdate:modelValue"]))),128))],2)):G("",!0)]),_:1},8,["model-value","show-close","title","footer-buttons","onClose"]))}});P.__docgenInfo={exportName:"default",displayName:"dialog-alert",description:"",tags:{},events:[{name:"close"},{name:"next",type:{names:["AlertButtonResult"]}}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/dialog-alert/src/dialog-alert.vue"]};pe(P,{DialogAlert:P});const ze="0.3.0",j={"@flash-global66/g-checkbox":"^0.2.1","@flash-global66/g-config-provider":"0.0.8","@flash-global66/g-dialog":"0.0.8","@flash-global66/g-image":"0.0.3","element-plus":"^2.9.7",vue:"^3.2.0"},h={name:"AlertExampleWrapper",props:{codeExample:{type:String,required:!0},title:{type:String,default:""},description:{type:String,default:""}},setup(e,{slots:r}){return()=>r.default?r.default():null}},lt={title:"Data/Dialog Alert",decorators:[e=>({components:{story:e,GConfigProvider:H},template:"<GConfigProvider><story /></GConfigProvider>"})],parameters:{docs:{description:{component:`
El componente Dialog Alert permite invocar alertas directamente mediante funciones.

> Versión actual: ${ze}

## Características
- Diferentes tipos de alerta (success, error, warning, info, important)
- Títulos y descripciones personalizables
- Hasta tres botones de acción (primario, secundario, terciario)
- Imágenes personalizables con diferentes tamaños
- API programática mediante Promise
- Checkboxes opcionales bajo la descripción con validación del botón primario

### Instalación

\`\`\`bash
yarn add @flash-global66/g-dialog-alert
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { openAlert } from '@flash-global66/g-dialog-alert';

# recomendado importar en los estilos globales
import '@flash-global66/g-dialog-alert/styles.scss';
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias. Puede que funcione con otras versiones, pero no se garantiza.
${ge(j)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${q(j)}

# Dependencias externas
yarn add ${q(j,!0)}
\`\`\`

### Ejemplo de uso

La función \`openAlert\` devuelve una promesa que se resuelve cuando el usuario interactúa con la alerta:

\`\`\`ts
import { openAlert } from '@flash-global66/g-dialog-alert';

openAlert({
  type: "warning",
  title: "Confirmar cambios",
  description: "¿Qué acción deseas realizar con los cambios?",
  primaryText: "Guardar cambios",
  secondaryText: "Descartar",
  tertiaryText: "Ver detalles"
}).then(result => {
  if (result.isPrimary) {
    // Usuario quiere guardar
    guardarCambios();
  } else if (result.isSecondary) {
    // Usuario quiere descartar
    descartarCambios();
  } else if (result.isTertiary) {
    // Usuario quiere ver detalles
    mostrarDetalles();
  } else if (result.dismissedByClose) {
    // Usuario cerró el diálogo con X o clic fuera
  }
});
\`\`\`
`}},status:{type:"stable"}},argTypes:{type:{description:"Tipo de alerta que define el ícono y estilo",control:"select",options:["success","error","warning","info","important"],table:{category:"Principales",type:{summary:"'success' | 'error' | 'warning' | 'info' | 'important'"}}},title:{description:"Título de la alerta",control:"text",table:{category:"Principales",type:{summary:"string"}}},description:{description:"Descripción o mensaje de la alerta",control:"text",table:{category:"Principales",type:{summary:"string"}}},primaryText:{description:"Texto del botón primario",control:"text",table:{category:"Botones",type:{summary:"string"}}},secondaryText:{description:"Texto del botón secundario",control:"text",table:{category:"Botones",type:{summary:"string"}}},tertiaryText:{description:"Texto del botón terciario",control:"text",table:{category:"Botones",type:{summary:"string"}}},hideButtonClose:{description:"Oculta el botón de cerrar (X)",control:"boolean",table:{category:"Botones",type:{summary:"boolean"},defaultValue:{summary:"false"}}},imageName:{description:"Nombre de la imagen personalizada",control:"select",options:["",...ue],table:{category:"Personalización",type:{summary:"string"}}},imageSize:{description:"Tamaño de la imagen",control:"select",options:["xs","sm","md","lg","xl","2xl","3xl"],table:{category:"Personalización",type:{summary:Object.keys(ye).join(" | ")},defaultValue:{summary:"lg"}}},checkboxes:{description:"Checkbox. Puede ser uno o varios. Cada ítem debe incluir un `label`. pero también se puede indicar si es un checkbox obligatorio o no con `required` deshabilita el botón primario hasta marcarlo. `onChange` es opcional. `checked` define el estado inicial.",control:"object",table:{category:"Contenido",type:{summary:"AlertCheckboxItem[]",detail:"{ label: string; required?: boolean; checked?: boolean; onChange?: (checked: boolean) => void }[]"},defaultValue:{summary:"[]"}}}},args:{type:"info",title:"Título de ejemplo",description:"Esta es una descripción de ejemplo",primaryText:"Aceptar",secondaryText:"Cancelar",tertiaryText:"",hideButtonClose:!1,imageName:void 0,imageSize:"lg",checkboxes:[]}},C={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del componente Dialog Alert. Desde los controles puedes probar todas las propiedades disponibles."},source:{code:`
// Importar el componente
import { openAlert } from '@flash-global66/g-dialog-alert';

// Abrir una alerta básica
openAlert({
  type: "info",
  title: "Título de ejemplo",
  description: "Esta es una descripción de ejemplo",
  primaryText: "Aceptar",
  secondaryText: "Cancelar"
});`}}},render:e=>({components:{GButton:b,AlertExampleWrapper:h},setup(){const r=()=>{d({type:e.type,title:e.title||"Título de ejemplo",description:e.description||"Descripción de ejemplo",primaryText:e.primaryText,secondaryText:e.secondaryText,tertiaryText:e.tertiaryText,hideButtonClose:e.hideButtonClose,imageName:e.imageName,imageSize:e.imageSize,checkboxes:e.checkboxes?.length?e.checkboxes:void 0})},a=`
// Importar la función openAlert
import { openAlert } from '@flash-global66/g-dialog-alert';

// Abrir una alerta con opciones personalizadas
openAlert({
  type: "${e.type}",
  title: "${e.title||"Título de ejemplo"}",
  description: "${e.description||"Descripción de ejemplo"}",
  primaryText: "${e.primaryText}",
  secondaryText: "${e.secondaryText}",
  tertiaryText: "${e.tertiaryText}",
  hideButtonClose: ${e.hideButtonClose},
  ${e.imageName?`imageName: "${e.imageName}",`:""}
  ${e.imageSize?`imageSize: "${e.imageSize}"`:""}
});`;return{showAlert:r,codeExample:a}},template:`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-4 p-4">
          <p class="mb-4 text-gray-600">
            Haz clic en el botón para mostrar una alerta con las propiedades seleccionadas.
          </p>
          <GButton @click="showAlert" variant="primary">Mostrar Alerta Personalizada</GButton>
        </div>
      </alert-example-wrapper>
    `})},I={name:"Checkboxes",parameters:{docs:{description:{story:"Checkboxes bajo la descripción: útiles para términos, “no volver a mostrar”, etc. Si algún ítem tiene `required: true`, el botón primario permanece deshabilitado hasta marcarlo. El resultado de `openAlert` incluye `checkboxStates` en el mismo orden que el array."},source:{code:`
import { openAlert } from '@flash-global66/g-dialog-alert';

openAlert({
  type: 'warning',
  title: 'Antes de continuar',
  description: 'Confirma la información y acepta los términos si aplica.',
  primaryText: 'Aceptar',
  secondaryText: 'Cancelar',
  checkboxes: [
    { label: 'Acepto los términos y condiciones', required: true, checked: false },
    {
      label: 'No volver a mostrar este mensaje',
      onChange: (checked) => {
        /* opcional: telemetría o estado local */
      }
    }
  ]
}).then((result) => {
  if (result.isPrimary && result.checkboxStates) {
    const [terminos, noMostrarDeNuevo] = result.checkboxStates;
  }
});`}}},render:()=>({components:{GButton:b,AlertExampleWrapper:h},setup(){return{showAlert:()=>{d({type:"warning",title:"Antes de continuar",description:"Confirma la información y acepta los términos si aplica.",primaryText:"Aceptar",secondaryText:"Cancelar",checkboxes:[{label:"Acepto los términos y condiciones",required:!0,checked:!1},{label:"No volver a mostrar este mensaje",onChange:()=>{}}]})},codeExample:`
import { openAlert } from '@flash-global66/g-dialog-alert';

openAlert({
  type: 'warning',
  title: 'Antes de continuar',
  description: 'Confirma la información y acepta los términos si aplica.',
  primaryText: 'Aceptar',
  secondaryText: 'Cancelar',
  checkboxes: [
    { label: 'Acepto los términos y condiciones', required: true },
    { label: 'No volver a mostrar este mensaje', onChange: (checked) => { /* ... */ } }
  ]
});`}},template:`
      <alert-example-wrapper :code-example="codeExample">
        <div class="p-4 space-y-4">
          <p class="text-gray-600 text-sm">
            El botón primario está deshabilitado hasta marcar el checkbox obligatorio.
          </p>
          <GButton @click="showAlert" variant="primary">Mostrar alerta con checkboxes</GButton>
        </div>
      </alert-example-wrapper>
    `})},B={name:"Tipos",parameters:{docs:{description:{story:"El componente tiene 5 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, error, warning, info e important."},source:{code:`
// Alerta de éxito
openAlert({
  type: "success",
  title: "Operación exitosa",
  description: "Los datos se han guardado correctamente.",
  primaryText: "Aceptar"
});

// Alerta de error
openAlert({
  type: "error",
  title: "Error",
  description: "No se ha podido completar la operación.",
  primaryText: "Entendido"
});

// Alerta de advertencia
openAlert({
  type: "warning",
  title: "Advertencia",
  description: "Esta acción podría tener consecuencias.",
  primaryText: "Continuar",
  secondaryText: "Cancelar"
});

// Alerta informativa
openAlert({
  type: "info",
  title: "Información",
  description: "Te informamos que el sistema estará en mantenimiento mañana.",
  primaryText: "Entendido"
});

// Alerta importante
openAlert({
  type: "important",
  title: "Importante",
  description: "Debes actualizar tu contraseña antes de continuar.",
  primaryText: "Actualizar ahora",
  secondaryText: "Más tarde"
});`}}},render:()=>({components:{GButton:b,AlertExampleWrapper:h},setup(){return{showSuccessAlert:()=>{d({type:"success",title:"Operación exitosa",description:"Los datos se han guardado correctamente.",primaryText:"Aceptar"})},showErrorAlert:()=>{d({type:"error",title:"Error",description:"No se ha podido completar la operación.",primaryText:"Entendido"})},showWarningAlert:()=>{d({type:"warning",title:"Advertencia",description:"Esta acción podría tener consecuencias.",primaryText:"Continuar",secondaryText:"Cancelar"})},showInfoAlert:()=>{d({type:"info",title:"Información",description:"Te informamos que el sistema estará en mantenimiento mañana.",primaryText:"Entendido"})},showImportantAlert:()=>{d({type:"important",title:"Importante",description:"Debes actualizar tu contraseña antes de continuar.",primaryText:"Actualizar ahora",secondaryText:"Más tarde"})},codeExample:`
// Alerta de éxito
openAlert({
  type: "success",
  title: "Operación exitosa",
  description: "Los datos se han guardado correctamente.",
  primaryText: "Aceptar"
});

// Alerta de error
openAlert({
  type: "error",
  title: "Error",
  description: "No se ha podido completar la operación.",
  primaryText: "Entendido"
});

// Alerta de advertencia
openAlert({
  type: "warning",
  title: "Advertencia",
  description: "Esta acción podría tener consecuencias.",
  primaryText: "Continuar",
  secondaryText: "Cancelar"
});

// Alerta informativa
openAlert({
  type: "info",
  title: "Información",
  description: "Te informamos que el sistema estará en mantenimiento mañana.",
  primaryText: "Entendido"
});

// Alerta importante
openAlert({
  type: "important",
  title: "Importante",
  description: "Debes actualizar tu contraseña antes de continuar.",
  primaryText: "Actualizar ahora",
  secondaryText: "Más tarde"
});`}},template:`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Éxito</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con mensaje de éxito e icono de verificación.
              </p>
              <GButton @click="showSuccessAlert" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Error</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con mensaje de error e icono de prohibición.
              </p>
              <GButton @click="showErrorAlert" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Advertencia</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con mensaje de advertencia y dos botones.
              </p>
              <GButton @click="showWarningAlert" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Información</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con mensaje informativo.
              </p>
              <GButton @click="showInfoAlert" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Importante</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta importante para mensajes críticos.
              </p>
              <GButton @click="showImportantAlert" variant="primary">Mostrar</GButton>
            </div>
          </div>
        </div>
      </alert-example-wrapper>
    `})},k={name:"Botones múltiples",parameters:{docs:{description:{story:"El componente admite hasta tres botones diferentes: primario, secundario y terciario, lo que permite opciones más detalladas de interacción."},source:{code:`
// Un botón
openAlert({
  type: "info",
  title: "Un botón",
  description: "Alerta con un solo botón de acción.",
  primaryText: "Aceptar"
});

// Dos botones
openAlert({
  type: "warning",
  title: "Dos botones",
  description: "Alerta con dos botones de acción.",
  primaryText: "Continuar",
  secondaryText: "Cancelar"
});

// Tres botones
openAlert({
  type: "warning",
  title: "Tres botones",
  description: "¿Qué acción deseas realizar?",
  primaryText: "Guardar cambios",
  secondaryText: "Descartar",
  tertiaryText: "Ver detalles"
});`}}},render:()=>({components:{GButton:b,AlertExampleWrapper:h},setup(){return{showOneButton:()=>{d({type:"info",title:"Un botón",description:"Alerta con un solo botón de acción.",primaryText:"Aceptar"})},showTwoButtons:()=>{d({type:"warning",title:"Dos botones",description:"Alerta con dos botones de acción.",primaryText:"Continuar",secondaryText:"Cancelar"})},showThreeButtons:()=>{d({type:"warning",title:"Tres botones",description:"¿Qué acción deseas realizar?",primaryText:"Guardar cambios",secondaryText:"Descartar",tertiaryText:"Ver detalles"})},codeExample:`
// Un botón
openAlert({
  type: "info",
  title: "Un botón",
  description: "Alerta con un solo botón de acción.",
  primaryText: "Aceptar"
});

// Dos botones
openAlert({
  type: "warning",
  title: "Dos botones",
  description: "Alerta con dos botones de acción.",
  primaryText: "Continuar",
  secondaryText: "Cancelar"
});

// Tres botones
openAlert({
  type: "warning",
  title: "Tres botones",
  description: "¿Qué acción deseas realizar?",
  primaryText: "Guardar cambios",
  secondaryText: "Descartar",
  tertiaryText: "Ver detalles"
});`}},template:`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Un botón</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con un solo botón primario.
              </p>
              <GButton @click="showOneButton" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Dos botones</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con botones primario y secundario.
              </p>
              <GButton @click="showTwoButtons" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Tres botones</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con botones primario, secundario y terciario.
              </p>
              <GButton @click="showThreeButtons" variant="primary">Mostrar</GButton>
            </div>
          </div>
        </div>
      </alert-example-wrapper>
    `})},D={name:"Sin botón cerrar",parameters:{docs:{description:{story:"Cuando necesitas que el usuario realice una acción específica, puedes ocultar el botón de cierre con la propiedad hideButtonClose."},source:{code:`
// Con botón de cierre (comportamiento por defecto)
openAlert({
  type: "info",
  title: "Con botón de cierre",
  description: "Esta alerta tiene un botón de cierre (X) en la esquina superior derecha.",
  primaryText: "Aceptar"
});

// Sin botón de cierre
openAlert({
  type: "important",
  title: "Sin botón de cierre",
  description: "Esta alerta no tiene botón de cierre, solo se puede cerrar usando los botones de acción.",
  primaryText: "Aceptar",
  secondaryText: "Cancelar",
  hideButtonClose: true
});`}}},render:()=>({components:{GButton:b,AlertExampleWrapper:h},setup(){return{showWithCloseButton:()=>{d({type:"info",title:"Con botón de cierre",description:"Esta alerta tiene un botón de cierre (X) en la esquina superior derecha.",primaryText:"Aceptar"})},showWithoutCloseButton:()=>{d({type:"important",title:"Sin botón de cierre",description:"Esta alerta no tiene botón de cierre, solo se puede cerrar usando los botones de acción.",primaryText:"Aceptar",secondaryText:"Cancelar",hideButtonClose:!0})},codeExample:`
// Con botón de cierre (comportamiento por defecto)
openAlert({
  type: "info",
  title: "Con botón de cierre",
  description: "Esta alerta tiene un botón de cierre (X) en la esquina superior derecha.",
  primaryText: "Aceptar"
});

// Sin botón de cierre
openAlert({
  type: "important",
  title: "Sin botón de cierre",
  description: "Esta alerta no tiene botón de cierre, solo se puede cerrar usando los botones de acción.",
  primaryText: "Aceptar",
  secondaryText: "Cancelar",
  hideButtonClose: true
});`}},template:`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Con botón de cierre</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Comportamiento por defecto con botón X.
              </p>
              <GButton @click="showWithCloseButton" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Sin botón de cierre</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta sin botón X, forzando al usuario a elegir una opción.
              </p>
              <GButton @click="showWithoutCloseButton" variant="primary">Mostrar</GButton>
            </div>
          </div>
        </div>
      </alert-example-wrapper>
    `})},z={name:"Imágenes personalizadas",parameters:{docs:{description:{story:"Puedes personalizar la imagen mostrada en la alerta, así como su tamaño."},source:{code:`
// Imagen por defecto según el tipo
openAlert({
  type: "success",
  title: "Imagen por defecto",
  description: "Cada tipo de alerta tiene una imagen predeterminada asociada.",
  primaryText: "Aceptar"
});

// Imagen personalizada
openAlert({
  title: "Imagen personalizada",
  description: "Esta alerta usa una imagen personalizada.",
  primaryText: "Entendido",
  imageName: "globe"
});

// Imagen con tamaño personalizado
openAlert({
  title: "Imagen grande (3XL)",
  description: "Esta alerta muestra una imagen con tamaño 3XL.",
  primaryText: "Entendido",
  imageName: "globe",
  imageSize: "3xl"
});`}}},render:()=>({components:{GButton:b,AlertExampleWrapper:h},setup(){return{showDefaultImage:()=>{d({type:"success",title:"Imagen por defecto",description:"Cada tipo de alerta tiene una imagen predeterminada asociada.",primaryText:"Aceptar"})},showCustomImage:()=>{d({title:"Imagen personalizada",description:"Esta alerta usa una imagen personalizada.",primaryText:"Entendido",imageName:"globe"})},showLargeImage:()=>{d({title:"Imagen grande (3XL)",description:"Esta alerta muestra una imagen con tamaño 3XL.",primaryText:"Entendido",imageName:"globe",imageSize:"3xl"})},codeExample:`
// Imagen por defecto según el tipo
openAlert({
  type: "success",
  title: "Imagen por defecto",
  description: "Cada tipo de alerta tiene una imagen predeterminada asociada.",
  primaryText: "Aceptar"
});

// Imagen personalizada
openAlert({
  title: "Imagen personalizada",
  description: "Esta alerta usa una imagen personalizada.",
  primaryText: "Entendido",
  imageName: "globe"
});

// Imagen con tamaño personalizado
openAlert({
  title: "Imagen grande (3XL)",
  description: "Esta alerta muestra una imagen con tamaño 3XL.",
  primaryText: "Entendido",
  imageName: "globe",
  imageSize: "3xl"
});`}},template:`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Imagen por defecto</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Imagen automática según el tipo de alerta.
              </p>
              <GButton @click="showDefaultImage" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Imagen personalizada</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con una imagen personalizada.
              </p>
              <GButton @click="showCustomImage" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Imagen grande</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con una imagen de tamaño 3XL.
              </p>
              <GButton @click="showLargeImage" variant="primary">Mostrar</GButton>
            </div>
          </div>
        </div>
      </alert-example-wrapper>
    `})},S={name:"Manejo de promesas",parameters:{docs:{description:{story:"El método openAlert devuelve una promesa que se resuelve cuando el usuario interactúa con la alerta, lo que permite encadenar operaciones."},source:{code:`
// Ejemplo de flujo de interacción usando promesas
openAlert({
  type: "warning",
  title: "Confirmar operación",
  description: "¿Estás seguro de realizar esta operación?",
  primaryText: "Sí, continuar",
  secondaryText: "No, cancelar"
}).then(result => {
  if (result.isPrimary) {
    // El usuario quiere continuar
    // Aquí podríamos realizar una operación asíncrona
    
    // Después de completar la operación, mostramos un mensaje de éxito
    openAlert({
      type: "success",
      title: "Operación completada",
      description: "La operación se ha completado correctamente.",
      primaryText: "Aceptar"
    });
  } else if (result.isSecondary || result.dismissedByClose) {
    // El usuario canceló la operación
    openAlert({
      type: "info",
      title: "Operación cancelada",
      description: "Has cancelado la operación.",
      primaryText: "Entendido"
    });
  }
});`}}},render:()=>({components:{GButton:b,AlertExampleWrapper:h},setup(){return{showConfirmationFlow:()=>{d({type:"warning",title:"Confirmar operación",description:"¿Estás seguro de realizar esta operación?",primaryText:"Sí, continuar",secondaryText:"No, cancelar"}).then(a=>{a.isPrimary?setTimeout(()=>{d({type:"success",title:"Operación completada",description:"La operación se ha completado correctamente.",primaryText:"Aceptar"})},1e3):(a.isSecondary||a.dismissedByClose)&&d({type:"info",title:"Operación cancelada",description:"Has cancelado la operación.",primaryText:"Entendido"})})},codeExample:`
// Ejemplo de flujo de interacción usando promesas
openAlert({
  type: "warning",
  title: "Confirmar operación",
  description: "¿Estás seguro de realizar esta operación?",
  primaryText: "Sí, continuar",
  secondaryText: "No, cancelar"
}).then(result => {
  if (result.isPrimary) {
    // El usuario quiere continuar
    // Aquí podríamos realizar una operación asíncrona
    
    // Después de completar la operación, mostramos un mensaje de éxito
    openAlert({
      type: "success",
      title: "Operación completada",
      description: "La operación se ha completado correctamente.",
      primaryText: "Aceptar"
    });
  } else if (result.isSecondary || result.dismissedByClose) {
    // El usuario canceló la operación
    openAlert({
      type: "info",
      title: "Operación cancelada",
      description: "Has cancelado la operación.",
      primaryText: "Entendido"
    });
  }
});`}},template:`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Flujo de confirmación</h3>
            <p class="text-sm text-gray-600 mb-4">
              Demuestra cómo encadenar alertas usando promesas para crear un flujo de interacción.
            </p>
            <GButton @click="showConfirmationFlow" variant="primary">Iniciar flujo</GButton>
          </div>
        </div>
      </alert-example-wrapper>
    `})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico del componente Dialog Alert. Desde los controles puedes probar todas las propiedades disponibles.'
      },
      source: {
        code: \`
// Importar el componente
import { openAlert } from '@flash-global66/g-dialog-alert';

// Abrir una alerta básica
openAlert({
  type: "info",
  title: "Título de ejemplo",
  description: "Esta es una descripción de ejemplo",
  primaryText: "Aceptar",
  secondaryText: "Cancelar"
});\`
      }
    }
  },
  render: args => ({
    components: {
      GButton,
      AlertExampleWrapper
    },
    setup() {
      const showAlert = () => {
        openAlert({
          type: args.type,
          title: args.title || "Título de ejemplo",
          description: args.description || "Descripción de ejemplo",
          primaryText: args.primaryText,
          secondaryText: args.secondaryText,
          tertiaryText: args.tertiaryText,
          hideButtonClose: args.hideButtonClose,
          imageName: args.imageName,
          imageSize: args.imageSize,
          checkboxes: args.checkboxes?.length ? args.checkboxes : undefined
        });
      };
      const codeExample = \`
// Importar la función openAlert
import { openAlert } from '@flash-global66/g-dialog-alert';

// Abrir una alerta con opciones personalizadas
openAlert({
  type: "\${args.type}",
  title: "\${args.title || "Título de ejemplo"}",
  description: "\${args.description || "Descripción de ejemplo"}",
  primaryText: "\${args.primaryText}",
  secondaryText: "\${args.secondaryText}",
  tertiaryText: "\${args.tertiaryText}",
  hideButtonClose: \${args.hideButtonClose},
  \${args.imageName ? \`imageName: "\${args.imageName}",\` : ''}
  \${args.imageSize ? \`imageSize: "\${args.imageSize}"\` : ''}
});\`;
      return {
        showAlert,
        codeExample
      };
    },
    template: \`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-4 p-4">
          <p class="mb-4 text-gray-600">
            Haz clic en el botón para mostrar una alerta con las propiedades seleccionadas.
          </p>
          <GButton @click="showAlert" variant="primary">Mostrar Alerta Personalizada</GButton>
        </div>
      </alert-example-wrapper>
    \`
  })
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Checkboxes',
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes bajo la descripción: útiles para términos, “no volver a mostrar”, etc. Si algún ítem tiene \`required: true\`, el botón primario permanece deshabilitado hasta marcarlo. El resultado de \`openAlert\` incluye \`checkboxStates\` en el mismo orden que el array.'
      },
      source: {
        code: \`
import { openAlert } from '@flash-global66/g-dialog-alert';

openAlert({
  type: 'warning',
  title: 'Antes de continuar',
  description: 'Confirma la información y acepta los términos si aplica.',
  primaryText: 'Aceptar',
  secondaryText: 'Cancelar',
  checkboxes: [
    { label: 'Acepto los términos y condiciones', required: true, checked: false },
    {
      label: 'No volver a mostrar este mensaje',
      onChange: (checked) => {
        /* opcional: telemetría o estado local */
      }
    }
  ]
}).then((result) => {
  if (result.isPrimary && result.checkboxStates) {
    const [terminos, noMostrarDeNuevo] = result.checkboxStates;
  }
});\`
      }
    }
  },
  render: () => ({
    components: {
      GButton,
      AlertExampleWrapper
    },
    setup() {
      const showAlert = () => {
        openAlert({
          type: 'warning',
          title: 'Antes de continuar',
          description: 'Confirma la información y acepta los términos si aplica.',
          primaryText: 'Aceptar',
          secondaryText: 'Cancelar',
          checkboxes: [{
            label: 'Acepto los términos y condiciones',
            required: true,
            checked: false
          }, {
            label: 'No volver a mostrar este mensaje',
            onChange: () => undefined
          }]
        });
      };
      const codeExample = \`
import { openAlert } from '@flash-global66/g-dialog-alert';

openAlert({
  type: 'warning',
  title: 'Antes de continuar',
  description: 'Confirma la información y acepta los términos si aplica.',
  primaryText: 'Aceptar',
  secondaryText: 'Cancelar',
  checkboxes: [
    { label: 'Acepto los términos y condiciones', required: true },
    { label: 'No volver a mostrar este mensaje', onChange: (checked) => { /* ... */ } }
  ]
});\`;
      return {
        showAlert,
        codeExample
      };
    },
    template: \`
      <alert-example-wrapper :code-example="codeExample">
        <div class="p-4 space-y-4">
          <p class="text-gray-600 text-sm">
            El botón primario está deshabilitado hasta marcar el checkbox obligatorio.
          </p>
          <GButton @click="showAlert" variant="primary">Mostrar alerta con checkboxes</GButton>
        </div>
      </alert-example-wrapper>
    \`
  })
}`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Tipos',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene 5 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, error, warning, info e important.'
      },
      source: {
        code: \`
// Alerta de éxito
openAlert({
  type: "success",
  title: "Operación exitosa",
  description: "Los datos se han guardado correctamente.",
  primaryText: "Aceptar"
});

// Alerta de error
openAlert({
  type: "error",
  title: "Error",
  description: "No se ha podido completar la operación.",
  primaryText: "Entendido"
});

// Alerta de advertencia
openAlert({
  type: "warning",
  title: "Advertencia",
  description: "Esta acción podría tener consecuencias.",
  primaryText: "Continuar",
  secondaryText: "Cancelar"
});

// Alerta informativa
openAlert({
  type: "info",
  title: "Información",
  description: "Te informamos que el sistema estará en mantenimiento mañana.",
  primaryText: "Entendido"
});

// Alerta importante
openAlert({
  type: "important",
  title: "Importante",
  description: "Debes actualizar tu contraseña antes de continuar.",
  primaryText: "Actualizar ahora",
  secondaryText: "Más tarde"
});\`
      }
    }
  },
  render: () => ({
    components: {
      GButton,
      AlertExampleWrapper
    },
    setup() {
      const showSuccessAlert = () => {
        openAlert({
          type: "success",
          title: "Operación exitosa",
          description: "Los datos se han guardado correctamente.",
          primaryText: "Aceptar"
        });
      };
      const showErrorAlert = () => {
        openAlert({
          type: "error",
          title: "Error",
          description: "No se ha podido completar la operación.",
          primaryText: "Entendido"
        });
      };
      const showWarningAlert = () => {
        openAlert({
          type: "warning",
          title: "Advertencia",
          description: "Esta acción podría tener consecuencias.",
          primaryText: "Continuar",
          secondaryText: "Cancelar"
        });
      };
      const showInfoAlert = () => {
        openAlert({
          type: "info",
          title: "Información",
          description: "Te informamos que el sistema estará en mantenimiento mañana.",
          primaryText: "Entendido"
        });
      };
      const showImportantAlert = () => {
        openAlert({
          type: "important",
          title: "Importante",
          description: "Debes actualizar tu contraseña antes de continuar.",
          primaryText: "Actualizar ahora",
          secondaryText: "Más tarde"
        });
      };
      const codeExample = \`
// Alerta de éxito
openAlert({
  type: "success",
  title: "Operación exitosa",
  description: "Los datos se han guardado correctamente.",
  primaryText: "Aceptar"
});

// Alerta de error
openAlert({
  type: "error",
  title: "Error",
  description: "No se ha podido completar la operación.",
  primaryText: "Entendido"
});

// Alerta de advertencia
openAlert({
  type: "warning",
  title: "Advertencia",
  description: "Esta acción podría tener consecuencias.",
  primaryText: "Continuar",
  secondaryText: "Cancelar"
});

// Alerta informativa
openAlert({
  type: "info",
  title: "Información",
  description: "Te informamos que el sistema estará en mantenimiento mañana.",
  primaryText: "Entendido"
});

// Alerta importante
openAlert({
  type: "important",
  title: "Importante",
  description: "Debes actualizar tu contraseña antes de continuar.",
  primaryText: "Actualizar ahora",
  secondaryText: "Más tarde"
});\`;
      return {
        showSuccessAlert,
        showErrorAlert,
        showWarningAlert,
        showInfoAlert,
        showImportantAlert,
        codeExample
      };
    },
    template: \`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Éxito</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con mensaje de éxito e icono de verificación.
              </p>
              <GButton @click="showSuccessAlert" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Error</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con mensaje de error e icono de prohibición.
              </p>
              <GButton @click="showErrorAlert" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Advertencia</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con mensaje de advertencia y dos botones.
              </p>
              <GButton @click="showWarningAlert" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Información</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con mensaje informativo.
              </p>
              <GButton @click="showInfoAlert" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Importante</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta importante para mensajes críticos.
              </p>
              <GButton @click="showImportantAlert" variant="primary">Mostrar</GButton>
            </div>
          </div>
        </div>
      </alert-example-wrapper>
    \`
  })
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Botones múltiples',
  parameters: {
    docs: {
      description: {
        story: 'El componente admite hasta tres botones diferentes: primario, secundario y terciario, lo que permite opciones más detalladas de interacción.'
      },
      source: {
        code: \`
// Un botón
openAlert({
  type: "info",
  title: "Un botón",
  description: "Alerta con un solo botón de acción.",
  primaryText: "Aceptar"
});

// Dos botones
openAlert({
  type: "warning",
  title: "Dos botones",
  description: "Alerta con dos botones de acción.",
  primaryText: "Continuar",
  secondaryText: "Cancelar"
});

// Tres botones
openAlert({
  type: "warning",
  title: "Tres botones",
  description: "¿Qué acción deseas realizar?",
  primaryText: "Guardar cambios",
  secondaryText: "Descartar",
  tertiaryText: "Ver detalles"
});\`
      }
    }
  },
  render: () => ({
    components: {
      GButton,
      AlertExampleWrapper
    },
    setup() {
      const showOneButton = () => {
        openAlert({
          type: "info",
          title: "Un botón",
          description: "Alerta con un solo botón de acción.",
          primaryText: "Aceptar"
        });
      };
      const showTwoButtons = () => {
        openAlert({
          type: "warning",
          title: "Dos botones",
          description: "Alerta con dos botones de acción.",
          primaryText: "Continuar",
          secondaryText: "Cancelar"
        });
      };
      const showThreeButtons = () => {
        openAlert({
          type: "warning",
          title: "Tres botones",
          description: "¿Qué acción deseas realizar?",
          primaryText: "Guardar cambios",
          secondaryText: "Descartar",
          tertiaryText: "Ver detalles"
        });
      };
      const codeExample = \`
// Un botón
openAlert({
  type: "info",
  title: "Un botón",
  description: "Alerta con un solo botón de acción.",
  primaryText: "Aceptar"
});

// Dos botones
openAlert({
  type: "warning",
  title: "Dos botones",
  description: "Alerta con dos botones de acción.",
  primaryText: "Continuar",
  secondaryText: "Cancelar"
});

// Tres botones
openAlert({
  type: "warning",
  title: "Tres botones",
  description: "¿Qué acción deseas realizar?",
  primaryText: "Guardar cambios",
  secondaryText: "Descartar",
  tertiaryText: "Ver detalles"
});\`;
      return {
        showOneButton,
        showTwoButtons,
        showThreeButtons,
        codeExample
      };
    },
    template: \`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Un botón</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con un solo botón primario.
              </p>
              <GButton @click="showOneButton" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Dos botones</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con botones primario y secundario.
              </p>
              <GButton @click="showTwoButtons" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Tres botones</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con botones primario, secundario y terciario.
              </p>
              <GButton @click="showThreeButtons" variant="primary">Mostrar</GButton>
            </div>
          </div>
        </div>
      </alert-example-wrapper>
    \`
  })
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Sin botón cerrar',
  parameters: {
    docs: {
      description: {
        story: 'Cuando necesitas que el usuario realice una acción específica, puedes ocultar el botón de cierre con la propiedad hideButtonClose.'
      },
      source: {
        code: \`
// Con botón de cierre (comportamiento por defecto)
openAlert({
  type: "info",
  title: "Con botón de cierre",
  description: "Esta alerta tiene un botón de cierre (X) en la esquina superior derecha.",
  primaryText: "Aceptar"
});

// Sin botón de cierre
openAlert({
  type: "important",
  title: "Sin botón de cierre",
  description: "Esta alerta no tiene botón de cierre, solo se puede cerrar usando los botones de acción.",
  primaryText: "Aceptar",
  secondaryText: "Cancelar",
  hideButtonClose: true
});\`
      }
    }
  },
  render: () => ({
    components: {
      GButton,
      AlertExampleWrapper
    },
    setup() {
      const showWithCloseButton = () => {
        openAlert({
          type: "info",
          title: "Con botón de cierre",
          description: "Esta alerta tiene un botón de cierre (X) en la esquina superior derecha.",
          primaryText: "Aceptar"
        });
      };
      const showWithoutCloseButton = () => {
        openAlert({
          type: "important",
          title: "Sin botón de cierre",
          description: "Esta alerta no tiene botón de cierre, solo se puede cerrar usando los botones de acción.",
          primaryText: "Aceptar",
          secondaryText: "Cancelar",
          hideButtonClose: true
        });
      };
      const codeExample = \`
// Con botón de cierre (comportamiento por defecto)
openAlert({
  type: "info",
  title: "Con botón de cierre",
  description: "Esta alerta tiene un botón de cierre (X) en la esquina superior derecha.",
  primaryText: "Aceptar"
});

// Sin botón de cierre
openAlert({
  type: "important",
  title: "Sin botón de cierre",
  description: "Esta alerta no tiene botón de cierre, solo se puede cerrar usando los botones de acción.",
  primaryText: "Aceptar",
  secondaryText: "Cancelar",
  hideButtonClose: true
});\`;
      return {
        showWithCloseButton,
        showWithoutCloseButton,
        codeExample
      };
    },
    template: \`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Con botón de cierre</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Comportamiento por defecto con botón X.
              </p>
              <GButton @click="showWithCloseButton" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Sin botón de cierre</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta sin botón X, forzando al usuario a elegir una opción.
              </p>
              <GButton @click="showWithoutCloseButton" variant="primary">Mostrar</GButton>
            </div>
          </div>
        </div>
      </alert-example-wrapper>
    \`
  })
}`,...D.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Imágenes personalizadas',
  parameters: {
    docs: {
      description: {
        story: 'Puedes personalizar la imagen mostrada en la alerta, así como su tamaño.'
      },
      source: {
        code: \`
// Imagen por defecto según el tipo
openAlert({
  type: "success",
  title: "Imagen por defecto",
  description: "Cada tipo de alerta tiene una imagen predeterminada asociada.",
  primaryText: "Aceptar"
});

// Imagen personalizada
openAlert({
  title: "Imagen personalizada",
  description: "Esta alerta usa una imagen personalizada.",
  primaryText: "Entendido",
  imageName: "globe"
});

// Imagen con tamaño personalizado
openAlert({
  title: "Imagen grande (3XL)",
  description: "Esta alerta muestra una imagen con tamaño 3XL.",
  primaryText: "Entendido",
  imageName: "globe",
  imageSize: "3xl"
});\`
      }
    }
  },
  render: () => ({
    components: {
      GButton,
      AlertExampleWrapper
    },
    setup() {
      const showDefaultImage = () => {
        openAlert({
          type: "success",
          title: "Imagen por defecto",
          description: "Cada tipo de alerta tiene una imagen predeterminada asociada.",
          primaryText: "Aceptar"
        });
      };
      const showCustomImage = () => {
        openAlert({
          title: "Imagen personalizada",
          description: "Esta alerta usa una imagen personalizada.",
          primaryText: "Entendido",
          imageName: "globe"
        });
      };
      const showLargeImage = () => {
        openAlert({
          title: "Imagen grande (3XL)",
          description: "Esta alerta muestra una imagen con tamaño 3XL.",
          primaryText: "Entendido",
          imageName: "globe",
          imageSize: "3xl"
        });
      };
      const codeExample = \`
// Imagen por defecto según el tipo
openAlert({
  type: "success",
  title: "Imagen por defecto",
  description: "Cada tipo de alerta tiene una imagen predeterminada asociada.",
  primaryText: "Aceptar"
});

// Imagen personalizada
openAlert({
  title: "Imagen personalizada",
  description: "Esta alerta usa una imagen personalizada.",
  primaryText: "Entendido",
  imageName: "globe"
});

// Imagen con tamaño personalizado
openAlert({
  title: "Imagen grande (3XL)",
  description: "Esta alerta muestra una imagen con tamaño 3XL.",
  primaryText: "Entendido",
  imageName: "globe",
  imageSize: "3xl"
});\`;
      return {
        showDefaultImage,
        showCustomImage,
        showLargeImage,
        codeExample
      };
    },
    template: \`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Imagen por defecto</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Imagen automática según el tipo de alerta.
              </p>
              <GButton @click="showDefaultImage" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Imagen personalizada</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con una imagen personalizada.
              </p>
              <GButton @click="showCustomImage" variant="primary">Mostrar</GButton>
            </div>
            
            <div class="border rounded-lg p-4 flex flex-col h-full">
              <h3 class="font-semibold mb-2">Imagen grande</h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow">
                Alerta con una imagen de tamaño 3XL.
              </p>
              <GButton @click="showLargeImage" variant="primary">Mostrar</GButton>
            </div>
          </div>
        </div>
      </alert-example-wrapper>
    \`
  })
}`,...z.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Manejo de promesas',
  parameters: {
    docs: {
      description: {
        story: 'El método openAlert devuelve una promesa que se resuelve cuando el usuario interactúa con la alerta, lo que permite encadenar operaciones.'
      },
      source: {
        code: \`
// Ejemplo de flujo de interacción usando promesas
openAlert({
  type: "warning",
  title: "Confirmar operación",
  description: "¿Estás seguro de realizar esta operación?",
  primaryText: "Sí, continuar",
  secondaryText: "No, cancelar"
}).then(result => {
  if (result.isPrimary) {
    // El usuario quiere continuar
    // Aquí podríamos realizar una operación asíncrona
    
    // Después de completar la operación, mostramos un mensaje de éxito
    openAlert({
      type: "success",
      title: "Operación completada",
      description: "La operación se ha completado correctamente.",
      primaryText: "Aceptar"
    });
  } else if (result.isSecondary || result.dismissedByClose) {
    // El usuario canceló la operación
    openAlert({
      type: "info",
      title: "Operación cancelada",
      description: "Has cancelado la operación.",
      primaryText: "Entendido"
    });
  }
});\`
      }
    }
  },
  render: () => ({
    components: {
      GButton,
      AlertExampleWrapper
    },
    setup() {
      const showConfirmationFlow = () => {
        openAlert({
          type: "warning",
          title: "Confirmar operación",
          description: "¿Estás seguro de realizar esta operación?",
          primaryText: "Sí, continuar",
          secondaryText: "No, cancelar"
        }).then(result => {
          if (result.isPrimary) {
            setTimeout(() => {
              openAlert({
                type: "success",
                title: "Operación completada",
                description: "La operación se ha completado correctamente.",
                primaryText: "Aceptar"
              });
            }, 1000);
          } else if (result.isSecondary || result.dismissedByClose) {
            openAlert({
              type: "info",
              title: "Operación cancelada",
              description: "Has cancelado la operación.",
              primaryText: "Entendido"
            });
          }
        });
      };
      const codeExample = \`
// Ejemplo de flujo de interacción usando promesas
openAlert({
  type: "warning",
  title: "Confirmar operación",
  description: "¿Estás seguro de realizar esta operación?",
  primaryText: "Sí, continuar",
  secondaryText: "No, cancelar"
}).then(result => {
  if (result.isPrimary) {
    // El usuario quiere continuar
    // Aquí podríamos realizar una operación asíncrona
    
    // Después de completar la operación, mostramos un mensaje de éxito
    openAlert({
      type: "success",
      title: "Operación completada",
      description: "La operación se ha completado correctamente.",
      primaryText: "Aceptar"
    });
  } else if (result.isSecondary || result.dismissedByClose) {
    // El usuario canceló la operación
    openAlert({
      type: "info",
      title: "Operación cancelada",
      description: "Has cancelado la operación.",
      primaryText: "Entendido"
    });
  }
});\`;
      return {
        showConfirmationFlow,
        codeExample
      };
    },
    template: \`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-8 p-4">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Flujo de confirmación</h3>
            <p class="text-sm text-gray-600 mb-4">
              Demuestra cómo encadenar alertas usando promesas para crear un flujo de interacción.
            </p>
            <GButton @click="showConfirmationFlow" variant="primary">Iniciar flujo</GButton>
          </div>
        </div>
      </alert-example-wrapper>
    \`
  })
}`,...S.parameters?.docs?.source}}};const ct=["Primary","WithCheckboxes","AllTypes","MultipleButtons","WithoutCloseButton","CustomImages","PromiseHandling"];export{B as AllTypes,z as CustomImages,k as MultipleButtons,C as Primary,S as PromiseHandling,I as WithCheckboxes,D as WithoutCloseButton,ct as __namedExportsOrder,lt as default};
