import { afterEach, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import QuoteInput from '../../src/components/quote-input.vue';
import { quoteInputProps, quoteInputEmits } from '../../src/components/quote-input';
import type { QuoteInputProps } from '../../src/components/quote-input';
import type { Currency, QuoteAccount } from '../../src/quote.type';

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

const ACCOUNTS = [CLP_ACCOUNT];

const makeProps = (overrides: Partial<QuoteInputProps> = {}): QuoteInputProps =>
  ({
    label: 'Tú envías',
    currencies: [CLP],
    currencyCode: 'CLP',
    ...overrides,
  }) as QuoteInputProps;

let wrapper: VueWrapper | undefined;

function mountInput(overrides: Partial<QuoteInputProps> = {}) {
  wrapper = mount(QuoteInput, {
    attachTo: document.body,
    props: makeProps(overrides),
  });
  return wrapper;
}

afterEach(() => {
  wrapper?.unmount();
  wrapper = undefined;
});

describe('quoteInputProps / quoteInputEmits (definición)', () => {
  it('inicia accounts en un arreglo vacío', () => {
    expect((quoteInputProps.accounts as { default: () => QuoteAccount[] }).default()).toEqual([]);
  });

  it('expone los defaults de accountId, searchPlaceholder y primaryAccountLabel', () => {
    expect((quoteInputProps.accountId as { default: string }).default).toBe('');
    expect((quoteInputProps.searchPlaceholder as { default: string }).default).toBe('Buscar');
    expect((quoteInputProps.primaryAccountLabel as { default: string }).default).toBe(
      'Cuenta principal',
    );
  });

  it('no altera los defaults de las props existentes', () => {
    expect((quoteInputProps.currencies as { default: () => Currency[] }).default()).toEqual([]);
    expect((quoteInputProps.currencyCode as { default: string }).default).toBe('');
    expect((quoteInputProps.showArrow as { default: boolean }).default).toBe(true);
    expect((quoteInputProps.isDisabled as { default: boolean }).default).toBe(false);
    expect((quoteInputProps.disableSelect as { default: boolean }).default).toBe(false);
    expect((quoteInputProps.disableInput as { default: boolean }).default).toBe(false);
    expect((quoteInputProps.hasError as { default: boolean }).default).toBe(false);
    expect((quoteInputProps.isEmptyValue as { default: boolean }).default).toBe(false);
    expect((quoteInputProps.isResult as { default: boolean }).default).toBe(false);
    expect((quoteInputProps.quoteDone as { default: boolean }).default).toBe(false);
    expect((quoteInputProps.isFading as { default: boolean }).default).toBe(false);
    expect((quoteInputProps.placeholder as { default: string }).default).toBe('0,00');
    expect((quoteInputProps.emptyResultsText as { default: string }).default).toBe(
      'Sin resultados',
    );
  });

  it('declara el emit account-change', () => {
    expect(quoteInputEmits['account-change']).toBeDefined();
  });
});

describe('QuoteInput — modo moneda (accounts vacío)', () => {
  it('renderiza el dropdown de monedas y no el selector de cuentas', () => {
    mountInput({ accounts: [] });

    expect(document.body.querySelector('.gui-quote-input__currency')).not.toBeNull();
    expect(document.body.querySelector('.gui-quote-account-select')).toBeNull();
  });

  it('mantiene el buscador dentro del trigger de monedas', () => {
    mountInput({ accounts: [] });

    const searchInput = document.body.querySelector(
      '.gui-quote-input__currency .gui-quote-input__currency-code',
    );

    expect(searchInput).not.toBeNull();
    expect(searchInput?.getAttribute('aria-label')).toBe('Buscar moneda, seleccionada: CLP');
  });
});

describe('QuoteInput — modo cuenta (accounts no vacío)', () => {
  it('renderiza el selector de cuentas y no el dropdown de monedas', () => {
    mountInput({ accounts: ACCOUNTS, accountId: 'clp-primary' });

    expect(document.body.querySelector('.gui-quote-account-select')).not.toBeNull();
    expect(document.body.querySelector('.gui-quote-input__currency')).toBeNull();
  });

  it('re-emite account-change cuando quote-account-select selecciona una cuenta', async () => {
    mountInput({ accounts: ACCOUNTS, accountId: 'clp-primary' });

    const accountSelect = wrapper!.findComponent({ name: 'GQuoteAccountSelect' });
    expect(accountSelect.exists()).toBe(true);

    accountSelect.vm.$emit('account-change', CLP_ACCOUNT);
    await wrapper!.vm.$nextTick();

    expect(wrapper!.emitted('account-change')?.[0]).toEqual([CLP_ACCOUNT]);
  });
});
