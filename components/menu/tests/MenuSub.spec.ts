import { describe, it, expect } from 'vitest';
import { defineComponent } from 'vue';
import { render, fireEvent, waitFor } from '@testing-library/vue';
import GMenu from '../Menu.vue';
import GMenuItem from '../MenuItem.vue';
import GSubMenu from '../MenuSub.vue';

/**
 * Regression suite for WU7 (ep-extraction-v6): `MenuSub.vue` previously
 * wrapped `ElSubMenu` from element-plus. This suite proves the native
 * render and the two rendering branches (inline accordion for
 * `mode="vertical"` without `collapse`, popup via `<g-tooltip>` otherwise),
 * both driven off the shared `menuContextKey`/`subMenuContextKey` state
 * machine — no `element-plus` import anywhere.
 *
 * `<transition>` is stubbed out via `global: { stubs: { transition: false } }`
 * so the ported collapse-transition JS hooks actually run (matching the
 * WU6/popover precedent — `@vue/test-utils` stubs `Transition` by default).
 */

const realTransition = { global: { stubs: { transition: false } } };

describe('MenuSub (native render — sin ElSubMenu)', () => {
  it('throws a descriptive error when mounted without a <GMenu> ancestor', () => {
    // eslint-disable-next-line no-console
    const originalError = console.error;
    // eslint-disable-next-line no-console
    console.error = () => {};
    expect(() => render(GSubMenu, { props: { index: '1' } })).toThrow(
      /can not inject root menu context/,
    );
    // eslint-disable-next-line no-console
    console.error = originalError;
  });

  it('renders a native <li role="menuitem" aria-haspopup="true">, no element-plus classes', () => {
    const { container } = render(
      defineComponent({
        components: { GMenu, GSubMenu, GMenuItem },
        template: `
          <GMenu>
            <GSubMenu index="s1">
              <template #title>Section</template>
              <GMenuItem index="s1-a">Child</GMenuItem>
            </GSubMenu>
          </GMenu>
        `,
      }),
      realTransition,
    );
    const li = container.querySelector('li.gui-sub-menu');
    expect(li).toBeTruthy();
    expect(li).toHaveAttribute('role', 'menuitem');
    expect(li).toHaveAttribute('aria-haspopup', 'true');
    expect(container.querySelector('[class*="el-menu"]')).toBeNull();
  });

  describe('inline mode (vertical, not collapsed — real ../front-b2b usage)', () => {
    it('renders the title and an inline <ul role="menu"> hidden by default (v-show)', () => {
      const { container, getByText } = render(
        defineComponent({
          components: { GMenu, GSubMenu, GMenuItem },
          template: `
            <GMenu>
              <GSubMenu index="s1">
                <template #title>Section</template>
                <GMenuItem index="s1-a">Child</GMenuItem>
              </GSubMenu>
            </GMenu>
          `,
        }),
        realTransition,
      );
      expect(getByText('Section')).toBeInTheDocument();
      const submenuUl = container.querySelector('ul[role="menu"]');
      expect(submenuUl).toBeTruthy();
      expect(submenuUl).not.toBeVisible();
    });

    it('clicking the title toggles the sub menu open (is-opened + visible inline ul)', async () => {
      const { container, getByText } = render(
        defineComponent({
          components: { GMenu, GSubMenu, GMenuItem },
          template: `
            <GMenu>
              <GSubMenu index="s1">
                <template #title>Section</template>
                <GMenuItem index="s1-a">Child</GMenuItem>
              </GSubMenu>
            </GMenu>
          `,
        }),
        realTransition,
      );
      const li = container.querySelector('li.gui-sub-menu') as HTMLElement;
      expect(li).not.toHaveClass('is-opened');
      await fireEvent.click(getByText('Section'));
      await waitFor(() => {
        expect(li).toHaveClass('is-opened');
        expect(container.querySelector('ul[role="menu"]')).toBeVisible();
      });
      await fireEvent.click(getByText('Section'));
      await waitFor(() => {
        expect(li).not.toHaveClass('is-opened');
      });
    });
  });

  describe('popup mode (horizontal, or vertical+collapse)', () => {
    it('renders the popup content via g-tooltip instead of an inline accordion ul', () => {
      const { container } = render(
        defineComponent({
          components: { GMenu, GSubMenu, GMenuItem },
          template: `
            <GMenu mode="horizontal">
              <GSubMenu index="s1" :teleported="false">
                <template #title>Section</template>
                <GMenuItem index="s1-a">Child</GMenuItem>
              </GSubMenu>
            </GMenu>
          `,
        }),
        realTransition,
      );
      // no inline accordion <ul role="menu"> in horizontal/popup mode
      expect(container.querySelector('ul[role="menu"]')).toBeNull();
      // the tooltip's popper content carries the popup-container marker class
      expect(
        container.querySelector('.gui-menu--popup-container'),
      ).toBeTruthy();
    });
  });

  it('reports is-active when a nested descendant item is active', async () => {
    const { container } = render(
      defineComponent({
        components: { GMenu, GSubMenu, GMenuItem },
        template: `
          <GMenu default-active="s1-a">
            <GSubMenu index="s1">
              <template #title>Section</template>
              <GMenuItem index="s1-a">Child</GMenuItem>
            </GSubMenu>
          </GMenu>
        `,
      }),
      realTransition,
    );
    // The nested `GMenuItem` registers itself into the parent `GSubMenu`'s
    // `subMenus` registry from its own `onMounted` — which fires AFTER
    // `GSubMenu`'s initial render, so the resulting reactive update is only
    // visible after a tick.
    await waitFor(() => {
      expect(container.querySelector('li.gui-sub-menu')).toHaveClass(
        'is-active',
      );
    });
  });

  describe('--gui-menu-level CSS var propagation (Fix 1 regression)', () => {
    /**
     * Real EP's `sub-menu.mjs` calls
     * `useMenuCssVar(rootMenu.props, subMenu.level + 1)` and binds the
     * result as `:style` on EVERY `<ul>` it renders. Before this fix,
     * `MenuSub.vue` never bound this at all — every nested submenu's items
     * inherited `--gui-menu-level: 0` from `Menu.vue`'s own root `<ul>` via
     * the CSS cascade (no fallback default in `menu.styles.scss`'s
     * `padding-left: calc(base + var(--gui-menu-level) * level-padding)`),
     * so nested items never got progressively deeper indentation. This test
     * mounts 3 levels of nested `GSubMenu` and asserts each rendered
     * `<ul>`'s `--gui-menu-level` inline style increases by 1 per level —
     * BEFORE the fix these nested `<ul>`s carried no `--gui-menu-level`
     * style at all (falling back to the root's `0` via cascade); AFTER the
     * fix they carry `1`, `2`, `3` respectively.
     */
    it('increases --gui-menu-level by 1 at each nesting level', () => {
      const { container } = render(
        defineComponent({
          components: { GMenu, GSubMenu, GMenuItem },
          template: `
            <GMenu>
              <GSubMenu index="s1">
                <template #title>Level 1</template>
                <GSubMenu index="s1-1">
                  <template #title>Level 2</template>
                  <GSubMenu index="s1-1-1">
                    <template #title>Level 3</template>
                    <GMenuItem index="s1-1-1-a">Leaf</GMenuItem>
                  </GSubMenu>
                </GSubMenu>
              </GSubMenu>
            </GMenu>
          `,
        }),
        realTransition,
      );

      const rootUl = container.querySelector(
        'ul.gui-menu[role="menubar"]',
      ) as HTMLElement;
      // Document order === nesting order for the inline-accordion branch:
      // s1's own inline <ul>, then s1-1's, then s1-1-1's.
      const nestedUls = Array.from(
        container.querySelectorAll('ul.gui-menu[role="menu"]'),
      ) as HTMLElement[];

      expect(nestedUls).toHaveLength(3);
      expect(rootUl.style.getPropertyValue('--gui-menu-level')).toBe('0');
      expect(nestedUls[0].style.getPropertyValue('--gui-menu-level')).toBe('1');
      expect(nestedUls[1].style.getPropertyValue('--gui-menu-level')).toBe('2');
      expect(nestedUls[2].style.getPropertyValue('--gui-menu-level')).toBe('3');
    });
  });
});
