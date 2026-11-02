import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { nextTick, reactive } from 'vue';
import { withSetup } from '../../../../tests/utils/withSetup';
import { useDragList } from '../../src/DragList/useDragList';
import type { DragListItem } from '../../src/shared/types/drag-list.type';

const engine = vi.hoisted(() => ({
  options: null as null | Record<string, (...args: never[]) => unknown>,
  session: null as null | { value: unknown },
}));

vi.mock('../../src/shared/composables/usePointerDrag', async () => {
  const { shallowRef: makeShallowRef } = await import('vue');
  return {
    usePointerDrag: (
      options: Record<string, (...args: never[]) => unknown>,
    ) => {
      engine.options = options;
      engine.session = makeShallowRef(null);
      return { session: engine.session };
    },
  };
});

const autoScroll = vi.hoisted(() => ({
  options: null as null | {
    containers: () => (HTMLElement | null)[];
  },
}));

vi.mock('../../src/shared/composables/useAutoScroll', () => ({
  useAutoScroll: (options: NonNullable<typeof autoScroll.options>) => {
    autoScroll.options = options;
  },
}));

type Props = Parameters<typeof useDragList>[0];

const A = { id: 'a', name: 'Ana' };
const B = { id: 'b', name: 'Beto' };
const C = { id: 'c', name: 'Carla' };

function setup(overrides: Record<string, unknown> = {}) {
  const props = reactive({
    modelValue: [] as DragListItem[],
    source: [A, B, C] as DragListItem[],
    itemKey: 'id',
    itemLabel: 'name',
    ordered: false,
    repeatable: false,
    dragToRemove: true,
    keyboardRemove: false,
    direction: 'vertical',
    disabled: false,
    ...overrides,
  }) as unknown as Props;
  const emit = vi.fn();
  const { result } = withSetup(() => useDragList(props, emit));
  return { props, emit, result };
}

function drop(payload: Record<string, unknown>): void {
  (engine.options!.onDrop as (p: unknown) => void)(payload);
}

