import { describe, it, expect } from 'vitest';
import { computed, createApp, defineComponent, h, provide } from 'vue';
import { formContextKey } from '@flash-global66/g-form';
import { useCheckboxDisabled } from '../../src/composables/use-checkbox-disabled';

/**
 * Regression test for the checkbox migration (WU-3): `use-checkbox-disabled.ts`
 * delegates to `useFormDisabled` from `@flash-global66/g-form`, which injects
 * `g-form`'s own `formContextKey`. Before this migration the checkbox used
 * element-plus's `useFormDisabled`, injecting EP's own `formContextKey` — a
 * key our `GForm` never provides — so `<GForm disabled>` was a silent no-op
 * for `GCheckbox`. This test proves the cascade now works via GForm's key.
 */
describe('useCheckboxDisabled — form context integration', () => {
  const mountWithDisabledCascade = (
    ownDisabled: boolean,
    provideFormContext: boolean,
  ) => {
    let isDisabledRef: { value: boolean } | undefined;

    const Child = defineComponent({
      props: {
        disabled: { type: Boolean, default: false },
      },
      setup() {
        const model = computed({
          get: () => [] as unknown,
          set: () => {},
        });
        const isChecked = computed(() => false);
        const { isDisabled } = useCheckboxDisabled({ model, isChecked });
        isDisabledRef = isDisabled;
        return () => null;
      },
    });

    const Parent = defineComponent({
      setup() {
        if (provideFormContext) {
          provide(formContextKey, { disabled: true } as any);
        }
        return () => h(Child, { disabled: ownDisabled });
      },
    });

    createApp(Parent).mount(document.createElement('div'));

    return isDisabledRef!;
  };

  it('observes disabled:true from an ancestor g-form via useFormDisabled', () => {
    const isDisabledRef = mountWithDisabledCascade(false, true);

    expect(isDisabledRef.value).toBe(true);
  });

  it('is not disabled when no ancestor g-form disables it and own prop is false', () => {
    const isDisabledRef = mountWithDisabledCascade(false, false);

    expect(isDisabledRef.value).toBe(false);
  });

  it('own disabled prop still disables it regardless of form context', () => {
    const isDisabledRef = mountWithDisabledCascade(true, false);

    expect(isDisabledRef.value).toBe(true);
  });
});
