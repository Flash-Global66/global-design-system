import { describe, it, expect, vi } from 'vitest';
import { createApp, defineComponent, nextTick, ref } from 'vue';
import { usePopper } from '../../src/composables/usePopper';

/**
 * Monta un componente mínimo que solo invoca `usePopper`, para que los
 * `watch`/`onBeforeUnmount` internos del composable corran dentro de un
 * scope reactivo válido (no es un test de renderizado/DOM del componente).
 */
const mountUsePopper = (
  referenceElementRef: ReturnType<typeof ref<HTMLElement | undefined>>,
  popperElementRef: ReturnType<typeof ref<HTMLElement | undefined>>,
) => {
  let result!: ReturnType<typeof usePopper>;

  const Comp = defineComponent({
    setup() {
      result = usePopper(referenceElementRef, popperElementRef);
      return () => null;
    },
  });

  const app = createApp(Comp);
  app.mount(document.createElement('div'));

  return { app, result: () => result };
};

describe('usePopper', () => {
  it('exposes the default popper/arrow styles and an empty attributes map before both elements are set', async () => {
    const referenceElementRef = ref<HTMLElement>();
    const popperElementRef = ref<HTMLElement>();
    const { app, result } = mountUsePopper(
      referenceElementRef,
      popperElementRef,
    );
    await nextTick();

    expect(result().instanceRef.value).toBeUndefined();
    expect(result().styles.value.popper).toMatchObject({
      position: 'absolute',
      left: '0',
      top: '0',
    });
    expect(result().styles.value.arrow).toMatchObject({ position: 'absolute' });
    expect(result().attributes.value).toEqual({});

    app.unmount();
  });

  it('creates a Popper instance once both the reference and popper elements are set', async () => {
    const referenceElementRef = ref<HTMLElement>();
    const popperElementRef = ref<HTMLElement>();
    const { app, result } = mountUsePopper(
      referenceElementRef,
      popperElementRef,
    );

    referenceElementRef.value = document.createElement('div');
    popperElementRef.value = document.createElement('div');
    await nextTick();

    expect(result().instanceRef.value).toBeDefined();

    app.unmount();
  });

  it('update()/forceUpdate() delegate to the underlying Popper instance', async () => {
    const referenceElementRef = ref<HTMLElement>();
    const popperElementRef = ref<HTMLElement>();
    const { app, result } = mountUsePopper(
      referenceElementRef,
      popperElementRef,
    );

    referenceElementRef.value = document.createElement('div');
    popperElementRef.value = document.createElement('div');
    await nextTick();

    const instance = result().instanceRef.value!;
    const updateSpy = vi.spyOn(instance, 'update');
    const forceUpdateSpy = vi.spyOn(instance, 'forceUpdate');

    result().update();
    result().forceUpdate();

    expect(updateSpy).toHaveBeenCalledTimes(1);
    expect(forceUpdateSpy).toHaveBeenCalledTimes(1);

    app.unmount();
  });

  it('destroys the Popper instance on unmount', async () => {
    const referenceElementRef = ref<HTMLElement>();
    const popperElementRef = ref<HTMLElement>();
    const { app, result } = mountUsePopper(
      referenceElementRef,
      popperElementRef,
    );

    referenceElementRef.value = document.createElement('div');
    popperElementRef.value = document.createElement('div');
    await nextTick();

    const instance = result().instanceRef.value!;
    const destroySpy = vi.spyOn(instance, 'destroy');

    app.unmount();

    expect(destroySpy).toHaveBeenCalledTimes(1);
    expect(result().instanceRef.value).toBeUndefined();
  });

  it('re-creates the instance (destroying the previous one) when the reference/popper elements change', async () => {
    const referenceElementRef = ref<HTMLElement>();
    const popperElementRef = ref<HTMLElement>();
    const { app, result } = mountUsePopper(
      referenceElementRef,
      popperElementRef,
    );

    referenceElementRef.value = document.createElement('div');
    popperElementRef.value = document.createElement('div');
    await nextTick();

    const firstInstance = result().instanceRef.value!;
    const destroySpy = vi.spyOn(firstInstance, 'destroy');

    popperElementRef.value = document.createElement('div');
    await nextTick();

    expect(destroySpy).toHaveBeenCalledTimes(1);
    expect(result().instanceRef.value).toBeDefined();
    expect(result().instanceRef.value).not.toBe(firstInstance);

    app.unmount();
  });
});
