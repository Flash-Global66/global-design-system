import { computed, ref, shallowRef } from 'vue';
import { useResizeObserver } from '@vueuse/core';

/**
 * Portado byte-exact desde `useCalcInputWidth` de element-plus 2.9.7
 * (`es/hooks/use-calc-input-width/index.mjs`).
 *
 * Mide el ancho de un elemento "calculador" oculto (que refleja el texto
 * actual del input) para que el input filtrable de `select` crezca según su
 * contenido, respetando un ancho mínimo de 11px.
 */
const MINIMUM_INPUT_WIDTH = 11;

export function useCalcInputWidth() {
  const calculatorRef = shallowRef<HTMLElement>();
  const calculatorWidth = ref(0);

  const inputStyle = computed(() => ({
    minWidth: `${Math.max(calculatorWidth.value, MINIMUM_INPUT_WIDTH)}px`,
  }));

  const resetCalculatorWidth = () => {
    calculatorWidth.value =
      calculatorRef.value?.getBoundingClientRect().width ?? 0;
  };

  useResizeObserver(calculatorRef, resetCalculatorWidth);

  return {
    calculatorRef,
    calculatorWidth,
    inputStyle,
  };
}
