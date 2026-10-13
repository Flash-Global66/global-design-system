import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, ref } from 'vue';
import { action } from 'storybook/actions';

// COMPONENTS
import { GDragList } from '@flash-global66/g-drag-list/index.ts';
import GAvatar from '../components/avatar';
import { GIconButton } from '@flash-global66/g-icon-button/index.ts';
import { GSearchInput } from '@flash-global66/g-search-input/index.ts';

// CONFIG
import { GConfigProvider } from '@flash-global66/g-config-provider/index.ts';

import {
  version,
  peerDependencies,
} from '@flash-global66/g-drag-list/package.json';
import {
  generatePeerDepsList,
  generatePeerDepsInstalls,
} from '../helper/documentation-stories';

const meta: Meta = {
  title: 'Data/Drag List',
  component: GDragList,
  parameters: {
    docs: {
      description: {
        component: `
El componente Drag List muestra dos paneles: un **origen** con los elementos disponibles y un **destino** con los elementos elegidos. Los elementos se mueven entre paneles arrastrando (pointer events, mouse y táctil), con los botones de las tarjetas o con el teclado. Con \`ordered\` el orden del destino es el orden de un flujo, con un nodo de inicio y de fin opcionales.

> Versión actual: ${version}

## Características
- Origen plano o agrupado (\`{ key, label, items }\`); la búsqueda y el agrupado los resuelve quien consume el componente
- Destino vertical u horizontal
- Reordenar arrastrando o con teclado
- Quitar arrastrando de vuelta al origen, con botón o con teclado (\`keyboard-remove\`)
- Elementos repetibles con \`clone-item\`
- Nodos de inicio y fin (\`start-node\`, \`end-node\`) para flujos
- Auto-scroll de los paneles durante el arrastre
- Región live para lectores de pantalla y textos personalizables (\`texts\`)
- Slots para personalizar tarjetas, encabezados, conectores y el overlay de soltado

> Inspirado en el comportamiento de [SortableJS](https://github.com/SortableJS/Sortable). No se copió código.

### Instalación

\`\`\`bash
yarn add @flash-global66/g-drag-list
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias. Puede que funcione con otras versiones, pero no se garantiza.
${generatePeerDepsList(peerDependencies)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GDragList } from '@flash-global66/g-drag-list'

# recomendado importar en los estilos globales
import '@flash-global66/g-drag-list/styles.scss'
\`\`\`

### Ejemplo de uso

\`\`\`html
<template>
  <g-drag-list
    v-model="selected"
    :source="source"
    item-key="id"
    item-label="name"
    ordered
    end-node="Cierre del informe"
  >
    <template #source-item="{ item, add }">
      <span>{{ item.name }}</span>
      <button @click="add()">Agregar</button>
    </template>
    <template #target-item="{ item, remove }">
      <span>{{ item.name }}</span>
      <button @click="remove()">Quitar</button>
    </template>
  </g-drag-list>
</template>

<script setup>
import { ref } from 'vue';
import { GDragList } from '@flash-global66/g-drag-list';

const selected = ref([]);
const source = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Beto' },
];
</script>
\`\`\`

## Props
| Prop | Tipo | Default | Descripción |
| --- | --- | --- | --- |
| \`v-model\` | \`DragListItem[]\` | \`[]\` | Elementos del destino |
| \`source\` | \`DragListItem[] \\| DragListSourceGroup[]\` | \`[]\` | Elementos del origen, planos o agrupados |
| \`item-key\` | \`string \\| (item) => string \\| number\` | requerido | Identificador único de cada elemento |
| \`item-label\` | \`string \\| (item) => string\` | - | Texto legible del elemento (anuncios de accesibilidad) |
| \`ordered\` | \`boolean\` | \`false\` | El orden del destino es el orden del flujo |
| \`repeatable\` | \`boolean\` | \`false\` | Permite agregar el mismo elemento varias veces |
| \`clone-item\` | \`(item) => item\` | - | Clona el elemento al insertarlo (con \`repeatable\`) |
| \`drag-to-remove\` | \`boolean\` | \`true\` | Soltar sobre el origen quita del destino |
| \`keyboard-remove\` | \`boolean\` | \`false\` | Delete/Backspace quita la tarjeta enfocada |
| \`direction\` | \`'vertical' \\| 'horizontal'\` | \`'vertical'\` | Eje del destino |
| \`start-node\` | \`string\` | - | Texto del nodo inicial del flujo |
| \`end-node\` | \`string\` | - | Texto del nodo final del flujo |
| \`disabled\` | \`boolean\` | \`false\` | Bloquea toda interacción |
| \`texts\` | \`Partial<DragListTexts>\` | - | Textos sobrescribibles |

## Emits
| Evento | Parámetros | Descripción |
| --- | --- | --- |
| \`update:modelValue\` | \`(items)\` | Cambia el destino |
| \`add\` | \`(item, index, via)\` | Se agregó un elemento; \`via\`: \`drag\`, \`button\` o \`api\` |
| \`remove\` | \`(item, index, via)\` | Se quitó un elemento; \`via\`: \`drag\`, \`button\`, \`keyboard\` o \`api\` |
| \`reorder\` | \`(item, from, to)\` | Se reordenó un elemento del destino |

## Slots
| Slot | Props | Descripción |
| --- | --- | --- |
| \`source-header\` | - | Encabezado del origen |
| \`source-group-header\` | \`{ group }\` | Encabezado de cada grupo del origen |
| \`source-item\` | \`{ item, canAdd, add }\` | Tarjeta del origen |
| \`source-empty\` | \`{ reason }\` | Origen vacío (\`empty\` o \`all-added\`) |
| \`target-header\` | - | Encabezado del destino |
| \`target-item\` | \`{ item, index, position, isFirst, isLast, remove, moveUp, moveDown }\` | Tarjeta del destino |
| \`start\` / \`end\` | - | Contenido de los nodos de inicio y fin |
| \`connector\` | \`{ direction }\` | Conector entre tarjetas |
| \`empty\` | - | Destino vacío |
| \`drop-overlay\` | \`{ action }\` | Overlay al arrastrar sobre una zona (\`add\` o \`remove\`) |

## Métodos expuestos
\`add(item, index?)\`, \`remove(key)\` y \`move(from, to)\`.
`,
      },
    },
  },
  argTypes: {
    modelValue: {
      name: 'v-model',
      description: 'Elementos del destino',
      control: false,
      table: {
        category: 'Estado y Configuración Principal',
        type: { summary: 'DragListItem[]' },
        defaultValue: { summary: '[]' },
      },
    },
    source: {
      description: 'Elementos del origen, planos o agrupados',
      control: false,
      table: {
        category: 'Estado y Configuración Principal',
        type: { summary: 'DragListItem[] | DragListSourceGroup[]' },
        defaultValue: { summary: '[]' },
      },
    },
    itemKey: {
      name: 'item-key',
      description: 'Identificador único de cada elemento',
      control: 'text',
      table: {
        category: 'Estado y Configuración Principal',
        type: { summary: 'string | (item) => string | number' },
      },
    },
    itemLabel: {
      name: 'item-label',
      description:
        'Texto legible del elemento, usado en los anuncios de accesibilidad',
      control: 'text',
      table: {
        category: 'Estado y Configuración Principal',
        type: { summary: 'string | (item) => string' },
      },
    },
    ordered: {
      description: 'El orden del destino es el orden del flujo',
      control: 'boolean',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    repeatable: {
      description: 'Permite agregar el mismo elemento varias veces',
      control: 'boolean',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    cloneItem: {
      name: 'clone-item',
      description: 'Clona el elemento al insertarlo (con `repeatable`)',
      control: false,
      table: {
        category: 'Comportamiento',
        type: { summary: '(item) => item' },
      },
    },
    dragToRemove: {
      name: 'drag-to-remove',
      description: 'Soltar sobre el origen quita el elemento del destino',
      control: 'boolean',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    keyboardRemove: {
      name: 'keyboard-remove',
      description: 'Delete/Backspace quita la tarjeta enfocada',
      control: 'boolean',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Bloquea toda interacción',
      control: 'boolean',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    direction: {
      description: 'Eje del destino',
      control: 'select',
      options: ['vertical', 'horizontal'],
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: "'vertical' | 'horizontal'" },
        defaultValue: { summary: "'vertical'" },
      },
    },
    startNode: {
      name: 'start-node',
      description: 'Texto del nodo inicial del flujo',
      control: 'text',
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'string' },
      },
    },
    endNode: {
      name: 'end-node',
      description: 'Texto del nodo final del flujo',
      control: 'text',
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'string' },
      },
    },
    texts: {
      description: 'Textos sobrescribibles (overlays, vacío y anuncios)',
      control: 'object',
      table: {
        category: 'Apariencia y Estilo',
        type: { summary: 'Partial<DragListTexts>' },
      },
    },
    add: {
      description: 'Se agregó un elemento al destino',
      table: {
        category: 'Eventos y Métodos',
        type: {
          summary: "(item, index, via: 'drag' | 'button' | 'api') => void",
        },
      },
    },
    remove: {
      description: 'Se quitó un elemento del destino',
      table: {
        category: 'Eventos y Métodos',
        type: {
          summary:
            "(item, index, via: 'drag' | 'button' | 'keyboard' | 'api') => void",
        },
      },
    },
    reorder: {
      description: 'Se reordenó un elemento del destino',
      table: {
        category: 'Eventos y Métodos',
        type: { summary: '(item, from, to) => void' },
      },
    },
    'source-header': {
      description: 'Encabezado del origen',
      control: false,
      table: { category: 'Slots', type: { summary: 'Slot' } },
    },
    'source-group-header': {
      description: 'Encabezado de cada grupo del origen. Props: `{ group }`',
      control: false,
      table: { category: 'Slots', type: { summary: 'Slot' } },
    },
    'source-item': {
      description: 'Tarjeta del origen. Props: `{ item, canAdd, add }`',
      control: false,
      table: { category: 'Slots', type: { summary: 'Slot' } },
    },
    'source-empty': {
      description: 'Origen vacío. Props: `{ reason }`',
      control: false,
      table: { category: 'Slots', type: { summary: 'Slot' } },
    },
    'target-header': {
      description: 'Encabezado del destino',
      control: false,
      table: { category: 'Slots', type: { summary: 'Slot' } },
    },
    'target-item': {
      description:
        'Tarjeta del destino. Props: `{ item, index, position, isFirst, isLast, remove, moveUp, moveDown }`',
      control: false,
      table: { category: 'Slots', type: { summary: 'Slot' } },
    },
    start: {
      description: 'Contenido del nodo de inicio',
      control: false,
      table: { category: 'Slots', type: { summary: 'Slot' } },
    },
    end: {
      description: 'Contenido del nodo de fin',
      control: false,
      table: { category: 'Slots', type: { summary: 'Slot' } },
    },
    connector: {
      description: 'Conector entre tarjetas. Props: `{ direction }`',
      control: false,
      table: { category: 'Slots', type: { summary: 'Slot' } },
    },
    empty: {
      description: 'Destino vacío',
      control: false,
      table: { category: 'Slots', type: { summary: 'Slot' } },
    },
    'drop-overlay': {
      description: 'Overlay al arrastrar sobre una zona. Props: `{ action }`',
      control: false,
      table: { category: 'Slots', type: { summary: 'Slot' } },
    },
  },
  args: {
    itemKey: 'id',
    itemLabel: 'name',
    ordered: false,
    repeatable: false,
    dragToRemove: true,
    keyboardRemove: false,
    disabled: false,
    direction: 'vertical',
  },
};

