import{d as se,r as n,c as D,o as ne,ah as ie,b as $,f as h,u as e,e as i,h as z,j as le,v as de,k as I,x as l,m as d,l as c,s as P,y as F,F as ce,z as pe,p as N,A as me,a1 as ue,T as fe}from"./vue.esm-bundler-C43JrhH2.js";import{G as ve}from"./index-BoUrZ4P6.js";import{O as be,G as ge}from"./index-dphAcb1L.js";import{o as we,e as ye,s as xe}from"./index-CGQvgwsn.js";import{y as he}from"./index-C3gUrHC2.js";import{u as Ce}from"./index-y9qm_QyA.js";import{b as De,w as ze}from"./install-CfJGiCvs.js";import{u as Ee}from"./index-D5bIuBCX.js";import{b as ke}from"./style-c1qAcfu9.js";import{G as w}from"./index-1xDgUv1h.js";import{G as y}from"./ConfigProvider-Br84NlF7.js";import{G as je}from"./index-D6FS4XlE.js";import{G as Ae}from"./index-DGopGXg3.js";import{a as Te,b as U}from"./documentation-stories-DKOl0nGm.js";import"./error-Cq9Fpw4b.js";import"./vnode-Bc34_Ya7.js";import"./index-CmBD9wVo.js";import"./aria-BUADUvnR.js";import"./index-B1PxvDbZ.js";import"./index-DH2w0SzE.js";import"./index-fhkPmQjX.js";import"./index-DmfABaPz.js";import"./_arrayPush-BhjrZnJY.js";import"./use-form-item-BgBoyOyI.js";import"./constants-Dnj8X3EN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./event-BB_Ol6Sd.js";import"./index-CdSB2Bdf.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";const Se=De({...ye,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"400px"},description:{type:String,default:""},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"},withHeader:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},responsiveSize:{type:[Object,Boolean],default:!1,validator:r=>{if(typeof r=="boolean")return!0;if(typeof r=="object"){const t=["sm","md","lg"];return Object.keys(r).every(o=>t.includes(o))}return!1}}}),Oe=we,Ge=["aria-label","aria-labelledby","aria-describedby"],Pe=["id","aria-level"],Fe=["id"],g="400px",J=se({name:"GDrawer",inheritAttrs:!1,__name:"drawer",props:Se,emits:Oe,setup(r,{expose:t}){const o=r,p=n(),f=n(),s=Ee("drawer"),v=D(()=>o.direction==="rtl"||o.direction==="ltr"),x=D(()=>o.closeOnPressEscape),m=D(()=>o.closeOnClickModal),C=n(window.innerWidth),R=D(()=>{let a=o.size;const b=typeof o.responsiveSize=="object"&&o.responsiveSize!==null;return C.value<576?a="100%":C.value<768?a=b&&o.responsiveSize.sm||g:C.value<992?a=b&&o.responsiveSize.md||g:a=b?o.responsiveSize.lg||o.size||g:o.size||g,ke(a)}),H=()=>{C.value=window.innerWidth};ne(()=>{window.addEventListener("resize",H)}),ie(()=>{window.removeEventListener("resize",H)});const{afterEnter:V,afterLeave:q,beforeLeave:X,visible:O,rendered:Z,titleId:M,bodyId:W,zIndex:K,onModalClick:Q,onOpenAutoFocus:Y,onCloseAutoFocus:_,onFocusoutPrevented:ee,onCloseRequested:ae,handleClose:L,displayButtons:oe,buttonLayoutClass:re}=xe(o,p,{closeOnClickModal:m,closeOnPressEscape:x});return t({handleClose:L,afterEnter:V,afterLeave:q}),(a,b)=>(i(),$(e(ge),{to:a.appendTo,disabled:a.appendTo!=="body"?!1:!a.appendToBody},{default:h(()=>[z(fe,{name:e(s).b("fade"),onAfterEnter:e(V),onAfterLeave:e(q),onBeforeLeave:e(X)},{default:h(()=>[le(z(e(ve),{mask:a.modal,"overlay-class":a.modalClass,"z-index":e(K),onClick:e(Q)},{default:h(()=>[z(e(be),{loop:"",trapped:e(O),"focus-trap-el":p.value,"focus-start-el":f.value,onFocusAfterTrapped:e(Y),onFocusAfterReleased:e(_),onFocusoutPrevented:e(ee),onReleaseRequested:e(ae)},{default:h(()=>[I("div",N({ref_key:"drawerRef",ref:p,"aria-modal":"true","aria-label":a.title||void 0,"aria-labelledby":a.title?void 0:e(M),"aria-describedby":e(W)},a.$attrs,{class:[e(s).b(),a.direction,e(O)&&"open"],style:v.value?"width: "+R.value:"height: "+R.value,role:"dialog",onClick:b[0]||(b[0]=ue(()=>{},["stop"]))}),[I("span",{ref_key:"focusStartRef",ref:f,class:c(e(s).e("sr-focus")),tabindex:"-1"},null,2),o.withHeader?(i(),l("header",{key:0,class:c([e(s).e("header"),a.headerClass])},[o.showClose?(i(),l("div",{key:0,class:c(e(s).em("header","container-close"))},[z(e(Ce),{icon:"regular times",onClick:e(L)},null,8,["onClick"])],2)):d("",!0),a.$slots.customHeader||a.title||a.description?(i(),l("div",{key:1,class:c(e(s).em("header","container-title"))},[a.title||a.description?(i(),l("div",{key:0,class:c(e(s).em("header","title-description"))},[a.title?(i(),l("h5",{key:0,id:e(M),role:"heading","aria-level":a.headerAriaLevel,class:c(e(s).e("title"))},F(a.title),11,Pe)):d("",!0),a.description?(i(),l("span",{key:1,class:c(e(s).e("description"))},F(a.description),3)):d("",!0)],2)):d("",!0),a.$slots.customHeader?P(a.$slots,"customHeader",{key:1}):d("",!0)],2)):d("",!0)],2)):d("",!0),e(Z)?(i(),l("div",{key:1,id:e(W),class:c([e(s).e("body"),a.bodyClass])},[P(a.$slots,"default")],10,Fe)):d("",!0),a.$slots.footer||o.footerButtons?.length?(i(),l("div",{key:2,class:c([e(s).e("footer"),a.footerClass])},[P(a.$slots,"footer",{},()=>[o.footerButtons?.length?(i(),l("div",{key:0,class:c([e(s).em("footer","buttons"),e(re)])},[(i(!0),l(ce,null,pe(e(oe),(G,te)=>(i(),$(e(he),N({key:te,full:"",onClick:G.onClick},{ref_for:!0},{...G,onClick:void 0}),{default:h(()=>[me(F(G.text),1)]),_:2},1040,["onClick"]))),128))],2)):d("",!0)])],2)):d("",!0)],16,Ge)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[de,e(O)]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});J.__docgenInfo={name:"GDrawer",exportName:"default",displayName:"drawer",description:"",tags:{},expose:[{name:"handleClose"},{name:"afterEnter"},{name:"afterLeave"}],slots:[{name:"customHeader"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/drawer/src/drawer.vue"]};const u=ze(J),Be="0.3.0",B={"@flash-global66/g-button":"^0.1.0","@flash-global66/g-dialog":"^0.0.8","@flash-global66/g-focus-trap":"^0.0.7","@flash-global66/g-icon-font":"^0.0.8","@flash-global66/g-overlay":"^0.0.7","@flash-global66/g-teleport":"^0.0.6","element-plus":"^2.9.0",vue:"^3.2.0"},ua={title:"Feedback/Drawer",component:u,parameters:{docs:{description:{component:`
El componente Drawer es un panel lateral deslizante que se utiliza para mostrar contenido adicional o acciones secundarias sin interrumpir el flujo principal de la interfaz. Este componente es ideal para mostrar formularios, detalles de elementos, configuraciones o cualquier contenido que no necesite ocupar toda la pantalla.

> Versión actual: ${Be}

## Características
- Título y descripción configurables
- Múltiples direcciones de apertura (izquierda, derecha, arriba, abajo)
- Tamaño personalizable y responsive
- Botones de acción en el pie
- Control de cierre (ESC, clic externo, botón X)
- Header configurable (mostrar/ocultar)
- Contenido personalizable

### Instalación

\`\`\`bash
yarn add @flash-global66/g-drawer
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias. Puede que funcione con otras versiones, pero no se garantiza.
${Te(B)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${U(B)}

# Dependencias externas
yarn add ${U(B,!0)}
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GDrawer } from '@flash-global66/g-drawer'

# recomendado importar en los estilos globales
import '@flash-global66/g-drawer/styles.scss'
\`\`\`

### Ejemplo de uso

\`\`\`html
<template>
  <g-drawer 
    v-model="drawer"
    title="Título del drawer"
    description="Descripción del drawer"
    :show-close="true"
    :with-header="true"
    :footer-buttons="[
      {
        text: 'Aceptar',
        onClick: () => (drawer = false),
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: () => (drawer = false),
        variant: 'secondary'
      }
    ]"
  >
    <span>Contenido personalizado del drawer</span>
  </g-drawer>
  
  <g-button @click="drawer = true">
    Abrir drawer
  </g-button>
</template>

<script setup>
import { ref } from 'vue';
import { GDrawer } from '@flash-global66/g-drawer';
import { GButton } from '@flash-global66/g-button';

const drawer = ref(false);
<\/script>
\`\`\`
`}}},argTypes:{modelValue:{name:"v-model",description:"Estado de visibilidad del drawer",control:"boolean",table:{category:"Estado y Configuración Principal",type:{summary:"boolean"},defaultValue:{summary:"false"}}},lockScroll:{name:"lock-scroll",description:"Bloquear scroll del body",control:"boolean",table:{category:"Estado y Configuración Principal",type:{summary:"boolean"},defaultValue:{summary:"true"}}},destroyOnClose:{name:"destroy-on-close",description:"Destruir al cerrar",control:"boolean",table:{category:"Estado y Configuración Principal",type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{name:"title",description:"Título del drawer",control:"text",table:{category:"Apariencia y Estilo",type:{summary:"string"},defaultValue:{summary:"''"}}},showClose:{name:"show-close",description:"Mostrar botón de cierre (X) en el header",control:"boolean",table:{category:"Apariencia y Estilo",type:{summary:"boolean"},defaultValue:{summary:"true"}}},withHeader:{name:"with-header",description:"Mostrar el header completo del drawer",control:"boolean",table:{category:"Apariencia y Estilo",type:{summary:"boolean"},defaultValue:{summary:"true"}}},description:{name:"description",description:"Descripción del drawer",control:"text",table:{category:"Apariencia y Estilo",type:{summary:"string"},defaultValue:{summary:"''"}}},footerButtons:{name:"footer-buttons",control:"object",description:"Array de configuración para los botones del footer (máximo 3 botones)",table:{category:"Apariencia y Estilo",defaultValue:{summary:"[]"},type:{summary:"FooterButton[]",detail:`{
  text: string,
  onClick: () => void,
  variant: 'primary' | 'secondary' | 'tertiary'
}`}}},size:{name:"size",description:`Ancho del drawer.
- En pantallas grandes (≥992px) se usa este valor.
- Para pantallas medianas (576px ≥ && ≥ 991px): 400px por defecto
- Para pantallas pequeñas (575px≤): 100% por defecto 
 si quieres que sea responsivo, usa la prop \`responsive-size\``,control:"text",table:{category:"Apariencia y Estilo",type:{summary:"string | number"},defaultValue:{summary:"'400px'"}}},responsiveSize:{name:"responsive-size",description:"Configura tamaños diferentes según el ancho de la pantalla",control:"object",table:{category:"Apariencia y Estilo",type:{summary:"ResponsiveSizeDrawer | boolean",detail:`{
            sm?: string; // Tamaño para pantallas pequeñas (576px - 767px)
            md?: string; // Tamaño para pantallas medianas (768px - 991px)
            lg?: string; // Tamaño para pantallas grandes (992px+)
          }`},defaultValue:{summary:"false"}}},direction:{name:"direction",description:"Dirección de apertura del drawer",control:"select",options:["ltr","rtl","ttb","btt"],table:{category:"Apariencia y Estilo",type:{summary:"string"},defaultValue:{summary:"'rtl'"}}},modalFade:{name:"modalFade",description:"Efecto de desvanecimiento del modal",control:"boolean",table:{category:"Apariencia y Estilo",type:{summary:"boolean"},defaultValue:{summary:"true"}}},modal:{description:"Debe mostrar la capa de sombra",control:"boolean",table:{category:"Apariencia y Estilo",type:{summary:"boolean"},defaultValue:{summary:"true"}}},zIndex:{description:"Z-index del drawer",control:"number",table:{category:"Apariencia y Estilo",type:{summary:"number"},defaultValue:{summary:""}}},modalClass:{name:"modal-class",description:"Clase del modal",control:"text",table:{category:"Apariencia y Estilo",type:{summary:"string"},defaultValue:{summary:"''"}}},bodyClass:{name:"body-class",description:"Clase del body",control:"text",table:{category:"Apariencia y Estilo",type:{summary:"string"},defaultValue:{summary:"''"}}},footerClass:{name:"footer-class",description:"Clase del footer",control:"text",table:{category:"Apariencia y Estilo",type:{summary:"string"},defaultValue:{summary:"''"}}},closeOnClickModal:{name:"close-on-click-modal",description:"Cerrar al hacer clic en el modal",control:"boolean",table:{category:"Comportamiento y Temporización",type:{summary:"boolean"},defaultValue:{summary:"true"}}},closeOnPressEscape:{name:"close-on-press-escape",description:"Cerrar al presionar ESC",control:"boolean",table:{category:"Comportamiento y Temporización",type:{summary:"boolean"},defaultValue:{summary:"true"}}},beforeClose:{name:"before-close",description:"Detiene el cierre si se establece",control:!1,table:{category:"Comportamiento y Temporización",type:{summary:"() => void"}}},openDelay:{name:"open-delay",description:"Retraso en abrir el drawer",control:"number",table:{category:"Comportamiento y Temporización",type:{summary:"number"},defaultValue:{summary:"0"}}},closeDelay:{name:"close-delay",description:"Retraso en cerrar el drawer",control:"number",table:{category:"Comportamiento y Temporización",type:{summary:"number"},defaultValue:{summary:"0"}}},appendToBody:{name:"append-to-body",description:"Si el drawer debe ser anexado al body",control:"boolean",table:{category:"Ubicación en el DOM",type:{summary:"boolean"},defaultValue:{summary:"false"}}},appendTo:{name:"append-to",description:"Elemento al que se anexa el drawer",control:"text",table:{category:"Ubicación en el DOM",type:{summary:"string"},defaultValue:{summary:"body"}}},open:{name:"open",description:"Se activa cuando se abre el drawer",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},opened:{description:"Se activa al finalizar la animación de apertura",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},close:{name:"close",description:"Se activa cuando se cierra el drawer",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},closed:{description:"Se activa al finalizar la animación de cierre",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},openAutoFocus:{name:"open-auto-focus",description:"Enfoca contenido después de abrir",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},closeAutoFocus:{name:"close-auto-focus",description:"Enfoca contenido después de cerrar",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},handleClose:{name:"handle-close",description:"Método para cerrar el drawer",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},afterEnter:{name:"after-enter",description:"Evento post transición de entrada",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},afterLeave:{name:"after-leave",description:"Evento post transición de salida",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},default:{description:"Contenido principal del drawer",table:{category:"Slots",type:{summary:"Slot"}},control:!1},customHeader:{name:"custom-header",description:"Header personalizado",table:{category:"Slots",type:{summary:"Slot"}},control:!1},footer:{description:"Contenido del footer",table:{category:"Slots",type:{summary:"Slot"}},control:!1}},args:{title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",size:"400px",modalFade:!0,direction:"rtl",appendToBody:!0,appendTo:"body",lockScroll:!0,closeOnClickModal:!0,closeOnPressEscape:!0,openDelay:0,closeDelay:0,destroyOnClose:!1,modal:!0,showClose:!0,withHeader:!0,modalClass:"",bodyClass:"",footerClass:"",zIndex:10,footerButtons:[{text:"Guardar",onClick:()=>{},variant:"primary"}]}},E={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del componente Drawer. Desde los controles puedes probar todas las propiedades disponibles."}}},render:r=>({components:{GDrawer:u,GConfigProvider:y,GButton:w},setup(){return{drawer:n(!1),args:r}},template:`
      <g-config-provider>
        <g-button @click="drawer = true">
          Abrir drawer
        </g-button>
        <g-drawer v-model="drawer" v-bind="args">
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    `})},k={name:"Botones en footer",parameters:{docs:{description:{story:`Este ejemplo muestra cómo se ven los botones en el footer del drawer.

- Botones de acción en el footer
- Variante de botones
- Organización de botones en el footer`}}},render:()=>({components:{GDrawer:u,GConfigProvider:y,GButton:w},setup(){const r=n(!1),t=n([]),o=()=>{r.value=!1},p=v=>{r.value=!0,t.value=s(v)},f={1:{text:"Guardar",onClick:o,variant:"primary"},2:{text:"Cancelar",onClick:o,variant:"secondary"},3:{text:"Eliminar",onClick:o,variant:"tertiary"}},s=v=>{const x=[];for(let m=0;m<v;m++)x.push(f[m+1]);return x};return{drawer:r,handleClose:o,handleOpen:p,buttons:t}},template:`
      <g-config-provider>
        <div class="flex gap-4">
          <g-button @click="handleOpen(1)">
            Abrir drawer con 1 botón
          </g-button>
          <g-button @click="handleOpen(2)">
            Abrir drawer con 2 botones
          </g-button>
          <g-button @click="handleOpen(3)">
            Abrir drawer con 3 botones
          </g-button>
        </div>

        <g-drawer 
          v-model="drawer" 
          title="Botones" 
          description="Este es un ejemplo de cómo se ven los botones en el footer del drawer."
          append-to-body
          :footer-buttons="buttons"
          @close="handleClose"
        >
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    `})},j={name:"Direcciones",parameters:{docs:{description:{story:`Este ejemplo muestra cómo se ven los drawers en todas las direcciones.

- Dirección de apertura
- Título y descripción`}}},render:()=>({components:{GDrawer:u,GConfigProvider:y,GButton:w,GRadioGroup:Ae},setup(){const r=n(!1),t=n("rtl");return{drawer:r,directions:[{value:"ltr",label:"Izquierda a derecha"},{value:"rtl",label:"Derecha a izquierda"},{value:"ttb",label:"Arriba a abajo"},{value:"btt",label:"Abajo a arriba"}],direction:t}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-8">
          <g-radio-group
            v-model="direction"
            :options="directions"
          />
          <g-button @click="drawer = true">
            Abrir drawer
          </g-button>
        </div>
        <g-drawer 
          v-model="drawer" 
          title="Dirección" 
          description="Este es un ejemplo de cómo se ven los drawers en todas las direcciones."
          append-to-body
          :direction="direction"
          :footer-buttons="[
            {
              text: 'Guardar',
              onClick: () => (drawer = false),
              variant: 'primary'
            }
          ]"
        >
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    `})},A={name:"Header personalizado",parameters:{docs:{description:{story:`Este ejemplo muestra cómo se ve un drawer con un header personalizado.

- Header personalizado
- Título y descripción`}}},render:()=>({components:{GDrawer:u,GConfigProvider:y,GButton:w,GTag:je},setup(){const r=n(!1),t=Array(12).fill({send:"$100.000,00 CLP",convert:"$87.000,00 CLP"});return{drawer:r,items:t}},template:`
      <g-config-provider>
        <g-button @click="drawer = true">
          Abrir drawer
        </g-button>
        <g-drawer 
          v-model="drawer" 
          title="Detalle Completo" 
          description="Transacción creada por: Michael Murduck
 Aprobador: Joan Rojas"
          append-to-body
          :footer-buttons="[
            { 
              text: 'Guardar', 
              onClick: () => (drawer = false), 
              variant: 'primary' 
            },
            { 
              text: 'Cancelar', 
              onClick: () => (drawer = false), 
              variant: 'secondary' 
            }
          ]"
        >
          <template #customHeader>
            <div class="flex justify-start items-center flex-row gap-2">
              <g-tag text="warning" type="warning" effect="light" />
              <g-tag text="success" type="success" effect="light" />
              <g-tag text="info" type="info" effect="light" />
            </div>
          </template>
          <div class="flex flex-col gap-1 justify-center items-center">
            <template v-for="(item, index) in items" :key="index">
              <div class="w-full flex justify-between py-3 border-b border-dashed border-gray-300">
                <span class="text-4 font-semibold text-primary-txt">Tú envias:</span>
                <span class="text-4 font-semibold text-[#434A5C]">{{ item.send }}</span>
              </div>
              <div class="w-full flex justify-between py-3 border-b border-dashed border-gray-300">
                <span class="text-4 font-semibold text-primary-txt">Monto a convertir:</span>
                <span class="text-4 font-semibold text-[#434A5C]">{{ item.convert }}</span>
              </div>
            </template>
          </div>
        </g-drawer>
      </g-config-provider>
    `})},T={name:"Tamaños",parameters:{docs:{description:{story:`Este ejemplo muestra cómo utilizar las propiedades \`size\` y \`responsive-size\` para ajustar el tamaño del drawer según las necesidades de tu aplicación.

### Tamaño básico con \`size\`
- Valores en porcentaje (ej: '30%', '50%', '80%')
- Valores en píxeles (ej: '300px', '500px')
- Valores numéricos (ej: 300, 500)

La propiedad \`size\` define el ancho del drawer cuando la dirección es 'ltr' o 'rtl', y la altura cuando la dirección es 'ttb' o 'btt'.

### Comportamiento responsive
Por defecto, cuando solo se usa \`size\`:
- En pantallas grandes (≥992px): Se usa el valor de \`size\`
- En pantallas medianas (576px - 991px): 400px por defecto
- En pantallas pequeñas (<576px): 100% por defecto

### Personalización responsive con \`responsive-size\`
Puedes personalizar el tamaño para cada breakpoint:
\`\`\`js
:responsive-size="{
  sm: '90%',  // Para pantallas entre 576px y 767px
  md: '60%',  // Para pantallas entre 768px y 991px
  lg: '40%'   // Para pantallas de 992px o más (sobrescribe 'size')
}"
\`\`\``},source:{code:`
<template>
  <div class="flex flex-col gap-4">
    <!-- Ejemplo con tamaño fijo -->
    <div>
      <h3 class="text-base font-semibold mb-2">Tamaño fijo</h3>
      <div class="flex gap-2">
        <g-button @click="openFixedDrawer('30%')">Drawer 30%</g-button>
        <g-button @click="openFixedDrawer('500px')">Drawer 500px</g-button>
        <g-button @click="openFixedDrawer('80%')">Drawer 80%</g-button>
      </div>
    </div>
    
    <!-- Ejemplo con tamaño responsive -->
    <div>
      <h3 class="text-base font-semibold mb-2">Tamaño responsive</h3>
      <g-button @click="openResponsiveDrawer()">Drawer responsive</g-button>
    </div>
  </div>
  
  <!-- Drawer con tamaño fijo -->
  <g-drawer
    v-model="fixedDrawer"
    :size="currentWidth"
    title="Drawer con ancho fijo"
    :description="'Ancho actual: ' + currentWidth"
    :footer-buttons="[{ text: 'Cerrar', onClick: handleCloseFixed, variant: 'primary' }]"
  >
    <div class="p-4">
      <p>Este drawer tiene un ancho fijo de: <strong>{{ currentWidth }}</strong></p>
      <p class="mt-2 text-sm text-gray-600">
        Este valor solo se aplica completamente en pantallas grandes (≥992px).
        En pantallas más pequeñas, se aplican los valores predeterminados.
      </p>
    </div>
  </g-drawer>
  
  <!-- Drawer con tamaño responsive -->
  <g-drawer
    v-model="responsiveDrawer"
    size="30%"
    title="Drawer con ancho responsive"
    description="Este drawer se adapta a diferentes tamaños de pantalla"
    :responsive-size="{
      sm: '90%',
      md: '60%',
      lg: '40%'
    }"
    :footer-buttons="[{ text: 'Cerrar', onClick: handleCloseResponsive, variant: 'primary' }]"
  >
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-3">Configuración responsive</h3>
      <pre class="bg-gray-100 p-2 rounded text-sm overflow-auto">
size: '30%'  // Valor base (solo usado si no se especifica lg)

responsiveSize: {
  sm: '90%',   // 576px - 767px
  md: '60%',   // 768px - 991px
  lg: '40%'    // 992px+ (sobrescribe el valor de 'size')
}
      </pre>
      <p class="mt-4">Ancho actual de la ventana: <strong>{{ window.innerWidth }}px</strong></p>
    </div>
  </g-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { GDrawer } from '@flash-global66/g-drawer';
import { GButton } from '@flash-global66/g-button';

const fixedDrawer = ref(false);
const responsiveDrawer = ref(false);
const currentWidth = ref('30%');

const openFixedDrawer = (size) => {
  currentWidth.value = size;
  fixedDrawer.value = true;
};

const openResponsiveDrawer = () => {
  responsiveDrawer.value = true;
};

const handleCloseFixed = () => {
  fixedDrawer.value = false;
};

const handleCloseResponsive = () => {
  responsiveDrawer.value = false;
};
<\/script>
`,language:"html"}}},render:()=>({components:{GDrawer:u,GConfigProvider:y,GButton:w},setup(){const r=n(!1),t=n(!1),o=n("30%");return{fixedDrawer:r,responsiveDrawer:t,currentWidth:o,widthOptions:[{label:"Pequeño (30%)",value:"30%"},{label:"Medio (50%)",value:"50%"},{label:"Grande (80%)",value:"80%"},{label:"Fijo (400px)",value:"400px"}],openFixedDrawer:m=>{o.value=m,r.value=!0},openResponsiveDrawer:()=>{t.value=!0},handleCloseFixed:()=>{r.value=!1},handleCloseResponsive:()=>{t.value=!1},window}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <!-- Ejemplo con tamaño fijo -->
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Tamaño fijo con <code>size</code></h3>
            <p class="text-sm text-gray-600 mb-4">
              Selecciona un drawer con diferentes valores para la propiedad <code>size</code>:
            </p>
            
            <div class="flex flex-wrap gap-2">
              <g-button v-for="option in widthOptions" :key="option.value" @click="openFixedDrawer(option.value)">
                {{ option.label }}
              </g-button>
            </div>
          </div>
          
          <!-- Ejemplo con tamaño responsive -->
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Tamaño responsive con <code>responsive-size</code></h3>
            <p class="text-sm text-gray-600 mb-4">
              Este drawer se adapta automáticamente a diferentes tamaños de pantalla:
            </p>
            
            <div class="flex flex-wrap gap-2">
              <g-button @click="openResponsiveDrawer">
                Abrir drawer responsive
              </g-button>
            </div>
          </div>
        </div>
        
        <!-- Drawer con tamaño fijo -->
        <g-drawer 
          v-model="fixedDrawer" 
          :size="currentWidth"
          title="Drawer con ancho fijo"
          :description="'Ancho actual: ' + currentWidth"
          append-to-body
          :footer-buttons="[{ text: 'Cerrar', onClick: handleCloseFixed, variant: 'primary' }]"
        >
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-3">Configuración de ancho fijo</h3>
            
            <div class="bg-gray-50 rounded p-3 mb-4">
              <p class="font-medium">Este drawer tiene un ancho de: <code>{{ currentWidth }}</code></p>
              
              <div class="mt-4 text-sm">
                <p>La propiedad <code>size</code> puede recibir valores de diferentes tipos:</p>
                <ul class="list-disc ml-5 mt-2 space-y-1">
                  <li>Porcentaje: <code>'30%'</code>, <code>'50%'</code>, <code>'80%'</code></li>
                  <li>Píxeles: <code>'300px'</code>, <code>'500px'</code></li>
                  <li>Números: <code>300</code>, <code>500</code> (interpretados como píxeles)</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-blue-50 rounded p-3">
              <p class="text-sm text-blue-800">
                <strong>Nota:</strong> Este valor solo se aplica completamente en pantallas grandes (≥992px).
                En pantallas más pequeñas, se aplican los valores predeterminados:
                <ul class="list-disc ml-5 mt-1">
                  <li>Pantallas medianas (576px - 991px): 400px</li>
                  <li>Pantallas pequeñas (<576px): 100%</li>
                </ul>
              </p>
            </div>
          </div>
        </g-drawer>
        
        <!-- Drawer con tamaño responsive -->
        <g-drawer 
          v-model="responsiveDrawer" 
          size="30%"
          title="Drawer con ancho responsive"
          description="Este drawer se adapta a diferentes tamaños de pantalla"
          append-to-body
          :responsive-size="{
            sm: '90%',
            md: '60%',
            lg: '40%'
          }"
          :footer-buttons="[{ text: 'Cerrar', onClick: handleCloseResponsive, variant: 'primary' }]"
        >
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-3">Configuración responsive</h3>
            
            <div class="bg-gray-50 rounded p-3 mb-4">
              <p class="font-medium">Configuración actual:</p>
              <pre class="mt-2 bg-gray-100 p-2 rounded text-sm overflow-auto">
size: '30%'  // Valor base (solo usado si no se especifica lg)

responsiveSize: {
  sm: '90%',   // 576px - 767px
  md: '60%',   // 768px - 991px
  lg: '40%'    // 992px+ (sobrescribe el valor de 'size')
}
              </pre>
            </div>
            
            <p class="mb-2">Redimensiona la ventana para ver cómo cambia el tamaño del drawer:</p>
            <ul class="list-disc ml-5 space-y-1">
              <li>Móvil (<576px): <strong>100%</strong> (predeterminado)</li>
              <li>Tablet pequeña (576px - 767px): <strong>90%</strong> (personalizado)</li>
              <li>Tablet (768px - 991px): <strong>60%</strong> (personalizado)</li>
              <li>Desktop (992px+): <strong>40%</strong> (personalizado, sobrescribe 'size')</li>
            </ul>
            
            <div class="mt-4 p-3 bg-blue-50 rounded text-sm">
              <p class="font-medium text-blue-700">Ancho actual de la ventana: {{ window.innerWidth }}px</p>
            </div>
          </div>
        </g-drawer>
      </g-config-provider>
    `})},S={name:"Opciones de Header",parameters:{docs:{description:{story:"El componente Drawer ofrece flexibilidad para personalizar el header con las propiedades `showClose` y `withHeader`. Esta historia muestra las distintas combinaciones posibles."},source:{code:`
<template>
  <!-- Drawer predeterminado (con header y botón de cierre) -->
  <g-drawer
    v-model="drawer"
    title="Título del drawer"
    description="Descripción opcional del drawer"
  />
  
  <!-- Drawer sin botón de cierre pero con header -->
  <g-drawer
    v-model="drawer"
    title="Título del drawer"
    description="Descripción opcional del drawer"
    :show-close="false"
  />
  
  <!-- Drawer completamente sin header -->
  <g-drawer
    v-model="drawer"
    :with-header="false"
  />
</template>
`,language:"html"}}},render:()=>({components:{GDrawer:u,GConfigProvider:y,GButton:w},setup(){const r=n("default"),t=n(!1);return{drawer:t,selectedOption:r,options:[{value:"default",label:"Header completo (por defecto)"},{value:"noClose",label:"Sin botón de cierre"},{value:"noHeader",label:"Sin header"}],openDrawer:()=>{t.value=!0},closeDrawer:()=>{t.value=!1}}},template:`
      <g-config-provider>
        <div class="space-y-6">
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Configuración del header</h3>
            <p class="text-sm text-gray-600 mb-4">
              El drawer permite personalizar la visualización del header y sus elementos
            </p>
            
            <div class="flex flex-col gap-4 mb-4">
              <div v-for="option in options" :key="option.value" class="flex items-center">
                <input
                  type="radio"
                  :id="option.value"
                  v-model="selectedOption"
                  :value="option.value"
                  class="mr-2"
                />
                <label :for="option.value">{{ option.label }}</label>
              </div>
            </div>
            
            <div class="mt-4">
              <g-button @click="openDrawer">
                Abrir drawer
              </g-button>
            </div>
            
            <g-drawer
              v-model="drawer"
              title="Configuración del header"
              description="Este ejemplo muestra las diferentes configuraciones del header"
              append-to-body
              :with-header="selectedOption !== 'noHeader'"
              :show-close="selectedOption === 'default'"
              :footer-buttons="[{ text: 'Cerrar', onClick: closeDrawer, variant: 'primary' }]"
            >
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-3">Configuración seleccionada:</h3>
                <div class="mb-4 p-3 bg-gray-50 rounded">
                  <div v-if="selectedOption === 'default'" class="text-sm">
                    <div class="font-medium">Header completo (por defecto):</div>
                    <ul class="list-disc pl-5 mt-1">
                      <li><code>withHeader: true</code></li>
                      <li><code>showClose: true</code></li>
                    </ul>
                  </div>
                  <div v-else-if="selectedOption === 'noClose'" class="text-sm">
                    <div class="font-medium">Sin botón de cierre:</div>
                    <ul class="list-disc pl-5 mt-1">
                      <li><code>withHeader: true</code></li>
                      <li><code>showClose: false</code></li>
                    </ul>
                  </div>
                  <div v-else-if="selectedOption === 'noHeader'" class="text-sm">
                    <div class="font-medium">Sin header:</div>
                    <ul class="list-disc pl-5 mt-1">
                      <li><code>withHeader: false</code></li>
                    </ul>
                  </div>
                </div>
                <p class="text-sm text-gray-600">
                  Estas configuraciones permiten adaptar el drawer a diferentes necesidades de interfaz,
                  desde mostrar toda la información hasta un diseño más minimalista.
                </p>
              </div>
            </g-drawer>
          </div>
        </div>
      </g-config-provider>
    `})};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Básico",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo básico del componente Drawer. Desde los controles puedes probar todas las propiedades disponibles."
      }
    }
  },
  render: args => ({
    components: {
      GDrawer,
      GConfigProvider,
      GButton
    },
    setup() {
      const drawer = ref(false);
      return {
        drawer,
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-button @click="drawer = true">
          Abrir drawer
        </g-button>
        <g-drawer v-model="drawer" v-bind="args">
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    \`
  })
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Botones en footer",
  parameters: {
    docs: {
      description: {
        story: \`Este ejemplo muestra cómo se ven los botones en el footer del drawer.

- Botones de acción en el footer
- Variante de botones
- Organización de botones en el footer\`
      }
    }
  },
  render: () => ({
    components: {
      GDrawer,
      GConfigProvider,
      GButton
    },
    setup() {
      const drawer = ref<boolean>(false);
      const buttons = ref<FooterButton[]>([]);
      const handleClose = () => {
        drawer.value = false;
      };
      const handleOpen = (quantity: number) => {
        drawer.value = true;
        buttons.value = buildButtons(quantity);
      };
      const mapTypesButtons: Record<number, FooterButton> = {
        1: {
          text: "Guardar",
          onClick: handleClose,
          variant: "primary"
        },
        2: {
          text: "Cancelar",
          onClick: handleClose,
          variant: "secondary"
        },
        3: {
          text: "Eliminar",
          onClick: handleClose,
          variant: "tertiary"
        }
      };
      const buildButtons = (quantity: number) => {
        const buttons: FooterButton[] = [];
        for (let i = 0; i < quantity; i++) {
          buttons.push(mapTypesButtons[i + 1]);
        }
        return buttons;
      };
      return {
        drawer,
        handleClose,
        handleOpen,
        buttons
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex gap-4">
          <g-button @click="handleOpen(1)">
            Abrir drawer con 1 botón
          </g-button>
          <g-button @click="handleOpen(2)">
            Abrir drawer con 2 botones
          </g-button>
          <g-button @click="handleOpen(3)">
            Abrir drawer con 3 botones
          </g-button>
        </div>

        <g-drawer 
          v-model="drawer" 
          title="Botones" 
          description="Este es un ejemplo de cómo se ven los botones en el footer del drawer."
          append-to-body
          :footer-buttons="buttons"
          @close="handleClose"
        >
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    \`
  })
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Direcciones",
  parameters: {
    docs: {
      description: {
        story: \`Este ejemplo muestra cómo se ven los drawers en todas las direcciones.

- Dirección de apertura
- Título y descripción\`
      }
    }
  },
  render: () => ({
    components: {
      GDrawer,
      GConfigProvider,
      GButton,
      GRadioGroup
    },
    setup() {
      const drawer = ref<boolean>(false);
      const direction = ref<string>("rtl");
      const directions = [{
        value: "ltr",
        label: "Izquierda a derecha"
      }, {
        value: "rtl",
        label: "Derecha a izquierda"
      }, {
        value: "ttb",
        label: "Arriba a abajo"
      }, {
        value: "btt",
        label: "Abajo a arriba"
      }];
      return {
        drawer,
        directions,
        direction
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-8">
          <g-radio-group
            v-model="direction"
            :options="directions"
          />
          <g-button @click="drawer = true">
            Abrir drawer
          </g-button>
        </div>
        <g-drawer 
          v-model="drawer" 
          title="Dirección" 
          description="Este es un ejemplo de cómo se ven los drawers en todas las direcciones."
          append-to-body
          :direction="direction"
          :footer-buttons="[
            {
              text: 'Guardar',
              onClick: () => (drawer = false),
              variant: 'primary'
            }
          ]"
        >
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    \`
  })
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Header personalizado",
  parameters: {
    docs: {
      description: {
        story: \`Este ejemplo muestra cómo se ve un drawer con un header personalizado.

- Header personalizado
- Título y descripción\`
      }
    }
  },
  render: () => ({
    components: {
      GDrawer,
      GConfigProvider,
      GButton,
      GTag
    },
    setup() {
      const drawer = ref<boolean>(false);
      const items = Array(12).fill({
        send: "$100.000,00 CLP",
        convert: "$87.000,00 CLP"
      });
      return {
        drawer,
        items
      };
    },
    template: \`
      <g-config-provider>
        <g-button @click="drawer = true">
          Abrir drawer
        </g-button>
        <g-drawer 
          v-model="drawer" 
          title="Detalle Completo" 
          description="Transacción creada por: Michael Murduck\\n Aprobador: Joan Rojas"
          append-to-body
          :footer-buttons="[
            { 
              text: 'Guardar', 
              onClick: () => (drawer = false), 
              variant: 'primary' 
            },
            { 
              text: 'Cancelar', 
              onClick: () => (drawer = false), 
              variant: 'secondary' 
            }
          ]"
        >
          <template #customHeader>
            <div class="flex justify-start items-center flex-row gap-2">
              <g-tag text="warning" type="warning" effect="light" />
              <g-tag text="success" type="success" effect="light" />
              <g-tag text="info" type="info" effect="light" />
            </div>
          </template>
          <div class="flex flex-col gap-1 justify-center items-center">
            <template v-for="(item, index) in items" :key="index">
              <div class="w-full flex justify-between py-3 border-b border-dashed border-gray-300">
                <span class="text-4 font-semibold text-primary-txt">Tú envias:</span>
                <span class="text-4 font-semibold text-[#434A5C]">{{ item.send }}</span>
              </div>
              <div class="w-full flex justify-between py-3 border-b border-dashed border-gray-300">
                <span class="text-4 font-semibold text-primary-txt">Monto a convertir:</span>
                <span class="text-4 font-semibold text-[#434A5C]">{{ item.convert }}</span>
              </div>
            </template>
          </div>
        </g-drawer>
      </g-config-provider>
    \`
  })
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Tamaños',
  parameters: {
    docs: {
      description: {
        story: \`Este ejemplo muestra cómo utilizar las propiedades \\\`size\\\` y \\\`responsive-size\\\` para ajustar el tamaño del drawer según las necesidades de tu aplicación.

### Tamaño básico con \\\`size\\\`
- Valores en porcentaje (ej: '30%', '50%', '80%')
- Valores en píxeles (ej: '300px', '500px')
- Valores numéricos (ej: 300, 500)

La propiedad \\\`size\\\` define el ancho del drawer cuando la dirección es 'ltr' o 'rtl', y la altura cuando la dirección es 'ttb' o 'btt'.

### Comportamiento responsive
Por defecto, cuando solo se usa \\\`size\\\`:
- En pantallas grandes (≥992px): Se usa el valor de \\\`size\\\`
- En pantallas medianas (576px - 991px): 400px por defecto
- En pantallas pequeñas (<576px): 100% por defecto

### Personalización responsive con \\\`responsive-size\\\`
Puedes personalizar el tamaño para cada breakpoint:
\\\`\\\`\\\`js
:responsive-size="{
  sm: '90%',  // Para pantallas entre 576px y 767px
  md: '60%',  // Para pantallas entre 768px y 991px
  lg: '40%'   // Para pantallas de 992px o más (sobrescribe 'size')
}"
\\\`\\\`\\\`\`
      },
      source: {
        code: \`
<template>
  <div class="flex flex-col gap-4">
    <!-- Ejemplo con tamaño fijo -->
    <div>
      <h3 class="text-base font-semibold mb-2">Tamaño fijo</h3>
      <div class="flex gap-2">
        <g-button @click="openFixedDrawer('30%')">Drawer 30%</g-button>
        <g-button @click="openFixedDrawer('500px')">Drawer 500px</g-button>
        <g-button @click="openFixedDrawer('80%')">Drawer 80%</g-button>
      </div>
    </div>
    
    <!-- Ejemplo con tamaño responsive -->
    <div>
      <h3 class="text-base font-semibold mb-2">Tamaño responsive</h3>
      <g-button @click="openResponsiveDrawer()">Drawer responsive</g-button>
    </div>
  </div>
  
  <!-- Drawer con tamaño fijo -->
  <g-drawer
    v-model="fixedDrawer"
    :size="currentWidth"
    title="Drawer con ancho fijo"
    :description="'Ancho actual: ' + currentWidth"
    :footer-buttons="[{ text: 'Cerrar', onClick: handleCloseFixed, variant: 'primary' }]"
  >
    <div class="p-4">
      <p>Este drawer tiene un ancho fijo de: <strong>{{ currentWidth }}</strong></p>
      <p class="mt-2 text-sm text-gray-600">
        Este valor solo se aplica completamente en pantallas grandes (≥992px).
        En pantallas más pequeñas, se aplican los valores predeterminados.
      </p>
    </div>
  </g-drawer>
  
  <!-- Drawer con tamaño responsive -->
  <g-drawer
    v-model="responsiveDrawer"
    size="30%"
    title="Drawer con ancho responsive"
    description="Este drawer se adapta a diferentes tamaños de pantalla"
    :responsive-size="{
      sm: '90%',
      md: '60%',
      lg: '40%'
    }"
    :footer-buttons="[{ text: 'Cerrar', onClick: handleCloseResponsive, variant: 'primary' }]"
  >
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-3">Configuración responsive</h3>
      <pre class="bg-gray-100 p-2 rounded text-sm overflow-auto">
size: '30%'  // Valor base (solo usado si no se especifica lg)

responsiveSize: {
  sm: '90%',   // 576px - 767px
  md: '60%',   // 768px - 991px
  lg: '40%'    // 992px+ (sobrescribe el valor de 'size')
}
      </pre>
      <p class="mt-4">Ancho actual de la ventana: <strong>{{ window.innerWidth }}px</strong></p>
    </div>
  </g-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { GDrawer } from '@flash-global66/g-drawer';
import { GButton } from '@flash-global66/g-button';

const fixedDrawer = ref(false);
const responsiveDrawer = ref(false);
const currentWidth = ref('30%');

const openFixedDrawer = (size) => {
  currentWidth.value = size;
  fixedDrawer.value = true;
};

const openResponsiveDrawer = () => {
  responsiveDrawer.value = true;
};

const handleCloseFixed = () => {
  fixedDrawer.value = false;
};

const handleCloseResponsive = () => {
  responsiveDrawer.value = false;
};
<\/script>
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GDrawer,
      GConfigProvider,
      GButton
    },
    setup() {
      const fixedDrawer = ref<boolean>(false);
      const responsiveDrawer = ref<boolean>(false);
      const currentWidth = ref<string | number>('30%');
      const widthOptions = [{
        label: 'Pequeño (30%)',
        value: '30%'
      }, {
        label: 'Medio (50%)',
        value: '50%'
      }, {
        label: 'Grande (80%)',
        value: '80%'
      }, {
        label: 'Fijo (400px)',
        value: '400px'
      }];
      const openFixedDrawer = (size: string | number) => {
        currentWidth.value = size;
        fixedDrawer.value = true;
      };
      const openResponsiveDrawer = () => {
        responsiveDrawer.value = true;
      };
      const handleCloseFixed = () => {
        fixedDrawer.value = false;
      };
      const handleCloseResponsive = () => {
        responsiveDrawer.value = false;
      };
      return {
        fixedDrawer,
        responsiveDrawer,
        currentWidth,
        widthOptions,
        openFixedDrawer,
        openResponsiveDrawer,
        handleCloseFixed,
        handleCloseResponsive,
        window
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <!-- Ejemplo con tamaño fijo -->
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Tamaño fijo con <code>size</code></h3>
            <p class="text-sm text-gray-600 mb-4">
              Selecciona un drawer con diferentes valores para la propiedad <code>size</code>:
            </p>
            
            <div class="flex flex-wrap gap-2">
              <g-button v-for="option in widthOptions" :key="option.value" @click="openFixedDrawer(option.value)">
                {{ option.label }}
              </g-button>
            </div>
          </div>
          
          <!-- Ejemplo con tamaño responsive -->
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Tamaño responsive con <code>responsive-size</code></h3>
            <p class="text-sm text-gray-600 mb-4">
              Este drawer se adapta automáticamente a diferentes tamaños de pantalla:
            </p>
            
            <div class="flex flex-wrap gap-2">
              <g-button @click="openResponsiveDrawer">
                Abrir drawer responsive
              </g-button>
            </div>
          </div>
        </div>
        
        <!-- Drawer con tamaño fijo -->
        <g-drawer 
          v-model="fixedDrawer" 
          :size="currentWidth"
          title="Drawer con ancho fijo"
          :description="'Ancho actual: ' + currentWidth"
          append-to-body
          :footer-buttons="[{ text: 'Cerrar', onClick: handleCloseFixed, variant: 'primary' }]"
        >
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-3">Configuración de ancho fijo</h3>
            
            <div class="bg-gray-50 rounded p-3 mb-4">
              <p class="font-medium">Este drawer tiene un ancho de: <code>{{ currentWidth }}</code></p>
              
              <div class="mt-4 text-sm">
                <p>La propiedad <code>size</code> puede recibir valores de diferentes tipos:</p>
                <ul class="list-disc ml-5 mt-2 space-y-1">
                  <li>Porcentaje: <code>'30%'</code>, <code>'50%'</code>, <code>'80%'</code></li>
                  <li>Píxeles: <code>'300px'</code>, <code>'500px'</code></li>
                  <li>Números: <code>300</code>, <code>500</code> (interpretados como píxeles)</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-blue-50 rounded p-3">
              <p class="text-sm text-blue-800">
                <strong>Nota:</strong> Este valor solo se aplica completamente en pantallas grandes (≥992px).
                En pantallas más pequeñas, se aplican los valores predeterminados:
                <ul class="list-disc ml-5 mt-1">
                  <li>Pantallas medianas (576px - 991px): 400px</li>
                  <li>Pantallas pequeñas (<576px): 100%</li>
                </ul>
              </p>
            </div>
          </div>
        </g-drawer>
        
        <!-- Drawer con tamaño responsive -->
        <g-drawer 
          v-model="responsiveDrawer" 
          size="30%"
          title="Drawer con ancho responsive"
          description="Este drawer se adapta a diferentes tamaños de pantalla"
          append-to-body
          :responsive-size="{
            sm: '90%',
            md: '60%',
            lg: '40%'
          }"
          :footer-buttons="[{ text: 'Cerrar', onClick: handleCloseResponsive, variant: 'primary' }]"
        >
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-3">Configuración responsive</h3>
            
            <div class="bg-gray-50 rounded p-3 mb-4">
              <p class="font-medium">Configuración actual:</p>
              <pre class="mt-2 bg-gray-100 p-2 rounded text-sm overflow-auto">
size: '30%'  // Valor base (solo usado si no se especifica lg)

responsiveSize: {
  sm: '90%',   // 576px - 767px
  md: '60%',   // 768px - 991px
  lg: '40%'    // 992px+ (sobrescribe el valor de 'size')
}
              </pre>
            </div>
            
            <p class="mb-2">Redimensiona la ventana para ver cómo cambia el tamaño del drawer:</p>
            <ul class="list-disc ml-5 space-y-1">
              <li>Móvil (<576px): <strong>100%</strong> (predeterminado)</li>
              <li>Tablet pequeña (576px - 767px): <strong>90%</strong> (personalizado)</li>
              <li>Tablet (768px - 991px): <strong>60%</strong> (personalizado)</li>
              <li>Desktop (992px+): <strong>40%</strong> (personalizado, sobrescribe 'size')</li>
            </ul>
            
            <div class="mt-4 p-3 bg-blue-50 rounded text-sm">
              <p class="font-medium text-blue-700">Ancho actual de la ventana: {{ window.innerWidth }}px</p>
            </div>
          </div>
        </g-drawer>
      </g-config-provider>
    \`
  })
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Opciones de Header",
  parameters: {
    docs: {
      description: {
        story: "El componente Drawer ofrece flexibilidad para personalizar el header con las propiedades \`showClose\` y \`withHeader\`. Esta historia muestra las distintas combinaciones posibles."
      },
      source: {
        code: \`
<template>
  <!-- Drawer predeterminado (con header y botón de cierre) -->
  <g-drawer
    v-model="drawer"
    title="Título del drawer"
    description="Descripción opcional del drawer"
  />
  
  <!-- Drawer sin botón de cierre pero con header -->
  <g-drawer
    v-model="drawer"
    title="Título del drawer"
    description="Descripción opcional del drawer"
    :show-close="false"
  />
  
  <!-- Drawer completamente sin header -->
  <g-drawer
    v-model="drawer"
    :with-header="false"
  />
</template>
\`,
        language: "html"
      }
    }
  },
  render: () => ({
    components: {
      GDrawer,
      GConfigProvider,
      GButton
    },
    setup() {
      const selectedOption = ref("default");
      const drawer = ref<boolean>(false);
      const options = [{
        value: "default",
        label: "Header completo (por defecto)"
      }, {
        value: "noClose",
        label: "Sin botón de cierre"
      }, {
        value: "noHeader",
        label: "Sin header"
      }];
      const openDrawer = () => {
        drawer.value = true;
      };
      const closeDrawer = () => {
        drawer.value = false;
      };
      return {
        drawer,
        selectedOption,
        options,
        openDrawer,
        closeDrawer
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-6">
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Configuración del header</h3>
            <p class="text-sm text-gray-600 mb-4">
              El drawer permite personalizar la visualización del header y sus elementos
            </p>
            
            <div class="flex flex-col gap-4 mb-4">
              <div v-for="option in options" :key="option.value" class="flex items-center">
                <input
                  type="radio"
                  :id="option.value"
                  v-model="selectedOption"
                  :value="option.value"
                  class="mr-2"
                />
                <label :for="option.value">{{ option.label }}</label>
              </div>
            </div>
            
            <div class="mt-4">
              <g-button @click="openDrawer">
                Abrir drawer
              </g-button>
            </div>
            
            <g-drawer
              v-model="drawer"
              title="Configuración del header"
              description="Este ejemplo muestra las diferentes configuraciones del header"
              append-to-body
              :with-header="selectedOption !== 'noHeader'"
              :show-close="selectedOption === 'default'"
              :footer-buttons="[{ text: 'Cerrar', onClick: closeDrawer, variant: 'primary' }]"
            >
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-3">Configuración seleccionada:</h3>
                <div class="mb-4 p-3 bg-gray-50 rounded">
                  <div v-if="selectedOption === 'default'" class="text-sm">
                    <div class="font-medium">Header completo (por defecto):</div>
                    <ul class="list-disc pl-5 mt-1">
                      <li><code>withHeader: true</code></li>
                      <li><code>showClose: true</code></li>
                    </ul>
                  </div>
                  <div v-else-if="selectedOption === 'noClose'" class="text-sm">
                    <div class="font-medium">Sin botón de cierre:</div>
                    <ul class="list-disc pl-5 mt-1">
                      <li><code>withHeader: true</code></li>
                      <li><code>showClose: false</code></li>
                    </ul>
                  </div>
                  <div v-else-if="selectedOption === 'noHeader'" class="text-sm">
                    <div class="font-medium">Sin header:</div>
                    <ul class="list-disc pl-5 mt-1">
                      <li><code>withHeader: false</code></li>
                    </ul>
                  </div>
                </div>
                <p class="text-sm text-gray-600">
                  Estas configuraciones permiten adaptar el drawer a diferentes necesidades de interfaz,
                  desde mostrar toda la información hasta un diseño más minimalista.
                </p>
              </div>
            </g-drawer>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...S.parameters?.docs?.source}}};const fa=["Primary","FooterButtonsTypes","Directions","CustomHeader","Sizes","HeaderOptions"];export{A as CustomHeader,j as Directions,k as FooterButtonsTypes,S as HeaderOptions,E as Primary,T as Sizes,fa as __namedExportsOrder,ua as default};
