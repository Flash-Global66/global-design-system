import { describe, it, expect } from 'vitest';
import { mutable } from '../../src/types/utils.type';
import type { Mutable } from '../../src/types/utils.type';

describe('mutable', () => {
  it('returns the exact same reference it received', () => {
    const input = ['a', 'b'] as const;
    const result = mutable(input);
    expect(result).toBe(input);
  });

  it('preserves the values of a readonly object literal', () => {
    const input = { a: 1, b: 2 } as const;
    const result = mutable(input);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('strips readonly at the type level (compile-time check)', () => {
    const input = ['x', 'y'] as const;
    const result: Mutable<typeof input> = mutable(input);
    // This assignment would fail to compile if `result` were still readonly.
    result[0] = 'z';
    expect(result[0]).toBe('z');
  });
});
