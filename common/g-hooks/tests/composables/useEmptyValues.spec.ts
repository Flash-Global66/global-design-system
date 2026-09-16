import { describe, it, expect, vi } from 'vitest';
import { createApp, defineComponent, h, provide } from 'vue';
import {
  useEmptyValues,
  gEmptyValuesContextKey,
} from '../../src/composables/useEmptyValues';

describe('useEmptyValues', () => {
  it('props.emptyValues gana cuando está definido, incluso con un config ancestro', () => {
    let resolved: unknown[] | undefined;

    const Child = defineComponent({
      setup() {
        const { emptyValues } = useEmptyValues({ emptyValues: ['none'] });
        resolved = emptyValues.value;
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        provide(gEmptyValuesContextKey, {
          value: { emptyValues: ['config-empty'] },
        } as never);
        return () => h(Child);
      },
    });

    createApp(Parent).mount(document.createElement('div'));

    expect(resolved).toEqual(['none']);
  });

  it('cae al config del ancestro cuando props.emptyValues no está definido', () => {
    let resolved: unknown[] | undefined;

    const Child = defineComponent({
      setup() {
        const { emptyValues } = useEmptyValues({});
        resolved = emptyValues.value;
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        provide(gEmptyValuesContextKey, {
          value: { emptyValues: ['config-empty'] },
        } as never);
        return () => h(Child);
      },
    });

    createApp(Parent).mount(document.createElement('div'));

    expect(resolved).toEqual(['config-empty']);
  });

  it('cae a DEFAULT_EMPTY_VALUES cuando ni props ni config lo definen', () => {
    let resolved: unknown[] | undefined;

    const Child = defineComponent({
      setup() {
        const { emptyValues } = useEmptyValues({});
        resolved = emptyValues.value;
        return () => null;
      },
    });

    createApp(Child).mount(document.createElement('div'));

    expect(resolved).toEqual(['', undefined, null]);
  });

  it('valueOnClear sigue la cascada prop > config > defaultValue > undefined', () => {
    let fromProp: unknown;
    let fromConfig: unknown;
    let fromDefault: unknown;

    const ChildWithProp = defineComponent({
      setup() {
        const { valueOnClear } = useEmptyValues({ valueOnClear: 'prop-value' });
        fromProp = valueOnClear.value;
        return () => null;
      },
    });
    createApp(ChildWithProp).mount(document.createElement('div'));
    expect(fromProp).toBe('prop-value');

    const ChildWithConfig = defineComponent({
      setup() {
        const { valueOnClear } = useEmptyValues({});
        fromConfig = valueOnClear.value;
        return () => null;
      },
    });
    const ParentWithConfig = defineComponent({
      setup() {
        provide(gEmptyValuesContextKey, {
          value: { valueOnClear: 'config-value' },
        } as never);
        return () => h(ChildWithConfig);
      },
    });
    createApp(ParentWithConfig).mount(document.createElement('div'));
    expect(fromConfig).toBe('config-value');

    const ChildWithDefault = defineComponent({
      setup() {
        const { valueOnClear } = useEmptyValues({}, null);
        fromDefault = valueOnClear.value;
        return () => null;
      },
    });
    createApp(ChildWithDefault).mount(document.createElement('div'));
    expect(fromDefault).toBe(null);
  });

  it('isEmptyValue clasifica correctamente contra el set resuelto de emptyValues', () => {
    let isEmpty: ((value: unknown) => boolean) | undefined;

    const Child = defineComponent({
      setup() {
        const { isEmptyValue } = useEmptyValues({
          emptyValues: ['', null, 'N/A'],
        });
        isEmpty = isEmptyValue;
        return () => null;
      },
    });

    createApp(Child).mount(document.createElement('div'));

    expect(isEmpty?.('')).toBe(true);
    expect(isEmpty?.(null)).toBe(true);
    expect(isEmpty?.('N/A')).toBe(true);
    expect(isEmpty?.('something')).toBe(false);
  });

  it('emite un debugWarn cuando valueOnClear no es un valor de emptyValues', () => {
    const warnSpy = vi
      .spyOn(console, 'warn')
      .mockImplementation(() => undefined);

    const Child = defineComponent({
      setup() {
        useEmptyValues({ emptyValues: ['', null], valueOnClear: 'not-empty' });
        return () => null;
      },
    });

    createApp(Child).mount(document.createElement('div'));

    // import.meta.env.DEV es true bajo Vitest, así que debugWarn sí imprime.
    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });
});
