import { describe, it, expect } from 'vitest';
import { isArray, ensureArray } from '../../src/utils/array.util';

describe('isArray', () => {
  it('returns true for arrays', () => {
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray([])).toBe(true);
  });

  it('returns false for non-arrays', () => {
    expect(isArray('a')).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(undefined)).toBe(false);
  });
});

describe('ensureArray', () => {
  it('wraps a scalar value in a single-element array', () => {
    expect(ensureArray(1)).toEqual([1]);
    expect(ensureArray('a')).toEqual(['a']);
  });

  it('returns array input unchanged', () => {
    const input = [1, 2, 3];
    expect(ensureArray(input)).toBe(input);
  });

  it('returns an empty array for undefined', () => {
    expect(ensureArray(undefined)).toEqual([]);
  });

  it('returns an empty array for null', () => {
    expect(ensureArray(null)).toEqual([]);
  });
});
