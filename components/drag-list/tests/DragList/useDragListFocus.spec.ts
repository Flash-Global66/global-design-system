import { describe, it, expect } from 'vitest';
import { nextTick, ref } from 'vue';
import { withSetup } from '../../../../tests/utils/withSetup';
import { useDragListFocus } from '../../src/DragList/useDragListFocus';

function buildTarget(count: number): HTMLElement {
  const root = document.createElement('div');
  const list = document.createElement('ul');
  list.setAttribute('data-drag-target-list', '');
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.tabIndex = 0;
    li.dataset.dragIndex = String(i);
    list.appendChild(li);
  }
  root.appendChild(list);
  document.body.appendChild(root);
  return root;
}

describe('useDragListFocus', () => {
  it('enfoca la tarjeta del índice indicado', async () => {
    const root = buildTarget(3);
    const focusIndex = ref<number | null>(null);
    const targetEl = ref<HTMLElement | null>(root);
    withSetup(() => useDragListFocus({ focusIndex, targetEl }));
    focusIndex.value = 2;
    await nextTick();
    await nextTick();
    expect(document.activeElement).toBe(
      root.querySelector('[data-drag-index="2"]'),
    );
    root.remove();
  });

  it('no hace nada con null o sin destino', async () => {
    const focusIndex = ref<number | null>(1);
    const targetEl = ref<HTMLElement | null>(null);
    withSetup(() => useDragListFocus({ focusIndex, targetEl }));
    focusIndex.value = 0;
    await nextTick();
    focusIndex.value = null;
    await nextTick();
    expect(document.activeElement).toBe(document.body);
  });
});
