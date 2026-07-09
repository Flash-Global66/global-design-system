import { describe, it, expect } from 'vitest';
import { createApp, defineComponent, h, provide, ref, nextTick } from 'vue';
import type { ComputedRef } from 'vue';
import { sizeInjectionKey } from '@flash-global66/g-hooks';
import type { ComponentSize } from '@flash-global66/g-utils';
import { useFormSize } from '../../src/hooks/use-form-common-props';
import { formContextKey } from '../../src/constants';

/**
 * Mounts a Parent (`sizeInjectionKey` provider) → Middle (`formContextKey`
 * provider, optional) → Child (`size` prop holder, calls `useFormSize`)
 * tree, so both `provide`/`inject` boundaries are exercised for real
 * (Vue's `provide`/`inject` only crosses component boundaries).
 */
const mountUseFormSize = (options: {
  sizeProp?: ComponentSize;
  globalSize?: ComponentSize;
  fallback?: ComponentSize;
  ignore?: Partial<Record<'prop' | 'global', boolean>>;
  formContext?: Record<string, unknown>;
}) => {
  let result!: ComputedRef<ComponentSize>;

  const Child = defineComponent({
    props: { size: { type: String, required: false } },
    setup() {
      result = useFormSize(options.fallback, options.ignore);
      return () => null;
    },
  });

  const Middle = defineComponent({
    setup() {
      if (options.formContext) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        provide(formContextKey, options.formContext as any);
      }
      return () =>
        h(
          Child,
          options.sizeProp !== undefined ? { size: options.sizeProp } : {},
        );
    },
  });

  const Parent = defineComponent({
    setup() {
      provide(sizeInjectionKey, { size: options.globalSize });
      return () => h(Middle);
    },
  });

  createApp(Parent).mount(document.createElement('div'));
  return result;
};

describe('useFormSize', () => {
  it('resolves the explicit size prop over fallback and global', () => {
    const size = mountUseFormSize({
      sizeProp: 'large',
      fallback: 'small',
      globalSize: 'default',
    });
    expect(size.value).toBe('large');
  });

  it('resolves fallback over global when the prop is absent', () => {
    const size = mountUseFormSize({
      fallback: 'small',
      globalSize: 'default',
    });
    expect(size.value).toBe('small');
  });

  it('falls through to useGlobalSize() when neither prop nor fallback is set', () => {
    const size = mountUseFormSize({ globalSize: 'large' });
    expect(size.value).toBe('large');
  });

  it('falls through to "default" when nothing is set at all', () => {
    const size = mountUseFormSize({});
    expect(size.value).toBe('default');
  });

  it('ignore.prop neutralizes the prop tier, falling to fallback', () => {
    const size = mountUseFormSize({
      sizeProp: 'large',
      fallback: 'small',
      ignore: { prop: true },
    });
    expect(size.value).toBe('small');
  });

  it('ignore.global neutralizes the global tier, falling to "default"', () => {
    const size = mountUseFormSize({
      globalSize: 'large',
      ignore: { global: true },
    });
    expect(size.value).toBe('default');
  });

  it('does NOT read a form-context size tier — a spoofed form context size is ignored', () => {
    const size = mountUseFormSize({
      // g-form's FormContext carries no `size` field in this version; this
      // spoofed value proves useFormSize never injects/reads it, per
      // design §2.1 (no form-context tier).
      formContext: { size: 'large' },
    });
    expect(size.value).toBe('default');
  });

  it('an explicit size="" prop is falsy and falls through to fallback (EP-faithful quirk)', () => {
    // componentSizes includes '' (see g-utils), matching element-plus's own
    // validator. Because useFormSize resolves via `size.value || ...`, an
    // explicit but empty-string size is NOT treated as "set" — it falls
    // through to the next precedence tier, exactly like element-plus.
    const size = mountUseFormSize({
      sizeProp: '',
      fallback: 'small',
      globalSize: 'default',
    });
    expect(size.value).toBe('small');
  });

  it('stays reactive: updates when the injected global-size provider changes after mount', async () => {
    let result!: ComputedRef<ComponentSize>;
    const globalSize = ref<ComponentSize>('small');

    const Child = defineComponent({
      setup() {
        result = useFormSize();
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        provide(sizeInjectionKey, { size: globalSize });
        return () => h(Child);
      },
    });
    createApp(Parent).mount(document.createElement('div'));

    expect(result.value).toBe('small');
    globalSize.value = 'large';
    await nextTick();
    expect(result.value).toBe('large');
  });
});
