import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '@flash-global66/g-utils';
import type { FlagCode } from '@flash-global66/g-country-flag';
import type { QuoteAccount } from '../quote.type';

export const quoteAccountSelectProps = buildProps({
  accounts: { type: definePropType<QuoteAccount[]>(Array), default: () => [] },
  accountId: { type: String, default: '' },
  currencyCode: { type: String, default: '' },
  flagCode: { type: definePropType<FlagCode>(String), default: undefined },
  isDisabled: { type: Boolean, default: false },
  searchPlaceholder: { type: String, default: 'Buscar' },
  primaryAccountLabel: { type: String, default: 'Cuenta principal' },
  emptyResultsText: { type: String, default: 'Sin resultados' },
} as const);

export type QuoteAccountSelectProps = ExtractPropTypes<typeof quoteAccountSelectProps>;

export const quoteAccountSelectEmits = {
  'account-change': (account: QuoteAccount) => !!account,
};
