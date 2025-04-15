import{r as y,g as u,o as $,a8 as de,w as R,e as H,h as b,q as o,p as f,v as W,j as v,b as pe,l as T,k as S,K as ge,L as ue,m as fe,J as be,x as P,z as ve}from"./vue.esm-bundler-BmNPGRkA.js";import{x as _e,u as K,f as xe,B as he,G as C}from"./ConfigProvider-DXUgDH9p.js";import{d as ye}from"./error-Cq9Fpw4b.js";import{d as we,a as Ie,u as Ee}from"./index-CSx2dOih.js";import{Y as ze,G as Se,H as Ge}from"./index-BsfyV7Ae.js";import{u as Le}from"./index-BBJgTkeT.js";import{a as ke}from"./index-CrAkN-9E.js";import{u as Ae}from"./use-form-common-props-BNw-y6r4.js";import{U as X,C as J}from"./event-BB_Ol6Sd.js";import{r as Ce}from"./index-Bfjh2vJW.js";import{y as Me}from"./index-PoOaXkf9.js";import{_ as je}from"./Icon-CtzUyd3_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BHYX4iOF.js";import"./_initCloneObject-lUptluD5.js";import"./_arrayPush-BTZjb8bE.js";import"./castArray-D-e3jlfW.js";import"./constants-Dnj8X3EN.js";import"./index-R7rVe_Xq.js";import"./index-y-EhIaq6.js";import"./index-DalEAbx2.js";import"./index.es-C5bAJVb9.js";import"./index-DDVpgGx_.js";import"./index-Ctb24CLq.js";const w=["at","barrier","bell","bolt","calendar","card","celebration","chat-bubble","check","clock","disconnected-plug","document","dollar-currency","door","email","euro-currency","face-recognition","fingerprint","footsteps","gift-box","global66","globe","headset","id-card-back","id-card-front","information","location-pin","lock","magnifying-glass","otp","paper-airplane","pound-currency","price-tags","prohibited","refresh","sales","scissors","stairs","user","warning-sign","wrench"],I={xs:"44px",sm:"64px",md:"80px",lg:"112px",xl:"160px","2xl":"208px","3xl":"260px"},Ue=_e({name:{type:String,required:!0},size:{type:String,default:"md"},lazyLoad:{type:Boolean,default:!0}});function Ne(e){e.name&&!w.includes(e.name)&&ye("Image",`Invalid image name: "${e.name}". Available image names: ${w.join(", ")}`)}const Te=""+new URL("at-BEDGBG0o.webp",import.meta.url).href,Re=""+new URL("barrier-DqjQ7Ouy.webp",import.meta.url).href,Oe=""+new URL("bell-Bvu5__GY.webp",import.meta.url).href,Be=""+new URL("bolt-D0YCAsGC.webp",import.meta.url).href,De=""+new URL("calendar-Cnv2LVQ6.webp",import.meta.url).href,Pe=""+new URL("card-BsIfVS5g.webp",import.meta.url).href,Ze=""+new URL("celebration-Doif_9D6.webp",import.meta.url).href,Ve=""+new URL("chat-bubble-IwmZIZ49.webp",import.meta.url).href,qe=""+new URL("check-DTdLbdkq.webp",import.meta.url).href,Ye=""+new URL("clock-C6TyRzos.webp",import.meta.url).href,Fe=""+new URL("disconnected-plug-DFM5LMKP.webp",import.meta.url).href,$e=""+new URL("document-CjUwp8mY.webp",import.meta.url).href,He=""+new URL("dollar-currency-DZv1zqPb.webp",import.meta.url).href,We=""+new URL("door-Cxbc8i3c.webp",import.meta.url).href,Ke=""+new URL("email-CHmVGWjw.webp",import.meta.url).href,Xe=""+new URL("euro-currency-0Ny97PCz.webp",import.meta.url).href,Je=""+new URL("face-recognition-7TSbusUk.webp",import.meta.url).href,Qe=""+new URL("fingerprint-DodMIf86.webp",import.meta.url).href,ea=""+new URL("footsteps-DoJqOo3-.webp",import.meta.url).href,aa=""+new URL("gift-box-DKnbawrg.webp",import.meta.url).href,sa=""+new URL("global66-BZnpNLUE.webp",import.meta.url).href,ta=""+new URL("globe-BAr0rlVg.webp",import.meta.url).href,ia=""+new URL("headset-BALiiQWu.webp",import.meta.url).href,ra=""+new URL("id-card-back-Bhx9gVKN.webp",import.meta.url).href,oa=""+new URL("id-card-front-DeKyYfVu.webp",import.meta.url).href,la=""+new URL("information-ClTcDx7p.webp",import.meta.url).href,na=""+new URL("location-pin-CQkuIOkM.webp",import.meta.url).href,ma=""+new URL("lock-DsuKsrl1.webp",import.meta.url).href,ca=""+new URL("magnifying-glass-byF0hIc_.webp",import.meta.url).href,da=""+new URL("otp-CZYzFz0b.webp",import.meta.url).href,pa=""+new URL("paper-airplane-DI2QwMV0.webp",import.meta.url).href,ga=""+new URL("pound-currency-dJeYkU-W.webp",import.meta.url).href,ua=""+new URL("price-tags-BJLThI-M.webp",import.meta.url).href,fa=""+new URL("prohibited-DXrv8kWQ.webp",import.meta.url).href,ba=""+new URL("refresh-H5dt6YA8.webp",import.meta.url).href,va=""+new URL("sales-Bcdf7YN6.webp",import.meta.url).href,_a=""+new URL("scissors-DzGxaEn0.webp",import.meta.url).href,xa=""+new URL("stairs-BqDMG-rw.webp",import.meta.url).href,ha=""+new URL("user-DIu1gwfX.webp",import.meta.url).href,ya=""+new URL("warning-sign-BC-E8AoD.webp",import.meta.url).href,wa=""+new URL("wrench-y7P0B2mR.webp",import.meta.url).href,Ia=e=>{const r=y(!1),a=y(!1),l=y(null);let s=null;const _=u(()=>I[e.size]),d=u(()=>{try{return new URL(Object.assign({"../assets/illustrations/at.webp":Te,"../assets/illustrations/barrier.webp":Re,"../assets/illustrations/bell.webp":Oe,"../assets/illustrations/bolt.webp":Be,"../assets/illustrations/calendar.webp":De,"../assets/illustrations/card.webp":Pe,"../assets/illustrations/celebration.webp":Ze,"../assets/illustrations/chat-bubble.webp":Ve,"../assets/illustrations/check.webp":qe,"../assets/illustrations/clock.webp":Ye,"../assets/illustrations/disconnected-plug.webp":Fe,"../assets/illustrations/document.webp":$e,"../assets/illustrations/dollar-currency.webp":He,"../assets/illustrations/door.webp":We,"../assets/illustrations/email.webp":Ke,"../assets/illustrations/euro-currency.webp":Xe,"../assets/illustrations/face-recognition.webp":Je,"../assets/illustrations/fingerprint.webp":Qe,"../assets/illustrations/footsteps.webp":ea,"../assets/illustrations/gift-box.webp":aa,"../assets/illustrations/global66.webp":sa,"../assets/illustrations/globe.webp":ta,"../assets/illustrations/headset.webp":ia,"../assets/illustrations/id-card-back.webp":ra,"../assets/illustrations/id-card-front.webp":oa,"../assets/illustrations/information.webp":la,"../assets/illustrations/location-pin.webp":na,"../assets/illustrations/lock.webp":ma,"../assets/illustrations/magnifying-glass.webp":ca,"../assets/illustrations/otp.webp":da,"../assets/illustrations/paper-airplane.webp":pa,"../assets/illustrations/pound-currency.webp":ga,"../assets/illustrations/price-tags.webp":ua,"../assets/illustrations/prohibited.webp":fa,"../assets/illustrations/refresh.webp":ba,"../assets/illustrations/sales.webp":va,"../assets/illustrations/scissors.webp":_a,"../assets/illustrations/stairs.webp":xa,"../assets/illustrations/user.webp":ha,"../assets/illustrations/warning-sign.webp":ya,"../assets/illustrations/wrench.webp":wa})[`../assets/illustrations/${e.name}.webp`],import.meta.url).href}catch{return a.value=!0,""}}),p=()=>{a.value=!0},n=()=>{r.value=!0},t=()=>{if(!e.lazyLoad){n();return}if(s&&(s(),s=null),l.value){const{stop:m}=we(l,([{isIntersecting:g}])=>{g&&(n(),m())},{threshold:.1,rootMargin:"50px"});s=m}};return $(()=>{t()}),de(()=>{s&&s()}),R(()=>e.name,()=>{r.value=!1,t()}),{sizeValue:_,isLoaded:r,hasError:a,imageSrc:d,imageContainer:l,handleImageError:p}},Ea=["src","alt"],za=["aria-label"],E=H({__name:"Image",props:Ue,setup(e){const r=e;Ne(r);const a=K("image"),{sizeValue:l,isLoaded:s,imageSrc:_,imageContainer:d,handleImageError:p,hasError:n}=Ia(r);return(t,m)=>(v(),b("figure",{class:f(o(a).b("container")),ref_key:"imageContainer",ref:d,style:W({width:o(l),height:o(l),minWidth:o(l),minHeight:o(l)})},[o(s)&&!o(n)?(v(),b("img",{key:0,src:o(_),alt:t.name,class:f(o(a).b()),onError:m[0]||(m[0]=(...g)=>o(p)&&o(p)(...g))},null,42,Ea)):o(n)?(v(),b("div",{key:2,class:f([o(a).e("placeholder"),`text-size-${t.size}`]),role:"img","aria-label":"Error al cargar la imagen"}," 404 ",2)):(v(),b("div",{key:1,class:f(o(a).e("placeholder")),role:"img","aria-label":`Cargando imagen: ${t.name}`},null,10,za))],6))}});E.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/image/src/Image.vue"]};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Sa=Object.prototype.hasOwnProperty,Z=(e,r)=>Sa.call(e,r),V=e=>typeof e=="string",z=e=>e!==null&&typeof e=="object";const q=e=>typeof e=="boolean",Y=e=>typeof e=="number",Q="__epPropKey",Ga=e=>e,La=e=>z(e)&&!!e[Q],ka=(e,r)=>{if(!z(e)||La(e))return e;const{values:a,required:l,default:s,type:_,validator:d}=e,p={type:_,required:!!l,validator:a||d?n=>{let t=!1,m=[];if(a&&(m=Array.from(a),Z(e,"default")&&m.push(s),t||(t=m.includes(n))),d&&(t||(t=d(n))),!t&&m.length>0){const g=[...new Set(m)].map(M=>JSON.stringify(M)).join(", ");ve(`Invalid prop: validation failed${r?` for prop "${r}"`:""}. Expected one of [${g}], got value ${JSON.stringify(n)}.`)}return t}:void 0,[Q]:!0};return Z(e,"default")&&(p.default=s),p},Aa=e=>xe(Object.entries(e).map(([r,a])=>[r,ka(a,r)])),Ca=(e,r)=>{if(e.install=a=>{for(const l of[e,...Object.values(r??{})])a.component(l.name,l)},r)for(const[a,l]of Object.entries(r))e[a]=l;return e},Ma=Aa({classItem:{type:String,default:""},options:{type:Ga(Array),default:()=>[]},modelValue:{type:[String,Number,Boolean,null],default:void 0},block:Boolean,size:he,disabled:Boolean,validateEvent:{type:Boolean,default:!0},messageError:{type:String,default:""},id:String,name:String,...Le(["ariaLabel"])}),ja={[X]:e=>V(e)||Y(e)||q(e),[J]:e=>V(e)||Y(e)||q(e)},Ua={class:"flex flex-col gap-xs"},Na=["id","aria-label","aria-labelledby"],Ta=["name","disabled","checked","onChange"],Ra={key:0},F=H({__name:"Segmented",props:Ma,emits:ja,setup(e,{emit:r}){const a=e,l=r,s=K("segmented"),_=ke(),d=Ae(),p=ze(),{formItem:n}=Se(),{inputId:t,isLabeledByFormItem:m}=Ge(a,{formItemContext:n}),g=y(null),M=Ie(),c=pe({isInit:!1,width:0,height:0,translateX:0,translateY:0,focusVisible:!1}),O=u(()=>n?.shouldShowErrorChild||!!a?.messageError),ee=u(()=>[s.e("help"),{[s.e("help-error")]:O.value}]),B=u(()=>a?.messageError?a.messageError:n?.validateMessage),ae=u(()=>B.value||n?.$el),se=i=>{const x=j(i);l(X,x),l(J,x)},j=i=>z(i)?i?.value:i,te=i=>z(i)?i?.label:i,U=i=>!!(p.value||z(i)&&i?.disabled),D=i=>a.modelValue===j(i),ie=i=>a.options.find(x=>j(x)===i),re=i=>[s.e("item"),s.is("selected",D(i)),s.is("disabled",U(i)),a.classItem],N=()=>{if(!g.value)return;const i=g.value.querySelector(".is-selected"),x=g.value.querySelector(".is-selected input");if(!i||!x){c.width=0,c.height=0,c.translateX=0,c.translateY=0,c.focusVisible=!1;return}const h=i.getBoundingClientRect();c.isInit=!0,c.width=h.width,c.translateX=i.offsetLeft;try{c.focusVisible=x.matches(":focus-visible")}catch{}},oe=u(()=>[s.b(),s.m(d.value),s.is("block",a.block)]),le=u(()=>({width:`${c.width}px`,height:"100%",transform:`translateX(${c.translateX}px)`,display:c.isInit?"block":"none"})),ne=u(()=>[s.e("item-selected"),s.is("disabled",U(ie(a.modelValue))),s.is("focus-visible",c.focusVisible)]),me=u(()=>a.name||_.value);return Ee(g,N),R(M,N),R(()=>a.modelValue,()=>{N(),a.validateEvent&&n?.validate?.("change").catch(i=>void 0)},{flush:"post"}),(i,x)=>(v(),b("div",Ua,[i.options.length?(v(),b("div",{key:0,class:f(oe.value),id:o(t),ref_key:"segmentedRef",ref:g,role:"radiogroup","aria-label":o(m)?void 0:i.ariaLabel||"segmented","aria-labelledby":o(m)?o(n).labelId:void 0},[S("div",{class:f([o(s).e("group")])},[S("div",{style:W(le.value),class:f(ne.value)},null,6),(v(!0),b(ge,null,ue(i.options,(h,ce)=>(v(),b("label",{key:ce,class:f(re(h))},[S("input",{class:f(o(s).e("item-input")),type:"radio",name:me.value,disabled:U(h),checked:D(h),onChange:Ba=>se(h)},null,42,Ta),S("div",{class:f(o(s).e("item-label"))},[fe(i.$slots,"default",{item:h},()=>[be(P(te(h)),1)])],2)],2))),128))],2)],10,Na)):T("",!0),ae.value?(v(),b("div",{key:1,class:f(ee.value)},[O.value?(v(),b("p",Ra,P(B.value),1)):T("",!0)],2)):T("",!0)]))}}),Oa=Ca(F,{Segmented:F}),cs={title:"Basic/Image",component:E,parameters:{docs:{description:{component:`
# Image Component

