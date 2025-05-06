import { StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import dayjs from "dayjs";

// COMPONENTS
import GDatePicker from "../components/date-picker";

// CONFIG
import { GConfigProvider } from "../components/config-provider";

// DEPENDENCIES
import {
  version,
  peerDependencies,
} from "@flash-global66/g-date-picker/package.json";
import {
  generatePeerDepsList,
  generatePeerDepsInstalls,
} from "../helper/documentation-stories";

const meta = {
  title: "Form/Date Picker",
  component: GDatePicker,
  parameters: {
    docs: {
      description: {
        component: `

El componente Date Picker está diseñado para gestionar la selección de fechas en formularios con flexibilidad y precisión. Ofrece funcionalidades completas, incluyendo selección simple, rangos de fechas y distintos modos de visualización (año, mes, día o fecha y hora). Es ideal para aplicaciones que requieren una interacción intuitiva y detallada con calendarios, asegurando una experiencia de usuario fluida sin sacrificar potencia o personalización.
> Versión actual: ${version}

## Características
- Selección de fecha simple o en rangos
- Varios tipos de selectores: año, mes, fecha, fecha y hora
- Formato personalizable de visualización
- Soporte para deshabilitar fechas específicas
- Integración con Day.js para manejo de fechas
- Personalización completa del popup

### Instalación

\`\`\`bash
yarn add @flash-global66/g-date-picker
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GDatePicker } from '@flash-global66/g-date-picker'

# recomendado importar en los estilos globales
import '@flash-global66/g-date-picker/style.scss'

// Opcional: Extender dayjs con plugins necesarios
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localeData from 'dayjs/plugin/localeData'
dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat)
dayjs.extend(localeData)
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

\`\`\`ts
<script setup lang="ts">
import { GDatePicker } from '@flash-global66/g-date-picker';
</script>

<template>
  <g-date-picker    
    :picker="true"
    :clearable="true"
    endPlaceholder="Fecha fin"
    format="YYYY-MM-DD"
    label="Seleccione fecha"
    rangeSeparator="-"
    :shortcuts="shortcuts"
    startPlaceholder="Fecha inicio"
  />
</template>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    // 1. Enlace de Datos
    modelValue: {
      name: "v-model",
      description: "Valor seleccionado (v-model)",
      control: { type: undefined },
      table: {
        category: "Enlace de Datos",
        type: {
          summary:
            "string | Date | number | [string, string] | [Date, Date] | [number, number] | null",
        },
      },
    },

    // 2. Comportamiento e Interacción
    type: {
      description: "Tipo del selector",
      control: "select",
      options: [
        "date",
        "year",
        "month",
        "datetime",
        "daterange",
        "monthrange",
        "yearrange",
      ],
      table: {
        category: "Comportamiento e Interacción",
        type: { summary: "string" },
        defaultValue: { summary: "date" },
      },
    },
    clearable: {
      description: "Permite limpiar el valor seleccionado",
      control: "boolean",
      table: {
        category: "Comportamiento e Interacción",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    editable: {
      description: "Permite edición directa en el input",
      control: "boolean",
      table: {
        category: "Comportamiento e Interacción",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },

    // 3. Apariencia y Estilos
    prefixIcon: {
      name: "prefix-icon",
      description: "Ícono al inicio del input",
      control: "select",
      options: ["" /* ...generateIconOptions() */], // TODO: Add icon options if available
      table: {
        category: "Apariencia y Estilos",
        type: { summary: "string | Component" },
        defaultValue: { summary: "" },
      },
    },
    popperClass: {
      name: "popper-class",
      description: "Clase CSS personalizada para el popup",
      control: "text",
      table: {
        category: "Apariencia y Estilos",
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    placement: {
      description: "Posición del popup",
      control: "select",
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
      ],
      table: {
        category: "Apariencia y Estilos",
        type: { summary: "string" },
        defaultValue: { summary: "bottom" },
      },
    },

    // 4. Formato de Fecha
    format: {
      description: "Formato de visualización en el input",
      control: "text",
      table: {
        category: "Formato de Fecha",
        type: { summary: "string" },
        defaultValue: { summary: "YYYY-MM-DD" },
      },
    },
    valueFormat: {
      name: "value-format",
      description: "Formato del valor vinculado (v-model)",
      control: "text",
      table: {
        category: "Formato de Fecha",
        type: { summary: "string" },
      },
    },
    dateFormat: {
      name: "date-format",
      description: "Formato de fecha en el popup",
      control: "text",
      table: {
        category: "Formato de Fecha",
        type: { summary: "string" },
      },
    },
    timeFormat: {
      name: "time-format",
      description: "Formato de hora en el popup (si aplica)",
      control: "text",
      table: {
        category: "Formato de Fecha",
        type: { summary: "string" },
      },
    },

    // 5. Etiquetas y Texto
    label: {
      description: "Label en modo simple",
      control: "text",
      table: {
        category: "Etiquetas y Texto",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    startPlaceholder: {
      description: "Placeholder para la fecha de inicio en modo rango",
      control: "text",
      table: {
        category: "Etiquetas y Texto",
        type: { summary: "string" },
      },
    },
    endPlaceholder: {
      description: "Placeholder para la fecha de fin en modo rango",
      control: "text",
      table: {
        category: "Etiquetas y Texto",
        type: { summary: "string" },
      },
    },
    rangeSeparator: {
      description: "Separador para el rango de fechas",
      control: "text",
      table: {
        category: "Etiquetas y Texto",
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
    },
    helpText: {
      description: "Texto de apoyo",
      control: "text",
      table: {
        category: "Etiquetas y Texto",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },

    // 6. Validación y Restricciones
    disabled: {
      description: "Deshabilita el componente",
      control: "boolean",
      table: {
        category: "Validación y Restricciones",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readonly: {
      description: "Hace el componente de solo lectura",
      control: "boolean",
      table: {
        category: "Validación y Restricciones",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabledDate: {
      name: "disabled-date",
      description: "Función para deshabilitar fechas específicas",
      control: "function",
      table: {
        category: "Validación y Restricciones",
        type: { summary: "(date: Date) => boolean" },
      },
    },

    // 7. Métodos Expuestos
    focus: {
      description: "Enfoca el input del date picker",
      table: {
        category: "Métodos Expuestos",
        type: { summary: "() => void" },
      },
    },
    blur: {
      description: "Quita el foco del input",
      table: {
        category: "Métodos Expuestos",
        type: { summary: "() => void" },
      },
    },
    handleOpen: {
      description: "Abre el popup del date picker",
      table: {
        category: "Métodos Expuestos",
        type: { summary: "() => void" },
      },
    },
    handleClose: {
      description: "Cierra el popup del date picker",
      table: {
        category: "Métodos Expuestos",
        type: { summary: "() => void" },
      },
    },

    // 8. Eventos
    onChange: {
      description: "Se dispara cuando el usuario confirma un cambio",
      table: {
        category: "Eventos",
        type: {
          summary:
            "(value: Date | string | number | [Date | null, Date | null] | [string | null, string | null] | [number | null, number | null] | null) => void",
        },
      },
    },
    onBlur: {
      description: "Se dispara cuando el input pierde el foco",
      table: {
        category: "Eventos",
        type: { summary: "(event: FocusEvent) => void" },
      },
    },
    onFocus: {
      description: "Se dispara cuando el input recibe el foco",
      table: {
        category: "Eventos",
        type: { summary: "(event: FocusEvent) => void" },
      },
    },
    onVisibleChange: {
      description: "Se dispara cuando la visibilidad del popup cambia",
      table: {
        category: "Eventos",
        type: { summary: "(visible: boolean) => void" },
      },
    },
    onClear: {
      description: "Se dispara cuando se limpia el valor",
      table: {
        category: "Eventos",
        type: { summary: "() => void" },
      },
    },
  },
  args: {
    label: "Seleccione fecha",
    format: "YYYY-MM-DD",
    startPlaceholder: "Fecha inicio",
    endPlaceholder: "Fecha fin",
    rangeSeparator: "-",
    clearable: true,
    shortcuts: [
      {
        text: "Hoy",
        value: new Date(),
      },
      {
        text: "Mañana",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24);
          return date;
        },
      },
      {
        text: "Una semana atrás",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
          return date;
        },
      },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof GDatePicker>;

export const Basic: Story = {
  name: "Básico",
  render: (args) => ({
    components: { GDatePicker, GConfigProvider },
    setup() {
      const value = ref("");
      return { value, args };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-date-picker v-bind="args" v-model="value"/>
        </div>

      </g-config-provider>
    `,
  }),
};

export const Range: Story = {
  name: "Modo Rango",
  parameters: {
    docs: {
      description: {
        story: `Selector de rango de fechas que permite seleccionar un intervalo de días.

- Selección de fecha inicial y final
- Placeholders personalizados para cada input
- Separador personalizable`,
      },
    },
  },
  render: () => ({
    components: { GDatePicker, GConfigProvider },
    setup() {
      const value = ref([]);
      return { value };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            type="daterange"
            start-placeholder="Fecha inicio"
            end-placeholder="Fecha fin"
            label="Seleccione rango"
            range-separator="|"
            format="YYYY-MM-DD"
          />
          <div>Rango seleccionado: {{ value }}</div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const DateTime: Story = {
  name: "Fecha y Hora",
  parameters: {
    docs: {
      description: {
        story: `Selector de fecha y hora combinado.`,
      },
    },
  },
  render: () => ({
    components: { GDatePicker, GConfigProvider },
    setup() {
      const value = ref(new Date());
      return { value };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            type="datetime"
            label="Seleccione fecha y hora"
            format="YYYY-MM-DD HH:mm:ss"
          />
          <div>Fecha y hora seleccionada: {{ value }}</div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const DisabledDates: Story = {
  name: "Fechas Deshabilitadas",
  parameters: {
    docs: {
      description: {
        story: `Ejemplo de cómo deshabilitar fechas específicas utilizando la prop \`disabled-date\`.`,
      },
    },
  },
  render: () => ({
    components: { GDatePicker, GConfigProvider },
    setup() {
      const value = ref("");
      const disabledDate = (time: Date) => {
        return time.getTime() > Date.now(); // Deshabilitar fechas futuras
      };
      return { value, disabledDate };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            label="Seleccione fecha"
            :disabled-date="disabledDate"
          />
          <div class="text-sm text-gray-500">
            <p>Las fechas futuras están deshabilitadas.</p>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const DifferentTypes: Story = {
  name: "Diferentes Tipos",
  parameters: {
    docs: {
      description: {
        story: `Muestra los diferentes tipos de selectores de fecha disponibles.`,
      },
    },
  },
  render: () => ({
    components: { GDatePicker, GConfigProvider },
    setup() {
      const dateValue = ref("");
      const yearValue = ref("");
      const monthValue = ref("");
      const dateRangeValue = ref([]);
      const monthRangeValue = ref([]);
      const yearRangeValue = ref([]);
      const dateTimeValue = ref(new Date());

      return {
        dateValue,
        yearValue,
        monthValue,
        dateRangeValue,
        monthRangeValue,
        yearRangeValue,
        dateTimeValue,
      };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-date-picker v-model="dateValue" label="Date" type="date"/>
          <g-date-picker v-model="yearValue" label="Year" type="year" />
          <g-date-picker v-model="monthValue" label="Month" type="month" />
          <g-date-picker v-model="dateRangeValue" label="Date Range" type="daterange" />
          <g-date-picker v-model="monthRangeValue" label="Month Range" type="monthrange" />
          <g-date-picker v-model="yearRangeValue" label="Year Range" type="yearrange" />
          <g-date-picker v-model="dateTimeValue" label="DateTime" type="datetime" format="YYYY-MM-DD HH:mm:ss" messageError="Agregar fecha"/>
        </div>
      </g-config-provider>
    `,
  }),
};
