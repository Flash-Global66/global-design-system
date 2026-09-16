import { describe, it, expect, vi } from 'vitest';
import { createApp, defineComponent, h } from 'vue';
import { useCalcInputWidth } from '../../src/composables/useCalcInputWidth';

// `@vueuse/core`'s `useResizeObserver` requiere un `ResizeObserver` real en
// el entorno; jsdom no lo implementa. Se mockea con un stub que retiene el
// callback para poder dispararlo manualmente y así probar el recálculo real.
let observedCallback: (() => void) | undefined;

vi.stubGlobal(
  'ResizeObserver',
  class {
    constructor(callback: () => void) {
      observedCallback = callback;
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  },
);

describe('useCalcInputWidth', () => {
  it('expone calculatorRef para bindear en el template', () => {
    let calculatorRef:
      | ReturnType<typeof useCalcInputWidth>['calculatorRef']
      | undefined;

    const Child = defineComponent({
      setup() {
        const result = useCalcInputWidth();
        calculatorRef = result.calculatorRef;
        return () => null;
      },
    });

    createApp(Child).mount(document.createElement('div'));

    expect(calculatorRef?.value).toBeUndefined();
  });

  it('inputStyle refleja un minWidth basado en el ancho medido (11px de piso)', () => {
    let inputStyle: { minWidth: string } | undefined;

    const Child = defineComponent({
      setup() {
        const result = useCalcInputWidth();
        inputStyle = result.inputStyle.value;
        return () => null;
      },
    });

    createApp(Child).mount(document.createElement('div'));

    // Sin elemento medido todavía, calculatorWidth es 0 -> el piso de 11px gana.
    expect(inputStyle).toEqual({ minWidth: '11px' });
  });

  it('resetCalculatorWidth (vía useResizeObserver) actualiza inputStyle cuando el elemento crece', () => {
    let result: ReturnType<typeof useCalcInputWidth> | undefined;

    const Child = defineComponent({
      setup() {
        result = useCalcInputWidth();
        return () => h('span', { ref: result!.calculatorRef });
      },
    });

    createApp(Child).mount(document.createElement('div'));

    Object.defineProperty(
      result!.calculatorRef.value!,
      'getBoundingClientRect',
      {
        value: () => ({ width: 40 }),
        configurable: true,
      },
    );

    // Dispara manualmente el callback que useResizeObserver invocaría al
    // detectar el cambio de tamaño real.
    observedCallback?.();

    expect(result!.calculatorWidth.value).toBe(40);
    expect(result!.inputStyle.value).toEqual({ minWidth: '40px' });
  });
});
