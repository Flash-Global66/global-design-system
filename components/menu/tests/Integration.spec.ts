import { describe, it, expect } from 'vitest';
import { defineComponent } from 'vue';
import { render, fireEvent, waitFor } from '@testing-library/vue';
import GMenu from '../Menu.vue';
import GMenuItem from '../MenuItem.vue';
import GMenuItemGroup from '../MenuItemGroup.vue';
import GSubMenu from '../MenuSub.vue';

/**
 * CRITICAL integration suite for WU7 (ep-extraction-v6): mounts all 4 REAL
 * menu components — `GMenu` > `GMenuItemGroup` > `GSubMenu` > `GMenuItem`,
 * multiple nesting levels, NOTHING mocked — to empirically prove the shared
 * `menuContextKey`/`subMenuContextKey` provide/inject handshake actually
 * works end-to-end (Design Decision 1). This is exactly the class of test
 * that would have caught WU5's (form-item) real production bug — reading
 * the source is not enough, the components must be mounted together.
 *
 * Fixture shape (mirrors ../front-b2b's real `MenuRoute/index.vue` usage —
 * `GMenuItemGroup` wrapping a `GSubMenu`, sibling `GSubMenu`s, nested
 * `GMenuItem`s):
 *
 *   <GMenu default-active="s1-a" unique-opened>
 *     <GMenuItemGroup title="Group 1">
 *       <GSubMenu index="s1">        (title: "Section 1")
 *         <GMenuItem index="s1-a" /> (title: "Item A")
 *       </GSubMenu>
 *     </GMenuItemGroup>
 *     <GSubMenu index="s2">          (title: "Section 2")
 *       <GMenuItem index="s2-a" />   (title: "Item B")
 *     </GSubMenu>
 *   </GMenu>
 */

const realTransition = { global: { stubs: { transition: false } } };

const Fixture = defineComponent({
  components: { GMenu, GMenuItem, GMenuItemGroup, GSubMenu },
  props: {
    defaultActive: { type: String, default: 's1-a' },
    uniqueOpened: { type: Boolean, default: true },
    collapse: { type: Boolean, default: false },
  },
  emits: ['select'],
  template: `
    <GMenu
      :default-active="defaultActive"
      :unique-opened="uniqueOpened"
      :collapse="collapse"
      @select="(...args) => $emit('select', ...args)"
    >
      <GMenuItemGroup title="Group 1">
        <GSubMenu index="s1">
          <template #title>Section 1</template>
          <GMenuItem index="s1-a">Item A</GMenuItem>
        </GSubMenu>
      </GMenuItemGroup>
      <GSubMenu index="s2">
        <template #title>Section 2</template>
        <GMenuItem index="s2-a">Item B</GMenuItem>
      </GSubMenu>
    </GMenu>
  `,
});

describe('Menu family integration (real Menu + MenuItemGroup + MenuSub + MenuItem, no mocks)', () => {
  it('active item highlighting propagates: the active GMenuItem AND its ancestor GSubMenu both carry is-active', async () => {
    const { getByText } = render(Fixture, {}, realTransition);
    const itemA = getByText('Item A').closest(
      'li.gui-menu-item',
    ) as HTMLElement;
    const section1 = getByText('Section 1').closest(
      'li.gui-sub-menu',
    ) as HTMLElement;
    expect(itemA).toHaveClass('is-active');
    // `GMenuItem`'s own `onMounted` registers into the parent `GSubMenu`'s
    // registry — visible on `GSubMenu` only after that reactive update flushes.
    await waitFor(() => {
      expect(section1).toHaveClass('is-active');
    });
  });

  it("indexPath transparently skips the GMenuItemGroup wrapper — Group 1 never appears in the select payload's indexPath", async () => {
    const { getByText, emitted } = render(Fixture, {}, realTransition);
    await fireEvent.click(getByText('Item A'));
    expect(emitted().select[0]).toEqual([
      's1-a',
      ['s1', 's1-a'],
      { index: 's1-a', indexPath: ['s1', 's1-a'] },
    ]);
  });

  it('ancestor sub menu auto-opens on mount when defaultActive points to one of its descendants (initMenu)', async () => {
    const { getByText } = render(Fixture, {}, realTransition);
    const section1 = getByText('Section 1').closest(
      'li.gui-sub-menu',
    ) as HTMLElement;
    await waitFor(() => {
      expect(section1).toHaveClass('is-opened');
    });
    const section2 = getByText('Section 2').closest(
      'li.gui-sub-menu',
    ) as HTMLElement;
    expect(section2).not.toHaveClass('is-opened');
  });

  it('uniqueOpened: opening Section 2 (a sibling outside indexPath ["s1"]) closes the already-open Section 1', async () => {
    const { getByText } = render(Fixture, {}, realTransition);
    const section1 = getByText('Section 1').closest(
      'li.gui-sub-menu',
    ) as HTMLElement;
    const section2 = getByText('Section 2').closest(
      'li.gui-sub-menu',
    ) as HTMLElement;

    await waitFor(() => expect(section1).toHaveClass('is-opened'));
    expect(section2).not.toHaveClass('is-opened');

    await fireEvent.click(getByText('Section 2'));

    await waitFor(() => {
      expect(section2).toHaveClass('is-opened');
      expect(section1).not.toHaveClass('is-opened');
    });
  });

  it('clicking a deeply-nested leaf item emits "select" with the full accumulated indexPath', async () => {
    const { getByText, emitted } = render(Fixture, {}, realTransition);
    await fireEvent.click(getByText('Section 2'));
    await fireEvent.click(getByText('Item B'));
    const selectCalls = emitted().select as unknown[][];
    const lastCall = selectCalls[selectCalls.length - 1];
    expect(lastCall).toEqual([
      's2-a',
      ['s2', 's2-a'],
      { index: 's2-a', indexPath: ['s2', 's2-a'] },
    ]);
  });

  it('toggling collapse=true clears every openedMenus entry, closing Section 1', async () => {
    const { getByText, rerender } = render(
      Fixture,
      { props: { collapse: false } },
      realTransition,
    );
    const section1 = getByText('Section 1').closest(
      'li.gui-sub-menu',
    ) as HTMLElement;
    await waitFor(() => expect(section1).toHaveClass('is-opened'));

    await rerender({
      defaultActive: 's1-a',
      uniqueOpened: true,
      collapse: true,
    });

    await waitFor(() => {
      expect(section1).not.toHaveClass('is-opened');
    });
  });
});
