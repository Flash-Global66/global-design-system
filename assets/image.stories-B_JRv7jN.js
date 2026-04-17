import{r as t,c as I,o as z}from"./vue.esm-bundler-BiLMJBXK.js";import{I as r,_ as o,a as i}from"./Image-BzG80Vov.js";import{T as E}from"./index-YkPZjl2T.js";import{r as h}from"./index-Bqula4Yi.js";import{y as S}from"./index-67NZVayx.js";import{S as G}from"./index-jZ5CM1us.js";import{G as d}from"./ConfigProvider-qZNzJU0u.js";import"./install-BOOPtfBD.js";import"./error-Cq9Fpw4b.js";import"./index-mx_pK5Ly.js";import"./index-BBJ4PQcT.js";import"./index-BzJBbEF1.js";import"./index-4o8CGBx3.js";import"./index-Bc6e4lZJ.js";import"./_arrayPush-DTRztRsG.js";import"./index-zW_pOwy1.js";import"./event-BB_Ol6Sd.js";import"./index-BWcfHJpW.js";import"./index-DCSahtsN.js";import"./index-BE86b7R0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V={title:"Basic/Image",component:o,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{name:{description:"Nombre de la ilustración",control:"select",options:r,table:{type:{summary:"string"},defaultValue:{summary:"document"}}},size:{description:"Tamaño de la ilustración",control:"select",options:Object.keys(i),table:{type:{summary:"string"},defaultValue:{summary:"md"}}},lazyLoad:{description:"Activar carga diferida de imágenes",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}},args:{name:"document",size:"md",lazyLoad:!0}},m={name:"Uso básico",render:a=>({components:{GImage:o,GConfigProvider:d},setup(){return{args:a}},template:`
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
`,language:"html"}}}},n={name:"Tamaños disponibles",render:a=>({components:{GImage:o,GConfigProvider:d},setup(){const s=Object.keys(i);return{args:a,sizes:s,IMAGE_SIZES:i}},template:`
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
`,language:"html"}}}},l={name:"Galería de ilustraciones",parameters:{docs:{description:{story:"Galería completa de ilustraciones disponibles en el sistema. Haz clic en cualquier ilustración para copiar su nombre. 📋"},source:{code:`
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
`,language:"html"}}},render:()=>({components:{GImage:o,GConfigProvider:d,GSegmented:E,GInput:h,GButton:S,GIconFont:G},setup(){const a=t("md"),s=t(""),g=t(null),x=Object.keys(i).map(e=>({label:e.toUpperCase(),value:e})),p=t([...r]),f=I(()=>{switch(a.value){case"xs":case"sm":return"grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8";case"md":return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";case"lg":return"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";case"xl":return"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";case"xxl":return"grid-cols-1 sm:grid-cols-2 md:grid-cols-3";case"xxxl":return"grid-cols-1 sm:grid-cols-2";default:return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"}}),u=()=>{if(!s.value.trim()){p.value=[...r];return}const e=s.value.toLowerCase().trim();p.value=r.filter(b=>b.toLowerCase().includes(e))},v=()=>{s.value="",u()},y=e=>{navigator.clipboard.writeText(e).then(()=>{g.value=e,setTimeout(()=>{g.value=null},1500),console.log("Nombre de la ilustración copiado al portapapeles")}).catch(()=>{alert("No se pudo copiar el nombre de la ilustración")})};return z(()=>{const e=document.createElement("style");return e.textContent=`
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
        `,document.head.appendChild(e),()=>{e.parentNode&&e.parentNode.removeChild(e)}}),{IMAGE_NAMES:r,IMAGE_SIZES:i,selectedSize:a,sizeOptions:x,searchTerm:s,clearSearch:v,copyImageName:y,filteredImages:p,updateFilteredImages:u,copiedImage:g,gridColumns:f}},template:`
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
    `})},c={name:"Manejo de errores",parameters:{docs:{description:{story:"Demostración de cómo el componente maneja los errores cuando una imagen no puede cargarse."},source:{code:`
<!-- Ejemplo de manejo de errores -->
<template>
  <!-- Esta imagen no existe y mostrará el estado de error -->
  <g-image name="non-existent-image" size="md" />

<script setup>
import { GImage } from '@flash-global66/g-image';
<\/script>
`,language:"html"}}},render:()=>({components:{GImage:o,GConfigProvider:d},setup(){return{IMAGE_SIZES:i}},template:`
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
    `})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const R=["Primary","Sizes","Gallery","ErrorHandling"];export{c as ErrorHandling,l as Gallery,m as Primary,n as Sizes,R as __namedExportsOrder,V as default};
