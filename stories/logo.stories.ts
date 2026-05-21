import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, onMounted, onUnmounted } from 'vue';
import { GLogo, LOGO_NAMES, LOGO_PLACEHOLDER_SIZES, LOGO_SIZES } from '@flash-global66/g-logo/index.ts';
import { GSegmented } from '@flash-global66/g-segmented';
import { GIconFont } from '@flash-global66/g-icon-font';
import { GConfigProvider } from '../components/config-provider';
import { version, peerDependencies } from '@flash-global66/g-logo/package.json';
import { generatePeerDepsList, generatePeerDepsInstalls } from '../helper/documentation-stories';

const meta: Meta<typeof GLogo> = {
  title: 'Basic/Logo',
  component: GLogo,
  parameters: {
    docs: {
      description: {
        component: `
El componente Logo muestra los logos de marca de Global66 con soporte de tamaños y filtros CSS.

> Versión actual: ${version}

## Características
- 4 logos disponibles: icon-bre-b, icon-global66, label-global66, logo-global66
- 4 tamaños definidos por altura (el ancho se ajusta automáticamente respetando la proporción)
- Prop \`filter\` para aplicar cualquier filtro CSS (grayscale, brightness, sepia, etc.)
- Lazy loading con IntersectionObserver para optimizar el rendimiento
- Manejo de errores cuando el logo no puede cargarse
- Tipado estricto para autocompletado

## Instalación

\`\`\`bash
yarn add @flash-global66/g-logo
\`\`\`

## Importación del componente
\`\`\`typescript
import { GLogo } from '@flash-global66/g-logo'

// Recomendado: importar en los estilos globales
@use '@flash-global66/g-logo/styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias. Puede que funcione con otras versiones, pero no se garantiza.
${generatePeerDepsList(peerDependencies)}

\`\`\`bash
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

## Tamaños disponibles (basados en altura)
- **xs**: 12px de alto
- **sm**: 16px de alto
- **md**: 24px de alto (predeterminado)
- **lg**: 32px de alto

## Filtros de color disponibles
El prop \`filter\` acepta cualquier valor CSS válido de la propiedad \`filter\`:
- **Original**: \`none\` (predeterminado)
- **Gris**: \`grayscale(100%)\`
- **Negro**: \`brightness(0)\`
- **Blanco**: \`brightness(0) invert(1)\`
- **Sepia**: \`sepia(100%)\`
- **Opacidad reducida**: \`opacity(50%)\`

## Agregar nuevos logos

1. Coloca el archivo SVG en \`components/logo/src/assets/logos/\` en minúsculas (ej: \`mi-logo.svg\`)
2. Añade el nombre en \`src/constants/logo.constants.ts\` dentro de \`LOGO_NAMES\`
3. Ejecuta \`yarn build logo\`
        `
      }
    }
  },
  argTypes: {
    name: {
      description: 'Nombre del logo a mostrar',
      control: 'select',
      options: LOGO_NAMES,
      table: {
        category: 'Principal',
        type: { summary: 'LogoName' },
        defaultValue: { summary: 'logo-global66' },
      }
    },
    size: {
      description: 'Tamaño del logo (controla la altura; el ancho es automático)',
      control: 'select',
      options: Object.keys(LOGO_SIZES),
      table: {
        category: 'Apariencia',
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      }
    },
    filter: {
      description: 'Filtro CSS para modificar el color del logo',
      control: 'text',
      table: {
        category: 'Apariencia',
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      }
    },
    lazyLoad: {
      description: 'Activa la carga diferida: el logo se carga solo cuando entra en el viewport',
      control: 'boolean',
      table: {
        category: 'Comportamiento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      }
    }
  },
  args: {
    name: 'logo-global66',
    size: 'md',
    filter: 'none',
    lazyLoad: true
  }
} as Meta;

export default meta;
type Story = StoryObj<typeof GLogo>;

export const Primary: Story = {
  name: 'Uso básico',
  render: (args) => ({
    components: { GLogo, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4 p-4">
          <g-logo v-bind="args" />
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Uso básico del componente. Usa los controles para explorar las props interactivamente.'
      },
      source: {
        code: `
<template>
  <g-logo name="logo-global66" size="md" />
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
</script>
`,
        language: 'html'
      }
    }
  }
};

export const AllLogos: Story = {
  name: 'Todos los logos',
  render: () => ({
    components: { GLogo, GConfigProvider, GSegmented },
    setup() {
      const selectedSize = ref('md');
      const sizeOptions = Object.keys(LOGO_SIZES).map(s => ({ label: s.toUpperCase(), value: s }));
      return { LOGO_NAMES, LOGO_SIZES, selectedSize, sizeOptions };
    },
    template: `
      <g-config-provider>
        <div class="space-y-6">
          <g-segmented block v-model="selectedSize" :options="sizeOptions" />
          <div class="flex flex-wrap gap-8 items-center">
            <div
              v-for="name in LOGO_NAMES"
              :key="name"
              class="flex flex-col items-center gap-3 p-4 border rounded-md bg-white"
            >
              <g-logo :name="name" :size="selectedSize" />
              <span class="text-xs text-gray-500 font-mono">{{ name }}</span>
            </div>
          </div>
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Los 4 logos disponibles en todos los tamaños. El ancho se ajusta automáticamente a la proporción natural de cada logo.'
      },
      source: {
        code: `
<template>
  <g-logo name="icon-bre-b" size="md" />
  <g-logo name="label-global66" size="md" />
  <g-logo name="icon-global66" size="md" />
  <g-logo name="logo-global66" size="md" />
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
</script>
`,
        language: 'html'
      }
    }
  }
};

export const Sizes: Story = {
  name: 'Tamaños disponibles',
  render: () => ({
    components: { GLogo, GConfigProvider },
    setup() {
      return { LOGO_SIZES };
    },
    template: `
      <g-config-provider>
        <div class="space-y-8">
          <div v-for="(px, size) in LOGO_SIZES" :key="size" class="flex items-center gap-6">
            <span class="text-sm font-mono text-gray-400 w-8">{{ size }}</span>
            <span class="text-xs text-gray-300 w-12">{{ px }}</span>
            <g-logo name="logo-global66" :size="size" />
          </div>
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Los 4 tamaños definidos por altura. El ancho del logo varía según la proporción natural del SVG.'
      },
      source: {
        code: `
<template>
  <g-logo name="logo-global66" size="xs" />  <!-- 12px alto -->
  <g-logo name="logo-global66" size="sm" />  <!-- 16px alto -->
  <g-logo name="logo-global66" size="md" />  <!-- 24px alto -->
  <g-logo name="logo-global66" size="lg" />  <!-- 32px alto -->
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
</script>
`,
        language: 'html'
      }
    }
  }
};