El componente Image proporciona una manera sencilla y optimizada de mostrar ilustraciones predefinidas con distintos tamaños:

## Características
- Colección de ilustraciones predefinidas listas para usar
- Siete tamaños diferentes para adaptarse a diversos contextos
- Lazy loading para optimizar el rendimiento
- Tipado estricto para autocompletado de nombres y tamaños

## Instalación

\`\`\`bash
yarn add @flash-global66/g-image
\`\`\`

## Dependencias
Este componente requiere:
- @vueuse/core (para el lazy loading)

## Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
@use "@flash-global66/g-image/styles.scss";
\`\`\`

## Uso básico

\`\`\`vue
<template>
  <g-image name="document" size="md" />
</template>

<script setup>
import { GImage } from '@flash-global66/g-image';
<\/script>
\`\`\`

## Tamaños disponibles
- **xs**: 44x44 px
- **sm**: 64x64 px
- **md**: 80x80 px (predeterminado)
- **lg**: 112x112 px
- **xl**: 160x160 px
- **2xl**: 208x208 px
- **3xl**: 260x260 px

## Optimizaciones de rendimiento
### Lazy Loading
- El componente utiliza IntersectionObserver para cargar las imágenes sólo cuando son visibles
- Esto mejora significativamente el rendimiento en páginas con múltiples ilustraciones
- Puedes desactivar esta función con \`lazyLoad=false\`

## Agregar nuevas ilustraciones al componente

Para añadir nuevas imágenes al componente:

1. **Añadir el archivo**
   - Coloca el archivo WebP en \`components/Image/assets/illustrations/\`

2. **Actualizar las constantes**
   - Modifica \`src/constants/image.constants.ts\` para incluir el nuevo nombre en \`IMAGE_NAMES\`
   - Ejemplo: Añade 'new-illustration' al array \`IMAGE_NAMES\`

3. **Construir el componente**
   - Ejecuta \`yarn build image\` para actualizar el componente

## Tipado estricto y autocompletado
El componente utiliza TypeScript para proporcionar tipado estricto, lo que permite:
- Autocompletado de nombres de ilustraciones en tu editor
- Validación en tiempo de compilación para evitar errores
- Advertencias si se usa un nombre que no existe en el conjunto de ilustraciones
        `}}},argTypes:{name:{description:"Nombre de la ilustración",control:"select",options:w,table:{type:{summary:"string"},defaultValue:{summary:"document"}}},size:{description:"Tamaño de la ilustración",control:"select",options:Object.keys(I),table:{type:{summary:"string"},defaultValue:{summary:"md"}}},lazyLoad:{description:"Activar carga diferida de imágenes",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}},args:{name:"document",size:"md",lazyLoad:!0}},G={name:"Uso básico",render:e=>({components:{GImage:E,GConfigProvider:C},setup(){return{args:e}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-image v-bind="args" />
        </div>
      </g-config-provider>
    `}),parameters:{docs:{source:{code:`
<!-- Ejemplo de uso básico -->
<template>
  <g-image name="document" size="md" />
</template>

<script setup>
import { GImage } from '@flash-global66/g-image';
<\/script>
`,language:"html"}}}},L={name:"Tamaños disponibles",render:e=>({components:{GImage:E,GConfigProvider:C},setup(){const r=Object.keys(I);return{args:e,sizes:r,IMAGE_SIZES:I}},template:`
      <g-config-provider>
        <div class="flex flex-wrap gap-6 items-end">
          <div v-for="size in sizes" :key="size" class="flex flex-col items-center">
            <!-- Contenedor con altura y anchura fijas basadas en el tamaño -->
            <div class="flex items-center justify-center" 
                 :style="{ width: IMAGE_SIZES[size], height: IMAGE_SIZES[size], minHeight: IMAGE_SIZES[size], minWidth: IMAGE_SIZES[size] }">
              <g-image v-bind="args" :size="size" />
            </div>
            <span class="mt-2 text-sm text-gray-500">{{ size }} ({{ IMAGE_SIZES[size] }})</span>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{source:{code:`
<!-- Ejemplo de uso con diferentes tamaños -->
<template>
  <!-- Tamaño xs: 44x44px -->
  <g-image name="document" size="xs" />
  
  <!-- Tamaño sm: 64x64px -->
  <g-image name="document" size="sm" />
  
  <!-- Tamaño md: 80x80px (por defecto) -->
  <g-image name="document" size="md" />
  
  <!-- Tamaño lg: 112x112px -->
  <g-image name="document" size="lg" />
  
  <!-- Tamaño xl: 160x160px -->
  <g-image name="document" size="xl" />
  
  <!-- Tamaño xxl: 208x208px -->
  <g-image name="document" size="xxl" />
  
  <!-- Tamaño xxxl: 260x260px -->
  <g-image name="document" size="xxxl" />
</template>

<script setup>
import { GImage } from '@flash-global66/g-image';
<\/script>
`,language:"html"}}}},k={name:"Galería de ilustraciones",parameters:{docs:{description:{story:"Galería completa de ilustraciones disponibles en el sistema. Haz clic en cualquier ilustración para copiar su nombre. 📋"},source:{code:`
<!-- Ejemplo para mostrar múltiples imágenes en una galería -->
<template>
  <div class="gallery-container">
    <!-- Puedes iterar sobre las imágenes disponibles -->
    <div v-for="imageName in ['document', 'user', 'check', 'email']" :key="imageName" class="image-item">
      <g-image :name="imageName" size="md" />
      <span class="image-name">{{ imageName }}</span>
    </div>
  </div>
</template>

<script setup>
import { GImage } from '@flash-global66/g-image';

// Todos los nombres de imágenes disponibles
// Puedes importar la constante IMAGE_NAMES desde el paquete
// import { IMAGE_NAMES } from '@flash-global66/g-image';
<\/script>

<style scoped>
.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.image-name {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #666;
}
</style>
`,language:"html"}}},render:()=>({components:{GImage:E,GConfigProvider:C,GSegmented:Oa,GInput:Ce,GButton:Me,GIconFont:je},setup(){const e=y("md"),r=y(""),a=y(null),l=Object.keys(I).map(t=>({label:t.toUpperCase(),value:t})),s=y([...w]),_=u(()=>{switch(e.value){case"xs":case"sm":return"grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8";case"md":return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";case"lg":return"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";case"xl":return"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";case"xxl":return"grid-cols-1 sm:grid-cols-2 md:grid-cols-3";case"xxxl":return"grid-cols-1 sm:grid-cols-2";default:return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"}}),d=()=>{if(!r.value.trim()){s.value=[...w];return}const t=r.value.toLowerCase().trim();s.value=w.filter(m=>m.toLowerCase().includes(t))},p=()=>{r.value="",d()},n=t=>{navigator.clipboard.writeText(t).then(()=>{a.value=t,setTimeout(()=>{a.value=null},1500),console.log("Nombre de la ilustración copiado al portapapeles")}).catch(()=>{alert("No se pudo copiar el nombre de la ilustración")})};return $(()=>{const t=document.createElement("style");return t.textContent=`
          .copy-animation {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border-color: #10b981;
            z-index: 10;
          }
          
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(10px); }
            20% { opacity: 1; transform: translateY(0); }
            80% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
          
          .copy-feedback {
            animation: fadeInOut 1.5s ease forwards;
          }
        `,document.head.appendChild(t),()=>{t.parentNode&&t.parentNode.removeChild(t)}}),{IMAGE_NAMES:w,IMAGE_SIZES:I,selectedSize:e,sizeOptions:l,searchTerm:r,clearSearch:p,copyImageName:n,filteredImages:s,updateFilteredImages:d,copiedImage:a,gridColumns:_}},template:`
      <g-config-provider>
        <div class="space-y-8">
          <g-segmented
            block
            v-model="selectedSize"
            :options="sizeOptions"
            class="mb-8"
          />

          <div class="flex items-center gap-2">
            <g-input
              v-model="searchTerm"
              placeholder="Buscar ilustración..."
              class="w-full max-w-md"
              inputSize="small"
              @input="updateFilteredImages"
            >
              <template #prefix>
                <g-icon-font name="solid magnifying-glass" size="sm" />
              </template>
            </g-input>
            <g-button 
              v-if="searchTerm"
              @click="clearSearch"
              size="small"
            >
              Limpiar
            </g-button>
          </div>

          <div :class="['grid gap-4 md:gap-6', gridColumns]">
            <div
              v-for="name in filteredImages"
              :key="name"
              class="flex bg-white flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-50 cursor-pointer text-grey-600 relative overflow-hidden transition-all duration-300"
              :class="{ 'copy-animation': copiedImage === name }"
              @click="copyImageName(name)"
            >
              <!-- Contenedor mejorado con dimensiones fijas para que no se corten las imágenes -->
              <div class="flex items-center justify-center mb-2 overflow-visible" 
                   :style="{ 
                     width: IMAGE_SIZES[selectedSize], 
                     height: IMAGE_SIZES[selectedSize], 
                     minHeight: IMAGE_SIZES[selectedSize],
                     minWidth: IMAGE_SIZES[selectedSize]
                   }">
                <g-image :name="name" :size="selectedSize" />
              </div>
              <span class="text-xs text-center">{{ name }}</span>
              
              <!-- Success overlay that appears when copied -->
              <div v-if="copiedImage === name" class="absolute inset-0 bg-emerald-50 bg-opacity-70 flex flex-col items-center justify-center transition-opacity duration-300 copy-feedback">
                <div class="text-emerald-600 mb-1">
                  <g-icon-font name="solid check-circle" size="lg" />
                </div>
                <span class="text-xs font-medium text-emerald-700">¡Copiado!</span>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},A={name:"Manejo de errores",parameters:{docs:{description:{story:"Demostración de cómo el componente maneja los errores cuando una imagen no puede cargarse."},source:{code:`
<!-- Ejemplo de manejo de errores -->
<template>
  <!-- Esta imagen no existe y mostrará el estado de error -->
  <g-image name="non-existent-image" size="md" />

<script setup>
import { GImage } from '@flash-global66/g-image';
<\/script>
`,language:"html"}}},render:()=>({components:{GImage:E,GConfigProvider:C},setup(){return{IMAGE_SIZES:I}},template:`
      <g-config-provider>
        <div class="space-y-8">
          <h3 class="text-lg font-medium mb-4">Manejo de errores de carga de imágenes</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Ejemplo 1: Imagen que no existe -->
            <div class="flex flex-col items-center p-4 border rounded-md">
              <g-image name="non-existent-image" size="md" />
              <p class="mt-3 text-sm text-gray-600">Imagen inexistente</p>
            </div>
            
            <!-- Ejemplo 2: Imagen con nombre incorrecto -->
            <div class="flex flex-col items-center p-4 border rounded-md">
              <g-image name="broken-image" size="md" />
              <p class="mt-3 text-sm text-gray-600">Nombre incorrecto</p>
            </div>
            
            <!-- Ejemplo 3: Diferentes tamaños con error -->
            <div class="flex flex-col items-center p-4 border rounded-md">
              <div class="grid grid-cols-3 gap-4">
                <g-image name="missing-file" size="xs" />
                <g-image name="missing-file" size="sm" />
                <g-image name="missing-file" size="md" />
              </div>
              <p class="mt-3 text-sm text-gray-600">Diferentes tamaños</p>
            </div>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-md mt-6">
            <h4 class="font-medium mb-2">¿Cómo funciona?</h4>
            <p class="text-sm text-gray-700">
              Cuando una imagen no puede cargarse, el componente muestra automáticamente un estado de error con el código "404".
              Este comportamiento se activa en dos casos:
            </p>
            <ul class="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>La URL de la imagen no puede construirse (nombre inválido)</li>
              <li>La imagen existe pero no puede cargarse (error de red, archivo corrupto, etc.)</li>
            </ul>
          </div>
        </div>
      </g-config-provider>
    `})};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Uso básico',
  render: args => ({
    components: {
      GImage,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-image v-bind="args" />
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`
<!-- Ejemplo de uso básico -->
<template>
  <g-image name="document" size="md" />
</template>

<script setup>
import { GImage } from '@flash-global66/g-image';
<\/script>
\`,
        language: 'html'
      }
    }
  }
}`,...G.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Tamaños disponibles',
  render: args => ({
    components: {
      GImage,
      GConfigProvider
    },
    setup() {
      const sizes = Object.keys(IMAGE_SIZES);
      return {
        args,
        sizes,
        IMAGE_SIZES
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-wrap gap-6 items-end">
          <div v-for="size in sizes" :key="size" class="flex flex-col items-center">
            <!-- Contenedor con altura y anchura fijas basadas en el tamaño -->
            <div class="flex items-center justify-center" 
                 :style="{ width: IMAGE_SIZES[size], height: IMAGE_SIZES[size], minHeight: IMAGE_SIZES[size], minWidth: IMAGE_SIZES[size] }">
              <g-image v-bind="args" :size="size" />
            </div>
            <span class="mt-2 text-sm text-gray-500">{{ size }} ({{ IMAGE_SIZES[size] }})</span>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`
<!-- Ejemplo de uso con diferentes tamaños -->
<template>
  <!-- Tamaño xs: 44x44px -->
  <g-image name="document" size="xs" />
  
  <!-- Tamaño sm: 64x64px -->
  <g-image name="document" size="sm" />
  
  <!-- Tamaño md: 80x80px (por defecto) -->
  <g-image name="document" size="md" />
  
  <!-- Tamaño lg: 112x112px -->
  <g-image name="document" size="lg" />
  
  <!-- Tamaño xl: 160x160px -->
  <g-image name="document" size="xl" />
  
  <!-- Tamaño xxl: 208x208px -->
  <g-image name="document" size="xxl" />
  
  <!-- Tamaño xxxl: 260x260px -->
  <g-image name="document" size="xxxl" />
</template>

<script setup>
import { GImage } from '@flash-global66/g-image';
<\/script>
\`,
        language: 'html'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Galería de ilustraciones',
  parameters: {
    docs: {
      description: {
        story: 'Galería completa de ilustraciones disponibles en el sistema. Haz clic en cualquier ilustración para copiar su nombre. 📋'
      },
      source: {
        code: \`
<!-- Ejemplo para mostrar múltiples imágenes en una galería -->
<template>
  <div class="gallery-container">
    <!-- Puedes iterar sobre las imágenes disponibles -->
    <div v-for="imageName in ['document', 'user', 'check', 'email']" :key="imageName" class="image-item">
      <g-image :name="imageName" size="md" />
      <span class="image-name">{{ imageName }}</span>
    </div>
  </div>
</template>

<script setup>
import { GImage } from '@flash-global66/g-image';

// Todos los nombres de imágenes disponibles
// Puedes importar la constante IMAGE_NAMES desde el paquete
// import { IMAGE_NAMES } from '@flash-global66/g-image';
<\/script>

<style scoped>
.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.image-name {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #666;
}
</style>
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GImage,
      GConfigProvider,
      GSegmented,
      GInput,
      GButton,
      GIconFont
    },
    setup() {
      const selectedSize = ref('md');
      const searchTerm = ref('');
      const copiedImage = ref<string | null>(null);
      const sizeOptions = Object.keys(IMAGE_SIZES).map(size => ({
        label: size.toUpperCase(),
        value: size
      }));
      const filteredImages = ref<string[]>([...IMAGE_NAMES]);
      const gridColumns = computed(() => {
        switch (selectedSize.value) {
          case 'xs':
          case 'sm':
            return 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8';
          case 'md':
            return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6';
          case 'lg':
            return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
          case 'xl':
            return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
          case 'xxl':
            return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
          case 'xxxl':
            return 'grid-cols-1 sm:grid-cols-2';
          default:
            return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6';
        }
      });
      const updateFilteredImages = () => {
        if (!searchTerm.value.trim()) {
          filteredImages.value = [...IMAGE_NAMES];
          return;
        }
        const searchTermLower = searchTerm.value.toLowerCase().trim();
        filteredImages.value = IMAGE_NAMES.filter(name => name.toLowerCase().includes(searchTermLower));
      };
      const clearSearch = () => {
        searchTerm.value = '';
        updateFilteredImages();
      };
      const copyImageName = (imageName: string) => {
        navigator.clipboard.writeText(imageName).then(() => {
          copiedImage.value = imageName;
          setTimeout(() => {
            copiedImage.value = null;
          }, 1500);
          console.log('Nombre de la ilustración copiado al portapapeles');
        }).catch(() => {
          alert('No se pudo copiar el nombre de la ilustración');
        });
      };
      onMounted(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = \`
          .copy-animation {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border-color: #10b981;
            z-index: 10;
          }
          
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(10px); }
            20% { opacity: 1; transform: translateY(0); }
            80% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
          
          .copy-feedback {
            animation: fadeInOut 1.5s ease forwards;
          }
        \`;
        document.head.appendChild(styleElement);
        return () => {
          if (styleElement.parentNode) {
            styleElement.parentNode.removeChild(styleElement);
          }
        };
      });
      return {
        IMAGE_NAMES,
        IMAGE_SIZES,
        selectedSize,
        sizeOptions,
        searchTerm,
        clearSearch,
        copyImageName,
        filteredImages,
        updateFilteredImages,
        copiedImage,
        gridColumns
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-8">
          <g-segmented
            block
            v-model="selectedSize"
            :options="sizeOptions"
            class="mb-8"
          />

          <div class="flex items-center gap-2">
            <g-input
              v-model="searchTerm"
              placeholder="Buscar ilustración..."
              class="w-full max-w-md"
              inputSize="small"
              @input="updateFilteredImages"
            >
              <template #prefix>
                <g-icon-font name="solid magnifying-glass" size="sm" />
              </template>
            </g-input>
            <g-button 
              v-if="searchTerm"
              @click="clearSearch"
              size="small"
            >
              Limpiar
            </g-button>
          </div>

          <div :class="['grid gap-4 md:gap-6', gridColumns]">
            <div
              v-for="name in filteredImages"
              :key="name"
              class="flex bg-white flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-50 cursor-pointer text-grey-600 relative overflow-hidden transition-all duration-300"
              :class="{ 'copy-animation': copiedImage === name }"
              @click="copyImageName(name)"
            >
              <!-- Contenedor mejorado con dimensiones fijas para que no se corten las imágenes -->
              <div class="flex items-center justify-center mb-2 overflow-visible" 
                   :style="{ 
                     width: IMAGE_SIZES[selectedSize], 
                     height: IMAGE_SIZES[selectedSize], 
                     minHeight: IMAGE_SIZES[selectedSize],
                     minWidth: IMAGE_SIZES[selectedSize]
                   }">
                <g-image :name="name" :size="selectedSize" />
              </div>
              <span class="text-xs text-center">{{ name }}</span>
              
              <!-- Success overlay that appears when copied -->
              <div v-if="copiedImage === name" class="absolute inset-0 bg-emerald-50 bg-opacity-70 flex flex-col items-center justify-center transition-opacity duration-300 copy-feedback">
                <div class="text-emerald-600 mb-1">
                  <g-icon-font name="solid check-circle" size="lg" />
                </div>
                <span class="text-xs font-medium text-emerald-700">¡Copiado!</span>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Manejo de errores',
  parameters: {
    docs: {
      description: {
        story: 'Demostración de cómo el componente maneja los errores cuando una imagen no puede cargarse.'
      },
      source: {
        code: \`
<!-- Ejemplo de manejo de errores -->
<template>
  <!-- Esta imagen no existe y mostrará el estado de error -->
  <g-image name="non-existent-image" size="md" />

<script setup>
import { GImage } from '@flash-global66/g-image';
<\/script>
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GImage,
      GConfigProvider
    },
    setup() {
      return {
        IMAGE_SIZES
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-8">
          <h3 class="text-lg font-medium mb-4">Manejo de errores de carga de imágenes</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Ejemplo 1: Imagen que no existe -->
            <div class="flex flex-col items-center p-4 border rounded-md">
              <g-image name="non-existent-image" size="md" />
              <p class="mt-3 text-sm text-gray-600">Imagen inexistente</p>
            </div>
            
            <!-- Ejemplo 2: Imagen con nombre incorrecto -->
            <div class="flex flex-col items-center p-4 border rounded-md">
              <g-image name="broken-image" size="md" />
              <p class="mt-3 text-sm text-gray-600">Nombre incorrecto</p>
            </div>
            
            <!-- Ejemplo 3: Diferentes tamaños con error -->
            <div class="flex flex-col items-center p-4 border rounded-md">
              <div class="grid grid-cols-3 gap-4">
                <g-image name="missing-file" size="xs" />
                <g-image name="missing-file" size="sm" />
                <g-image name="missing-file" size="md" />
              </div>
              <p class="mt-3 text-sm text-gray-600">Diferentes tamaños</p>
            </div>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-md mt-6">
            <h4 class="font-medium mb-2">¿Cómo funciona?</h4>
            <p class="text-sm text-gray-700">
              Cuando una imagen no puede cargarse, el componente muestra automáticamente un estado de error con el código "404".
              Este comportamiento se activa en dos casos:
            </p>
            <ul class="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>La URL de la imagen no puede construirse (nombre inválido)</li>
              <li>La imagen existe pero no puede cargarse (error de red, archivo corrupto, etc.)</li>
            </ul>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...A.parameters?.docs?.source}}};const ds=["Primary","Sizes","Gallery","ErrorHandling"];export{A as ErrorHandling,k as Gallery,G as Primary,L as Sizes,ds as __namedExportsOrder,cs as default};
