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
const camelizeRE = /-(\w)/g;

/** Convierte `kebab-case` a `camelCase` (ej: `overflow-y` -> `overflowY`). */
const camelize = (str: string): string =>
  str.replace(camelizeRE, (_, c: string) => (c ? c.toUpperCase() : ''));

/**
 * Obtiene el valor computado (o inline) de una propiedad CSS de un elemento.
 *
 * Copia byte-exact del algoritmo `getStyle` de element-plus
 * (`es/utils/dom/style.mjs`, 2.9.7).
 *
 * @param element - El elemento del cual leer el estilo.
 * @param styleName - Nombre de la propiedad CSS (acepta `kebab-case`).
 * @returns El valor del estilo, o cadena vacía si no aplica/no es cliente.
 */
export const getStyle = (
  element: HTMLElement | null | undefined,
  styleName: string,
): string => {
  if (!isClient || !element || !styleName) return '';

  let key = camelize(styleName);
  if (key === 'float') key = 'cssFloat';

  try {
    const style = (element.style as unknown as Record<string, string>)[key];
    if (style) return style;
    const computed = document.defaultView?.getComputedStyle(element, '');
    return computed ? (computed as unknown as Record<string, string>)[key] : '';
  } catch {
    return (element.style as unknown as Record<string, string>)[key];
  }
};

let scrollBarWidth: number | undefined;

/**
 * Mide el ancho de la barra de scroll nativa del navegador, insertando y
 * removiendo un elemento auxiliar temporal.
 *
 * Copia byte-exact del algoritmo `getScrollBarWidth` de element-plus
 * (`es/utils/dom/scroll.mjs`, 2.9.7). Memoiza el resultado en el módulo:
 * solo mide una vez por sesión de página.
 *
 * @param namespace - Prefijo BEM usado para nombrar el elemento auxiliar
 * (ej: `'gui'` -> clase `gui-scrollbar__wrap`).
 * @returns El ancho de la barra de scroll en píxeles (0 en SSR).
 */
export const getScrollBarWidth = (namespace: string): number => {
  if (!isClient) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  const outer = document.createElement('div');
  outer.className = `${namespace}-scrollbar__wrap`;
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;
  outer.parentNode?.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};

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
