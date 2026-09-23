import{G as b}from"./index-BeqF1NXI.js";import{d as X,o as y,y as g,u as n,e as R,v as Z,g as A,j as T,n as J,l as U,M as K,r as v,x as Y,c as E,t as ee,X as ne,s as V,H as ae,b as te,N as re,ay as w,p as C,a as N,w as W,F as oe,A as ie,an as se,am as le}from"./iframe-Dct5CHxr.js";import{c as ce}from"./index-DWhPhD7W.js";import{u as H}from"./useEmptyValues-BnYvcW4O.js";import{t as pe}from"./index-Bl0NARfw.js";import{T as de}from"./index-CYhqEOXz.js";import{G as _}from"./ConfigProvider-7dg58IlU.js";import{w as me}from"./install.util-cBz1HN_T.js";import{a as ue,b as $}from"./documentation-stories-DmJzCMmf.js";import"./index-1T7U7QlS.js";import"./index-CZoNQBHQ.js";import"./useId-MLHLvdkG.js";import"./index-pMiYc9r3.js";import"./preload-helper-Dch09mLN.js";import"./index-DxlLUiSm.js";import"./event.constant-LtAI3-H4.js";import"./index-B1cyEMyk.js";import"./index-QAcBYSVr.js";import"./refs.util-D3l8TA3E.js";import"./pick-o9PB4dc4.js";import"./hasIn-CMXABBS8.js";import"./flatten-CM2gQvbF.js";import"./_baseFlatten-Bk93WOLP.js";import"./isEqual-D4JTyA6f.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-GU5Cqqg3.js";const L=["alert","at","barrier","bell","bolt","calendar","card","celebration","chat-bubble","check","clock","code","disconnected-plug","discount","document","dollar-currency","door","email","euro-currency","face-recognition","fingerprint","footsteps","gift-box","global66","globe","headset","id-card-back","id-card-front","information","key","location-pin","lock","magnifying-glass","otp","paper-airplane","people","pound-currency","price-tags","prohibited","prohibited-red","refresh","sales","scissors","stairs","usdt-usdc","user","users","vault","wallet","warning-sign","warning-sign-yellow","whatsapp","wrench"],xe={xs:"44px",sm:"64px",md:"80px",lg:"112px",xl:"160px","2xl":"208px","3xl":"260px"},ye="webp",ge="/illustrations",be=Symbol("gImageBaseUrl"),fe=U({name:{type:String,required:!0},size:{type:String,default:"md"},lazyLoad:{type:Boolean,default:!0}});function he(e){e.name&&!L.includes(e.name)&&K("Image",`Invalid image name: "${e.name}". Available image names: ${L.join(", ")}`)}const Ae=e=>{const a=v(!1),t=v(!1),o=v(null),p=v(""),c=Y(be,ge).replace(/\/+$/,"");let d=null;const u=E(()=>xe[e.size]),x=()=>{a.value=!0},s=()=>{t.value=!0},i=()=>{if(!L.includes(e.name)){t.value=!0;return}p.value=`${c}/${e.name}.${ye}`},r=()=>{if(!e.lazyLoad){i();return}if(d&&(d(),d=null),o.value){const{stop:m}=ce(o,([{isIntersecting:D}])=>{D&&(i(),m())},{threshold:.1,rootMargin:"50px"});d=m}};return ee(()=>{r()}),ne(()=>{d&&d()}),V(()=>e.name,()=>{a.value=!1,p.value="",t.value=!1,r()}),{sizeValue:u,isLoaded:a,hasError:t,imageSrc:ae(p),imageContainer:o,handleImageLoad:x,handleImageError:s}},Te=["src","alt"],ve=["aria-label"],Ee=X({__name:"Image",props:fe,setup(e){const a=e;he(a);const t=H("image"),{sizeValue:o,isLoaded:p,imageSrc:c,imageContainer:d,handleImageLoad:u,handleImageError:x,hasError:s}=Ae(a);return(i,r)=>(y(),g("figure",{class:A(n(t).b("container")),ref_key:"imageContainer",ref:d,style:J({width:n(o),height:n(o),minWidth:n(o),minHeight:n(o)})},[n(c)&&!n(s)?R((y(),g("img",{key:0,src:n(c),alt:i.name,class:A(n(t).b()),onLoad:r[0]||(r[0]=(...m)=>n(u)&&n(u)(...m)),onError:r[1]||(r[1]=(...m)=>n(x)&&n(x)(...m))},null,42,Te)),[[Z,n(p)]]):T("",!0),!n(p)&&!n(s)?(y(),g("div",{key:1,class:A(n(t).e("placeholder")),role:"img","aria-label":`Cargando imagen: ${i.name}`},null,10,ve)):T("",!0),n(s)?(y(),g("div",{key:2,class:A([n(t).e("placeholder"),`text-size-${i.size}`]),role:"img","aria-label":"Error al cargar la imagen"}," 404 ",2)):T("",!0)],6))}}),we=U({showAlert:{type:Boolean,default:!1},type:{type:C(String),default:"info"},title:{type:String,default:""},description:{type:String,default:""},imageName:{type:C(String),default:""},imageSize:{type:C(String),default:"lg"},primaryText:{type:String,default:""},secondaryText:{type:String,default:""},tertiaryText:{type:String,default:""},hideButtonClose:{type:Boolean,default:!1},checkboxes:{type:C(Array),default:()=>[]}});function q(e,a,t){const o=t.length?{checkboxStates:[...t]}:{};e("next",{...a,...o})}const Ce=(e,a)=>{const t={success:"check",error:"prohibited-red",warning:"warning-sign-yellow",info:"information",important:"alert"},o=E(()=>e.imageName||(e.type?t[e.type]:"information")),p=E(()=>e.imageSize||"lg"),c=v([]);V(()=>e.checkboxes,i=>{i?.length?c.value=i.map(r=>r.checked??!1):c.value=[]},{immediate:!0,deep:!0});const d=E(()=>{const i=e.checkboxes;return i?.length?i.some((r,m)=>r.required===!0&&!c.value[m]):!1}),u=(i,r)=>{const m=!!r;c.value[i]=m,e.checkboxes?.[i]?.onChange?.(m)},x=E(()=>{const i=[],r=()=>[...c.value];return e.primaryText&&i.push({text:e.primaryText,variant:"primary",disabled:d.value,onClick:()=>q(a,{isPrimary:!0,isSecondary:!1,isTertiary:!1},r())}),e.secondaryText&&i.push({text:e.secondaryText,variant:"secondary",onClick:()=>q(a,{isPrimary:!1,isSecondary:!0,isTertiary:!1},r())}),e.tertiaryText&&i.push({text:e.tertiaryText,variant:"tertiary",onClick:()=>q(a,{isPrimary:!1,isSecondary:!1,isTertiary:!0},r())}),i});return{computedImageName:o,computedImageSize:p,footerButtons:x,handleClose:()=>{a("close")},checkboxStates:c,onCheckboxModelUpdate:u}};let h=null,O=0;function l(e){return new Promise(a=>{const t=++O;if(h){const s=h;if(h=null,s.closedRef.current){w(null,s.container);try{s.container.remove()}catch{}}else{s.closedRef.current=!0,w(null,s.container);try{s.container.remove()}catch{}s.resolve({isPrimary:!1,isSecondary:!1,isTertiary:!1,isCloseByOtherAlert:!0})}}if(t!==O){a({isPrimary:!1,isSecondary:!1,isTertiary:!1,isCloseByOtherAlert:!0});return}const o=document.createElement("div");document.body.appendChild(o);const p={current:!1},c=()=>{w(null,o);try{o.remove()}catch{}h?.container===o&&(h=null)},d=s=>{p.current||(p.current=!0,c(),a(s))},u=te(P,{showAlert:!0,type:e.type||"info",title:e.title||"",description:e.description||"",imageName:e.imageName||"",imageSize:e.imageSize||"lg",primaryText:e.primaryText||"",secondaryText:e.secondaryText||"",tertiaryText:e.tertiaryText||"",hideButtonClose:e.hideButtonClose||!1,checkboxes:e.checkboxes??[],onNext:s=>d(s),onClose:()=>d({isPrimary:!1,isSecondary:!1,isTertiary:!1,dismissedByClose:!0})}),x=re(_,null,{default:()=>[u]});h={container:o,resolve:a,closedRef:p,requestId:t},w(x,o)})}const Be=["innerHTML"],P=X({__name:"dialog-alert",props:we,emits:["close","next"],setup(e,{emit:a}){const t=e,o=a,p=H("dialog-alert"),{computedImageName:c,computedImageSize:d,footerButtons:u,handleClose:x,checkboxStates:s,onCheckboxModelUpdate:i}=Ce(t,o);return(r,m)=>(y(),N(n(pe),{"model-value":r.showAlert,"show-close":!r.hideButtonClose,title:r.title,"footer-buttons":n(u),"append-to-body":"",onClose:n(x)},{image:W(()=>[n(c)?(y(),N(n(Ee),{key:0,name:n(c),size:n(d)},null,8,["name","size"])):T("",!0)]),default:W(()=>[r.description?(y(),g("div",{key:0,class:A(n(p).e("description")),innerHTML:r.description},null,10,Be)):T("",!0),r.checkboxes?.length?(y(),g("div",{key:1,class:A(n(p).e("checkboxes"))},[(y(!0),g(oe,null,ie(r.checkboxes,(D,j)=>(y(),N(n(de),{key:j,"model-value":n(s)[j],label:D.label,"onUpdate:modelValue":Q=>n(i)(j,Q)},null,8,["model-value","label","onUpdate:modelValue"]))),128))],2)):T("",!0)]),_:1},8,["model-value","show-close","title","footer-buttons","onClose"]))}});me(P,{DialogAlert:P});const Fe="0.3.24",M={"@flash-global66/g-checkbox":"^0.2.1","@flash-global66/g-config-provider":"0.0.8","@flash-global66/g-dialog":"0.0.8","@flash-global66/g-image":"0.0.3",vue:"^3.2.0"},f={name:"AlertExampleWrapper",props:{codeExample:{type:String,required:!0},title:{type:String,default:""},description:{type:String,default:""}},setup(e,{slots:a}){return()=>a.default?a.default():null}},en={title:"Data/Dialog Alert",decorators:[e=>({components:{story:e,GConfigProvider:_},template:"<GConfigProvider><story /></GConfigProvider>"})],parameters:{docs:{description:{component:`
El componente Dialog Alert permite invocar alertas directamente mediante funciones.

> Versión actual: ${Fe}

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
${ue(M)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${$(M)}

# Dependencias externas
yarn add ${$(M,!0)}
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
`}},status:{type:"stable"}},argTypes:{type:{description:"Tipo de alerta que define el ícono y estilo",control:"select",options:["success","error","warning","info","important"],table:{category:"Principales",type:{summary:"'success' | 'error' | 'warning' | 'info' | 'important'"}}},title:{description:"Título de la alerta",control:"text",table:{category:"Principales",type:{summary:"string"}}},description:{description:"Descripción o mensaje de la alerta",control:"text",table:{category:"Principales",type:{summary:"string"}}},primaryText:{description:"Texto del botón primario",control:"text",table:{category:"Botones",type:{summary:"string"}}},secondaryText:{description:"Texto del botón secundario",control:"text",table:{category:"Botones",type:{summary:"string"}}},tertiaryText:{description:"Texto del botón terciario",control:"text",table:{category:"Botones",type:{summary:"string"}}},hideButtonClose:{description:"Oculta el botón de cerrar (X)",control:"boolean",table:{category:"Botones",type:{summary:"boolean"},defaultValue:{summary:"false"}}},imageName:{description:"Nombre de la imagen personalizada",control:"select",options:["",...se],table:{category:"Personalización",type:{summary:"string"}}},imageSize:{description:"Tamaño de la imagen",control:"select",options:["xs","sm","md","lg","xl","2xl","3xl"],table:{category:"Personalización",type:{summary:Object.keys(le).join(" | ")},defaultValue:{summary:"lg"}}},checkboxes:{description:"Checkbox. Puede ser uno o varios. Cada ítem debe incluir un `label`. pero también se puede indicar si es un checkbox obligatorio o no con `required` deshabilita el botón primario hasta marcarlo. `onChange` es opcional. `checked` define el estado inicial.",control:"object",table:{category:"Contenido",type:{summary:"AlertCheckboxItem[]",detail:"{ label: string; required?: boolean; checked?: boolean; onChange?: (checked: boolean) => void }[]"},defaultValue:{summary:"[]"}}}},args:{type:"info",title:"Título de ejemplo",description:"Esta es una descripción de ejemplo",primaryText:"Aceptar",secondaryText:"Cancelar",tertiaryText:"",hideButtonClose:!1,imageName:void 0,imageSize:"lg",checkboxes:[]}},B={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del componente Dialog Alert. Desde los controles puedes probar todas las propiedades disponibles."},source:{code:`
// Importar el componente
import { openAlert } from '@flash-global66/g-dialog-alert';

// Abrir una alerta básica
openAlert({
  type: "info",
  title: "Título de ejemplo",
  description: "Esta es una descripción de ejemplo",
  primaryText: "Aceptar",
  secondaryText: "Cancelar"
});`}}},render:e=>({components:{GButton:b,AlertExampleWrapper:f},setup(){const a=()=>{l({type:e.type,title:e.title||"Título de ejemplo",description:e.description||"Descripción de ejemplo",primaryText:e.primaryText,secondaryText:e.secondaryText,tertiaryText:e.tertiaryText,hideButtonClose:e.hideButtonClose,imageName:e.imageName,imageSize:e.imageSize,checkboxes:e.checkboxes?.length?e.checkboxes:void 0})},t=`
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
});`;return{showAlert:a,codeExample:t}},template:`
      <alert-example-wrapper :code-example="codeExample">
        <div class="space-y-4 p-4">
          <p class="mb-4 text-gray-600">
            Haz clic en el botón para mostrar una alerta con las propiedades seleccionadas.
          </p>
          <GButton @click="showAlert" variant="primary">Mostrar Alerta Personalizada</GButton>
        </div>
      </alert-example-wrapper>
    `})},F={name:"Checkboxes",parameters:{docs:{description:{story:"Checkboxes bajo la descripción: útiles para términos, “no volver a mostrar”, etc. Si algún ítem tiene `required: true`, el botón primario permanece deshabilitado hasta marcarlo. El resultado de `openAlert` incluye `checkboxStates` en el mismo orden que el array."},source:{code:`
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
});`}}},render:()=>({components:{GButton:b,AlertExampleWrapper:f},setup(){return{showAlert:()=>{l({type:"warning",title:"Antes de continuar",description:"Confirma la información y acepta los términos si aplica.",primaryText:"Aceptar",secondaryText:"Cancelar",checkboxes:[{label:"Acepto los términos y condiciones",required:!0,checked:!1},{label:"No volver a mostrar este mensaje",onChange:()=>{}}]})},codeExample:`
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
    `})},I={name:"Tipos",parameters:{docs:{description:{story:"El componente tiene 5 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, error, warning, info e important."},source:{code:`
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
});`}}},render:()=>({components:{GButton:b,AlertExampleWrapper:f},setup(){return{showSuccessAlert:()=>{l({type:"success",title:"Operación exitosa",description:"Los datos se han guardado correctamente.",primaryText:"Aceptar"})},showErrorAlert:()=>{l({type:"error",title:"Error",description:"No se ha podido completar la operación.",primaryText:"Entendido"})},showWarningAlert:()=>{l({type:"warning",title:"Advertencia",description:"Esta acción podría tener consecuencias.",primaryText:"Continuar",secondaryText:"Cancelar"})},showInfoAlert:()=>{l({type:"info",title:"Información",description:"Te informamos que el sistema estará en mantenimiento mañana.",primaryText:"Entendido"})},showImportantAlert:()=>{l({type:"important",title:"Importante",description:"Debes actualizar tu contraseña antes de continuar.",primaryText:"Actualizar ahora",secondaryText:"Más tarde"})},codeExample:`
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
});`}}},render:()=>({components:{GButton:b,AlertExampleWrapper:f},setup(){return{showOneButton:()=>{l({type:"info",title:"Un botón",description:"Alerta con un solo botón de acción.",primaryText:"Aceptar"})},showTwoButtons:()=>{l({type:"warning",title:"Dos botones",description:"Alerta con dos botones de acción.",primaryText:"Continuar",secondaryText:"Cancelar"})},showThreeButtons:()=>{l({type:"warning",title:"Tres botones",description:"¿Qué acción deseas realizar?",primaryText:"Guardar cambios",secondaryText:"Descartar",tertiaryText:"Ver detalles"})},codeExample:`
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
    `})},z={name:"Sin botón cerrar",parameters:{docs:{description:{story:"Cuando necesitas que el usuario realice una acción específica, puedes ocultar el botón de cierre con la propiedad hideButtonClose."},source:{code:`
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
});`}}},render:()=>({components:{GButton:b,AlertExampleWrapper:f},setup(){return{showWithCloseButton:()=>{l({type:"info",title:"Con botón de cierre",description:"Esta alerta tiene un botón de cierre (X) en la esquina superior derecha.",primaryText:"Aceptar"})},showWithoutCloseButton:()=>{l({type:"important",title:"Sin botón de cierre",description:"Esta alerta no tiene botón de cierre, solo se puede cerrar usando los botones de acción.",primaryText:"Aceptar",secondaryText:"Cancelar",hideButtonClose:!0})},codeExample:`
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
    `})},S={name:"Imágenes personalizadas",parameters:{docs:{description:{story:"Puedes personalizar la imagen mostrada en la alerta, así como su tamaño."},source:{code:`
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
});`}}},render:()=>({components:{GButton:b,AlertExampleWrapper:f},setup(){return{showDefaultImage:()=>{l({type:"success",title:"Imagen por defecto",description:"Cada tipo de alerta tiene una imagen predeterminada asociada.",primaryText:"Aceptar"})},showCustomImage:()=>{l({title:"Imagen personalizada",description:"Esta alerta usa una imagen personalizada.",primaryText:"Entendido",imageName:"globe"})},showLargeImage:()=>{l({title:"Imagen grande (3XL)",description:"Esta alerta muestra una imagen con tamaño 3XL.",primaryText:"Entendido",imageName:"globe",imageSize:"3xl"})},codeExample:`
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
    `})},G={name:"Manejo de promesas",parameters:{docs:{description:{story:"El método openAlert devuelve una promesa que se resuelve cuando el usuario interactúa con la alerta, lo que permite encadenar operaciones."},source:{code:`
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
});`}}},render:()=>({components:{GButton:b,AlertExampleWrapper:f},setup(){return{showConfirmationFlow:()=>{l({type:"warning",title:"Confirmar operación",description:"¿Estás seguro de realizar esta operación?",primaryText:"Sí, continuar",secondaryText:"No, cancelar"}).then(t=>{t.isPrimary?setTimeout(()=>{l({type:"success",title:"Operación completada",description:"La operación se ha completado correctamente.",primaryText:"Aceptar"})},1e3):(t.isSecondary||t.dismissedByClose)&&l({type:"info",title:"Operación cancelada",description:"Has cancelado la operación.",primaryText:"Entendido"})})},codeExample:`
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
    `})},nn=["Primary","WithCheckboxes","AllTypes","MultipleButtons","WithoutCloseButton","CustomImages","PromiseHandling"];B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
          title: args.title || 'Título de ejemplo',
          description: args.description || 'Descripción de ejemplo',
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
  title: "\${args.title || 'Título de ejemplo'}",
  description: "\${args.description || 'Descripción de ejemplo'}",
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
}`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
          type: 'success',
          title: 'Operación exitosa',
          description: 'Los datos se han guardado correctamente.',
          primaryText: 'Aceptar'
        });
      };
      const showErrorAlert = () => {
        openAlert({
          type: 'error',
          title: 'Error',
          description: 'No se ha podido completar la operación.',
          primaryText: 'Entendido'
        });
      };
      const showWarningAlert = () => {
        openAlert({
          type: 'warning',
          title: 'Advertencia',
          description: 'Esta acción podría tener consecuencias.',
          primaryText: 'Continuar',
          secondaryText: 'Cancelar'
        });
      };
      const showInfoAlert = () => {
        openAlert({
          type: 'info',
          title: 'Información',
          description: 'Te informamos que el sistema estará en mantenimiento mañana.',
          primaryText: 'Entendido'
        });
      };
      const showImportantAlert = () => {
        openAlert({
          type: 'important',
          title: 'Importante',
          description: 'Debes actualizar tu contraseña antes de continuar.',
          primaryText: 'Actualizar ahora',
          secondaryText: 'Más tarde'
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
}`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
          type: 'info',
          title: 'Un botón',
          description: 'Alerta con un solo botón de acción.',
          primaryText: 'Aceptar'
        });
      };
      const showTwoButtons = () => {
        openAlert({
          type: 'warning',
          title: 'Dos botones',
          description: 'Alerta con dos botones de acción.',
          primaryText: 'Continuar',
          secondaryText: 'Cancelar'
        });
      };
      const showThreeButtons = () => {
        openAlert({
          type: 'warning',
          title: 'Tres botones',
          description: '¿Qué acción deseas realizar?',
          primaryText: 'Guardar cambios',
          secondaryText: 'Descartar',
          tertiaryText: 'Ver detalles'
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
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
          type: 'info',
          title: 'Con botón de cierre',
          description: 'Esta alerta tiene un botón de cierre (X) en la esquina superior derecha.',
          primaryText: 'Aceptar'
        });
      };
      const showWithoutCloseButton = () => {
        openAlert({
          type: 'important',
          title: 'Sin botón de cierre',
          description: 'Esta alerta no tiene botón de cierre, solo se puede cerrar usando los botones de acción.',
          primaryText: 'Aceptar',
          secondaryText: 'Cancelar',
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
}`,...z.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
          type: 'success',
          title: 'Imagen por defecto',
          description: 'Cada tipo de alerta tiene una imagen predeterminada asociada.',
          primaryText: 'Aceptar'
        });
      };
      const showCustomImage = () => {
        openAlert({
          title: 'Imagen personalizada',
          description: 'Esta alerta usa una imagen personalizada.',
          primaryText: 'Entendido',
          imageName: 'globe'
        });
      };
      const showLargeImage = () => {
        openAlert({
          title: 'Imagen grande (3XL)',
          description: 'Esta alerta muestra una imagen con tamaño 3XL.',
          primaryText: 'Entendido',
          imageName: 'globe',
          imageSize: '3xl'
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
}`,...S.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
          type: 'warning',
          title: 'Confirmar operación',
          description: '¿Estás seguro de realizar esta operación?',
          primaryText: 'Sí, continuar',
          secondaryText: 'No, cancelar'
        }).then(result => {
          if (result.isPrimary) {
            setTimeout(() => {
              openAlert({
                type: 'success',
                title: 'Operación completada',
                description: 'La operación se ha completado correctamente.',
                primaryText: 'Aceptar'
              });
            }, 1000);
          } else if (result.isSecondary || result.dismissedByClose) {
            openAlert({
              type: 'info',
              title: 'Operación cancelada',
              description: 'Has cancelado la operación.',
              primaryText: 'Entendido'
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
}`,...G.parameters?.docs?.source}}};export{I as AllTypes,S as CustomImages,k as MultipleButtons,B as Primary,G as PromiseHandling,F as WithCheckboxes,z as WithoutCloseButton,nn as __namedExportsOrder,en as default};
