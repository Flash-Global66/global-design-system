import { describe, it, expect } from 'vitest';
import {
  isUndefined,
  isPropAbsent,
  hasOwn,
  getProp,
} from '../../src/utils/object.util';

describe('isUndefined', () => {
  it('returns true only for undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(0)).toBe(false);
  });
});

describe('isPropAbsent', () => {
  it('returns true for null or undefined', () => {
    expect(isPropAbsent(null)).toBe(true);
    expect(isPropAbsent(undefined)).toBe(true);
  });

  it('returns false for present values, including falsy ones', () => {
    expect(isPropAbsent(0)).toBe(false);
    expect(isPropAbsent('')).toBe(false);
    expect(isPropAbsent(false)).toBe(false);
  });
});

describe('hasOwn', () => {
  it('returns true for own properties', () => {
    expect(hasOwn({ a: 1 }, 'a')).toBe(true);
  });

  it('returns false for inherited or missing properties', () => {
    expect(hasOwn({}, 'toString')).toBe(false);
    expect(hasOwn({ a: 1 }, 'b')).toBe(false);
  });
});

describe('getProp', () => {
  it('reads a nested path', () => {
    expect(getProp({ a: { b: { c: 42 } } }, 'a.b.c').value).toBe(42);
  });

  it('returns the default value when the path is absent', () => {
    expect(getProp({ a: 1 }, 'x.y', 'fallback').value).toBe('fallback');
  });

  it('returns undefined when the path is absent and no default is given', () => {
    expect(getProp({ a: 1 }, 'x.y').value).toBeUndefined();
  });

  it('writes to the nested path via the setter', () => {
    const obj: Record<string, any> = { a: { b: 1 } };
    getProp(obj, 'a.b').value = 99;
    expect(obj.a.b).toBe(99);
  });
});
