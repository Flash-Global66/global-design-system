import { ref } from "vue";
import { StoryObj } from "@storybook/vue3";

// COMPONENTS
import {
  GCollapse,
  type CollapseInstance,
  GCollapseItem,
  type CollapseItemType,
} from "@flash-global66/g-collapse/index.ts";
import { GRadioGroup } from "@flash-global66/g-radio/index.ts";
import { GForm, GFormItem } from "@flash-global66/g-form/index.ts";
import { GInput } from "@flash-global66/g-input/index.ts";
import { GButton } from "@flash-global66/g-button/index.ts";
import { GTag } from "@flash-global66/g-tag/index.ts";
import { GIconFont } from "@flash-global66/g-icon-font";

// CONFIG
import { GConfigProvider } from "../components/config-provider";
import {
  version,
  peerDependencies,
} from "@flash-global66/g-collapse/package.json";
import {
  generatePeerDepsInstalls,
  generatePeerDepsList,
} from "../helper/documentation-stories";
import { reactive } from "vue";

const meta = {
  title: "Data/Collapse",
  component: GCollapse,
  parameters: {
    docs: {
      description: {
        component: `\`GCollapse\` - Componente de colapso para mostrar u ocultar contenido de manera dinámica.
        
> La versión de este componente es \`${version}\`.

### Características principales:

- Permite mostrar u ocultar contenido de manera dinámica.
- Soporta múltiples elementos colapsables.
- Personalizable con slots para íconos y contenido.

### Instalación

\`\`\`bash
yarn add @flash-global66/g-collapse
\`\`\`

### Importación básica

\`\`\`typescript
# importar donde se va a utilizar
import { GCollapse, GCollapseItem, type CollapseItemType } from '@flash-global66/g-collapse'

# recomendado importar en los estilos globales
import '@flash-global66/g-collapse/styles.css'
\`\`\`

### Dependencias

Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.

${generatePeerDepsList(peerDependencies)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<template>
  <g-collapse  class="flex flex-col gap-4" :items="items" v-model="modelValue" :accordion="false" :expand-icon-position="'right'">
</template>

<script setup>
const items: CollapseItemType[] = [
  {
    title: 'Tag 1',
    name: '1',
    disabled: false,
    iconsRight: [
      {
        icon: 'regular trash-xmark',
        onClick: (name, icon, isActive) => {
          console.log('Collapse item clicked:', name, icon, isActive)
        }
      }
    ],
    description: 'Descripción del Tag 1'
  },
  {
    title: 'Tag 2',
    name: '2',
    disabled: false,
    iconsLeft: [
      {
        icon: 'regular tag',
        onClick: (name, icon, isActive) => {
          console.log('Collapse item clicked:', name, icon, isActive)
        }
      }
    ],
    content: 'Contenido del Tag 2',
    description: 'Descripción del Tag 2'
  }
]
</script>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    modelValue: {
      name: "model-value / v-model",
      description:
        "Valor reactivo que controla qué items están abiertos. Puede ser un string, number o array.",
      control: "object",
      table: {
        category: "Props (Padre)",
        type: { summary: "string | number | array" },
        defaultValue: { summary: "[]" },
      },
    },
    accordion: {
      name: "accordion",
      description:
        "Si se activa, solo un elemento puede estar abierto a la vez.",
      control: "boolean",
      table: {
        category: "Props (Padre)",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    expandIconPosition: {
      name: "expand-icon-position",
      description: "Posición del icono de expansión.",
      control: "select",
      options: ["left", "right"],
      table: {
        category: "Props (Padre)",
        type: { summary: "string" },
        defaultValue: { summary: "right" },
      },
    },
    beforeCollapse: {
      name: "before-collapse",
      description:
        "Hook que se ejecuta antes de cambiar el estado de colapso. Si se devuelve `false` o una `Promise` que se rechaza, se detendrá el colapso.",
      control: false,
      table: {
        category: "Props (Padre)",
        type: {
          summary: "Function",
          detail: "() => Promise<boolean> | boolean",
        },
      },
    },
    items: {
      name: "items",
      description:
        'Lista de elementos del colapso. Formato: `Array<{title: string, name?: string|number, iconsRight?: IconsType[], disabled?: boolean, iconsLeft?: IconsType[], description?: string, content?: string|(()=>string), headerOnly?: boolean, expandIconPosition?: "left"|"right"}>`',
      control: "object",
      table: {
        category: "Props (Padre)",
        type: {
          summary: "Array<CollapseItemType>",
          detail: `
{
  title: string;
  name?: string | number;
  iconsRight?: IconsType[];
  disabled?: boolean;
  iconsLeft?: IconsType[];
  description?: string;
  content?: string | (() => string);
  headerOnly?: boolean;
  expandIconPosition?: 'left' | 'right';
}
          `,
        },
        defaultValue: { summary: "[]" },
      },
    },
    change: {
      name: "change",
      description: "Evento que se dispara cuando cambia el estado del colapso.",
      control: false,
      table: {
        category: "Eventos (Padre)",
        type: {
          summary: "Function",
          detail: "(activeNames: array | string) => void",
        },
      },
    },
    headerClick: {
      name: "header-click",
      description:
        "Evento que se dispara cuando se hace click en un header con headerOnly=true.",
      control: false,
      table: {
        category: "Eventos (Padre)",
        type: {
          summary: "Function",
          detail: "(name: string | number) => void",
        },
      },
    },

    slotDefaultCollapse: {
      name: "default (collapse)",
      description:
        "Slot para contenido dentro de cada elemento del colapso cuando se usan items. Recibe slotData e item.",
      control: false,
      table: {
        category: "Slots (Padre)",
        type: {
          summary: "Slot",
          detail: `
Props disponibles:
{
  ...slotData, // Props del slot del item
  item: CollapseItemType // Objeto completo del item
}
          `,
        },
      },
    },
    slotHeaderCollapse: {
      name: "header (collapse)",
      description:
        "Slot para personalizar el header cuando se usan items. Recibe slotData e item.",
      control: false,
      table: {
        category: "Slots (Padre)",
        type: {
          summary: "Slot",
          detail: `
Props disponibles:
{
  ...slotData,
  item: CollapseItemType
}
          `,
        },
      },
    },
    dynamic: {
      name: "dynamic",
      description:
        "Slot para contenido dinámico dentro del colapso general. Se usa cuando no se pasan items.",
      control: false,
      table: {
        category: "Slots (Padre)",
        type: { summary: "Slot" },
      },
    },

    activeNames: {
      name: "active-names",
      description:
        "Propiedad reactiva que contiene los nombres de los elementos activos.",
      control: false,
      table: {
        category: "Métodos expuestos (Padre)",
        type: { summary: "object", detail: "ComputedRef<(string | number)[]>" },
      },
    },
    setActiveNames: {
      name: "set-active-names",
      description: "Método para establecer los nombres activos del colapso.",
      control: false,
      table: {
        category: "Métodos expuestos (Padre)",
        type: {
          summary: "Function",
          detail: "(activeNames: (string | number)[]) => void",
        },
      },
    },
    title: {
      name: "title",
      description: "Título del collapse item.",
      control: false,
      table: {
        category: "Props (Hijo)",
        type: { summary: "string" },
      },
    },
    name: {
      name: "name",
      description: "Nombre único del item del collapse.",
      control: false,
      table: {
        category: "Props (Hijo)",
        type: { summary: "string | number" },
      },
    },
    disabled: {
      name: "disabled",
      description: "Deshabilita el item del collapse.",
      control: false,
      table: {
        category: "Props (Hijo)",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    iconsRight: {
      name: "icons-right",
      description:
        "Iconos a la derecha del item del collapse. Formato: `Array<{icon: IconString, onClick?: Function, spin?: boolean}>`",
      control: false,
      table: {
        category: "Props (Hijo)",
        type: { summary: "IconsType[]" },
        defaultValue: { summary: "[]" },
      },
    },
    iconsLeft: {
      name: "icons-left",
      description:
        "Iconos a la izquierda del item del collapse. Formato: `Array<{icon: IconString, onClick?: Function, spin?: boolean}>`",
      control: false,
      table: {
        category: "Props (Hijo)",
        type: { summary: "IconsType[]" },
        defaultValue: { summary: "[]" },
      },
    },
    description: {
      name: "description",
      description: "Descripción del item del collapse.",
      control: false,
      table: {
        category: "Props (Hijo)",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    content: {
      name: "content",
      description:
        "Contenido del item del collapse, puede ser un string o una función que retorne un string.",
      control: false,
      table: {
        category: "Props (Hijo)",
        type: { summary: "string | (() => string)" },
        defaultValue: { summary: "" },
      },
    },
    expandIconPositionItem: {
      name: "expand-icon-position",
      description:
        "Posición del icono de expansión dentro del item del collapse.",
      control: false,
      table: {
        category: "Props (Hijo)",
        type: { summary: "string" },
        defaultValue: { summary: "right" },
      },
    },
    headerOnly: {
      name: "header-only",
      description:
        "Si es true, el header solo ejecuta un evento sin abrir/cerrar el body. Útil para acciones como navegación, mostrar modales, etc.",
      control: "boolean",
      table: {
        category: "Props (Hijo)",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    hideExpandIcon: {
      name: "hide-expand-icon",
      description:
        "Si es true, oculta el icono de expansión/colapso. A diferencia de 'headerOnly' (que mantiene el icono visible), 'hideExpandIcon' oculta completamente el icono. Ambas props ejecutan solo un evento sin expandir el item.",
      control: "boolean",
      table: {
        category: "Props (Hijo)",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // ===== SLOTS DEL COMPONENTE HIJO (Hijo) =====
    slotHeader: {
      name: "header",
      description:
        "Slot para personalizar el header del collapse item. Recibe las props del item.",
      control: false,
      table: {
        category: "Slots (Hijo)",
        type: {
          summary: "Slot",
          detail: `
Props disponibles:
{
  isActive: boolean;
  name: string | number;
  title: string;
  description: string;
  disabled: boolean;
  headerOnly: boolean;
  expandIconPosition: 'left' | 'right';
  hideExpandIcon: boolean;
  iconsLeft: IconsType[];
  iconsRight: IconsType[];
  focusing: boolean;
}
          `,
        },
      },
    },
    slotDefaultItem: {
      name: "default",
      description:
        "Slot para contenido del body del collapse item. Recibe las mismas props que el slot header.",
      control: false,
      table: {
        category: "Slots (Hijo)",
        type: {
          summary: "Slot",
          detail: `
Props disponibles:
{
  isActive: boolean;
  name: string | number;
  title: string;
  description: string;
  disabled: boolean;
  headerOnly: boolean;
  expandIconPosition: 'left' | 'right';
  hideExpandIcon: boolean;
  iconsLeft: IconsType[];
  iconsRight: IconsType[];
  focusing: boolean;
}
          `,
        },
      },
    },
  },
  args: {
    accordion: false,
    expandIconPosition: "right",
    items: [
      {
        title: "Este es un título",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        iconsLeft: [{ icon: "regular tag" }],
        content:
          "Este es el contenido del colapso. Puedes poner cualquier cosa aquí, incluso HTML.",
      },
    ],
  },
};
export default meta;
type Story = StoryObj<CollapseInstance>;

export const Basic: Story = {
  name: "Básico",
  render: (args) => ({
    components: { GCollapse, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-collapse v-model="args.modelValue" :accordion="args.accordion" :expand-icon-position="args.expandIconPosition" :items="args.items" class="flex flex-col gap-4" />
      </g-config-provider>
    `,
  }),
};

export const accordionExample: Story = {
  name: "Acordeón",
  parameters: {
    docs: {
      description: {
        story: `Ejemplo de uso del modo acordeón, donde solo un elemento puede estar abierto a la vez.`,
      },
    },
  },
  render: () => ({
    components: { GConfigProvider, GCollapse, GCollapseItem },
    setup() {
      const items: CollapseItemType[] = [
        {
          title: "Consistencia",
          name: "1",
          disabled: false,
          description:
            "La consistencia es clave para una buena experiencia de usuario.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        },
        {
          title: "Feedback",
          name: "2",
          disabled: false,
          description:
            "El feedback es importante para mejorar la experiencia del usuario.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        },
        {
          title: "Eficiencia",
          name: "3",
          disabled: false,
          description:
            "La eficiencia es fundamental para una buena experiencia de usuario.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        },
      ];

      return { items };
    },
    template: `
      <g-config-provider>
        <g-collapse :items="items" class="flex flex-col gap-4" accordion />
      </g-config-provider>
    `,
  }),
};

export const CustomIcons: Story = {
  name: "Iconos personalizados",
  parameters: {
    docs: {
      description: {
        story: `Ejemplo de uso de iconos personalizados en los elementos del colapso. Puedes agregar iconos a la izquierda y derecha de cada elemento, y definir acciones al hacer clic en ellos.`,
      },
    },
  },
  render: () => ({
    components: { GConfigProvider, GCollapse, GCollapseItem },
    setup() {
      const items: CollapseItemType[] = [
        {
          title: "Consistencia",
          name: "1",
          disabled: false,
          description:
            "La consistencia es clave para una buena experiencia de usuario.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
          iconsLeft: [
            {
              icon: "regular globe",
              onClick: (name, icon, isActive) => {
                console.info(
                  `Icono izquierdo clickeado en Consistencia: ${icon}, Activo: ${isActive}, Id: ${name}`
                );
              },
            },
          ],
          iconsRight: [
            {
              icon: "regular heart",
              onClick: (name, icon, isActive) => {
                console.info(
                  `Icono derecho clickeado en Feedback: ${icon}, Activo: ${isActive}, Id: ${name}`
                );
              },
            },
          ],
        },
        {
          title: "Feedback",
          name: "2",
          disabled: false,
          description:
            "El feedback es importante para mejorar la experiencia del usuario.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
          iconsLeft: [
            {
              icon: "regular landmark",
              onClick: (name, icon, isActive) => {
                console.info(
                  `Icono izquierdo clickeado en Feedback: ${icon}, Activo: ${isActive}, Id: ${name}`
                );
              },
            },
          ],
          iconsRight: [
            {
              icon: "regular heart",
              onClick: (name, icon, isActive) => {
                console.info(
                  `Icono derecho clickeado en Feedback: ${icon}, Activo: ${isActive}, Id: ${name}`
                );
              },
            },
          ],
        },
        {
          title: "Eficiencia",
          name: "3",
          disabled: false,
          description:
            "La eficiencia es fundamental para una buena experiencia de usuario.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
          iconsLeft: [
            {
              icon: "regular gear",
              onClick: (name, icon, isActive) => {
                console.info(
                  `Icono izquierdo clickeado en Eficiencia: ${icon}, Activo: ${isActive}, Id: ${name}`
                );
              },
            },
          ],
          iconsRight: [
            {
              icon: "regular heart",
              onClick: (name, icon, isActive) => {
                console.info(
                  `Icono derecho clickeado en Eficiencia: ${icon}, Activo: ${isActive}, Id: ${name}`
                );
              },
            },
          ],
        },
        {
          title: "Accesibilidad",
          name: "4",
          disabled: false,
          description:
            "La accesibilidad es esencial para que todos los usuarios puedan interactuar con el sistema.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
          iconsLeft: [
            {
              icon: "regular store",
              onClick: (name, icon, isActive) => {
                console.info(
                  `Icono izquierdo clickeado en Accesibilidad: ${icon}, Activo: ${isActive}, Id: ${name}`
                );
              },
            },
          ],
          iconsRight: [
            {
              icon: "regular heart",
              onClick: (name, icon, isActive) => {
                console.info(
                  `Icono derecho clickeado en Accesibilidad: ${icon}, Activo: ${isActive}, Id: ${name}`
                );
              },
            },
          ],
        },
      ];

      return { items };
    },
    template: `
      <g-config-provider>
        <g-collapse :items="items" class="flex flex-col gap-4" accordion />
      </g-config-provider>
    `,
  }),
};

export const positionIcon: Story = {
  name: "Posición del icono de expansión",
  parameters: {
    docs: {
      description: {
        story: `Puedes cambiar la posición del icono de expansión a la izquierda o derecha de cada elemento del colapso.`,
      },
    },
  },
  render: () => ({
    components: { GConfigProvider, GCollapse, GCollapseItem, GRadioGroup },
    setup() {
      const selectedValue = ref("right");

      const items: CollapseItemType[] = [
        {
          title: "Consistencia",
          name: "1",
          disabled: false,
          description:
            "La consistencia es clave para una buena experiencia de usuario.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        },
        {
          title: "Feedback",
          name: "2",
          disabled: false,
          description:
            "El feedback es importante para mejorar la experiencia del usuario.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        },
        {
          title: "Eficiencia",
          name: "3",
          disabled: false,
          description:
            "La eficiencia es fundamental para una buena experiencia de usuario.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        },
        {
          title: "Accesibilidad",
          name: "4",
          disabled: false,
          description:
            "La accesibilidad es esencial para que todos los usuarios puedan interactuar con el sistema.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        },
      ];

      const options = [
        { value: "left", label: "Izquierda" },
        { value: "right", label: "Derecha" },
      ];

      return { items, options, selectedValue };
    },
    template: `
      <g-config-provider>
        <div class="flex items-center justify-center">
          <g-radio-group v-model="selectedValue" :options="options" class="mb-4" />
        </div>
        <g-collapse :items="items" class="flex flex-col gap-4" :expand-icon-position="selectedValue" />
      </g-config-provider>
    `,
  }),
};

export const preventCollpsing: Story = {
  name: "Prevención de collapse",
  parameters: {
    docs: {
      description: {
        story: `Puedes prevenir el colapso de un elemento utilizando el hook \`before-collapse\`. Si este hook devuelve \`false\` o una \`Promise\` que se rechaza, el colapso no ocurrirá.`,
      },
    },
  },
  render: () => ({
    components: { GConfigProvider, GCollapse, GCollapseItem },
    setup() {
      const activeNames = ref(["1"]);
      const loading = ref(false);

      const items = ref<CollapseItemType[]>([
        {
          title: "Consistencia",
          name: "1",
          disabled: false,
          description:
            "La consistencia es clave para una buena experiencia de usuario.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        },
        {
          title: "Feedback",
          name: "2",
          disabled: false,
          description:
            "El feedback es importante para mejorar la experiencia del usuario.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        },
        {
          title: "Eficiencia",
          name: "3",
          disabled: false,
          description:
            "La eficiencia es fundamental para una buena experiencia de usuario.",
          content:
            "Este cliente es el representante legal de la empresa. Puede editar sus datos o eliminarlo si ya no es necesario. También puede agregar más representantes legales si es necesario.",
        },
      ]);

      const beforeCollapse = (name: string): Promise<boolean> => {
        items.value[parseInt(name) - 1].iconsLeft = [
          {
            icon: "regular arrows-rotate",
            spin: true,
          },
        ];
        return new Promise((resolve) => {
          setTimeout(() => {
            items.value[parseInt(name) - 1].iconsLeft = [];
            return resolve(true);
          }, 1500);
        });
      };

      return { items, activeNames, beforeCollapse, loading };
    },
    template: `
      <g-config-provider>
        <g-collapse v-model="activeNames" :items="items" class="flex flex-col gap-4" :before-collapse="(name) => beforeCollapse(name)" />
      </g-config-provider>
    `,
  }),
};

export const slotDefault: Story = {
  name: "Slot Default",
  parameters: {
    docs: {
      description: {
        story: `Puedes utilizar el slot \`default\` para agregar contenido dentro de cada elemento del collapse. Este slot se renderiza dentro de cada \`g-collapse-item\`.`,
      },
    },
  },
  render: () => ({
    components: {
      GConfigProvider,
      GCollapse,
      GCollapseItem,
      GForm,
      GFormItem,
      GInput,
      GButton,
      GTag,
    },
    setup() {
      const activeNames = ref(["1"]);
      const formData = reactive({
        name: "Juan Pérez",
        email: "juan@ejemplo.com",
        phone: "+51 999888777",
        address: "Av. Principal 123",
        ciudad: "Lima",
        country: "Perú",
      });

      const iconRight: CollapseItemType["iconsRight"] = [
        {
          icon: "regular trash-xmark",
          onClick: (name) => {
            items.value = items.value.filter((item) => item.name !== name);
          },
        },
      ];

      const items = ref<CollapseItemType[]>([
        {
          title: "Representante Legal 1",
          name: "1",
          iconsLeft: [{ icon: "regular user" }],
          description: "CUIL 1902945728",
          iconsRight: iconRight,
        },
        {
          title: "Representante Legal 2",
          name: "2",
          iconsLeft: [{ icon: "regular user" }],
          description: "CUIL 1902945728",
          iconsRight: iconRight,
        },
        {
          title: "Representante Legal 3",
          name: "3",
          iconsLeft: [{ icon: "regular user" }],
          description: "CUIL 1902945728",
          iconsRight: iconRight,
        },
      ]);

      const handleSaveRepresentative = (item: CollapseItemType["name"]) => {
        activeNames.value = activeNames.value.filter((name) => name !== item);
      };

      return { items, formData, activeNames, handleSaveRepresentative };
    },
    template: `
      <g-config-provider>
        <g-collapse :items="items" class="flex flex-col gap-6" v-model="activeNames">
          <template #header="{ item }">
            <div class="flex items-start flex-col gap-xxs">
              <h6 class="text-6 font-semibold text-primary-txt line-clamp-2 overflow-hidden text-ellipsis">
                {{ item.title }}
              </h6>
              <span class="text-2 font-medium text-secondary-txt line-clamp-1 overflow-hidden text-ellipsis">
                {{ item.description }}
              </span>
              <g-tag text="completado" size="xs" type="success" prefix-icon="solid check" suffix-icon="solid check" />
            </div>
          </template>
          <template #default="{ item }">
            <div class="flex w-full">
              <g-form :model="formData" class="w-full">
                <div class="grid grid-cols-2 gap-4">
                  <g-form-item>
                    <g-input v-model="formData.name" label="Nombre Completo" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.email" label="Correo Electrónico" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.phone" label="Teléfono" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.address" label="Dirección" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.ciudad" label="Ciudad" />
                  </g-form-item>
                  <g-form-item>
                    <g-input v-model="formData.country" label="País" />
                  </g-form-item>
                </div>
                <div class="flex gap-4 mt-4">
                  <g-button
                    @click="() => handleSaveRepresentative(item.name)"
                  >
                    Guardar
                  </g-button>
                  <g-button @click="() => handleSaveRepresentative(item.name)" variant="secondary">Cancelar</g-button>
                </div>
              </g-form>
            </div>
          </template>
        </g-collapse>
      </g-config-provider>
    `,
  }),
};

export const simpleDifferentContent: Story = {
  name: "Collapse item con formularios",
  parameters: {
    docs: {
      description: {
        story: `Ejemplo de uso de GCollapseItem con un formulario.`,
      },
    },
  },
  render: () => ({
    components: {
      GConfigProvider,
      GCollapse,
      GCollapseItem,
      GForm,
      GFormItem,
      GInput,
    },
    setup() {
      const activeNames = ref(1);
      const formData = reactive({
        name: "Pepito",
        lastName: "Perez",
        phone: "999888777",
        email: "pepito@ejemplo.com",
        city: "Lima",
        address: "",
      });
      return { activeNames, formData };
    },
    template: `
      <g-config-provider>
        <g-collapse v-model="activeNames" class="flex flex-col gap-4" accordion>
          <template #dynamic>
            <g-collapse-item name="1">
              <template #header>
                <p class="text-6 font-semibold text-blue-600">Datos básicos</p>
              </template>
              <template #default>
                <g-form :model="formData" class="w-full">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <g-form-item label="Nombre">
                      <g-input v-model="formData.name" label="Nombre" />
                    </g-form-item>
                    <g-form-item label="Apellido">
                      <g-input v-model="formData.lastName" label="Apellido" />
                    </g-form-item>
                  </div>
                </g-form>
              </template>
            </g-collapse-item>

            <g-collapse-item name="2" title="Datos de contacto">
              <g-form :model="formData" class="w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <g-form-item label="Teléfono">
                    <g-input v-model="formData.phone" label="Teléfono" />
                  </g-form-item>
                  <g-form-item label="Email">
                    <g-input v-model="formData.email" label="Email" />
                  </g-form-item>
                </div>
              </g-form>
            </g-collapse-item>

            <g-collapse-item name="3" title="Datos de dirección">
              <g-form :model="formData" class="w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <g-form-item label="Ciudad">
                    <g-input v-model="formData.city" label="Ciudad" />
                  </g-form-item>
                  <g-form-item label="Dirección">
                    <g-input v-model="formData.address" label="Dirección" />
                  </g-form-item>
                </div>
              </g-form>
            </g-collapse-item>
          </template>
        </g-collapse>
      </g-config-provider>
    `,
  }),
};

export const headerOnlyExample: Story = {
  name: "Header solo click",
  parameters: {
    docs: {
      description: {
        story: `Ejemplo de uso de las props \`headerOnly\` y \`hideExpandIcon\` en GCollapseItem. 
        
- **headerOnly**: El item solo ejecuta un evento sin expandirse, pero mantiene el icono de flecha.
- **hideExpandIcon**: Oculta el icono de flecha y el item no se expande (se comporta como headerOnly).`,
      },
    },
  },
  render: () => ({
    components: { GConfigProvider, GCollapse, GCollapseItem, GIconFont },
    setup() {
      const activeNames = ref(["1"]);
      const message = ref("");

      const handleHeaderClick = (name: string | number) => {
        message.value = `Se hizo clic en el header: ${name} a las ${new Date().toLocaleTimeString()}`;
        console.log("Header clickeado:", name);
      };

      return { activeNames, message, handleHeaderClick };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div v-if="message" class="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p class="text-blue-800">{{ message }}</p>
          </div>
          
          <g-collapse v-model="activeNames" class="flex flex-col gap-4" @header-click="handleHeaderClick">
            <template #dynamic>
              <!-- Item normal que se abre/cierra -->
              <g-collapse-item name="1" title="Abrir normal">
                <template #default>
                  <div class="p-4 bg-gray-50 rounded-lg">
                    <p>Este es un item normal que se abre y cierra al hacer click en el header.</p>
                  </div> 
                </template>
              </g-collapse-item>

             <!-- Item con headerOnly que solo ejecuta evento -->
              <g-collapse-item name="2" title="Ejecutar evento" header-only>
                <template #default>
                  <div class="p-4 bg-green-50 rounded-lg">
                    <p>Este contenido nunca se mostrará porque headerOnly es true.</p>
                  </div>
                </template>
              </g-collapse-item>
              <g-collapse-item name="3" title="Ejecutar evento 2" header-only>
                <template #default>
                  <div class="p-4 bg-green-50 rounded-lg">
                    <p>Este contenido nunca se mostrará porque headerOnly es true.</p>
                  </div>
                </template>
              </g-collapse-item>

              <!-- Item con hideExpandIcon (sin icono, no se expande) -->
              <g-collapse-item name="4" title="hideExpandIcon (sin icono)" hide-expand-icon />
            </template>
          </g-collapse>
        </div>
      </g-config-provider>
    `,
  }),
};

export const slotDefaultWithProps: Story = {
  name: "Slot default con props",
  parameters: {
    docs: {
      description: {
        story: `Ejemplo que demuestra las props disponibles en el slot default de GCollapseItem: isActive, name, title, description, disabled, headerOnly, expandIconPosition, hideExpandIcon, iconsLeft, iconsRight, focusing.`,
      },
    },
  },
  render: () => ({
    components: { GConfigProvider, GCollapse, GCollapseItem, GIconFont },
    setup() {
      const activeNames = ref(["1"]);

      return { activeNames };
    },
    template: `
      <g-config-provider>
        <g-collapse v-model="activeNames" class="flex flex-col gap-4">
          <template #dynamic>
            <!-- Item normal con lista de props -->
            <g-collapse-item 
              name="1" 
              title="Item normal" 
              description="Descripción del item"
              :icons-left="[{ icon: 'regular user' }]"
              :icons-right="[{ icon: 'regular gear' }]"
            >
              <template #default="slotData">
                <div class="p-4 bg-blue-50 rounded-lg">
                  <h4 class="font-semibold text-blue-800 mb-3">Props disponibles:</h4>
                  <ul class="space-y-1 text-sm">
                    <li v-for="[key, value] in Object.entries(slotData)" :key="key">
                      <strong>{{ key }}: </strong> 
                      <span :class="typeof value === 'boolean' ? (value ? 'text-green-600' : 'text-red-600') : 'text-gray-700'">
                        {{ typeof value === 'object' ? JSON.stringify(value) : value }}
                      </span>
                    </li>
                  </ul>
                </div>
              </template>
            </g-collapse-item>
          </template>
        </g-collapse>
      </g-config-provider>
    `,
  }),
};
