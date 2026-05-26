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
import { GConfigProvider } from '../components/config-provider';

/** Logos de referencia en ejemplos (Colombia) */
const DEMO_LOGO_BANCOLOMBIA = 'logo-bancolombia';
const DEMO_LOGO_PSE = 'logo-pse';
const DEMO_LOGO_NEQUI = 'logo-nequi';

const DEMO_LOGOS_FILTER = [
  { label: 'Bancolombia', value: DEMO_LOGO_BANCOLOMBIA },
  { label: 'PSE', value: DEMO_LOGO_PSE },
  { label: 'Nequi', value: DEMO_LOGO_NEQUI },
] as const;

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
- Por defecto muestra el **tamaño original del SVG**; \`size\` (2xs–3xl) o \`size-custom\` cuando necesites escalar
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
  <g-logo name="logo-pse" />
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
</script>
\`\`\`

## Color personalizado
\`color\` acepta cualquier valor CSS (\`#00A651\`, \`green\`, \`rgb(0, 166, 81)\`) y unifica la marca en una sola tinta. Internamente aplica \`mask-image\` con el canal alfa del SVG como máscara: las zonas opacas del SVG toman el color elegido y las zonas transparentes desaparecen.

### Logos compatibles

| Logo | Tipo |
|---|---|
| \`icon-bre-b\` | Isotipo |
| \`icon-global66\` | Isotipo |
| \`icon-global66-b2b\` | Isotipo |
| \`icon-global66-b2b-on-dark\` | Isotipo |
| \`icon-global66-b2c\` | Isotipo |
| \`icon-global66-b2c-on-dark\` | Isotipo |
| \`label-global66\` | Wordmark |

Para el resto de logos disponibles, se recomienda usar la prop \`filter\` para ajustar su apariencia (por ejemplo, escala de grises, negro o blanco).

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
        defaultValue: { summary: 'logo-pse' },
      }
    },
    size: {
      description: 'Altura preset (2xs 22px, xs 44px … 3xl 260px). Vacío = tamaño original del SVG',
      control: 'select',
      options: [undefined, ...Object.keys(LOGO_SIZES)],
      table: {
        type: { summary: '2xs | xs | sm | md | lg | xl | 2xl | 3xl' },
        defaultValue: { summary: 'original (SVG)' },
      }
    },
    sizeCustom: {
      description: 'Ancho libre. Acepta `120px`, `8rem`, `50%` o solo un número (`200` → `200px`). La altura escala sola. Excluye `size`.',
      control: 'text',
      table: {
        type: { summary: 'string | number' },
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
    name: DEMO_LOGO_PSE,
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
  <g-logo name="logo-pse" />
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
      const NATURAL_SIZE = '__natural__';
      const selectedSize = ref(NATURAL_SIZE);
      const sizeOptions = [
        { label: 'Original', value: NATURAL_SIZE },
        ...Object.keys(LOGO_SIZES).map(s => ({ label: s.toUpperCase(), value: s })),
      ];
      const isOnDark = (name: string) => name.endsWith('-on-dark');
      const logoSizeProps = (sizeKey: string) =>
        sizeKey === NATURAL_SIZE ? {} : { size: sizeKey };
      return {
        LOGO_GROUPS,
        LOGO_NAMES,
        selectedSize,
        sizeOptions,
        isOnDark,
        logoSizeProps,
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
                <g-logo
                  :name="name"
                  v-bind="logoSizeProps(selectedSize)"
                  :lazy-load="false"
                />
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
        story: 'Colección completa a tamaño original por defecto. Usa el selector para xs–3xl. Variantes `-on-dark` sobre fondo oscuro.'
      },
      source: {
        code: `
<template>
  <g-logo name="logo-pse" />
  <g-logo name="icon-bre-b" />
  <g-logo name="logo-bancolombia" size="sm" />
  <g-logo name="logo-pse" />
  <g-logo name="logo-nequi" size="lg" />
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
      return { LOGO_SIZES, DEMO_LOGO_PSE };
    },
    template: `
      <g-config-provider>
        <div class="space-y-8">
          <div v-for="(px, size) in LOGO_SIZES" :key="size" class="flex items-center gap-6">
            <span class="text-sm font-mono text-gray-400 w-8">{{ size }}</span>
            <span class="text-xs text-gray-300 w-12">{{ px }}</span>
            <g-logo :name="DEMO_LOGO_PSE" :size="size" />
          </div>
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ocho tamaños por altura (2xs 22px … 3xl 260px). El ancho varía según la proporción del SVG.'
      },
      source: {
        code: `
