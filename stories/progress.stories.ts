// external imports
import { StoryObj } from "@storybook/vue3";

// components
import { GProgress } from "@flash-global66/g-progress/index.ts";

// Config Provider
import { GConfigProvider } from "@flash-global66/g-config-provider/index.ts";

const meta = {
  title: "Data/Progress",
  component: GProgress,
  parameters: {
    docs: {
      description: {
        component: `✨ \`GProgress\` - Componente para indicar el progreso de cargas y descargas de datos.

> Este componente usa la versión \`2.9.7\` de Element Plus.

**Características principales:**

- Permite mostrar una interfaz clara e intuitiva de cara al usuario, para indicar el estado de ciertas operaciones asíncronas

🚀 **Instalación**

\`\`\`bash
yarn add @flash-global66/g-progress
\`\`\`

🪝 **Dependencias**

Este componente requiere:

> - @flash-global66/g-icon-font
> - element-plus
> - vue

📥 **Importación básica**

\`\`\`typescript
import { GProgress } from '@flash-global66/g-progress'
\`\`\`
`,
      },
    },
  },
  argTypes: {
    // 1. Estado y Control
    percentage: {
      name: "percentage",
      description: "Porcentaje completado.",
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
    "stroke-width": {
      name: "stroke-width",
      description: "Ancho de la barra de progreso.",
      control: "number",
      table: {
        category: "Estado y Control",
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
        category: "Estado y Control",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    status: {
      description: "Estado actual de la barra de progreso.",
      control: "select",
      options: ["success", "exception", "warning", ""],
      table: {
        category: "Estado y Control",
        type: { summary: "string" },
        defaultValue: { summary: "" },
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
    // 2. Estilo
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
    color: {
      description:
        "Color de fondo de la barra de progreso. Sobreescribe la propiedad 'status'.",
      control: { type: "color", presetColors: ["red", "green"] },
      table: {
        category: "Estilo",
        type: {
          summary: "string",
        },
        defaultValue: { summary: "" },
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
    color: "",
    type: "line",
    "stroke-width": 6,
  },
};
export default meta;
type Story = StoryObj<typeof GProgress>;

export const Basic: Story = {
  name: "Default",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo básico de barra de progreso.",
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
        <g-progress v-bind="args" />
      </g-config-provider>
    `,
  }),
};