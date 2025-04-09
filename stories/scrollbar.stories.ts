import type { Meta, StoryObj } from "@storybook/vue3";

import { GScrollbar } from "../components/scrollbar/index.ts";
import { GConfigProvider } from "../components/config-provider";
import { ref } from "vue";

const meta: Meta<typeof GScrollbar> = {
  title: "Navigation/Scrollbar",
  component: GScrollbar,
  parameters: {
    docs: {
      description: {
        component:
          "Componente personalizado de scrollbar que proporciona una barra de desplazamiento personalizable.",
      },
    },
  },
  argTypes: {
    height: {
      description: "Altura del contenedor del scrollbar",
      control: "text",
      table: {
        type: { summary: "string | number" },
      },
    },
    maxHeight: {
      description: "Altura máxima del contenedor del scrollbar",
      control: "text",
      table: {
        type: { summary: "string | number" },
      },
    },
    native: {
      description: "Usa la barra de desplazamiento nativa del navegador",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    wrapStyle: {
      description: "Estilos personalizados para el contenedor envolvente",
      control: "object",
      table: {
        type: { summary: "StyleValue" },
      },
    },
    wrapClass: {
      description: "Clase personalizada para el contenedor envolvente",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    viewClass: {
      description: "Clase personalizada para la vista del contenido",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    noresize: {
      description: "No responder a cambios de tamaño del contenedor",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    tag: {
      description: "Elemento HTML usado para el contenedor de la vista",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "div" },
      },
    },
    always: {
      description: "Mostrar siempre la barra de desplazamiento",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    minSize: {
      description: "Tamaño mínimo de la barra de desplazamiento",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "20" },
      },
    },
    role: {
      description: "Atributo ARIA role",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    ariaLabel: {
      description: "Etiqueta ARIA para accesibilidad",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    ariaOrientation: {
      description: "Orientación ARIA (horizontal/vertical)",
      control: "select",
      options: ["horizontal", "vertical", undefined],
      table: {
        type: { summary: "string" },
      },
    },
    onScroll: {
      description: "Se emite cuando ocurre el evento de scroll",
      table: {
        type: {
          summary: "{ scrollTop: number, scrollLeft: number }",
        },
        category: "events",
      },
    },
    default: {
      description: "Contenido dentro del scrollbar",
      table: {
        type: { summary: "slot" },
        category: "slots",
      },
    },
  },
  args: {
    height: "",
    maxHeight: "",
    native: false,
    noresize: false,
    tag: "div",
    always: false,
    minSize: 20,
  },
};

export default meta;
type Story = StoryObj<typeof GScrollbar>;

export const Primary: Story = {
  render: (args) => ({
    components: { GScrollbar, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 300px">
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Contenido de ejemplo para el scrollbar
          </div>
        </g-scrollbar>
      </g-config-provider>
    `,
  }),
  args: {},
};

export const NativeScrollbar: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Usa la barra de desplazamiento nativa del navegador en lugar de la personalizada.",
      },
    },
  },
  render: (args) => ({
    components: { GScrollbar, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 300px" native>
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Contenido con scrollbar nativo
          </div>
        </g-scrollbar>
      </g-config-provider>
    `,
  }),
  args: {
    native: true,
  },
};

export const HorizontalScroll: Story = {
  parameters: {
    docs: {
      description: {
        story: "Ejemplo de scroll horizontal con contenido ancho.",
      },
    },
  },
  render: (args) => ({
    components: { GScrollbar, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 100px; width: 300px">
          <div style="width: 800px; white-space: nowrap;">
            <div v-for="item in 20" :key="item" style="display: inline-block; padding: 12px;">
              Item {{ item }}
            </div>
          </div>
        </g-scrollbar>
      </g-config-provider>
    `,
  }),
  args: {},
};

export const AlwaysVisible: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Muestra siempre las barras de desplazamiento incluso cuando no son necesarias.",
      },
    },
  },
  render: (args) => ({
    components: { GScrollbar, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-scrollbar v-bind="args" style="height: 300px" always>
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Barras siempre visibles
          </div>
        </g-scrollbar>
      </g-config-provider>
    `,
  }),
  args: {
    always: true,
  },
};

export const CustomHeight: Story = {
  parameters: {
    docs: {
      description: {
        story: "Ejemplo con altura personalizada usando la prop height.",
      },
    },
  },
  render: (args) => ({
    components: { GScrollbar, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-scrollbar v-bind="args" height="200px">
          <div v-for="item in 20" :key="item" style="padding: 12px 0">
            {{ item }} - Contenido en contenedor de 200px de alto
          </div>
        </g-scrollbar>
      </g-config-provider>
    `,
  }),
  args: {
    height: "200px",
  },
};