describe('useDragList', () => {
  beforeEach(() => {
    engine.options = null;
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('el auto-scroll incluye el panel y la lista del destino en horizontal', () => {
    const { result } = setup({ direction: 'horizontal' });
    const panel = document.createElement('div');
    const list = document.createElement('ul');
    list.setAttribute('data-drag-target-list', '');
    panel.appendChild(list);
    result.targetEl.value = panel;
    const containers = autoScroll.options!.containers();
    expect(containers).toContain(panel);
    expect(containers).toContain(list);
    expect(autoScroll.options).not.toHaveProperty('axis');
  });

  it('agrega arrastrando en modo simple', () => {
    const { emit } = setup();
    drop({
      origin: 'source',
      zone: 'target',
      fromIndex: 0,
      toIndex: 0,
      item: A,
    });
    expect(emit).toHaveBeenNthCalledWith(1, 'update:modelValue', [A]);
    expect(emit).toHaveBeenNthCalledWith(2, 'add', A, 0, 'drag');
  });

  it('agrega con el botón del slot', () => {
    const { emit, result } = setup();
    result.getSourceSlotProps(B).add();
    expect(emit).toHaveBeenCalledWith('add', B, 0, 'button');
  });

  it('agregar dos veces no duplica', () => {
    const { emit, result } = setup({ modelValue: [A] });
    result.add(A, undefined, 'api');
    expect(emit).not.toHaveBeenCalled();
  });

  it('el elemento agregado desaparece del origen y el motivo es all-added', () => {
    const { result } = setup({ modelValue: [A, B, C] });
    expect(result.visibleSource.value).toEqual([]);
    expect(result.emptyReason.value).toBe('all-added');
  });

  it('modo repetible clona y mantiene el origen', () => {
    const cloneItem = vi.fn((item: DragListItem) => ({
      ...item,
      id: `${item.id}-2`,
    }));
    const { emit, result } = setup({
      repeatable: true,
      cloneItem,
      modelValue: [A],
    });
    result.add(A, undefined, 'api');
    expect(cloneItem).toHaveBeenCalledWith(A);
    expect(emit).toHaveBeenCalledWith('update:modelValue', [
      A,
      { ...A, id: 'a-2' },
    ]);
    expect(result.visibleSource.value).toHaveLength(3);
  });

  it('repetible sin cloneItem avisa y no agrega', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { emit, result } = setup({ repeatable: true });
    result.add(A, undefined, 'api');
    expect(warn).toHaveBeenCalled();
    expect(emit).not.toHaveBeenCalled();
  });

  it('avisa por keys duplicadas', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    setup({ repeatable: true, modelValue: [A, { ...A }] });
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('a'));
  });

  it('inserta en una posición intermedia con ordered', () => {
    const { emit } = setup({ ordered: true, modelValue: [A, C] });
    drop({
      origin: 'source',
      zone: 'target',
      fromIndex: 1,
      toIndex: 1,
      item: B,
    });
    expect(emit).toHaveBeenCalledWith('update:modelValue', [A, B, C]);
    expect(emit).toHaveBeenCalledWith('add', B, 1, 'drag');
  });

  it('sin ordered agrega al final ignorando el índice', () => {
    const { emit, result } = setup({ modelValue: [A] });
    result.add(B, 0, 'api');
    expect(emit).toHaveBeenCalledWith('update:modelValue', [A, B]);
    expect(emit).toHaveBeenCalledWith('add', B, 1, 'api');
  });

  it('reordena arrastrando', () => {
    const { emit } = setup({ ordered: true, modelValue: [A, B, C] });
    drop({
      origin: 'target',
      zone: 'target',
      fromIndex: 2,
      toIndex: 0,
      item: C,
    });
    expect(emit).toHaveBeenCalledWith('update:modelValue', [C, A, B]);
    expect(emit).toHaveBeenCalledWith('reorder', C, 2, 0);
  });

  it('soltar en el mismo lugar no reordena', () => {
    const { emit } = setup({ ordered: true, modelValue: [A, B] });
    drop({
      origin: 'target',
      zone: 'target',
      fromIndex: 0,
      toIndex: 0,
      item: A,
    });
    expect(emit).not.toHaveBeenCalled();
  });

  it('sin ordered, move no emite', () => {
    const { emit, result } = setup({ modelValue: [A, B] });
    result.move(0, 1);
    expect(emit).not.toHaveBeenCalled();
  });

  it('moveUp y moveDown desde el slot respetan los extremos', () => {
    const { emit, result } = setup({ ordered: true, modelValue: [A, B] });
    result.getTargetSlotProps(1).moveUp();
    expect(emit).toHaveBeenCalledWith('update:modelValue', [B, A]);
    expect(emit).toHaveBeenCalledWith('reorder', B, 1, 0);
    emit.mockClear();
    result.getTargetSlotProps(0).moveUp();
    result.getTargetSlotProps(1).moveDown();
    expect(emit).not.toHaveBeenCalled();
    expect(result.getTargetSlotProps(0)).toMatchObject({
      position: 1,
      isFirst: true,
      isLast: false,
    });
  });

  it('quita arrastrando al origen', () => {
    const { emit } = setup({ modelValue: [A, B] });
    drop({
      origin: 'target',
      zone: 'source',
      fromIndex: 0,
      toIndex: -1,
      item: A,
    });
    expect(emit).toHaveBeenCalledWith('update:modelValue', [B]);
    expect(emit).toHaveBeenCalledWith('remove', A, 0, 'drag');
  });

  it('gesto apagado: nunca emite remove desde el origen', () => {
    const { emit } = setup({ modelValue: [A], dragToRemove: false });
    drop({
      origin: 'target',
      zone: 'source',
      fromIndex: 0,
      toIndex: -1,
      item: A,
    });
    expect(emit).not.toHaveBeenCalled();
  });

  it('remove del slot funciona con dragToRemove apagado', () => {
    const { emit, result } = setup({ modelValue: [A], dragToRemove: false });
    result.getTargetSlotProps(0).remove();
    expect(emit).toHaveBeenCalledWith('remove', A, 0, 'button');
  });

  it('remove por api recibe la key', () => {
    const { emit, result } = setup({ modelValue: [A, B] });
    result.remove('b', 'api');
    expect(emit).toHaveBeenCalledWith('update:modelValue', [A]);
    expect(emit).toHaveBeenCalledWith('remove', B, 1, 'api');
  });

  it('keyboardRemove no depende de dragToRemove', () => {
    const { emit, result } = setup({
      modelValue: [A, B],
      dragToRemove: false,
      keyboardRemove: true,
    });
    result.handleTargetKeydown(
      new KeyboardEvent('keydown', { key: 'Delete' }),
      0,
    );
    expect(emit).toHaveBeenCalledWith('remove', A, 0, 'keyboard');
  });

  it('sin keyboardRemove, Supr no hace nada', () => {
    const { emit, result } = setup({ modelValue: [A] });
    result.handleTargetKeydown(
      new KeyboardEvent('keydown', { key: 'Delete' }),
      0,
    );
    expect(emit).not.toHaveBeenCalled();
  });

  it('reordena con teclado y expone la previsualización', async () => {
    const { emit, result } = setup({ ordered: true, modelValue: [A, B] });
    const press = (key: string, index: number) =>
      result.handleTargetKeydown(new KeyboardEvent('keydown', { key }), index);
    press(' ', 0);
    press('ArrowDown', 0);
    expect(result.previewItems.value.map(entry => entry.item)).toEqual([B, A]);
    expect(result.previewItems.value[1]).toMatchObject({
      isPlaceholder: true,
      index: 0,
    });
    press(' ', 1);
    expect(emit).toHaveBeenCalledWith('update:modelValue', [B, A]);
    expect(emit).toHaveBeenCalledWith('reorder', A, 0, 1);
  });

  it('deshabilitado no emite nada', () => {
    const { emit, result } = setup({
      modelValue: [A],
      disabled: true,
      ordered: true,
    });
    result.getSourceSlotProps(B).add();
    result.getTargetSlotProps(0).remove();
    result.add(B, 0, 'api');
    result.remove('a', 'api');
    result.move(0, 0);
    drop({
      origin: 'source',
      zone: 'target',
      fromIndex: 0,
      toIndex: 0,
      item: B,
    });
    expect(emit).not.toHaveBeenCalled();
  });

  it('anuncia al agregar con posición y total', async () => {
    const { result } = setup({ ordered: true, modelValue: [A] });
    result.add(B, undefined, 'api');
    await nextTick();
    await nextTick();
    expect(result.announcement.value).toBe('Beto agregado en posición 2 de 2');
  });

  it('el anuncio usa itemLabel y no la key', async () => {
    const { result } = setup({ itemLabel: 'name', itemKey: 'id' });
    result.add({ id: 987, name: 'Sofia Morales' }, undefined, 'api');
    await nextTick();
    await nextTick();
    expect(result.announcement.value).toContain('Sofia Morales');
    expect(result.announcement.value).not.toContain('987');
  });

  it('mezcla parcialmente los textos', () => {
    const { result } = setup({ texts: { overlayAdd: 'Suelta para sumar' } });
    expect(result.texts.value.overlayAdd).toBe('Suelta para sumar');
    expect(result.texts.value.overlayRemove).toBe(
      'Arrastra aquí para eliminar',
    );
  });

  it('refleja la sesión del motor en overlay y previsualización', () => {
    const { result } = setup({ modelValue: [A] });
    expect(result.overlayState.value.target.isVisible).toBe(false);
    (engine.session as { value: unknown }).value = {
      origin: 'source',
      item: B,
      fromIndex: 0,
      pointer: { x: 0, y: 0 },
      ghostOffset: { x: 0, y: 0 },
      isActivated: true,
      zone: 'source',
      dropIndex: null,
    };
    expect(result.overlayState.value.target).toEqual({
      isVisible: true,
      action: 'add',
    });
  });

  it('resolveItem aplana el origen agrupado y lee el destino', () => {
    setup({
      modelValue: [C],
      source: [
        { key: 'g1', items: [A] },
        { key: 'g2', items: [B] },
      ],
    });
    const resolve = engine.options!.resolveItem as (
      o: string,
      i: number,
    ) => unknown;
    expect(resolve('source', 1)).toEqual(B);
    expect(resolve('target', 0)).toEqual(C);
    expect(resolve('target', 5)).toBeNull();
  });

  it('rootClass incluye el bloque y el modificador de direction', () => {
    const { result } = setup({ direction: 'horizontal' });
    expect(result.rootClass.value).toEqual([
      result.ns.b(),
      result.ns.m('horizontal'),
    ]);
    expect(result.rootClass.value[1]).toContain('--horizontal');
  });

  it('getKey resuelve itemKey string y función', () => {
    expect(setup().result.getKey(A)).toBe('a');
    const { result } = setup({
      itemKey: (item: DragListItem) => `k-${String(item.id)}`,
    });
    expect(result.getKey(B)).toBe('k-b');
  });

  it('exposed.add emite con via api y respeta index con ordered', () => {
    const { emit, result } = setup({ ordered: true, modelValue: [A, C] });
    result.exposed.add(B, 1);
    expect(emit).toHaveBeenCalledWith('update:modelValue', [A, B, C]);
    expect(emit).toHaveBeenCalledWith('add', B, 1, 'api');
  });

  it('exposed.add sin index agrega al final', () => {
    const { emit, result } = setup({ modelValue: [A] });
    result.exposed.add(B);
    expect(emit).toHaveBeenCalledWith('add', B, 1, 'api');
  });

  it('exposed.remove recibe la key y emite con via api', () => {
    const { emit, result } = setup({ modelValue: [A, B] });
    result.exposed.remove('b');
    expect(emit).toHaveBeenCalledWith('remove', B, 1, 'api');
  });

  it('exposed.move reordena con ordered', () => {
    const { emit, result } = setup({ ordered: true, modelValue: [A, B, C] });
    result.exposed.move(0, 2);
    expect(emit).toHaveBeenCalledWith('update:modelValue', [B, C, A]);
    expect(emit).toHaveBeenCalledWith('reorder', A, 0, 2);
  });
});
