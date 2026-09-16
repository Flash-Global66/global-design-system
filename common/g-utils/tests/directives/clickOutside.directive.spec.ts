import { describe, it, expect, vi } from 'vitest';
import ClickOutside from '../../src/directives/clickOutside.directive';

/**
 * El algoritmo real de element-plus escucha `mousedown`/`mouseup` a nivel de
 * `document` (no `click`/`pointerdown`, pese a lo que sugiere el nombre) y
 * solo invoca el handler si NINGUNA de las dos coordenadas cayó dentro del
 * elemento bindeado (ni de `binding.instance.popperRef`, si existe).
 */
const dispatchOutsidePair = (target: EventTarget) => {
  const mousedown = new MouseEvent('mousedown');
  Object.defineProperty(mousedown, 'target', { value: target });
  document.dispatchEvent(mousedown);

  const mouseup = new MouseEvent('mouseup');
  Object.defineProperty(mouseup, 'target', { value: target });
  document.dispatchEvent(mouseup);
};

describe('ClickOutside directive', () => {
  it('invoca el handler cuando el mousedown+mouseup ocurren fuera del elemento bindeado', () => {
    const handler = vi.fn();
    const el = document.createElement('div');
    const outside = document.createElement('span');
    document.body.appendChild(el);
    document.body.appendChild(outside);

    ClickOutside.beforeMount(el, { value: handler, instance: {} } as never);
    dispatchOutsidePair(outside);

    expect(handler).toHaveBeenCalledTimes(1);

    ClickOutside.unmounted(el);
    document.body.removeChild(el);
    document.body.removeChild(outside);
  });

  it('NO invoca el handler cuando el click ocurre dentro del elemento bindeado', () => {
    const handler = vi.fn();
    const el = document.createElement('div');
    const inner = document.createElement('span');
    el.appendChild(inner);
    document.body.appendChild(el);

    ClickOutside.beforeMount(el, { value: handler, instance: {} } as never);
    dispatchOutsidePair(inner);

    expect(handler).not.toHaveBeenCalled();

    ClickOutside.unmounted(el);
    document.body.removeChild(el);
  });

  it('desvincula limpiamente en unmounted (deja de invocar el handler)', () => {
    const handler = vi.fn();
    const el = document.createElement('div');
    const outside = document.createElement('span');
    document.body.appendChild(el);
    document.body.appendChild(outside);

    ClickOutside.beforeMount(el, { value: handler, instance: {} } as never);
    ClickOutside.unmounted(el);
    dispatchOutsidePair(outside);

    expect(handler).not.toHaveBeenCalled();

    document.body.removeChild(el);
    document.body.removeChild(outside);
  });
});
