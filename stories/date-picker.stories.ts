import { StoryObj } from '@storybook/vue3-vite';
import { expect, screen, userEvent, waitFor, within } from 'storybook/test';
import { ref } from 'vue';
import dayjs from 'dayjs';
import { es } from '../common/lang';

// COMPONENTS
import GDatePicker from '../components/date-picker';

// CONFIG
import { GConfigProvider } from '../components/config-provider';

// DEPENDENCIES
import {
  version,
  peerDependencies,
} from '@flash-global66/g-date-picker/package.json';
import {
  generatePeerDepsList,
  generateIconOptions,
  generatePeerDepsInstalls,
} from '../helper/documentation-stories';

const meta = {
  title: 'Form/Date Picker',
  component: GDatePicker,
  parameters: {
    docs: {
      description: {
        component: `

El componente Date Picker está diseñado para gestionar la selección de fechas en formularios con flexibilidad y precisión. Ofrece funcionalidades completas, incluyendo selección simple, rangos de fechas y distintos modos de visualización (año, mes, día o fecha y hora). Es ideal para aplicaciones que requieren una interacción intuitiva y detallada con calendarios, asegurando una experiencia de usuario fluida sin sacrificar potencia o personalización.

> Versión actual: ${version}

## Características
- Selección de fecha simple o en rangos
- Varios tipos de selectores: año, mes, fecha, fecha y hora
- Formato personalizable de visualización
- Soporte para deshabilitar fechas específicas
- Integración con Day.js para manejo de fechas
- Retroalimentación visual inmediata en modo rango: al seleccionar la fecha de inicio, esta se muestra en el input antes de elegir la fecha fin
- Personalización completa del popup
- **Hereda** gran parte de las props del componente \`GInput\`

### Instalación

\`\`\`bash
yarn add @flash-global66/g-date-picker
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GDatePicker } from '@flash-global66/g-date-picker'

# recomendado importar en los estilos globales
import '@flash-global66/g-date-picker/style.scss'

// Opcional: Extender dayjs con plugins necesarios
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localeData from 'dayjs/plugin/localeData'
dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat)
dayjs.extend(localeData)
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${generatePeerDepsList(peerDependencies)}

> Revisar la documentación de cada dependencia para mas información.

\`\`\`bash
# Dependencias global66
yarn add ${generatePeerDepsInstalls(peerDependencies)}

# Dependencias externas
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

### Ejemplo de uso

\`\`\`ts
<script setup lang="ts">
import { GDatePicker } from '@flash-global66/g-date-picker';
</script>

<template>
  <g-date-picker    
    :picker="true"
    :clearable="true"
    endPlaceholder="Fecha fin"
    format="YYYY-MM-DD"
    label="Seleccione fecha"
    rangeSeparator="-"
    :shortcuts="shortcuts"
    startPlaceholder="Fecha inicio"
  />
</template>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    // 1. Enlace de Datos
    modelValue: {
      name: 'v-model',
      description: 'Valor seleccionado (v-model)',
      control: { type: undefined },
      table: {
        category: 'Enlace de Datos',
        type: {
          summary:
            'string | Date | number | [string, string] | [Date, Date] | [number, number] | null',
        },
      },
    },

    // 2. Comportamiento e Interacción
    type: {
      description: 'Tipo del selector',
      control: 'select',
      options: [
        'date',
        'year',
        'month',
        'datetime',
        'daterange',
        'monthrange',
        'yearrange',
      ],
      table: {
        category: 'Comportamiento e Interacción',
        type: { summary: 'string' },
        defaultValue: { summary: 'date' },
      },
    },
    clearable: {
      description: 'Permite limpiar el valor seleccionado',
      control: 'boolean',
      table: {
        category: 'Comportamiento e Interacción',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    editable: {
      description: 'Permite edición directa en el input',
      control: 'boolean',
      table: {
        category: 'Comportamiento e Interacción',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    openOnInputClick: {
      name: 'open-on-input-click',
      description:
        'En modo rango, el clic en cualquiera de los dos inputs también abre el panel; el ícono siempre lo abre',
      control: 'boolean',
      table: {
        category: 'Comportamiento e Interacción',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    // 3. Apariencia y Estilos
    prefixIcon: {
      name: 'prefix-icon',
      description: 'Ícono al inicio del input',
      control: 'select',
      options: ['', ...generateIconOptions()],
      table: {
        category: 'Apariencia y Estilos',
        type: { summary: 'string | Component' },
        defaultValue: { summary: '' },
      },
    },
    popperClass: {
      name: 'popper-class',
      description: 'Clase CSS personalizada para el popup',
      control: 'text',
      table: {
        category: 'Apariencia y Estilos',
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    placement: {
      description: 'Posición del popup',
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
      ],
      table: {
        category: 'Apariencia y Estilos',
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom' },
      },
    },

    // 4. Formato de Fecha
    format: {
      description: 'Formato de visualización en el input',
      control: 'text',
      table: {
        category: 'Formato de Fecha',
        type: { summary: 'string' },
        defaultValue: { summary: 'YYYY-MM-DD' },
      },
    },
    valueFormat: {
      name: 'value-format',
      description: 'Formato del valor vinculado (v-model)',
      control: 'text',
      table: {
        category: 'Formato de Fecha',
        type: { summary: 'string' },
      },
    },
    dateFormat: {
      name: 'date-format',
      description: 'Formato de fecha en el popup',
      control: 'text',
      table: {
        category: 'Formato de Fecha',
        type: { summary: 'string' },
      },
    },
    timeFormat: {
      name: 'time-format',
      description: 'Formato de hora en el popup (si aplica)',
      control: 'text',
      table: {
        category: 'Formato de Fecha',
        type: { summary: 'string' },
      },
    },

    // 5. Etiquetas y Texto
    label: {
      description: 'Label en modo simple',
      control: 'text',
      table: {
        category: 'Etiquetas y Texto',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    startPlaceholder: {
      description: 'Placeholder para la fecha de inicio en modo rango',
      control: 'text',
      table: {
        category: 'Etiquetas y Texto',
        type: { summary: 'string' },
      },
    },
    endPlaceholder: {
      description: 'Placeholder para la fecha de fin en modo rango',
      control: 'text',
      table: {
        category: 'Etiquetas y Texto',
        type: { summary: 'string' },
      },
    },
    rangeSeparator: {
      description: 'Separador para el rango de fechas',
      control: 'text',
      table: {
        category: 'Etiquetas y Texto',
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    helpText: {
      description: 'Texto de apoyo',
      control: 'text',
      table: {
        category: 'Etiquetas y Texto',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },

    // 6. Validación y Restricciones
    disabled: {
      description: 'Deshabilita el componente',
      control: 'boolean',
      table: {
        category: 'Validación y Restricciones',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readonly: {
      description: 'Hace el componente de solo lectura',
      control: 'boolean',
      table: {
        category: 'Validación y Restricciones',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabledDate: {
      name: 'disabled-date',
      description: 'Función para deshabilitar fechas específicas',
      control: 'function',
      table: {
        category: 'Validación y Restricciones',
        type: { summary: '(date: Date) => boolean' },
      },
    },

    // 7. Métodos Expuestos
    focus: {
      description: 'Enfoca el input del date picker',
      table: {
        category: 'Métodos Expuestos',
        type: { summary: '() => void' },
      },
    },
    blur: {
      description: 'Quita el foco del input',
      table: {
        category: 'Métodos Expuestos',
        type: { summary: '() => void' },
      },
    },
    handleOpen: {
      description: 'Abre el popup del date picker',
      table: {
        category: 'Métodos Expuestos',
        type: { summary: '() => void' },
      },
    },
    handleClose: {
      description: 'Cierra el popup del date picker',
      table: {
        category: 'Métodos Expuestos',
        type: { summary: '() => void' },
      },
    },

    // 8. Eventos
    onChange: {
      description: 'Se dispara cuando el usuario confirma un cambio',
      table: {
        category: 'Eventos',
        type: {
          summary:
            '(value: Date | string | number | [Date | null, Date | null] | [string | null, string | null] | [number | null, number | null] | null) => void',
        },
      },
    },
    onBlur: {
      description: 'Se dispara cuando el input pierde el foco',
      table: {
        category: 'Eventos',
        type: { summary: '(event: FocusEvent) => void' },
      },
    },
    onFocus: {
      description: 'Se dispara cuando el input recibe el foco',
      table: {
        category: 'Eventos',
        type: { summary: '(event: FocusEvent) => void' },
      },
    },
    onVisibleChange: {
      description: 'Se dispara cuando la visibilidad del popup cambia',
      table: {
        category: 'Eventos',
        type: { summary: '(visible: boolean) => void' },
      },
    },
    onClear: {
      description: 'Se dispara cuando se limpia el valor',
      table: {
        category: 'Eventos',
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    label: 'Seleccione fecha',
    format: 'YYYY-MM-DD',
    startPlaceholder: 'Fecha inicio',
    endPlaceholder: 'Fecha fin',
    rangeSeparator: '-',
    clearable: true,
    shortcuts: [
      {
        text: 'Hoy',
        value: new Date(),
      },
      {
        text: 'Mañana',
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24);
          return date;
        },
      },
      {
        text: 'Una semana atrás',
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
          return date;
        },
      },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof GDatePicker>;

const RANGE_SHORTCUTS = [
  {
    text: 'Última semana',
    value: () => [dayjs().subtract(1, 'week').toDate(), dayjs().toDate()],
  },
  {
    text: 'Último mes',
    value: () => [dayjs().subtract(1, 'month').toDate(), dayjs().toDate()],
  },
  {
    text: 'Últimos 3 meses',
    value: () => [dayjs().subtract(3, 'month').toDate(), dayjs().toDate()],
  },
];

function renderOpenOnInputRange(shortcuts: typeof RANGE_SHORTCUTS = []) {
  return () => ({
    components: { GDatePicker, GConfigProvider },
    setup() {
      const value = ref([]);
      const lang = es;
      return { value, lang, shortcuts };
    },
    template: `
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            type="daterange"
            aria-label="Rango de fechas"
            open-on-input-click
            :shortcuts="shortcuts"
            start-placeholder="Inicio"
            end-placeholder="Fin"
            range-separator="-"
            format="DD-MM-YYYY"
            value-format="YYYY-MM-DD"
            prefix-icon="regular calendar"
          />
          <div>Rango seleccionado: {{ value }}</div>
        </div>
      </g-config-provider>
    `,
  });
}

export const Basic: Story = {
  name: 'Básico',
  render: args => ({
    components: { GDatePicker, GConfigProvider },
    setup() {
      const value = ref('');
      const lang = es;
      return { value, args, lang };
    },
    template: `
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker v-bind="args" v-model="value"/>
        </div>

      </g-config-provider>
    `,
  }),
};

export const Range: Story = {
  name: 'Modo Rango',
  parameters: {
    docs: {
      description: {
        story: `Selector de rango de fechas que permite seleccionar un intervalo de días.

- Selección de fecha inicial y final con retroalimentación visual inmediata: al elegir la fecha de inicio, esta se muestra en el input correspondiente mientras la fecha fin permanece vacía hasta ser seleccionada
- Placeholders personalizados para cada input
- Separador personalizable
- Este comportamiento es consistente en todos los modos de rango: \`daterange\`, \`monthrange\` y \`yearrange\``,
      },
    },
  },
  render: () => ({
    components: { GDatePicker, GConfigProvider },
    setup() {
      const value = ref([]);
      const lang = es;
      return { value, lang };
    },
    template: `
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            type="daterange"
            start-placeholder="Fecha inicio"
            end-placeholder="Fecha fin"
            label="Seleccione rango"
            range-separator="|"
            format="YYYY-MM-DD"
          />
          <div>Rango seleccionado: {{ value }}</div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const RangeWithShortcutsOpenOnInput: Story = {
  name: 'Rango con atajos y apertura desde inputs',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const start = await canvas.findByPlaceholderText('Inicio');

    await userEvent.click(start);
    const shortcut = await screen.findByRole('button', {
      name: 'Última semana',
    });
    await expect(shortcut).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(shortcut);
    await waitFor(() =>
      expect(start).toHaveAttribute('aria-expanded', 'false'),
    );

    await userEvent.click(start);
    const reopened = await screen.findByRole('button', {
      name: 'Última semana',
    });
    await expect(reopened).toHaveAttribute('aria-pressed', 'true');
    await expect(
      screen.getByRole('button', { name: 'Último mes' }),
    ).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(
      document.body.querySelector('td.available[data-date]') as HTMLElement,
    );
    await waitFor(() =>
      expect(reopened).toHaveAttribute('aria-pressed', 'false'),
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Con \`open-on-input-click\` el panel se abre al hacer clic en cualquiera de los dos inputs, además del icono. Por defecto está apagado.

- Hasta 780 px de ancho el panel ocupa el ancho disponible, apila los meses y muestra los atajos como chips arriba
- El atajo cuyo rango coincide con la selección expone \`aria-pressed\` y deja de hacerlo al elegir otras fechas; hasta 780 px además se rellena con el color primario

### Teclado

El rango se puede completar sin mouse y el foco es visible en todo momento.

| Tecla | Acción |
| --- | --- |
| \`Tab\` | Pasa del input de inicio al de fin; con \`open-on-input-click\`, desde el de fin entra al panel |
| \`↓\` | Desde el input, enfoca el panel |
| \`←\` \`→\` \`↑\` \`↓\` | Mueven el foco entre los días del panel |
| \`Enter\` o \`Espacio\` | Eligen el día enfocado |
| \`Esc\` | Cierra el panel |

Los días, los atajos y las flechas de mes muestran un anillo de foco visible.

### Movimiento reducido

Cuando el sistema pide movimiento reducido (\`prefers-reduced-motion: reduce\`) el panel se abre y se cierra sin transición. Para comprobarlo, activa **Reducir movimiento** en el sistema operativo o usa **Emulate CSS media feature prefers-reduced-motion** en el panel **Rendering** de las DevTools. Con el ajuste apagado, el panel conserva la animación de entrada.`,
      },
    },
  },
  render: renderOpenOnInputRange(RANGE_SHORTCUTS),
};