export const Filters: Story = {
  name: 'Filtros de color',
  render: () => ({
    components: { GLogo, GConfigProvider, GSegmented },
    setup() {
      const selectedLogo = ref('logo-global66');
      const logoOptions = LOGO_NAMES.map(n => ({ label: n, value: n }));

      const filters = [
        { label: 'Original',          value: 'none' },
        { label: 'Gris',              value: 'grayscale(100%)' },
        { label: 'Negro',             value: 'brightness(0)' },
        { label: 'Blanco',            value: 'brightness(0) invert(1)' },
        { label: 'Sepia',             value: 'sepia(100%)' },
        { label: '50% opacidad',      value: 'opacity(50%)' },
        { label: 'Contraste alto',    value: 'contrast(200%)' },
        { label: 'Invertido',         value: 'invert(100%)' },
      ];

      return { filters, selectedLogo, logoOptions };
    },
    template: `
      <g-config-provider>
        <div class="space-y-6">
          <g-segmented block v-model="selectedLogo" :options="logoOptions" />
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="f in filters"
              :key="f.value"
              class="flex flex-col items-center gap-3 p-4 border rounded-md"
              :class="f.label === 'Blanco' ? 'bg-gray-800' : 'bg-white'"
            >
              <g-logo :name="selectedLogo" size="md" :filter="f.value" />
              <span class="text-xs text-center font-medium" :class="f.label === 'Blanco' ? 'text-gray-300' : 'text-gray-500'">{{ f.label }}</span>
              <code class="text-xs text-gray-400 text-center break-all">{{ f.value }}</code>
            </div>
          </div>
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'El prop `filter` acepta cualquier valor CSS válido de la propiedad `filter`. Cambia el logo seleccionado para ver cómo afecta a cada uno.'
      },
      source: {
        code: `
<template>
  <!-- Original -->
  <g-logo name="logo-global66" size="md" />

  <!-- Gris -->
  <g-logo name="logo-global66" size="md" filter="grayscale(100%)" />

  <!-- Negro puro -->
  <g-logo name="logo-global66" size="md" filter="brightness(0)" />

  <!-- Blanco puro (sobre fondo oscuro) -->
  <g-logo name="logo-global66" size="md" filter="brightness(0) invert(1)" />

  <!-- Sepia -->
  <g-logo name="logo-global66" size="md" filter="sepia(100%)" />
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
</script>
`,
        language: 'html'
      }
    }
  }
};

export const ErrorHandling: Story = {
  name: 'Manejo de errores',
  render: () => ({
    components: { GLogo, GConfigProvider },
    setup() {
      return { LOGO_SIZES, LOGO_PLACEHOLDER_SIZES };
    },
    template: `
      <g-config-provider>
        <div class="space-y-6">
          <div class="flex flex-wrap gap-6 items-end">
            <div
              v-for="(px, size) in LOGO_SIZES"
              :key="size"
              class="flex flex-col items-center gap-2"
            >
              <g-logo name="logo-inexistente" :size="size" />
              <span class="text-sm text-gray-500">
                {{ size }} ({{ LOGO_PLACEHOLDER_SIZES[size].width }} × {{ LOGO_PLACEHOLDER_SIZES[size].height }})
              </span>
            </div>
          </div>

          <div class="bg-gray-50 p-4 rounded-md">
            <h4 class="font-medium mb-2">¿Cómo funciona?</h4>
            <p class="text-sm text-gray-700">
              Cuando un logo no puede cargarse, el componente muestra automáticamente un estado de error con el código "404".
              Esto ocurre en dos casos:
            </p>
            <ul class="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>El nombre no existe en <code>LOGO_NAMES</code> (archivo SVG no encontrado)</li>
              <li>El archivo SVG existe pero no puede cargarse (error de red, archivo corrupto, etc.)</li>
            </ul>
          </div>
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demostración del estado de error cuando el logo no puede cargarse.'
      },
      source: {
        code: `
<!-- Este logo no existe y mostrará el estado de error -->
<g-logo name="logo-inexistente" size="md" />

<script setup>
import { GLogo } from '@flash-global66/g-logo';
</script>
`,
        language: 'html'
      }
    }
  }
};
