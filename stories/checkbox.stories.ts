import { Meta, StoryFn, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

// COMPONENTS
import { GCheckbox, CheckboxProps } from "@flash-global66/g-checkbox/index.ts";

// CONFIG
import { GConfigProvider } from "../components/config-provider";

const meta: Meta<typeof GCheckbox> = {
  title: "Form/Checkbox/Single",
  component: GCheckbox,
  parameters: {
    docs: {
      description: {
        component: `
El componente \`GCheckbox\` es un elemento de selección que permite activar o desactivar una opción.

### Instalación
\`\`\`bash
yarn add @flash-global66/g-checkbox
\`\`\`

### Importación

\`\`\`typescript
import { GCheckbox } from '@flash-global66/g-checkbox'
import '@flash-global66/g-checkbox/checkbox.styles.scss'
\`\`\`

### Ejemplo básico:
\`\`\`html
<g-checkbox v-model="checked" label="Acepto los términos" />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    // Principales
    modelValue: {
      description: "Valor del modelo (v-model)",
      table: {
        type: { summary: "number | string | boolean" },
        category: "Principales",
      },
    },
    label: {
      description: "Etiqueta del checkbox cuando se usa dentro de un grupo",
      control: "text",
      table: {
        category: "Principales",
        type: { summary: "string | boolean | number | object" },
      },
    },
    value: {
      description: "Valor del checkbox cuando se usa dentro de un grupo",
      control: "object",
      table: {
        category: "Principales",
        type: { summary: "string | boolean | number | object" },
      },
    },
    isBoxed: {
      description: "Indica si debe mostrarse el checkbox con borde",
      control: "boolean",
      table: {
        category: "Principales",
        type: { summary: "string | boolean | number | object" },
      },
    },

    // Valores
    trueValue: {
      description: "Valor cuando está activado",
      control: "text",
      table: {
        category: "Valores",
        type: { summary: "string | number" },
      },
    },
    falseValue: {
      description: "Valor cuando está desactivado",
      control: "text",
      table: {
        category: "Valores",
        type: { summary: "string | number" },
      },
    },

    // Estados
    indeterminate: {
      description: "Estado visual indeterminado",
      control: "boolean",
      table: {
        category: "Estados",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    checked: {
      description: "Indica si el checkbox está activado",
      control: "boolean",
      table: {
        category: "Estados",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Deshabilita el componente",
      control: "boolean",
      table: {
        category: "Estados",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Atributos HTML
    name: {
      description: "Atributo name nativo",
      control: "text",
      table: {
        category: "Atributos HTML",
        type: { summary: "string" },
      },
    },
    id: {
      description: "ID nativo del input",
      control: "text",
      table: {
        category: "Atributos HTML",
        type: { summary: "string" },
      },
    },
    tabindex: {
      description: "Orden de tabulación",
      control: "number",
      table: {
        category: "Atributos HTML",
        type: { summary: "string | number" },
      },
    },

    // Validación
    validateEvent: {
      description: "Activa la validación del formulario",
      control: "boolean",
      table: {
        category: "Validación",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },

    // Accesibilidad
    ariaControls: {
      description: "ID de los elementos controlados (ARIA)",
      control: "text",
      table: {
        category: "Accesibilidad",
        type: { summary: "string" },
      },
    },

    // Eventos
    "onUpdate:modelValue": {
      description: "Se emite al actualizar el valor",
      table: {
        category: "Eventos",
        type: { summary: "number | string | boolean" },
      },
    },
    onChange: {
      description: "Se emite al cambiar el estado",
      table: {
        category: "Eventos",
        type: { summary: "number | string | boolean" },
      },
    },

    // Slots
    default: {
      description: "Slot personalizado para el contenido del checkbox",
      table: {
        category: "Slots",
        type: { summary: "slot" },
      },
    },
  },
  args: {
    disabled: false,
    indeterminate: false,
    checked: false,
    validateEvent: true,
    label: "Etiqueta del checkbox",
    value: "Valor del checkbox",
    name: "checkbox-name",
    id: "checkbox-id",
  } as Partial<CheckboxProps>,
};

export default meta;
type Story = StoryObj<typeof GCheckbox>;

const Template: StoryFn<CheckboxProps> = (
  args: CheckboxProps,
  { argTypes }
) => ({
  props: Object.keys(argTypes),
  components: { GCheckbox, GConfigProvider },
  setup() {
    const value = ref(args.modelValue);
    return { args, value };
  },
  template: `
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  label: "Default Checkbox",
  disabled: false,
  indeterminate: false,
  modelValue: false,
} as CheckboxProps;
Default.parameters = {
  docs: {
    description: {
      story:
        "Checkbox básico en su estado inicial no seleccionado. Muestra la funcionalidad principal con una etiqueta estándar.",
    },
  },
};

export const Checked: Story = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
} as CheckboxProps;
Checked.parameters = {
  docs: {
    description: {
      story:
        "Checkbox en estado seleccionado. Ejemplo de uso con `v-model` vinculado a un valor verdadero. Ideal para mostrar opciones activadas por defecto.",
    },
  },
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
} as CheckboxProps;
Disabled.parameters = {
  docs: {
    description: {
      story:
        "Checkbox deshabilitado no interactivo. Útil para estados donde la acción no está disponible temporalmente. Se combina con otros estados como checked o indeterminate.",
    },
  },
};

export const Indeterminate: Story = Template.bind({});
Indeterminate.args = {
  ...Default.args,
  indeterminate: true,
} as CheckboxProps;
Indeterminate.parameters = {
  docs: {
    description: {
      story:
        "Estado visual indeterminado (ni chequeado ni deschequeado). Usado comúnmente en selecciones parciales o grupos con múltiples opciones. Requiere control programático.",
    },
  },
};
