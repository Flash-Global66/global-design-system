import { describe, it, expect, vi, afterEach } from 'vitest';
import { nextTick } from 'vue';
import { GInfiniteScroll } from '../src/infinite-scroll.directive';

import type { DirectiveBinding } from 'vue';

/**
 * Regression suite for WU4 (ep-extraction-v6): infinite-scroll previously
 * re-exported `ElInfiniteScroll` verbatim from `element-plus` with zero DS
 * logic. This suite proves the ported native directive preserves EP's exact
 * attribute contract (`infinite-scroll-delay/-distance/-disabled/-immediate`)
 * and scroll-trigger algorithm (`es/components/infinite-scroll/src/index.mjs`,
 * element-plus 2.9.7), without importing element-plus at all.
 */

type Layout = { clientHeight: number; scrollHeight: number; scrollTop: number };

const mockLayout = (el: HTMLElement, layout: Layout) => {
  Object.defineProperty(el, 'clientHeight', {
    configurable: true,
    value: layout.clientHeight,
  });
  Object.defineProperty(el, 'scrollHeight', {
    configurable: true,
    value: layout.scrollHeight,
  });
  let scrollTop = layout.scrollTop;
  Object.defineProperty(el, 'scrollTop', {
    configurable: true,
    get: () => scrollTop,
    set: (value: number) => {
      scrollTop = value;
    },
  });
};

/** El propio `el` es el contenedor con scroll (overflow-y: auto detectado por `getScrollContainer`). */
const makeScrollableEl = (layout: Layout): HTMLElement => {
  const el = document.createElement('div');
  el.style.overflowY = 'auto';
  document.body.appendChild(el);
  mockLayout(el, layout);
  return el;
};

const scrollTo = (el: HTMLElement, to: number) => {
  el.scrollTop = to;
  el.dispatchEvent(new Event('scroll'));
};

/**
 * Setup para el path `container !== el`: la directiva se aplica sobre un
 * elemento hijo, mientras el ancestro (no el propio host) es el contenedor
 * con scroll (overflow-y: auto). Ejercita `getOffsetTopDistance` en
 * `handleScroll`, que jsdom no calcula por layout real, por lo que se mockea
 * `offsetTop`/`offsetParent`/`clientTop`/`scrollHeight` explícitamente.
 */
const makeScrollableAncestorWithChild = (
  containerLayout: Layout,
  childOffsetTop: number,
  childScrollHeight: number,
): { container: HTMLElement; el: HTMLElement } => {
  const container = document.createElement('div');
  container.style.overflowY = 'auto';
  mockLayout(container, containerLayout);
  Object.defineProperty(container, 'offsetTop', {
    configurable: true,
    value: 0,
  });
  Object.defineProperty(container, 'offsetParent', {
    configurable: true,
    value: null,
  });

  const el = document.createElement('div');
  Object.defineProperty(el, 'offsetTop', {
    configurable: true,
    value: childOffsetTop,
  });
  Object.defineProperty(el, 'offsetParent', {
    configurable: true,
    value: container,
  });
  Object.defineProperty(el, 'clientTop', { configurable: true, value: 0 });
  Object.defineProperty(el, 'scrollHeight', {
    configurable: true,
    value: childScrollHeight,
  });

  container.appendChild(el);
  document.body.appendChild(container);

  return { container, el };
};

const bind = (
  value: unknown,
  instance: Record<string, unknown> | null = null,
) => ({ value, instance }) as unknown as DirectiveBinding;

