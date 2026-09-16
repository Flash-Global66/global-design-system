import { nextTick, ref } from 'vue';
import type { Ref } from 'vue';

/**
 * Detecta si el último carácter compuesto pertenece al alfabeto coreano
 * (Hangul, incluidas las sílabas precombinadas y los jamos sueltos).
 *
 * Copiado byte a byte de `isKorean` de element-plus (`utils/i18n`). Usado
 * únicamente como el "Firefox guard" de `useComposition`: en Firefox, el
 * evento `compositionupdate` puede seguir disparándose mientras se compone
 * texto en coreano sin que el usuario haya terminado la composición.
 */
const isKorean = (text: string): boolean => /([가-힯㄰-㆏])+/gi.test(text);

/** Opciones de entrada de `useComposition`. */
export interface UseCompositionOptions {
  /** Se invoca (en el siguiente tick) cuando la composición IME termina. */
  afterComposition: (event: CompositionEvent) => void;
  /**
   * `emit` del componente consumidor; opcional, ya que este hook no asume un
   * `SetupContext`.
   *
   * NOTE (type fidelity, found while wiring WU-5's `input.vue`): narrowed to
   * exactly the 3 composition events, matching real element-plus's own
   * `.d.ts` (`node_modules/element-plus/es/hooks/use-composition/index.d.ts`)
   * instead of the generic `SetupContext['emit']` design.md originally
   * specified. A component's `defineEmits`-derived `emit` (declared via an
   * object-form emits definition, as `input.vue` does) infers a specific
   * per-event overloaded type that is NOT structurally assignable to the
   * fully generic `(event: string, ...args: any[]) => void` signature of
   * `SetupContext['emit']`, but IS assignable to this narrower overload
   * (a function with more overloads satisfies a target requiring fewer).
   * Type-only change — zero runtime behavior difference.
   */
  emit?: ((event: 'compositionstart', evt: CompositionEvent) => void) &
    ((event: 'compositionupdate', evt: CompositionEvent) => void) &
    ((event: 'compositionend', evt: CompositionEvent) => void);
}

/** Valor retornado por `useComposition`. */
export interface UseCompositionReturn {
  isComposing: Ref<boolean>;
  handleComposition: (event: CompositionEvent) => void;
  handleCompositionStart: (event: CompositionEvent) => void;
  handleCompositionUpdate: (event: CompositionEvent) => void;
  handleCompositionEnd: (event: CompositionEvent) => void;
}

/**
 * Maneja el estado de composición IME (Input Method Editor) de un `<input>`
 * o `<textarea>`.
 *
 * Copiado byte a byte del algoritmo `useComposition` de element-plus,
 * incluido el "Firefox guard" basado en `isKorean` en `compositionupdate`.
 *
 * @param options - `afterComposition` (callback post-composición) y `emit`
 *   opcional del componente consumidor, para re-emitir los eventos nativos
 *   `composition*` tal como element-plus lo hacía.
 */
export const useComposition = ({
  afterComposition,
  emit,
}: UseCompositionOptions): UseCompositionReturn => {
  const isComposing = ref(false);

  const handleCompositionStart = (event: CompositionEvent): void => {
    emit?.('compositionstart', event);
    isComposing.value = true;
  };

  const handleCompositionUpdate = (event: CompositionEvent): void => {
    emit?.('compositionupdate', event);
    const text = (event.target as HTMLInputElement | null)?.value ?? '';
    const lastCharacter = text[text.length - 1] || '';
    isComposing.value = !isKorean(lastCharacter);
  };

  const handleCompositionEnd = (event: CompositionEvent): void => {
    emit?.('compositionend', event);
    if (isComposing.value) {
      isComposing.value = false;
      void nextTick(() => afterComposition(event));
    }
  };

  const handleComposition = (event: CompositionEvent): void => {
    if (event.type === 'compositionend') {
      handleCompositionEnd(event);
    } else {
      handleCompositionUpdate(event);
    }
  };

  return {
    isComposing,
    handleComposition,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
  };
};
