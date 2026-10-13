import { describe, it, expect } from 'vitest';
import { getRangeInputChars } from '../src/utils';

describe('getRangeInputChars', () => {
  it('usa el largo del formato cuando es el más largo', () => {
    expect(
      getRangeInputChars({
        format: 'DD/MM/YYYY',
        startPlaceholder: 'Inicio',
        endPlaceholder: 'Fin',
      }),
    ).toBe(10);
  });

  it('usa el placeholder cuando es más largo que el formato', () => {
    expect(
      getRangeInputChars({
        format: 'DD/MM/YYYY',
        startPlaceholder: 'Fecha de inicio',
        endPlaceholder: 'Fecha fin',
      }),
    ).toBe(15);
  });

  it('ignora los espacios de los extremos del placeholder', () => {
    expect(
      getRangeInputChars({
        format: 'DD/MM/YYYY',
        startPlaceholder: '   Desde',
        endPlaceholder: 'Hasta',
      }),
    ).toBe(10);
  });

  it('tiene un mínimo cuando no hay formato ni placeholders', () => {
    expect(
      getRangeInputChars({
        format: undefined,
        startPlaceholder: undefined,
        endPlaceholder: undefined,
      }),
    ).toBe(8);
  });

  it('crece con un formato de fecha y hora', () => {
    expect(
      getRangeInputChars({
        format: 'YYYY-MM-DD HH:mm:ss',
        startPlaceholder: 'Inicio',
        endPlaceholder: 'Fin',
      }),
    ).toBe(19);
  });
});
