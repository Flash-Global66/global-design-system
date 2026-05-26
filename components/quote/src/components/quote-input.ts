import type { ExtractPropTypes } from 'vue'
import { buildProps, definePropType } from 'element-plus/es/utils/index.mjs'
import type { FlagCode } from '@flash-global66/g-country-flag'
import type { Currency } from '../quote.type'

export const quoteInputProps = buildProps({
  currencies: { type: definePropType<Currency[]>(Array), default: () => [] },
  label: { type: String, required: true },
  value: { type: String, default: '' },
  currencyCode: { type: String, default: '' },
  flagCode: { type: definePropType<FlagCode>(String), default: undefined },
  showArrow: { type: Boolean, default: true },
  isDisabled: { type: Boolean, default: false },
  hasError: { type: Boolean, default: false },
  isEmptyValue: { type: Boolean, default: false },
  isResult: { type: Boolean, default: false },
  quoteDone: { type: Boolean, default: false },
  isFading: { type: Boolean, default: false },
  placeholder: { type: String, default: '0,00' },
  emptyResultsText: { type: String, default: 'Sin resultados' },
} as const)

export type QuoteInputProps = ExtractPropTypes<typeof quoteInputProps>

export const quoteInputEmits = {
  input: (value: string) => typeof value === 'string',
  blur: (value: string) => typeof value === 'string',
  focus: () => true,
  'currency-change': (currency: Currency) => !!currency,
}
