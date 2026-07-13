/**
 * Throttle mínimo (leading + trailing edge), equivalente en comportamiento a
 * `lodash-unified`'s `throttle` con sus valores por defecto (que es lo que
 * usa element-plus internamente en `es/components/infinite-scroll`). Se
 * implementa localmente para no introducir `lodash-unified` como nueva
 * dependencia de runtime en un paquete que antes solo re-exportaba
 * `element-plus` sin lógica propia.
 *
 * Comportamiento: la primera invocación dispara `fn` de inmediato (leading
 * edge). Invocaciones subsecuentes dentro de la ventana `wait` se coalescen
 * en una única llamada diferida (trailing edge) que se dispara al expirar la
 * ventana desde la última ejecución real.
 */
export const throttle = (fn: () => void, wait: number): (() => void) => {
  let lastInvokeTime = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const invoke = () => {
    lastInvokeTime = Date.now();
    timer = undefined;
    fn();
  };

  return () => {
    const now = Date.now();
    const remaining = wait - (now - lastInvokeTime);

    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = undefined;
      }
      invoke();
      return;
    }

    if (!timer) {
      timer = setTimeout(invoke, remaining);
    }
  };
};
