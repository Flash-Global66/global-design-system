import { StoryObj } from "@storybook/vue3";
import { ref } from "vue";

// COMPONENTS
import { GTimePicker } from "../components/time-picker";

// CONFIG
import { GConfigProvider } from "../components/config-provider";

// DEPENDENCIES
import {
  version,
  peerDependencies,
} from "@flash-global66/g-inline/package.json";
import {
  generatePeerDepsList,
  generateIconOptions,
  generatePeerDepsInstalls,
} from "../helper/documentation-stories";

const meta = {
  title: "Form/Time Picker",
  component: GTimePicker,
  parameters: {
    docs: {
      description: {
        component: `
El componente Time Picker está diseñado para gestionar la selección de tiempos en formularios de manera eficiente y moderna. Ofrece funcionalidades completas, permitiendo tanto la selección de horas individuales como rangos de tiempo, lo que lo hace ideal para aplicaciones que requieren precisión y flexibilidad en la gestión de horarios. Este componente garantiza una experiencia intuitiva y fluida, adaptándose a necesidades diversas sin sacrificar claridad o usabilidad.

> Versión actual: ${version}

## Características
- Selección de hora simple o en rangos
- Formato personalizable de visualización
- Validación integrada de horas
- Estado de error con feedback visual
- Integración con Day.js para manejo de tiempos
- Soporte para deshabilitar horas/minutos/segundos específicos
- Personalización completa del popup

### Instalación

\`\`\`bash
yarn add @flash-global66/g-time-picker
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GTimePicker } from '@flash-global66/g-time-picker'

# recomendado importar en los estilos globales
import '@flash-global66/g-time-picker/style.scss'

// Opcional: Extender dayjs con plugins necesarios
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
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
import { GTimePicker } from '@flash-global66/g-time-picker';
</script>

<template>
  <g-time-picker
    :picker="true"
    :clearable="true"
    endPlaceholder="Hora fin"
    format="HH:mm:ss"
    label="Seleccione hora"
    startPlaceholder="Hora inicio"
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
        type: { summary: "string | Date | [string, string] | [Date, Date]" },
      },
    },

    // 2. Comportamiento e Interacción
    isRange: {
      name: "is-range",
      description: "Activa el modo de selección de rango de horas",
      control: "boolean",
      table: {
        category: "Comportamiento e Interacción",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
    arrowControl: {
      name: "arrow-control",
      description: "Permite cambiar hora con flechas",
      control: "boolean",
      table: {
        category: "Comportamiento e Interacción",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // 3. Apariencia y Estilos
    prefixIcon: {
      name: "prefix-icon",
      description: "Ícono al inicio del input",
      control: "select",
      options: ["", ...generateIconOptions()],
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

    // 4. Formato de Tiempo
    format: {
      description: "Formato de visualización en el input",
      control: "text",
      table: {
        category: "Formato de Tiempo",
        type: { summary: "string" },
        defaultValue: { summary: "HH:mm:ss" },
      },
    },
    valueFormat: {
      name: "value-format",
      description: "Formato del valor vinculado (v-model)",
      control: "text",
      table: {
        category: "Formato de Tiempo",
        type: { summary: "string" },
      },
    },
    dateFormat: {
      name: "date-format",
      description: "Formato de fecha en el popup (si aplica)",
      control: "text",
      table: {
        category: "Formato de Tiempo",
        type: { summary: "string" },
      },
    },
    timeFormat: {
      name: "time-format",
      description: "Formato de hora en el popup",
      control: "text",
      table: {
        category: "Formato de Tiempo",
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
    helpText: {
      description: "help texy en modo simple",
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
    disabledHours: {
      name: "disabled-hours",
      description: "Horas deshabilitadas para selección",
      control: "object",
      table: {
        category: "Validación y Restricciones",
        type: { summary: "number[] | (role: string) => number[]" },
      },
    },
    disabledMinutes: {
      name: "disabled-minutes",
      description: "Minutos deshabilitados para selección",
      control: "object",
      table: {
        category: "Validación y Restricciones",
        type: {
          summary: "number[] | (hour: number, role: string) => number[]",
        },
      },
    },
    disabledSeconds: {
      name: "disabled-seconds",
      description: "Segundos deshabilitados para selección",
      control: "object",
      table: {
        category: "Validación y Restricciones",
        type: {
          summary:
            "number[] | (hour: number, minute: number, role: string) => number[]",
        },
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
      description: "Enfoca el input del time picker",
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
      description: "Abre el popup del time picker",
      table: {
        category: "Métodos Expuestos",
        type: { summary: "() => void" },
      },
    },
    handleClose: {
      description: "Cierra el popup del time picker",
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
            "(value: Date | string | [Date, Date] | [string, string]) => void",
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
    onCalendarChange: {
      description: "Se dispara cuando cambia el calendario (en modo rango)",
      table: {
        category: "Eventos",
        type: { summary: "(value: [Date, Date | null]) => void" },
      },
    },
    onPanelChange: {
      description: "Se dispara cuando cambia el panel de hora/fecha",
      table: {
        category: "Eventos",
        type: {
          summary:
            "(value: [Dayjs, Dayjs], mode: string, view: string) => void",
        },
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
    label: "Seleccione hora",
    format: "HH:mm:ss",
    startPlaceholder: "Hora inicio",
    endPlaceholder: "Hora fin",
    clearable: true,
  },
};
export default meta;
type Story = StoryObj<typeof GTimePicker>;

export const Basic: Story = {
  name: "Básico",
  render: (args) => ({
    components: { GTimePicker, GConfigProvider },
    setup() {
      const value = ref("");

      return { value, args };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-time-picker v-bind="args" v-model="value" />
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
        story: `Selector de rango de horas que permite seleccionar un intervalo de tiempo.

- Selección de hora inicial y final
- Validación automática (hora final no puede ser menor a inicial)
- Placeholders personalizados para cada input
- Separador personalizable`,
      },
    },
  },
  render: () => ({
    components: { GTimePicker, GConfigProvider },
    setup() {
      const value = ref([]);

      return { value };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-time-picker
            v-model="value"
            is-range
            start-placeholder="Hora inicio"
            end-placeholder="Hora fin"
            label="Seleccione rango"
            range-separator="|"
            format="HH:mm:ss"
          />
          <div>Rango seleccionado: {{ value }}</div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const DisabledTimes: Story = {
  name: "Horas Deshabilitadas",
  parameters: {
    docs: {
      description: {
        story: `Ejemplo de cómo deshabilitar horas, minutos y segundos específicos.

- Deshabilita horas entre las 0 y 8
- Deshabilita minutos pares
- Deshabilita segundos mayores a 30`,
      },
    },
  },
  render: () => ({
    components: { GTimePicker, GConfigProvider },
    setup() {
      const value = ref("");

      const disabledHours = () => {
        return Array.from({ length: 9 }, (_, i) => i); // 0-8
      };

      const disabledMinutes = (selectedHour: number) => {
        if (selectedHour === 12) {
          return Array.from({ length: 60 }, (_, i) =>
            i % 2 === 0 ? i : null
          ).filter(Boolean);
        }
        return [];
      };

      const disabledSeconds = (
        selectedHour: number,
        selectedMinute: number
      ) => {
        if (selectedHour === 12 && selectedMinute === 30) {
          return Array.from({ length: 60 }, (_, i) =>
            i > 30 ? i : null
          ).filter(Boolean);
        }
        return [];
      };

      return { value, disabledHours, disabledMinutes, disabledSeconds };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div class="grid grid-cols-2 gap-4">
            <g-time-picker
              v-model="value"
              label="Seleccione hora"
              :disabled-hours="disabledHours"
              :disabled-minutes="disabledMinutes"
              :disabled-seconds="disabledSeconds"
            />
            <div class="text-sm text-gray-500">
              <p>Horas deshabilitadas: 0:00 - 8:59</p>
              <p>Minutos deshabilitados a las 12:XX (solo pares)</p>
              <p>Segundos deshabilitados a las 12:30:XX (solo mayores a 30)</p>
            </div>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const CustomFormat: Story = {
  name: "Formato Personalizado",
  parameters: {
    docs: {
      description: {
        story: `Ejemplo de uso con formatos personalizados.

- Formato de 12 horas con AM/PM
- Valor en formato ISO8601
- Label que coincide con el formato`,
      },
    },
  },
  render: () => ({
    components: { GTimePicker, GConfigProvider },
    setup() {
      const value = ref("");
      const format = "hh:mm A";
      const valueFormat = "HH:mm:ss";

      return { value, format, valueFormat };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div class="grid grid-cols-2 gap-4">
            <g-time-picker
              v-model="value"
              :format="format"
              :value-format="valueFormat"
              label="Ej: 02:30 PM"
            />
            <div>
              <p>Valor mostrado: {{ value }}</p>
            </div>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const States: Story = {
  name: "Estados",
  parameters: {
    docs: {
      description: {
        story: `Diferentes estados del Time Picker.

- Normal: Estado por defecto
- Deshabilitado: No permite interacción
- Solo lectura: Muestra el valor pero no permite cambios
- Con error: Muestra estado de error
- Tamaños: Pequeño, mediano y grande`,
      },
    },
  },
  render: () => ({
    components: { GTimePicker, GConfigProvider },
    setup() {
      const time = ref("");
      const timeDisabled = ref("");
      const timeHelpText = ref("");

      return {
        time,
        timeDisabled,
        timeHelpText,
      };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-time-picker
            class="my-2"
            v-model="time"
            label="Normal"
          />
          
          <g-time-picker
            v-model="timeDisabled"
            label="Deshabilitado"
            disabled
          />
          
          <g-time-picker
            v-model="timeHelpText"
            label="Texto con error"
            messageError="Debe ser mayor de 18 años"
          />
        </div>
      </g-config-provider>
    `,
  }),
};
