import { describe, it, expect } from 'vitest';
import { defineComponent, h, inject } from 'vue';
import { render, fireEvent, waitFor } from '@testing-library/vue';
import GMenu from '../Menu.vue';
import { menuContextKey, subMenuContextKey } from '../constants';

/**
 * Regression suite for WU7 (ep-extraction-v6): `Menu.vue` previously wrapped
 * `ElMenu` from element-plus. This suite proves the native render (no
 * `element-plus` involved) and the ROOT half of the shared provide/inject
 * state machine (`menuContextKey`/`subMenuContextKey`, Design Decision 1).
 * The full multi-component handshake (Menu + MenuItemGroup + MenuSub +
 * MenuItem, real, nested) is covered separately in `Integration.spec.ts`.
 */

const realTransition = { global: { stubs: { transition: false } } };

const ContextProbe = defineComponent({
  setup() {
    const rootMenu = inject(menuContextKey, undefined);
    const subMenu = inject(subMenuContextKey, undefined);
    return () =>
      h('span', {
        'data-testid': 'probe',
        'data-mode': rootMenu?.props.mode,
        'data-collapse': String(!!rootMenu?.props.collapse),
        'data-active-index': rootMenu?.activeIndex.value,
        'data-level': subMenu?.level,
        'data-index-path': JSON.stringify(subMenu?.indexPath),
      });
  },
});

