import { describe, it, expect } from 'vitest';
import { reactive } from 'vue';
import { withSetup } from '../../../../../tests/utils/withSetup';
import { useDropOverlay } from '../../../src/components/DropOverlay/useDropOverlay';

function makeProps(
  overrides: Partial<Parameters<typeof useDropOverlay>[0]> = {},
): Parameters<typeof useDropOverlay>[0] {
  return reactive({
    action: 'add',
    isVisible: false,
    text: '',
    ...overrides,
  }) as Parameters<typeof useDropOverlay>[0];
}

describe('useDropOverlay', () => {
  it('expone el namespace BEM del overlay', () => {
    const { result } = withSetup(() => useDropOverlay(makeProps()));

    expect(result.ns.b()).toBe('gui-drag-list-overlay');
  });

  it('marca is-visible solo cuando es visible', () => {
    const hidden = withSetup(() => useDropOverlay(makeProps()));
    const shown = withSetup(() =>
      useDropOverlay(makeProps({ isVisible: true })),
    );

    expect(hidden.result.overlayClass.value).not.toContain('is-visible');
    expect(shown.result.overlayClass.value).toContain('is-visible');
  });

  it('agrega el modificador de la acción', () => {
    const { result } = withSetup(() =>
      useDropOverlay(makeProps({ action: 'remove' })),
    );

    expect(result.overlayClass.value).toContain(
      'gui-drag-list-overlay--remove',
    );
  });

  it('elige el ícono según la acción', () => {
    const add = withSetup(() => useDropOverlay(makeProps()));
    const remove = withSetup(() =>
      useDropOverlay(makeProps({ action: 'remove' })),
    );

    expect(add.result.iconName.value).toBe('regular plus');
    expect(remove.result.iconName.value).toBe('regular trash');
  });
});