describe('GInfiniteScroll directive', () => {
  afterEach(() => {
    document.body.innerHTML = '';
    vi.useRealTimers();
  });

  it('invokes the callback when scrolled near the bottom threshold', async () => {
    const el = makeScrollableEl({
      clientHeight: 100,
      scrollHeight: 500,
      scrollTop: 0,
    });
    const cb = vi.fn();

    await GInfiniteScroll.mounted!(el, bind(cb), null as never, null as never);
    await nextTick();

    scrollTo(el, 401); // 500 - (100 + 401) = -1 <= distance(0)
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('does NOT invoke the callback while far from the bottom', async () => {
    const el = makeScrollableEl({
      clientHeight: 100,
      scrollHeight: 500,
      scrollTop: 0,
    });
    const cb = vi.fn();

    await GInfiniteScroll.mounted!(el, bind(cb), null as never, null as never);
    await nextTick();

    scrollTo(el, 50);
    expect(cb).not.toHaveBeenCalled();
  });

  it('respects `infinite-scroll-disabled` and never triggers', async () => {
    const el = makeScrollableEl({
      clientHeight: 100,
      scrollHeight: 500,
      scrollTop: 0,
    });
    el.setAttribute('infinite-scroll-disabled', 'true');
    el.setAttribute('infinite-scroll-immediate', 'false');
    const cb = vi.fn();

    await GInfiniteScroll.mounted!(el, bind(cb), null as never, null as never);
    await nextTick();

    scrollTo(el, 450);
    expect(cb).not.toHaveBeenCalled();
  });

  it('resolves `infinite-scroll-disabled` against a reactive instance property (EP attribute-as-key contract)', async () => {
    const el = makeScrollableEl({
      clientHeight: 100,
      scrollHeight: 500,
      scrollTop: 0,
    });
    el.setAttribute('infinite-scroll-disabled', 'noMore');
    el.setAttribute('infinite-scroll-immediate', 'false');
    const cb = vi.fn();
    const instance = { noMore: true };

    await GInfiniteScroll.mounted!(
      el,
      bind(cb, instance),
      null as never,
      null as never,
    );
    await nextTick();

    scrollTo(el, 450);
    expect(cb).not.toHaveBeenCalled();
  });

  it('throttles rapid scroll events according to `infinite-scroll-delay`', async () => {
    vi.useFakeTimers();
    const el = makeScrollableEl({
      clientHeight: 100,
      scrollHeight: 1000,
      scrollTop: 0,
    });
    el.setAttribute('infinite-scroll-delay', '200');
    const cb = vi.fn();

    await GInfiniteScroll.mounted!(el, bind(cb), null as never, null as never);
    await nextTick();

    scrollTo(el, 901); // triggers immediately (leading edge)
    scrollTo(el, 905); // within throttle window: coalesced into a trailing call
    expect(cb).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(200);
    expect(cb).toHaveBeenCalledTimes(2);
  });

  it('fires once on mount via `infinite-scroll-immediate` when content does not fill the container', async () => {
    const el = makeScrollableEl({
      clientHeight: 100,
      scrollHeight: 50,
      scrollTop: 0,
    });
    const cb = vi.fn();

    await GInfiniteScroll.mounted!(el, bind(cb), null as never, null as never);
    await nextTick();

    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('does NOT fire on mount when `infinite-scroll-immediate="false"`', async () => {
    const el = makeScrollableEl({
      clientHeight: 100,
      scrollHeight: 50,
      scrollTop: 0,
    });
    el.setAttribute('infinite-scroll-immediate', 'false');
    const cb = vi.fn();

    await GInfiniteScroll.mounted!(el, bind(cb), null as never, null as never);
    await nextTick();

    expect(cb).not.toHaveBeenCalled();
  });

  it('cleans up its scroll listener on unmount', async () => {
    const el = makeScrollableEl({
      clientHeight: 100,
      scrollHeight: 500,
      scrollTop: 0,
    });
    const cb = vi.fn();

    await GInfiniteScroll.mounted!(el, bind(cb), null as never, null as never);
    await nextTick();

    GInfiniteScroll.unmounted!(el, bind(cb), null as never, null as never);

    scrollTo(el, 450);
    expect(cb).not.toHaveBeenCalled();
  });

  it('throws a scoped error when the bound value is not a function', async () => {
    const el = makeScrollableEl({
      clientHeight: 100,
      scrollHeight: 500,
      scrollTop: 0,
    });

    await expect(
      GInfiniteScroll.mounted!(
        el,
        bind('not-a-function'),
        null as never,
        null as never,
      ),
    ).rejects.toThrow('[GInfiniteScroll]');
  });

  it('drives the offset-based path via `getOffsetTopDistance` when the scroll container is an ancestor, not the host element itself', async () => {
    // offsetTopDistance(el, container) = |500 - 0| = 500; clientTop = 0; el.scrollHeight = 50.
    // trigger when: containerScrollTop + containerClientHeight >= 500 + 0 + 50 - distance(0) = 550.
    vi.useFakeTimers();
    const { container, el } = makeScrollableAncestorWithChild(
      { clientHeight: 100, scrollHeight: 999, scrollTop: 0 },
      500,
      50,
    );
    el.setAttribute('infinite-scroll-immediate', 'false');
    const cb = vi.fn();

    await GInfiniteScroll.mounted!(el, bind(cb), null as never, null as never);
    await nextTick();

    scrollTo(container, 100); // 100 + 100 = 200 < 550
    expect(cb).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200); // clear the throttle window opened by the first scroll
    scrollTo(container, 460); // 460 + 100 = 560 >= 550
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('respects a custom `infinite-scroll-distance` threshold', async () => {
    // scrollHeight - (clientHeight + scrollTop) <= distance(50) triggers when scrollTop >= 350.
    vi.useFakeTimers();
    const el = makeScrollableEl({
      clientHeight: 100,
      scrollHeight: 500,
      scrollTop: 0,
    });
    el.setAttribute('infinite-scroll-distance', '50');
    const cb = vi.fn();

    await GInfiniteScroll.mounted!(el, bind(cb), null as never, null as never);
    await nextTick();

    scrollTo(el, 300); // 500 - (100 + 300) = 100 > 50
    expect(cb).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200); // clear the throttle window opened by the first scroll
    scrollTo(el, 360); // 500 - (100 + 360) = 40 <= 50
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('disconnects the MutationObserver on unmount', async () => {
    const el = makeScrollableEl({
      clientHeight: 100,
      scrollHeight: 50,
      scrollTop: 0,
    });
    const cb = vi.fn();
    const disconnectSpy = vi.spyOn(MutationObserver.prototype, 'disconnect');

    await GInfiniteScroll.mounted!(el, bind(cb), null as never, null as never);
    await nextTick();

    expect(disconnectSpy).not.toHaveBeenCalled();

    GInfiniteScroll.unmounted!(el, bind(cb), null as never, null as never);

    expect(disconnectSpy).toHaveBeenCalledTimes(1);
    disconnectSpy.mockRestore();
  });

  it('re-reads attribute values on `updated`, re-enabling the scroll trigger after `infinite-scroll-disabled` flips to false without remounting', async () => {
    vi.useFakeTimers();
    const el = makeScrollableEl({
      clientHeight: 100,
      scrollHeight: 500,
      scrollTop: 0,
    });
    el.setAttribute('infinite-scroll-disabled', 'noMore');
    el.setAttribute('infinite-scroll-immediate', 'false');
    const cb = vi.fn();
    const instance = { noMore: true };

    await GInfiniteScroll.mounted!(
      el,
      bind(cb, instance),
      null as never,
      null as never,
    );
    await nextTick();

    scrollTo(el, 450); // would trigger, but disabled is still true
    expect(cb).not.toHaveBeenCalled();

    instance.noMore = false;
    await GInfiniteScroll.updated!(
      el,
      bind(cb, instance),
      null as never,
      null as never,
    );

    vi.advanceTimersByTime(200); // clear the throttle window opened by the first scroll
    scrollTo(el, 460); // 500 - (100 + 460) = -60 <= 0, and now disabled reads false
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
