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

export type QuoteAction =
  | 'Default'
  | 'NoValue'
  | 'FromError'
  | 'ToError'
  | 'Error'
