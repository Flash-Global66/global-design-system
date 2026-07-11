import { onBeforeUnmount, onMounted } from 'vue';
import { isClient, EVENT_CODE } from '@flash-global66/g-utils';

/**
 * Ported byte-exact from element-plus 2.9.7's `useEscapeKeydown`
 * (`es/hooks/use-escape-keydown/index.mjs`).
 *
 * Handlers registered by every currently-mounted consumer share a single
 * module-level `document` `keydown` listener: the listener is attached once
 * (when the first handler registers) and detached once the last handler
 * unregisters. Every registered handler is invoked on each `Escape`
 * keydown, regardless of which component instance is currently mounted.
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
 * Registers `handler` to run on every `Escape` keydown while the calling
 * component is mounted. Cleans up automatically on unmount.
 *
 * @param handler - Invoked with the `KeyboardEvent` on `Escape` keydown.
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
