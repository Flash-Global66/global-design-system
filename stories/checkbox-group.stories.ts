import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

// COMPONENTS
import {
  GCheckbox,
  GCheckboxGroup,
  CheckboxGroupProps,
} from "@flash-global66/g-checkbox/index.ts";

// CONFIG
import { GConfigProvider } from "../components/config-provider";

// VERSION
import {
  version,
  peerDependencies,
} from "@flash-global66/g-checkbox/package.json";

// HELPERS
import {
  generatePeerDepsList,
  generatePeerDepsInstalls,
} from "../helper/documentation-stories";

const meta: Meta<typeof GCheckboxGroup> = {
  title: "Form/Checkbox/Group",
  component: GCheckboxGroup,
  parameters: {
    docs: {
      description: {
        component: `
El componente GCheckboxGroup es un grupo de checkboxes que permite selección múltiple con validación y configuración visual. 

> Versión actual: ${version}

## Características

La función principal del componente es la de agrupar un conjunto de Checkboxes y vincularlos a un mismo estado de referencia, y es por este motivo que el componente hereda todas las características del componente Checkbox, pudiendo personalizarse en mayor o menor medida de acuerdo a como se declaren las opciones del grupo.

Todas las propiedades que se declaran en el componente aplican a todos los checkboxes incluidos en el grupo. Si se desea utilizar un estado por defecto en un elemento del grupo en particular, se puede realizar de las dos maneras en las que se pueden declarar los elementos del mismo:

- Si el componente toma las opciones a través de la propiedad \`options\`, estas se deben declarar como un array de objetos con -como mínimo-, los atributos \`value\` y \`label\`. También se pueden agregar props que indiquen un estado por defecto para uno o mas elementos, simplemente agregando un atributo de tipo booleano, con el nombre de la prop que queremos declarar para ese elemento (por ejemplo: \`checked\`, \`disabled\` o \`indeterminate\`).
- Si el componente toma las opciones a partir de slots con checkboxes individuales, se deben declarar al menos las propiedades de label y value de cada checkbox, y se pueden indicar estados y caracteristicas individuales a través de las props, tal como se indica en la documentación de estos componentes.

> Se puede encontrar un ejemplo práctico en la sección de <a href="#uso-basico">Uso Básico</a>

## Instalación

\`\`\`bash
yarn add @flash-global66/g-checkbox
\`\`\`

## Importación del componente

\`\`\`typescript
# importar donde se va a utilizar
import { GCheckboxGroup } from '@flash-global66/g-checkbox'

# recomendado importar en los estilos globales
@use '@flash-global66/g-checkbox/styles.scss' as *;
\`\`\`

## Dependencias

Este componente requiere:

${generatePeerDepsList(peerDependencies)}

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

<h2 id="uso-basico">Uso básico</h2>

**Ejemplo con slots personalizados:**

\`\`\`html
<g-checkbox-group 
  v-bind="args"
  v-model="selectedValues"
>
  <g-checkbox label="Importaciones" value="Value A" />
  <g-checkbox label="Inversiones" value="Value B" />
</g-checkbox-group>
\`\`\`

**Ejemplo con opciones predefinidas:**

\`\`\`javascript
const selectedValues = ref([]);
const options = [
  { value: "Value A", label: "Importaciones" },
  { value: "Value B", label: "Inversiones" },
  { value: "Value C", label: "Exportaciones", checked: true },
  { value: "Value D", label: "Transferencias", disabled: true },
  { value: "Value E", label: "Otros", indeterminate: true },
];

const checkboxGroupProps = {
    disabled: false,
    layout: "horizontal",
    ariaLabel: "Grupo de opciones",
}
\`\`\`

\`\`\`html
<g-checkbox-group
  v-bind="checkboxGroupProps"
  v-model="selectedValues"
  :options="options"
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    // Estados
    disabled: {
      description: "Deshabilita todo el grupo",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Estados",
      },
    },

    // Principales
    options: {
      description: "Array de opciones para construir el grupo de checkboxes",
      control: "object",
      table: {
        type: {
          summary: "Option[]",
          detail: `
            type Option = {
  value: CheckboxGroupValueType
  label?: CheckboxGroupValueType
  disabled?: boolean
  checked?: boolean
}
          `,
        },
        defaultValue: { summary: "[]" },
        category: "Principales",
      },
    },
    modelValue: {
      description: "Valores seleccionados (v-model)",
      control: "object",
      table: {
        type: {
          summary: "CheckboxGroupValueType",
          detail: "Array<string | number | boolean>",
        },
        defaultValue: { summary: "[]" },
        category: "Principales",
      },
    },

    // Validación
    min: {
      description: "Mínimo de checkboxes seleccionados",
      control: { type: "number", min: 0 },
      table: {
        type: { summary: "number" },
        category: "Validación",
      },
    },
    max: {
      description: "Máximo de checkboxes seleccionados",
      control: { type: "number", min: 1 },
      table: {
        type: { summary: "number" },
        category: "Validación",
      },
    },
    validateEvent: {
      description: "Activa validación de formulario",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Validación",
      },
    },

    // Apariencia
    layout: {
      description: "Diseño del grupo",
      control: "select",
      options: ["horizontal", "vertical"],
      table: {
        type: { summary: "layoutType", detail: "'horizontal' | 'vertical'" },
        defaultValue: { summary: "horizontal" },
        category: "Apariencia",
      },
    },
    border: {
      description: "Indica si debe mostrarse el checkbox con borde",
      control: "boolean",
      table: {
        category: "Apariencia",
        type: { summary: "boolean" },
      },
    },
    invert: {
      description:
        "Indica si debe mostrarse el checkbox con el label y el check input invertidos",
      control: "boolean",
      table: {
        category: "Apariencia",
        type: { summary: "boolean" },
      },
    },

    // Configuración avanzada
    tag: {
      description: "Elemento HTML contenedor",
      control: "select",
      options: ["div", "span", "fieldset"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "div" },
        category: "Apariencia",
      },
    },

    // Accesibilidad
    ariaLabel: {
      description: "Etiqueta ARIA para el grupo",
      control: "text",
      table: {
        type: { summary: "string" },
        category: "Accesibilidad",
      },
    },

    // Eventos
    "onUpdate:modelValue": {
      description: "Se emite al actualizar los valores",
      table: {
        category: "Eventos",
        type: {
          summary: "CheckboxGroupValueType",
          detail: "Array<string | number>",
        },
      },
    },
    onChange: {
      description: "Se emite al cambiar la selección",
      table: {
        category: "Eventos",
        type: {
          summary: "CheckboxGroupValueType",
          detail: "Array<string | number>",
        },
      },
    },

    // Slots
    default: {
      description: "Slot para contenido personalizado de cada checkbox",
      table: {
        category: "Slots",
        type: {
          summary: "slot",
        },
      },
    },
  },
  args: {
    options: [],
    modelValue: [],
    disabled: false,
    layout: "horizontal",
    tag: "div",
    min: undefined,
    max: undefined,
    validateEvent: true,
    ariaLabel: "Grupo de opciones",
  } as Partial<CheckboxGroupProps>,
};
export default meta;

type Story = StoryObj<typeof GCheckboxGroup>;

const Template: Story = {
  render: (args) => ({
    components: { GCheckboxGroup, GCheckbox, GConfigProvider },
    setup() {
      const selectedValues = ref([]);
      const options = [
        { value: "Value A", label: "Importaciones" },
        { value: "Value B", label: "Inversiones" },
        { value: "Value C", label: "Exportaciones", checked: true },
        { value: "Value D", label: "Transferencias", disabled: true },
        { value: "Value E", label: "Otros" },
      ];
      return { args, selectedValues, options };
    },
    template: `
    <g-config-provider>
      <g-checkbox-group 
        v-bind="args"
        v-model="selectedValues"
        :options="options"
      />
      <div class="text-3 text-primary-txt font-medium mt-5">
        Valores seleccionados: {{ selectedValues }}
      </div>
    </g-config-provider>
    `,
  }),
};

export const Basic: Story = {
  ...Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Grupo de checkboxes básico. Muestra la funcionalidad principal de selección múltiple con valores en array. Los checkboxes se muestran en línea por defecto.",
      },
    },
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
    modelValue: ["Value A"],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Grupo completo deshabilitado. Todos los checkboxes están no interactivos. Útil para estados donde la selección no está disponible temporalmente.",
      },
    },
  },
};

export const WithLimits: Story = {
  ...Template,
  args: {
    min: 1,
    max: 2,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Grupo con restricciones de selección. Permite definir mínimo (1) y máximo (2) de opciones seleccionables. Muestra validación automática al exceder los límites.",
      },
    },
  },
};

export const VerticalLayout: Story = {
  ...Template,
  args: {
    layout: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Checkboxes apilados verticalmente. Controlado mediante la propiedad `layout: vertical`. Ideal para formularios con espacio vertical limitado.",
      },
    },
  },
};

export const InvertedStyle: Story = {
  ...Template,
  args: {
    layout: "vertical",
    invert: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo del componente con checkboxes con elementos invertidos.",
      },
    },
  },
};

export const BorderedStyle: Story = {
  ...Template,
  args: {
    layout: "vertical",
    border: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo del componente con checkboxes con bordes.",
      },
    },
  },
};

export const InvertedBorderedStyle: Story = {
  ...Template,
  args: {
    layout: "vertical",
    border: true,
    invert: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo del componente con checkboxes con borde y elementos invertidos.",
      },
    },
  },
};
