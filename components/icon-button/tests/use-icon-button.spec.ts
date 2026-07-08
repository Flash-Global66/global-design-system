import { describe, it, expect } from 'vitest';
import { createApp, defineComponent, h, provide } from 'vue';
import { formContextKey } from '@flash-global66/g-form';
import { useIconButton } from '../src/use-icon-button';
import type { IconButtonProps } from '../src/icon-button';

/**
 * Regression test for the icon-button bug fix (WU-3.7): `use-icon-button.ts`
 * previously imported `useFormItem` from `element-plus` and destructured
 * `form` without ever wiring it into the disabled state, so an icon-button
 * inside a disabled `g-form` never actually reflected that state. This test
 * proves the fixed import (`@flash-global66/g-form`) is functionally wired.
 */
describe('useIconButton — form context integration', () => {
  const baseProps = (
    overrides: Partial<IconButtonProps> = {},
  ): IconButtonProps =>
    ({
      disabled: false,
      autofocus: false,
      href: undefined,
      target: undefined,
      download: undefined,
      variant: 'grey',
      icon: 'solid check',
      size: 'medium',
      border: false,
      rounded: false,
      type: 'button',
      ...overrides,
    }) as IconButtonProps;

  it('observes disabled:true from an ancestor g-form via useFormItem', () => {
    let disabledRef: { value: boolean } | undefined;
    const Child = defineComponent({
      setup() {
        const { _disabled } = useIconButton(baseProps(), (() => {}) as any);
        disabledRef = _disabled;
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        provide(formContextKey, { disabled: true } as any);
        return () => h(Child);
      },
    });
    createApp(Parent).mount(document.createElement('div'));

    expect(disabledRef!.value).toBe(true);
  });

  it('is not disabled when no ancestor g-form disables it', () => {
    let disabledRef: { value: boolean } | undefined;
    const Child = defineComponent({
      setup() {
        const { _disabled } = useIconButton(baseProps(), (() => {}) as any);
        disabledRef = _disabled;
        return () => null;
      },
    });
    createApp(Child).mount(document.createElement('div'));

    expect(disabledRef!.value).toBe(false);
  });

  it('own disabled prop still disables it regardless of form context', () => {
    let disabledRef: { value: boolean } | undefined;
    const Child = defineComponent({
      setup() {
        const { _disabled } = useIconButton(
          baseProps({ disabled: true }),
          (() => {}) as any,
        );
        disabledRef = _disabled;
        return () => null;
      },
    });
    createApp(Child).mount(document.createElement('div'));

    expect(disabledRef!.value).toBe(true);
  });
});
