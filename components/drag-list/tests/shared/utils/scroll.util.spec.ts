import { describe, expect, it } from 'vitest';
import { calculateAutoScrollDelta } from '../../../src/shared/utils/scroll.util';

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
