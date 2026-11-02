import { describe, expect, it } from 'vitest';
import {
  calculateAutoScrollDelta,
  pickScrollContainer,
} from '../../../src/shared/utils/scroll.util';

const rect = { top: 100, bottom: 500, left: 100, right: 500 };
const base = { rect, edge: 48, maxSpeed: 16 };

describe('calculateAutoScrollDelta', () => {
  it('da 0 fuera del borde', () => {
    expect(
      calculateAutoScrollDelta({
        ...base,
        pointer: { x: 300, y: 300 },
        axis: 'vertical',
      }),
    ).toBe(0);
    expect(
      calculateAutoScrollDelta({
        ...base,
        pointer: { x: 300, y: 300 },
        axis: 'horizontal',
      }),
    ).toBe(0);
  });

  it('es negativo hacia el inicio y positivo hacia el final', () => {
    expect(
      calculateAutoScrollDelta({
        ...base,
        pointer: { x: 300, y: 110 },
        axis: 'vertical',
      }),
    ).toBeLessThan(0);
    expect(
      calculateAutoScrollDelta({
        ...base,
        pointer: { x: 300, y: 490 },
        axis: 'vertical',
      }),
    ).toBeGreaterThan(0);
    expect(
      calculateAutoScrollDelta({
        ...base,
        pointer: { x: 110, y: 300 },
        axis: 'horizontal',
      }),
    ).toBeLessThan(0);
    expect(
      calculateAutoScrollDelta({
        ...base,
        pointer: { x: 490, y: 300 },
        axis: 'horizontal',
      }),
    ).toBeGreaterThan(0);
  });

  it('crece hacia el borde', () => {
    const far = calculateAutoScrollDelta({
      ...base,
      pointer: { x: 0, y: 470 },
      axis: 'vertical',
    });
    const near = calculateAutoScrollDelta({
      ...base,
      pointer: { x: 0, y: 495 },
      axis: 'vertical',
    });
    expect(near).toBeGreaterThan(far);
  });

  it('tiene tope en maxSpeed', () => {
    expect(
      calculateAutoScrollDelta({
        ...base,
        pointer: { x: 0, y: 500 },
        axis: 'vertical',
      }),
    ).toBe(16);
    expect(
      calculateAutoScrollDelta({
        ...base,
        pointer: { x: 0, y: 900 },
        axis: 'vertical',
      }),
    ).toBe(16);
    expect(
      calculateAutoScrollDelta({
        ...base,
        pointer: { x: 0, y: 0 },
        axis: 'vertical',
      }),
    ).toBe(-16);
  });
});

function box(
  size: {
    scrollWidth: number;
    clientWidth: number;
    scrollHeight?: number;
    clientHeight?: number;
  },
  r = { top: 0, bottom: 400, left: 0, right: 300 },
  overflow = 'auto',
): HTMLElement {
  const el = document.createElement('div');
  el.style.overflowX = overflow;
  el.style.overflowY = overflow;
  for (const [key, value] of Object.entries(size)) {
    Object.defineProperty(el, key, { configurable: true, value });
  }
  el.getBoundingClientRect = (): DOMRect => r as DOMRect;
  return el;
}

describe('pickScrollContainer', () => {
  const inside = { x: 150, y: 200 };
  const flat = { scrollWidth: 300, clientWidth: 300 };
  const wide = { scrollWidth: 900, clientWidth: 300 };

  it('elige el más interno que puede desplazarse en x', () => {
    const wrapper = box(wide);
    const list = box(wide);
    wrapper.appendChild(list);
    expect(
      pickScrollContainer({
        containers: [wrapper, list],
        pointer: inside,
        axis: 'horizontal',
      }),
    ).toBe(list);
  });

  it('ignora el que no desborda aunque sea más interno', () => {
    const wrapper = box(wide);
    const list = box(flat);
    wrapper.appendChild(list);
    expect(
      pickScrollContainer({
        containers: [wrapper, list],
        pointer: inside,
        axis: 'horizontal',
      }),
    ).toBe(wrapper);
  });

  it('usa scrollHeight/clientHeight en vertical', () => {
    const el = box({ ...flat, scrollHeight: 800, clientHeight: 400 });
    expect(
      pickScrollContainer({
        containers: [el],
        pointer: inside,
        axis: 'vertical',
      }),
    ).toBe(el);
    expect(
      pickScrollContainer({
        containers: [el],
        pointer: inside,
        axis: 'horizontal',
      }),
    ).toBeNull();
  });

  it('descarta los que no contienen al puntero y los nulos', () => {
    const el = box(wide);
    expect(
      pickScrollContainer({
        containers: [null, undefined, el],
        pointer: { x: 900, y: 200 },
        axis: 'horizontal',
      }),
    ).toBeNull();
  });

  it('devuelve null si ninguno puede desplazarse', () => {
    expect(
      pickScrollContainer({
        containers: [box(flat)],
        pointer: inside,
        axis: 'horizontal',
      }),
    ).toBeNull();
  });
  it('ignora el eje con overflow hidden aunque el contenido desborde', () => {
    const el = box({ ...wide, scrollHeight: 800, clientHeight: 400 });
    el.style.overflowX = 'hidden';
    expect(
      pickScrollContainer({
        containers: [el],
        pointer: inside,
        axis: 'horizontal',
      }),
    ).toBeNull();
    expect(
      pickScrollContainer({
        containers: [el],
        pointer: inside,
        axis: 'vertical',
      }),
    ).toBe(el);
  });

  it('ignora un contenedor con overflow visible', () => {
    expect(
      pickScrollContainer({
        containers: [box(wide, undefined, 'visible')],
        pointer: inside,
        axis: 'horizontal',
      }),
    ).toBeNull();
  });
});
