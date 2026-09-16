import { nextTick } from 'vue';
import { isFunction, throwError } from '@flash-global66/g-utils';
import { getOffsetTopDistance, getScrollContainer } from './utils/scroll.util';
import { throttle } from './utils/throttle.util';

import type { ObjectDirective } from 'vue';

/**
 * Directiva `v-infinite-scroll` portada desde element-plus 2.9.7
 * (`es/components/infinite-scroll/src/index.mjs`), reemplazando el
 * re-export bare de `ElInfiniteScroll`. Mantiene el mismo contrato de
 * atributos (`infinite-scroll-delay/-distance/-disabled/-immediate`) y el
 * mismo algoritmo de disparo, por lo que los usos existentes
 * (`v-infinite-scroll="loadMore"`) siguen funcionando sin cambios.
 */

const SCOPE = 'GInfiniteScroll';
export const CHECK_INTERVAL = 50;
export const DEFAULT_DELAY = 200;
export const DEFAULT_DISTANCE = 0;

type InfiniteScrollCallback = (...args: unknown[]) => unknown;

interface ScrollOptions {
  delay: number;
  distance: number;
  disabled: boolean;
  immediate: boolean;
}

interface InfiniteScrollState {
  instance: Record<string, unknown> | null;
  container: HTMLElement | Window;
  containerEl: HTMLElement;
  cb: InfiniteScrollCallback;
  onScroll: () => void;
  lastScrollTop: number;
  observer?: MutationObserver;
}

type InfiniteScrollElement = HTMLElement & { [SCOPE]?: InfiniteScrollState };

/**
 * Lee un atributo `infinite-scroll-{name}` del host. Réplica exacta del
 * contrato de element-plus: el valor del atributo puede ser un literal
 * (`"true"`, `"300"`) o el nombre de una propiedad reactiva del componente
 * dueño (`binding.instance`), en cuyo caso se resuelve `instance[attrVal]`
 * en cada lectura (no solo al montar), dando pseudo-reactividad sin watchers.
 */
const readAttr = (
  el: HTMLElement,
  instance: Record<string, unknown> | null,
  name: keyof ScrollOptions,
  defaultValue: number | boolean,
  kind: 'number' | 'boolean',
): number | boolean => {
  const attrVal = el.getAttribute(`infinite-scroll-${name}`);
  const raw: unknown =
    (attrVal !== null ? instance?.[attrVal] : undefined) ??
    attrVal ??
    defaultValue;
  const normalized = raw === 'false' ? false : raw;
  const coerced: number | boolean =
    kind === 'number' ? Number(normalized) : Boolean(normalized);

  return typeof coerced === 'number' && Number.isNaN(coerced)
    ? defaultValue
    : coerced;
};

const getScrollOptions = (
  el: HTMLElement,
  instance: Record<string, unknown> | null,
): ScrollOptions => ({
  delay: readAttr(el, instance, 'delay', DEFAULT_DELAY, 'number') as number,
  distance: readAttr(
    el,
    instance,
    'distance',
    DEFAULT_DISTANCE,
    'number',
  ) as number,
  disabled: readAttr(el, instance, 'disabled', false, 'boolean') as boolean,
  immediate: readAttr(el, instance, 'immediate', true, 'boolean') as boolean,
});

const destroyObserver = (el: InfiniteScrollElement): void => {
  const state = el[SCOPE];
  if (state?.observer) {
    state.observer.disconnect();
    delete state.observer;
  }
};

const handleScroll = (
  el: InfiniteScrollElement,
  cb: InfiniteScrollCallback,
): void => {
  const state = el[SCOPE];
  if (!state) return;

  const { container, containerEl, instance, observer, lastScrollTop } = state;
  const { disabled, distance } = getScrollOptions(el, instance);
  const { clientHeight, scrollHeight, scrollTop } = containerEl;
  const delta = scrollTop - lastScrollTop;
  state.lastScrollTop = scrollTop;

  if (observer || disabled || delta < 0) return;

  let shouldTrigger = false;
  if (container === el) {
    shouldTrigger = scrollHeight - (clientHeight + scrollTop) <= distance;
  } else {
    const { clientTop, scrollHeight: height } = el;
    const offsetTop = getOffsetTopDistance(el, containerEl);
    shouldTrigger =
      scrollTop + clientHeight >= offsetTop + clientTop + height - distance;
  }

  if (shouldTrigger) {
    cb.call(instance);
  }
};

function checkFull(
  el: InfiniteScrollElement,
  cb: InfiniteScrollCallback,
): void {
  const state = el[SCOPE];
  if (!state) return;

  const { containerEl, instance } = state;
  const { disabled } = getScrollOptions(el, instance);
  if (disabled || containerEl.clientHeight === 0) return;

  if (containerEl.scrollHeight <= containerEl.clientHeight) {
    cb.call(instance);
  } else {
    destroyObserver(el);
  }
}

export const GInfiniteScroll: ObjectDirective<
  InfiniteScrollElement,
  InfiniteScrollCallback
> = {
  async mounted(el, binding) {
    const instance = (binding.instance ?? null) as unknown as Record<
      string,
      unknown
    > | null;
    const cb = binding.value;

    if (!isFunction(cb)) {
      throwError(SCOPE, "'v-infinite-scroll' binding value must be a function");
    }

    await nextTick();

    const { delay, immediate } = getScrollOptions(el, instance);
    const container = getScrollContainer(el, true);
    if (!container) return;

    const containerEl = (
      container === window ? document.documentElement : container
    ) as HTMLElement;

    const onScroll = throttle(() => handleScroll(el, cb), delay);

    el[SCOPE] = {
      instance,
      container,
      containerEl,
      cb,
      onScroll,
      lastScrollTop: containerEl.scrollTop,
    };

    if (immediate) {
      const observer = new MutationObserver(
        throttle(() => checkFull(el, cb), CHECK_INTERVAL),
      );
      el[SCOPE].observer = observer;
      observer.observe(el, { childList: true, subtree: true });
      checkFull(el, cb);
    }

    container.addEventListener('scroll', onScroll);
  },
  unmounted(el) {
    const state = el[SCOPE];
    if (!state) return;

    state.container.removeEventListener('scroll', state.onScroll);
    destroyObserver(el);
    delete el[SCOPE];
  },
  async updated(el) {
    const state = el[SCOPE];
    if (!state) {
      await nextTick();
      return;
    }

    const { containerEl, cb, observer } = state;
    if (containerEl.clientHeight && observer) {
      checkFull(el, cb);
    }
  },
};

export default GInfiniteScroll;
