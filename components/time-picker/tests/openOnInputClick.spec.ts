import { describe, it, expect } from 'vitest';
import { timePickerDefaultProps } from '../src/common/props';
import { getRangeInputMode, shouldOpenPickerFromTrigger } from '../src/utils';

describe('timePickerDefaultProps.openOnInputClick', () => {
  it('es un booleano apagado por defecto', () => {
    expect(timePickerDefaultProps.openOnInputClick.type).toBe(Boolean);
    expect(timePickerDefaultProps.openOnInputClick.default).toBe(false);
  });
});

describe('shouldOpenPickerFromTrigger', () => {
  describe('con el flag apagado', () => {
    it('abre al tocar fuera de un input', () => {
      expect(
        shouldOpenPickerFromTrigger({
          targetTagName: 'svg',
          isFocused: false,
          openOnInputClick: false,
        }),
      ).toBe(true);
    });

    it('no abre al tocar un input sin foco', () => {
      expect(
        shouldOpenPickerFromTrigger({
          targetTagName: 'INPUT',
          isFocused: false,
          openOnInputClick: false,
        }),
      ).toBe(false);
    });

    it('abre al tocar un input que ya tiene foco', () => {
      expect(
        shouldOpenPickerFromTrigger({
          targetTagName: 'INPUT',
          isFocused: true,
          openOnInputClick: false,
        }),
      ).toBe(true);
    });
  });

  describe('con el flag encendido', () => {
    it('abre al tocar un input sin foco', () => {
      expect(
        shouldOpenPickerFromTrigger({
          targetTagName: 'INPUT',
          isFocused: false,
          openOnInputClick: true,
        }),
      ).toBe(true);
    });

    it('sigue abriendo al tocar fuera de un input', () => {
      expect(
        shouldOpenPickerFromTrigger({
          targetTagName: 'DIV',
          isFocused: false,
          openOnInputClick: true,
        }),
      ).toBe(true);
    });

    it('tolera un target ausente', () => {
      expect(
        shouldOpenPickerFromTrigger({
          targetTagName: undefined,
          isFocused: false,
          openOnInputClick: true,
        }),
      ).toBe(true);
    });
  });
});

describe('getRangeInputMode', () => {
  it('oculta el teclado virtual cuando el clic en el input abre el panel en un puntero táctil', () => {
    expect(
      getRangeInputMode({ openOnInputClick: true, isCoarsePointer: true }),
    ).toBe('none');
  });

  it('no toca el modo del input con el flag apagado', () => {
    expect(
      getRangeInputMode({ openOnInputClick: false, isCoarsePointer: true }),
    ).toBeUndefined();
  });

  it('no toca el modo del input con mouse', () => {
    expect(
      getRangeInputMode({ openOnInputClick: true, isCoarsePointer: false }),
    ).toBeUndefined();
  });
});
