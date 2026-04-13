import type { ExtractPropTypes } from 'vue'
import { buildProps, definePropType } from 'element-plus/es/utils/index.mjs'
import type { FlagCode } from '@flash-global66/g-country-flag'
import type { Currency, QuoteAction } from './quote.type'

export const quoteProps = buildProps({
  fromCurrency: { type: String, required: true },
  toCurrency: { type: String, required: true },
  fromCurrencies: { type: definePropType<Currency[]>(Array), default: () => [] },
  toCurrencies: { type: definePropType<Currency[]>(Array), default: () => [] },
  fromAmount: { type: String, default: '' },
  toAmount: { type: String, default: '' },
  action: { type: definePropType<QuoteAction>(String), default: 'Default' },
  isLoading: { type: Boolean, default: false },
  errorMessage: { type: String, default: '' },
  availableBalance: { type: String, default: '' },
  singleInput: { type: Boolean, default: false },
  fromLabel: { type: String, default: 'Tú envías' },
  toLabel: { type: String, default: 'Tu contacto recibe' },
  isDisabled: { type: Boolean, default: false },
  showSwap: { type: Boolean, default: true },
  availableLabel: { type: String, default: 'Disponible' },
  swapAriaLabel: { type: String, default: 'Intercambiar monedas' },
  emptyResultsText: { type: String, default: 'Sin resultados' },
  actionText: { type: String, default: 'Cargar dinero' },
  fromFlagCode: { type: definePropType<FlagCode>(String), default: undefined },
  toFlagCode: { type: definePropType<FlagCode>(String), default: undefined },
} as const)

export type QuoteProps = ExtractPropTypes<typeof quoteProps>

export const quoteEmits = {
  'from-input': (value: string) => typeof value === 'string',
  'to-input': (value: string) => typeof value === 'string',
  'from-blur': (value: string) => typeof value === 'string',
  'to-blur': (value: string) => typeof value === 'string',
  'from-currency-change': (currency: Currency) => !!currency,
  'to-currency-change': (currency: Currency) => !!currency,
  swap: (payload: { from: string; to: string; fromAmount: string; toAmount: string; fromFlagCode?: FlagCode; toFlagCode?: FlagCode }) =>
    typeof payload.from === 'string' && typeof payload.to === 'string' && typeof payload.fromAmount === 'string',
  'from-focus': () => true,
  'to-focus': () => true,
  'action-click': () => true,
}
