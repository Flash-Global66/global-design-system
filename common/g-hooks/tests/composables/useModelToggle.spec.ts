import { describe, it, expect, vi } from 'vitest';
import { createApp, defineComponent, h, nextTick, ref } from 'vue';
import { createModelToggleComposable } from '../../src/composables/useModelToggle';

describe('createModelToggleComposable', () => {
  it('derives the update event name and prop/emit definitions from the factory name argument', () => {
    const { useModelToggleProps, useModelToggleEmits } =
      createModelToggleComposable('visible' as const);

    expect(useModelToggleEmits).toEqual(['update:visible']);
    expect(Object.keys(useModelToggleProps)).toEqual([
      'visible',
      'onUpdate:visible',
    ]);
  });

  it('toggling updates the indicator and emits the correctly-named update event', async () => {
    const { useModelToggle, useModelToggleProps, useModelToggleEmits } =
      createModelToggleComposable('visible' as const);

    const onUpdate = vi.fn();
    const indicator = ref(false);
    let exposed:
      | { show: () => void; hide: () => void; toggle: () => void }
      | undefined;

    const Child = defineComponent({
      props: useModelToggleProps,
      emits: useModelToggleEmits,
      setup() {
        const { show, hide, toggle } = useModelToggle({ indicator });
        exposed = { show, hide, toggle };
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        return () => h(Child, { visible: null, 'onUpdate:visible': onUpdate });
      },
    });

    createApp(Parent).mount(document.createElement('div'));

    exposed!.show();
    await nextTick();
    expect(indicator.value).toBe(true);
    expect(onUpdate).toHaveBeenCalledWith(true);

    exposed!.hide();
    await nextTick();
    expect(indicator.value).toBe(false);
    expect(onUpdate).toHaveBeenCalledWith(false);

    exposed!.toggle();
    await nextTick();
    expect(indicator.value).toBe(true);
  });

  it('hasUpdateHandler reflects whether the consumer bound the update event', () => {
    const { useModelToggle, useModelToggleProps, useModelToggleEmits } =
      createModelToggleComposable('visible' as const);

    let exposedHasUpdateHandler: ReturnType<
      typeof useModelToggle
    >['hasUpdateHandler'];

    const Child = defineComponent({
      props: useModelToggleProps,
      emits: useModelToggleEmits,
      setup() {
        const indicator = ref(false);
        const { hasUpdateHandler } = useModelToggle({ indicator });
        exposedHasUpdateHandler = hasUpdateHandler;
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        return () => h(Child, { visible: null });
      },
    });

    createApp(Parent).mount(document.createElement('div'));

    expect(exposedHasUpdateHandler!.value).toBe(false);
  });

  it('does not toggle when props.disabled is true', async () => {
    const { useModelToggle, useModelToggleProps, useModelToggleEmits } =
      createModelToggleComposable('visible' as const);

    const indicator = ref(false);
    let show: (() => void) | undefined;

    const Child = defineComponent({
      props: {
        ...useModelToggleProps,
        disabled: { type: Boolean, default: false },
      },
      emits: useModelToggleEmits,
      setup() {
        ({ show } = useModelToggle({ indicator }));
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        return () => h(Child, { visible: null, disabled: true });
      },
    });

    createApp(Parent).mount(document.createElement('div'));

    show!();
    await nextTick();

    expect(indicator.value).toBe(false);
  });
});
