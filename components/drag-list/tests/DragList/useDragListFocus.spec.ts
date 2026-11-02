import { describe, it, expect } from 'vitest';
import { defineComponent, h, nextTick, ref, shallowRef, triggerRef } from 'vue';
import { mount } from '@vue/test-utils';
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
  it('enfoca dos pedidos seguidos al mismo índice tras re-renderizar', async () => {
    const focusIndex = shallowRef<number | null>(null);
    const items = ref(['a', 'b', 'c', 'd']);
    const targetEl = ref<HTMLElement | null>(null);
    const Comp = defineComponent({
      setup() {
        useDragListFocus({ focusIndex, targetEl });
        return () =>
          h(
            'div',
            { ref: targetEl },
            h(
              'ul',
              { 'data-drag-target-list': '' },
              items.value.map((id, i) =>
                h('li', { key: id, tabindex: 0, 'data-drag-index': i }, id),
              ),
            ),
          );
      },
    });
    const wrapper = mount(Comp, { attachTo: document.body });
    for (let n = 0; n < 2; n++) {
      items.value = items.value.filter((_, i) => i !== 1);
      focusIndex.value = 1;
      triggerRef(focusIndex);
      await nextTick();
      await nextTick();
      expect(document.activeElement).toBe(
        wrapper.element.querySelector('[data-drag-index="1"]'),
      );
      expect(document.activeElement).not.toBe(document.body);
    }
    wrapper.unmount();
  });

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
