import { computed, isRef, onScopeDispose, watch } from 'vue';
import {
  addClass,
  getScrollBarWidth,
  getStyle,
  hasClass,
  isClient,
  removeClass,
  throwError,
  useNamespace,
} from '@flash-global66/g-utils';
import type { Ref } from 'vue';
import type { NamespaceHelpers } from '@flash-global66/g-utils';

/**
 * Dependencia transitiva oculta de `dialog` (no listada explícitamente en el
 * brief de la tarea WU-7, descubierta al leer `use-dialog.ts` completo:
 * `if (props.lockScroll) useLockscreen(visible)`), siguiendo el mismo patrón
 * de drift documentado en WU-6 con `useTimeout`.
 *
 * Portado byte-exact desde `useLockscreen` de element-plus 2.9.7
 * (`es/hooks/use-lockscreen/index.mjs`).
 */
export type UseLockScreenOptions = {
  ns?: NamespaceHelpers;
};

/**
 * Hook que observa `trigger` para bloquear/desbloquear el scroll del body.
 * Cuando `trigger` pasa a `true`, asume que un modal se abrió (y viceversa).
 *
 * @param trigger - `Ref<boolean>` que indica si el scroll debe bloquearse.
 * @param options - `ns` opcional para inyectar un `NamespaceHelpers` distinto
 * al de `useNamespace('popup')` por defecto.
 */
export const useLockscreen = (
  trigger: Ref<boolean>,
  options: UseLockScreenOptions = {},
) => {
  if (!isRef(trigger)) {
    throwError(
      '[useLockscreen]',
      'You need to pass a ref param to this function',
    );
  }

  const ns = options.ns || useNamespace('popup');

  const hiddenCls = computed(() => ns.bm('parent', 'hidden'));

  // Guardia fiel a element-plus 2.9.7: si el body YA tiene la clase de
  // bloqueo cuando se invoca el hook, no hace nada durante toda su vida.
  if (!isClient || hasClass(document.body, hiddenCls.value)) {
    return;
  }

  let scrollBarWidth = 0;
  let withoutHiddenClass = false;
  let bodyWidth = '0';

  const cleanup = () => {
    setTimeout(() => {
      if (typeof document === 'undefined') return;
      if (withoutHiddenClass && document) {
        document.body.style.width = bodyWidth;
        removeClass(document.body, hiddenCls.value);
      }
    }, 200);
  };

  watch(trigger, val => {
    if (!val) {
      cleanup();
      return;
    }

    withoutHiddenClass = !hasClass(document.body, hiddenCls.value);
    if (withoutHiddenClass) {
      bodyWidth = document.body.style.width;
      addClass(document.body, hiddenCls.value);
    }
    scrollBarWidth = getScrollBarWidth(ns.namespace.value);
    const bodyHasOverflow =
      document.documentElement.clientHeight < document.body.scrollHeight;
    const bodyOverflowY = getStyle(document.body, 'overflowY');
    if (
      scrollBarWidth > 0 &&
      (bodyHasOverflow || bodyOverflowY === 'scroll') &&
      withoutHiddenClass
    ) {
      document.body.style.width = `calc(100% - ${scrollBarWidth}px)`;
    }
  });

  onScopeDispose(() => cleanup());
};
