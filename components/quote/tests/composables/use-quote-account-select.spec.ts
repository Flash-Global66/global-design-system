import { describe, it, expect, vi } from 'vitest';
import { useQuoteAccountSelect } from '../../src/components/use-quote-account-select';
import type { QuoteAccountSelectProps } from '../../src/components/quote-account-select';
import type { QuoteAccount } from '../../src/quote.type';

const CLP_PRIMARY: QuoteAccount = {
  id: 'clp-primary',
  name: 'Cuenta Ahorro',
  description: '1234',
  currencyCode: 'CLP',
  flagCountryCode: 'CL',
  isPrimary: true,
};

const CLP_SECONDARY: QuoteAccount = {
  id: 'clp-secondary',
  name: 'Cuenta Corriente',
  description: '5678',
  currencyCode: 'CLP',
  flagCountryCode: 'CL',
  badgeLabel: 'Adicional',
};

const COP_ACCOUNT: QuoteAccount = {
  id: 'cop-primary',
  name: 'Cuenta Pesos',
  description: '9999',
  currencyCode: 'COP',
  flagCountryCode: 'CO',
  isPrimary: true,
};

const ACCOUNTS = [CLP_PRIMARY, CLP_SECONDARY, COP_ACCOUNT];

const makeProps = (overrides: Partial<QuoteAccountSelectProps> = {}): QuoteAccountSelectProps =>
  ({
    accounts: ACCOUNTS,
    accountId: '',
    currencyCode: '',
    flagCode: undefined,
    isDisabled: false,
    searchPlaceholder: 'Buscar',
    primaryAccountLabel: 'Cuenta principal',
    emptyResultsText: 'Sin resultados',
    ...overrides,
  }) as QuoteAccountSelectProps;

describe('useQuoteAccountSelect', () => {
  it('agrupa las cuentas por currencyCode preservando el orden de aparición', () => {
    const result = useQuoteAccountSelect(makeProps(), vi.fn());

    expect(result.groupedAccounts.value).toEqual([
      { currencyCode: 'CLP', accounts: [CLP_PRIMARY, CLP_SECONDARY] },
      { currencyCode: 'COP', accounts: [COP_ACCOUNT] },
    ]);
  });

  it('filteredGroups sin búsqueda refleja groupedAccounts completo', () => {
    const result = useQuoteAccountSelect(makeProps(), vi.fn());

    expect(result.filteredGroups.value).toEqual(result.groupedAccounts.value);
  });

  it('la búsqueda que solo matchea COP descarta el grupo CLP vacío', () => {
    const result = useQuoteAccountSelect(makeProps(), vi.fn());

    result.searchQuery.value = 'pesos';

    expect(result.filteredGroups.value).toEqual([{ currencyCode: 'COP', accounts: [COP_ACCOUNT] }]);
  });

  it('la búsqueda ignora mayúsculas y matchea por name o description', () => {
    const result = useQuoteAccountSelect(makeProps(), vi.fn());

    result.searchQuery.value = 'CORRIENTE';

    expect(result.filteredGroups.value).toEqual([
      { currencyCode: 'CLP', accounts: [CLP_SECONDARY] },
    ]);
  });

  it('una búsqueda sin resultados devuelve una lista de grupos vacía', () => {
    const result = useQuoteAccountSelect(makeProps(), vi.fn());

    result.searchQuery.value = 'no existe';

    expect(result.filteredGroups.value).toEqual([]);
  });

  it('selectedAccount resuelve la cuenta por accountId', () => {
    const result = useQuoteAccountSelect(makeProps({ accountId: 'clp-secondary' }), vi.fn());

    expect(result.selectedAccount.value).toEqual(CLP_SECONDARY);
  });

  it('selectedAccount es null cuando el accountId no existe', () => {
    const result = useQuoteAccountSelect(makeProps({ accountId: 'no-existe' }), vi.fn());

    expect(result.selectedAccount.value).toBeNull();
  });

  it('badgeLabel es primaryAccountLabel cuando la cuenta seleccionada es principal', () => {
    const result = useQuoteAccountSelect(makeProps({ accountId: 'clp-primary' }), vi.fn());

    expect(result.badgeLabel.value).toBe('Cuenta principal');
    expect(result.isPrimarySelected.value).toBe(true);
  });

  it('badgeLabel es el badgeLabel de la cuenta cuando no es principal', () => {
    const result = useQuoteAccountSelect(makeProps({ accountId: 'clp-secondary' }), vi.fn());

    expect(result.badgeLabel.value).toBe('Adicional');
    expect(result.isPrimarySelected.value).toBe(false);
  });

  it('handleAccountSelect emite account-change con la cuenta elegida', () => {
    const emit = vi.fn();
    const result = useQuoteAccountSelect(makeProps(), emit);

    result.handleAccountSelect(COP_ACCOUNT);

    expect(emit).toHaveBeenCalledWith('account-change', COP_ACCOUNT);
  });

  it('onDropdownVisibleChange limpia searchQuery al cerrar el panel', () => {
    const result = useQuoteAccountSelect(makeProps(), vi.fn());

    result.searchQuery.value = 'pesos';
    result.onDropdownVisibleChange(true);
    expect(result.isDropdownOpen.value).toBe(true);

    result.onDropdownVisibleChange(false);
    expect(result.isDropdownOpen.value).toBe(false);
    expect(result.searchQuery.value).toBe('');
  });
});
