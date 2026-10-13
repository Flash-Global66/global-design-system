import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { nextTick, ref } from 'vue';
import { withSetup } from '../../../../../tests/utils/withSetup';
import { useAutoScroll } from '../../../src/shared/composables/useAutoScroll';
import type { DragPoint } from '../../../src/shared/types/drag-list.type';

function createContainer(): HTMLElement {
  const el = document.createElement('div');
  el.scrollTop = 100;
  el.scrollLeft = 100;
  for (const [key, value] of Object.entries({
    scrollWidth: 900,
    clientWidth: 300,
    scrollHeight: 800,
    clientHeight: 400,
  })) {
    Object.defineProperty(el, key, { configurable: true, value });
  }
  el.getBoundingClientRect = (): DOMRect =>
    ({
      top: 0,
      bottom: 400,
      left: 0,
      right: 300,
      width: 300,
      height: 400,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    }) as DOMRect;
  return el;
}

function mockOverflow(
  el: HTMLElement,
  { scrollWidth, clientWidth }: { scrollWidth: number; clientWidth: number },
): void {
  Object.defineProperty(el, 'scrollWidth', {
    configurable: true,
    value: scrollWidth,
  });
  Object.defineProperty(el, 'clientWidth', {
    configurable: true,
    value: clientWidth,
  });
}

describe('useAutoScroll', () => {
  beforeEach(() => {
    vi.useFakeTimers({
      toFake: ['requestAnimationFrame', 'cancelAnimationFrame', 'performance'],
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('sube scrollTop cuando el puntero está cerca del borde superior', async () => {
    const el = createContainer();
    const pointer = ref<DragPoint | null>({ x: 150, y: 4 });
    const isActive = ref(true);
    withSetup(() =>
      useAutoScroll({ containers: [el], pointer, axis: 'y', isActive }),
    );

    await vi.advanceTimersByTimeAsync(50);

    expect(el.scrollTop).toBeLessThan(100);
  });

  it('baja scrollTop hacia el final cerca del borde inferior', async () => {
    const el = createContainer();
    const pointer = ref<DragPoint | null>({ x: 150, y: 396 });
    const isActive = ref(true);
    withSetup(() =>
      useAutoScroll({ containers: [el], pointer, axis: 'y', isActive }),
    );

    await vi.advanceTimersByTimeAsync(50);

    expect(el.scrollTop).toBeGreaterThan(100);
  });

  it('usa scrollLeft en el eje x', async () => {
    const el = createContainer();
    const pointer = ref<DragPoint | null>({ x: 296, y: 200 });
    const isActive = ref(true);
    withSetup(() =>
      useAutoScroll({ containers: [el], pointer, axis: 'x', isActive }),
    );

    await vi.advanceTimersByTimeAsync(50);

    expect(el.scrollLeft).toBeGreaterThan(100);
    expect(el.scrollTop).toBe(100);
  });

  it('no hace scroll si el puntero está lejos del borde', async () => {
    const el = createContainer();
    const pointer = ref<DragPoint | null>({ x: 150, y: 200 });
    const isActive = ref(true);
    withSetup(() =>
      useAutoScroll({ containers: [el], pointer, axis: 'y', isActive }),
    );

    await vi.advanceTimersByTimeAsync(50);

    expect(el.scrollTop).toBe(100);
  });

  it('no hace scroll si el puntero está fuera del contenedor o es null', async () => {
    const el = createContainer();
    const pointer = ref<DragPoint | null>({ x: 900, y: 4 });
    const isActive = ref(true);
    withSetup(() =>
      useAutoScroll({ containers: [el, null], pointer, axis: 'y', isActive }),
    );

    await vi.advanceTimersByTimeAsync(50);
    pointer.value = null;
    await vi.advanceTimersByTimeAsync(50);

    expect(el.scrollTop).toBe(100);
  });

  it('se detiene cuando isActive pasa a false', async () => {
    const el = createContainer();
    const pointer = ref<DragPoint | null>({ x: 150, y: 4 });
    const isActive = ref(true);
    withSetup(() =>
      useAutoScroll({ containers: [el], pointer, axis: 'y', isActive }),
    );

    await vi.advanceTimersByTimeAsync(50);
    isActive.value = false;
    await nextTick();
    const stopped = el.scrollTop;
    await vi.advanceTimersByTimeAsync(100);

    expect(el.scrollTop).toBe(stopped);
  });

  it('no arranca si isActive es false y reanuda al activarse', async () => {
    const el = createContainer();
    const pointer = ref<DragPoint | null>({ x: 150, y: 4 });
    const isActive = ref(false);
    withSetup(() =>
      useAutoScroll({ containers: [el], pointer, axis: 'y', isActive }),
    );

    await vi.advanceTimersByTimeAsync(50);
    expect(el.scrollTop).toBe(100);

    isActive.value = true;
    await nextTick();
    await vi.advanceTimersByTimeAsync(50);

    expect(el.scrollTop).toBeLessThan(100);
  });

  it('con contenedores anidados desplaza la lista que desborda y no el wrapper', async () => {
    const wrapper = createContainer();
    const list = createContainer();
    wrapper.appendChild(list);
    document.body.appendChild(wrapper);
    mockOverflow(wrapper, { scrollWidth: 300, clientWidth: 300 });
    mockOverflow(list, { scrollWidth: 900, clientWidth: 300 });
    const pointer = ref<DragPoint | null>({ x: 296, y: 200 });
    const isActive = ref(true);
    withSetup(() =>
      useAutoScroll({
        containers: [wrapper, list],
        pointer,
        axis: 'x',
        isActive,
      }),
    );

    await vi.advanceTimersByTimeAsync(50);

    expect(list.scrollLeft).toBeGreaterThan(100);
    expect(wrapper.scrollLeft).toBe(100);
    wrapper.remove();
  });
});
