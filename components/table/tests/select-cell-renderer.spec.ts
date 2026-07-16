import { describe, it, expect, vi } from 'vitest';
import { nextTick, isVNode, type VNode } from 'vue';
import { renderSelectCell } from '../src/table-column/cell-renderers/select-cell-renderer';

/**
 * Walks a render output collecting every VNode, resolving slot functions so
 * that conditionally rendered children (e.g. the Transition's default slot)
 * are included.
 */
function collectVNodes(node: unknown, acc: VNode[] = []): VNode[] {
  if (Array.isArray(node)) {
    node.forEach(child => collectVNodes(child, acc));
    return acc;
  }
  if (isVNode(node)) {
    acc.push(node);
    const children = node.children;
    if (Array.isArray(children)) {
      collectVNodes(children, acc);
    } else if (children && typeof children === 'object') {
      for (const key of Object.keys(children)) {
        const slot = (children as Record<string, unknown>)[key];
        collectVNodes(typeof slot === 'function' ? slot() : slot, acc);
      }
    }
  }
  return acc;
}

function findEditorProps(
  vnode: VNode | null,
): Record<string, unknown> | undefined {
  return collectVNodes(vnode).find(
    n => n.props && 'onUpdate:modelValue' in n.props,
  )?.props as Record<string, unknown> | undefined;
}

function buildCell(overrides: { getEditing?: () => boolean } = {}) {
  const setEditing = vi.fn();
  const toggle = vi.fn();
  const emit = vi.fn();
  const row = { status: 'pending' };
  const column = { property: 'status', no: 0 } as never;
  const data = { row, $index: 0, cellIndex: 0 } as never;
  const cellOptions = {
    options: [
      { value: 'active', title: 'Activo' },
      { value: 'pending', title: 'Pendiente' },
    ],
    getEditing: overrides.getEditing ?? (() => true),
    toggle,
    setEditing,
  };

  const vnode = renderSelectCell(column, data, cellOptions, { emit });
  return { vnode, row, setEditing, toggle, emit };
}

describe('renderSelectCell — close on select', () => {
  it('closes the cell after picking an option (setEditing(null) on next tick)', async () => {
    const { vnode, row, setEditing, emit } = buildCell();
    const editorProps = findEditorProps(vnode);
    expect(editorProps).toBeDefined();

    const onUpdate = editorProps!['onUpdate:modelValue'] as (v: string) => void;
    onUpdate('active');

    // Value is applied and the change is emitted synchronously...
    expect(row.status).toBe('active');
    expect(emit).toHaveBeenCalledWith(
      'cell-edit-change',
      row,
      expect.anything(),
      'active',
      'pending',
    );

    // ...but the cell only leaves edit mode on the next tick.
    expect(setEditing).not.toHaveBeenCalled();
    await nextTick();
    expect(setEditing).toHaveBeenCalledWith(null);
    expect(emit).toHaveBeenCalledWith(
      'cell-edit-close',
      row,
      expect.anything(),
    );
  });

  it('still closes the cell on blur', () => {
    const { vnode, setEditing } = buildCell();
    const editorProps = findEditorProps(vnode);
    const onBlur = editorProps!.onBlur as () => void;

    onBlur();

    expect(setEditing).toHaveBeenCalledWith(null);
  });
});
