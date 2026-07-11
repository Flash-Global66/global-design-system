import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import {
  defaultInitialZIndex,
  useZIndex,
} from '../../src/composables/useZIndex';

describe('useZIndex', () => {
  it('initialZIndex defaults to defaultInitialZIndex (2000) when no override is provided', () => {
    const { initialZIndex } = useZIndex();

    expect(initialZIndex.value).toBe(defaultInitialZIndex);
  });

  it('respects an explicit zIndexOverrides ref as the initialZIndex base', () => {
    const override = ref(5000);
    const { initialZIndex } = useZIndex(override);

    expect(initialZIndex.value).toBe(5000);
  });

  it('nextZIndex increments a shared module-level counter across separate useZIndex() calls', () => {
    const { nextZIndex: nextZIndexA } = useZIndex();
    const { nextZIndex: nextZIndexB } = useZIndex();

    const first = nextZIndexA();
    const second = nextZIndexB();

    expect(second).toBe(first + 1);
  });

  it('currentZIndex reflects the latest value allocated by nextZIndex()', () => {
    const { nextZIndex, currentZIndex } = useZIndex();

    const allocated = nextZIndex();

    expect(currentZIndex.value).toBe(allocated);
  });
});