export default meta;
type Story = StoryObj;

const fruits = [
  { id: 1, name: 'Manzana' },
  { id: 2, name: 'Plátano' },
  { id: 3, name: 'Naranja' },
  { id: 4, name: 'Pera' },
  { id: 5, name: 'Uva' },
];

const approvers = [
  { id: 1, name: 'Ana Aguilar', email: 'ana.aguilar@global66.com' },
  { id: 2, name: 'Andrés Araya', email: 'andres.araya@global66.com' },
  { id: 3, name: 'Beatriz Bravo', email: 'beatriz.bravo@global66.com' },
  { id: 4, name: 'Bruno Bustos', email: 'bruno.bustos@global66.com' },
  { id: 5, name: 'Camila Castro', email: 'camila.castro@global66.com' },
  { id: 6, name: 'Carlos Cortés', email: 'carlos.cortes@global66.com' },
  { id: 7, name: 'Bárbara Bello', email: 'barbara.bello@global66.com' },
  { id: 8, name: 'Alberto Acuña', email: 'alberto.acuna@global66.com' },
];

const initials = (name: string) =>
  name
    .split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2);

export const Simple: Story = {
  name: 'Simple',
  parameters: {
    docs: {
      description: {
        story: `Lista plana con el estado en \`v-model\`. Cada tarjeta se puede arrastrar al destino, agregar con el botón «+» o con el teclado. Soltar de vuelta sobre el origen quita el elemento.

- Origen plano
- \`item-key\` y \`item-label\`
- Reordenar y quitar en el destino`,
      },
    },
  },
  render: args => ({
    components: { GDragList, GConfigProvider },
    setup() {
      const selected = ref<Record<string, unknown>[]>([]);
      return { args, selected, fruits, action };
    },
    template: `
      <g-config-provider>
        <div class="w-full max-w-[720px]">
          <g-drag-list
            v-bind="args"
            v-model="selected"
            :source="fruits"
            @add="action('add')"
            @remove="action('remove')"
            @reorder="action('reorder')"
          >
            <template #source-header>
              <h3 class="text-base font-semibold">Frutas</h3>
            </template>
            <template #target-header>
              <h3 class="text-base font-semibold">Mi canasta</h3>
            </template>
            <template #source-item="{ item }">
              <span class="text-sm">{{ item.name }}</span>
            </template>
            <template #target-item="{ item }">
              <span class="text-sm">{{ item.name }}</span>
            </template>
          </g-drag-list>
        </div>
      </g-config-provider>
    `,
  }),
};