export const RangeResponsive: Story = {
  name: 'Rango en pantallas pequeñas',
  parameters: {
    docs: {
      description: {
        story: `Hasta 780 px de ancho el panel de rango deja de ser de escritorio (756 px) y se adapta al espacio libre de la pantalla.

- Los meses se apilan y los atajos se muestran como chips arriba
- El panel queda dentro del viewport, sin desbordar horizontalmente
- Para verlo, abre la pestaña **Canvas** de esta historia: se carga con el viewport de 390 px`,
      },
    },
    viewport: {
      options: {
        mobile390: {
          name: 'Móvil 390 px',
          styles: { width: '390px', height: '844px' },
          type: 'mobile',
        },
      },
    },
  },
  globals: {
    viewport: { value: 'mobile390', isRotated: false },
  },
  render: renderOpenOnInputRange(RANGE_SHORTCUTS.slice(0, 2)),
};

export const RangeKeyboard: Story = {
  name: 'Rango con teclado',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const start = await canvas.findByPlaceholderText('Inicio');
    const end = await canvas.findByPlaceholderText('Fin');

    await userEvent.click(start);
    const firstShortcut = await screen.findByRole('button', {
      name: 'Última semana',
    });

    await userEvent.tab();
    await expect(end).toHaveFocus();
    await userEvent.tab();
    await expect(firstShortcut).toHaveFocus();

    const cells = Array.from(
      document.body.querySelectorAll<HTMLElement>('td.available[data-date]'),
    );
    const [cell, nextCell] = [cells[10], cells[11]];
    cell.focus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(document.activeElement).toHaveAttribute(
      'data-date',
      nextCell.dataset.date as string,
    );

    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(start).not.toHaveValue(''));

    await userEvent.keyboard('{ArrowRight}');
    await userEvent.keyboard('{Enter}');
    await waitFor(() =>
      expect(start).toHaveAttribute('aria-expanded', 'false'),
    );
    await waitFor(() =>
      expect(document.activeElement).toHaveAttribute('role', 'combobox'),
    );

    await new Promise(resolve => setTimeout(resolve, 400));
    await expect(start).toHaveAttribute('aria-expanded', 'false');
    await expect(document.activeElement).toHaveAttribute('role', 'combobox');

    await userEvent.click(start);
    await waitFor(() => expect(start).toHaveAttribute('aria-expanded', 'true'));
    document.body
      .querySelector<HTMLElement>('td.available[data-date]')
      ?.focus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() =>
      expect(start).toHaveAttribute('aria-expanded', 'false'),
    );
    await expect(document.activeElement).toHaveAttribute('role', 'combobox');
  },
  tags: ['!dev', '!autodocs'],
  render: renderOpenOnInputRange(RANGE_SHORTCUTS),
};

