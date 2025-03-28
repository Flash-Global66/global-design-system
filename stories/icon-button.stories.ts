import { StoryFn, Meta } from "@storybook/vue3";
import { fn } from "@storybook/test";
import { GIconButton } from "../components/icon-button/src";

// TYPES
import { generateIconOptions } from "./icon-font.stories";

// CONSTANTS
import { action } from "@storybook/addon-actions";

export default {
  title: "Basic/Icon Button",
  component: GIconButton,
  parameters: {
    docs: {
      description: {
        component: `
### Uso básico
Ejemplo de uso básico:
\`\`\` vue
<g-icon-button variant="grey" icon="solid check"/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    // Current Props - Variant & Style
    variant: {
      control: "select",
      options: ["grey", "black", "blue"],
      description: "Variante visual del icono botón",
      table: {
        type: { summary: "string" },
        category: "Principales",
      },
    },
    size: {
      control: "select",
      options: ["medium", "small"],
      description: "Variante tamaño del icono botón",
      table: {
        type: { summary: "string" },
        category: "Principales",
      },
    },
    border: {
      control: "boolean",
      description: "Deshabilita el icono botón",
      table: {
        type: { summary: "boolean" },
        category: "Principales",
      },
    },

    // Iconos
    icon: {
      control: "select",
      options: generateIconOptions(),
      description:
        "Icono renderizado utilizando el componente IconFont.\n\nVer [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.\n\nEjemplo 'solid check''",
      table: {
        type: { summary: "Iconos" },
        defaultValue: { summary: "" },
      },
    },
    autofocus: {
      control: "boolean",
      description:
        "El icono botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",
      table: {
        category: "Comportamiento",
        type: { summary: "boolean" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita el icono botón",
      table: {
        category: "Comportamiento",
        type: { summary: "boolean" },
      },
    },
    download: {
      control: "text",
      description:
        "Especifica que el elemento se descargará cuando el usuario haga clic en el enlace.\n\n ⚠️ **Nota:**  Solo funciona si la propiedad href está definida.",
      table: {
        defaultValue: { summary: "undefined" },
        category: "Enlaces",
        type: { summary: "string" },
      },
    },

    // Link Props
    href: {
      control: "text",
      description: "Convierte el icono botón en un enlace",
      table: {
        category: "Enlaces",
        type: { summary: "string" },
      },
    },
    target: {
      control: "text",
      description: "Atributo target del enlace",
      table: {
        category: "Enlaces",
        type: { summary: "string" },
      },
    },

    // Events
    onClick: {
      description:
        "Se dispara al hacer clic en el icono botón. No se dispara si el icono botón está deshabilitado.",
      table: {
        category: "Events",
        type: { summary: "(event: Event) => void" },
      },
    },
    onMousedown: {
      description:
        "Se dispara cuando se presiona el icono botón del mouse. No se dispara si el icono botón está deshabilitado.",
      table: {
        category: "Events",
        type: { summary: "(event: Event) => void" },
      },
    },
  },
} as Meta<typeof GIconButton>;

// Base template
const Template: StoryFn<typeof GIconButton> = (args) => ({
  components: { GIconButton },
  setup() {
    return {
      args,
      onClick: fn(action("click")),
      onMousedown: fn(action("mousedown")),
    };
  },
  template: `
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  `,
});

// Current API Stories
export const grey = Template.bind({});
grey.args = {
  variant: "grey",
};

export const black = Template.bind({});
black.args = {
  variant: "black",
};

export const blue = Template.bind({});
blue.args = {
  variant: "blue",
};
