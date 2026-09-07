import type { FlagCode } from '@flash-global66/g-country-flag'

export interface Currency {
  code: string
  name: string
  flagCountryCode: FlagCode
  symbol: string
  decimalPlaces: number
  thousandSeparator: string
  decimalSeparator: string
  locale?: string
  alwaysVisible?: boolean
}

export interface QuoteAccount {
  id: string
  name: string
  /** Texto secundario mostrado bajo el nombre de la cuenta, p. ej. el número de cuenta. */
  description: string
  currencyCode: string
  flagCountryCode: FlagCode
  isPrimary?: boolean
  /** Etiqueta del badge que se muestra junto a la cuenta cuando está definida. */
  badgeLabel?: string
}

export type QuoteAction =
  | 'Default'
  | 'NoValue'
  | 'FromError'
  | 'ToError'
  | 'Error'