export const RangeReducedMotion: Story = {
  name: 'Rango con movimiento reducido',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByPlaceholderText('Inicio'));
    const popper = await waitFor(() => {
      const element = document.body.querySelector<HTMLElement>(
        '[class*="picker__popper"]',
      );
      if (!element) throw new Error('el panel todavía no se montó');
      return element;
    });

    const readRules = (sheet: CSSStyleSheet): CSSRule[] => {
      try {
        return Array.from(sheet.cssRules);
      } catch {
        return [];
      }
    };

    const reducedMotionSelectors = Array.from(document.styleSheets).flatMap(
      sheet =>
        readRules(sheet)
          .filter(
            (rule): rule is CSSMediaRule =>
              rule instanceof CSSMediaRule &&
              rule.conditionText.includes('prefers-reduced-motion'),
          )
          .flatMap(rule => Array.from(rule.cssRules))
          .filter((rule): rule is CSSStyleRule => rule instanceof CSSStyleRule)
          .flatMap(rule => rule.selectorText.split(',')),
    );
    const popperSelectors = reducedMotionSelectors.filter(selector =>
      selector.includes('picker__popper'),
    );

    await expect(popperSelectors.length).toBeGreaterThan(0);
    for (const selector of popperSelectors) {
      const baseSelector = selector
        .trim()
        .replace(/\.[\w-]+-(enter|leave)-active$/, '');
      await expect(popper.matches(baseSelector)).toBe(true);
    }
  },
  tags: ['!dev', '!autodocs'],
  render: renderOpenOnInputRange(),
};

