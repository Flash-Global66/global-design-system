import { describe, it, expect } from 'vitest';
import { createApp, defineComponent, h, provide, ref, nextTick } from 'vue';
import { withSetup } from '../../../../tests/utils/withSetup';
import {
  useGlobalSize,
  sizeInjectionKey,
} from '../../src/composables/useGlobalSize';

describe('useGlobalSize', () => {
  it('defaults to "default" when no size provider exists (inside setup)', () => {
    const { result } = withSetup(() => useGlobalSize());
    expect(result.value).toBe('default');
  });

  it('reads the injected size from a parent provider', () => {
    // `provide`/`inject` only crosses component boundaries in Vue, so a
    // real parent → child tree is required (a component cannot `inject` a
    // value it `provide`s to itself).
    let sizeRef: ReturnType<typeof useGlobalSize> | undefined;
    const Child = defineComponent({
      setup() {
        sizeRef = useGlobalSize();
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        provide(sizeInjectionKey, { size: ref('small') });
        return () => h(Child);
      },
    });
    createApp(Parent).mount(document.createElement('div'));
    expect(sizeRef!.value).toBe('small');
  });

  it('reads a reactive size ref and updates when it changes', async () => {
    let sizeRef: ReturnType<typeof useGlobalSize> | undefined;
    const size = ref<'small' | 'default' | 'large'>('small');
    const Child = defineComponent({
      setup() {
        sizeRef = useGlobalSize();
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        provide(sizeInjectionKey, { size });
        return () => h(Child);
      },
    });
    createApp(Parent).mount(document.createElement('div'));

    expect(sizeRef!.value).toBe('small');
    size.value = 'large';
    await nextTick();
    expect(sizeRef!.value).toBe('large');
  });
});