interface ApproversFlowOptions {
  direction: 'vertical' | 'horizontal';
  startNode?: string;
  endNode: string;
  containerClass: string;
}

function createApproversFlowRender(
  options: ApproversFlowOptions,
): NonNullable<Story['render']> {
  return args => ({
    components: {
      GDragList,
      GConfigProvider,
      GAvatar,
      GIconButton,
      GSearchInput,
    },
    setup() {
      const selected = ref<Record<string, unknown>[]>([]);
      const query = ref('');

      const groups = computed(() => {
        const term = query.value.trim().toLowerCase();
        const filtered = approvers.filter(
          a =>
            !term ||
            a.name.toLowerCase().includes(term) ||
            a.email.toLowerCase().includes(term),
        );
        const byLetter = new Map<string, typeof approvers>();
        [...filtered]
          .sort((a, b) => a.name.localeCompare(b.name))
          .forEach(a => {
            const letter = a.name[0].toUpperCase();
            byLetter.set(letter, [...(byLetter.get(letter) ?? []), a]);
          });
        return [...byLetter].map(([letter, items]) => ({
          key: letter,
          label: letter,
          items,
        }));
      });

      const onEdit = (item: Record<string, unknown>) =>
        action('edit')(item.name);

      return {
        args,
        selected,
        query,
        groups,
        initials,
        onEdit,
        action,
        ...options,
      };
    },
    template: `
        <g-config-provider>
          <div :class="containerClass">
            <g-drag-list
              v-bind="args"
              v-model="selected"
              :source="groups"
              item-key="id"
              item-label="name"
              ordered
              :direction="direction"
              :start-node="startNode"
              :end-node="endNode"
              @add="action('add')"
              @remove="action('remove')"
              @reorder="action('reorder')"
            >
              <template #source-header>
                <div class="flex flex-col gap-3">
                  <h3 class="text-base font-semibold">Aprobadores</h3>
                  <g-search-input v-model="query" placeholder="Buscar por nombre o correo" />
                </div>
              </template>
              <template #source-group-header="{ group }">
                <span class="text-xs font-semibold text-gray-500">{{ group.label }}</span>
              </template>
              <template #source-item="{ item, add }">
                <div class="flex items-center gap-3 w-full">
                  <g-avatar :text="initials(item.name)" :has-logo="false" size="small" />
                  <div class="flex flex-col flex-1 min-w-0">
                    <span class="text-sm font-semibold truncate">{{ item.name }}</span>
                    <span class="text-xs text-gray-500 truncate">{{ item.email }}</span>
                  </div>
                  <g-icon-button icon="regular plus" aria-label="Agregar aprobador" size="small" @click="add()" />
                </div>
              </template>
              <template #source-empty="{ reason }">
                <span class="text-sm text-gray-500">
                  {{ reason === 'all-added' ? 'Ya agregaste a todos los aprobadores' : 'No hay aprobadores' }}
                </span>
              </template>
              <template #target-header>
                <h3 class="text-base font-semibold">Flujo de revisión</h3>
              </template>
              <template #target-item="{ item, remove }">
                <div class="flex items-center gap-3 w-full">
                  <g-avatar :text="initials(item.name)" :has-logo="false" size="small" />
                  <div class="flex flex-col flex-1 min-w-0">
                    <span class="text-sm font-semibold truncate">{{ item.name }}</span>
                    <span class="text-xs text-gray-500 truncate">{{ item.email }}</span>
                  </div>
                  <g-icon-button icon="regular pen" aria-label="Editar aprobador" size="small" @click="onEdit(item)" />
                  <g-icon-button icon="regular trash" aria-label="Quitar aprobador" size="small" @click="remove()" />
                </div>
              </template>
            </g-drag-list>
          </div>
        </g-config-provider>
      `,
  });
}

