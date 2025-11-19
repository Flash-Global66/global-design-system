// TODO afinar la historia cuando se defina correctamente la documentación del stepper

// external imports
import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";

// components
import {
  GStepper,
  GStepperItem,
  GStepGrid,
} from "@flash-global66/g-stepper/index.ts";
import { GButton } from "@flash-global66/g-button/index.ts";

// Config Provider
import { GConfigProvider } from "@flash-global66/g-config-provider/index.ts";

// Version
import {
  version,
  peerDependencies,
} from "@flash-global66/g-stepper/package.json";

// Helpers
import {
  generatePeerDepsList,
  generatePeerDepsInstalls,
} from "../helper/documentation-stories";

const meta = {
  title: "Data/Stepper",
  component: GStepper,
  parameters: {
    docs: {
      description: {
        component: `
El componente \`GStepper\` permite a los usuarios navegar a través de una secuencia de pasos lógicos y numerados. Es ideal para procesos como registros, checkouts o cualquier flujo de trabajo que se pueda dividir en etapas.

> Versión actual: ${version}

## Características

- **Navegación por Pasos:** Guía a los usuarios a través de un proceso paso a paso.
- **Control de Flujo:** Utiliza \`v-model\` para controlar el paso activo.
- **Feedback Visual:** Muestra una barra de progreso y un contador de pasos.
- **Navegación Flexible:** Permite la navegación hacia adelante y hacia atrás, con control sobre la visibilidad y el estado de los botones.
- **Contenido Personalizable:** Cada paso (\`GStepperItem\`) puede contener cualquier componente, pero está diseñado para funcionar con \`GStepGrid\` para una estructura consistente.
- **Header Personalizable:** Ofrece slots para personalizar el header.

## Instalación

\`\`\`bash
yarn add @flash-global66/g-stepper
\`\`\`

## Importación del componente

\`\`\`typescript
# importar donde se va a utilizar
import { GStepper, GStepperItem, GStepGrid } from '@flash-global66/g-stepper'

# recomendado importar en los estilos globales
@use "@flash-global66/g-stepper/src/stepper.styles.scss" as *;
\`\`\`

## Dependencias

Este componente requiere:

${generatePeerDepsList(peerDependencies)}

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies)}
\`\`\`

## Uso básico

\`\`\`html
<script setup lang="ts">
import { ref } from 'vue'
import { GStepper, GStepperItem, GStepGrid } from '@flash-global66/g-stepper'

const currentStep = ref('step-1')

const nextStep = () => {
  const stepNumber = parseInt(currentStep.value.split('-')[1]);
  currentStep.value = \`step-\${stepNumber + 1}\`;
}

const prevStep = () => {
  const stepNumber = parseInt(currentStep.value.split('-')[1]);
  currentStep.value = \`step-\${stepNumber - 1}\`;
}
</script>

<template>
  <g-stepper v-model="currentStep">
    <g-stepper-item value="step-1" title="Información Personal" dot>
      <g-step-grid
        title="Paso 1: Información Personal"
        :actions="{ next: { function: nextStep, label: 'Continuar' }, back: { hide: true } }"
      >
        <template #content>
          <p>Contenido del primer paso.</p>
        </template>
      </g-step-grid>
    </g-stepper-item>

    <g-stepper-item value="step-2" title="Detalles de la cuenta" dot>
      <g-step-grid
        title="Paso 2: Detalles de la cuenta"
        :actions="{ next: { function: nextStep, label: 'Continuar' }, back: { function: prevStep } }"
      >
        <template #content>
          <p>Contenido del segundo paso.</p>
        </template>
      </g-step-grid>
    </g-stepper-item>

    <g-stepper-item value="step-3" title="Confirmación" dot>
      <g-step-grid
        title="Paso 3: Confirmación"
        :actions="{ next: { label: 'Finalizar' }, back: { function: prevStep } }"
      >
        <template #content>
          <p>Contenido del último paso.</p>
        </template>
      </g-step-grid>
    </g-stepper-item>
  </g-stepper>
</template>
\`\`\`

`,
      },
    },
  },
  argTypes: {
    // Props
    modelValue: {
      control: "text",
      description:
        "Controla el paso activo actual. Se puede usar con `v-model`.",
      table: {
        category: "Props",
        type: { summary: "string | number" },
      },
    },
    hideLeftHeader: {
      control: "boolean",
      description: "Oculta la sección izquierda del header.",
      table: {
        category: "Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    hideRightHeader: {
      control: "boolean",
      description: "Oculta la sección derecha del header.",
      table: {
        category: "Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    hideStepperProgress: {
      control: "boolean",
      description: "Oculta la barra de progreso.",
      table: {
        category: "Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    hideStepCounter: {
      control: "boolean",
      description: "Oculta el contador de pasos (ej: 'Paso 1 de 3').",
      table: {
        category: "Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    showCenterLogo: {
      control: "boolean",
      description: "Muestra el logo en el centro del header.",
      table: {
        category: "Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    // Slots
    "left-header": {
      description:
        "Slot para contenido personalizado en la parte izquierda del header (desktop).",
      table: { category: "Slots", type: { summary: "template" } },
    },
    "left-mobile-header": {
      description:
        "Slot para contenido personalizado en la parte izquierda del header (mobile).",
      table: { category: "Slots", type: { summary: "template" } },
    },
    "right-header": {
      description:
        "Slot para contenido personalizado en la parte derecha del header.",
      table: { category: "Slots", type: { summary: "template" } },
    },
    "right-header-custom-space": {
      description:
        "Slot para un espacio personalizado adicional a la derecha del header.",
      table: { category: "Slots", type: { summary: "template" } },
    },
    // Events
    "update:modelValue": {
      description:
        "Se emite cuando el paso cambia. Requerido para que `v-model` funcione.",
      table: { category: "Events" },
    },
    "click-left-header": {
      description: "Se emite al hacer clic en la sección izquierda del header.",
      table: { category: "Events" },
    },
    "click-right-header": {
      description: "Se emite al hacer clic en la sección derecha del header.",
      table: { category: "Events" },
    },
  },
  args: {
    modelValue: "step-1",
    hideLeftHeader: false,
    hideRightHeader: false,
    hideStepperProgress: false,
    hideStepCounter: false,
    showCenterLogo: false,
  },
};
export default meta;
type Story = StoryObj<typeof GStepper>;

export const Basic: Story = {
  name: "Básico",
  parameters: {
    docs: { source: { code: null } },
  },
  render: (args) => ({
    components: { GStepper, GStepperItem, GStepGrid, GConfigProvider },
    setup() {
      const currentStep = ref(args.modelValue || "step-1");

      const nextStep = () => {
        const stepNumber = parseInt(String(currentStep.value).split("-")[1]);
        currentStep.value = `step-${stepNumber + 1}`;
      };

      const prevStep = () => {
        const stepNumber = parseInt(String(currentStep.value).split("-")[1]);
        currentStep.value = `step-${stepNumber - 1}`;
      };

      return { args, currentStep, nextStep, prevStep };
    },
    template: `
      <g-config-provider>
        <g-stepper v-bind="args" v-model="currentStep">
          <g-stepper-item value="step-1" title="Información Personal" dot>
            <g-step-grid
              title="Paso 1: Completa tu Información Personal"
              subtitle="Asegúrate de que los datos sean correctos."
              :actions="{ next: { function: nextStep, label: 'Continuar' }, back: { hide: true } }"
            >
              <template #content>
                <p class='mx-auto text-center'>Aquí iría el formulario con los campos de información personal.</p>
              </template>
            </g-step-grid>
          </g-stepper-item>

          <g-stepper-item value="step-2" title="Detalles de la cuenta" dot>
            <g-step-grid
              title="Paso 2: Configura los Detalles de tu Cuenta"
              :actions="{ next: { function: nextStep, label: 'Continuar' }, back: { function: prevStep } }"
            >
              <template #content>
                <p class='mx-auto text-center'>Aquí iría el formulario para configurar el nombre de usuario, contraseña, etc.</p>
              </template>
            </g-step-grid>
          </g-stepper-item>

          <g-stepper-item value="step-3" title="Verificación" >
             <!-- Este paso no tiene 'dot', por lo que no aparecerá en la barra de progreso -->
            <g-step-grid
              title="Paso Intermedio: Verificación de Correo"
              :actions="{ next: { function: nextStep, label: 'Continuar' }, back: { function: prevStep } }"
            >
              <template #content>
                <p class='mx-auto text-center'>Este paso no se muestra en la barra de progreso.</p>
              </template>
            </g-step-grid>
          </g-stepper-item>

          <g-stepper-item value="step-4" title="Confirmación" dot>
            <g-step-grid
              title="Paso 4: Revisa y Confirma"
              :actions="{ next: { label: 'Finalizar', function: () => alert('Proceso finalizado!') }, back: { function: prevStep } }"
            >
              <template #content>
                <p class='mx-auto text-center'>Resumen de toda la información para que el usuario la confirme.</p>
              </template>
            </g-step-grid>
          </g-stepper-item>
        </g-stepper>
      </g-config-provider>
    `,
  }),
};

export const CustomHeader: Story = {
  name: "Header Personalizado",
  parameters: {
    docs: { source: { code: null } },
  },
  render: (args) => ({
    components: { GStepper, GStepperItem, GStepGrid, GConfigProvider, GButton },
    setup() {
      const currentStep = ref("step-1");
      const nextStep = () => {
        currentStep.value = "step-2";
      };
      const prevStep = () => {
        currentStep.value = "step-1";
      };
      return { args, currentStep, nextStep, prevStep };
    },
    template: `
      <g-config-provider>
        <g-stepper v-bind="args" v-model="currentStep">
          <template #left-header>
            <g-button variant="tertiary" @click="() => alert('Ayuda solicitada')">Ayuda</g-button>
          </template>
          <template #right-header>
            <g-button variant="tertiary" @click="() => alert('Cerrando sesión')">Salir</g-button>
          </template>

          <g-stepper-item value="step-1" title="Paso 1" dot>
            <g-step-grid
              title="Paso 1 con Header Personalizado"
              :actions="{ next: { function: nextStep, label: 'Continuar' }, back: { hide: true } }"
            >
              <template #content>
                <p>El header de este stepper contiene botones personalizados.</p>
              </template>
            </g-step-grid>
          </g-stepper-item>

          <g-stepper-item value="step-2" title="Paso 2" dot>
            <g-step-grid
              title="Paso 2"
              :actions="{ next: { label: 'Finalizar' }, back: { function: prevStep } }"
            >
              <template #content>
                <p>Contenido del segundo paso.</p>
              </template>
            </g-step-grid>
          </g-stepper-item>
        </g-stepper>
      </g-config-provider>
    `,
  }),
};
