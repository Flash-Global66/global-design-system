import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import {
  GLogo,
  LOGO_FILTER_LABELS,
  LOGO_FILTER_OPTIONS,
  LOGO_GROUPS,
  LOGO_NAMES,
  LOGO_PLACEHOLDER_SIZES,
  LOGO_SIZES,
} from '@flash-global66/g-logo/index.ts';
import { GSegmented } from '@flash-global66/g-segmented';
import { GIconFont } from '@flash-global66/g-icon-font';
import { GConfigProvider } from '../components/config-provider';

const meta: Meta<typeof GLogo> = {
  title: 'Basic/Logo',
  component: GLogo,
  parameters: {
    docs: {
      description: {
        component: `
Centraliza las marcas visuales de Global66, aliados y proveedores en los distintos segmentos (B2B, B2C), como Bancolombia, PSE o Bre-B, con tamaños consistentes y estilos opcionales:

## Características
- SVG de marca listos para usar
- Cuatro tamaños por altura (\`size\`) o ancho libre (\`size-custom\`): usa una u otra, no las dos
- Presets de \`filter\` (original, gris, negro, blanco, sepia, etc.)
- \`color\` para teñir con cualquier valor CSS (hex, rgb, nombre)
- Lazy loading para optimizar el rendimiento
- Tipado estricto para autocompletado de nombres y tamaños

## Instalación

\`\`\`bash
yarn add @flash-global66/g-logo
\`\`\`

## Dependencias
Este componente requiere:
- @vueuse/core (para el lazy loading)
- element-plus (para estilos y utilidades)

## Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
@use "@flash-global66/g-logo/styles.scss";
\`\`\`

## Uso básico

\`\`\`vue
<template>
  <g-logo name="logo-global66" size="md" />
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
</script>
\`\`\`

## Tamaño: \`size\` o \`size-custom\` (mutuamente excluyentes)
- **\`size\`** (xs, sm, md, lg): fija la **altura**; el ancho es proporcional al SVG.
- **\`size-custom\`** (ej: \`120px\`): fija el **ancho**; la altura es proporcional. Si lo usas, \`size\` se ignora.

## Color personalizado
\`color\` acepta cualquier valor CSS (\`#00A651\`, \`green\`, \`rgb(0, 166, 81)\`) y unifica la marca en una sola tinta.

## Optimizaciones de rendimiento
### Lazy Loading
- Utiliza IntersectionObserver para cargar el SVG sólo cuando es visible
- Puedes desactivar esta función con \`lazyLoad=false\`

## Agregar nuevas marcas

Para incorporar una marca nueva:

1. **Añadir el archivo**
   - Coloca el SVG en \`components/logo/src/assets/logos/\` con convención kebab-case:
   - \`icon-{marca}\` isotipo · \`label-{marca}\` wordmark · \`logo-{marca}\` lockup completo
   - Sufijos: \`-on-dark\` (fondo oscuro), \`-b2b\` / \`-b2c\` (segmento Global66)

2. **Actualizar las constantes**
   - Agrega el nombre en \`LOGO_NAMES\` y en el grupo correspondiente de \`LOGO_GROUPS\` en \`logo.constants.ts\`

3. **Construir el componente**
   - Ejecuta \`yarn build logo\` para actualizar el componente
        `
      }
    }
  },
  argTypes: {
    name: {
      description: 'Nombre del logo',
      control: 'select',
      options: LOGO_NAMES,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'logo-global66' },
      }
    },
    size: {
      description: 'Altura preset (xs–lg). Ignorado si defines size-custom',
      control: 'select',
      options: Object.keys(LOGO_SIZES),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      }
    },
    sizeCustom: {
      description: 'Ancho libre (ej: 120px). Excluye size; la altura es proporcional',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      }
    },
    filter: {
      description: 'Preset de filtro CSS aplicado al logo',
      control: 'select',
      options: LOGO_FILTER_OPTIONS,
      table: {
        type: { summary: 'LogoFilter' },
        defaultValue: { summary: 'none' },
      }
    },
    color: {
      description: 'Color CSS para teñir el logo (vacío = colores originales del SVG)',
      control: 'color',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      }
    },
    lazyLoad: {
      description: 'Activar carga diferida del logo',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      }
    }
  },
  args: {
    name: 'logo-global66',
    size: 'md',
    filter: 'none',
    color: '',
    sizeCustom: '',
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
      const isOnDark = (name: string) => name.endsWith('-on-dark');
      return {
        LOGO_GROUPS,
        LOGO_NAMES,
        selectedSize,
        sizeOptions,
        isOnDark,
      };
    },
    template: `
      <g-config-provider>
        <div class="space-y-10">
          <div class="flex items-center justify-between gap-4 flex-wrap">
            <p class="text-sm text-gray-600 m-0">
              {{ LOGO_NAMES.length }} logos · colores originales del SVG
            </p>
            <g-segmented v-model="selectedSize" :options="sizeOptions" />
          </div>
          <section
            v-for="group in LOGO_GROUPS"
            :key="group.id"
            class="space-y-4"
          >
            <h3 class="text-base font-semibold text-gray-800 m-0">{{ group.label }}</h3>
            <div class="flex flex-wrap gap-6 items-center">
              <div
                v-for="name in group.names"
                :key="name"
                class="flex flex-col items-center gap-3 p-4 border rounded-md min-w-[120px]"
                :class="isOnDark(name) ? 'bg-gray-900 border-gray-700' : 'bg-white'"
              >
                <g-logo :name="name" :size="selectedSize" :lazy-load="false" />
                <span
                  class="text-xs font-mono text-center break-all"
                  :class="isOnDark(name) ? 'text-gray-400' : 'text-gray-500'"
                >{{ name }}</span>
              </div>
            </div>
          </section>
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Colección completa agrupada por región/tipo. Las variantes `-on-dark` se muestran sobre fondo oscuro.'
      },
      source: {
        code: `
