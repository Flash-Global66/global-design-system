import { describe, it, expect } from 'vitest';
import { defineComponent } from 'vue';
import { render, fireEvent } from '@testing-library/vue';
import GMenu from '../Menu.vue';
import GMenuItem from '../MenuItem.vue';

/**
 * Regression suite for WU7 (ep-extraction-v6): `MenuItem.vue` previously
 * wrapped `ElMenuItem` from element-plus. This suite proves the native
 * render and the descendant half of the shared provide/inject handshake
 * (`menuContextKey`/`subMenuContextKey`).
 *
 * `@testing-library/vue`'s `emitted()` only reflects events emitted BY THE
 * ROOT rendered component (`@vue/test-utils`'s `wrapper.emitted()`
 * semantics) — since `<GMenu>`/`<GMenuItem>` are nested as children of an
 * anonymous test wrapper in most cases here, wrapper templates explicitly
 * re-emit the nested event (`@select="$emit('menu-select', ...)"`,
 * `@click="$emit('item-click', $event)"`) so assertions can read it off the
 * wrapper's own `emitted()`.
 */

describe('MenuItem (native render — sin ElMenuItem)', () => {
  it('throws a descriptive error when mounted without a <GMenu> ancestor (fail-fast context assertion)', () => {
    // eslint-disable-next-line no-console
    const originalError = console.error;
    // eslint-disable-next-line no-console
    console.error = () => {};
    expect(() => render(GMenuItem, { props: { index: '1' } })).toThrow(
      /can not inject root menu context/,
    );
    // eslint-disable-next-line no-console
    console.error = originalError;
  });

  it('renders a native <li role="menuitem">, no element-plus classes', () => {
    const { container } = render(
      defineComponent({
        components: { GMenu, GMenuItem },
        template: `<GMenu><GMenuItem index="1">Home</GMenuItem></GMenu>`,
      }),
    );
    const li = container.querySelector('li');
    expect(li).toBeTruthy();
    expect(li).toHaveAttribute('role', 'menuitem');
    expect(li).toHaveClass('gui-menu-item');
    expect(container.querySelector('[class*="el-menu"]')).toBeNull();
  });

  it('applies is-active when its index matches the menu defaultActive', () => {
    const { container } = render(
      defineComponent({
        components: { GMenu, GMenuItem },
        template: `
          <GMenu default-active="2">
            <GMenuItem index="1">One</GMenuItem>
            <GMenuItem index="2">Two</GMenuItem>
          </GMenu>
        `,
      }),
    );
    const items = container.querySelectorAll('li.gui-menu-item');
    expect(items[0]).not.toHaveClass('is-active');
    expect(items[1]).toHaveClass('is-active');
  });

  it('applies is-disabled and does not trigger select when disabled', async () => {
    const { container, getByText, emitted } = render(
      defineComponent({
        components: { GMenu, GMenuItem },
        template: `
          <GMenu @select="(...args) => $emit('menu-select', ...args)">
            <GMenuItem index="1" disabled>Disabled item</GMenuItem>
          </GMenu>
        `,
      }),
    );
    const li = container.querySelector('li') as HTMLElement;
    expect(li).toHaveClass('is-disabled');
    await fireEvent.click(getByText('Disabled item'));
    expect(emitted()['menu-select']).toBeUndefined();
  });

  it('clicking a non-disabled item bubbles "select" up through the root Menu', async () => {
    const { getByText, emitted } = render(
      defineComponent({
        components: { GMenu, GMenuItem },
        template: `
          <GMenu @select="(...args) => $emit('menu-select', ...args)">
            <GMenuItem index="1">Item One</GMenuItem>
          </GMenu>
        `,
      }),
    );
    await fireEvent.click(getByText('Item One'));
    expect(emitted()['menu-select'][0]).toEqual([
      '1',
      ['1'],
      { index: '1', indexPath: ['1'] },
    ]);
  });

  it('emits its own "click" event with the registered item payload', async () => {
    const { getByText, emitted } = render(
      defineComponent({
        components: { GMenu, GMenuItem },
        template: `
          <GMenu>
            <GMenuItem index="1" @click="$emit('item-click', $event)">Item One</GMenuItem>
          </GMenu>
        `,
      }),
    );
    await fireEvent.click(getByText('Item One'));
    const payload = emitted()['item-click']?.[0]?.[0] as { index: string };
    expect(payload.index).toBe('1');
  });

  describe('keyboard access', () => {
    it('is focusable with tabindex="0", or "-1" when disabled', () => {
      const { container } = render(
        defineComponent({
          components: { GMenu, GMenuItem },
          template: `
            <GMenu>
              <GMenuItem index="1">Enabled</GMenuItem>
              <GMenuItem index="2" disabled>Disabled</GMenuItem>
            </GMenu>
          `,
        }),
      );
      const [enabled, disabled] = Array.from(
        container.querySelectorAll('li.gui-menu-item'),
      );
      expect(enabled).toHaveAttribute('tabindex', '0');
      expect(disabled).toHaveAttribute('tabindex', '-1');
      expect(disabled).toHaveAttribute('aria-disabled', 'true');
    });

    it.each([
      ['Enter', 'Enter'],
      ['Space', ' '],
    ])(
      '%s behaves like a click: emits "click" and selects the item',
      async (_label, key) => {
        const { getByRole, emitted } = render(
          defineComponent({
            components: { GMenu, GMenuItem },
            template: `
            <GMenu @select="(...args) => $emit('menu-select', ...args)">
              <GMenuItem index="1" @click="$emit('item-click', $event)">Item One</GMenuItem>
            </GMenu>
          `,
          }),
        );
        await fireEvent.keyDown(getByRole('menuitem', { name: 'Item One' }), {
          key,
        });
        expect(emitted()['item-click']).toHaveLength(1);
        expect(emitted()['menu-select'][0]).toEqual([
          '1',
          ['1'],
          { index: '1', indexPath: ['1'] },
        ]);
      },
    );

    it('ignores other keys', async () => {
      const { getByRole, emitted } = render(
        defineComponent({
          components: { GMenu, GMenuItem },
          template: `
            <GMenu @select="(...args) => $emit('menu-select', ...args)">
              <GMenuItem index="1">Item One</GMenuItem>
            </GMenu>
          `,
        }),
      );
      await fireEvent.keyDown(getByRole('menuitem'), { key: 'a' });
      expect(emitted()['menu-select']).toBeUndefined();
    });

    it('a disabled item ignores Enter and Space', async () => {
      const { getByRole, emitted } = render(
        defineComponent({
          components: { GMenu, GMenuItem },
          template: `
            <GMenu @select="(...args) => $emit('menu-select', ...args)">
              <GMenuItem index="1" disabled @click="$emit('item-click', $event)">Item One</GMenuItem>
            </GMenu>
          `,
        }),
      );
      const li = getByRole('menuitem');
      await fireEvent.keyDown(li, { key: 'Enter' });
      await fireEvent.keyDown(li, { key: ' ' });
      expect(emitted()['menu-select']).toBeUndefined();
      expect(emitted()['item-click']).toBeUndefined();
    });

    it('does not fire twice when the key comes from a focusable child (e.g. a link)', async () => {
      const { getByText, emitted } = render(
        defineComponent({
          components: { GMenu, GMenuItem },
          template: `
            <GMenu @select="(...args) => $emit('menu-select', ...args)">
              <GMenuItem index="1"><a href="#home">Link</a></GMenuItem>
            </GMenu>
          `,
        }),
      );
      await fireEvent.keyDown(getByText('Link'), { key: 'Enter' });
      expect(emitted()['menu-select']).toBeUndefined();
    });
  });

  describe('accessible name', () => {
    const collapsedMenu = (collapse: boolean) =>
      defineComponent({
        components: { GMenu, GMenuItem },
        setup: () => ({ collapse }),
        template: `
          <GMenu :collapse="collapse">
            <GMenuItem index="1">
              <i class="icon" />
              <template #title>Home</template>
            </GMenuItem>
          </GMenu>
        `,
      });

    it('collapsed: a first-level item with a title slot is named by that title', () => {
      const { getByRole, container } = render(collapsedMenu(true));
      expect(getByRole('menuitem', { name: 'Home' })).toHaveClass(
        'gui-menu-item',
      );
      expect(
        container.querySelector('.gui-menu-item__sr-label'),
      ).toHaveTextContent('Home');
    });

    it('expanded: the visible title names the item and no hidden label is added', () => {
      const { getByRole, getAllByText, container } = render(
        collapsedMenu(false),
      );
      expect(getByRole('menuitem', { name: 'Home' })).toBeInTheDocument();
      expect(getAllByText('Home')).toHaveLength(1);
      expect(container.querySelector('.gui-menu-item__sr-label')).toBeNull();
    });
  });
});
