/** Función vacía (no-op) reutilizable; equivalente al `NOOP` interno de Vue/element-plus. */
export const NOOP = (): void => {};

/**
 * Comprueba si un valor es invocable (una función).
 *
 * Actúa como type guard de TypeScript.
 *
 * @param val - El valor a verificar.
 * @returns `true` si `val` es una función.
 */
export const isFunction = (val: unknown): val is (...args: any[]) => any =>
  typeof val === 'function';

/** Opciones de `composeEventHandlers`. */
export interface ComposeEventHandlersOptions {
  /**
   * Si es `false`, `oursHandler` siempre se ejecuta sin importar el resultado
   * de `theirsHandler`.
   *
   * @default true
   */
  checkForDefaultPrevented?: boolean;
}

/**
 * Compone dos manejadores de eventos en uno solo.
 *
 * Ejecuta primero `theirsHandler` (típicamente el handler del consumidor) y,
 * salvo que `checkForDefaultPrevented` sea `false`, solo invoca `oursHandler`
 * (el handler interno del componente) si `theirsHandler` no retornó un valor
 * truthy (equivalente a "no se marcó el evento como prevenido").
 *
 * Copiado del algoritmo exacto de element-plus para mantener paridad de
 * comportamiento con los consumidores migrados.
 *
 * @param theirsHandler - Handler externo, ejecutado primero.
 * @param oursHandler - Handler interno, ejecutado si `theirsHandler` no lo impide.
 * @param options - Opciones de composición.
 * @returns Un único manejador de eventos que ejecuta ambos handlers en orden.
 *
 * @example
 * const onClick = composeEventHandlers(props.onClick, handleInternalClick)
 */
export const composeEventHandlers = <E>(
  theirsHandler?: (event: E) => unknown,
  oursHandler?: (event: E) => unknown,
  { checkForDefaultPrevented = true }: ComposeEventHandlersOptions = {},
) => {
  const handleEvent = (event: E) => {
    const shouldPrevent = theirsHandler?.(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler?.(event);
    }
  };
  return handleEvent;
};

/** Manejador de eventos de puntero envuelto por `whenMouse`. */
type WhenMouseHandler = (e: PointerEvent) => unknown;

/**
 * Envuelve un manejador de `PointerEvent` para que solo se ejecute cuando el
 * puntero es un mouse (`pointerType === 'mouse'`). Para punteros táctiles o de
 * lápiz (`touch`/`pen`) el handler se ignora y retorna `undefined`.
 *
 * Copiado del algoritmo exacto de element-plus para mantener paridad de
 * comportamiento con los consumidores migrados (ej: `dropdown`).
 *
 * @param handler - Handler a ejecutar únicamente para eventos de mouse.
 * @returns Un manejador de `PointerEvent` con el filtrado aplicado.
 */
export const whenMouse = (handler: WhenMouseHandler): WhenMouseHandler => {
  return (e: PointerEvent) =>
    e.pointerType === 'mouse' ? handler(e) : undefined;
};