export const FlowWithEnd: Story = {
  name: 'Flujo con fin',
  parameters: {
    docs: {
      description: {
        story: `Flujo de aprobación: el orden del destino es el orden de revisión.

- Tarjetas con \`g-avatar\`, nombre y correo
- Buscador \`g-search-input\`: el filtro y los grupos A/B/C se resuelven del lado del consumidor con \`computed\`; lo ya agregado no reaparece al buscar
- Botón «+» con \`g-icon-button\` en el origen, que llama a \`add()\`
- Editar y borrar en el slot \`target-item\` (\`remove()\`)
- \`ordered\` y \`end-node="Cierre del informe"\``,
      },
    },
  },
  render: createApproversFlowRender({
    direction: 'vertical',
    endNode: 'Cierre del informe',
    containerClass: 'w-full max-w-[760px]',
  }),
};

export const StartAndEnd: Story = {
  name: 'Inicio y fin',
  parameters: {
    docs: {
      description: {
        story: `Con \`start-node\` y \`end-node\` el destino muestra una pill al inicio y otra al final del flujo.

- \`start-node="Inicio del informe"\`
- \`end-node="Cierre del informe"\``,
      },
    },
  },
  render: args => ({
    components: { GDragList, GConfigProvider },
    setup() {
      const selected = ref<Record<string, unknown>[]>([
        approvers[0],
        approvers[2],
      ]);
      const source = approvers.slice(0, 5);
      return { args, selected, source, action };
    },
    template: `
      <g-config-provider>
        <div class="w-full max-w-[720px]">
          <g-drag-list
            v-bind="args"
            v-model="selected"
            :source="source"
            item-key="id"
            item-label="name"
            ordered
            start-node="Inicio del informe"
            end-node="Cierre del informe"
            @reorder="action('reorder')"
          >
            <template #source-item="{ item }">
              <span class="text-sm">{{ item.name }}</span>
            </template>
            <template #target-item="{ item, position }">
              <span class="text-sm">{{ position }}. {{ item.name }}</span>
            </template>
          </g-drag-list>
        </div>
      </g-config-provider>
    `,
  }),
};