<template>
  <g-logo name="logo-global66" size="md" />
  <g-logo name="logo-bancolombia" size="md" />
  <g-logo name="logo-pse" size="md" />
  <g-logo name="logo-bcp" size="md" />
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

export const SizeCustom: Story = {
  name: 'Ancho personalizado',
  render: () => ({
    components: { GLogo, GConfigProvider },
    setup() {
      const examples = [
        { label: 'size="md" (preset)', size: 'md' as const, sizeCustom: '' },
        { label: 'size-custom="80px"', sizeCustom: '80px' },
        { label: 'size-custom="120px"', sizeCustom: '120px' },
        { label: 'size-custom="160px"', sizeCustom: '160px' },
      ];
      return { examples };
    },
    template: `
      <g-config-provider>
        <div class="space-y-6">
          <div
            v-for="ex in examples"
            :key="ex.label"
            class="flex items-center gap-4 border rounded-md p-4 bg-white"
          >
            <g-logo
              v-if="ex.sizeCustom"
              name="logo-global66"
              :size-custom="ex.sizeCustom"
            />
            <g-logo
              v-else
              name="logo-global66"
              :size="ex.size"
            />
            <span class="text-sm text-gray-500">{{ ex.label }}</span>
          </div>
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Con `size-custom` defines el ancho y la altura escala sola. No combines con `size`.'
      },
      source: {
        code: `
<g-logo name="logo-global66" size="md" />
<g-logo name="logo-global66" size-custom="120px" />
`,
        language: 'html'
      }
    }
  }
};

export const Colors: Story = {
  name: 'Color personalizado',
  render: () => ({
    components: { GLogo, GConfigProvider },
    setup() {
      const colors = [
        { label: 'Verde', value: '#00A651' },
        { label: 'Azul marca', value: '#203478' },
        { label: 'Rojo', value: '#E53935' },
        { label: 'Naranja', value: '#FF9800' },
      ];
      return { colors };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-wrap gap-8 items-end">
          <div class="flex flex-col items-center gap-3">
            <g-logo name="logo-global66" size="md" />
            <span class="text-xs text-gray-500">Original</span>
          </div>
          <div
            v-for="c in colors"
            :key="c.value"
            class="flex flex-col items-center gap-3"
          >
            <g-logo name="logo-global66" size="md" :color="c.value" />
            <span class="text-xs text-gray-500">{{ c.label }}</span>
            <code class="text-xs text-gray-400">{{ c.value }}</code>
          </div>
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'El prop `color` teñe el logo con cualquier valor CSS. Útil para adaptarlo a fondos o paletas de producto.'
      },
      source: {
        code: `
<g-logo name="logo-global66" size="md" color="#00A651" />
<g-logo name="icon-bre-b" size="md" color="green" />
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

      const filters = LOGO_FILTER_OPTIONS.map((value) => ({
        label: LOGO_FILTER_LABELS[value],
        value,
      }));

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
        story: 'Presets disponibles del prop `filter`. Cambia el logo seleccionado para comparar variantes.'
      },
      source: {
        code: `
<template>
  <!-- Original -->
  <g-logo name="logo-global66" size="md" />

  <g-logo name="logo-global66" size="md" filter="grayscale" />
  <g-logo name="logo-global66" size="md" filter="black" />
  <g-logo name="logo-global66" size="md" filter="white" />
  <g-logo name="logo-global66" size="md" filter="sepia" />
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
