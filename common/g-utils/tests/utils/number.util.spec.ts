import { describe, it, expect } from 'vitest';
import { isNumber, addUnit } from '../../src/utils/number.util';

describe('isNumber', () => {
  it('returns true for numbers', () => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber(0)).toBe(true);
  });

  it('returns false for non-numbers', () => {
    expect(isNumber('42')).toBe(false);
    expect(isNumber(undefined)).toBe(false);
  });
});

describe('addUnit', () => {
  it('appends the default unit (px) to a number', () => {
    expect(addUnit(10)).toBe('10px');
  });

  it('appends a custom unit to a number', () => {
    expect(addUnit(10, 'rem')).toBe('10rem');
  });

  it('appends the default unit to a numeric string', () => {
    expect(addUnit('10')).toBe('10px');
  });

  it('passes through a string that already has a unit', () => {
    expect(addUnit('10rem')).toBe('10rem');
  });

  it('returns an empty string for falsy values', () => {
    expect(addUnit('')).toBe('');
    expect(addUnit(undefined)).toBe('');
    expect(addUnit(0)).toBe('');
  });
});
