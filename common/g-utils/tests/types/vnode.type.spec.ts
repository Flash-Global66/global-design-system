import { describe, it, expect } from 'vitest';
import { PatchFlags } from '../../src/types/vnode.type';

describe('PatchFlags', () => {
  it('matches element-plus 2.9.7 numeric values exactly', () => {
    expect(PatchFlags.TEXT).toBe(1);
    expect(PatchFlags.CLASS).toBe(2);
    expect(PatchFlags.STYLE).toBe(4);
    expect(PatchFlags.PROPS).toBe(8);
    expect(PatchFlags.FULL_PROPS).toBe(16);
    expect(PatchFlags.HYDRATE_EVENTS).toBe(32);
    expect(PatchFlags.STABLE_FRAGMENT).toBe(64);
    expect(PatchFlags.KEYED_FRAGMENT).toBe(128);
    expect(PatchFlags.UNKEYED_FRAGMENT).toBe(256);
    expect(PatchFlags.NEED_PATCH).toBe(512);
    expect(PatchFlags.DYNAMIC_SLOTS).toBe(1024);
    expect(PatchFlags.HOISTED).toBe(-1);
    expect(PatchFlags.BAIL).toBe(-2);
  });

  it('supports bitwise OR composition as used by overlay render flags', () => {
    const combined = PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS;

    expect(combined).toBe(14);
  });
});
