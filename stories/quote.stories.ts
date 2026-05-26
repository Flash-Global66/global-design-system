import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { GQuote, type QuoteInstance } from '../components/quote'
import { GConfigProvider } from '../components/config-provider'
import type { Currency } from '../components/quote'
import { generatePeerDepsList, generatePeerDepsInstalls } from '../helper/documentation-stories'
import { version, peerDependencies } from '../components/quote/package.json'

// ─── Fixtures ────────────────────────────────────────────────────────────────

const CLP: Currency = {
  code: 'CLP',
  name: 'Peso chileno',
  flagCountryCode: 'CL',
  symbol: '$',
  decimalPlaces: 0,
  thousandSeparator: '.',
  decimalSeparator: ',',
  locale: 'es-CL',
}

const COP: Currency = {
  code: 'COP',
  name: 'Peso colombiano',
  flagCountryCode: 'CO',
  symbol: '$',
  decimalPlaces: 2,
  thousandSeparator: '.',
  decimalSeparator: ',',
  locale: 'es-CO',
}

const USD: Currency = {
  code: 'USD',
  name: 'Dólar estadounidense',
  flagCountryCode: 'US',
  symbol: '$',
  decimalPlaces: 2,
  thousandSeparator: ',',
  decimalSeparator: '.',
  locale: 'en-US',
}

const PEN: Currency = {
  code: 'PEN',
  name: 'Sol peruano',
  flagCountryCode: 'PE',
  symbol: 'S/',
  decimalPlaces: 2,
  thousandSeparator: ',',
  decimalSeparator: '.',
  locale: 'es-PE',
}

const BRL: Currency = {
  code: 'BRL',
  name: 'Real brasileño',
  flagCountryCode: 'BR',
  symbol: 'R$',
  decimalPlaces: 2,
  thousandSeparator: '.',
  decimalSeparator: ',',
  locale: 'pt-BR',
}

const CURRENCIES: Currency[] = [CLP, COP, USD, PEN, BRL]

const RATES: Record<string, number> = {
  CLP_USD: 0.001075,
  CLP_COP: 3.97,
  CLP_PEN: 0.004,
  CLP_BRL: 0.0055,
  COP_USD: 0.00024,
  COP_CLP: 0.252,
  COP_PEN: 0.00096,
  COP_BRL: 0.00138,
  USD_CLP: 930,
  USD_COP: 4150,
  USD_PEN: 3.72,
  USD_BRL: 5.05,
  PEN_USD: 0.2688,
  PEN_CLP: 248,
  PEN_COP: 1080,
  PEN_BRL: 1.36,
  BRL_USD: 0.198,
  BRL_CLP: 182,
  BRL_COP: 800,
  BRL_PEN: 0.735,
}

// ─── Composable reutilizable para la lógica de simulación ────────────────────

