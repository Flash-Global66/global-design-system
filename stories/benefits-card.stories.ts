import type { Meta, StoryObj } from '@storybook/vue3';
import {
  GBenefitsCard,
  BENEFITS_CARD_HEADING_LEVELS,
  type BenefitsCardItem,
} from '@flash-global66/g-benefits-card/index.ts';
import {
  version,
  peerDependencies,
} from '@flash-global66/g-benefits-card/package.json';
import { GConfigProvider } from '../components/config-provider';
import {
  generatePeerDepsInstalls,
  generatePeerDepsList,
} from '../helper/documentation-stories';

const passkeyBenefits: BenefitsCardItem[] = [
  {
    icon: 'light key-skeleton',
    text: 'Ingresa en 2 segundos, sin recordar claves',
  },
  {
    icon: 'light fingerprint',
    text: 'Tu huella o Face ID nunca sale de este dispositivo',
  },
  { icon: 'regular shield-check', text: 'Protege el acceso a tu empresa' },
];

const siiBenefits: BenefitsCardItem[] = [
  {
    icon: 'regular landmark',
    text: 'Productos que se adaptan a tu operación real',
  },
  {
    icon: 'regular money-bill-alt',
    text: 'Acceso anticipado a nuevos productos y novedades',
  },
  { icon: 'regular check', text: 'Menos fricciones, más agilidad operativa' },
];

const meta: Meta<typeof GBenefitsCard> = {
  title: 'Basic/Benefits Card',
  component: GBenefitsCard,
  parameters: {
    docs: {
      description: {
        component: `
> Versión actual: ${version}

Tarjeta oscura de beneficios: un título, una bajada y una lista de beneficios
con ícono. Reemplaza las imágenes estáticas (\`product-card-*.png/webp\`) que hoy
usan las pantallas de onboarding y de passkeys, con el texto en el DOM:
seleccionable, traducible, escalable con el zoom y legible por lectores de pantalla.

## Características
- Texto real en el DOM, sin ráster: título, bajada y beneficios son props
- Fondo, contornos y destellos fieles al diseño original
- Íconos del catálogo de \`g-icon-font\` (\`"weight name"\`), sin exports de diseño
- Nivel de encabezado configurable para respetar el outline de la página
- Pensada para 3 a 5 beneficios; fuera de ese rango Vue avisa en desarrollo

## Instalación

\`\`\`bash
yarn add @flash-global66/g-benefits-card
\`\`\`

## Dependencias

\`@flash-global66/g-icon-font\` viene como dependencia del paquete. Peers:

${generatePeerDepsList(peerDependencies)}

\`\`\`bash
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

## Importación de estilos SASS

\`\`\`scss
@use "@flash-global66/g-benefits-card/styles.scss";
\`\`\`

## Uso básico

\`\`\`vue
<template>
  <g-benefits-card
    title="Entra en segundos, sin escribir contraseñas"
    description="Registra tu huella o Face ID y accede a Global66 Business con un solo gesto."
    :benefits="benefits"
  />
</template>

<script setup lang="ts">
import { GBenefitsCard, type BenefitsCardItem } from '@flash-global66/g-benefits-card';

const benefits: BenefitsCardItem[] = [
  { icon: 'light key-skeleton', text: 'Ingresa en 2 segundos, sin recordar claves' },
  { icon: 'light fingerprint', text: 'Tu huella o Face ID nunca sale de este dispositivo' },
  { icon: 'regular shield-check', text: 'Protege el acceso a tu empresa' },
];
</script>
\`\`\`

## Título con formato

Cuando el título mezcla pesos (como la tarjeta del SII), el slot \`title\`
reemplaza al prop:

\`\`\`vue
<g-benefits-card :benefits="benefits" description="...">
  <template #title>Tu empresa merece <strong>productos a su medida</strong></template>
</g-benefits-card>
\`\`\`

## Tamaño y responsive

La tarjeta mide 469px (el ancho del diseño) y se achica al ancho del contenedor
cuando este es más angosto. Por debajo de 469px escala en proporción, como lo
hacía la imagen: es un contenedor de consulta (\`container-type: inline-size\`)
y todas las medidas del diseño están en \`cqw\`, con un piso de legibilidad para
los textos (título 20px, bajada 12px, beneficios 11px). En navegadores sin
container queries quedan los tamaños fijos del diseño y la tarjeta crece en
alto. Para otro ancho, envolverla en un contenedor con el ancho deseado o
sobreescribir \`width\`. Ver la story "Responsive".

## Accesibilidad
- El título es un encabezado real (\`h2\` por defecto, configurable con \`headingLevel\`)
- Los beneficios son una lista (\`ul\`/\`li\`); los íconos son decorativos (\`aria-hidden\`)
        `,
      },
    },
  },
  argTypes: {
    title: {
      description: 'Título principal',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } },
    },
    description: {
      description: 'Bajada debajo del título',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } },
    },
    benefits: {
      description: 'Beneficios (de 3 a 5), cada uno con `icon` y `text`',
      control: 'object',
      table: {
        type: {
          summary: 'BenefitsCardItem[]',
          detail: `interface BenefitsCardItem {
  icon: IconString; // "weight name", ej. "regular shield-check"
  text: string;
}`,
        },
        defaultValue: { summary: '[]' },
      },
    },
    headingLevel: {
      description: 'Nivel del encabezado usado para el título',
      control: 'select',
      options: BENEFITS_CARD_HEADING_LEVELS,
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6' },
        defaultValue: { summary: '2' },
      },
    },
  },
  args: {
    title: 'Entra en segundos, sin escribir contraseñas',
    description:
      'Registra tu huella o Face ID y accede a Global66 Business con un solo gesto.',
    benefits: passkeyBenefits,
    headingLevel: 2,
  },
};

