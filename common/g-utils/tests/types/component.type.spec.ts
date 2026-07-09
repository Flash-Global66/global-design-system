import { describe, it, expect } from 'vitest';
import { componentSizes } from '../../src/types/component.type';

describe('componentSizes', () => {
  it('contains the empty string first for element-plus validator parity', () => {
    expect(componentSizes[0]).toBe('');
  });

  it('equals the exact EP-faithful runtime tuple', () => {
    expect(componentSizes).toEqual(['', 'default', 'small', 'large']);
  });
});
