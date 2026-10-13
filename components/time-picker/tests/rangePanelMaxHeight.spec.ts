import { describe, it, expect } from 'vitest';
import { getRangePanelMaxHeight } from '../src/utils';

describe('getRangePanelMaxHeight', () => {
  it('usa el espacio libre bajo el campo menos el margen', () => {
    expect(
      getRangePanelMaxHeight({ referenceBottom: 440, viewportHeight: 844 }),
    ).toBe(380);
  });

  it('no baja del mínimo cuando el campo está cerca del borde inferior', () => {
    expect(
      getRangePanelMaxHeight({ referenceBottom: 800, viewportHeight: 844 }),
    ).toBe(240);
  });

  it('redondea hacia abajo', () => {
    expect(
      getRangePanelMaxHeight({ referenceBottom: 440.6, viewportHeight: 844 }),
    ).toBe(379);
  });
});
