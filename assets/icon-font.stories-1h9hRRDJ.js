import{r as m,c as v}from"./vue.esm-bundler-BQ5MY6wY.js";import{f as l}from"./index-CqyTLt6u.js";import{G as d}from"./ConfigProvider-C-g_q7t3.js";import{I as t}from"./index-CFVVBxWq.js";import{G as b}from"./index-D7AK-r3u.js";import{r as w}from"./index-BMEZWhUo.js";import{G as x}from"./index-cIML9NYP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index.es-DRG_Ro19.js";import"./index-CHFUNSwa.js";import"./index-wqKiBS4Z.js";import"./error-Cq9Fpw4b.js";import"./index-CbegoHtD.js";import"./index-D3vNJlXT.js";import"./index-CdyrOdXF.js";import"./index-B9ZeYHC7.js";import"./_initCloneObject-CqmxWRfM.js";import"./_arrayPush-Dd5JSu8W.js";import"./castArray-iDdAUYc3.js";import"./index-CeZjlggi.js";import"./event-BB_Ol6Sd.js";import"./index-Zf8ggd1d.js";import"./index-BTG2Cvn4.js";import"./index-Bw_FBbTr.js";const s=()=>{const o=[];return Object.entries(t).forEach(([r,c])=>{c.forEach(a=>{o.push(`${r} ${a}`)})}),o},V={title:"Basic/IconFont",component:l,parameters:{docs:{description:{component:`
## Descripción
Componente wrapper de <a href="https://fontawesome.com/search" target="_blank">Font Awesome</a> 6 Pro que permite usar iconos de forma sencilla y tipada.

## Uso
Para usar un icono necesitas especificar dos partes:
1. El peso o estilo del icono (solid, regular, light, etc)
2. El nombre del icono

Ejemplo: \`name="regular home"\`

## Pesos disponibles
- **solid**: Iconos sólidos (rellenos)
- **regular**: Iconos con trazo medio  
- **light**: Iconos con trazo fino
- **brands**: Logos de marcas
- **duotone**: Iconos de dos tonos

## Agregar nuevos iconos
1. Identifica el icono en <a href="https://fontawesome.com/search" target="_blank">Font Awesome</a>
2. Agrega la importación en la carpeta src del componente según el peso
3. Registra el nombre en el archivo iconSets.ts

## Autocompletado
El editor te mostrará las opciones disponibles gracias al tipado estricto.
        `}}},argTypes:{name:{description:"Nombre completo del icono (peso + nombre)",control:"select",options:s(),table:{type:{summary:"string"},defaultValue:{summary:"solid user"}}}},args:{name:"solid user"}},i={name:"Uso básico",render:o=>({components:{GIconFont:l,GConfigProvider:d},setup(){return{args:o}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-icon-font v-bind="args" class="text-8 text-grey-700"/>
        </div>
      </g-config-provider>
    `})},n={name:"Galería de iconos",parameters:{docs:{description:{story:"Galería completa de íconos disponibles en el sistema. Haz clic en cualquier ícono para copiar su nombre. 📋"}}},render:()=>({components:{GIconFont:l,GConfigProvider:d,GSegmented:b,GInput:w,GButton:x},setup(){const o=m("regular"),r=m(""),c=v(()=>{if(!r.value.trim())return t;const e=r.value.toLowerCase().trim();return Object.entries(t).reduce((p,[u,f])=>(p[u]=f.filter(h=>h.toLowerCase().includes(e)),p),{})}),a=()=>{r.value=""},g=Object.keys(t).map(e=>({label:e.charAt(0).toUpperCase()+e.slice(1),value:e}));return{iconSets:t,selectedWeight:o,weightOptions:g,copyIconName:e=>{navigator.clipboard.writeText(e).then(()=>{console.log("Nombre del icono copiado al portapapeles")}).catch(()=>{alert("No se pudo copiar el nombre del icono")})},searchTerm:r,clearSearch:a,filteredIcons:c}},template:`
      <g-config-provider>
        <div class="space-y-8">
          <g-segmented
            block
            v-model="selectedWeight"
            :options="weightOptions"
            class="mb-8"
          />

          <div class="flex items-center gap-2">
            <g-input
              v-model="searchTerm"
              placeholder="Buscar icono..."
              class="w-full max-w-md"
              size="small"
            >
              <template #prefix>
                <g-icon-font name="solid magnifying-glass" size="18px" />
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


          <div v-for="(icons, weight) in filteredIcons" :key="weight">
            <div v-if="selectedWeight === weight">
              <h3 class="text-lg font-medium mb-4 capitalize">{{ weight }}</h3>
              <div class="grid grid-cols-6 gap-4">
                <div
                  v-for="icon in icons"
                  :key="icon"
                  class="flex bg-white flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-50 cursor-pointer text-grey-600"
                  @click="copyIconName(\`\${weight} \${icon}\`)"
                >
                  <g-icon-font :name="\`\${weight} \${icon}\`" class="text-6 mb-2"/>
                  <span class="text-xs text-center">{{ icon }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const options: string[] = [];
  Object.entries(ICON_SETS).forEach(([weight, icons]) => {
    icons.forEach(icon => {
      options.push(\`\${weight} \${icon}\`);
    });
  });
  return options;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Uso básico',
  render: args => ({
    components: {
      GIconFont,
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
          <g-icon-font v-bind="args" class="text-8 text-grey-700"/>
        </div>
      </g-config-provider>
    \`
  })
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Galería de iconos',
  parameters: {
    docs: {
      description: {
        story: 'Galería completa de íconos disponibles en el sistema. Haz clic en cualquier ícono para copiar su nombre. 📋'
      }
    }
  },
  render: () => ({
    components: {
      GIconFont,
      GConfigProvider,
      GSegmented,
      GInput,
      GButton
    },
    setup() {
      const selectedWeight = ref('regular');
      const searchTerm = ref('');
      const filteredIcons = computed(() => {
        if (!searchTerm.value.trim()) {
          return ICON_SETS;
        }
        const searchTermLower = searchTerm.value.toLowerCase().trim();
        return Object.entries(ICON_SETS).reduce((filtered, [weight, icons]) => {
          filtered[weight] = icons.filter(icon => icon.toLowerCase().includes(searchTermLower));
          return filtered;
        }, {} as typeof ICON_SETS);
      });
      const clearSearch = () => {
        searchTerm.value = '';
      };
      const weightOptions = Object.keys(ICON_SETS).map(weight => ({
        label: weight.charAt(0).toUpperCase() + weight.slice(1),
        value: weight
      }));
      const copyIconName = (iconName: string) => {
        navigator.clipboard.writeText(iconName).then(() => {
          console.log('Nombre del icono copiado al portapapeles');
        }).catch(() => {
          alert('No se pudo copiar el nombre del icono');
        });
      };
      return {
        iconSets: ICON_SETS,
        selectedWeight,
        weightOptions,
        copyIconName,
        searchTerm,
        clearSearch,
        filteredIcons
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-8">
          <g-segmented
            block
            v-model="selectedWeight"
            :options="weightOptions"
            class="mb-8"
          />

          <div class="flex items-center gap-2">
            <g-input
              v-model="searchTerm"
              placeholder="Buscar icono..."
              class="w-full max-w-md"
              size="small"
            >
              <template #prefix>
                <g-icon-font name="solid magnifying-glass" size="18px" />
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


          <div v-for="(icons, weight) in filteredIcons" :key="weight">
            <div v-if="selectedWeight === weight">
              <h3 class="text-lg font-medium mb-4 capitalize">{{ weight }}</h3>
              <div class="grid grid-cols-6 gap-4">
                <div
                  v-for="icon in icons"
                  :key="icon"
                  class="flex bg-white flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-50 cursor-pointer text-grey-600"
                  @click="copyIconName(\\\`\\\${weight} \\\${icon}\\\`)"
                >
                  <g-icon-font :name="\\\`\\\${weight} \\\${icon}\\\`" class="text-6 mb-2"/>
                  <span class="text-xs text-center">{{ icon }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...n.parameters?.docs?.source}}};const J=["generateIconOptions","Primary","Galería"];export{n as Galería,i as Primary,J as __namedExportsOrder,V as default,s as generateIconOptions};
