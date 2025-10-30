import{d as ne,r as I,H as le,c as d,x as b,w as V,e as h,m as q,s as B,u,l as x,k as A,n as me,F as ce,z as de,A as pe,y as H,t as ge,o as ue}from"./vue.esm-bundler-DNj4lB-B.js";import{I as E,_ as z,a as v}from"./Image-CPEP6E_c.js";import{u as fe,Y as xe,G as ve,H as ye}from"./index-CKHqQBpj.js";import{b as be,a as he}from"./index-CP3_1Uby.js";import{f as Ie,u as Ee}from"./install-B47IWttr.js";import{u as Se}from"./index-DG2QIyoI.js";import{U as R,C as X}from"./event-HEVJa2N9.js";import{r as ze}from"./index-CDpzn4wh.js";import{y as Ge}from"./index-CV0MY3Fc.js";import{v as Ae}from"./index-CaVzmfVp.js";import{G as T}from"./ConfigProvider-Dyindn-M.js";import"./error-Cq9Fpw4b.js";import"./index-C0ZH0EVy.js";import"./index-BkReybPT.js";import"./_arrayPush-BERo1YoZ.js";import"./index-tPx7VOd5.js";import"./index-DxdbiDHw.js";import"./index-CJz6wvsP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Me=Object.prototype.hasOwnProperty,Y=(e,r)=>Me.call(e,r),$=e=>typeof e=="string",S=e=>e!==null&&typeof e=="object";const D=e=>typeof e=="boolean",F=e=>typeof e=="number",W="__epPropKey",M=e=>e,je=e=>S(e)&&!!e[W],_e=(e,r)=>{if(!S(e)||je(e))return e;const{values:s,required:m,default:i,type:y,validator:p}=e,l={type:y,required:!!m,validator:s||p?f=>{let t=!1,n=[];if(s&&(n=Array.from(s),Y(e,"default")&&n.push(i),t||(t=n.includes(f))),p&&(t||(t=p(f))),!t&&n.length>0){const C=[...new Set(n)].map(o=>JSON.stringify(o)).join(", ");ge(`Invalid prop: validation failed${r?` for prop "${r}"`:""}. Expected one of [${C}], got value ${JSON.stringify(f)}.`)}return t}:void 0,[W]:!0};return Y(e,"default")&&(l.default=i),l},we=e=>Ie(Object.entries(e).map(([r,s])=>[r,_e(s,r)])),Ne=(e,r)=>{if(e.install=s=>{for(const m of[e,...Object.values(r??{})])s.component(m.name,m)},r)for(const[s,m]of Object.entries(r))e[s]=m;return e},Te=we({variant:{type:M(String),default:"default"},rounded:{type:M(String),default:"md"},classItem:{type:String,default:""},options:{type:M(Array),default:()=>[]},modelValue:{type:[String,Number,Boolean,null],default:void 0},block:Boolean,size:{type:M(String),default:"md"},disabled:Boolean,validateEvent:{type:Boolean,default:!0},messageError:{type:String,default:""},helpText:{type:String,default:""},id:String,name:String,...Se(["ariaLabel"])}),Ce={[R]:e=>$(e)||F(e)||D(e),[X]:e=>$(e)||F(e)||D(e)},ke={class:"flex flex-col gap-xs"},Le=["id","aria-label","aria-labelledby"],Oe=["name","disabled","checked","onChange"],U=ne({__name:"Segmented",props:Te,emits:Ce,setup(e,{emit:r}){const s=e,m=r,i=Ee("segmented"),y=fe(),p=xe(),{formItem:l}=ve(),{inputId:f,isLabeledByFormItem:t}=ye(s,{formItemContext:l}),n=I(null),C=be(),o=le({isInit:!1,width:0,height:0,translateX:0,translateY:0,focusVisible:!1}),G=d(()=>l?.shouldShowErrorChild||!!s?.messageError),J=d(()=>[i.e("help"),{[i.e("help-error")]:G.value}]),k=d(()=>s?.messageError?s.messageError:l?.validateMessage);d(()=>k.value||l?.$el);const K=a=>{const g=L(a);m(R,g),m(X,g)},L=a=>S(a)?a?.value:a,Q=a=>S(a)?a?.label:a,O=a=>!!(p.value||S(a)&&a?.disabled),Z=a=>s.modelValue===L(a),ee=a=>s.options.find(g=>L(g)===a),ae=a=>[i.e("item"),i.is("selected",Z(a)),i.is("disabled",O(a)),s.classItem],P=()=>{if(!n.value)return;const a=n.value.querySelector(".is-selected"),g=n.value.querySelector(".is-selected input");if(!a||!g){o.width=0,o.height=0,o.translateX=0,o.translateY=0,o.focusVisible=!1;return}const c=a.getBoundingClientRect();o.isInit=!0,o.width=c.width,o.translateX=a.offsetLeft;try{o.focusVisible=g.matches(":focus-visible")}catch{}},se=d(()=>[i.b(),i.m(s.size),i.m(s.variant),i.is("block",s.block),i.m(`rounded-${s.rounded}`)]),ie=d(()=>({width:`${o.width}px`,height:"100%",transform:`translateX(${o.translateX}px)`,display:o.isInit?"block":"none"})),te=d(()=>[i.e("item-selected"),i.is("disabled",O(ee(s.modelValue))),i.is("focus-visible",o.focusVisible)]),re=d(()=>s.name||y.value);return he(n,P),V(C,P),V(()=>s.modelValue,()=>{P(),s.validateEvent&&l?.validate?.("change").catch(a=>void 0)},{flush:"post"}),(a,g)=>(h(),b("div",ke,[a.options.length?(h(),b("div",{key:0,class:x(se.value),id:u(f),ref_key:"segmentedRef",ref:n,role:"radiogroup","aria-label":u(t)?void 0:a.ariaLabel||"segmented","aria-labelledby":u(t)?u(l).labelId:void 0},[A("div",{class:x([u(i).e("group")])},[A("div",{style:me(ie.value),class:x(te.value)},null,6),(h(!0),b(ce,null,de(a.options,(c,oe)=>(h(),b("label",{key:oe,class:x(ae(c))},[A("input",{class:x(u(i).e("item-input")),type:"radio",name:re.value,disabled:O(c),checked:Z(c),onChange:Pe=>K(c)},null,42,Oe),A("div",{class:x(u(i).e("item-label"))},[B(a.$slots,"default",{item:c,isActive:Z(c)},()=>[pe(H(Q(c)),1)])],2)],2))),128))],2)],10,Le)):q("",!0),B(a.$slots,"help",{error:k.value,isError:G.value},()=>[u(l)||a.helpText?(h(),b("p",{key:G.value?"error":"help",class:x(J.value)},H(G.value?k.value:a.helpText),3)):q("",!0)])]))}}),Ze=Ne(U,{Segmented:U}),ta={title:"Basic/Image",component:z,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{name:{description:"Nombre de la ilustración",control:"select",options:E,table:{type:{summary:"string"},defaultValue:{summary:"document"}}},size:{description:"Tamaño de la ilustración",control:"select",options:Object.keys(v),table:{type:{summary:"string"},defaultValue:{summary:"md"}}},lazyLoad:{description:"Activar carga diferida de imágenes",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}},args:{name:"document",size:"md",lazyLoad:!0}},j={name:"Uso básico",render:e=>({components:{GImage:z,GConfigProvider:T},setup(){return{args:e}},template:`
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
`,language:"html"}}}},_={name:"Tamaños disponibles",render:e=>({components:{GImage:z,GConfigProvider:T},setup(){const r=Object.keys(v);return{args:e,sizes:r,IMAGE_SIZES:v}},template:`
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
`,language:"html"}}}},w={name:"Galería de ilustraciones",parameters:{docs:{description:{story:"Galería completa de ilustraciones disponibles en el sistema. Haz clic en cualquier ilustración para copiar su nombre. 📋"},source:{code:`
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
`,language:"html"}}},render:()=>({components:{GImage:z,GConfigProvider:T,GSegmented:Ze,GInput:ze,GButton:Ge,GIconFont:Ae},setup(){const e=I("md"),r=I(""),s=I(null),m=Object.keys(v).map(t=>({label:t.toUpperCase(),value:t})),i=I([...E]),y=d(()=>{switch(e.value){case"xs":case"sm":return"grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8";case"md":return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";case"lg":return"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";case"xl":return"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";case"xxl":return"grid-cols-1 sm:grid-cols-2 md:grid-cols-3";case"xxxl":return"grid-cols-1 sm:grid-cols-2";default:return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"}}),p=()=>{if(!r.value.trim()){i.value=[...E];return}const t=r.value.toLowerCase().trim();i.value=E.filter(n=>n.toLowerCase().includes(t))},l=()=>{r.value="",p()},f=t=>{navigator.clipboard.writeText(t).then(()=>{s.value=t,setTimeout(()=>{s.value=null},1500),console.log("Nombre de la ilustración copiado al portapapeles")}).catch(()=>{alert("No se pudo copiar el nombre de la ilustración")})};return ue(()=>{const t=document.createElement("style");return t.textContent=`
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
        `,document.head.appendChild(t),()=>{t.parentNode&&t.parentNode.removeChild(t)}}),{IMAGE_NAMES:E,IMAGE_SIZES:v,selectedSize:e,sizeOptions:m,searchTerm:r,clearSearch:l,copyImageName:f,filteredImages:i,updateFilteredImages:p,copiedImage:s,gridColumns:y}},template:`
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
    `})},N={name:"Manejo de errores",parameters:{docs:{description:{story:"Demostración de cómo el componente maneja los errores cuando una imagen no puede cargarse."},source:{code:`
<!-- Ejemplo de manejo de errores -->
<template>
  <!-- Esta imagen no existe y mostrará el estado de error -->
  <g-image name="non-existent-image" size="md" />

<script setup>
import { GImage } from '@flash-global66/g-image';
<\/script>
`,language:"html"}}},render:()=>({components:{GImage:z,GConfigProvider:T},setup(){return{IMAGE_SIZES:v}},template:`
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
    `})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const ra=["Primary","Sizes","Gallery","ErrorHandling"];export{N as ErrorHandling,w as Gallery,j as Primary,_ as Sizes,ra as __namedExportsOrder,ta as default};
