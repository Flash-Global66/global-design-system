import { StoryObj } from "@storybook/vue3";
import { reactive, ref } from "vue";
import { GChip, ChipInstance } from "@flash-global66/g-chip/index.ts";
import { GDropdownMenu, GDropdownItem } from "@flash-global66/g-dropdown";
import { GConfigProvider } from "../components/config-provider";
import { generateIconOptions, generatePeerDepsInstalls, generatePeerDepsList } from "../helper/documentation-stories";

import { version, peerDependencies } from "@flash-global66/g-chip/package.json";

const meta = {
  title: "Data/Chip",
  component: GChip,
  parameters: {
    docs: {
      description: {
        component: `
El componente Chip es un elemento interactivo compacto que representa una entrada, atributo o acción. Es ideal para filtros, tags, categorías, estados y selección múltiple.

> Versión actual: ${version}

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
${generatePeerDepsList(peerDependencies)}

> Revisar la documentación de cada dependencia para mas información.

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<script setup lang="ts">
import { GChip } from '@flash-global66/g-chip'
</script>

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

`,
      },
    },
  },
  argTypes: {
    size: {
      description: "Tamaño del chip: md (30px) incluye más padding, sm (26px) es más compacto",
      control: "select",
      options: ["sm", "md"],
      table: {
        category: "Apariencia",
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
    },
    type: {
      description: "Tipo que controla el border radius: primary (redondeado completo), secondary (esquinas suaves)",
      control: "select",
      options: ["primary", "secondary"],
      table: {
        category: "Apariencia",
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    variant: {
      description: "Variante visual: solid (fondo gris para tags), outline (solo borde para filtros)",
      control: "select",
      options: ["solid", "outline"],
      table: {
        category: "Apariencia",
        type: { summary: "string" },
        defaultValue: { summary: "solid" },
      },
    },
    iconLeft: {
      name: "icon-left",
      description: "Ícono a la izquierda",
      control: "select",
      options: ["", ...generateIconOptions()],
      table: {
        category: "Iconos",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    iconRight: {
      name: "icon-right",
      description: "Ícono a la derecha",
      control: "select",
      options: ["", ...generateIconOptions()],
      table: {
        category: "Iconos",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    text: {
      description: "Texto a mostrar en el chip",
      control: "text",
      table: {
        category: "Contenido",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    closable: {
      description: "Habilita el botón de cerrar",
      control: "boolean",
      table: {
        category: "Comportamiento",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    selected: {
      description: "Estado seleccionado: para outline cambia a fondo azul, para solid mantiene apariencia",
      control: "boolean",
      table: {
        category: "Estado",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Estado deshabilitado: evita interacciones y aplica estilos visuales de disabled",
      control: "boolean",
      table: {
        category: "Estado",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    dropdownEnabled: {
      description: "Habilita el dropdown integrado. Automáticamente muestra un icono chevron-down en el sufijo cuando está habilitado. Para configurar el dropdown, usa las props estándar de GDropdown.",
      control: "boolean",
      table: {
        category: "Dropdown",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    actions: {
      description: "Acciones del dropdown (array de objetos { title: string, command: any }). Para más opciones de configuración, consulta la documentación de GDropdown.",
      control: "object",
      table: {
        category: "Dropdown",
        type: { summary: "Array<object>" },
      },
    },
    trigger: {
      description: "Cómo se activa el dropdown: 'hover', 'click', 'contextmenu'. Para más opciones, consulta la documentación de GDropdown.",
      control: "select",
      options: ["hover", "click", "contextmenu"],
      table: {
        category: "Dropdown",
        type: { summary: "string" },
        defaultValue: { summary: "hover" },
      },
    },
    placement: {
      description: "Posición del dropdown. Para todas las opciones de posicionamiento disponibles, consulta la documentación de GDropdown.",
      control: "select",
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
      ],
      table: {
        category: "Dropdown",
        type: { summary: "string" },
        defaultValue: { summary: "bottom" },
        description: "**Nota:** Todas las demás props de GDropdown se pasan directamente al componente. Para configuración avanzada (triggerKeys, popperOptions, hideOnClick, timeouts, etc.), consulta la documentación de GDropdown."
      },
    },
    close: {
      description: "Evento emitido al cerrar",
      action: "close",
      table: {
        category: "Eventos",
        type: { summary: "Event", detail: "() => void" },
        defaultValue: { summary: "() => void" },
      },
      control: false,
    },
    click: {
      description: "Evento emitido al hacer clic",
      action: "click",
      table: {
        category: "Eventos",
        type: { summary: "Event", detail: "() => void" },
        defaultValue: { summary: "() => void" },
      },
      control: false,
    },
    command: {
      description: "Evento emitido al seleccionar un elemento del dropdown",
      action: "command",
      table: {
        category: "Eventos",
        type: { summary: "any", detail: "(command: any) => void" },
        defaultValue: { summary: "() => void" },
      },
      control: false,
    },
    prefix: {
      description: "slot para el inicio del chip",
      table: {
        category: "Slots",
        type: { summary: "slot" },
      },
      control: false,
    },
    default: {
      description: "slot para el contenido del chip",
      table: {
        category: "Slots",
        type: { summary: "slot" },
      },
      control: false,
    },
    suffix: {
      description: "slot para el final del chip",
      table: {
        category: "Slots",
        type: { summary: "slot" },
      },
      control: false,
    },
    dropdown: {
      description: "slot para el contenido personalizado del dropdown",
      table: {
        category: "Slots",
        type: { summary: "slot" },
      },
      control: false,
    },
  },
  args: {
    text: "Chip",
    size: "md",
    type: "primary",
    variant: "solid",
    iconLeft: "",
    iconRight: "",
    closable: false,
    selected: false,
    disabled: false,
    dropdownEnabled: false,
    actions: [],
    trigger: "hover",
    placement: "bottom",
  },
};
export default meta;
type Story = StoryObj<ChipInstance>;

export const Basic: Story = {
  name: "Básico",
  render: (args) => ({
    components: { GChip, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-chip v-bind="args" />
        </div>
      </g-config-provider>
    `,
  }),
};

export const AllCombinations: Story = {
  name: "Combinaciones de variantes y tamaños",
  render: () => ({
    components: { GChip, GConfigProvider },
    setup() {
      const state = reactive({
        types: ["primary", "secondary"],
        sizes: ["sm", "md"],
        variants: ["solid", "outline"],
      });
      return { state };
    },
    template: `
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
    `,
  }),
};

export const WithIcons: Story = {
  name: "Chips con iconos",
  render: () => ({
    components: { GChip, GConfigProvider },
    setup() {
      const iconExamples = [
        { iconLeft: "solid check", text: "Verificado" },
        { iconRight: "regular chevron-down", text: "Dropdown" },
        { iconLeft: "solid user", iconRight: "solid check", text: "Usuario activo" },
        { iconLeft: "regular heart", text: "Favorito", variant: "outline" },
        { iconLeft: "regular bell", text: "Notificación", type: "secondary" },
        { iconRight: "solid arrow-right", text: "Siguiente", variant: "outline", type: "secondary" },
      ]
      
      return { iconExamples }
    },
    template: `
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
    `,
  }),
};

export const ClosableDynamic: Story = {
  name: "Chips eliminables",
  render: () => ({
    components: { GChip, GConfigProvider },
    setup() {
      const initChips = [
        { text: "Chip 1", type: "primary", variant: "solid" },
        { text: "Chip 2", type: "secondary", variant: "solid" },
        { text: "Chip 3", type: "primary", variant: "outline" },
        { text: "Chip 4", type: "secondary", variant: "outline" },
      ];
      const dynamicChips = reactive([...initChips]);
      const handleClose = (chip: string) => {
        if (dynamicChips.length === 1) {
          dynamicChips.splice(-1, 1, ...initChips);
          return;
        }
        dynamicChips.splice(
          dynamicChips.findIndex((item) => item.text === chip),
          1
        );
      };
      return { dynamicChips, handleClose };
    },
    template: `
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
    `,
  }),
};

export const TypesWithAutomaticRadius: Story = {
  name: "Tipos y variantes (separados)",
  render: () => ({
    components: { GChip, GConfigProvider },
    setup() {
      return {};
    },
    template: `
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
    `,
  }),
};

// Tipos para el sistema de filtros
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

export const SelectableFilters: Story = {
  name: 'Sistema de filtros en cascada',
  parameters: {
    docs: {
      source: {
        code: `<script setup lang="ts">
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
</script>

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
</template>`,
      },
    }
  },
  render: () => ({
    components: { GChip, GConfigProvider },
    setup() {
      const mainFilters = reactive<MainFilter[]>([
        { 
          id: 'year', 
          text: 'Año', 
          selected: false,
          options: ['2015', '2016', '2017', '2018', '2019', '2020']
        },
        { 
          id: 'category', 
          text: 'Categoría', 
          selected: false,
          options: ['Importaciones', 'Exportaciones', 'Balanza comercial']
        },
        { 
          id: 'country', 
          text: 'País', 
          selected: false,
          options: ['Chile', 'Argentina', 'Brasil', 'Colombia', 'Perú']
        },
        { 
          id: 'currency', 
          text: 'Moneda', 
          selected: false,
          options: ['USD', 'EUR', 'CLP', 'ARS']
        }
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
        const exists = appliedFilters.value.find(af => 
          af.category === category && af.value === value
        )
        
        if (!exists) {
          appliedFilters.value.push({
            id: `${category}-${value}`,
            category,
            value,
            text: `${categoryText}: ${value}`
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

      
      return { 
        mainFilters, 
        appliedFilters, 
        toggleMainFilter, 
        addAppliedFilter, 
        removeAppliedFilter,
        clearAllFilters
      }
    },
    template: `
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
    `
  })
}

export const WithIntegratedDropdown: Story = {
  name: "Chip con dropdown integrado",
  parameters: {
    docs: {
      source: {
        code: `<script setup lang="ts">
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
</script>

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
</template>`,
      },
    },
  },
  render: () => ({
    components: { GChip, GConfigProvider, GDropdownMenu, GDropdownItem },
    setup() {
      const currencies = reactive([
        { title: "Pesos colombianos", command: "COP", flag: "🇨🇴" },
        { title: "Dólar estadounidense", command: "USD", flag: "🇺🇸" },
        { title: "Pesos argentinos", command: "ARS", flag: "🇦🇷" },
        { title: "Pesos chilenos", command: "CLP", flag: "🇨🇱" },
        { title: "Euro", command: "EUR", flag: "🇪🇺" },
        { title: "Real brasileño", command: "BRL", flag: "🇧🇷" },
      ]);

      const selectedCurrency = ref(currencies[0]);

      const handleCurrencyCommand = (command: string) => {
        selectedCurrency.value = currencies.find((c) => c.command === command) || currencies[0];
      };

      return { currencies, selectedCurrency, handleCurrencyCommand };
    },
    template: `
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
    `,
  }),
};