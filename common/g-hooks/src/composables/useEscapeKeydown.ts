import { onBeforeUnmount, onMounted } from 'vue';
import { isClient, EVENT_CODE } from '@flash-global66/g-utils';

/**
 * Portado byte-exact desde `useEscapeKeydown` de element-plus 2.9.7
 * (`es/hooks/use-escape-keydown/index.mjs`).
 *
 * Los handlers registrados por cada consumidor montado comparten un único
 * listener `keydown` a nivel de módulo sobre `document`: el listener se agrega
 * una sola vez (cuando se registra el primer handler) y se remueve cuando se
 * desregistra el último. Cada handler registrado se invoca en cada keydown de
 * `Escape`, sin importar qué instancia de componente esté montada.
 */
let registeredEscapeHandlers: ((event: KeyboardEvent) => void)[] = [];

const cachedHandler = (event: KeyboardEvent): void => {
  if (event.code === EVENT_CODE.esc) {
    registeredEscapeHandlers.forEach(registeredHandler =>
      registeredHandler(event),
    );
  }
};

/**
 * Registra `handler` para ejecutarse en cada keydown de `Escape` mientras el
 * componente que lo llama esté montado. Se limpia automáticamente al desmontar.
 *
 * @param handler - Se invoca con el `KeyboardEvent` en el keydown de `Escape`.
 */
export const useEscapeKeydown = (
  handler: (event: KeyboardEvent) => void,
): void => {
  onMounted(() => {
    if (registeredEscapeHandlers.length === 0) {
      document.addEventListener('keydown', cachedHandler);
    }
    if (isClient) registeredEscapeHandlers.push(handler);
  });

  onBeforeUnmount(() => {
    registeredEscapeHandlers = registeredEscapeHandlers.filter(
      registeredHandler => registeredHandler !== handler,
    );
    if (registeredEscapeHandlers.length === 0) {
      if (isClient) document.removeEventListener('keydown', cachedHandler);
    }
  });
};
