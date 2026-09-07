import { afterEach, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import GQuote from '../src/quote.vue';
import { quoteProps, quoteEmits } from '../src/quote';
import type { QuoteProps } from '../src/quote';
import type { Currency, QuoteAccount } from '../src/quote.type';

const CLP: Currency = {
  code: 'CLP',
  name: 'Peso chileno',
  flagCountryCode: 'CL',
  symbol: '$',
  decimalPlaces: 0,
  thousandSeparator: '.',
  decimalSeparator: ',',
};

const CLP_ACCOUNT: QuoteAccount = {
  id: 'clp-primary',
  name: 'Cuenta Ahorro',
  description: '1234',
  currencyCode: 'CLP',
  flagCountryCode: 'CL',
  isPrimary: true,
};

const FROM_ACCOUNTS = [CLP_ACCOUNT];
const TO_ACCOUNTS = [CLP_ACCOUNT];

const EXISTING_PROPS_DEFAULTS: Record<string, unknown> = {
  fromCurrencies: [],
  toCurrencies: [],
  fromAmount: '',
  toAmount: '',
  action: 'Default',
  isLoading: false,
  errorMessage: '',
  availableBalance: '',
  singleInput: false,
  fromLabel: 'Tú envías',
  toLabel: 'Tu contacto recibe',
  isDisabled: false,
  disableOriginSelect: false,
  disableOriginInput: false,
  disableDestinationSelect: false,
  disableDestinationInput: false,
  showSwap: true,
  availableLabel: 'Disponible',
  swapAriaLabel: 'Intercambiar monedas',
  emptyResultsText: 'Sin resultados',
  actionText: 'Cargar dinero',
  showAction: null,
  fromFlagCode: undefined,
  toFlagCode: undefined,
};

const EXISTING_EMITS = [
  'from-input',
  'to-input',
  'from-blur',
  'to-blur',
  'from-currency-change',
  'to-currency-change',
  'swap',
  'from-focus',
  'to-focus',
  'action-click',
];

const makeProps = (overrides: Partial<QuoteProps> = {}): QuoteProps =>
  ({
    fromCurrency: 'CLP',
    toCurrency: 'CLP',
    fromCurrencies: [CLP],
    toCurrencies: [CLP],
    ...overrides,
  }) as QuoteProps;

let wrapper: VueWrapper | undefined;

function mountQuote(overrides: Partial<QuoteProps> = {}) {
  wrapper = mount(GQuote, {
    attachTo: document.body,
    props: makeProps(overrides),
  });
  return wrapper;
}

afterEach(() => {
  wrapper?.unmount();
  wrapper = undefined;
});

describe('GQuote — retrocompatibilidad (ML-80)', () => {
  it('conserva las 26 props existentes con su default original', () => {
    Object.entries(EXISTING_PROPS_DEFAULTS).forEach(([propName, expectedDefault]) => {
      const propDefinition = quoteProps[propName as keyof typeof quoteProps] as {
        default?: unknown;
      };

      expect(propDefinition).toBeDefined();

      const actualDefault =
        typeof propDefinition.default === 'function'
          ? (propDefinition.default as () => unknown)()
          : propDefinition.default;

      expect(actualDefault).toEqual(expectedDefault);
    });

    expect(quoteProps.fromCurrency).toBeDefined();
    expect(quoteProps.toCurrency).toBeDefined();
  });

  it('conserva los 10 emits existentes', () => {
    EXISTING_EMITS.forEach((emitName) => {
      expect(quoteEmits[emitName as keyof typeof quoteEmits]).toBeDefined();
    });
  });
});

describe('GQuote — modo cuentas (props y emits nuevos)', () => {
  it('expone los defaults de las props de cuentas', () => {
    expect((quoteProps.fromAccounts as { default: () => QuoteAccount[] }).default()).toEqual([]);
    expect((quoteProps.toAccounts as { default: () => QuoteAccount[] }).default()).toEqual([]);
    expect((quoteProps.fromAccountId as { default: string }).default).toBe('');
    expect((quoteProps.toAccountId as { default: string }).default).toBe('');
    expect((quoteProps.accountSearchPlaceholder as { default: string }).default).toBe('Buscar');
    expect((quoteProps.primaryAccountLabel as { default: string }).default).toBe(
      'Cuenta principal',
    );
  });

  it('declara los emits from-account-change y to-account-change', () => {
    expect(quoteEmits['from-account-change']).toBeDefined();
    expect(quoteEmits['to-account-change']).toBeDefined();
  });

  it('pasa fromAccounts/fromAccountId al quote-input de origen y re-emite from-account-change', async () => {
    mountQuote({ fromAccounts: FROM_ACCOUNTS, fromAccountId: 'clp-primary' });

    const fromInput = wrapper!.findAllComponents({ name: 'GQuoteInput' })[0];
    expect(fromInput.props('accounts')).toEqual(FROM_ACCOUNTS);
    expect(fromInput.props('accountId')).toBe('clp-primary');

    fromInput.vm.$emit('account-change', CLP_ACCOUNT);
    await wrapper!.vm.$nextTick();

    expect(wrapper!.emitted('from-account-change')?.[0]).toEqual([CLP_ACCOUNT]);
  });

  it('pasa toAccounts/toAccountId al quote-input de destino y re-emite to-account-change', async () => {
    mountQuote({ toAccounts: TO_ACCOUNTS, toAccountId: 'clp-primary' });

    const toInput = wrapper!.findAllComponents({ name: 'GQuoteInput' })[1];
    expect(toInput.props('accounts')).toEqual(TO_ACCOUNTS);
    expect(toInput.props('accountId')).toBe('clp-primary');

    toInput.vm.$emit('account-change', CLP_ACCOUNT);
    await wrapper!.vm.$nextTick();

    expect(wrapper!.emitted('to-account-change')?.[0]).toEqual([CLP_ACCOUNT]);
  });

  it('mapea accountSearchPlaceholder y primaryAccountLabel a searchPlaceholder de cada quote-input', () => {
    mountQuote({
      accountSearchPlaceholder: 'Buscar cuenta',
      primaryAccountLabel: 'Principal',
    });

    const inputs = wrapper!.findAllComponents({ name: 'GQuoteInput' });

    inputs.forEach((input) => {
      expect(input.props('searchPlaceholder')).toBe('Buscar cuenta');
      expect(input.props('primaryAccountLabel')).toBe('Principal');
    });
  });

  it('sin fromAccounts/toAccounts renderiza los dos dropdowns de moneda', () => {
    mountQuote();

    expect(document.body.querySelectorAll('.gui-quote-input__currency')).toHaveLength(2);
    expect(document.body.querySelector('.gui-quote-account-select')).toBeNull();
  });
});
