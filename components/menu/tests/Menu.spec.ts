import { describe, it, expect } from 'vitest';
import { defineComponent, h, inject } from 'vue';
import { render, fireEvent } from '@testing-library/vue';
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

  it('applies gui-menu-wrapper--collapse to the root div when collapse=true', () => {
    const { container } = render(GMenu, { props: { collapse: true } });
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveClass('gui-menu-wrapper');
    expect(wrapper).toHaveClass('gui-menu-wrapper--collapse');
  });

  it('applies only gui-menu-wrapper to the root div when collapse=false', () => {
    const { container } = render(GMenu, { props: { collapse: false } });
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveClass('gui-menu-wrapper');
    expect(wrapper).not.toHaveClass('gui-menu-wrapper--collapse');
  });

  it('keeps a consumer class next to gui-menu-wrapper--collapse on the root div', () => {
    const { container } = render(GMenu, {
      props: { collapse: true },
      attrs: { class: 'wrapper-menu-route px-4 py-5 bg-white' },
    });
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveClass(
      'gui-menu-wrapper',
      'gui-menu-wrapper--collapse',
      'wrapper-menu-route',
      'px-4',
      'py-5',
      'bg-white',
    );
  });

  it('applies gui-menu-wrapper--animated to the root div by default', () => {
    const { container } = render(GMenu);
    expect(container.firstElementChild).toHaveClass(
      'gui-menu-wrapper--animated',
    );
  });

  it('omits gui-menu-wrapper--animated when collapseTransition=false', () => {
    const { container } = render(GMenu, {
      props: { collapseTransition: false },
    });
    expect(container.firstElementChild).not.toHaveClass(
      'gui-menu-wrapper--animated',
    );
  });

  it('keeps --animated next to --collapse and a consumer class on the root div', () => {
    const { container } = render(GMenu, {
      props: { collapse: true, collapseTransition: true },
      attrs: { class: 'wrapper-menu-route px-4' },
    });
    expect(container.firstElementChild).toHaveClass(
      'gui-menu-wrapper',
      'gui-menu-wrapper--collapse',
      'gui-menu-wrapper--animated',
      'wrapper-menu-route',
      'px-4',
    );
  });

  it('keeps --collapse without --animated and the consumer class when collapseTransition=false', () => {
    const { container } = render(GMenu, {
      props: { collapse: true, collapseTransition: false },
      attrs: { class: 'wrapper-menu-route' },
    });
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveClass(
      'gui-menu-wrapper--collapse',
      'wrapper-menu-route',
    );
    expect(wrapper).not.toHaveClass('gui-menu-wrapper--animated');
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

  it('keeps the same ul and adds no inline width or transition class when collapse toggles with the default collapseTransition', async () => {
    const { container, rerender } = render(GMenu, {
      props: { collapse: false },
    });
    const ul = container.querySelector('ul') as HTMLElement;

    await rerender({ collapse: true });

    expect(container.querySelector('ul')).toBe(ul);
    expect(ul).toHaveClass('gui-menu--collapse');
    expect(ul).not.toHaveClass('horizontal-collapse-transition');
    expect(ul.style.width).toBe('');
  });
});
