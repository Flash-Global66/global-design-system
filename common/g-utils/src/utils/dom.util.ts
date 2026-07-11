/**
 * Utilidades de DOM y entorno de ejecución.
 *
 * Copiadas del comportamiento exacto de element-plus para mantener paridad
 * con los consumidores migrados. Todas son seguras de evaluar en SSR.
 */

/**
 * `true` únicamente cuando `window` y `document` están definidos.
 *
 * Seguro de evaluar al cargar el módulo, incluso en entornos SSR.
 */
export const isClient =
  typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Comprueba si un valor es una instancia de `Element` del DOM.
 *
 * @param val - El valor a verificar.
 * @returns `true` si `val` es un `Element`. Siempre `false` en SSR.
 */
export const isElement = (val: unknown): val is Element => {
  if (typeof Element === 'undefined') return false;
  return val instanceof Element;
};

const classNameToArray = (cls = ''): string[] =>
  cls.split(' ').filter(item => !!item.trim());

/**
 * Comprueba si un elemento tiene una clase CSS.
 *
 * @param el - El elemento a verificar.
 * @param cls - La clase a buscar (sin espacios).
 * @throws Si `cls` contiene espacios.
 */
export const hasClass = (
  el: Element | null | undefined,
  cls: string,
): boolean => {
  if (!el || !cls) return false;
  if (cls.includes(' ')) {
    throw new Error('className should not contain space.');
  }
  return el.classList.contains(cls);
};

/** Agrega una o más clases CSS (separadas por espacio) a un elemento. */
export const addClass = (el: Element | null | undefined, cls: string): void => {
  if (!el || !cls.trim()) return;
  el.classList.add(...classNameToArray(cls));
};

/** Remueve una o más clases CSS (separadas por espacio) de un elemento. */
export const removeClass = (
  el: Element | null | undefined,
  cls: string,
): void => {
  if (!el || !cls.trim()) return;
  el.classList.remove(...classNameToArray(cls));
};

/**
 * `requestAnimationFrame` con fallback a `setTimeout` en SSR.
 *
 * @param fn - Callback a ejecutar en el siguiente frame.
 * @returns El identificador retornado por `requestAnimationFrame`/`setTimeout`.
 */
export const rAF = (fn: FrameRequestCallback): number =>
  isClient
    ? window.requestAnimationFrame(fn)
    : (setTimeout(fn, 16) as unknown as number);

/**
 * Verifica si un elemento puede recibir foco (por orden de tabulación o
 * programáticamente).
 *
 * Copia byte-exact del algoritmo `isFocusable` de element-plus
 * (`es/utils/dom/aria.mjs`, 2.9.7).
 *
 * @param element - El elemento a verificar.
 * @returns `true` si el elemento puede recibir foco.
 */
export const isFocusable = (element: HTMLElement): boolean => {
  if (
    element.tabIndex > 0 ||
    (element.tabIndex === 0 && element.getAttribute('tabIndex') !== null)
  ) {
    return true;
  }
  if (
    element.tabIndex < 0 ||
    element.hasAttribute('disabled') ||
    element.getAttribute('aria-disabled') === 'true'
  ) {
    return false;
  }

  switch (element.nodeName) {
    case 'A': {
      return (
        !!(element as HTMLAnchorElement).href &&
        (element as HTMLAnchorElement).rel !== 'ignore'
      );
    }
    case 'INPUT': {
      return !(
        (element as HTMLInputElement).type === 'hidden' ||
        (element as HTMLInputElement).type === 'file'
      );
    }
    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA': {
      return true;
    }
    default: {
      return false;
    }
  }
};