export default meta;
type Story = StoryObj<typeof GBenefitsCard>;

const render: Story['render'] = args => ({
  components: { GBenefitsCard, GConfigProvider },
  setup() {
    return { args };
  },
  template: `
    <g-config-provider>
      <g-benefits-card v-bind="args" />
    </g-config-provider>
  `,
});

export const Primary: Story = {
  name: 'Uso básico',
  render,
};

export const Sii: Story = {
  name: 'Título con formato (SII)',
  args: {
    title: '',
    description:
      'Optimiza tus finanzas con herramientas que evolucionan al ritmo de tu negocio',
    benefits: siiBenefits,
  },
  render: args => ({
    components: { GBenefitsCard, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-benefits-card v-bind="args">
          <template #title>
            <span class="font-normal">Tu empresa merece</span>
            productos a su medida
          </template>
        </g-benefits-card>
      </g-config-provider>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <g-benefits-card
    description="Optimiza tus finanzas con herramientas que evolucionan al ritmo de tu negocio"
    :benefits="benefits"
  >
    <template #title>
      <span class="font-normal">Tu empresa merece</span> productos a su medida
    </template>
  </g-benefits-card>
</template>
`,
        language: 'html',
      },
    },
  },
};

export const FiveBenefits: Story = {
  name: 'Cinco beneficios',
  args: {
    benefits: [
      ...passkeyBenefits,
      { icon: 'regular clock', text: 'Sin esperar códigos por SMS' },
      { icon: 'regular mobile', text: 'Funciona en todos tus dispositivos' },
    ],
  },
  render,
};

export const Responsive: Story = {
  name: 'Responsive',
  render: args => ({
    components: { GBenefitsCard, GConfigProvider },
    setup() {
      const widths = [469, 360, 300];
      return { args, widths };
    },
    template: `
      <g-config-provider>
        <div class="flex flex-wrap gap-6 items-start">
          <figure v-for="width in widths" :key="width" class="m-0 flex flex-col gap-2" :style="{ width: width + 'px' }">
            <g-benefits-card v-bind="args" />
            <figcaption class="text-2 text-secondary-txt">Contenedor de {{ width }}px</figcaption>
          </figure>
        </div>
        <p class="text-2 text-secondary-txt mt-8 mb-2">Arrastra la esquina inferior derecha para redimensionar</p>
        <div class="resize-x overflow-auto rounded-md border border-dashed border-grey-500 p-3" style="width: 469px; max-width: 100%">
          <g-benefits-card v-bind="args" />
        </div>
      </g-config-provider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'La tarjeta escala en proporción al ancho de su contenedor gracias a container queries, con un piso de legibilidad en los textos. El último ejemplo se puede redimensionar arrastrando la esquina.',
      },
    },
  },
};
