import { describe, it, expect } from 'vitest';
import { createApp, defineComponent, h, nextTick, ref } from 'vue';
import { useProp } from '../../src/composables/useProp';

describe('useProp', () => {
  it('reads the current prop value reactively inside setup()', async () => {
    let propRef: ReturnType<typeof useProp<string>> | undefined;
    const size = ref('small');

    const Child = defineComponent({
      props: { size: { type: String, required: true } },
      setup() {
        propRef = useProp<string>('size');
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        return () => h(Child, { size: size.value });
      },
    });

    createApp(Parent).mount(document.createElement('div'));
    expect(propRef!.value).toBe('small');

    // Props only update reactively through a normal parent re-render.
    size.value = 'large';
    await nextTick();
    expect(propRef!.value).toBe('large');
  });

  it('throws when called outside of an active component instance', () => {
    expect(() => useProp('size')).toThrowError(/useProp/);
  });
});
