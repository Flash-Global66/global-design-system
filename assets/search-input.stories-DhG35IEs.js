import{r as t,c as D,w as $,d as U,W as H,x as F,b as g,f as G,u as a,p as K,a2 as W,a1 as J,l as b,e as h,k as j,h as O,m as x}from"./vue.esm-bundler-C43JrhH2.js";import{r as Q}from"./index-CA6S_qzr.js";import{G as V,a as _}from"./SkeletonItem-hAKHCl9-.js";import{F as M}from"./index-B1PxvDbZ.js";import{e as X}from"./index-DmfABaPz.js";import{b as Y,w as Z}from"./install-CfJGiCvs.js";import{u as ee}from"./index-D5bIuBCX.js";import{G as y}from"./ConfigProvider-Br84NlF7.js";import{a as d}from"./index-Br0BFi8U.js";import{a as ae,b as T}from"./documentation-stories-DKOl0nGm.js";import"./index-BDKGuxIf.js";import"./index-DH2w0SzE.js";import"./index-fhkPmQjX.js";import"./_arrayPush-BhjrZnJY.js";import"./index-CdSB2Bdf.js";import"./index-BjhK0CHr.js";import"./index-D_xYoXKA.js";import"./index-Bn_3zeFh.js";import"./event-BB_Ol6Sd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-70yognVe.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./v4-CtRu48qb.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";import"./error-Cq9Fpw4b.js";function re(o,r,c){const e=t(),s=t(o.modelValue||""),m=t(!1),n=D(()=>{const{class:l,style:A,modelValue:w,"onUpdate:modelValue":p,disabled:f,initialLoading:L,searchingLoading:te,debounceTime:le,placeholder:ce,label:ie,helpText:de,messageError:ue,...N}=c;return N}),S=X(l=>{m.value=!1,r("search",l)},o.debounceTime),u=l=>{s.value=l,r("update:modelValue",l),m.value=!0,S(l)},i=()=>{m.value=!1,r("search",s.value)},z=l=>{l?E():e.value?.focus()},E=()=>{s.value="",r("update:modelValue",""),r("clear"),r("search",""),e.value?.focus()};return $(()=>o.modelValue,l=>{l!==s.value&&(s.value=l)},{immediate:!0}),{inputRef:e,searchQuery:s,filteredAttrs:n,handleInput:u,handleEnterKey:i,handleIconClick:z,clearSearch:E,focus:()=>e.value?.focus(),blur:()=>e.value?.blur()}}const se=Y({modelValue:{type:String,default:""},placeholder:{type:String,default:""},label:{type:String,default:""},helpText:{type:String,default:""},messageError:{type:String,default:""},disabled:Boolean,initialLoading:Boolean,searchingLoading:Boolean,debounceTime:{type:Number,default:300}}),oe={"update:modelValue":o=>!0,search:o=>!0,clear:()=>!0},k=U({name:"GSearchInput",inheritAttrs:!1,__name:"search-input",props:se,emits:oe,setup(o,{expose:r,emit:c}){const e=o,s=c,m=H(),n=ee("search-input"),S=D(()=>[{[n.is("disabled")]:e.disabled,[n.is("searching")]:e.searchingLoading,[n.is("loading")]:e.initialLoading,[n.is("error")]:!!e.messageError}]),{inputRef:u,searchQuery:i,filteredAttrs:z,handleInput:E,handleEnterKey:l,handleIconClick:A,clearSearch:w}=re(e,s,m);return r({focus:()=>u.value?.focus(),blur:()=>u.value?.blur(),clear:w}),(p,f)=>(h(),F("div",{class:b([a(n).b(),S.value])},[p.initialLoading?(h(),g(a(_),{key:0,animated:""},{template:G(()=>[j("div",{class:b(a(n).e("skeleton"))},[O(a(V),{variant:"text",class:"h-12 rounded-md"}),p.$attrs["help-text"]||e.helpText?(h(),g(a(V),{key:0,variant:"text"})):x("",!0)],2)]),_:1})):(h(),g(a(Q),K({key:1,ref_key:"inputRef",ref:u,"model-value":a(i)},a(z),{class:[a(n).e("input")],disabled:p.disabled,loading:p.searchingLoading,placeholder:e.placeholder,label:e.label,"help-text":e.helpText,"message-error":e.messageError,"onUpdate:modelValue":a(E),onKeydown:W(J(a(l),["prevent"]),["enter"])}),{suffix:G(()=>[j("div",{class:b(a(n).e("icon-container"))},[!p.searchingLoading&&!a(i)?(h(),g(a(M),{key:0,name:"regular search",class:b(a(n).e("icon")),onClick:f[0]||(f[0]=L=>a(A)(!1))},null,8,["class"])):x("",!0),!p.searchingLoading&&a(i)?(h(),g(a(M),{key:1,name:"regular times",class:b(a(n).e("icon")),onClick:f[1]||(f[1]=L=>a(A)(!0))},null,8,["class"])):x("",!0),p.searchingLoading?(h(),g(a(M),{key:2,name:"regular arrows-rotate",class:b(a(n).e("icon")),spin:""},null,8,["class"])):x("",!0)],2)]),_:1},16,["model-value","class","disabled","loading","placeholder","label","help-text","message-error","onUpdate:modelValue","onKeydown"]))],2))}});k.__docgenInfo={name:"GSearchInput",exportName:"default",displayName:"search-input",description:"",tags:{},expose:[{name:"focus"},{name:"blur"},{name:"clear"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/search-input/src/search-input.vue"]};const v=Z(k,{SearchInput:k}),ne="1.2.0",P={"@flash-global66/g-config-provider":"0.0.8","@flash-global66/g-icon-font":"^0.0.8","@flash-global66/g-input":"0.3.0","@flash-global66/g-skeleton":"0.0.7","@vueuse/core":"^12.4.0","element-plus":"^2.9.7",vue:"^3.2.0"},De={title:"Form/SearchInput",component:v,parameters:{docs:{description:{component:`
El componente SearchInput proporciona un campo de búsqueda optimizado con funcionalidades avanzadas como debounce, estados de carga y limpieza automática. Es ideal para implementar búsquedas en tiempo real, filtros en tablas o listados, y cualquier situación donde se requiera una búsqueda eficiente y con buena experiencia de usuario.

> Versión actual: ${ne}

## Características
- Campo de búsqueda con icono de lupa integrado
- Botón de limpiar automático cuando hay texto
- Tiempo de debounce configurable para optimizar llamadas
- Soporte para estados de carga (skeleton y búsqueda en progreso)
- Integración completa con el sistema de diseño
- Optimización de rendimiento para búsquedas en tiempo real
- Hereda todas las propiedades del componente Input

### Instalación

\`\`\`bash
yarn add @flash-global66/g-search-input
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GSearchInput } from '@flash-global66/g-search-input'

# recomendado importar en los estilos globales
import '@flash-global66/g-search-input/styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias. Puede que funcione con otras versiones, pero no se garantiza.
${ae(P)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${T(P)}

# Dependencias externas
yarn add ${T(P,!0)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<template>
  <g-search-input 
    v-model="search"
    placeholder="Buscar..."
    @search="handleSearch"
    @clear="handleClear"
  />
</template>

<script setup>
import { ref } from 'vue';
import { GSearchInput } from '@flash-global66/g-search-input';

const search = ref('');

const handleSearch = (query) => {
  // Aquí puedes implementar tu lógica de búsqueda
  console.log('Buscando:', query);
};

const handleClear = () => {
  // Lógica para cuando se limpia el input
  console.log('Búsqueda borrada');
};
<\/script>
\`\`\`
`}}},argTypes:{modelValue:{control:"text",description:"Valor del input (v-model)",table:{type:{summary:"string"},category:"Propiedades principales"}},placeholder:{control:"text",description:"Texto placeholder del input",table:{type:{summary:"string"},category:"Contenido"}},label:{control:"text",description:"Etiqueta del input",table:{type:{summary:"string"},category:"Contenido"}},helpText:{control:"text",description:"Texto de ayuda",table:{type:{summary:"string"},category:"Contenido"}},messageError:{control:"text",description:"Mensaje de error a mostrar",table:{type:{summary:"string"},category:"Estado y apariencia"}},disabled:{control:"boolean",description:"Deshabilita el input",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Estado y apariencia"}},initialLoading:{control:"boolean",description:"Estado de carga inicial (skeleton)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Estado y apariencia"}},searchingLoading:{control:"boolean",description:"Estado de búsqueda en progreso",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Estado y apariencia"}},debounceTime:{control:"number",description:"Tiempo de espera para el debounce (ms)",table:{type:{summary:"number"},defaultValue:{summary:"300"},category:"Comportamiento"}},"onUpdate:modelValue":{description:"Se emite al actualizar el valor",table:{category:"Eventos",type:{summary:"(value: string) => void"}}},onSearch:{description:"Se emite al realizar una búsqueda (con debounce o al presionar Enter)",table:{category:"Eventos",type:{summary:"(query: string) => void"}}},onClear:{description:"Se emite al limpiar el input",table:{category:"Eventos",type:{summary:"() => void"}}}},args:{placeholder:"Buscar...",label:"",helpText:"",messageError:"",disabled:!1,initialLoading:!1,searchingLoading:!1,debounceTime:300}},q={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del componente SearchInput. Desde los controles puedes probar todas las propiedades disponibles."},source:{code:`
<g-search-input
  v-model="search"
  placeholder="Buscar..."
  @search="onSearch"
  @clear="onClear"
/>
`,language:"html"}}},render:o=>({components:{GSearchInput:v,GConfigProvider:y},setup(){const r=t("");return{args:o,search:r,onSearch:d("search"),onClear:d("clear")}},template:`
      <g-config-provider>
        <g-search-input
          v-model="search"
          v-bind="args"
          @search="onSearch"
          @clear="onClear"
        />
      </g-config-provider>
    `})},C={name:"Con etiqueta",parameters:{docs:{description:{story:"El componente puede incluir una etiqueta y texto de ayuda para mejorar la comprensión del usuario."},source:{code:`
<g-search-input
  v-model="search"
  label="Buscar"
  placeholder="Buscar"
  help-text="Escribe para buscar"
  @search="onSearch"
  @clear="onClear"
/>
`,language:"html"}}},render:o=>({components:{GSearchInput:v,GConfigProvider:y},setup(){return{search:t(""),onSearch:d("search"),onClear:d("clear")}},template:`
      <g-config-provider>
        <g-search-input
          v-model="search"
          label="Buscar"
          placeholder="Buscar"
          help-text="Escribe para buscar"
          @search="onSearch"
          @clear="onClear"
        />
      </g-config-provider>
    `})},I={name:"Estados",parameters:{docs:{description:{story:"El componente SearchInput tiene varios estados que representan diferentes situaciones de uso: normal, error, deshabilitado, carga de búsqueda y carga inicial."},source:{code:`
<!-- Estado normal -->
<g-search-input
  v-model="search"
  placeholder="Búsqueda normal"
  @search="onSearch"
  @clear="onClear"
/>

<!-- Estado de error -->
<g-search-input
  v-model="search"
  placeholder="Búsqueda con error"
  message-error="Ha ocurrido un error"
  @search="onSearch"
  @clear="onClear"
/>

<!-- Estado deshabilitado -->
<g-search-input
  v-model="search"
  placeholder="Búsqueda deshabilitada"
  disabled
  @search="onSearch"
  @clear="onClear"
/>

<!-- Estado de búsqueda en progreso -->
<g-search-input
  v-model="search"
  placeholder="Búsqueda en progreso"
  searching-loading
  @search="onSearch"
  @clear="onClear"
/>

<!-- Estado de carga inicial -->
<g-search-input
  placeholder="Carga inicial"
  initial-loading
/>
`,language:"html"}}},render:()=>({components:{GSearchInput:v,GConfigProvider:y},setup(){return{search:t(""),onSearch:d("search"),onClear:d("clear")}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div>
            <h3 class="text-base font-semibold mb-2">Estado normal</h3>
            <p class="text-sm text-gray-500 mb-2">Estado predeterminado del componente con funcionalidad completa.</p>
            <g-search-input
              v-model="search"
              placeholder="Búsqueda normal"
              @search="onSearch"
              @clear="onClear"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado de error</h3>
            <p class="text-sm text-gray-500 mb-2">Se muestra cuando hay un error en la búsqueda o validación.</p>
            <g-search-input
              v-model="search"
              placeholder="Búsqueda con error"
              message-error="Ha ocurrido un error"
              @search="onSearch"
              @clear="onClear"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado deshabilitado</h3>
            <p class="text-sm text-gray-500 mb-2">El componente no permite interacción cuando está deshabilitado.</p>
            <g-search-input
              v-model="search"
              placeholder="Búsqueda deshabilitada"
              disabled
              @search="onSearch"
              @clear="onClear"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado de búsqueda en progreso</h3>
            <p class="text-sm text-gray-500 mb-2">Muestra un indicador de carga durante la búsqueda.</p>
            <g-search-input
              v-model="search"
              placeholder="Búsqueda en progreso"
              searching-loading
              @search="onSearch"
              @clear="onClear"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado de carga inicial</h3>
            <p class="text-sm text-gray-500 mb-2">Muestra un skeleton cuando el componente está cargando datos iniciales.</p>
            <g-search-input
              placeholder="Carga inicial"
              initial-loading
            />
          </div>
        </div>
      </g-config-provider>
    `})},R={name:"Uso de debounce",parameters:{docs:{description:{story:"El componente SearchInput incluye funcionalidad de debounce para optimizar las búsquedas, evitando llamadas innecesarias mientras el usuario está escribiendo."},source:{code:`
<template>
  <g-search-input
    v-model="search"
    placeholder="Escribe para buscar..."
    :debounce-time="1000"
    @search="handleSearch"
  />
</template>

<script setup>
import { ref } from 'vue';
import { GSearchInput } from '@flash-global66/g-search-input';

const search = ref('');
const lastSearch = ref('');

const handleSearch = (query) => {
  lastSearch.value = query;
  // Aquí realizarías la llamada a tu API de búsqueda
};
<\/script>
`,language:"html"}}},render:()=>({components:{GSearchInput:v,GConfigProvider:y},setup(){const o=t(""),r=t(""),c=t(0);return{search:o,lastSearch:r,searchCount:c,handleSearch:s=>{r.value=s,c.value++,d("search")(s)}}},template:`
      <g-config-provider>
        <div class="space-y-6">
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Debounce en acción</h3>
            <p class="text-sm text-gray-600 mb-4">
              El debounce espera hasta que el usuario deje de escribir antes de emitir el evento de búsqueda.
              En este ejemplo, se configura un tiempo de espera de <strong>1000ms (1 segundo)</strong>.
            </p>
            
            <g-search-input
              v-model="search"
              placeholder="Escribe para buscar..."
              :debounce-time="1000"
              @search="handleSearch"
            />
            
            <div class="mt-4 p-3 bg-white rounded border text-sm">
              <div class="mb-2">
                <span class="font-medium">Valor actual:</span> 
                <span class="font-mono bg-gray-100 px-1 rounded">{{ search }}</span>
                <span class="text-gray-400 ml-2">(se actualiza en tiempo real)</span>
              </div>
              <div>
                <span class="font-medium">Última búsqueda:</span> 
                <span class="font-mono bg-gray-100 px-1 rounded">{{ lastSearch }}</span>
                <span class="text-gray-400 ml-2">(se actualiza después del debounce o al presionar Enter)</span>
              </div>
              <div class="mt-2 text-gray-500">
                Número de búsquedas realizadas: {{ searchCount }}
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">¿Cómo funciona el debounce?</h3>
            <ol class="list-decimal pl-5 space-y-2 text-sm">
              <li>Cuando escribes en el campo de búsqueda, el componente actualiza el v-model inmediatamente</li>
              <li>El componente espera el tiempo configurado (debounceTime) antes de emitir el evento <code>search</code></li>
              <li>Si sigues escribiendo dentro de ese tiempo, el temporizador se reinicia</li>
              <li>Solo cuando dejas de escribir por el tiempo configurado, o presionas Enter, se emite el evento</li>
              <li>Esto reduce significativamente el número de búsquedas y mejora el rendimiento</li>
            </ol>
          </div>
        </div>
      </g-config-provider>
    `})},B={name:"Integración con API",parameters:{docs:{description:{story:"Este ejemplo muestra cómo integrar el componente SearchInput con una API, manejando estados de carga, resultados y errores."},source:{code:`
<template>
  <g-search-input
    v-model="search"
    placeholder="Buscar nombres..."
    :searching-loading="isSearching"
    :message-error="errorMessage"
    :debounce-time="500"
    @search="searchInApi"
    @clear="handleClear"
  />
  
  <!-- Resultados -->
  <div v-if="isSearching">
    Buscando nombres...
  </div>
  
  <div v-else-if="hasError">
    Error: {{ errorMessage }}
  </div>
  
  <div v-else-if="searchResults.length === 0 && search">
    No se encontraron nombres que coincidan con "{{ search }}"
  </div>
  
  <div v-else-if="searchResults.length > 0">
    <div>Resultados ({{ searchResults.length }}):</div>
    <ul>
      <li v-for="result in searchResults" :key="result.id">
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { GSearchInput } from '@flash-global66/g-search-input';

const search = ref('');
const isSearching = ref(false);
const hasError = ref(false);
const searchResults = ref([]);
const errorMessage = ref('');

const searchInApi = async (query) => {
  isSearching.value = true;
  hasError.value = false;
  errorMessage.value = '';
  
  try {
    // Reemplazar con tu llamada a API real
    const response = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`);
    
    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }
    
    const data = await response.json();
    searchResults.value = data.results;
  } catch (error) {
    hasError.value = true;
    errorMessage.value = error.message;
  } finally {
    isSearching.value = false;
  }
};

