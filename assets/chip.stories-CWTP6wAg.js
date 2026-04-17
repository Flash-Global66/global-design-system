import{d as W,r as V,c as T,b as K,f as $,p as Y,u as r,e as g,k as O,s as x,m as h,x as y,h as b,l as u,y as Z,S as J,a6 as B,H as I}from"./vue.esm-bundler-BiLMJBXK.js";import{S as C}from"./index-jZ5CM1us.js";import{M as Q,A as X,V as _}from"./index-n7oMM4mg.js";import{b as ee,d as c,w as ie}from"./install-BOOPtfBD.js";import{u as te}from"./index-BzJBbEF1.js";import{G as d}from"./ConfigProvider-qZNzJU0u.js";import{g as N,a as oe,b as U}from"./documentation-stories-CAEV4JNo.js";import"./index-DC_o2tv7.js";import"./index-mx_pK5Ly.js";import"./index-BBJ4PQcT.js";import"./index-QfInVgAc.js";import"./index-4o8CGBx3.js";import"./index-Bc6e4lZJ.js";import"./_arrayPush-DTRztRsG.js";import"./index-D4Nj_xQj.js";import"./index-BnpPYVuG.js";import"./aria-BUADUvnR.js";import"./index-zW_pOwy1.js";import"./index-CK28B4dM.js";import"./use-form-item-C4WJLOCD.js";import"./constants-Dnj8X3EN.js";import"./index-BEnhWylp.js";import"./index-D0Pmq04_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CvPWi8JN.js";import"./index-CX_Dg7_S.js";import"./index-CYijZHa6.js";import"./error-Cq9Fpw4b.js";const ae="close",ne="click",re="command",le="visible-change",se=["primary","secondary"],ce=["solid","outline"],pe=["sm","md"],de=ee({type:{type:c(String),values:se,default:"primary"},variant:{type:c(String),values:ce,default:"solid"},size:{type:c(String),values:pe,default:"md"},iconLeft:{type:c(String),default:void 0},iconRight:{type:c(String),default:void 0},closable:Boolean,text:{type:String,default:void 0},selected:Boolean,disabled:Boolean,dropdownEnabled:Boolean,actions:{type:c(Array),default:void 0},trigger:{type:c(String),default:"click"},placement:{type:c(String),default:"bottom-start"}}),me={[ae]:i=>i instanceof MouseEvent,[ne]:i=>i instanceof Event,[re]:i=>typeof i=="string"||typeof i=="number"||typeof i=="object"&&i!==null,[le]:i=>typeof i=="boolean"},fe=["tabindex","aria-pressed","aria-disabled","title"],ge={key:0},ue=["aria-label"],R=W({name:"GChip",__name:"chip",props:de,emits:me,setup(i,{emit:t}){const m=i,l=t,o=te("chip"),P=V(!1),n=T(()=>{const{type:e,variant:D,size:M,iconLeft:j,iconRight:L,closable:ve,text:xe,selected:he,disabled:be,dropdownEnabled:Ce,...H}=m;return H}),a=T(()=>{const{variant:e,size:D,selected:M,disabled:j,type:L}=m;return[o.b(),o.m(L),o.m(e),o.e(D),o.is("selected",M),o.is("disabled",j)]}),s=e=>{l("close",e)},f=e=>{m.disabled||l("click",e)},v=e=>{l("command",e)},q=e=>{P.value=e,l("visible-change",e)};return(e,D)=>(g(),K(r(Q),Y(n.value,{disabled:e.disabled||!e.dropdownEnabled,onCommand:v,onVisibleChange:q}),{dropdown:$(()=>[x(e.$slots,"dropdown")]),default:$(()=>[O("span",{class:u(a.value),tabindex:e.disabled?-1:0,onClick:f,onKeydown:[B(f,["enter"]),B(f,["space"])],role:"button","aria-pressed":e.selected?"true":"false","aria-disabled":e.disabled?"true":"false",title:e.text},[e.$slots.prefix||e.iconLeft?x(e.$slots,"prefix",{key:0},()=>[e.iconLeft?(g(),y("span",{key:0,class:u(r(o).em(e.size,"prefix-icon"))},[b(r(C),{name:e.iconLeft},null,8,["name"])],2)):h("",!0)]):h("",!0),O("span",{class:u(r(o).e("content"))},[e.text?(g(),y("span",ge,Z(e.text),1)):x(e.$slots,"default",{key:1})],2),e.$slots.suffix||e.iconRight||e.closable||e.dropdownEnabled?x(e.$slots,"suffix",{key:1},()=>[e.iconRight&&!e.closable&&!e.dropdownEnabled?(g(),y("span",{key:0,class:u(r(o).em(e.size,"suffix-icon"))},[b(r(C),{name:e.iconRight},null,8,["name"])],2)):e.dropdownEnabled&&!e.closable?(g(),y("span",{key:1,class:u([r(o).em(e.size,"suffix-icon"),r(o).e("dropdown-icon")])},[b(r(C),{name:P.value?"regular chevron-up":"regular chevron-down"},null,8,["name"])],2)):e.closable?(g(),y("span",{key:2,onClick:J(s,["stop"]),class:u([r(o).em(e.size,"suffix-icon"),r(o).e("close")]),"aria-label":`Remove ${e.text}`},[b(r(C),{name:"regular times"})],10,ue)):h("",!0)]):h("",!0)],42,fe)]),_:3},16,["disabled"]))}});R.__docgenInfo={name:"GChip",exportName:"default",displayName:"chip",description:"",tags:{},slots:[{name:"prefix"},{name:"default"},{name:"suffix"},{name:"dropdown"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/chip/src/chip.vue"]};const p=ie(R,{Chip:R}),ye="1.1.0",G={"@flash-global66/g-dropdown":"^0.1.0","@flash-global66/g-icon-font":"^0.11.0","@flash-global66/g-popover":"^0.0.7","element-plus":"^2.9.0",vue:"^3.2.0"},Je={title:"Data/Chip",component:p,parameters:{docs:{description:{component:`
El componente Chip es un elemento interactivo compacto que representa una entrada, atributo o acción. Es ideal para filtros, tags, categorías, estados y selección múltiple.

> Versión actual: ${ye}

## Características
- **Interactividad completa**: Soporte para selección, estados y cierre
- **Dos variantes visuales**: \`solid\` (fondo gris) y \`outline\` (borde únicamente)
- **Control de radio**: \`primary\` (redondeado completo) y \`secondary\` (esquinas suaves)
- **Múltiples tamaños**: \`sm\` y \`md\` con iconos adaptados
- **Estados visuales**: enabled, hover, disabled, selected
- **Iconos flexibles**: Prefijo y sufijo con IconFont integrado
- **Popover integrado**: Información contextual sin componentes adicionales
- **Accesibilidad**: Soporte completo para ARIA, navegación por teclado y manejo de foco visible.

### Instalación

\`\`\`bash
yarn add @flash-global66/g-chip
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GChip } from '@flash-global66/g-chip'

# recomendado importar en los estilos globales
import '@flash-global66/g-chip/styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${oe(G)}

> Revisar la documentación de cada dependencia para mas información.

\`\`\`bash
# Dependencias global66
yarn add ${U(G)}

# Dependencias externas
yarn add ${U(G,!0)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<script setup lang="ts">
import { GChip } from '@flash-global66/g-chip'
<\/script>

<template>
    <g-chip
      type="primary"
      variant="solid"
      size="md"
      text="Chip"
      icon-left="solid check"
      icon-right="solid check"
      closable
    />
</template>
\`\`\`

`}}},argTypes:{size:{description:"Tamaño del chip: md (30px) incluye más padding, sm (26px) es más compacto",control:"select",options:["sm","md"],table:{category:"Apariencia",type:{summary:"string"},defaultValue:{summary:"md"}}},type:{description:"Tipo que controla el border radius: primary (redondeado completo), secondary (esquinas suaves)",control:"select",options:["primary","secondary"],table:{category:"Apariencia",type:{summary:"string"},defaultValue:{summary:"primary"}}},variant:{description:"Variante visual: solid (fondo gris para tags), outline (solo borde para filtros)",control:"select",options:["solid","outline"],table:{category:"Apariencia",type:{summary:"string"},defaultValue:{summary:"solid"}}},iconLeft:{name:"icon-left",description:"Ícono a la izquierda",control:"select",options:["",...N()],table:{category:"Iconos",type:{summary:"string"},defaultValue:{summary:"undefined"}}},iconRight:{name:"icon-right",description:"Ícono a la derecha",control:"select",options:["",...N()],table:{category:"Iconos",type:{summary:"string"},defaultValue:{summary:"undefined"}}},text:{description:"Texto a mostrar en el chip",control:"text",table:{category:"Contenido",type:{summary:"string"},defaultValue:{summary:"undefined"}}},closable:{description:"Habilita el botón de cerrar",control:"boolean",table:{category:"Comportamiento",type:{summary:"boolean"},defaultValue:{summary:"false"}}},selected:{description:"Estado seleccionado: para outline cambia a fondo azul, para solid mantiene apariencia",control:"boolean",table:{category:"Estado",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Estado deshabilitado: evita interacciones y aplica estilos visuales de disabled",control:"boolean",table:{category:"Estado",type:{summary:"boolean"},defaultValue:{summary:"false"}}},dropdownEnabled:{description:"Habilita el dropdown integrado. Automáticamente muestra un icono chevron-down en el sufijo cuando está habilitado. Para configurar el dropdown, usa las props estándar de GDropdown.",control:"boolean",table:{category:"Dropdown",type:{summary:"boolean"},defaultValue:{summary:"false"}}},actions:{description:"Acciones del dropdown (array de objetos { title: string, command: any }). Para más opciones de configuración, consulta la documentación de GDropdown.",control:"object",table:{category:"Dropdown",type:{summary:"Array<object>"}}},trigger:{description:"Cómo se activa el dropdown: 'hover', 'click', 'contextmenu'. Para más opciones, consulta la documentación de GDropdown.",control:"select",options:["hover","click","contextmenu"],table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"hover"}}},placement:{description:"Posición del dropdown. Para todas las opciones de posicionamiento disponibles, consulta la documentación de GDropdown.",control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"bottom"},description:"**Nota:** Todas las demás props de GDropdown se pasan directamente al componente. Para configuración avanzada (triggerKeys, popperOptions, hideOnClick, timeouts, etc.), consulta la documentación de GDropdown."}},close:{description:"Evento emitido al cerrar",action:"close",table:{category:"Eventos",type:{summary:"Event",detail:"() => void"},defaultValue:{summary:"() => void"}},control:!1},click:{description:"Evento emitido al hacer clic",action:"click",table:{category:"Eventos",type:{summary:"Event",detail:"() => void"},defaultValue:{summary:"() => void"}},control:!1},command:{description:"Evento emitido al seleccionar un elemento del dropdown",action:"command",table:{category:"Eventos",type:{summary:"any",detail:"(command: any) => void"},defaultValue:{summary:"() => void"}},control:!1},prefix:{description:"slot para el inicio del chip",table:{category:"Slots",type:{summary:"slot"}},control:!1},default:{description:"slot para el contenido del chip",table:{category:"Slots",type:{summary:"slot"}},control:!1},suffix:{description:"slot para el final del chip",table:{category:"Slots",type:{summary:"slot"}},control:!1},dropdown:{description:"slot para el contenido personalizado del dropdown",table:{category:"Slots",type:{summary:"slot"}},control:!1}},args:{text:"Chip",size:"md",type:"primary",variant:"solid",iconLeft:"",iconRight:"",closable:!1,selected:!1,disabled:!1,dropdownEnabled:!1,actions:[],trigger:"hover",placement:"bottom"}},w={name:"Básico",render:i=>({components:{GChip:p,GConfigProvider:d},setup(){return{args:i}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-chip v-bind="args" />
        </div>
      </g-config-provider>
    `})},F={name:"Combinaciones de variantes y tamaños",render:()=>({components:{GChip:p,GConfigProvider:d},setup(){return{state:I({types:["primary","secondary"],sizes:["sm","md"],variants:["solid","outline"]})}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div v-for="type in state.types" :key="type" class="flex flex-row gap-6 items-center justify-center">
            <div v-for="size in state.sizes" :key="size" class="flex flex-col gap-4">
              <div v-for="variant in state.variants" :key="variant">
                <g-chip
                  :type="type"
                  :size="size"
                  :variant="variant"
                  text="Chip"
                />
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},z={name:"Chips con iconos",render:()=>({components:{GChip:p,GConfigProvider:d},setup(){return{iconExamples:[{iconLeft:"solid check",text:"Verificado"},{iconRight:"regular chevron-down",text:"Dropdown"},{iconLeft:"solid user",iconRight:"solid check",text:"Usuario activo"},{iconLeft:"regular heart",text:"Favorito",variant:"outline"},{iconLeft:"regular bell",text:"Notificación",type:"secondary"},{iconRight:"solid arrow-right",text:"Siguiente",variant:"outline",type:"secondary"}]}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <div>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Ejemplos con iconos</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
              Diferentes combinaciones de iconos prefijo y sufijo
            </p>
            <div class="flex flex-wrap gap-3">
              <g-chip
                v-for="(example, index) in iconExamples"
                :key="index"
                :text="example.text"
                :icon-left="example.iconLeft"
                :icon-right="example.iconRight"
                :variant="example.variant || 'solid'"
                :type="example.type || 'primary'"
                size="md"
              />
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Solo iconos prefijo</h4>
            <div class="flex flex-wrap gap-2">
              <g-chip text="Check" icon-left="solid check" size="sm" />
              <g-chip text="Usuario" icon-left="solid user" size="sm" />
              <g-chip text="Home" icon-left="solid home" size="sm" />
              <g-chip text="Search" icon-left="solid search" size="sm" />
              <g-chip text="Filter" icon-left="solid filter" size="sm" />
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Solo iconos sufijo</h4>
            <div class="flex flex-wrap gap-2">
              <g-chip text="Dropdown" icon-right="regular chevron-down" size="sm" variant="outline" />
              <g-chip text="Arrow" icon-right="solid arrow-right" size="sm" variant="outline" />
              <g-chip text="Times" icon-right="solid times" size="sm" variant="outline" />
              <g-chip text="Info" icon-right="solid info-circle" size="sm" variant="outline" />
              <g-chip text="Edit" icon-right="solid edit" size="sm" variant="outline" />
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Ambos iconos</h4>
            <div class="flex flex-wrap gap-2">
              <g-chip 
                text="Usuario activo" 
                icon-left="solid user" 
                icon-right="solid check" 
                variant="solid" 
                type="primary" 
              />
              <g-chip 
                text="Filtro aplicado" 
                icon-left="solid filter" 
                icon-right="solid times" 
                variant="outline" 
                type="secondary" 
              />
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},k={name:"Chips eliminables",render:()=>({components:{GChip:p,GConfigProvider:d},setup(){const i=[{text:"Chip 1",type:"primary",variant:"solid"},{text:"Chip 2",type:"secondary",variant:"solid"},{text:"Chip 3",type:"primary",variant:"outline"},{text:"Chip 4",type:"secondary",variant:"outline"}],t=I([...i]);return{dynamicChips:t,handleClose:l=>{if(t.length===1){t.splice(-1,1,...i);return}t.splice(t.findIndex(o=>o.text===l),1)}}},template:`
      <g-config-provider>
        <div class="flex flex-row gap-4">
          <g-chip
            v-for="(chip, index) in dynamicChips"
            :key="chip.text"
            :type="chip.type"
            :variant="chip.variant"
            :text="chip.text"
            closable
            @close="() => handleClose(chip.text)"
          />
        </div>
      </g-config-provider>
    `})},E={name:"Tipos y variantes (separados)",render:()=>({components:{GChip:p,GConfigProvider:d},setup(){return{}},template:`
      <g-config-provider>
        <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <span style="font-weight: 600; margin-bottom: 8px;">Tipos (radio)</span>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Primary (xl radius)</span>
              <g-chip type="primary" variant="solid" text="Primary" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Secondary (sm radius)</span>
              <g-chip type="secondary" variant="solid" text="Secondary" />
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <span style="font-weight: 600; margin-bottom: 8px;">Variantes (color)</span>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Solid (grey-100)</span>
              <g-chip type="primary" variant="solid" text="Solid" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Outline (everBlue-100 border)</span>
              <g-chip type="primary" variant="outline" text="Outline" />
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <span style="font-weight: 600; margin-bottom: 8px;">Combinaciones</span>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <g-chip type="primary" variant="solid" text="Primary + Solid" />
              <g-chip type="primary" variant="outline" text="Primary + Outline" />
              <g-chip type="secondary" variant="solid" text="Secondary + Solid" />
              <g-chip type="secondary" variant="outline" text="Secondary + Outline" />
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},S={name:"Sistema de filtros en cascada",parameters:{docs:{source:{code:`<script setup lang="ts">
import { reactive, ref } from 'vue'
import { GChip } from '@flash-global66/g-chip'

interface MainFilter {
  id: string
  text: string
  selected: boolean
  options: string[]
}

interface AppliedFilter {
  id: string
  category: string
  value: string
  text: string
}

const mainFilters = reactive<MainFilter[]>([
  { id: 'year', text: 'Año', selected: false, options: ['2015', '2016', '2017', '2018', '2019', '2020'] },
  { id: 'category', text: 'Categoría', selected: false, options: ['Importaciones', 'Exportaciones'] },
  { id: 'country', text: 'País', selected: false, options: ['Chile', 'Argentina', 'Brasil'] }
])

const appliedFilters = ref<AppliedFilter[]>([])

const toggleMainFilter = (filterId: string) => {
  const filter = mainFilters.find(f => f.id === filterId)
  if (filter) {
    filter.selected = !filter.selected
    if (!filter.selected) {
      const filteredItems = appliedFilters.value.filter(af => af.category !== filterId)
      appliedFilters.value.splice(0, appliedFilters.value.length)
      appliedFilters.value.push(...filteredItems)
    }
  }
}

const addAppliedFilter = (category: string, value: string, categoryText: string) => {
  const exists = appliedFilters.value.find(af => af.category === category && af.value === value)
  if (!exists) {
    appliedFilters.value.push({
      id: \`\${category}-\${value}\`,
      category,
      value,
      text: \`\${categoryText}: \${value}\`
    })
  }
}

const removeAppliedFilter = (filterId: string) => {
  const index = appliedFilters.value.findIndex(af => af.id === filterId)
  if (index > -1) {
    appliedFilters.value.splice(index, 1)
  }
}

const clearAllFilters = () => {
  appliedFilters.value.splice(0)
  mainFilters.forEach(filter => filter.selected = false)
}
<\/script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h4>Categorías disponibles</h4>
      <div class="flex flex-wrap gap-3">
        <g-chip
          v-for="filter in mainFilters"
          :key="filter.id"
          variant="outline"
          type="primary"
          :text="filter.text"
          :selected="filter.selected"
          @click="toggleMainFilter(filter.id)"
        />
      </div>
    </div>
    
    <div v-for="filter in mainFilters.filter(f => f.selected)" :key="'options-' + filter.id">
      <h4>Opciones de {{ filter.text }}:</h4>
      <div class="flex flex-wrap gap-2">
        <g-chip
          v-for="option in filter.options"
          :key="filter.id + '-' + option"
          variant="outline"
          type="secondary"
          :text="option"
          :selected="appliedFilters.some(af => af.category === filter.id && af.value === option)"
          @click="addAppliedFilter(filter.id, option, filter.text)"
          size="sm"
        />
      </div>
    </div>
    
    <!-- Filtros aplicados -->
    <div v-if="appliedFilters.length > 0">
      <div style="display: flex; align-items: center; gap: 12px;">
        <h4>Filtros aplicados</h4>
        <g-chip
          variant="outline"
          type="secondary"
          text="Limpiar todo"
          size="sm"
          @click="clearAllFilters"
        />
      </div>
      <div class="flex flex-wrap gap-2">
        <g-chip
          v-for="applied in appliedFilters"
          :key="applied.id"
          variant="solid"
          type="primary"
          :text="applied.text"
          closable
          @close="removeAppliedFilter(applied.id)"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>`}}},render:()=>({components:{GChip:p,GConfigProvider:d},setup(){const i=I([{id:"year",text:"Año",selected:!1,options:["2015","2016","2017","2018","2019","2020"]},{id:"category",text:"Categoría",selected:!1,options:["Importaciones","Exportaciones","Balanza comercial"]},{id:"country",text:"País",selected:!1,options:["Chile","Argentina","Brasil","Colombia","Perú"]},{id:"currency",text:"Moneda",selected:!1,options:["USD","EUR","CLP","ARS"]}]),t=V([]);return{mainFilters:i,appliedFilters:t,toggleMainFilter:n=>{const a=i.find(s=>s.id===n);if(a&&(a.selected=!a.selected,!a.selected)){const s=t.value.filter(f=>f.category!==n);t.value.splice(0,t.value.length),t.value.push(...s)}},addAppliedFilter:(n,a,s)=>{t.value.find(v=>v.category===n&&v.value===a)||t.value.push({id:`${n}-${a}`,category:n,value:a,text:`${s}: ${a}`})},removeAppliedFilter:n=>{const a=t.value.findIndex(s=>s.id===n);a>-1&&t.value.splice(a,1)},clearAllFilters:()=>{t.value.splice(0),i.forEach(n=>n.selected=!1)}}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-6" style="max-width: 800px;">
          
          <!-- Título -->
          <div>
            <h3 style="margin: 0 0 8px 0; font-size: 16px;">Sistema de filtros - Ejemplo financiero</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">
              Selecciona categorías de filtro, luego elige valores específicos que aparecerán como chips eliminables.
            </p>
          </div>
          
          <!-- Filtros principales (categorías) -->
          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600;">Categorías disponibles</h4>
            <div class="flex flex-wrap gap-3">
              <g-chip
                v-for="filter in mainFilters"
                :key="filter.id"
                variant="outline"
                type="primary"
                :text="filter.text"
                :selected="filter.selected"
                @click="toggleMainFilter(filter.id)"
              />
            </div>
          </div>
          
          <!-- Opciones para categorías seleccionadas -->
          <div v-for="filter in mainFilters.filter(f => f.selected)" :key="'options-' + filter.id">
            <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 500;">
              Opciones de {{ filter.text }}:
            </h4>
            <div class="flex flex-wrap gap-2" style="margin-bottom: 16px;">
              <g-chip
                v-for="option in filter.options"
                :key="filter.id + '-' + option"
                variant="outline"
                type="secondary"
                :text="option"
                :selected="appliedFilters.some(af => af.category === filter.id && af.value === option)"
                @click="addAppliedFilter(filter.id, option, filter.text)"
                style="cursor: pointer; font-size: 12px;"
                size="sm"
              />
            </div>
          </div>
          
          <!-- Filtros aplicados -->
          <div v-if="appliedFilters.length > 0">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <h4 style="margin: 0; font-size: 14px; font-weight: 600;">Filtros aplicados</h4>
              <g-chip
                variant="outline"
                type="secondary"
                text="Limpiar todo"
                size="sm"
                @click="clearAllFilters"
                style="cursor: pointer; color: #666;"
              />
            </div>
            <div class="flex flex-wrap gap-2">
              <g-chip
                v-for="applied in appliedFilters"
                :key="applied.id"
                variant="solid"
                type="primary"
                :text="applied.text"
                closable
                @close="removeAppliedFilter(applied.id)"
                size="sm"
              />
            </div>
          </div>
          
          <!-- Estado actual -->
          <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; font-size: 12px;">
            <strong>Estado actual:</strong><br>
            Categorías activas: {{ mainFilters.filter(f => f.selected).map(f => f.text).join(', ') || 'Ninguna' }}<br>
            Filtros aplicados: {{ appliedFilters.length }} filtro(s)
          </div>
          
        </div>
      </g-config-provider>
    `})},A={name:"Chip con dropdown integrado",parameters:{docs:{source:{code:`<script setup lang="ts">
import { reactive, ref } from 'vue'
import { GChip } from '@flash-global66/g-chip'
import { GDropdownMenu, GDropdownItem } from '@flash-global66/g-dropdown'

const currencies = reactive([
  { title: 'Pesos colombianos', command: 'COP', flag: '🇨🇴' },
  { title: 'Dólar estadounidense', command: 'USD', flag: '🇺🇸' },
  { title: 'Euro', command: 'EUR', flag: '🇪🇺' }
])

const selectedCurrency = ref(currencies[0])

const handleCurrencyCommand = (command) => {
  selectedCurrency.value = currencies.find(c => c.command === command)
}
<\/script>

<template>
  <g-chip 
    :text="selectedCurrency.command"
    variant="outline"
    type="primary"
    :dropdown-enabled="true"
    trigger="click"
    placement="bottom-start"
    @command="handleCurrencyCommand"
  >
    <template #prefix>
      <span style="margin-right: 4px;">{{ selectedCurrency.flag }}</span>
    </template>
    
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item
          v-for="currency in currencies"
          :key="currency.command"
          :command="currency.command"
        >
          <span style="margin-right: 12px; font-size: 18px;">{{ currency.flag }}</span>
          <span style="font-size: 14px; color: #333;">{{ currency.title }}</span>
        </g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-chip>

  <!-- Ejemplo menú contextual -->
<div>
  <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Menú contextual</h3>
  <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
    Click derecho para ver el menú contextual
  </p>
  
  <g-chip 
    text="Click derecho aquí"
    variant="solid"
    type="secondary"
    :dropdown-enabled="true"
    trigger="contextmenu"
    placement="bottom-start"
    :actions="[
      { title: 'Copiar', command: 'copy' },
      { title: 'Editar', command: 'edit' },
      { title: 'Eliminar', command: 'delete' },
      { title: 'Compartir', command: 'share' }
    ]"
    @command="(command) => console.log('Comando ejecutado:', command)"
  />
</div>
</template>`}}},render:()=>({components:{GChip:p,GConfigProvider:d,GDropdownMenu:_,GDropdownItem:X},setup(){const i=I([{title:"Pesos colombianos",command:"COP",flag:"🇨🇴"},{title:"Dólar estadounidense",command:"USD",flag:"🇺🇸"},{title:"Pesos argentinos",command:"ARS",flag:"🇦🇷"},{title:"Pesos chilenos",command:"CLP",flag:"🇨🇱"},{title:"Euro",command:"EUR",flag:"🇪🇺"},{title:"Real brasileño",command:"BRL",flag:"🇧🇷"}]),t=V(i[0]);return{currencies:i,selectedCurrency:t,handleCurrencyCommand:l=>{t.value=i.find(o=>o.command===l)||i[0]}}},template:`
      <g-config-provider>
        <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
          
          <div>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Selector de moneda</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
              Click en el chip para seleccionar una moneda desde el dropdown
            </p>
            
            <g-chip
              :text="selectedCurrency.command"
              variant="outline"
              type="primary"
              :dropdown-enabled="true"
              trigger="click"
              placement="bottom-start"
              @command="handleCurrencyCommand"
            >
              <template #prefix>
                <span style="margin-right: 4px;">{{ selectedCurrency.flag }}</span>
              </template>

              <template #dropdown>
                <g-dropdown-menu>
                  <g-dropdown-item
                    v-for="currency in currencies"
                    :key="currency.command"
                    :command="currency.command"
                  >
                    <span style="margin-right: 12px; font-size: 18px;">{{ currency.flag }}</span>
                    <span style="font-size: 14px; color: #333;">{{ currency.title }}</span>
                  </g-dropdown-item>
                </g-dropdown-menu>
              </template>
            </g-chip>

            <div style="margin-top: 12px; padding: 12px; background: #f8f9fa; border-radius: 6px; font-size: 14px;">
              <strong>Moneda seleccionada:</strong> {{ selectedCurrency.flag }} {{ selectedCurrency.title }} ({{ selectedCurrency.command }})
            </div>
          </div>
          
          <div>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Menú contextual</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
              Click derecho para ver el menú contextual
            </p>
            
            <g-chip 
              text="Click derecho aquí"
              variant="solid"
              type="secondary"
              :dropdown-enabled="true"
              trigger="contextmenu"
              placement="bottom-start"
              :actions="[
                { title: 'Copiar', command: 'copy' },
                { title: 'Editar', command: 'edit' },
                { title: 'Eliminar', command: 'delete' },
                { title: 'Compartir', command: 'share' }
              ]"
              @command="(command) => console.log('Comando ejecutado:', command)"
            />
          </div>
          
        </div>
      </g-config-provider>
    `})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Básico",
  render: args => ({
    components: {
      GChip,
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
          <g-chip v-bind="args" />
        </div>
      </g-config-provider>
    \`
  })
}`,...w.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Combinaciones de variantes y tamaños",
  render: () => ({
    components: {
      GChip,
      GConfigProvider
    },
    setup() {
      const state = reactive({
        types: ["primary", "secondary"],
        sizes: ["sm", "md"],
        variants: ["solid", "outline"]
      });
      return {
        state
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div v-for="type in state.types" :key="type" class="flex flex-row gap-6 items-center justify-center">
            <div v-for="size in state.sizes" :key="size" class="flex flex-col gap-4">
              <div v-for="variant in state.variants" :key="variant">
                <g-chip
                  :type="type"
                  :size="size"
                  :variant="variant"
                  text="Chip"
                />
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...F.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Chips con iconos",
  render: () => ({
    components: {
      GChip,
      GConfigProvider
    },
    setup() {
      const iconExamples = [{
        iconLeft: "solid check",
        text: "Verificado"
      }, {
        iconRight: "regular chevron-down",
        text: "Dropdown"
      }, {
        iconLeft: "solid user",
        iconRight: "solid check",
        text: "Usuario activo"
      }, {
        iconLeft: "regular heart",
        text: "Favorito",
        variant: "outline"
      }, {
        iconLeft: "regular bell",
        text: "Notificación",
        type: "secondary"
      }, {
        iconRight: "solid arrow-right",
        text: "Siguiente",
        variant: "outline",
        type: "secondary"
      }];
      return {
        iconExamples
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <div>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Ejemplos con iconos</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
              Diferentes combinaciones de iconos prefijo y sufijo
            </p>
            <div class="flex flex-wrap gap-3">
              <g-chip
                v-for="(example, index) in iconExamples"
                :key="index"
                :text="example.text"
                :icon-left="example.iconLeft"
                :icon-right="example.iconRight"
                :variant="example.variant || 'solid'"
                :type="example.type || 'primary'"
                size="md"
              />
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Solo iconos prefijo</h4>
            <div class="flex flex-wrap gap-2">
              <g-chip text="Check" icon-left="solid check" size="sm" />
              <g-chip text="Usuario" icon-left="solid user" size="sm" />
              <g-chip text="Home" icon-left="solid home" size="sm" />
              <g-chip text="Search" icon-left="solid search" size="sm" />
              <g-chip text="Filter" icon-left="solid filter" size="sm" />
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Solo iconos sufijo</h4>
            <div class="flex flex-wrap gap-2">
              <g-chip text="Dropdown" icon-right="regular chevron-down" size="sm" variant="outline" />
              <g-chip text="Arrow" icon-right="solid arrow-right" size="sm" variant="outline" />
              <g-chip text="Times" icon-right="solid times" size="sm" variant="outline" />
              <g-chip text="Info" icon-right="solid info-circle" size="sm" variant="outline" />
              <g-chip text="Edit" icon-right="solid edit" size="sm" variant="outline" />
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Ambos iconos</h4>
            <div class="flex flex-wrap gap-2">
              <g-chip 
                text="Usuario activo" 
                icon-left="solid user" 
                icon-right="solid check" 
                variant="solid" 
                type="primary" 
              />
              <g-chip 
                text="Filtro aplicado" 
                icon-left="solid filter" 
                icon-right="solid times" 
                variant="outline" 
                type="secondary" 
              />
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...z.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Chips eliminables",
  render: () => ({
    components: {
      GChip,
      GConfigProvider
    },
    setup() {
      const initChips = [{
        text: "Chip 1",
        type: "primary",
        variant: "solid"
      }, {
        text: "Chip 2",
        type: "secondary",
        variant: "solid"
      }, {
        text: "Chip 3",
        type: "primary",
        variant: "outline"
      }, {
        text: "Chip 4",
        type: "secondary",
        variant: "outline"
      }];
      const dynamicChips = reactive([...initChips]);
      const handleClose = (chip: string) => {
        if (dynamicChips.length === 1) {
          dynamicChips.splice(-1, 1, ...initChips);
          return;
        }
        dynamicChips.splice(dynamicChips.findIndex(item => item.text === chip), 1);
      };
      return {
        dynamicChips,
        handleClose
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-row gap-4">
          <g-chip
            v-for="(chip, index) in dynamicChips"
            :key="chip.text"
            :type="chip.type"
            :variant="chip.variant"
            :text="chip.text"
            closable
            @close="() => handleClose(chip.text)"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Tipos y variantes (separados)",
  render: () => ({
    components: {
      GChip,
      GConfigProvider
    },
    setup() {
      return {};
    },
    template: \`
      <g-config-provider>
        <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <span style="font-weight: 600; margin-bottom: 8px;">Tipos (radio)</span>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Primary (xl radius)</span>
              <g-chip type="primary" variant="solid" text="Primary" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Secondary (sm radius)</span>
              <g-chip type="secondary" variant="solid" text="Secondary" />
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <span style="font-weight: 600; margin-bottom: 8px;">Variantes (color)</span>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Solid (grey-100)</span>
              <g-chip type="primary" variant="solid" text="Solid" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #666;">Outline (everBlue-100 border)</span>
              <g-chip type="primary" variant="outline" text="Outline" />
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <span style="font-weight: 600; margin-bottom: 8px;">Combinaciones</span>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <g-chip type="primary" variant="solid" text="Primary + Solid" />
              <g-chip type="primary" variant="outline" text="Primary + Outline" />
              <g-chip type="secondary" variant="solid" text="Secondary + Solid" />
              <g-chip type="secondary" variant="outline" text="Secondary + Outline" />
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Sistema de filtros en cascada',
  parameters: {
    docs: {
      source: {
        code: \`<script setup lang="ts">
import { reactive, ref } from 'vue'
import { GChip } from '@flash-global66/g-chip'

interface MainFilter {
  id: string
  text: string
  selected: boolean
  options: string[]
}

interface AppliedFilter {
  id: string
  category: string
  value: string
  text: string
}

const mainFilters = reactive<MainFilter[]>([
  { id: 'year', text: 'Año', selected: false, options: ['2015', '2016', '2017', '2018', '2019', '2020'] },
  { id: 'category', text: 'Categoría', selected: false, options: ['Importaciones', 'Exportaciones'] },
  { id: 'country', text: 'País', selected: false, options: ['Chile', 'Argentina', 'Brasil'] }
])

const appliedFilters = ref<AppliedFilter[]>([])

const toggleMainFilter = (filterId: string) => {
  const filter = mainFilters.find(f => f.id === filterId)
  if (filter) {
    filter.selected = !filter.selected
    if (!filter.selected) {
      const filteredItems = appliedFilters.value.filter(af => af.category !== filterId)
      appliedFilters.value.splice(0, appliedFilters.value.length)
      appliedFilters.value.push(...filteredItems)
    }
  }
}

const addAppliedFilter = (category: string, value: string, categoryText: string) => {
  const exists = appliedFilters.value.find(af => af.category === category && af.value === value)
  if (!exists) {
    appliedFilters.value.push({
      id: \\\`\\\${category}-\\\${value}\\\`,
      category,
      value,
      text: \\\`\\\${categoryText}: \\\${value}\\\`
    })
  }
}

const removeAppliedFilter = (filterId: string) => {
  const index = appliedFilters.value.findIndex(af => af.id === filterId)
  if (index > -1) {
    appliedFilters.value.splice(index, 1)
  }
}

const clearAllFilters = () => {
  appliedFilters.value.splice(0)
  mainFilters.forEach(filter => filter.selected = false)
}
<\/script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h4>Categorías disponibles</h4>
      <div class="flex flex-wrap gap-3">
        <g-chip
          v-for="filter in mainFilters"
          :key="filter.id"
          variant="outline"
          type="primary"
          :text="filter.text"
          :selected="filter.selected"
          @click="toggleMainFilter(filter.id)"
        />
      </div>
    </div>
    
    <div v-for="filter in mainFilters.filter(f => f.selected)" :key="'options-' + filter.id">
      <h4>Opciones de {{ filter.text }}:</h4>
      <div class="flex flex-wrap gap-2">
        <g-chip
          v-for="option in filter.options"
          :key="filter.id + '-' + option"
          variant="outline"
          type="secondary"
          :text="option"
          :selected="appliedFilters.some(af => af.category === filter.id && af.value === option)"
          @click="addAppliedFilter(filter.id, option, filter.text)"
          size="sm"
        />
      </div>
    </div>
    
    <!-- Filtros aplicados -->
    <div v-if="appliedFilters.length > 0">
      <div style="display: flex; align-items: center; gap: 12px;">
        <h4>Filtros aplicados</h4>
        <g-chip
          variant="outline"
          type="secondary"
          text="Limpiar todo"
          size="sm"
          @click="clearAllFilters"
        />
      </div>
      <div class="flex flex-wrap gap-2">
        <g-chip
          v-for="applied in appliedFilters"
          :key="applied.id"
          variant="solid"
          type="primary"
          :text="applied.text"
          closable
          @close="removeAppliedFilter(applied.id)"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>\`
      }
    }
  },
  render: () => ({
    components: {
      GChip,
      GConfigProvider
    },
    setup() {
      const mainFilters = reactive<MainFilter[]>([{
        id: 'year',
        text: 'Año',
        selected: false,
        options: ['2015', '2016', '2017', '2018', '2019', '2020']
      }, {
        id: 'category',
        text: 'Categoría',
        selected: false,
        options: ['Importaciones', 'Exportaciones', 'Balanza comercial']
      }, {
        id: 'country',
        text: 'País',
        selected: false,
        options: ['Chile', 'Argentina', 'Brasil', 'Colombia', 'Perú']
      }, {
        id: 'currency',
        text: 'Moneda',
        selected: false,
        options: ['USD', 'EUR', 'CLP', 'ARS']
      }]);
      const appliedFilters = ref<AppliedFilter[]>([]);
      const toggleMainFilter = (filterId: string) => {
        const filter = mainFilters.find(f => f.id === filterId);
        if (filter) {
          filter.selected = !filter.selected;
          if (!filter.selected) {
            const filteredItems = appliedFilters.value.filter(af => af.category !== filterId);
            appliedFilters.value.splice(0, appliedFilters.value.length);
            appliedFilters.value.push(...filteredItems);
          }
        }
      };
      const addAppliedFilter = (category: string, value: string, categoryText: string) => {
        const exists = appliedFilters.value.find(af => af.category === category && af.value === value);
        if (!exists) {
          appliedFilters.value.push({
            id: \`\${category}-\${value}\`,
            category,
            value,
            text: \`\${categoryText}: \${value}\`
          });
        }
      };
      const removeAppliedFilter = (filterId: string) => {
        const index = appliedFilters.value.findIndex(af => af.id === filterId);
        if (index > -1) {
          appliedFilters.value.splice(index, 1);
        }
      };
      const clearAllFilters = () => {
        appliedFilters.value.splice(0);
        mainFilters.forEach(filter => filter.selected = false);
      };
      return {
        mainFilters,
        appliedFilters,
        toggleMainFilter,
        addAppliedFilter,
        removeAppliedFilter,
        clearAllFilters
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-6" style="max-width: 800px;">
          
          <!-- Título -->
          <div>
            <h3 style="margin: 0 0 8px 0; font-size: 16px;">Sistema de filtros - Ejemplo financiero</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">
              Selecciona categorías de filtro, luego elige valores específicos que aparecerán como chips eliminables.
            </p>
          </div>
          
          <!-- Filtros principales (categorías) -->
          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600;">Categorías disponibles</h4>
            <div class="flex flex-wrap gap-3">
              <g-chip
                v-for="filter in mainFilters"
                :key="filter.id"
                variant="outline"
                type="primary"
                :text="filter.text"
                :selected="filter.selected"
                @click="toggleMainFilter(filter.id)"
              />
            </div>
          </div>
          
          <!-- Opciones para categorías seleccionadas -->
          <div v-for="filter in mainFilters.filter(f => f.selected)" :key="'options-' + filter.id">
            <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 500;">
              Opciones de {{ filter.text }}:
            </h4>
            <div class="flex flex-wrap gap-2" style="margin-bottom: 16px;">
              <g-chip
                v-for="option in filter.options"
                :key="filter.id + '-' + option"
                variant="outline"
                type="secondary"
                :text="option"
                :selected="appliedFilters.some(af => af.category === filter.id && af.value === option)"
                @click="addAppliedFilter(filter.id, option, filter.text)"
                style="cursor: pointer; font-size: 12px;"
                size="sm"
              />
            </div>
          </div>
          
          <!-- Filtros aplicados -->
          <div v-if="appliedFilters.length > 0">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <h4 style="margin: 0; font-size: 14px; font-weight: 600;">Filtros aplicados</h4>
              <g-chip
                variant="outline"
                type="secondary"
                text="Limpiar todo"
                size="sm"
                @click="clearAllFilters"
                style="cursor: pointer; color: #666;"
              />
            </div>
            <div class="flex flex-wrap gap-2">
              <g-chip
                v-for="applied in appliedFilters"
                :key="applied.id"
                variant="solid"
                type="primary"
                :text="applied.text"
                closable
                @close="removeAppliedFilter(applied.id)"
                size="sm"
              />
            </div>
          </div>
          
          <!-- Estado actual -->
          <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; font-size: 12px;">
            <strong>Estado actual:</strong><br>
            Categorías activas: {{ mainFilters.filter(f => f.selected).map(f => f.text).join(', ') || 'Ninguna' }}<br>
            Filtros aplicados: {{ appliedFilters.length }} filtro(s)
          </div>
          
        </div>
      </g-config-provider>
    \`
  })
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Chip con dropdown integrado",
  parameters: {
    docs: {
      source: {
        code: \`<script setup lang="ts">
import { reactive, ref } from 'vue'
import { GChip } from '@flash-global66/g-chip'
import { GDropdownMenu, GDropdownItem } from '@flash-global66/g-dropdown'

const currencies = reactive([
  { title: 'Pesos colombianos', command: 'COP', flag: '🇨🇴' },
  { title: 'Dólar estadounidense', command: 'USD', flag: '🇺🇸' },
  { title: 'Euro', command: 'EUR', flag: '🇪🇺' }
])

const selectedCurrency = ref(currencies[0])

const handleCurrencyCommand = (command) => {
  selectedCurrency.value = currencies.find(c => c.command === command)
}
<\/script>

<template>
  <g-chip 
    :text="selectedCurrency.command"
    variant="outline"
    type="primary"
    :dropdown-enabled="true"
    trigger="click"
    placement="bottom-start"
    @command="handleCurrencyCommand"
  >
    <template #prefix>
      <span style="margin-right: 4px;">{{ selectedCurrency.flag }}</span>
    </template>
    
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item
          v-for="currency in currencies"
          :key="currency.command"
          :command="currency.command"
        >
          <span style="margin-right: 12px; font-size: 18px;">{{ currency.flag }}</span>
          <span style="font-size: 14px; color: #333;">{{ currency.title }}</span>
        </g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-chip>

  <!-- Ejemplo menú contextual -->
<div>
  <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Menú contextual</h3>
  <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
    Click derecho para ver el menú contextual
  </p>
  
  <g-chip 
    text="Click derecho aquí"
    variant="solid"
    type="secondary"
    :dropdown-enabled="true"
    trigger="contextmenu"
    placement="bottom-start"
    :actions="[
      { title: 'Copiar', command: 'copy' },
      { title: 'Editar', command: 'edit' },
      { title: 'Eliminar', command: 'delete' },
      { title: 'Compartir', command: 'share' }
    ]"
    @command="(command) => console.log('Comando ejecutado:', command)"
  />
</div>
</template>\`
      }
    }
  },
  render: () => ({
    components: {
      GChip,
      GConfigProvider,
      GDropdownMenu,
      GDropdownItem
    },
    setup() {
      const currencies = reactive([{
        title: "Pesos colombianos",
        command: "COP",
        flag: "🇨🇴"
      }, {
        title: "Dólar estadounidense",
        command: "USD",
        flag: "🇺🇸"
      }, {
        title: "Pesos argentinos",
        command: "ARS",
        flag: "🇦🇷"
      }, {
        title: "Pesos chilenos",
        command: "CLP",
        flag: "🇨🇱"
      }, {
        title: "Euro",
        command: "EUR",
        flag: "🇪🇺"
      }, {
        title: "Real brasileño",
        command: "BRL",
        flag: "🇧🇷"
      }]);
      const selectedCurrency = ref(currencies[0]);
      const handleCurrencyCommand = (command: string) => {
        selectedCurrency.value = currencies.find(c => c.command === command) || currencies[0];
      };
      return {
        currencies,
        selectedCurrency,
        handleCurrencyCommand
      };
    },
    template: \`
      <g-config-provider>
        <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
          
          <div>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Selector de moneda</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
              Click en el chip para seleccionar una moneda desde el dropdown
            </p>
            
            <g-chip
              :text="selectedCurrency.command"
              variant="outline"
              type="primary"
              :dropdown-enabled="true"
              trigger="click"
              placement="bottom-start"
              @command="handleCurrencyCommand"
            >
              <template #prefix>
                <span style="margin-right: 4px;">{{ selectedCurrency.flag }}</span>
              </template>

              <template #dropdown>
                <g-dropdown-menu>
                  <g-dropdown-item
                    v-for="currency in currencies"
                    :key="currency.command"
                    :command="currency.command"
                  >
                    <span style="margin-right: 12px; font-size: 18px;">{{ currency.flag }}</span>
                    <span style="font-size: 14px; color: #333;">{{ currency.title }}</span>
                  </g-dropdown-item>
                </g-dropdown-menu>
              </template>
            </g-chip>

            <div style="margin-top: 12px; padding: 12px; background: #f8f9fa; border-radius: 6px; font-size: 14px;">
              <strong>Moneda seleccionada:</strong> {{ selectedCurrency.flag }} {{ selectedCurrency.title }} ({{ selectedCurrency.command }})
            </div>
          </div>
          
          <div>
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Menú contextual</h3>
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
              Click derecho para ver el menú contextual
            </p>
            
            <g-chip 
              text="Click derecho aquí"
              variant="solid"
              type="secondary"
              :dropdown-enabled="true"
              trigger="contextmenu"
              placement="bottom-start"
              :actions="[
                { title: 'Copiar', command: 'copy' },
                { title: 'Editar', command: 'edit' },
                { title: 'Eliminar', command: 'delete' },
                { title: 'Compartir', command: 'share' }
              ]"
              @command="(command) => console.log('Comando ejecutado:', command)"
            />
          </div>
          
        </div>
      </g-config-provider>
    \`
  })
}`,...A.parameters?.docs?.source}}};const Qe=["Basic","AllCombinations","WithIcons","ClosableDynamic","TypesWithAutomaticRadius","SelectableFilters","WithIntegratedDropdown"];export{F as AllCombinations,w as Basic,k as ClosableDynamic,S as SelectableFilters,E as TypesWithAutomaticRadius,z as WithIcons,A as WithIntegratedDropdown,Qe as __namedExportsOrder,Je as default};
