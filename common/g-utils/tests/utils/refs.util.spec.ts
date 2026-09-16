import { describe, it, expect, vi } from 'vitest';
import { ref } from 'vue';
import { composeRefs } from '../../src/utils/refs.util';

describe('composeRefs', () => {
  it('asigna el mismo elemento a múltiples refs objeto', () => {
    const refA = ref<HTMLElement | undefined>();
    const refB = ref<HTMLElement | undefined>();
    const el = document.createElement('div');

    const setter = composeRefs(refA, refB);
    setter(el);

    expect(refA.value).toBe(el);
    expect(refB.value).toBe(el);
  });

  it('invoca los refs de tipo función con el mismo elemento', () => {
    const fnRef = vi.fn();
    const objRef = ref<HTMLElement | undefined>();
    const el = document.createElement('span');

    const setter = composeRefs(fnRef, objRef);
    setter(el);

    expect(fnRef).toHaveBeenCalledWith(el);
    expect(objRef.value).toBe(el);
  });

  it('soporta null/undefined al desmontar', () => {
    const refA = ref<HTMLElement | undefined | null>();
    const fnRef = vi.fn();

    const setter = composeRefs(refA, fnRef);
    setter(null);

    expect(refA.value).toBeNull();
    expect(fnRef).toHaveBeenCalledWith(null);
  });
});