<template>
  <g-logo name="logo-pse" size="2xs" />  <!-- 22px alto -->
  <g-logo name="logo-pse" size="xs" />   <!-- 44px alto -->
  <g-logo name="logo-pse" size="sm" />   <!-- 64px alto -->
  <g-logo name="logo-pse" size="md" />   <!-- 80px alto -->
  <g-logo name="logo-pse" size="lg" />   <!-- 112px alto -->
  <g-logo name="logo-pse" size="xl" />   <!-- 160px alto -->
  <g-logo name="logo-pse" size="2xl" />  <!-- 208px alto -->
  <g-logo name="logo-pse" size="3xl" />  <!-- 260px alto -->
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
      return { examples, DEMO_LOGO_BANCOLOMBIA };
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
              :name="DEMO_LOGO_BANCOLOMBIA"
              :size-custom="ex.sizeCustom"
            />
            <g-logo
              v-else
              :name="DEMO_LOGO_BANCOLOMBIA"
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
        story: 'Define el **ancho** con `size-custom`; la altura escala automáticamente según la proporción del SVG. Puedes usar `120px`, `8rem` o solo un número (`200` → se trata como `200px`). No combines con `size`.'
      },
      source: {
        code: `
<g-logo name="logo-bancolombia" size="md" />
<g-logo name="logo-bancolombia" size-custom="120px" />
<!-- También acepta número sin unidad: -->
<g-logo name="logo-bancolombia" size-custom="200" />
`,
        language: 'html'
      }
    }
  }
};

const DEMO_LOGOS_COLOR_COMPATIBLE = [
  { label: 'icon-bre-b', value: 'icon-bre-b' },
  { label: 'icon-global66', value: 'icon-global66' },
  { label: 'label-global66', value: 'label-global66' },
] as const;

export const Colors: Story = {
  name: 'Color personalizado',
  render: () => ({
    components: { GLogo, GConfigProvider },
    setup() {
      const logos = [...DEMO_LOGOS_COLOR_COMPATIBLE];
      const colors = [
        { label: 'Verde', value: '#00A651' },
        { label: 'Azul marca', value: '#203478' },
        { label: 'Rojo', value: '#E53935' },
        { label: 'Naranja', value: '#FF9800' },
      ];
      return { logos, colors };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-10">
          <div v-for="logo in logos" :key="logo.value" class="flex flex-col gap-3">
            <span class="text-xs font-mono text-gray-400">{{ logo.value }}</span>
            <div class="flex flex-wrap gap-8 items-end">
              <div class="flex flex-col items-center gap-3">
                <g-logo :name="logo.value" size="md" :lazy-load="false" />
                <span class="text-xs text-gray-500">Original</span>
              </div>
              <div
                v-for="c in colors"
                :key="c.value"
                class="flex flex-col items-center gap-3"
              >
                <g-logo :name="logo.value" size="md" :color="c.value" :lazy-load="false" />
                <span class="text-xs text-gray-500">{{ c.label }}</span>
                <code class="text-xs text-gray-400">{{ c.value }}</code>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: `Ejemplos con los logos 100% compatibles: \`icon-*\` e \`label-*\`. Son SVG vectoriales de fondo transparente donde la máscara CSS preserva la forma exacta del ícono y aplica el color elegido sin pérdida de detalle.\n\nSi necesitas adaptar el tono de logos de terceros (bancos, fintechs), usa la prop \`filter\` que funciona en los 59 logos.`
      },
      source: {
        code: `<!-- ✅ Funciona perfectamente -->
<g-logo name="icon-bre-b"    size="md" color="#00A651" />
<g-logo name="icon-global66" size="md" color="#203478" />
<g-logo name="label-global66" size="md" color="#E53935" />

<!-- ⚠️ Para logos de terceros usa filter -->
<g-logo name="logo-bancolombia" size="md" filter="grayscale" />
<g-logo name="logo-pse"         size="md" filter="black" />`,
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
      const selectedLogo = ref(DEMO_LOGO_PSE);
      const logoOptions = [...DEMO_LOGOS_FILTER];

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
        story: 'Presets del prop `filter` con Bancolombia, PSE y Nequi.'
      },
      source: {
        code: `
<template>
  <g-logo name="logo-pse" size="md" />
  <g-logo name="logo-pse" size="md" filter="grayscale" />
  <g-logo name="logo-bancolombia" size="md" filter="black" />
  <g-logo name="logo-nequi" size="md" filter="white" />
  <g-logo name="logo-pse" size="md" filter="sepia" />
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