function useQuoteSimulator(initialFrom = 'CLP', initialTo = 'USD') {
  const fromCurrency = ref(initialFrom)
  const toCurrency = ref(initialTo)
  const fromAmount = ref('')
  const toAmount = ref('')
  const isLoading = ref(false)
  const lastDirection = ref<'from' | 'to'>('from')
  let debounceTimer: ReturnType<typeof setTimeout> | null = null

  async function fetchQuote(amount: string, direction: 'from' | 'to') {
    if (!amount || isNaN(parseFloat(amount))) {
      direction === 'from' ? (toAmount.value = '') : (fromAmount.value = '')
      return
    }
    isLoading.value = true
    direction === 'from' ? (toAmount.value = '') : (fromAmount.value = '')

    await new Promise((r) => setTimeout(r, 800))

    const from = direction === 'from' ? fromCurrency.value : toCurrency.value
    const to = direction === 'from' ? toCurrency.value : fromCurrency.value
    const rate = RATES[`${from}_${to}`] ?? 1
    const decimals = CURRENCIES.find((c) => c.code === to)?.decimalPlaces ?? 2
    const result = parseFloat((parseFloat(amount) * rate).toFixed(decimals))

    direction === 'from' ? (toAmount.value = String(result)) : (fromAmount.value = String(result))
    isLoading.value = false
  }

  function scheduleQuote(amount: string, direction: 'from' | 'to') {
    if (debounceTimer) clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => fetchQuote(amount, direction), 600)
  }

  function handleFromInput(val: string) {
    lastDirection.value = 'from'
    fromAmount.value = val
    scheduleQuote(val, 'from')
  }

  function handleToInput(val: string) {
    lastDirection.value = 'to'
    toAmount.value = val
    scheduleQuote(val, 'to')
  }

  function handleFromCurrencyChange(currency: Currency) {
    fromCurrency.value = currency.code
    const amount = lastDirection.value === 'from' ? fromAmount.value : toAmount.value
    if (amount) scheduleQuote(amount, lastDirection.value)
  }

  function handleToCurrencyChange(currency: Currency) {
    toCurrency.value = currency.code
    const amount = lastDirection.value === 'from' ? fromAmount.value : toAmount.value
    if (amount) scheduleQuote(amount, lastDirection.value)
  }

  function handleSwap(payload: { from: string; to: string; fromAmount: string }) {
    fromCurrency.value = payload.from
    toCurrency.value = payload.to
    fromAmount.value = payload.fromAmount
    toAmount.value = ''
    if (payload.fromAmount) scheduleQuote(payload.fromAmount, 'from')
  }

  return {
    fromCurrency,
    toCurrency,
    fromAmount,
    toAmount,
    isLoading,
    handleFromInput,
    handleToInput,
    handleFromCurrencyChange,
    handleToCurrencyChange,
    handleSwap,
  }
}

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<QuoteInstance> = {
  title: 'Form/Quote',
  component: GQuote,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
El componente Quote permite al usuario ingresar montos y seleccionar monedas para simular una cotización de cambio de divisas. Soporta entrada bidireccional, swap de monedas, estados de error y saldo disponible.

> La versión de este componente es \`${version}\`.

### Características principales

- Entrada bidireccional: cotiza desde el origen o desde el destino
- Selector de moneda con búsqueda por código o nombre
- Botón de swap para intercambiar monedas
- Estado de saldo disponible
- Mensaje de error personalizable
- Modo de entrada única (singleInput) para transferencias nacionales
- Estado deshabilitado

### Instalación

\`\`\`bash
yarn add @flash-global66/g-quote
\`\`\`

### Dependencias internas

\`\`\`bash
yarn add ${generatePeerDepsInstalls(peerDependencies)}
\`\`\`

### Dependencias externas

\`\`\`bash
yarn add ${generatePeerDepsInstalls(peerDependencies, true)}
\`\`\`

### Peer dependencies

${generatePeerDepsList(peerDependencies)}

### Importación

\`\`\`typescript
import { GQuote } from '@flash-global66/g-quote'
import '@flash-global66/g-quote/styles.scss'
\`\`\`

### Tipo Currency

\`\`\`typescript
interface Currency {
  code: string            // Código ISO (ej: 'CLP')
  name: string            // Nombre completo (ej: 'Peso chileno')
  flagCountryCode: string // Código de bandera (ej: 'CL')
  symbol: string          // Símbolo (ej: '$')
  decimalPlaces: number   // Decimales (ej: 0 para CLP, 2 para USD)
  thousandSeparator: string
  decimalSeparator: string
  locale?: string         // Locale para formato (ej: 'es-CL')
  alwaysVisible?: boolean // Siempre visible en búsqueda
}
\`\`\`
`,
      },
    },
  },
  argTypes: {
    action: {
      description: 'Estado visual del componente',
      control: { type: 'select' },
      options: ['Default', 'NoValue', 'FromError', 'ToError', 'Error'],
      table: {
        type: { summary: 'QuoteAction' },
        defaultValue: { summary: 'Default' },
      },
    },
    showAction: {
      description: 'Controla si se muestra la franja de acción cuando existe un error',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean | undefined' },
        defaultValue: { summary: "FromError => true; otros errores => false" },
      },
    },
    isDisabled: {
      description: 'Deshabilita toda la interacción',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isLoading: {
      description: 'Muestra estado de carga mientras se cotiza',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    fromLabel: {
      description: 'Etiqueta del campo de origen',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    toLabel: {
      description: 'Etiqueta del campo de destino',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    availableLabel: {
      description: 'Texto del label de saldo disponible',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Disponible' } },
    },
    availableBalance: {
      description: 'Texto formateado del saldo disponible (ya formateado)',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    errorMessage: {
      description: 'Mensaje de error mostrado debajo del card',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    actionText: {
      description: 'Texto del botón de acción (ej: cuando hay error de saldo)',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Cargar dinero' } },
    },
    showSwap: {
      description: 'Muestra el botón para intercambiar monedas',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    singleInput: {
      description: 'Oculta el campo de origen (útil para transferencias nacionales)',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    emptyResultsText: {
      description: 'Texto cuando no hay resultados en la búsqueda de moneda',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Sin resultados' } },
    },
  },
  args: {
    action: 'Default',
    fromLabel: 'Tú envías',
    toLabel: 'Tu contacto recibe',
    isDisabled: false,
    isLoading: false,
    showSwap: true,
    singleInput: false,
    availableBalance: '',
    errorMessage: '',
    actionText: 'Cargar dinero',
    availableLabel: 'Disponible',
    emptyResultsText: 'Sin resultados',
  },
}

export default meta
type Story = StoryObj<QuoteInstance>

// ─── Básico (interactivo, controlado por args) ────────────────────────────────

export const Basic: Story = {
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Flujo completo con cotización simulada. Escribe un monto en cualquiera de los campos para disparar la cotización (debounce de 600ms). Cambia las monedas desde el selector o usa el swap.',
      },
    },
  },
  render: (args) => ({
    components: { GQuote, GConfigProvider },
    setup() {
      const sim = useQuoteSimulator()
      return { args, CURRENCIES, ...sim }
    },
    template: `
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            v-bind="args"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            :from-currency="fromCurrency"
            :to-currency="toCurrency"
            :from-amount="fromAmount"
            :to-amount="toAmount"
            :is-loading="isLoading"
            @from-input="handleFromInput"
            @to-input="handleToInput"
            @swap="handleSwap"
            @from-currency-change="handleFromCurrencyChange"
            @to-currency-change="handleToCurrencyChange"
          />
        </div>
      </g-config-provider>
    `,
  }),
}

// ─── Con saldo disponible ─────────────────────────────────────────────────────

export const WithAvailableBalance: Story = {
  name: 'Con saldo disponible',
  parameters: {
    docs: {
      description: {
        story: 'Muestra el saldo disponible sobre el cotizador. El texto de `availableBalance` debe llegar ya formateado desde el consumidor.',
      },
    },
  },
  render: (args) => ({
    components: { GQuote, GConfigProvider },
    setup() {
      const sim = useQuoteSimulator('COP', 'USD')
      return { args, CURRENCIES, ...sim }
    },
    template: `
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            v-bind="args"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            :from-currency="fromCurrency"
            :to-currency="toCurrency"
            :from-amount="fromAmount"
            :to-amount="toAmount"
            :is-loading="isLoading"
            available-balance="$ 183.994.889 COP"
            @from-input="handleFromInput"
            @to-input="handleToInput"
            @swap="handleSwap"
            @from-currency-change="handleFromCurrencyChange"
            @to-currency-change="handleToCurrencyChange"
          />
        </div>
      </g-config-provider>
    `,
  }),
}

// ─── Error saldo insuficiente ─────────────────────────────────────────────────

export const InsufficientBalance: Story = {
  name: 'Error: saldo insuficiente',
  parameters: {
    docs: {
      description: {
        story: 'Cuando `action="FromError"` el componente muestra el botón de acción (por defecto "Cargar dinero") y el mensaje de error. El evento `action-click` notifica al consumidor para redirigir.',
      },
    },
  },
  render: () => ({
    components: { GQuote, GConfigProvider },
    setup() {
      function handleActionClick() {
        alert('Redirigir a cargar dinero')
      }
      return { CURRENCIES, handleActionClick }
    },
    template: `
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            from-currency="COP"
            to-currency="USD"
            from-amount="3672604"
            to-amount=""
            available-balance="$ 183.994.889 COP"
            error-message="El monto que deseas convertir excede el saldo disponible"
            action="FromError"
            from-label="Tú envías"
            to-label="Tu contacto recibe"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            @action-click="handleActionClick"
          />
        </div>
      </g-config-provider>
    `,
  }),
}

// ─── Estado deshabilitado ─────────────────────────────────────────────────────

export const Disabled: Story = {
  name: 'Deshabilitado',
  parameters: {
    docs: {
      description: {
        story: 'Estado `isDisabled` bloquea toda la interacción: inputs, selector de moneda y swap.',
      },
    },
  },
  render: () => ({
    components: { GQuote, GConfigProvider },
    setup() {
      return { CURRENCIES }
    },
    template: `
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            from-currency="CLP"
            to-currency="USD"
            from-amount="100000"
            to-amount="107.50"
            from-label="Tú envías"
            to-label="Tu contacto recibe"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            is-disabled
          />
        </div>
      </g-config-provider>
    `,
  }),
}

// ─── Single input (transferencia nacional) ───────────────────────────────────

export const SingleInput: Story = {
  name: 'Single input (nacional)',
  parameters: {
    docs: {
      description: {
        story: 'Con `single-input` solo se muestra el campo de destino. Útil para transferencias nacionales donde no hay conversión de moneda.',
      },
    },
  },
  render: () => ({
    components: { GQuote, GConfigProvider },
    setup() {
      const toAmount = ref('')

      function handleToInput(val: string) {
        toAmount.value = val
      }

      return { CURRENCIES, toAmount, handleToInput }
    },
    template: `
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            from-currency="CLP"
            to-currency="CLP"
            :to-amount="toAmount"
            from-label="Tú envías"
            to-label="Tu contacto recibe"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            single-input
            @to-input="handleToInput"
          />
        </div>
      </g-config-provider>
    `,
  }),
}

// ─── Sin swap ─────────────────────────────────────────────────────────────────

export const NoSwap: Story = {
  name: 'Sin swap',
  parameters: {
    docs: {
      description: {
        story: 'Con `show-swap="false"` se oculta el botón de intercambio. Útil cuando la dirección de la transacción es fija.',
      },
    },
  },
  render: (args) => ({
    components: { GQuote, GConfigProvider },
    setup() {
      const sim = useQuoteSimulator('USD', 'PEN')
      return { args, CURRENCIES, ...sim }
    },
    template: `
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            v-bind="args"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            :from-currency="fromCurrency"
            :to-currency="toCurrency"
            :from-amount="fromAmount"
            :to-amount="toAmount"
            :is-loading="isLoading"
            :show-swap="false"
            from-label="Tú envías"
            to-label="Tu contacto recibe"
            @from-input="handleFromInput"
            @to-input="handleToInput"
            @from-currency-change="handleFromCurrencyChange"
            @to-currency-change="handleToCurrencyChange"
          />
        </div>
      </g-config-provider>
    `,
  }),
}


