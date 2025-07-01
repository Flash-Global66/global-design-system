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
      description: "Habilita el dropdown integrado",
      control: "boolean",
      table: {
        category: "Dropdown",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    dropdownActions: {
      description: "Acciones del dropdown (array de objetos { title: string, command: any })",
      control: "object",
      table: {
        category: "Dropdown",
        type: { summary: "Array<object>" },
      },
    },
    dropdownHideOnClick: {
      description: "Oculta el dropdown al hacer clic en un elemento",
      control: "boolean",
      table: {
        category: "Dropdown",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    dropdownTrigger: {
      description: "Cómo se activa el dropdown",
      control: "select",
      options: ["hover", "click", "contextmenu"],
      table: {
        category: "Dropdown",
        type: { summary: "string" },
        defaultValue: { summary: "hover" },
      },
    },
    dropdownPlacement: {
      description: "Posición del dropdown",
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
      },
    },
    dropdownShowTimeout: {
      description: "Retraso para mostrar (ms)",
      control: "number",
      table: {
        category: "Dropdown",
        type: { summary: "number" },
        defaultValue: { summary: "150" },
      },
    },
    dropdownHideTimeout: {
      description: "Retraso para ocultar (ms)",
      control: "number",
      table: {
        category: "Dropdown",
        type: { summary: "number" },
        defaultValue: { summary: "150" },
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
    dropdownActions: [],
    dropdownHideOnClick: true,
    dropdownTrigger: "hover",
    dropdownPlacement: "bottom",
    dropdownShowTimeout: 150,
    dropdownHideTimeout: 150,
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
                  icon-left="solid check"
                  icon-right="solid check"
                />
              </div>
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
    dropdown-trigger="click"
    dropdown-placement="bottom-start"
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
    dropdown-trigger="contextmenu"
    dropdown-placement="bottom-start"
    :dropdown-actions="[
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
          
          <!-- Ejemplo selector de monedas -->
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
              dropdown-trigger="click"
              dropdown-placement="bottom-start"
              @command="handleCurrencyCommand"
            >
              <template #prefix>
                <span style="margin-right: 4px;">{{ selectedCurrency.flag }}</span>
              </template>

              <template #suffix>
                <span style="margin-left: 4px; transform: rotate(90deg); font-size: 12px;">›</span>
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
              dropdown-trigger="contextmenu"
              dropdown-placement="bottom-start"
              :dropdown-actions="[
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

