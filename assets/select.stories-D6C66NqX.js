import{r as o,H as E}from"./vue.esm-bundler-C43JrhH2.js";import{G as a}from"./index-Dt9OtjYw.js";import{G as s}from"./ConfigProvider-Br84NlF7.js";import{g as w}from"./documentation-stories-qFVaJCfF.js";import"./index-Cc2Yr_Yg.js";import"./index-BDKGuxIf.js";import"./index-DmfABaPz.js";import"./index-CMNLjZZP.js";import"./install-CfJGiCvs.js";import"./index-D5bIuBCX.js";import"./index-DH2w0SzE.js";import"./index-fhkPmQjX.js";import"./_arrayPush-BhjrZnJY.js";import"./index-dphAcb1L.js";import"./index-CmBD9wVo.js";import"./aria-BUADUvnR.js";import"./index-CdSB2Bdf.js";import"./index-Ci6ix9zE.js";import"./index-Bh2M3sAJ.js";import"./use-form-item-BgBoyOyI.js";import"./constants-Dnj8X3EN.js";import"./index-B1N8OQI3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./event-BB_Ol6Sd.js";import"./content-xefq6HC4.js";import"./dynamic-size-list-Cx2IIt4N.js";import"./debounce-Qaf-XsLG.js";import"./isEqual-Cz4oPyRM.js";import"./index-Bn_3zeFh.js";import"./typescript-Bp3YSIOJ.js";import"./index-D_xYoXKA.js";import"./icon-BhbO7EM9.js";import"./index-70yognVe.js";import"./error-Cq9Fpw4b.js";import"./index-hJ8KYCfA.js";import"./index-CvPWi8JN.js";import"./index-JCyoYr4D.js";import"./index-CbCyI1Eq.js";const ce={title:"Form/Select",component:a,parameters:{docs:{description:{component:`✨ \`GSelect\` - Componente de selección interactivo y personalizable
    
Un campo de selección moderno con funcionalidades avanzadas para formularios dinámicos. Ideal para integrar listas locales/remotas y manejar selecciones complejas.

> Este componente usa la versión \`2.9.3\` de Element Plus.

**Características principales:**

- Etiquetas flotantes: Diseño limpio que muestra la etiqueta sobre el campo al enfocar
- Validación integrada: Sistema de errores automatizado con mensajes personalizables
- Estado de error: Destaca campos inválidos con feedback visual inmediato
- Íconos prefix: Añade contexto visual con íconos personalizados al inicio del campo
- Texto de ayuda: Mensajes descriptivos bajo el campo para guiar al usuario
- Opciones personalizadas: Diseña plantillas únicas para cada ítem de la lista
- Búsqueda dinámica: Filtra opciones en tiempo real con buscador integrado
- Datos remotos: Carga opciones desde APIs externas con paginación opcional
- Selección múltiple: Permite elegir varios valores con tags removibles

🚀 **Instalación**

\`\`\`bash
yarn add @flash-global66/g-select
\`\`\`

🪝 **Dependencias**

Este componente requiere:

> - @flash-global66/g-tag
> - @flash-global66/g-icon-font
> - @flash-global66/g-tooltip

📥 **Importación básica**

\`\`\`typescript
import { GSelect } from '@flash-global66/g-select'
import '@flash-global66/g-input/select.style.scss'

// tipos si son necesarios
import type { OptionType } from '@flash-global66/g-select'
\`\`\`
`}}},argTypes:{modelValue:{name:"v-model",description:"Valor del select (v-model)",control:{type:void 0},table:{category:"Enlace de Datos",type:{summary:"string | number | boolean | array | object"}}},automaticDropdown:{name:"automatic-dropdown",description:"Muestra el menú de opciones al enfocar el select",control:"boolean",table:{category:"Comportamiento e Interacción",type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearable:{description:"Permite limpiar el valor del select",control:"boolean",table:{category:"Comportamiento e Interacción",type:{summary:"boolean"},defaultValue:{summary:"false"}}},filterable:{description:"Activa la búsqueda de opciones",control:"boolean",table:{category:"Comportamiento e Interacción",type:{summary:"boolean"},defaultValue:{summary:"false"}}},persistent:{description:"Mantiene el menú en el DOM cuando está inactivo",control:"boolean",table:{category:"Comportamiento e Interacción",type:{summary:"boolean"},defaultValue:{summary:"true"}}},scrollbarAlwaysOn:{name:"scrollbar-always-on",description:"Muestra siempre la barra de desplazamiento",control:"boolean",table:{category:"Comportamiento e Interacción",type:{summary:"boolean"},defaultValue:{summary:"false"}}},height:{description:"Altura del menú de opciones",control:"number",table:{category:"Apariencia y Estilos",type:{summary:"number"},defaultValue:{summary:"274"}}},itemHeight:{name:"item-height",description:"Altura de cada opción",control:"number",table:{category:"Apariencia y Estilos",type:{summary:"number"},defaultValue:{summary:"55"}}},prefixIcon:{name:"prefix-icon",description:"Ícono al inicio del select",control:"select",options:["",...w()],table:{category:"Apariencia y Estilos",type:{summary:"string"},defaultValue:{summary:""}}},popperClass:{name:"popper-class",description:"Clase personalizada para el menú",control:"text",table:{category:"Apariencia y Estilos",type:{summary:"string"},defaultValue:{summary:"''"}}},offset:{description:"Desplazamiento del menú",control:"number",table:{category:"Apariencia y Estilos",type:{summary:"number"},defaultValue:{summary:"12"}}},options:{description:"Opciones del select",control:"object",table:{category:"Manejo de Datos",type:{summary:"OptionType[]",detail:`
            type OptionType = {
value: any
title: string
description?: string
icon?: string
disabled?: boolean
...additionalProps (customizable)
}
`},defaultValue:{summary:"[]"}}},filterMethod:{name:"filter-method",description:"Método de filtrado personalizado",control:void 0,table:{category:"Manejo de Datos",type:{summary:"Function"}}},remoteMethod:{name:"remote-method",description:"Método para obtener opciones remotas",control:void 0,table:{category:"Manejo de Datos",type:{summary:"Function"}}},valueKey:{name:"value-key",description:"Key de identificación única para valores",control:"text",table:{category:"Manejo de Datos",type:{summary:"string"},defaultValue:{summary:"'value'"}}},remote:{description:"Buscar datos desde el servidor",control:"boolean",table:{category:"Manejo de Datos",type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{description:"Texto de placeholder",control:"text",table:{category:"Etiquetas y Texto",type:{summary:"string"},defaultValue:{summary:"undefined"}}},label:{description:"Etiqueta flotante",control:"text",table:{category:"Etiquetas y Texto",type:{summary:"string"}}},helpText:{name:"help-text",description:"Texto de ayuda",control:"text",table:{category:"Etiquetas y Texto",type:{summary:"string"},defaultValue:{summary:"undefined"}}},messageError:{name:"message-error",description:"Mensaje de error",control:"text",table:{category:"Etiquetas y Texto",type:{summary:"string"},defaultValue:{summary:"undefined"}}},allowCreate:{name:"allow-create",description:"Permitir crear nuevas opciones",control:"boolean",table:{category:"Manejo de Entrada",type:{summary:"boolean"},defaultValue:{summary:"false"}}},autocomplete:{description:"Tipo de autocompletado",control:"select",options:["none","both","list","inline"],table:{category:"Manejo de Entrada",type:{summary:"autocompleteTypes",detail:"'none' | 'both' | 'list' | 'inline'"},defaultValue:{summary:"none"}}},disabled:{description:"Deshabilita el select",control:"boolean",table:{category:"Gestión de Estado",type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{description:"Muestra estado de carga",control:"boolean",table:{category:"Gestión de Estado",type:{summary:"boolean"},defaultValue:{summary:"false"}}},validateEvent:{name:"validate-event",description:"Activa validación en eventos",control:"boolean",table:{category:"Validación y Errores",type:{summary:"boolean"},defaultValue:{summary:"true"}}},focus:{description:"Enfoca el select",table:{category:"Métodos Expuestos",type:{summary:"() => void"}}},blur:{description:"Quita el foco del select",table:{category:"Métodos Expuestos",type:{summary:"() => void"}}},clear:{description:"Limpia el valor del select",table:{category:"Métodos Expuestos",type:{summary:"() => void"}}},default:{description:"Contenido personalizado de las opciones",table:{category:"slots",type:{summary:"slot"}}},prefix:{description:"Contenido personalizado al inicio del select",table:{category:"slots",type:{summary:"slot"}}},header:{description:"Contenido personalizado en la cabecera del menú",table:{category:"slots",type:{summary:"slot"}}},footer:{description:"Contenido personalizado en el pie del menú",table:{category:"slots",type:{summary:"slot"}}},tag:{description:"Contenido personalizado de las etiquetas cuando es multiple",table:{category:"slots",type:{summary:"slot"}}},empty:{description:"Contenido personalizado cuando no hay opciones",table:{category:"slots",type:{summary:"slot"}}},selectedLabel:{name:"selected-label",description:"Contenido personalizado de la etiqueta seleccionada",table:{category:"slots",type:{summary:"slot"}}},loadingSlot:{name:"loading",description:"Contenido personalizado del estado de carga",table:{category:"slots",type:{summary:"slot"}}}},args:{label:"Etiqueta",placeholder:"Placeholder",options:[{value:"1",title:"Opción 1"},{value:"2",title:"Opción 2"},{value:"3",title:"Opción 3"},{value:"4",title:"Opción 4"},{value:"5",title:"Opción 5"},{value:"6",title:"Opción 6"}]}},p={name:"Básico",render:t=>({components:{GSelect:a,GConfigProvider:s},setup(){return{value:o(""),args:t}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-select v-bind="args" v-model="value" />
        </div>
      </g-config-provider>
    `})},d={name:"Personalizado de opciones con props",parameters:{docs:{description:{story:` Este select es personalizado con opciones que incluyen íconos, descripciones y estados de deshabilitado.

- Muestra ícono y descripción
- Opciones deshabilitadas
- Búsqueda de opciones
- Largo de opciones personalizado`}}},render:()=>({components:{GSelect:a,GConfigProvider:s},setup(){const t=["a","b","c","d","e","f","g","h","i","j"],e=o(),r=o(),n=Array.from({length:1e3}).map((S,l)=>({value:`Option ${l+1}`,title:`${t[l%10]}${l} - option ${l+1}`,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in enim elementum, sagittis velit eu, feugiat sem. Sed lacinia tincidunt lacinia.",icon:l%2===0?"regular bolt":"regular user",disabled:l%3===0&&l!==0}));return{value:e,options:n,value2:r}},template:`
      <g-config-provider>
        <div class="flex flex-row gap-4 items-center">
          <g-select
            v-model="value"
            :options="options"
            placeholder="Please select"
            :item-height="90"
            :filterable="true"
            prefix-icon="regular bolt"
            label="Label"
            style="width: 300px"
            :clearable="true"
            helpText="This is a help text"
          />
          <g-select
            v-model="value2"
            :options="options"
            placeholder="Please select"
            :item-height="90"
            :filterable="true"
            prefix-icon="regular bolt"
            label="Label"
            style="width: 300px"
            :clearable="true"
            helpText="This is a help text"
            :fit-input-width="440"
          />
        </div>
      </g-config-provider>
    `})},u={name:"Búsqueda remota",parameters:{docs:{description:{story:`Este select carga opciones de forma remota desde una API externa.

- Carga de opciones desde API
- Búsqueda de opciones
- Mapeo de propiedades`}}},render:()=>({components:{GSelect:a,GConfigProvider:s},setup(){const t=o(),e=o(!1),r=o([]),n={title:"title",description:"body",value:"id"},S=async c=>{try{return e.value=!0,await(await fetch(`https://jsonplaceholder.typicode.com/posts?q=${c}`)).json()}catch(C){return console.error("Error fetching data:",C),[]}finally{e.value=!1}};return{value:t,options:r,handleSearch:async c=>{r.value=await S(c)},loading:e,mappingProps:n}},template:`
      <g-config-provider>
        <g-select
          v-model="value"
          placeholder="Buscar opciones"
          label="Buscar"
          :options="options"
          :loading="loading"
          :filterable="true"
          :props="mappingProps"
          :remote="true"
          :remote-method="handleSearch"
          prefix-icon="regular search"
          style="width: 300px"
          :item-height="90"
        />
      </g-config-provider>
    `})},m={name:"Selector de países",parameters:{docs:{description:{story:`El select de países es un componente que permite al usuario seleccionar un país de una lista desplegable.

- Muestra la bandera y el nombre del país
- Búsqueda de opciones
- Opciones personalizadas
- Carga de datos desde API externa
- Estado de carga durante operaciones asíncronas
- Limpieza de selección
- Uso de value-key para cuando las opciones son objetos
- Uso de slots como prefix, default y selectedLabel`}}},render:()=>({components:{GSelect:a,GConfigProvider:s},setup(){const t=o(),e=o(!1),r=o([]),n=async()=>{try{return e.value=!0,(await(await fetch("https://restcountries.com/v3.1/all?fields=name,flags")).json()).map(i=>({value:{id:i.cca2,image:i.flags.svg,countryName:i.name.common},title:i.name.common,country:`${i.name.common} ${i.idd.root??""}`}))}catch(l){return console.error("Error fetching data:",l),[]}finally{e.value=!1}};return{value:t,countries:r,onFocusSelect:async()=>{r.value=await n()},loadingCountries:e}},template:`
      <g-config-provider>
        <g-select
          v-model="value"
          placeholder="Selecciona un país"
          label="Ciudad*"
          value-key="id"
          :options="countries"
          prefix-icon="regular globe"
          :item-height="70"
          :clearable="true"
          style="width: 320px"
          :loading="loadingCountries"
          :filterable="true"
          @focus="onFocusSelect"
        >
          <template #default="{ item }">
            <div class="flex items-center h-full w-full gap-xs">
              <img class="w-8 h-8 rounded-full object-cover" :src="item.value.image" />
              <span class="text-4 text-primary-txt font-medium text-ellipsis overflow-hidden">{{ item.country }}</span>
            </div>
          </template>
          <template #prefix v-if="value">
            <img class="w-5 h-5 rounded-full object-cover" :src="value.image" />
          </template>
          <template #selectedLabel="{ value }">
            <span class="text-3 text-everBlue-500">{{ value.countryName + ' es increible'  }}</span>
          </template>
        </g-select>
      </g-config-provider>
    `})},g={name:"Con limpieza",parameters:{docs:{description:{story:`El select con opción de limpieza permite al usuario borrar la selección actual.

- Muestra el ícono de limpieza al final del campo
- Permite borrar la selección actual`}}},render:()=>({components:{GSelect:a,GConfigProvider:s},setup(){return{value:o(),options:[{value:"1",title:"Opción 1"},{value:"2",title:"Opción 2"},{value:"3",title:"Opción 3"},{value:"4",title:"Opción 4"},{value:"5",title:"Opción 5"},{value:"6",title:"Opción 6"},{value:"7",title:"Opción 7"}]}},template:`
      <g-config-provider>
        <g-select
          v-model="value"
          placeholder="Selecciona una opción"
          label="Label"
          clearable
          style="width: 280px"
          :options="options"
        />
      </g-config-provider>
    `})},v={name:"Estados",parameters:{docs:{description:{story:`Los selects pueden tener diferentes estados que indican su comportamiento y apariencia:

- **Enabled**: Estado inicial del select, listo para seleccionar opciones
- **Completed**: Cuando el select ya contiene una opción seleccionada
- **Disabled**: Select deshabilitado, no permite interacción
- **Evento**: Select controlado por eventos externos (ej: modal)
- **Error**: Muestra estado de error con mensaje
- **Loading**: Estado de carga durante operaciones asíncronas`}}},render:()=>({components:{GSelect:a,GConfigProvider:s},setup(){const t=E({enabled:"",completed:"2",disabled:"Select deshabilitado",event:"",error:"",loading:""}),e=[{value:"1",title:"Opción 1",description:"Descripción de la opción 1",icon:"regular bolt"},{value:"2",title:"Opción 2",description:"Descripción de la opción 2",icon:"regular user"},{value:"3",title:"Opción 3",description:"Descripción de la opción 3",icon:"regular bolt"},{value:"4",title:"Opción 4",description:"Descripción de la opción 4",icon:"regular user"},{value:"5",title:"Opción 5",description:"Descripción de la opción 5",icon:"regular bolt"}];function r(n){alert("Click en el input")}return{states:t,handleClick:r,options:e}},template:`
      <g-config-provider>
        <div class="flex flex-row gap-4 flex-wrap">
          <g-select 
            v-model="states.enabled"
            label="Enabled"
            help-text="select en estado inicial, listo para recibir datos"
            :options="options"
            style="width: calc(50% - 1rem)"
          />
          <g-select 
            v-model="states.completed"
            label="Completed"
            help-text="select que ya contiene información ingresada"
            :options="options"
            style="width: calc(50% - 1rem)"
          />
          <g-select 
            v-model="states.disabled"
            label="Disabled"
            disabled
            help-text="select deshabilitado, no permite ninguna interacción"
            :options="options"
            style="width: calc(50% - 1rem)"
          />
          <g-select 
            v-model="states.event"
            label="Evento"
            is-event
            @click="handleClick"
            help-text="Click para abrir modal de selección"
            :options="options"
            style="width: calc(50% - 1rem)"
          />
          <g-select 
            v-model="states.error"
            label="Error"
            message-error="Este campo contiene un error"
            help-text="Ejemplo de select con estado de error"
            :options="options"
            style="width: calc(50% - 1rem)"
          />
          <g-select 
            v-model="states.loading"
            label="Loading"
            loading
            help-text="Estado durante operaciones asíncronas"
            :options="options"
            style="width: calc(50% - 1rem)"
          />
        </div>
      </g-config-provider>
    `})},y={name:"Selección múltiple",parameters:{docs:{description:{story:"El select con selección múltiple permite elegir varios valores a la vez.\n\n- Prop `multiple` para habilitar varios valores\n- `v-model` debe ser un array\n- Cada valor seleccionado se muestra como tag removible\n- `collapseTags` colapsa los tags mostrando un contador\n- `multipleLimit` limita la cantidad de opciones seleccionables (0 = sin límite)"}}},render:()=>({components:{GSelect:a,GConfigProvider:s},setup(){return{value:o([]),options:[{value:"react",title:"React"},{value:"vue",title:"Vue"},{value:"angular",title:"Angular"},{value:"svelte",title:"Svelte"},{value:"solid",title:"Solid"}]}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <g-select
            v-model="value"
            label="Frameworks (múltiple)"
            placeholder="Elige uno o más"
            :options="options"
            multiple
            :filterable="true"
            :clearable="true"
            style="width: 320px"
            help-text="Selecciona varios frameworks. Cada valor aparece como tag y puedes quitarlo con la X."
          />
          <p class="text-3 text-secondary-txt">Seleccionados: {{ value?.length ? value.join(', ') : 'ninguno' }}</p>
        </div>
      </g-config-provider>
    `})},b={name:"Selección múltiple (estado empty)",parameters:{docs:{description:{story:"Con `empty-display` los ítems seleccionados no se muestran como tags; el select se ve vacío pero el valor se mantiene.\n\n- Útil para una vista más limpia o cuando los seleccionados se muestran en otro lugar\n- El placeholder sigue visible cuando el input está vacío\n- Requiere `multiple`"}}},render:()=>({components:{GSelect:a,GConfigProvider:s},setup(){return{value:o(["react","vue"]),options:[{value:"react",title:"React"},{value:"vue",title:"Vue"},{value:"angular",title:"Angular"},{value:"svelte",title:"Svelte"},{value:"solid",title:"Solid"}]}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <g-select
            v-model="value"
            label="Frameworks"
            placeholder="Buscar..."
            :options="options"
            multiple
            empty-display
            :filterable="true"
            :clearable="true"
            style="width: 320px"
            help-text="Los seleccionados no se muestran como tags (valor: React, Vue)."
          />
          <p class="text-3 text-secondary-txt">Valor real: {{ value?.length ? value.join(', ') : 'ninguno' }}</p>
        </div>
      </g-config-provider>
    `})},f={name:"Selección múltiple con tags colapsados",parameters:{docs:{description:{story:"Cuando hay muchos valores seleccionados, los tags se pueden colapsar en uno solo.\n\n- `collapseTags`: muestra un solo tag con el número de seleccionados\n- `collapseTagsTooltip`: al hacer hover se ven todos los tags\n- `maxCollapseTags`: cuántos tags mostrar antes de colapsar (por defecto 1)"}}},render:()=>({components:{GSelect:a,GConfigProvider:s},setup(){return{value:o(["react","vue","angular"]),options:[{value:"react",title:"React"},{value:"vue",title:"Vue"},{value:"angular",title:"Angular"},{value:"svelte",title:"Svelte"},{value:"solid",title:"Solid"}]}},template:`
      <g-config-provider>
        <g-select
          v-model="value"
          label="Frameworks (tags colapsados)"
          placeholder="Elige uno o más"
          :options="options"
          multiple
          collapse-tags
          collapse-tags-tooltip
          :max-collapse-tags="1"
          :filterable="true"
          style="width: 320px"
          help-text="Pasa el mouse sobre el tag +N para ver todos los seleccionados."
        />
      </g-config-provider>
    `})},h={name:"Opciones agrupadas",parameters:{docs:{description:{story:"Las opciones pueden organizarse en grupos. Cada grupo tiene un título y un array de opciones.\n\n- Estructura: `{ title: 'Nombre del grupo', options: [{ value, title }, ...] }`\n- Por defecto se usan las claves `title` y `options` (configurable con la prop `props`)\n- Útil para categorías, regiones, tipos, etc."}}},render:()=>({components:{GSelect:a,GConfigProvider:s},setup(){return{value:o(""),optionsWithGroups:[{title:"Frutas",options:[{value:"apple",title:"Manzana"},{value:"banana",title:"Plátano"},{value:"orange",title:"Naranja"}]},{title:"Verduras",options:[{value:"carrot",title:"Zanahoria"},{value:"lettuce",title:"Lechuga"},{value:"tomato",title:"Tomate"}]},{title:"Lácteos",options:[{value:"milk",title:"Leche"},{value:"cheese",title:"Queso"},{value:"yogurt",title:"Yogur"}]}]}},template:`
      <g-config-provider>
        <g-select
          v-model="value"
          label="Categoría"
          placeholder="Selecciona un producto"
          :options="optionsWithGroups"
          :filterable="true"
          :clearable="true"
          style="width: 320px"
          help-text="Las opciones están agrupadas por tipo (Frutas, Verduras, Lácteos)."
        />
      </g-config-provider>
    `})},x={name:"Agrupación + selección múltiple",parameters:{docs:{description:{story:"Combinación de opciones agrupadas con selección múltiple. Ideal para elegir varios ítems de distintas categorías."}}},render:()=>({components:{GSelect:a,GConfigProvider:s},setup(){return{value:o([]),optionsWithGroups:[{title:"Frontend",options:[{value:"html",title:"HTML"},{value:"css",title:"CSS"},{value:"js",title:"JavaScript"}]},{title:"Backend",options:[{value:"node",title:"Node.js"},{value:"python",title:"Python"},{value:"go",title:"Go"}]},{title:"Database",options:[{value:"mysql",title:"MySQL"},{value:"postgresql",title:"PostgreSQL"},{value:"mongodb",title:"MongoDB"}]},{title:"DevOps",options:[{value:"docker",title:"Docker"},{value:"kubernetes",title:"Kubernetes"},{value:"terraform",title:"Terraform"}]}]}},template:`
      <g-config-provider>
        <g-select
          v-model="value"
          label="Tecnologías"
          placeholder="Elige varias"
          :options="optionsWithGroups"
          multiple
          :filterable="true"
          :clearable="true"
          style="width: 320px"
          help-text="Opciones agrupadas con selección múltiple."
        />
      </g-config-provider>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  render: args => ({
    components: {
      GSelect,
      GConfigProvider
    },
    setup() {
      const value = ref('');
      return {
        value,
        args
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-select v-bind="args" v-model="value" />
        </div>
      </g-config-provider>
    \`
  })
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Personalizado de opciones con props',
  parameters: {
    docs: {
      description: {
        story: \` Este select es personalizado con opciones que incluyen íconos, descripciones y estados de deshabilitado.

- Muestra ícono y descripción
- Opciones deshabilitadas
- Búsqueda de opciones
- Largo de opciones personalizado\`
      }
    }
  },
  render: () => ({
    components: {
      GSelect,
      GConfigProvider
    },
    setup() {
      const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      const value = ref();
      const value2 = ref();
      const options = Array.from({
        length: 1000
      }).map((_, idx) => ({
        value: \`Option \${idx + 1}\`,
        title: \`\${initials[idx % 10]}\${idx} - option \${idx + 1}\`,
        description: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in enim elementum, sagittis velit eu, feugiat sem. Sed lacinia tincidunt lacinia.\`,
        icon: idx % 2 === 0 ? 'regular bolt' : 'regular user',
        disabled: idx % 3 === 0 && idx !== 0
      }));
      return {
        value,
        options,
        value2
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-row gap-4 items-center">
          <g-select
            v-model="value"
            :options="options"
            placeholder="Please select"
            :item-height="90"
            :filterable="true"
            prefix-icon="regular bolt"
            label="Label"
            style="width: 300px"
            :clearable="true"
            helpText="This is a help text"
          />
          <g-select
            v-model="value2"
            :options="options"
            placeholder="Please select"
            :item-height="90"
            :filterable="true"
            prefix-icon="regular bolt"
            label="Label"
            style="width: 300px"
            :clearable="true"
            helpText="This is a help text"
            :fit-input-width="440"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Búsqueda remota',
  parameters: {
    docs: {
      description: {
        story: \`Este select carga opciones de forma remota desde una API externa.

- Carga de opciones desde API
- Búsqueda de opciones
- Mapeo de propiedades\`
      }
    }
  },
  render: () => ({
    components: {
      GSelect,
      GConfigProvider
    },
    setup() {
      const value = ref();
      const loading = ref(false);
      const options = ref([]);

      // Mapeo de propiedades
      const mappingProps = {
        title: 'title',
        description: 'body',
        value: 'id'
      };
      const fetchOptions = async (query: string) => {
        try {
          loading.value = true;
          const response = await fetch(\`https://jsonplaceholder.typicode.com/posts?q=\${query}\`);
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
          return [];
        } finally {
          loading.value = false;
        }
      };
      const handleSearch = async (query: string) => {
        options.value = await fetchOptions(query);
      };
      return {
        value,
        options,
        handleSearch,
        loading,
        mappingProps
      };
    },
    template: \`
      <g-config-provider>
        <g-select
          v-model="value"
          placeholder="Buscar opciones"
          label="Buscar"
          :options="options"
          :loading="loading"
          :filterable="true"
          :props="mappingProps"
          :remote="true"
          :remote-method="handleSearch"
          prefix-icon="regular search"
          style="width: 300px"
          :item-height="90"
        />
      </g-config-provider>
    \`
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Selector de países',
  parameters: {
    docs: {
      description: {
        story: \`El select de países es un componente que permite al usuario seleccionar un país de una lista desplegable.

- Muestra la bandera y el nombre del país
- Búsqueda de opciones
- Opciones personalizadas
- Carga de datos desde API externa
- Estado de carga durante operaciones asíncronas
- Limpieza de selección
- Uso de value-key para cuando las opciones son objetos
- Uso de slots como prefix, default y selectedLabel\`
      }
    }
  },
  render: () => ({
    components: {
      GSelect,
      GConfigProvider
    },
    setup() {
      const value = ref();
      const loadingCountries = ref(false);
      const countries = ref<any[]>([]);
      const getCountries = async () => {
        try {
          loadingCountries.value = true;
          const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
          const data = await response.json();
          const countries = data.map(country => ({
            value: {
              id: country.cca2,
              image: country.flags.svg,
              countryName: country.name.common
            },
            title: country.name.common,
            country: \`\${country.name.common} \${country.idd.root ?? ''}\`
          }));
          return countries;
        } catch (error) {
          console.error('Error fetching data:', error);
          return [];
        } finally {
          loadingCountries.value = false;
        }
      };
      const onFocusSelect = async () => {
        countries.value = await getCountries();
      };
      return {
        value,
        countries,
        onFocusSelect,
        loadingCountries
      };
    },
    template: \`
      <g-config-provider>
        <g-select
          v-model="value"
          placeholder="Selecciona un país"
          label="Ciudad*"
          value-key="id"
          :options="countries"
          prefix-icon="regular globe"
          :item-height="70"
          :clearable="true"
          style="width: 320px"
          :loading="loadingCountries"
          :filterable="true"
          @focus="onFocusSelect"
        >
          <template #default="{ item }">
            <div class="flex items-center h-full w-full gap-xs">
              <img class="w-8 h-8 rounded-full object-cover" :src="item.value.image" />
              <span class="text-4 text-primary-txt font-medium text-ellipsis overflow-hidden">{{ item.country }}</span>
            </div>
          </template>
          <template #prefix v-if="value">
            <img class="w-5 h-5 rounded-full object-cover" :src="value.image" />
          </template>
          <template #selectedLabel="{ value }">
            <span class="text-3 text-everBlue-500">{{ value.countryName + ' es increible'  }}</span>
          </template>
        </g-select>
      </g-config-provider>
    \`
  })
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Con limpieza',
  parameters: {
    docs: {
      description: {
        story: \`El select con opción de limpieza permite al usuario borrar la selección actual.

- Muestra el ícono de limpieza al final del campo
- Permite borrar la selección actual\`
      }
    }
  },
  render: () => ({
    components: {
      GSelect,
      GConfigProvider
    },
    setup() {
      const value = ref();
      const options = [{
        value: '1',
        title: 'Opción 1'
      }, {
        value: '2',
        title: 'Opción 2'
      }, {
        value: '3',
        title: 'Opción 3'
      }, {
        value: '4',
        title: 'Opción 4'
      }, {
        value: '5',
        title: 'Opción 5'
      }, {
        value: '6',
        title: 'Opción 6'
      }, {
        value: '7',
        title: 'Opción 7'
      }];
      return {
        value,
        options
      };
    },
    template: \`
      <g-config-provider>
        <g-select
          v-model="value"
          placeholder="Selecciona una opción"
          label="Label"
          clearable
          style="width: 280px"
          :options="options"
        />
      </g-config-provider>
    \`
  })
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Estados',
  parameters: {
    docs: {
      description: {
        story: \`Los selects pueden tener diferentes estados que indican su comportamiento y apariencia:

- **Enabled**: Estado inicial del select, listo para seleccionar opciones
- **Completed**: Cuando el select ya contiene una opción seleccionada
- **Disabled**: Select deshabilitado, no permite interacción
- **Evento**: Select controlado por eventos externos (ej: modal)
- **Error**: Muestra estado de error con mensaje
- **Loading**: Estado de carga durante operaciones asíncronas\`
      }
    }
  },
  render: () => ({
    components: {
      GSelect,
      GConfigProvider
    },
    setup() {
      const states = reactive({
        enabled: '',
        completed: '2',
        disabled: 'Select deshabilitado',
        event: '',
        error: '',
        loading: ''
      });
      const options: OptionType[] = [{
        value: '1',
        title: 'Opción 1',
        description: 'Descripción de la opción 1',
        icon: 'regular bolt'
      }, {
        value: '2',
        title: 'Opción 2',
        description: 'Descripción de la opción 2',
        icon: 'regular user'
      }, {
        value: '3',
        title: 'Opción 3',
        description: 'Descripción de la opción 3',
        icon: 'regular bolt'
      }, {
        value: '4',
        title: 'Opción 4',
        description: 'Descripción de la opción 4',
        icon: 'regular user'
      }, {
        value: '5',
        title: 'Opción 5',
        description: 'Descripción de la opción 5',
        icon: 'regular bolt'
      }];
      function handleClick(e: MouseEvent) {
        alert('Click en el input');
      }
      return {
        states,
        handleClick,
        options
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-row gap-4 flex-wrap">
          <g-select 
            v-model="states.enabled"
            label="Enabled"
            help-text="select en estado inicial, listo para recibir datos"
            :options="options"
            style="width: calc(50% - 1rem)"
          />
          <g-select 
            v-model="states.completed"
            label="Completed"
            help-text="select que ya contiene información ingresada"
            :options="options"
            style="width: calc(50% - 1rem)"
          />
          <g-select 
            v-model="states.disabled"
            label="Disabled"
            disabled
            help-text="select deshabilitado, no permite ninguna interacción"
            :options="options"
            style="width: calc(50% - 1rem)"
          />
          <g-select 
            v-model="states.event"
            label="Evento"
            is-event
            @click="handleClick"
            help-text="Click para abrir modal de selección"
            :options="options"
            style="width: calc(50% - 1rem)"
          />
          <g-select 
            v-model="states.error"
            label="Error"
            message-error="Este campo contiene un error"
            help-text="Ejemplo de select con estado de error"
            :options="options"
            style="width: calc(50% - 1rem)"
          />
          <g-select 
            v-model="states.loading"
            label="Loading"
            loading
            help-text="Estado durante operaciones asíncronas"
            :options="options"
            style="width: calc(50% - 1rem)"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Selección múltiple',
  parameters: {
    docs: {
      description: {
        story: \`El select con selección múltiple permite elegir varios valores a la vez.

- Prop \\\`multiple\\\` para habilitar varios valores
- \\\`v-model\\\` debe ser un array
- Cada valor seleccionado se muestra como tag removible
- \\\`collapseTags\\\` colapsa los tags mostrando un contador
- \\\`multipleLimit\\\` limita la cantidad de opciones seleccionables (0 = sin límite)\`
      }
    }
  },
  render: () => ({
    components: {
      GSelect,
      GConfigProvider
    },
    setup() {
      const value = ref<string[]>([]);
      const options = [{
        value: 'react',
        title: 'React'
      }, {
        value: 'vue',
        title: 'Vue'
      }, {
        value: 'angular',
        title: 'Angular'
      }, {
        value: 'svelte',
        title: 'Svelte'
      }, {
        value: 'solid',
        title: 'Solid'
      }];
      return {
        value,
        options
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <g-select
            v-model="value"
            label="Frameworks (múltiple)"
            placeholder="Elige uno o más"
            :options="options"
            multiple
            :filterable="true"
            :clearable="true"
            style="width: 320px"
            help-text="Selecciona varios frameworks. Cada valor aparece como tag y puedes quitarlo con la X."
          />
          <p class="text-3 text-secondary-txt">Seleccionados: {{ value?.length ? value.join(', ') : 'ninguno' }}</p>
        </div>
      </g-config-provider>
    \`
  })
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Selección múltiple (estado empty)',
  parameters: {
    docs: {
      description: {
        story: \`Con \\\`empty-display\\\` los ítems seleccionados no se muestran como tags; el select se ve vacío pero el valor se mantiene.

- Útil para una vista más limpia o cuando los seleccionados se muestran en otro lugar
- El placeholder sigue visible cuando el input está vacío
- Requiere \\\`multiple\\\`\`
      }
    }
  },
  render: () => ({
    components: {
      GSelect,
      GConfigProvider
    },
    setup() {
      const value = ref<string[]>(['react', 'vue']);
      const options = [{
        value: 'react',
        title: 'React'
      }, {
        value: 'vue',
        title: 'Vue'
      }, {
        value: 'angular',
        title: 'Angular'
      }, {
        value: 'svelte',
        title: 'Svelte'
      }, {
        value: 'solid',
        title: 'Solid'
      }];
      return {
        value,
        options
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <g-select
            v-model="value"
            label="Frameworks"
            placeholder="Buscar..."
            :options="options"
            multiple
            empty-display
            :filterable="true"
            :clearable="true"
            style="width: 320px"
            help-text="Los seleccionados no se muestran como tags (valor: React, Vue)."
          />
          <p class="text-3 text-secondary-txt">Valor real: {{ value?.length ? value.join(', ') : 'ninguno' }}</p>
        </div>
      </g-config-provider>
    \`
  })
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Selección múltiple con tags colapsados',
  parameters: {
    docs: {
      description: {
        story: \`Cuando hay muchos valores seleccionados, los tags se pueden colapsar en uno solo.

- \\\`collapseTags\\\`: muestra un solo tag con el número de seleccionados
- \\\`collapseTagsTooltip\\\`: al hacer hover se ven todos los tags
- \\\`maxCollapseTags\\\`: cuántos tags mostrar antes de colapsar (por defecto 1)\`
      }
    }
  },
  render: () => ({
    components: {
      GSelect,
      GConfigProvider
    },
    setup() {
      const value = ref<string[]>(['react', 'vue', 'angular']);
      const options = [{
        value: 'react',
        title: 'React'
      }, {
        value: 'vue',
        title: 'Vue'
      }, {
        value: 'angular',
        title: 'Angular'
      }, {
        value: 'svelte',
        title: 'Svelte'
      }, {
        value: 'solid',
        title: 'Solid'
      }];
      return {
        value,
        options
      };
    },
    template: \`
      <g-config-provider>
        <g-select
          v-model="value"
          label="Frameworks (tags colapsados)"
          placeholder="Elige uno o más"
          :options="options"
          multiple
          collapse-tags
          collapse-tags-tooltip
          :max-collapse-tags="1"
          :filterable="true"
          style="width: 320px"
          help-text="Pasa el mouse sobre el tag +N para ver todos los seleccionados."
        />
      </g-config-provider>
    \`
  })
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Opciones agrupadas',
  parameters: {
    docs: {
      description: {
        story: \`Las opciones pueden organizarse en grupos. Cada grupo tiene un título y un array de opciones.

- Estructura: \\\`{ title: 'Nombre del grupo', options: [{ value, title }, ...] }\\\`
- Por defecto se usan las claves \\\`title\\\` y \\\`options\\\` (configurable con la prop \\\`props\\\`)
- Útil para categorías, regiones, tipos, etc.\`
      }
    }
  },
  render: () => ({
    components: {
      GSelect,
      GConfigProvider
    },
    setup() {
      const value = ref('');
      const optionsWithGroups = [{
        title: 'Frutas',
        options: [{
          value: 'apple',
          title: 'Manzana'
        }, {
          value: 'banana',
          title: 'Plátano'
        }, {
          value: 'orange',
          title: 'Naranja'
        }]
      }, {
        title: 'Verduras',
        options: [{
          value: 'carrot',
          title: 'Zanahoria'
        }, {
          value: 'lettuce',
          title: 'Lechuga'
        }, {
          value: 'tomato',
          title: 'Tomate'
        }]
      }, {
        title: 'Lácteos',
        options: [{
          value: 'milk',
          title: 'Leche'
        }, {
          value: 'cheese',
          title: 'Queso'
        }, {
          value: 'yogurt',
          title: 'Yogur'
        }]
      }];
      return {
        value,
        optionsWithGroups
      };
    },
    template: \`
      <g-config-provider>
        <g-select
          v-model="value"
          label="Categoría"
          placeholder="Selecciona un producto"
          :options="optionsWithGroups"
          :filterable="true"
          :clearable="true"
          style="width: 320px"
          help-text="Las opciones están agrupadas por tipo (Frutas, Verduras, Lácteos)."
        />
      </g-config-provider>
    \`
  })
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Agrupación + selección múltiple',
  parameters: {
    docs: {
      description: {
        story: \`Combinación de opciones agrupadas con selección múltiple. Ideal para elegir varios ítems de distintas categorías.\`
      }
    }
  },
  render: () => ({
    components: {
      GSelect,
      GConfigProvider
    },
    setup() {
      const value = ref<string[]>([]);
      const optionsWithGroups = [{
        title: 'Frontend',
        options: [{
          value: 'html',
          title: 'HTML'
        }, {
          value: 'css',
          title: 'CSS'
        }, {
          value: 'js',
          title: 'JavaScript'
        }]
      }, {
        title: 'Backend',
        options: [{
          value: 'node',
          title: 'Node.js'
        }, {
          value: 'python',
          title: 'Python'
        }, {
          value: 'go',
          title: 'Go'
        }]
      }, {
        title: 'Database',
        options: [{
          value: 'mysql',
          title: 'MySQL'
        }, {
          value: 'postgresql',
          title: 'PostgreSQL'
        }, {
          value: 'mongodb',
          title: 'MongoDB'
        }]
      }, {
        title: 'DevOps',
        options: [{
          value: 'docker',
          title: 'Docker'
        }, {
          value: 'kubernetes',
          title: 'Kubernetes'
        }, {
          value: 'terraform',
          title: 'Terraform'
        }]
      }];
      return {
        value,
        optionsWithGroups
      };
    },
    template: \`
      <g-config-provider>
        <g-select
          v-model="value"
          label="Tecnologías"
          placeholder="Elige varias"
          :options="optionsWithGroups"
          multiple
          :filterable="true"
          :clearable="true"
          style="width: 320px"
          help-text="Opciones agrupadas con selección múltiple."
        />
      </g-config-provider>
    \`
  })
}`,...x.parameters?.docs?.source}}};const pe=["Basic","withAllProps","remoteSearch","selectorCountries","clearable","states","multiple","multipleEmptyDisplay","multipleCollapseTags","grouped","groupedMultiple"];export{p as Basic,pe as __namedExportsOrder,g as clearable,ce as default,h as grouped,x as groupedMultiple,y as multiple,f as multipleCollapseTags,b as multipleEmptyDisplay,u as remoteSearch,m as selectorCountries,v as states,d as withAllProps};
