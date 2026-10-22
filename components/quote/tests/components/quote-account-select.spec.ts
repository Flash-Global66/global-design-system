import { afterEach, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import QuoteAccountSelect from '../../src/components/quote-account-select.vue';
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
  badgeLabel: 'Marketing Ads',
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

const makeProps = (
  overrides: Partial<QuoteAccountSelectProps> = {},
): QuoteAccountSelectProps =>
  ({
    accounts: ACCOUNTS,
    accountId: 'clp-primary',
    currencyCode: 'CLP',
    flagCode: 'CL',
    isDisabled: false,
    searchPlaceholder: 'Buscar',
    primaryAccountLabel: 'Cuenta principal',
    emptyResultsText: 'Sin resultados',
    ...overrides,
  }) as QuoteAccountSelectProps;

let wrapper: VueWrapper | undefined;

function mountSelect(overrides: Partial<QuoteAccountSelectProps> = {}) {
  wrapper = mount(QuoteAccountSelect, {
    attachTo: document.body,
    props: makeProps(overrides),
  });
  return wrapper;
}

function findItemByName(name: string): Element | undefined {
  return Array.from(
    document.body.querySelectorAll('.gui-quote-account-select__item'),
  ).find(
    item =>
      item
        .querySelector('.gui-quote-account-select__item-title')
        ?.textContent?.trim() === name,
  );
}

function findRowBadge(name: string): Element | null | undefined {
  return findItemByName(name)?.querySelector(
    '.gui-quote-account-select__badge',
  );
}

async function typeSearch(query: string): Promise<void> {
  const searchInput = document.body.querySelector<HTMLInputElement>(
    '.gui-quote-account-select__search input',
  );
  expect(searchInput).not.toBeNull();

  searchInput!.value = query;
  searchInput!.dispatchEvent(new Event('input'));
  await wrapper!.vm.$nextTick();
}

afterEach(() => {
  wrapper?.unmount();
  wrapper = undefined;
});

describe('QuoteAccountSelect', () => {
  it('muestra el badge verde de cuenta principal cuando la cuenta seleccionada es principal', () => {
    mountSelect({ accountId: 'clp-primary' });

    const badge = document.body.querySelector(
      '.gui-quote-account-select__trigger .gui-quote-account-select__badge',
    );

    expect(badge).not.toBeNull();
    expect(badge?.className).toContain('is-primary');
    expect(badge?.textContent?.trim()).toBe('Cuenta principal');
  });

  it('muestra el badge azul con el nombre de la cuenta cuando no es principal', () => {
    mountSelect({ accountId: 'clp-secondary' });

    const badge = document.body.querySelector(
      '.gui-quote-account-select__trigger .gui-quote-account-select__badge',
    );

    expect(badge).not.toBeNull();
    expect(badge?.className).not.toContain('is-primary');
    expect(badge?.textContent?.trim()).toBe('Marketing Ads');
  });

  it('agrupa los ítems del panel bajo un header por moneda', () => {
    mountSelect();

    const headers = Array.from(
      document.body.querySelectorAll('.gui-quote-account-select__group-header'),
    ).map(el => el.textContent?.trim());

    expect(headers).toEqual(['CLP', 'COP']);
  });

  it('marca con is-selected el ítem correspondiente a accountId', () => {
    mountSelect({ accountId: 'clp-secondary' });

    const items = Array.from(
      document.body.querySelectorAll('.gui-quote-account-select__item'),
    );
    const selected = items.filter(item =>
      item.className.includes('is-selected'),
    );

    expect(selected).toHaveLength(1);
    expect(selected[0].textContent).toContain('Cuenta Corriente');
  });

  it('cuando no se pasan flagCode ni currencyCode, el trigger cae a los de la cuenta de accountId', () => {
    mountSelect({
      accountId: 'cop-primary',
      currencyCode: '',
      flagCode: undefined,
    });

    const code = document.body.querySelector('.gui-quote-account-select__code');
    expect(code?.textContent?.trim()).toBe('COP');

    const flagContainer = document.body.querySelector(
      '.gui-quote-account-select__trigger-row .gui-country-flag__container',
    );
    expect(flagContainer).not.toBeNull();

    const flagLabel =
      flagContainer?.querySelector('img')?.getAttribute('alt') ??
      flagContainer
        ?.querySelector('[aria-label]')
        ?.getAttribute('aria-label') ??
      '';
    expect(flagLabel).toContain('CO');
  });

  it('muestra emptyResultsText cuando la búsqueda no encuentra cuentas', async () => {
    mountSelect();

    await typeSearch('no existe');

    const empty = document.body.querySelector(
      '.gui-quote-account-select__empty',
    );
    expect(empty?.textContent?.trim()).toBe('Sin resultados');
  });

  describe('badge de cuenta principal en la fila', () => {
    it('aparece solo en las filas de cuentas con isPrimary, no en las que traen badgeLabel', () => {
      mountSelect({ accountId: 'clp-secondary' });

      expect(findRowBadge('Cuenta Ahorro')?.className).toContain('is-primary');
      expect(findRowBadge('Cuenta Pesos')?.className).toContain('is-primary');
      expect(findRowBadge('Cuenta Corriente')).toBeNull();
    });

    it('usa el mismo primaryAccountLabel que el trigger', () => {
      mountSelect({
        accountId: 'clp-primary',
        primaryAccountLabel: 'Principal',
      });

      const triggerBadge = document.body.querySelector(
        '.gui-quote-account-select__trigger .gui-quote-account-select__badge',
      );

      expect(triggerBadge?.textContent?.trim()).toBe('Principal');
      expect(findRowBadge('Cuenta Ahorro')?.textContent?.trim()).toBe(
        'Principal',
      );
    });

    it('va al lado del nombre, en la misma línea, y la descripción queda debajo', () => {
      mountSelect();

      const heading = findItemByName('Cuenta Ahorro')?.querySelector(
        '.gui-quote-account-select__item-heading',
      );
      const headingParts = Array.from(heading?.children ?? []).map(
        el => el.className,
      );

      expect(headingParts).toHaveLength(2);
      expect(headingParts[0]).toContain('gui-quote-account-select__item-title');
      expect(headingParts[1]).toContain('gui-quote-account-select__badge');
      expect(heading?.nextElementSibling?.className).toContain(
        'gui-quote-account-select__item-description',
      );
    });

    it('su texto no entra en la búsqueda', async () => {
      mountSelect();

      await typeSearch('principal');

      expect(
        document.body.querySelectorAll('.gui-quote-account-select__item'),
      ).toHaveLength(0);
      expect(
        document.body
          .querySelector('.gui-quote-account-select__empty')
          ?.textContent?.trim(),
      ).toBe('Sin resultados');
    });
  });
});