export const Horizontal: Story = {
  name: 'Horizontal',
  parameters: {
    docs: {
      description: {
        story: `Con \`direction="horizontal"\` el destino crece en horizontal, pensado para espacios angostos como un móvil (aquí 375 px).`,
      },
    },
  },
  render: args => ({
    components: { GDragList, GConfigProvider },
    setup() {
      const selected = ref<Record<string, unknown>[]>([]);
      return { args, selected, fruits, action };
    },
    template: `
      <g-config-provider>
        <div class="w-[375px] border border-dashed border-gray-300 p-2">
          <g-drag-list
            v-bind="args"
            v-model="selected"
            :source="fruits"
            item-key="id"
            item-label="name"
            direction="horizontal"
            ordered
            @reorder="action('reorder')"
          >
            <template #source-item="{ item }">
              <span class="text-sm">{{ item.name }}</span>
            </template>
            <template #target-item="{ item }">
              <span class="text-sm">{{ item.name }}</span>
            </template>
          </g-drag-list>
        </div>
      </g-config-provider>
    `,
  }),
};

export const HorizontalFlow: Story = {
  name: 'Horizontal con inicio y fin',
  parameters: {
    docs: {
      description: {
        story: `El flujo completo de aprobadores en \`direction="horizontal"\`, dentro de un contenedor de 375 px como el de un móvil.

- Mismo origen que «Flujo con fin»: tarjetas con avatar, buscador y grupos A/B/C del lado del consumidor
- El origen queda arriba y el destino abajo, con las tarjetas de izquierda a derecha
- \`start-node="Inicio del informe"\` y \`end-node="Cierre del informe"\` conectados al flujo`,
      },
    },
  },
  render: createApproversFlowRender({
    direction: 'horizontal',
    startNode: 'Inicio del informe',
    endNode: 'Cierre del informe',
    containerClass: 'w-[375px] border border-dashed border-gray-300 p-2',
  }),
};