export const DateTime: Story = {
  name: 'Fecha y Hora',
  parameters: {
    docs: {
      description: {
        story: `Selector de fecha y hora combinado.`,
      },
    },
  },
  render: () => ({
    components: { GDatePicker, GConfigProvider },
    setup() {
      const value = ref(new Date());
      const lang = es;
      return { value, lang };
    },
    template: `
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            type="datetime"
            label="Seleccione fecha y hora"
            format="YYYY-MM-DD HH:mm:ss"
          />
          <div>Fecha y hora seleccionada: {{ value }}</div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const DisabledDates: Story = {
  name: 'Fechas Deshabilitadas',
  parameters: {
    docs: {
      description: {
        story: `Ejemplo de cómo deshabilitar fechas específicas utilizando la prop \`disabled-date\`.`,
      },
    },
  },
  render: () => ({
    components: { GDatePicker, GConfigProvider },
    setup() {
      const value = ref('');
      const disabledDate = (time: Date) => {
        return time.getTime() > Date.now(); // Deshabilitar fechas futuras
      };
      const lang = es;
      return { value, disabledDate, lang };
    },
    template: `
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            label="Seleccione fecha"
            :disabled-date="disabledDate"
          />
          <div class="text-sm text-gray-500">
            <p>Las fechas futuras están deshabilitadas.</p>
          </div>
        </div>
      </g-config-provider>
    `,
  }),
};

