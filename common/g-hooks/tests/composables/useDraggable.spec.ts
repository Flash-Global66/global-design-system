import { describe, it, expect, vi, afterEach } from 'vitest';
import { computed, createApp, defineComponent, nextTick, ref } from 'vue';
import { useDraggable } from '../../src/composables/useDraggable';

const flushMouseEvent = (
  type: 'mousedown' | 'mousemove' | 'mouseup',
  target: EventTarget,
  clientX = 0,
  clientY = 0,
) => {
  const event = new MouseEvent(type, { clientX, clientY, bubbles: true });
  target.dispatchEvent(event);
};

const mockRect = (rect: Partial<DOMRect>) =>
  ({
    left: 0,
    top: 0,
    width: 10,
    height: 10,
    right: 10,
    bottom: 10,
    x: 0,
    y: 0,
    toJSON: () => ({}),
    ...rect,
  }) as DOMRect;

/** Monta useDraggable dentro de un componente real para que sus hooks de ciclo de vida corran. */
const mountDraggable = (
  target: HTMLElement,
  handle: HTMLElement,
  draggable: ReturnType<typeof computed<boolean>>,
  overflow?: ReturnType<typeof computed<boolean>>,
) => {
  let exposed: ReturnType<typeof useDraggable> | undefined;
  const targetRef = ref(target);
  const dragRef = ref(handle);

  const Component = defineComponent({
    setup() {
      exposed = useDraggable(targetRef, dragRef, draggable, overflow);
      return () => null;
    },
  });

  createApp(Component).mount(document.createElement('div'));
  return exposed!;
};

describe('useDraggable', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('arrastra el elemento objetivo aplicando un transform al mover el mouse tras un mousedown en el handle', async () => {
    const target = document.createElement('div');
    const handle = document.createElement('div');
    document.body.appendChild(target);
    document.body.appendChild(handle);

    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue(
      mockRect({ left: 100, top: 100, width: 50, height: 50 }),
    );

    mountDraggable(
      target,
      handle,
      computed(() => true),
      computed(() => true),
    );
    await nextTick();

    flushMouseEvent('mousedown', handle, 10, 10);
    flushMouseEvent('mousemove', document, 30, 40);

    expect(target.style.transform).toBe('translate(20px, 30px)');
  });

  it('deja de escuchar mousemove tras un mouseup', async () => {
    const target = document.createElement('div');
    const handle = document.createElement('div');
    document.body.appendChild(target);
    document.body.appendChild(handle);
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue(mockRect({}));

    mountDraggable(
      target,
      handle,
      computed(() => true),
      computed(() => true),
    );
    await nextTick();

    flushMouseEvent('mousedown', handle, 0, 0);
    flushMouseEvent('mouseup', document, 0, 0);
    flushMouseEvent('mousemove', document, 100, 100);

    // Sin listener activo, el transform no cambia tras el mouseup.
    expect(target.style.transform).toBe('');
  });

  it('no adjunta listeners de drag cuando draggable es false', async () => {
    const target = document.createElement('div');
    const handle = document.createElement('div');
    document.body.appendChild(target);
    document.body.appendChild(handle);

    mountDraggable(
      target,
      handle,
      computed(() => false),
    );
    await nextTick();

    flushMouseEvent('mousedown', handle, 0, 0);
    flushMouseEvent('mousemove', document, 50, 50);

    expect(target.style.transform).toBe('');
  });

  it('resetPosition limpia el offset acumulado y remueve el transform', async () => {
    const target = document.createElement('div');
    const handle = document.createElement('div');
    document.body.appendChild(target);
    document.body.appendChild(handle);
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue(mockRect({}));

    const { resetPosition } = mountDraggable(
      target,
      handle,
      computed(() => true),
      computed(() => true),
    );
    await nextTick();

    flushMouseEvent('mousedown', handle, 0, 0);
    flushMouseEvent('mousemove', document, 30, 30);
    expect(target.style.transform).toContain('translate');

    resetPosition();
    expect(target.style.transform).toBe('none');
  });
});
