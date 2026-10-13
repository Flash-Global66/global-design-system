import { describe, it, expect } from 'vitest';
import { findNextEnabledDate } from '../src/utils';

const enabled = (...dates: string[]) => new Set(dates);

describe('findNextEnabledDate', () => {
  it('avanza un día con ArrowRight', () => {
    expect(
      findNextEnabledDate({
        current: '2026-10-09',
        key: 'ArrowRight',
        enabledDates: enabled('2026-10-09', '2026-10-10'),
      }),
    ).toBe('2026-10-10');
  });

  it('retrocede un día con ArrowLeft', () => {
    expect(
      findNextEnabledDate({
        current: '2026-10-09',
        key: 'ArrowLeft',
        enabledDates: enabled('2026-10-08'),
      }),
    ).toBe('2026-10-08');
  });

  it('salta una semana con ArrowDown y ArrowUp', () => {
    const dates = enabled('2026-10-02', '2026-10-16');
    expect(
      findNextEnabledDate({
        current: '2026-10-09',
        key: 'ArrowDown',
        enabledDates: dates,
      }),
    ).toBe('2026-10-16');
    expect(
      findNextEnabledDate({
        current: '2026-10-09',
        key: 'ArrowUp',
        enabledDates: dates,
      }),
    ).toBe('2026-10-02');
  });

  it('cruza el cambio de mes cuando el destino está visible', () => {
    expect(
      findNextEnabledDate({
        current: '2026-10-31',
        key: 'ArrowRight',
        enabledDates: enabled('2026-11-01'),
      }),
    ).toBe('2026-11-01');
  });

  it('salta días deshabilitados en la misma dirección', () => {
    expect(
      findNextEnabledDate({
        current: '2026-10-09',
        key: 'ArrowRight',
        enabledDates: enabled('2026-10-12'),
      }),
    ).toBe('2026-10-12');
  });

  it('ignora un día habilitado más cercano en la dirección contraria', () => {
    expect(
      findNextEnabledDate({
        current: '2026-10-09',
        key: 'ArrowRight',
        enabledDates: enabled('2026-10-08', '2026-10-12'),
      }),
    ).toBe('2026-10-12');
  });

  it('devuelve null si no hay un día habilitado en esa dirección', () => {
    expect(
      findNextEnabledDate({
        current: '2026-10-09',
        key: 'ArrowRight',
        enabledDates: enabled('2026-10-01'),
      }),
    ).toBeNull();
  });

  it('devuelve null con una tecla que no navega', () => {
    expect(
      findNextEnabledDate({
        current: '2026-10-09',
        key: 'a',
        enabledDates: enabled('2026-10-10'),
      }),
    ).toBeNull();
  });
});
