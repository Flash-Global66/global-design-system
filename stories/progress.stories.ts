// external imports
import { StoryObj } from "@storybook/vue3";

// components
import { GProgress } from "@flash-global66/g-progress/index.ts";

// Config Provider
import { GConfigProvider } from "@flash-global66/g-config-provider/index.ts";

// Version
import {
  version,
  peerDependencies,
} from "@flash-global66/g-progress/package.json";

// Helpers
import {
  generatePeerDepsList,
  generatePeerDepsInstalls,
} from "../helper/documentation-stories";

const meta = {
  title: "Data/Progress",
  component: GProgress,
  parameters: {
    docs: {
      description: {
        component: `\`GProgress\` - Componente para indicar el progreso de cargas y descargas de datos.


> Versión actual: ${version}

**Características principales:**

- Permite mostrar una interfaz clara e intuitiva de cara al usuario, para indicar el estado de ciertas operaciones asíncronas.

El componente Progress muestra una barra de progreso de operaciones asíncronas (por ejemplo, descarga de archivo a traves de WebSocket), pudiendo controlar tanto la visualización del componente (el tipo) como el porcentaje de avance y el estado de la misma.

Los tipos son:
- line: muestra una barra de carga horizontal.
- circle: muestra una barra de carga circular.
- dashboard: muestra una barra de carga circular, con dirección de carga invertido respecto a la 'circle'.

Los estados son los siguientes:
- Primary: muestra la barra con el tono everBlue-500 y el porcentaje de avance de la barra
- Success: muestra la barra con el tono green-700 y el icono check
- Warning: muestra la barra con el tono yellow-700 y el icono warning
- Error: muestra la barra con el tono red-700 y el icono de error

Los iconos del componente se utilizan directamente con GFontIcon, por lo que se agrega como dependencia.

Cuenta ademas con una prop loading, para cambiar el icono al correspondiente de carga.

Si no se tiene un proceso con porcentajes, se puede setear la prop 'indeterminate' para mostrar una barra con animación de carga.

**Instalación**

\`\`\`bash
yarn add @flash-global66/g-progress
\`\`\`

🪝 **Dependencias**

Este componente requiere:

${generatePeerDepsList(peerDependencies)}

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

**Importación básica**

\`\`\`typescript
import { GProgress } from '@flash-global66/g-progress'
\`\`\`

**Ejemplo de uso**

\`\`\`ts
<script setup lang="ts">
import { GProgress } from '@flash-global66/g-progress'

const reactivePercentage = ref<number>(0)
const loading = ref<boolean>(true)
</script>

<template>
// Barra de progreso lineal con porcentaje determinado
  <g-progress
    type="line"
    status="primary"
    :percentage="reactivePercentage"
  />

// Barra de progreso circular con progreso indeterminado
  <g-progress
    type="circle"
    status="primary"
    loading="true"
    indeterminate="true"
  />
</template>
\`\`\`

`,
      },
    },
  },
  argTypes: {
    // 1. Estado y Control
    percentage: {
      name: "percentage",
      description:
        "Porcentaje completado o largo de barra completada con la propiedad indeterminate. Siempre debe estar, a menos que se quiera mostrar la barra vacía.",
      control: { type: "range", min: 0, max: 100 },
      table: {
        category: "Estado y Control",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    type: {
      description: "Tipo de barra de progreso.",
      control: "select",
      options: ["line", "circle", "dashboard"],
      table: {
        category: "Estado y Control",
        type: { summary: "string" },
        defaultValue: { summary: "line" },
      },
    },
    status: {
      description: "Estado actual de la barra de progreso.",
      control: "select",
      options: ["primary", "success", "warning", "error"],
      table: {
        category: "Estado y Control",
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    loading: {
      name: "loading",
      description: "Indica si debe mostrarse la carga.",
      control: "boolean",
      table: {
        category: "Estado y Control",
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    indeterminate: {
      name: "indeterminate",
      description: "Establece el progreso como indeterminado.",
      control: "boolean",
      table: {
        category: "Estado y Control",
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    format: {
      description: "Formato de texto personalizado.",
      control: "string",
      table: {
        category: "Estado y Control",
        type: {
          summary: "Function (percentage: number) => string",
        },
        defaultValue: { summary: null },
      },
    },
    "show-text": {
      name: "show-text",
      description: "Mostrar el porcentaje",
      control: "boolean",
      table: {
        category: "Estado y Control",
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
    // 2. Estilo
    "stroke-width": {
      name: "stroke-width",
      description: "Ancho de la barra de progreso.",
      control: "number",
      table: {
        category: "Estilo",
        type: { summary: "number" },
        defaultValue: { summary: 6 },
      },
    },
    "text-inside": {
      name: "text-inside",
      description:
        "Colocar el porcentaje dentro de la barra de progreso (solo para type='line').",
      control: "boolean",
      table: {
        category: "Estilo",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    "stroke-linecap": {
      description: "Terminacion del cierre del estilo circulo/dashboard.",
      control: "select",
      options: ["butt", "round", "square"],
      table: {
        category: "Estilo",
        type: { summary: "string" },
        defaultValue: { summary: "round" },
      },
    },
    duration: {
      name: "duration",
      description:
        "Controla la duracion de la animación del efecto indeterminado o progreso con rayas.",
      control: "number",
      table: {
        category: "Estilo",
        type: { summary: "number" },
        defaultValue: { summary: "3" },
      },
    },
    width: {
      name: "width",
      description:
        "Ancho del canvas que contiene la barra de progreso circular",
      control: "number",
      table: {
        category: "Estado y Control",
        type: { summary: "number" },
        defaultValue: { summary: "126" },
      },
    },
  },
  args: {
    percentage: 75,
    type: "line",
    "stroke-width": 6,
  },
};
export default meta;
type Story = StoryObj<typeof GProgress>;

export const Basic: Story = {
  name: "Básico",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo básico de barra de progreso lineal.",
      },
    },
  },
  render: (args) => ({
    components: { GProgress, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-md">
          <g-progress v-bind="args" />
          <g-progress v-bind="args" status="warning" />
          <g-progress v-bind="args" status="success" percentage="100" />
          <g-progress v-bind="args" status="error" percentage="100" />
        </div>
      </g-config-provider>
    `,
  }),
};

export const Circle: Story = {
  name: "Progreso circular / dashboard",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo básico de barra de progreso circular.",
      },
    },
  },
  render: (args) => ({
    components: { GProgress, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-md">
          <h3>Circle</h3>
          <div class="flex gap-md">
            <g-progress v-bind="args" type="circle" />
            <g-progress v-bind="args" type="circle" status="warning" />
            <g-progress v-bind="args" type="circle" status="success" percentage="100" />
            <g-progress v-bind="args" type="circle" status="error" percentage="100" />
          </div>
          <hr />
          <h3>Dashboard</h3>
          <div class="flex gap-md">
            <g-progress v-bind="args" type="dashboard" />
            <g-progress v-bind="args" type="dashboard" status="warning" />
            <g-progress v-bind="args" type="dashboard" status="success" percentage="100" />
            <g-progress v-bind="args" type="dashboard" status="error" percentage="100" />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const Ideterminate: Story = {
  name: "Progreso indeterminado",
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo básico de barra de progreso con porcentaje indeterminado.",
      },
    },
  },
  render: (args) => ({
    components: { GProgress, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-md">
          <g-progress indeterminate percentage="25" />
          <g-progress indeterminate status="warning" percentage="50" />
          <g-progress indeterminate status="success" percentage="75" />
          <g-progress indeterminate status="error" percentage="100" />
        </div>
      </g-config-provider>
    `,
  }),
};

export const Loading: Story = {
  name: "Progreso en carga",
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo básico de uso de barra de progreso con icono de loader.",
      },
    },
  },
  render: (args) => ({
    components: { GProgress, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-md">
          <g-progress percentage="50" indeterminate loading />
        </div>
      </g-config-provider>
    `,
  }),
};