const handleClear = () => {
  searchResults.value = [];
  hasError.value = false;
  errorMessage.value = '';
};
<\/script>
`,language:"html"}}},render:()=>({components:{GSearchInput:v,GConfigProvider:y},setup(){const o=t(""),r=t(!1),c=t(!1),e=t([]),s=t(""),m=[{id:1,name:"Juan Pérez"},{id:2,name:"María López"},{id:3,name:"Carlos González"},{id:4,name:"Ana Martínez"},{id:5,name:"Ricardo Ruben"},{id:6,name:"Lucía Rodríguez"},{id:7,name:"Alejandro Morales"},{id:8,name:"Valentina Torres"},{id:9,name:"Diego Hernández"},{id:10,name:"Sofía Ramírez"}];return{search:o,isSearching:r,hasError:c,searchResults:e,errorMessage:s,searchInApi:u=>{r.value=!0,c.value=!1,s.value="",e.value=[],setTimeout(()=>{try{if(Math.random()<.2&&u.length>0)throw new Error("Error de conexión al servidor");u?e.value=m.filter(i=>i.name.toLowerCase().includes(u.toLowerCase())):e.value=[],d("API search success")(e.value)}catch(i){c.value=!0,s.value=i.message,d("API search error")(i.message)}finally{r.value=!1}},1e3)},handleClear:()=>{e.value=[],c.value=!1,s.value="",d("clear")()}}},template:`
      <g-config-provider>
        <div class="space-y-6">
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Simulación de búsqueda en API</h3>
            <p class="text-sm text-gray-600 mb-4">
              Este ejemplo simula una integración completa con una API de búsqueda de nombres.
              <br>
              El tiempo de respuesta es de aproximadamente 1 segundo y hay un 20% de probabilidad de error.
            </p>
            
            <g-search-input
              v-model="search"
              placeholder="Buscar nombres..."
              :searching-loading="isSearching"
              :message-error="errorMessage"
              :debounce-time="500"
              @search="searchInApi"
              @clear="handleClear"
            />
            
            <div class="mt-4 p-3 bg-white rounded border">
              <div v-if="isSearching" class="text-sm text-gray-500">
                Buscando nombres...
              </div>
              
              <div v-else-if="hasError" class="text-sm text-red-500">
                Error: {{ errorMessage }}
              </div>
              
              <div v-else-if="searchResults.length === 0 && search" class="text-sm text-gray-500">
                No se encontraron nombres que coincidan con "{{ search }}"
              </div>
              
              <div v-else-if="searchResults.length > 0" class="text-sm">
                <div class="font-medium mb-2">Resultados ({{ searchResults.length }}):</div>
                <ul class="list-disc pl-5 space-y-1">
                  <li v-for="result in searchResults" :key="result.id">
                    {{ result.name }}
                  </li>
                </ul>
              </div>
              
              <div v-else class="text-sm text-gray-500">
                Escribe para buscar nombres
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `})};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico del componente SearchInput. Desde los controles puedes probar todas las propiedades disponibles.'
      },
      source: {
        code: \`
<g-search-input
  v-model="search"
  placeholder="Buscar..."
  @search="onSearch"
  @clear="onClear"
/>
\`,
        language: 'html'
      }
    }
  },
  render: args => ({
    components: {
      GSearchInput,
      GConfigProvider
    },
    setup() {
      const search = ref('');
      return {
        args,
        search,
        onSearch: action('search'),
        onClear: action('clear')
      };
    },
    template: \`
      <g-config-provider>
        <g-search-input
          v-model="search"
          v-bind="args"
          @search="onSearch"
          @clear="onClear"
        />
      </g-config-provider>
    \`
  })
}`,...q.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Con etiqueta',
  parameters: {
    docs: {
      description: {
        story: 'El componente puede incluir una etiqueta y texto de ayuda para mejorar la comprensión del usuario.'
      },
      source: {
        code: \`
<g-search-input
  v-model="search"
  label="Buscar"
  placeholder="Buscar"
  help-text="Escribe para buscar"
  @search="onSearch"
  @clear="onClear"
/>
\`,
        language: "html"
      }
    }
  },
  render: args => ({
    components: {
      GSearchInput,
      GConfigProvider
    },
    setup() {
      const search = ref('');
      return {
        search,
        onSearch: action('search'),
        onClear: action('clear')
      };
    },
    template: \`
      <g-config-provider>
        <g-search-input
          v-model="search"
          label="Buscar"
          placeholder="Buscar"
          help-text="Escribe para buscar"
          @search="onSearch"
          @clear="onClear"
        />
      </g-config-provider>
    \`
  })
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Estados',
  parameters: {
    docs: {
      description: {
        story: 'El componente SearchInput tiene varios estados que representan diferentes situaciones de uso: normal, error, deshabilitado, carga de búsqueda y carga inicial.'
      },
      source: {
        code: \`
<!-- Estado normal -->
<g-search-input
  v-model="search"
  placeholder="Búsqueda normal"
  @search="onSearch"
  @clear="onClear"
/>

<!-- Estado de error -->
<g-search-input
  v-model="search"
  placeholder="Búsqueda con error"
  message-error="Ha ocurrido un error"
  @search="onSearch"
  @clear="onClear"
/>

<!-- Estado deshabilitado -->
<g-search-input
  v-model="search"
  placeholder="Búsqueda deshabilitada"
  disabled
  @search="onSearch"
  @clear="onClear"
/>

<!-- Estado de búsqueda en progreso -->
<g-search-input
  v-model="search"
  placeholder="Búsqueda en progreso"
  searching-loading
  @search="onSearch"
  @clear="onClear"
/>

<!-- Estado de carga inicial -->
<g-search-input
  placeholder="Carga inicial"
  initial-loading
/>
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GSearchInput,
      GConfigProvider
    },
    setup() {
      const search = ref('');
      return {
        search,
        onSearch: action('search'),
        onClear: action('clear')
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div>
            <h3 class="text-base font-semibold mb-2">Estado normal</h3>
            <p class="text-sm text-gray-500 mb-2">Estado predeterminado del componente con funcionalidad completa.</p>
            <g-search-input
              v-model="search"
              placeholder="Búsqueda normal"
              @search="onSearch"
              @clear="onClear"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado de error</h3>
            <p class="text-sm text-gray-500 mb-2">Se muestra cuando hay un error en la búsqueda o validación.</p>
            <g-search-input
              v-model="search"
              placeholder="Búsqueda con error"
              message-error="Ha ocurrido un error"
              @search="onSearch"
              @clear="onClear"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado deshabilitado</h3>
            <p class="text-sm text-gray-500 mb-2">El componente no permite interacción cuando está deshabilitado.</p>
            <g-search-input
              v-model="search"
              placeholder="Búsqueda deshabilitada"
              disabled
              @search="onSearch"
              @clear="onClear"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado de búsqueda en progreso</h3>
            <p class="text-sm text-gray-500 mb-2">Muestra un indicador de carga durante la búsqueda.</p>
            <g-search-input
              v-model="search"
              placeholder="Búsqueda en progreso"
              searching-loading
              @search="onSearch"
              @clear="onClear"
            />
          </div>
          
          <div>
            <h3 class="text-base font-semibold mb-2">Estado de carga inicial</h3>
            <p class="text-sm text-gray-500 mb-2">Muestra un skeleton cuando el componente está cargando datos iniciales.</p>
            <g-search-input
              placeholder="Carga inicial"
              initial-loading
            />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Uso de debounce',
  parameters: {
    docs: {
      description: {
        story: 'El componente SearchInput incluye funcionalidad de debounce para optimizar las búsquedas, evitando llamadas innecesarias mientras el usuario está escribiendo.'
      },
      source: {
        code: \`
<template>
  <g-search-input
    v-model="search"
    placeholder="Escribe para buscar..."
    :debounce-time="1000"
    @search="handleSearch"
  />
</template>

<script setup>
import { ref } from 'vue';
import { GSearchInput } from '@flash-global66/g-search-input';

const search = ref('');
const lastSearch = ref('');

const handleSearch = (query) => {
  lastSearch.value = query;
  // Aquí realizarías la llamada a tu API de búsqueda
};
<\/script>
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GSearchInput,
      GConfigProvider
    },
    setup() {
      const search = ref('');
      const lastSearch = ref('');
      const searchCount = ref(0);
      const handleSearch = (query: string) => {
        lastSearch.value = query;
        searchCount.value++;
        action('search')(query);
      };
      return {
        search,
        lastSearch,
        searchCount,
        handleSearch
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-6">
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Debounce en acción</h3>
            <p class="text-sm text-gray-600 mb-4">
              El debounce espera hasta que el usuario deje de escribir antes de emitir el evento de búsqueda.
              En este ejemplo, se configura un tiempo de espera de <strong>1000ms (1 segundo)</strong>.
            </p>
            
            <g-search-input
              v-model="search"
              placeholder="Escribe para buscar..."
              :debounce-time="1000"
              @search="handleSearch"
            />
            
            <div class="mt-4 p-3 bg-white rounded border text-sm">
              <div class="mb-2">
                <span class="font-medium">Valor actual:</span> 
                <span class="font-mono bg-gray-100 px-1 rounded">{{ search }}</span>
                <span class="text-gray-400 ml-2">(se actualiza en tiempo real)</span>
              </div>
              <div>
                <span class="font-medium">Última búsqueda:</span> 
                <span class="font-mono bg-gray-100 px-1 rounded">{{ lastSearch }}</span>
                <span class="text-gray-400 ml-2">(se actualiza después del debounce o al presionar Enter)</span>
              </div>
              <div class="mt-2 text-gray-500">
                Número de búsquedas realizadas: {{ searchCount }}
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">¿Cómo funciona el debounce?</h3>
            <ol class="list-decimal pl-5 space-y-2 text-sm">
              <li>Cuando escribes en el campo de búsqueda, el componente actualiza el v-model inmediatamente</li>
              <li>El componente espera el tiempo configurado (debounceTime) antes de emitir el evento <code>search</code></li>
              <li>Si sigues escribiendo dentro de ese tiempo, el temporizador se reinicia</li>
              <li>Solo cuando dejas de escribir por el tiempo configurado, o presionas Enter, se emite el evento</li>
              <li>Esto reduce significativamente el número de búsquedas y mejora el rendimiento</li>
            </ol>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...R.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Integración con API',
  parameters: {
    docs: {
      description: {
        story: 'Este ejemplo muestra cómo integrar el componente SearchInput con una API, manejando estados de carga, resultados y errores.'
      },
      source: {
        code: \`
<template>
  <g-search-input
    v-model="search"
    placeholder="Buscar nombres..."
    :searching-loading="isSearching"
    :message-error="errorMessage"
    :debounce-time="500"
    @search="searchInApi"
    @clear="handleClear"
  />
  
  <!-- Resultados -->
  <div v-if="isSearching">
    Buscando nombres...
  </div>
  
  <div v-else-if="hasError">
    Error: {{ errorMessage }}
  </div>
  
  <div v-else-if="searchResults.length === 0 && search">
    No se encontraron nombres que coincidan con "{{ search }}"
  </div>
  
  <div v-else-if="searchResults.length > 0">
    <div>Resultados ({{ searchResults.length }}):</div>
    <ul>
      <li v-for="result in searchResults" :key="result.id">
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { GSearchInput } from '@flash-global66/g-search-input';

const search = ref('');
const isSearching = ref(false);
const hasError = ref(false);
const searchResults = ref([]);
const errorMessage = ref('');

const searchInApi = async (query) => {
  isSearching.value = true;
  hasError.value = false;
  errorMessage.value = '';
  
  try {
    // Reemplazar con tu llamada a API real
    const response = await fetch(\\\`/api/search?q=\\\${encodeURIComponent(query)}\\\`);
    
    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }
    
    const data = await response.json();
    searchResults.value = data.results;
  } catch (error) {
    hasError.value = true;
    errorMessage.value = error.message;
  } finally {
    isSearching.value = false;
  }
};

const handleClear = () => {
  searchResults.value = [];
  hasError.value = false;
  errorMessage.value = '';
};
<\/script>
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GSearchInput,
      GConfigProvider
    },
    setup() {
      const search = ref('');
      const isSearching = ref(false);
      const hasError = ref(false);
      const searchResults = ref<{
        id: number;
        name: string;
      }[]>([]);
      const errorMessage = ref('');
      const mockData = [{
        id: 1,
        name: 'Juan Pérez'
      }, {
        id: 2,
        name: 'María López'
      }, {
        id: 3,
        name: 'Carlos González'
      }, {
        id: 4,
        name: 'Ana Martínez'
      }, {
        id: 5,
        name: 'Ricardo Ruben'
      }, {
        id: 6,
        name: 'Lucía Rodríguez'
      }, {
        id: 7,
        name: 'Alejandro Morales'
      }, {
        id: 8,
        name: 'Valentina Torres'
      }, {
        id: 9,
        name: 'Diego Hernández'
      }, {
        id: 10,
        name: 'Sofía Ramírez'
      }];
      const searchInApi = query => {
        isSearching.value = true;
        hasError.value = false;
        errorMessage.value = '';
        searchResults.value = [];
        setTimeout(() => {
          try {
            if (Math.random() < 0.2 && query.length > 0) {
              throw new Error('Error de conexión al servidor');
            }
            if (query) {
              searchResults.value = mockData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
            } else {
              searchResults.value = [];
            }
            action('API search success')(searchResults.value);
          } catch (error) {
            hasError.value = true;
            errorMessage.value = error.message;
            action('API search error')(error.message);
          } finally {
            isSearching.value = false;
          }
        }, 1000);
      };
      const handleClear = () => {
        searchResults.value = [];
        hasError.value = false;
        errorMessage.value = '';
        action('clear')();
      };
      return {
        search,
        isSearching,
        hasError,
        searchResults,
        errorMessage,
        searchInApi,
        handleClear
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-6">
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-base font-semibold mb-2">Simulación de búsqueda en API</h3>
            <p class="text-sm text-gray-600 mb-4">
              Este ejemplo simula una integración completa con una API de búsqueda de nombres.
              <br>
              El tiempo de respuesta es de aproximadamente 1 segundo y hay un 20% de probabilidad de error.
            </p>
            
            <g-search-input
              v-model="search"
              placeholder="Buscar nombres..."
              :searching-loading="isSearching"
              :message-error="errorMessage"
              :debounce-time="500"
              @search="searchInApi"
              @clear="handleClear"
            />
            
            <div class="mt-4 p-3 bg-white rounded border">
              <div v-if="isSearching" class="text-sm text-gray-500">
                Buscando nombres...
              </div>
              
              <div v-else-if="hasError" class="text-sm text-red-500">
                Error: {{ errorMessage }}
              </div>
              
              <div v-else-if="searchResults.length === 0 && search" class="text-sm text-gray-500">
                No se encontraron nombres que coincidan con "{{ search }}"
              </div>
              
              <div v-else-if="searchResults.length > 0" class="text-sm">
                <div class="font-medium mb-2">Resultados ({{ searchResults.length }}):</div>
                <ul class="list-disc pl-5 space-y-1">
                  <li v-for="result in searchResults" :key="result.id">
                    {{ result.name }}
                  </li>
                </ul>
              </div>
              
              <div v-else class="text-sm text-gray-500">
                Escribe para buscar nombres
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...B.parameters?.docs?.source}}};const Ne=["Primary","WithLabel","States","WithDebounce","ApiIntegration"];export{B as ApiIntegration,q as Primary,I as States,R as WithDebounce,C as WithLabel,Ne as __namedExportsOrder,De as default};
