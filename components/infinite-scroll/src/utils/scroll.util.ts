import { isClient, getStyle } from '@flash-global66/g-utils';

/**
 * Utilidades de scroll/posición portadas byte-behavior-exact desde
 * element-plus 2.9.7 (`es/utils/dom/scroll.mjs` y `es/utils/dom/position.mjs`),
 * usadas exclusivamente por la directiva `GInfiniteScroll`. Se mantienen
 * locales al paquete (no en `@flash-global66/g-utils`) porque son
 * específicas del algoritmo de scroll-detection de esta directiva.
 */

const isScroll = (el: Element, isVertical?: boolean): boolean => {
  if (!isClient) return false;

  const key = (
    {
      undefined: 'overflow',
      true: 'overflow-y',
      false: 'overflow-x',
    } as Record<string, string>
  )[String(isVertical)];
  const overflow = getStyle(el as HTMLElement, key);

  return ['scroll', 'auto', 'overlay'].some(s => overflow.includes(s));
};

/**
 * Encuentra el contenedor con scroll más cercano subiendo por `parentNode`
 * desde `el` (inclusive). Retorna `window` si se llega a `document`/`html`
 * sin encontrar overflow, o `undefined` en SSR.
 */
export const getScrollContainer = (
  el: Element | null,
  isVertical?: boolean,
): HTMLElement | Window | undefined => {
  if (!isClient) return undefined;

  let parent: Node | null = el;
  while (parent) {
    if (
      [window, document, document.documentElement].includes(parent as never)
    ) {
      return window;
    }
    if (isScroll(parent as Element, isVertical)) {
      return parent as HTMLElement;
    }
    parent = parent.parentNode;
  }
  return (parent as HTMLElement | null) ?? undefined;
};

const getOffsetTop = (el: HTMLElement): number => {
  let offset = 0;
  let parent: HTMLElement | null = el;
  while (parent) {
    offset += parent.offsetTop;
    parent = parent.offsetParent as HTMLElement | null;
  }
  return offset;
};

export const getOffsetTopDistance = (
  el: HTMLElement,
  containerEl: HTMLElement,
): number => Math.abs(getOffsetTop(el) - getOffsetTop(containerEl));