describe('Menu (native render — sin ElMenu)', () => {
  it('renders a native <ul role="menubar"> wrapped in .gui-menu-wrapper, no element-plus classes', () => {
    const { container } = render(GMenu);
    expect(container.querySelector('.gui-menu-wrapper')).toBeTruthy();
    const ul = container.querySelector('ul');
    expect(ul).toBeTruthy();
    expect(ul).toHaveAttribute('role', 'menubar');
    expect(ul).toHaveClass('gui-menu');
    expect(container.querySelector('[class*="el-menu"]')).toBeNull();
  });

  it('defaults to mode="vertical" and applies the gui-menu--vertical class', () => {
    const { container } = render(GMenu);
    expect(container.querySelector('ul')).toHaveClass('gui-menu--vertical');
  });

  it('applies gui-menu--horizontal when mode="horizontal"', () => {
    const { container } = render(GMenu, { props: { mode: 'horizontal' } });
    expect(container.querySelector('ul')).toHaveClass('gui-menu--horizontal');
    expect(container.querySelector('ul')).not.toHaveClass('gui-menu--vertical');
  });

  it('applies the gui-menu--collapse modifier and not is-collapse when collapse=true', () => {
    const { container } = render(GMenu, { props: { collapse: true } });
    const ul = container.querySelector('ul');
    expect(ul).toHaveClass('gui-menu--collapse');
    expect(ul).not.toHaveClass('is-collapse');
  });

  it('applies neither gui-menu--collapse nor is-collapse when collapse=false', () => {
    const { container } = render(GMenu, { props: { collapse: false } });
    const ul = container.querySelector('ul');
    expect(ul).not.toHaveClass('gui-menu--collapse');
    expect(ul).not.toHaveClass('is-collapse');
  });

  it('renders the default slot', () => {
    const { getByText } = render(GMenu, { slots: { default: 'contenido' } });
    expect(getByText('contenido')).toBeInTheDocument();
  });

  it('provides menuContextKey with props + activeIndex reflecting defaultActive', () => {
    const { getByTestId } = render(GMenu, {
      props: { defaultActive: '1', mode: 'horizontal', collapse: true },
      slots: { default: () => h(ContextProbe) },
    });
    const probe = getByTestId('probe');
    expect(probe).toHaveAttribute('data-mode', 'horizontal');
    expect(probe).toHaveAttribute('data-collapse', 'true');
    expect(probe).toHaveAttribute('data-active-index', '1');
  });

  it('provides subMenuContextKey at level 0 with an empty indexPath for direct descendants', () => {
    const { getByTestId } = render(GMenu, {
      slots: { default: () => h(ContextProbe) },
    });
    const probe = getByTestId('probe');
    expect(probe).toHaveAttribute('data-level', '0');
    expect(probe).toHaveAttribute('data-index-path', '[]');
  });

  it('emits "open"/"close" when a descendant calls the injected openMenu/closeMenu', async () => {
    const Trigger = defineComponent({
      setup() {
        const rootMenu = inject(menuContextKey, undefined);
        return () =>
          h('button', {
            'data-testid': 'trigger',
            onClick: () => {
              rootMenu?.openMenu('1', ['1']);
              rootMenu?.closeMenu('1', ['1']);
            },
          });
      },
    });
    const { getByTestId, emitted } = render(GMenu, {
      slots: { default: () => h(Trigger) },
    });
    (getByTestId('trigger') as HTMLElement).click();
    expect(emitted().open[0]).toEqual(['1', ['1']]);
    expect(emitted().close[0]).toEqual(['1', ['1']]);
  });

  it('emits "select" when a descendant calls the injected handleMenuItemClick', async () => {
    const Trigger = defineComponent({
      setup() {
        const rootMenu = inject(menuContextKey, undefined);
        return () =>
          h('button', {
            'data-testid': 'trigger',
            onClick: () =>
              rootMenu?.handleMenuItemClick({ index: '2', indexPath: ['2'] }),
          });
      },
    });
    const { getByTestId, emitted } = render(GMenu, {
      slots: { default: () => h(Trigger) },
    });
    (getByTestId('trigger') as HTMLElement).click();
    expect(emitted().select[0]).toEqual([
      '2',
      ['2'],
      { index: '2', indexPath: ['2'] },
    ]);
  });

  it('uniqueOpened: opening a sibling closes the previously opened one', async () => {
    const Trigger = defineComponent({
      setup() {
        const rootMenu = inject(menuContextKey, undefined);
        return () =>
          h('div', [
            h('button', {
              'data-testid': 'open-a',
              onClick: () => rootMenu?.openMenu('a', ['a']),
            }),
            h('button', {
              'data-testid': 'open-b',
              onClick: () => rootMenu?.openMenu('b', ['b']),
            }),
            h('span', {
              'data-testid': 'opened',
              'data-value': JSON.stringify(rootMenu?.openedMenus.value),
            }),
          ]);
      },
    });
    const { getByTestId } = render(GMenu, {
      props: { uniqueOpened: true },
      slots: { default: () => h(Trigger) },
    });
    await fireEvent.click(getByTestId('open-a'));
    await fireEvent.click(getByTestId('open-b'));
    expect(getByTestId('opened')).toHaveAttribute('data-value', '["b"]');
  });

  it('collapse=true clears openedMenus (watch on props.collapse)', async () => {
    const Trigger = defineComponent({
      setup() {
        const rootMenu = inject(menuContextKey, undefined);
        return () =>
          h('span', {
            'data-testid': 'opened',
            'data-value': JSON.stringify(rootMenu?.openedMenus.value),
          });
      },
    });
    const { getByTestId, rerender } = render(GMenu, {
      props: { collapse: false, defaultOpeneds: ['x'] },
      slots: { default: () => h(Trigger) },
    });
    expect(getByTestId('opened')).toHaveAttribute('data-value', '["x"]');
    await rerender({ collapse: true, defaultOpeneds: ['x'] });
    expect(getByTestId('opened')).toHaveAttribute('data-value', '[]');
  });

  describe('collapse width animation (collapseTransition)', () => {
    it('collapseTransition defaults to true: toggling collapse remounts the ul and fixes inline width + horizontal-collapse-transition on the leaving one', async () => {
      const { container, rerender } = render(GMenu, {
        props: { collapse: false },
        ...realTransition,
      });
      const leavingUl = container.querySelector('ul') as HTMLElement;

      await rerender({ collapse: true });

      expect(leavingUl).toHaveClass('horizontal-collapse-transition');
      expect(leavingUl.style.width).toBe('0px');
      expect(leavingUl.style.overflow).toBe('hidden');
      expect(leavingUl).toHaveClass('gui-menu--vertical');
      expect(leavingUl).not.toHaveClass('gui-menu--collapse');
    });

    it('swaps the leaving ul for a new one carrying the collapse modifier', async () => {
      const { container, rerender } = render(GMenu, {
        props: { collapse: false },
        ...realTransition,
      });
      const leavingUl = container.querySelector('ul');

      await rerender({ collapse: true });

      await waitFor(() => {
        expect(container.querySelector('ul.gui-menu--collapse')).toBeTruthy();
      });
      expect(container.querySelectorAll('ul')).toHaveLength(1);
      expect(container.querySelector('ul')).not.toBe(leavingUl);
    });

    it('cleans the enter inline opacity and the opacity class once entered', async () => {
      const { container, rerender } = render(GMenu, {
        props: { collapse: false },
        ...realTransition,
      });

      await rerender({ collapse: true });

      await waitFor(() => {
        const uls = container.querySelectorAll('ul');
        expect(uls).toHaveLength(1);
        expect(uls[0]).toHaveClass('gui-menu--collapse');
        expect(uls[0].style.opacity).toBe('');
        expect(uls[0]).not.toHaveClass('gui-opacity-transition');
        expect(uls[0]).not.toHaveClass('horizontal-collapse-transition');
      });
    });

    it('keeps the slot content mounted after the transition', async () => {
      const { getByTestId, container, rerender } = render(GMenu, {
        props: { collapse: false },
        slots: { default: () => h(ContextProbe) },
        ...realTransition,
      });

      await rerender({ collapse: true });

      await waitFor(() => {
        expect(container.querySelector('ul.gui-menu--collapse')).toBeTruthy();
      });
      expect(getByTestId('probe')).toHaveAttribute('data-collapse', 'true');
    });

    it('collapseTransition=false: the same ul changes state with no animation class or inline width', async () => {
      const { container, rerender } = render(GMenu, {
        props: { collapse: false, collapseTransition: false },
        ...realTransition,
      });
      const ul = container.querySelector('ul') as HTMLElement;

      await rerender({ collapse: true, collapseTransition: false });

      expect(container.querySelectorAll('ul')).toHaveLength(1);
      expect(container.querySelector('ul')).toBe(ul);
      expect(ul).toHaveClass('gui-menu--collapse');
      expect(ul).not.toHaveClass('horizontal-collapse-transition');
      expect(ul).not.toHaveClass('gui-opacity-transition');
      expect(ul.style.width).toBe('');
      expect(ul.style.opacity).toBe('');
    });
  });
});
