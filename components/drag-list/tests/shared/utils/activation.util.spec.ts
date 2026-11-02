import { describe, expect, it } from 'vitest';
import {
  hasExceededDistance,
  isNonDraggableTarget,
  isTouchMoveWithinTolerance,
} from '../../../src/shared/utils/activation.util';

describe('hasExceededDistance', () => {
  const start = { x: 0, y: 0 };

  it('da false con 3 px y umbral 4', () => {
    expect(hasExceededDistance(start, { x: 3, y: 0 }, 4)).toBe(false);
  });

  it('da true con 5 px y umbral 4', () => {
    expect(hasExceededDistance(start, { x: 0, y: 5 }, 4)).toBe(true);
  });

  it('usa la distancia euclidiana', () => {
    expect(hasExceededDistance(start, { x: 3, y: 4 }, 4)).toBe(true);
  });
});

describe('isTouchMoveWithinTolerance', () => {
  const start = { x: 10, y: 10 };

  it('da true con un movimiento menor a la tolerancia', () => {
    expect(isTouchMoveWithinTolerance(start, { x: 14, y: 10 }, 8)).toBe(true);
  });

  it('da false con un movimiento mayor a la tolerancia', () => {
    expect(isTouchMoveWithinTolerance(start, { x: 10, y: 30 }, 8)).toBe(false);
  });
});

describe('isNonDraggableTarget', () => {
  const root = document.createElement('div');
  root.innerHTML = `
    <div class="card">
      <span class="plain">texto</span>
      <button class="btn"><i class="icon"></i></button>
      <a class="link" href="#">link</a>
      <input class="input" />
      <select class="select"></select>
      <textarea class="area"></textarea>
      <div data-no-drag><b class="nested">x</b></div>
    </div>`;

  it.each([
    '.btn',
    '.icon',
    '.link',
    '.input',
    '.select',
    '.area',
    '[data-no-drag]',
    '.nested',
  ])('da true para %s', selector => {
    expect(isNonDraggableTarget(root.querySelector(selector), root)).toBe(true);
  });

  it('da false para un elemento común', () => {
    expect(isNonDraggableTarget(root.querySelector('.plain'), root)).toBe(
      false,
    );
  });

  it('da false si el match está fuera de root', () => {
    const outer = document.createElement('button');
    const inner = document.createElement('div');
    const child = document.createElement('span');
    outer.append(inner);
    inner.append(child);
    expect(isNonDraggableTarget(child, inner)).toBe(false);
  });

  it('da false con target nulo o que no es Element', () => {
    expect(isNonDraggableTarget(null, root)).toBe(false);
  });
});
