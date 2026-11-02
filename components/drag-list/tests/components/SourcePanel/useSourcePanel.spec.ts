import { describe, it, expect, vi } from 'vitest';
import { reactive } from 'vue';
import { withSetup } from '../../../../../tests/utils/withSetup';
import { useSourcePanel } from '../../../src/components/SourcePanel/useSourcePanel';

type Props = Parameters<typeof useSourcePanel>[0];

function makeProps(overrides: Partial<Props> = {}): Props {
  return reactive({
    items: [],
    itemKey: (item: Record<string, unknown>) => item.id as number,
    emptyReason: null,
    isActiveZone: false,
    isDisabled: false,
    label: '',
    ...overrides,
  }) as Props;
}

describe('useSourcePanel', () => {
  it('expone el namespace BEM del panel', () => {
    const { result } = withSetup(() => useSourcePanel(makeProps(), vi.fn()));

    expect(result.ns.b()).toBe('gui-drag-list-source');
  });

  it('marca is-active-zone e is-disabled', () => {
    const { result } = withSetup(() =>
      useSourcePanel(
        makeProps({ isActiveZone: true, isDisabled: true }),
        vi.fn(),
      ),
    );

    expect(result.rootClass.value).toContain('is-active-zone');
    expect(result.rootClass.value).toContain('is-disabled');
  });

  it('no marca modificadores por defecto', () => {
    const { result } = withSetup(() => useSourcePanel(makeProps(), vi.fn()));

    expect(result.rootClass.value).not.toContain('is-active-zone');
    expect(result.rootClass.value).not.toContain('is-disabled');
  });

  it('una lista plana es un solo bloque sin grupo', () => {
    const props = makeProps({ items: [{ id: 1 }, { id: 2 }] });
    const { result } = withSetup(() => useSourcePanel(props, vi.fn()));

    expect(result.isGrouped.value).toBe(false);
    expect(result.blocks.value).toHaveLength(1);
    expect(result.blocks.value[0].group).toBeNull();
    expect(result.blocks.value[0].entries.map(e => e.index)).toEqual([0, 1]);
  });

  it('con grupos numera los ítems de corrido', () => {
    const props = makeProps({
      items: [
        { key: 'a', items: [{ id: 1 }] },
        { key: 'b', items: [{ id: 2 }, { id: 3 }] },
      ],
    });
    const { result } = withSetup(() => useSourcePanel(props, vi.fn()));

    expect(result.isGrouped.value).toBe(true);
    expect(result.blocks.value.map(b => b.key)).toEqual(['a', 'b']);
    expect(result.blocks.value[1].entries.map(e => e.index)).toEqual([1, 2]);
    expect(result.blocks.value[1].entries[0].key).toBe(2);
  });

  it('add emite el ítem salvo que esté deshabilitado', () => {
    const emit = vi.fn();
    const props = makeProps();
    const { result } = withSetup(() => useSourcePanel(props, emit));

    result.onAdd({ id: 1 });
    expect(emit).toHaveBeenCalledWith('add', { id: 1 });

    props.isDisabled = true;
    result.onAdd({ id: 2 });
    expect(emit).toHaveBeenCalledTimes(1);
    expect(result.canAdd.value).toBe(false);
  });
});