export const DifferentTypes: Story = {
  name: 'Diferentes Tipos',
  parameters: {
    docs: {
      description: {
        story: `Muestra los diferentes tipos de selectores de fecha disponibles.`,
      },
    },
  },
  render: () => ({
    components: { GDatePicker, GConfigProvider },
    setup() {
      const dateValue = ref('');
      const yearValue = ref('');
      const monthValue = ref('');
      const dateRangeValue = ref([]);
      const monthRangeValue = ref([]);
      const yearRangeValue = ref([]);
      const dateTimeValue = ref(new Date());
      const lang = es;

      return {
        dateValue,
        yearValue,
        monthValue,
        dateRangeValue,
        monthRangeValue,
        yearRangeValue,
        dateTimeValue,
        lang,
      };
    },

    template: `
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker v-model="dateValue" label="Date" type="date"/>
          <g-date-picker v-model="yearValue" label="Year" type="year" />
          <g-date-picker v-model="monthValue" label="Month" type="month" />
          <g-date-picker v-model="dateRangeValue" label="Date Range" type="daterange" />
          <g-date-picker v-model="monthRangeValue" label="Month Range" type="monthrange" />
          <g-date-picker v-model="yearRangeValue" label="Year Range" type="yearrange" />
          <g-date-picker v-model="dateTimeValue" label="DateTime" type="datetime" format="YYYY-MM-DD HH:mm:ss" messageError="Agregar fecha"/>
        </div>
      </g-config-provider>
    `,
  }),
};
