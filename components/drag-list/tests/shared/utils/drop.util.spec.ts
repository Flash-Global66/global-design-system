import { describe, expect, it } from 'vitest';
import { calculateDropIndex } from '../../../src/shared/utils/drop.util';

function vRect(top: number) {
  return { top, left: 0, width: 100, height: 40 };
}

function hRect(left: number) {
  return { top: 0, left, width: 40, height: 100 };
}

describe('calculateDropIndex', () => {
  it('vertical: entre A y C da 1', () => {
    const rects = [vRect(0), vRect(50)];
    expect(
      calculateDropIndex({
        point: { x: 10, y: 45 },
        rects,
        axis: 'y',
        draggedIndex: null,
      }),
    ).toBe(1);
  });

  it('horizontal: entre los medios de A y B da 1', () => {
    const rects = [hRect(0), hRect(50)];
    expect(
      calculateDropIndex({
        point: { x: 45, y: 10 },
        rects,
        axis: 'x',
        draggedIndex: null,
      }),
    ).toBe(1);
  });

  it('soltar en el mismo lugar da draggedIndex', () => {
    const rects = [vRect(0), vRect(50), vRect(100)];
    expect(
      calculateDropIndex({
        point: { x: 10, y: 70 },
        rects,
        axis: 'y',
        draggedIndex: 1,
      }),
    ).toBe(1);
  });

  it('debajo de todo da n', () => {
    const rects = [vRect(0), vRect(50), vRect(100)];
    expect(
      calculateDropIndex({
        point: { x: 10, y: 900 },
        rects,
        axis: 'y',
        draggedIndex: null,
      }),
    ).toBe(3);
  });

  it('debajo de todo con arrastrado da n - 1', () => {
    const rects = [vRect(0), vRect(50), vRect(100)];
    expect(
      calculateDropIndex({
        point: { x: 10, y: 900 },
        rects,
        axis: 'y',
        draggedIndex: 0,
      }),
    ).toBe(2);
  });

  it('encima de todo da 0 y sin rects da 0', () => {
    expect(
      calculateDropIndex({
        point: { x: 0, y: -50 },
        rects: [vRect(0)],
        axis: 'y',
        draggedIndex: null,
      }),
    ).toBe(0);
    expect(
      calculateDropIndex({
        point: { x: 0, y: 5 },
        rects: [],
        axis: 'y',
        draggedIndex: null,
      }),
    ).toBe(0);
  });
});
