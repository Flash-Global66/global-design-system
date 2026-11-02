import { describe, it, expect } from 'vitest';
import { nextTick, reactive } from 'vue';
import { withSetup } from '../../../../../tests/utils/withSetup';
import { useDragGhost } from '../../../src/components/DragGhost/useDragGhost';
import type { DragSession } from '../../../src/shared/types/drag-list.type';

function makeSession(overrides: Partial<DragSession> = {}): DragSession {
  return {
    origin: 'source',
    item: { id: 1 },
    fromIndex: 0,
    pointer: { x: 100, y: 200 },
    ghostOffset: { x: 10, y: 20 },
    isActivated: true,
    zone: 'none',
    dropIndex: null,
    ...overrides,
  } as DragSession;
}

describe('useDragGhost', () => {
  it('no es visible sin sesión', () => {
    const props = reactive({ session: null, width: undefined });
    const { result } = withSetup(() => useDragGhost(props));
    expect(result.isVisible.value).toBe(false);
  });

  it('no es visible con la sesión sin activar', () => {
    const props = reactive({
      session: makeSession({ isActivated: false }),
      width: undefined,
    });
    const { result } = withSetup(() => useDragGhost(props));
    expect(result.isVisible.value).toBe(false);
  });

  it('calcula transform desde pointer - ghostOffset y el z-index', () => {
    const props = reactive({ session: makeSession(), width: undefined });
    const { result } = withSetup(() => useDragGhost(props));
    expect(result.isVisible.value).toBe(true);
    expect(result.style.value.transform).toBe('translate3d(90px, 180px, 0)');
    expect(result.style.value.zIndex).toBeGreaterThanOrEqual(2000);
    expect(result.style.value.width).toBeUndefined();
  });

  it('aplica el ancho en px cuando se recibe', () => {
    const props = reactive({ session: makeSession(), width: 240 });
    const { result } = withSetup(() => useDragGhost(props));
    expect(result.style.value.width).toBe('240px');
  });

  it('sigue al puntero y toma z-index al activarse después', async () => {
    const props = reactive({
      session: makeSession({ isActivated: false }) as DragSession | null,
      width: undefined,
    });
    const { result } = withSetup(() => useDragGhost(props));
    props.session = makeSession({ pointer: { x: 50, y: 60 } });
    await nextTick();
    expect(result.isVisible.value).toBe(true);
    expect(result.style.value.transform).toBe('translate3d(40px, 40px, 0)');
    expect(result.style.value.zIndex).toBeGreaterThanOrEqual(2000);
  });
});
