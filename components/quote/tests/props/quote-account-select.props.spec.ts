import { describe, it, expect } from 'vitest';
import { quoteAccountSelectProps } from '../../src/components/quote-account-select';

describe('quoteAccountSelectProps (definición)', () => {
  it('inicia accounts en un arreglo vacío', () => {
    expect((quoteAccountSelectProps.accounts as any).default()).toEqual([]);
  });

  it('expone los defaults esperados', () => {
    expect((quoteAccountSelectProps.accountId as any).default).toBe('');
    expect((quoteAccountSelectProps.currencyCode as any).default).toBe('');
    expect((quoteAccountSelectProps.flagCode as any).default).toBeUndefined();
    expect((quoteAccountSelectProps.isDisabled as any).default).toBe(false);
    expect((quoteAccountSelectProps.searchPlaceholder as any).default).toBe('Buscar');
    expect((quoteAccountSelectProps.primaryAccountLabel as any).default).toBe('Cuenta principal');
    expect((quoteAccountSelectProps.emptyResultsText as any).default).toBe('Sin resultados');
  });
});
