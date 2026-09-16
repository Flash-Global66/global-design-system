import {
  getCurrentInstance,
  onBeforeUnmount,
  ref,
  shallowRef,
  watch,
} from 'vue';
import type { Ref, ShallowRef } from 'vue';

/** Opciones de entrada de `useFocusController`. */
export interface UseFocusControllerOptions {
  /** Se ejecuta antes de aplicar el foco; retornar `true` cancela el foco. */
  beforeFocus?: (event: FocusEvent) => boolean | undefined;
  /** Se ejecuta después de que `isFocused` pasa a `true`. */
  afterFocus?: () => void;
  /** Se ejecuta antes de quitar el foco; retornar `true` cancela el blur. */
  beforeBlur?: (event: FocusEvent) => boolean | undefined;
  /** Se ejecuta después de que `isFocused` pasa a `false`. */
  afterBlur?: () => void;
}

/** Valor retornado por `useFocusController`. */
export interface UseFocusControllerReturn {
  /** Debe enlazarse (`ref="wrapperRef"`) al elemento wrapper en el template. */
  wrapperRef: ShallowRef<HTMLElement | undefined>;
  isFocused: Ref<boolean>;
  handleFocus: (event: FocusEvent) => void;
  handleBlur: (event: FocusEvent) => void;
}

/**
 * Controlador de foco/blur para un `<input>`/`<textarea>` envuelto en un
 * contenedor.
 *
 * Copiado del algoritmo `useFocusController` de element-plus (guards
 * `beforeFocus`/`beforeBlur`, supresión de blur cuando `relatedTarget`
 * sigue dentro del wrapper, `handleClick` delega el foco al `target`).
 * `wrapperRef` se auto-observa: en cuanto el consumidor lo enlaza a un
 * elemento real vía `ref="wrapperRef"` en el template, este hook adjunta
 * los listeners nativos (`focus`/`blur`/`click`, fase de captura) — el
 * consumidor NO necesita declarar `@focus`/`@blur`/`@click` manualmente,
 * igual que con el `useEventListener` interno de element-plus.
 *
 * @param target - `Ref` al elemento que recibe el foco real (`handleClick`
 *   lo enfoca programáticamente).
 * @param options - Callbacks `before*`/`after*` de foco y blur.
 */
export const useFocusController = <T extends { focus: () => void }>(
  target: Ref<T | undefined>,
  options: UseFocusControllerOptions = {},
): UseFocusControllerReturn => {
  const { beforeFocus, afterFocus, beforeBlur, afterBlur } = options;
  const wrapperRef = shallowRef<HTMLElement>();
  const isFocused = ref(false);

  const handleFocus = (event: FocusEvent): void => {
    const cancelFocus = beforeFocus?.(event) ?? false;
    if (cancelFocus || isFocused.value) return;
    isFocused.value = true;
    afterFocus?.();
  };

  const handleBlur = (event: FocusEvent): void => {
    const cancelBlur = beforeBlur?.(event) ?? false;
    const relatedTarget = event.relatedTarget;
    const focusStaysInsideWrapper =
      relatedTarget instanceof Node &&
      !!wrapperRef.value?.contains(relatedTarget);
    if (cancelBlur || focusStaysInsideWrapper) return;
    isFocused.value = false;
    afterBlur?.();
  };

  const handleClick = (): void => {
    if (
      wrapperRef.value?.contains(document.activeElement) &&
      wrapperRef.value !== document.activeElement
    ) {
      return;
    }
    target.value?.focus();
  };

  let detach: (() => void) | undefined;

  watch(
    wrapperRef,
    el => {
      detach?.();
      detach = undefined;
      if (!el) return;

      el.setAttribute('tabindex', '-1');
      el.addEventListener('focus', handleFocus, true);
      el.addEventListener('blur', handleBlur, true);
      el.addEventListener('click', handleClick, true);
      detach = () => {
        el.removeEventListener('focus', handleFocus, true);
        el.removeEventListener('blur', handleBlur, true);
        el.removeEventListener('click', handleClick, true);
      };
    },
    { flush: 'sync' },
  );

  if (getCurrentInstance()) {
    onBeforeUnmount(() => detach?.());
  }

  return { wrapperRef, isFocused, handleFocus, handleBlur };
};