export const Repeatable: Story = {
  name: 'Repetible',
  parameters: {
    docs: {
      description: {
        story: `Con \`repeatable\` el mismo elemento se puede agregar varias veces y el origen no lo oculta. \`clone-item\` genera una copia con un \`id\` nuevo para que cada tarjeta del destino sea única.`,
      },
    },
  },
  render: args => ({
    components: { GDragList, GConfigProvider },
    setup() {
      const selected = ref<Record<string, unknown>[]>([]);
      let counter = 100;
      const cloneItem = (item: Record<string, unknown>) => ({
        ...item,
        id: ++counter,
      });
      return { args, selected, fruits, cloneItem, action };
    },
    template: `
      <g-config-provider>
        <div class="w-full max-w-[720px]">
          <g-drag-list
            v-bind="args"
            v-model="selected"
            :source="fruits"
            item-key="id"
            item-label="name"
            repeatable
            keyboard-remove
            :clone-item="cloneItem"
            @add="action('add')"
            @remove="action('remove')"
          >
            <template #source-item="{ item }">
              <span class="text-sm">{{ item.name }}</span>
            </template>
            <template #target-item="{ item, remove }">
              <div class="flex items-center justify-between w-full">
                <span class="text-sm">{{ item.name }} (#{{ item.id }})</span>
                <button type="button" class="text-xs underline" @click="remove()">Quitar</button>
              </div>
            </template>
          </g-drag-list>
        </div>
      </g-config-provider>
    `,
  }),
};

export const Disabled: Story = {
  name: 'Deshabilitado',
  parameters: {
    docs: {
      description: {
        story: `Con \`disabled\` se bloquea toda interacción: no se arrastra, no se agrega ni se quita, ni con botones ni con teclado.`,
      },
    },
  },
  render: args => ({
    components: { GDragList, GConfigProvider },
    setup() {
      const selected = ref<Record<string, unknown>[]>([fruits[0]]);
      return { args, selected, fruits };
    },
    template: `
      <g-config-provider>
        <div class="w-full max-w-[720px]">
          <g-drag-list
            v-bind="args"
            v-model="selected"
            :source="fruits"
            item-key="id"
            item-label="name"
            disabled
          >
            <template #source-item="{ item }">
              <span class="text-sm">{{ item.name }}</span>
            </template>
            <template #target-item="{ item }">
              <span class="text-sm">{{ item.name }}</span>
            </template>
          </g-drag-list>
        </div>
      </g-config-provider>
    `,
  }),
};
