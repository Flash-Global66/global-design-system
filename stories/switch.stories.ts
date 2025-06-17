import { ref, reactive, toRef } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";

import { GSwitch } from "@flash-global66/g-switch/index.ts";
import { GConfigProvider } from "@flash-global66/g-config-provider/index.ts";
import { GForm, GFormItem, FormInstance } from "@flash-global66/g-form/index.ts";
import { GButton } from "@flash-global66/g-button/index.ts";
import { GInput } from "@flash-global66/g-input/index.ts";

import { version, peerDependencies } from "@flash-global66/g-switch/package.json";
import { generatePeerDepsList, generateIconOptions, generatePeerDepsInstalls } from "../helper/documentation-stories";

const meta: Meta = {
  title: "Form/Switch",
  component: GSwitch,
  parameters: {
    docs: {
      description: {
        component: `
El componente Switch se utiliza para alternar entre dos estados opuestos.

> Versión actual: ${version}

## Características
- Estados binarios claros (on/off)
- Soporte para iconos personalizados usando IconFont
- Textos descriptivos configurables
- Diferentes tamaños disponibles (large, default, small)
- Estados de carga y deshabilitado
- Validación de formularios integrada con soporte para @flash-global66/g-form
- Accesibilidad completa con ARIA
- Funciones de prevención de cambio (beforeChange)
- Slots personalizados para acciones
- Soporte para valores extendidos (string, number, boolean)

## Integración con Formularios

El componente Switch está completamente integrado con el sistema de formularios:

- **Validación automática**: Cuando se usa dentro de un \`g-form-item\`, activa automáticamente la validación del campo padre
- **Control de eventos**: La prop \`validateEvent\` permite controlar cuándo se dispara la validación
- **Estados de formulario**: Respeta los estados disabled y size heredados del formulario padre
- **Función beforeChange**: Permite validación personalizada antes de cambiar el valor

### Instalación

\`\`\`bash
yarn add @flash-global66/g-switch
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GSwitch } from '@flash-global66/g-switch'

# recomendado importar en los estilos globales
import '@flash-global66/g-switch/switch.styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${generatePeerDepsList(peerDependencies)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

### Ejemplo de uso básico

\`\`\`html
<script setup lang="ts">
import { ref } from 'vue';
import { GSwitch } from '@flash-global66/g-switch';

const value = ref(false);
</script>

<template>
  <g-switch v-model="value" />
</template>
\`\`\`

### Ejemplo con validación de formulario

\`\`\`html
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { GForm, GFormItem } from '@flash-global66/g-form';
import { GSwitch } from '@flash-global66/g-switch';

const formData = reactive({
  acceptTerms: false
});

const rules = {
  acceptTerms: [
    { required: true, message: 'Debes aceptar los términos y condiciones' }
  ]
};
</script>

<template>
  <g-form :model="formData" :rules="rules">
    <g-form-item label="Términos y condiciones" prop="acceptTerms">
      <g-switch 
        v-model="formData.acceptTerms"
        active-text="Acepto"
        inactive-text="No acepto"
        active-icon="solid check"
        inactive-icon="solid times"
      />
    </g-form-item>
  </g-form>
</template>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    modelValue: {
      description: "Valor de enlace del Switch (v-model). Debe ser equivalente a active-value o inactive-value.",
      control: "boolean",
      table: {
        category: "Principales",
        type: { summary: "boolean | string | number" },
        defaultValue: { summary: "false" },
      },
    },
    activeValue: {
      description: "Valor del switch cuando está en estado activo.",
      control: "text",
      table: {
        category: "Principales",
        type: { summary: "boolean | string | number" },
        defaultValue: { summary: "true" },
      },
    },
    inactiveValue: {
      description: "Valor del switch cuando está en estado inactivo.",
      control: "text",
      table: {
        category: "Principales",
        type: { summary: "boolean | string | number" },
        defaultValue: { summary: "false" },
      },
    },
    size: {
      description: "Tamaño del Switch.",
      control: "select",
      options: ["", "large", "default", "small"],
      table: {
        category: "Apariencia",
        type: { summary: "'large' | 'default' | 'small'" },
        defaultValue: { summary: "default" },
      },
    },
    width: {
      description: "Ancho personalizado del Switch.",
      control: "text",
      table: {
        category: "Apariencia",
        type: { summary: "number | string" },
        defaultValue: { summary: "auto" },
      },
    },
    inlinePrompt: {
      description: "Si el icono o texto se muestra dentro del punto del switch.",
      control: "boolean",
      table: {
        category: "Apariencia",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    activeIcon: {
      description: "Icono mostrado cuando está en estado activo.",
      control: "select",
      options: ["", ...generateIconOptions()],
      table: {
        category: "Iconos",
        type: { summary: "IconString" },
        defaultValue: { summary: "—" },
      },
    },
    inactiveIcon: {
      description: "Icono mostrado cuando está en estado inactivo.",
      control: "select",
      options: ["", ...generateIconOptions()],
      table: {
        category: "Iconos",
        type: { summary: "IconString" },
        defaultValue: { summary: "—" },
      },
    },
    activeActionIcon: {
      description: "Icono mostrado en la acción cuando está en estado activo.",
      control: "select",
      options: ["", ...generateIconOptions()],
      table: {
        category: "Iconos",
        type: { summary: "IconString" },
        defaultValue: { summary: "—" },
      },
    },
    inactiveActionIcon: {
      description: "Icono mostrado en la acción cuando está en estado inactivo.",
      control: "select",
      options: ["", ...generateIconOptions()],
      table: {
        category: "Iconos",
        type: { summary: "IconString" },
        defaultValue: { summary: "—" },
      },
    },
    activeText: {
      description: "Texto mostrado cuando está en estado activo.",
      control: "text",
      table: {
        category: "Texto",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    inactiveText: {
      description: "Texto mostrado cuando está en estado inactivo.",
      control: "text",
      table: {
        category: "Texto",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },

    // Estados
    disabled: {
      description: "Si el Switch está deshabilitado.",
      control: "boolean",
      table: {
        category: "Estados",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      description: "Si el Switch está en estado de carga.",
      control: "boolean",
      table: {
        category: "Estados",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Validación y Formularios
    validateEvent: {
      description: "Si debe activar la validación del formulario cuando cambia el valor.",
      control: "boolean",
      table: {
        category: "Validación y Formularios",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    beforeChange: {
      description: "Función ejecutada antes del cambio. Si retorna false o una Promise rechazada, previene el cambio.",
      table: {
        category: "Validación y Formularios",
        type: { summary: "() => boolean | Promise<boolean>" },
        defaultValue: { summary: "—" },
      },
    },

    // Atributos HTML
    name: {
      description: "Atributo name nativo del input del Switch.",
      control: "text",
      table: {
        category: "Atributos HTML",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    id: {
      description: "ID para el input del Switch.",
      control: "text",
      table: {
        category: "Atributos HTML",
        type: { summary: "string" },
        defaultValue: { summary: "auto-generado" },
      },
    },
    tabindex: {
      description: "Orden de tabulación del input.",
      control: "text",
      table: {
        category: "Atributos HTML",
        type: { summary: "string | number" },
        defaultValue: { summary: "—" },
      },
    },
    ariaLabel: {
      description: "Etiqueta ARIA para accesibilidad cuando no hay texto visible.",
      control: "text",
      table: {
        category: "Accesibilidad",
        type: { summary: "string" },
        defaultValue: { summary: "—" },
      },
    },
    onChange: {
      description: "Se dispara cuando el valor del switch cambia.",
      table: {
        category: "Eventos",
        type: { summary: "(value: boolean | string | number) => void" },
      },
    },
    "onUpdate:modelValue": {
      description: "Se dispara para actualizar el v-model.",
      table: {
        category: "Eventos",
        type: { summary: "(value: boolean | string | number) => void" },
      },
    },

    // Slots
    "active-action": {
      description: "Contenido personalizado para la acción cuando está activo.",
      table: {
        category: "Slots",
        type: { summary: "slot" },
      },
    },
    "inactive-action": {
      description: "Contenido personalizado para la acción cuando está inactivo.",
      table: {
        category: "Slots",
        type: { summary: "slot" },
      },
    },
  },
  args: {
    modelValue: false,
    disabled: false,
    loading: false,
    size: "",
    width: "",
    inlinePrompt: false,
    activeIcon: "",
    inactiveIcon: "",
    activeActionIcon: "",
    inactiveActionIcon: "",
    activeText: "",
    inactiveText: "",
    activeValue: true,
    inactiveValue: false,
    name: "",
    validateEvent: true,
    id: "",
    tabindex: "",
    ariaLabel: "",
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  name: "Uso básico",
  parameters: {
    docs: {
      description: {
        story:
          "El uso más básico del Switch. Vincula v-model a una variable de tipo Boolean. Las variables CSS --el-switch-on-color y --el-switch-off-color deciden el color de fondo en dos estados.",
      },
      source: {
        code: `<g-switch v-model="value" />`,
      },
    },
  },
  render: (args: any) => ({
    components: { GSwitch, GConfigProvider },
    setup() {
      const value = toRef(args, "modelValue");
      return { args, value };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <g-switch 
            v-model="value"
            v-bind="args"
          />
          <p>Valor actual: {{ value }}</p>
        </div>
      </g-config-provider>
    `,
  }),
};

// Tamaños
export const Sizes: Story = {
  name: "Tamaños",
  parameters: {
    docs: {
      description: {
        story: "El Switch está disponible en diferentes tamaños: large, default (por defecto) y small.",
      },
      source: {
        code: `<g-switch v-model="value" size="large" />
<g-switch v-model="value" />
<g-switch v-model="value" size="small" />`,
      },
    },
  },
  render: () => ({
    components: { GSwitch, GConfigProvider },
    setup() {
      const valueLarge = ref(true);
      const valueDefault = ref(true);
      const valueSmall = ref(true);
      return { valueLarge, valueDefault, valueSmall };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-16">Large:</span>
            <g-switch v-model="valueLarge" size="large" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-16">Default:</span>
            <g-switch v-model="valueDefault" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-16">Small:</span>
            <g-switch v-model="valueSmall" size="small" />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

// Descripción de texto
export const TextDescription: Story = {
  name: "Descripción de texto",
  parameters: {
    docs: {
      description: {
        story:
          "Puedes agregar los atributos active-text e inactive-text para mostrar textos. Usa el atributo inline-prompt para controlar si el texto se muestra dentro del punto.",
      },
      source: {
        code: `<!-- Con texto -->
<g-switch
  v-model="value"
  active-text="Pagar por año"
  inactive-text="Pagar por mes"
/>

<!-- Inline prompt -->
<g-switch
  v-model="value"
  active-text="Pagar por año"
  inactive-text="Pagar por mes"
  inline-prompt
  width="160px"
/>

<!-- Texto corto -->
<g-switch
  v-model="value"
  active-text="On"
  inactive-text="Off"
  inline-prompt
/>`,
      },
    },
  },
  render: () => ({
    components: { GSwitch, GConfigProvider },
    setup() {
      const value1 = ref(true);
      const value2 = ref(true);
      const value3 = ref(true);
      const value4 = ref(true);
      return { value1, value2, value3, value4 };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Con texto:</span>
            <g-switch
              v-model="value1"
              active-text="Pagar por año"
              inactive-text="Pagar por mes"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Inline prompt:</span>
            <g-switch
              v-model="value2"
              active-text="Pagar por año"
              inactive-text="Pagar por mes"
              inline-prompt
              width="160px"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Texto corto:</span>
            <g-switch
              v-model="value3"
              active-text="On"
              inactive-text="Off"
              inline-prompt
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Solo activo:</span>
            <g-switch
              v-model="value4"
              active-text="Abierto"
              inline-prompt
            />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

// Iconos personalizados
export const CustomIcons: Story = {
  name: "Iconos personalizados",
  parameters: {
    docs: {
      description: {
        story:
          "Puedes agregar los atributos active-icon e inactive-icon para mostrar iconos. Usa el atributo inline-prompt para controlar si el icono se muestra dentro del punto.",
      },
      source: {
        code: `<!-- Aprobado/Rechazado -->
<g-switch
  v-model="value"
  active-icon="solid check"
  inactive-icon="solid times"
/>

<!-- Inline prompt -->
<g-switch
  v-model="value"
  active-icon="solid check"
  inactive-icon="solid times"
  inline-prompt
/>

<!-- Tema claro/oscuro -->
<g-switch
  v-model="value"
  active-icon="solid lightbulb"
  inactive-icon="regular circle-xmark"
  inline-prompt
/>`,
      },
    },
  },
  render: () => ({
    components: { GSwitch, GConfigProvider },
    setup() {
      const value1 = ref(true);
      const value2 = ref(true);
      const value3 = ref(true);
      const value4 = ref(true);
      return { value1, value2, value3, value4 };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-6">
            <span class="w-40 text-sm">Aprobado/Rechazado:</span>
            <g-switch
              v-model="value1"
              active-icon="solid check"
              inactive-icon="solid times"
            />
          </div>
          <div class="flex items-center gap-6">
            <span class="w-40 text-sm">Inline prompt:</span>
            <g-switch
              v-model="value2"
              active-icon="solid check"
              inactive-icon="solid times"
              inline-prompt
            />
          </div>
          <div class="flex items-center gap-6">
            <span class="w-40 text-sm">Tema claro/oscuro:</span>
            <g-switch
              v-model="value3"
              active-icon="solid lightbulb"
              inactive-icon="regular circle-xmark"
              inline-prompt
            />
          </div>
          <div class="flex items-center gap-6">
            <span class="w-40 text-sm">Visibilidad:</span>
            <g-switch
              v-model="value4"
              active-icon="regular eye"
              inactive-icon="regular eye-slash"
              inline-prompt
            />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

// Tipos de valor extendidos
export const ExtendedValueTypes: Story = {
  name: "Tipos de valor extendidos",
  parameters: {
    docs: {
      description: {
        story:
          "Puedes configurar los atributos active-value e inactive-value. Ambos reciben un valor de tipo Boolean, String o Number.",
      },
      source: {
        code: `<!-- Números -->
<g-switch
  v-model="value"
  :active-value="100"
  :inactive-value="0"
  active-text="100"
  inactive-text="0"
/>

<!-- Strings -->
<g-switch
  v-model="value"
  active-value="yes"
  inactive-value="no"
  active-text="Sí"
  inactive-text="No"
/>

<!-- Mixto -->
<g-switch
  v-model="value"
  :active-value="1"
  inactive-value="off"
  active-text="On"
  inactive-text="Off"
/>`,
      },
    },
  },
  render: () => ({
    components: { GSwitch, GConfigProvider },
    setup() {
      const value1 = ref(100);
      const value2 = ref("yes");
      const value3 = ref(1);
      return { value1, value2, value3 };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Números:</span>
            <g-switch
              v-model="value1"
              :active-value="100"
              :inactive-value="0"
              active-text="100"
              inactive-text="0"
            />
            <span class="text-sm">Valor: {{ value1 }}</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Strings:</span>
            <g-switch
              v-model="value2"
              active-value="yes"
              inactive-value="no"
              active-text="Sí"
              inactive-text="No"
            />
            <span class="text-sm">Valor: {{ value2 }}</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Mixto:</span>
            <g-switch
              v-model="value3"
              :active-value="1"
              inactive-value="off"
              active-text="On"
              inactive-text="Off"
            />
            <span class="text-sm">Valor: {{ value3 }}</span>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

// Deshabilitado
export const Disabled: Story = {
  name: "Deshabilitado",
  parameters: {
    docs: {
      description: {
        story: "Agregar el atributo disabled deshabilita el Switch.",
      },
      source: {
        code: `<g-switch v-model="value" disabled />

<!-- Con texto -->
<g-switch
  v-model="value"
  disabled
  active-text="Activo"
  inactive-text="Inactivo"
/>`,
      },
    },
  },
  render: () => ({
    components: { GSwitch, GConfigProvider },
    setup() {
      const value1 = ref(true);
      const value2 = ref(false);
      return { value1, value2 };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Deshabilitado ON:</span>
            <g-switch v-model="value1" disabled />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Deshabilitado OFF:</span>
            <g-switch v-model="value2" disabled />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Con texto:</span>
            <g-switch
              v-model="value1"
              disabled
              active-text="Activo"
              inactive-text="Inactivo"
            />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

// Estado de carga
export const Loading: Story = {
  name: "Estado de carga",
  parameters: {
    docs: {
      description: {
        story: "Configurar el atributo loading a true indica un estado de carga en el Switch.",
      },
      source: {
        code: `<g-switch v-model="value" loading />

<!-- Con texto -->
<g-switch
  v-model="value"
  loading
  active-text="Guardando..."
  inactive-text="Desconectado"
/>`,
      },
    },
  },
  render: () => ({
    components: { GSwitch, GConfigProvider },
    setup() {
      const value1 = ref(true);
      const value2 = ref(false);
      return { value1, value2 };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Cargando ON:</span>
            <g-switch v-model="value1" loading />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Cargando OFF:</span>
            <g-switch v-model="value2" loading />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Con texto:</span>
            <g-switch
              v-model="value1"
              loading
              active-text="Guardando..."
              inactive-text="Desconectado"
            />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

// Prevenir cambio
export const PreventSwitching: Story = {
  name: "Prevenir cambio",
  parameters: {
    docs: {
      description: {
        story:
          "Configura la propiedad before-change. Si se devuelve false o se devuelve una Promise que luego es rechazada, se detendrá el cambio.",
      },
      source: {
        code: `<!-- Con confirmación -->
<g-switch
  v-model="value"
  :before-change="beforeChange"
  active-text="Activar"
  inactive-text="Desactivar"
/>

<script setup>
const beforeChange = () => {
  return confirm('¿Estás seguro de que quieres cambiar el estado?');
};

// Con Promise
const beforeChangeAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(confirm('¿Confirmar cambio después de 1 segundo?'));
    }, 1000);
  });
};
</script>`,
      },
    },
  },
  render: () => ({
    components: { GSwitch, GConfigProvider },
    setup() {
      const value1 = ref(false);
      const value2 = ref(false);

      const beforeChange1 = () => {
        return confirm("¿Estás seguro de que quieres cambiar el estado?");
      };

      const beforeChange2 = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(confirm("¿Confirmar cambio después de 1 segundo?"));
          }, 1000);
        });
      };

      return { value1, value2, beforeChange1, beforeChange2 };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Con confirmación:</span>
            <g-switch
              v-model="value1"
              :before-change="beforeChange1"
              active-text="Activar"
              inactive-text="Desactivar"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Con Promise:</span>
            <g-switch
              v-model="value2"
              :before-change="beforeChange2"
              active-text="Confirmar"
              inactive-text="Cancelar"
            />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

// Iconos de acción personalizados
export const CustomActionIcons: Story = {
  name: "Iconos de acción personalizados",
  parameters: {
    docs: {
      description: {
        story:
          "Puedes agregar los atributos active-action-icon e inactive-action-icon para mostrar iconos en las acciones.",
      },
      source: {
        code: `<!-- Encendido/Apagado -->
<g-switch
  v-model="value"
  active-action-icon="solid check-circle"
  inactive-action-icon="regular circle-xmark"
/>

<!-- Configuración -->
<g-switch
  v-model="value"
  active-action-icon="regular gear"
  inactive-action-icon="regular gear"
  active-text="Avanzado"
  inactive-text="Básico"
/>

<!-- Notificaciones -->
<g-switch
  v-model="value"
  active-action-icon="regular bell"
  inactive-action-icon="regular circle-xmark"
  width="60px"
/>`,
      },
    },
  },
  render: () => ({
    components: { GSwitch, GConfigProvider },
    setup() {
      const value1 = ref(true);
      const value2 = ref(false);
      const value3 = ref(true);
      return { value1, value2, value3 };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span>Encendido/Apagado:</span>
            <g-switch
              v-model="value1"
              active-action-icon="solid check-circle"
              inactive-action-icon="regular circle-xmark"
            />
          </div>
          <div class="flex items-center gap-4">
            <span>Configuración:</span>
            <g-switch
              v-model="value2"
              active-action-icon="regular gear"
              inactive-action-icon="regular gear"
              active-text="Avanzado"
              inactive-text="Básico"
            />
          </div>
          <div class="flex items-center gap-4">
            <span>Notificaciones:</span>
            <g-switch
              v-model="value3"
              active-action-icon="regular bell"
              inactive-action-icon="regular circle-xmark"
              width="60px"
            />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

// Slots de acción personalizados
export const CustomActionSlots: Story = {
  name: "Slots de acción personalizados",
  parameters: {
    docs: {
      description: {
        story: "Puedes usar los slots active-action e inactive-action para personalizar las acciones.",
      },
      source: {
        code: `<!-- Con badges -->
<g-switch v-model="value" width="80px">
  <template #active-action>
    <span class="bg-green-500 text-white text-sm px-2 py-1.5 rounded font-medium">ON</span>
  </template>
  <template #inactive-action>
    <span class="bg-red-500 text-white text-sm px-2 py-1.5 rounded font-medium">OFF</span>
  </template>
</g-switch>

<!-- Con números -->
<g-switch v-model="value" width="60px">
  <template #active-action>
    <span class="text-sm font-bold">1</span>
  </template>
  <template #inactive-action>
    <span class="text-sm font-bold">0</span>
  </template>
</g-switch>`,
      },
    },
  },
  render: () => ({
    components: { GSwitch, GConfigProvider },
    setup() {
      const value1 = ref(true);
      const value2 = ref(false);
      return { value1, value2 };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Con badges:</span>
            <g-switch v-model="value1" width="80px">
              <template #active-action>
                <span class="bg-green-500 text-white text-sm px-2 py-1.5 rounded font-medium">ON</span>
              </template>
              <template #inactive-action>
                <span class="bg-red-500 text-white text-sm px-2 py-1.5 rounded font-medium">OFF</span>
              </template>
            </g-switch>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Con números:</span>
            <g-switch v-model="value2" width="60px">
              <template #active-action>
                <span class="text-sm font-bold">1</span>
              </template>
              <template #inactive-action>
                <span class="text-sm font-bold">0</span>
              </template>
            </g-switch>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

// Ancho personalizado
export const CustomWidth: Story = {
  name: "Ancho personalizado",
  parameters: {
    docs: {
      description: {
        story: "Puedes personalizar el ancho del Switch usando la propiedad width.",
      },
      source: {
        code: `<!-- Ancho 40px -->
<g-switch v-model="value" width="40px" />

<!-- Ancho 100px -->
<g-switch
  v-model="value"
  width="100px"
  active-text="On"
  inactive-text="Off"
  inline-prompt
/>

<!-- Ancho 140px -->
<g-switch
  v-model="value"
  width="140px"
  active-text="Habilitado"
  inactive-text="Deshabilitado"
  inline-prompt
/>`,
      },
    },
  },
  render: () => ({
    components: { GSwitch, GConfigProvider },
    setup() {
      const value1 = ref(true);
      const value2 = ref(true);
      const value3 = ref(true);
      return { value1, value2, value3 };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Ancho 40px:</span>
            <g-switch v-model="value1" width="40px" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Ancho 100px:</span>
            <g-switch
              v-model="value2"
              width="100px"
              active-text="On"
              inactive-text="Off"
              inline-prompt
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Ancho 140px:</span>
            <g-switch
              v-model="value3"
              width="140px"
              active-text="Habilitado"
              inactive-text="Deshabilitado"
              inline-prompt
            />
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

// Validación de formulario
export const FormValidation: Story = {
  name: "Validación de formulario",
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo completo de Switch con validación de formulario usando g-form, g-form-item, g-input y g-button. Muestra cómo integrar el switch con el sistema de formularios del design system para validación automática.",
      },
      source: {
        code: `<g-form 
  ref="formRef"
  :model="formData" 
  :rules="formRules"
  label-width="auto"
>
  <g-form-item label="Nombre de usuario" prop="username">
    <g-input 
      v-model="formData.username"
      placeholder="Ingresa tu nombre de usuario"
      prefix-icon="regular user"
    />
  </g-form-item>
  
  <g-form-item label="Acepto términos y condiciones" prop="acceptTerms">
    <g-switch 
      v-model="formData.acceptTerms"
      :active-value="true"
      :inactive-value="false"
      active-text="Acepto términos"
      inactive-text="No acepto"
    />
  </g-form-item>
  
  <g-form-item label="Habilitar notificaciones por email" prop="enableNotifications">
    <g-switch 
      v-model="formData.enableNotifications"
      active-text="Notificaciones ON"
      inactive-text="Notificaciones OFF"
    />
  </g-form-item>
  
  <g-form-item>
    <g-button @click="submitForm" variant="primary">
      Registrar usuario
    </g-button>
    <g-button @click="resetForm" variant="secondary">
      Limpiar formulario
    </g-button>
  </g-form-item>
</g-form>

<script setup>
import { ref, reactive } from 'vue';

const formRef = ref();
const formData = reactive({
  username: "",
  acceptTerms: false,
  enableNotifications: true,
});

const formRules = {
  username: [
    { required: true, message: "El nombre de usuario es requerido", trigger: "blur" },
    { min: 3, message: "El nombre de usuario debe tener al menos 3 caracteres", trigger: "blur" },
  ],
  acceptTerms: [
    { 
      validator: (rule, value, callback) => {
        if (value === true) {
          callback();
        } else {
          callback(new Error("Debes aceptar los términos y condiciones"));
        }
      },
      trigger: "change",
      required: true
    },
  ]
};

const submitForm = async () => {
  const valid = await formRef.value.validate();
  if (valid) {
    // Procesar formulario
  }
};

const resetForm = () => {
  formRef.value?.resetFields();
};
</script>`,
      },
    },
  },
  render: () => ({
    components: { GSwitch, GConfigProvider, GForm, GFormItem, GInput, GButton },
    setup() {
      const formRef = ref<FormInstance>();
      const formData = reactive({
        username: "",
        acceptTerms: false,
        enableNotifications: true,
      });

      const formRules = {
        username: [
          { required: true, message: "El nombre de usuario es requerido", trigger: "blur" },
          { min: 3, message: "El nombre de usuario debe tener al menos 3 caracteres", trigger: "blur" },
        ],
        acceptTerms: [
          {
            validator: (rule: any, value: any, callback: Function) => {
              if (value === true) {
                callback();
              } else {
                callback(new Error("Debes aceptar los términos y condiciones"));
              }
            },
            trigger: "change",
            required: true,
          },
        ],
      };

      const submitForm = async () => {
        if (!formRef.value) return;

        try {
          const valid = await formRef.value.validate();

          if (valid) {
            alert(
              `¡Formulario válido!\nUsuario: ${formData.username}\nTérminos: ${
                formData.acceptTerms ? "Aceptados" : "No aceptados"
              }\nNotificaciones: ${formData.enableNotifications ? "Habilitadas" : "Deshabilitadas"}`
            );
          } else {
            alert("Por favor, corrige los errores del formulario antes de continuar.");
          }
        } catch (fields) {
          console.log("📋 ERRORES DE VALIDACIÓN:", fields);
          alert("Por favor, corrige los errores del formulario antes de continuar.");
        }
      };

      const resetForm = () => {
        formRef.value?.resetFields();
      };

      return {
        formRef,
        formData,
        formRules,
        submitForm,
        resetForm,
      };
    },
    template: `
      <g-config-provider>
        <div class="max-w-md space-y-6">
          <h3 class="text-lg font-medium text-gray-900">Registro de usuario</h3>
          
          <g-form 
            ref="formRef"
            :model="formData" 
            :rules="formRules"
            label-width="auto"
            class="space-y-4"
          >
            <g-form-item label="Nombre de usuario" prop="username">
              <g-input 
                v-model="formData.username"
                placeholder="Ingresa tu nombre de usuario"
                prefix-icon="regular user"
              />
            </g-form-item>
            
            <g-form-item label="Acepto términos y condiciones" prop="acceptTerms">
              <g-switch 
                v-model="formData.acceptTerms"
                :active-value="true"
                :inactive-value="false"
                active-text="Acepto términos"
                inactive-text="No acepto"
              />
            </g-form-item>
            
            <g-form-item label="Habilitar notificaciones por email" prop="enableNotifications">
              <g-switch 
                v-model="formData.enableNotifications"
                active-text="Notificaciones ON"
                inactive-text="Notificaciones OFF"
              />
            </g-form-item>
            
            <g-form-item class="pt-4">
              <div class="flex gap-3">
                <g-button 
                  @click="submitForm"
                  variant="primary"
                >
                  Registrar usuario
                </g-button>
                <g-button 
                  @click="resetForm"
                  variant="secondary"
                >
                  Limpiar formulario
                </g-button>
              </div>
            </g-form-item>
          </g-form>
          
          <div class="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="font-medium mb-3 text-sm text-gray-900">Estado del formulario:</h4>
            <div class="text-sm space-y-2 text-gray-600">
              <div class="flex justify-between">
                <span><strong>Usuario:</strong></span>
                <span>{{ formData.username || 'No ingresado' }}</span>
              </div>
              <div class="flex justify-between">
                <span><strong>Términos:</strong></span>
                <span class="flex items-center">
                  {{ formData.acceptTerms ? 'Aceptados' : 'No aceptados' }}
                  <span :class="formData.acceptTerms ? 'text-green-600' : 'text-red-600'" class="ml-2">
                    {{ formData.acceptTerms ? 'SÍ' : 'NO' }}
                  </span>
                </span>
              </div>
              <div class="flex justify-between">
                <span><strong>Notificaciones:</strong></span>
                <span class="flex items-center">
                  {{ formData.enableNotifications ? 'Habilitadas' : 'Deshabilitadas' }}
                  <span :class="formData.enableNotifications ? 'text-green-600' : 'text-red-600'" class="ml-2">
                    {{ formData.enableNotifications ? 'SÍ' : 'NO' }}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};
