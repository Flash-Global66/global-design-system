import { describe, it, expect } from 'vitest';
import {
  getRangeInputChars,
  getRangeInputLabel,
  getRangeInputMode,
  getRangePanelMaxHeight,
  shouldFocusPanelOnTab,
  shouldOpenPickerFromTrigger,
} from '../../src/utils/rangePicker.util';

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

describe('shouldFocusPanelOnTab', () => {
  const base = {
    openOnInputClick: true,
    pickerVisible: true,
    shiftKey: false,
    hasPanelFocus: true,
    isLastInput: true,
  };

  it('salta al panel desde el último input con el panel abierto', () => {
    expect(shouldFocusPanelOnTab(base)).toBe(true);
  });

  it('deja pasar Tab del input de inicio al de fin', () => {
    expect(shouldFocusPanelOnTab({ ...base, isLastInput: false })).toBe(false);
  });

  it('no salta con Shift+Tab, con el panel cerrado ni con el flag apagado', () => {
    expect(shouldFocusPanelOnTab({ ...base, shiftKey: true })).toBe(false);
    expect(shouldFocusPanelOnTab({ ...base, pickerVisible: false })).toBe(
      false,
    );
    expect(shouldFocusPanelOnTab({ ...base, openOnInputClick: false })).toBe(
      false,
    );
  });

  it('no salta si el panel no sabe recibir el foco', () => {
    expect(shouldFocusPanelOnTab({ ...base, hasPanelFocus: false })).toBe(
      false,
    );
  });
});

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

describe('getRangeInputLabel', () => {
  it('compone el aria-label del consumidor con el placeholder', () => {
    expect(
      getRangeInputLabel({
        ariaLabel: 'Período de descarga',
        placeholder: 'Inicio',
      }),
    ).toBe('Período de descarga Inicio');
  });

  it('usa solo el placeholder cuando no hay aria-label', () => {
    expect(
      getRangeInputLabel({ ariaLabel: undefined, placeholder: 'Inicio' }),
    ).toBe('Inicio');
  });

  it('usa solo el aria-label cuando no hay placeholder', () => {
    expect(
      getRangeInputLabel({
        ariaLabel: 'Período de descarga',
        placeholder: undefined,
      }),
    ).toBe('Período de descarga');
  });

  it('ignora los espacios y devuelve undefined si no queda texto', () => {
    expect(
      getRangeInputLabel({ ariaLabel: '  ', placeholder: ' Inicio ' }),
    ).toBe('Inicio');
    expect(
      getRangeInputLabel({ ariaLabel: undefined, placeholder: '   ' }),
    ).toBeUndefined();
  });
});
