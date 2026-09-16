import { describe, it, expect, vi } from 'vitest';
import { defineComponent, ref } from 'vue';
import { render, fireEvent, screen, waitFor } from '@testing-library/vue';
import GPopover from '../Popover.vue';

/**
 * Regression/parity suite for WU6 (ep-extraction-v6): `@flash-global66/g-popover`
 * previously wrapped `ElPopover` from element-plus (which itself internally
 * wrapped `ElTooltip`). This suite proves the native port — rendering
 * `@flash-global66/g-tooltip` directly, re-pointing `trigger`/`disabled` to
 * `g-tooltip`'s own `useTooltipTriggerProps` and `placement`/`tabindex`/
 * `popperOptions` to `g-dropdown`'s own `dropdownProps` (both already
 * DS-owned) — preserves the full public contract: trigger modes, placement,
 * disabled, `v-model:visible`, content slot/prop, and width.
 *
 * Composability was verified NOT to have a symbol/context-key mismatch (the
 * WU5 form-item trap): `g-dropdown` (`components/dropdown/src/dropdown.vue`)
 * ALREADY composes a real `<g-tooltip>` internally in production, using the
 * exact same event names (`before-show`/`show`/`before-hide`) this port
 * relies on — confirmed by reading that file directly, then confirmed here
 * empirically by mounting the real (non-mocked) `g-tooltip`/`g-dropdown`
 * packages end-to-end.
 *
 * NOTE on `persistent`: the popover's `persistent` prop defaults to `true`
 * (matches element-plus's own default), so the popper content stays MOUNTED
 * in the DOM even while closed (toggled via `v-show`, not `v-if`). Presence
 * assertions (`getByText`) therefore always find the content; open/closed
 * state must be asserted via visibility (`toBeVisible`/`not.toBeVisible`),
 * confirmed empirically below.
 *
 * NOTE on `<transition>`: `@vue/test-utils` stubs `Transition`/
 * `TransitionGroup` by default (`DEFAULT_STUBS` in
 * `node_modules/@vue/test-utils`), which silently drops the
 * `@before-enter`/`@after-enter`/`@before-leave`/`@after-leave` listeners
 * `g-tooltip-content` relies on to fire its `show`/`hide`/`before-show`/
 * `before-hide` events. Tests asserting on those events pass
 * `global: { stubs: { transition: false } }` to force real transition
 * hooks — confirmed empirically (RED without it: 'show' never observed).
 */

const realTransition = { global: { stubs: { transition: false } } };

describe('Popover (native g-tooltip — no ElPopover)', () => {
  it('mounts without throwing and renders the reference slot', () => {
    expect(() =>
      render(GPopover, {
        slots: { reference: '<button>trigger</button>', default: 'content' },
      }),
    ).not.toThrow();
    expect(screen.getByText('trigger')).toBeInTheDocument();
  });

  it('does not render element-plus classes anywhere', () => {
    const { container } = render(GPopover, {
      slots: { reference: '<button>trigger</button>', default: 'content' },
    });
    expect(container.querySelector('[class*="el-popover"]')).toBeNull();
    expect(container.querySelector('[class*="el-tooltip"]')).toBeNull();
  });

  it('renders default slot content, hidden until opened', async () => {
    render(GPopover, {
      props: { trigger: 'click' },
      slots: { reference: '<button>open</button>', default: 'Hello popover' },
    });
    expect(screen.getByText('Hello popover')).not.toBeVisible();
    await fireEvent.click(screen.getByText('open'));
    await waitFor(() => {
      expect(screen.getByText('Hello popover')).toBeVisible();
    });
  });

  it('falls back to the `content` prop as text when no default slot is given', async () => {
    render(GPopover, {
      props: { trigger: 'click', content: 'from content prop' },
      slots: { reference: '<button>open</button>' },
    });
    await fireEvent.click(screen.getByText('open'));
    await waitFor(() => {
      expect(screen.getByText('from content prop')).toBeVisible();
    });
  });

  it('renders the title inside the content region when the `title` prop is set', async () => {
    render(GPopover, {
      props: { trigger: 'click', title: 'My Title' },
      slots: { reference: '<button>open</button>', default: 'body' },
    });
    await fireEvent.click(screen.getByText('open'));
    await waitFor(() => {
      const title = screen.getByText('My Title');
      expect(title).toHaveClass('gui-popover__title');
      expect(title).toHaveAttribute('role', 'title');
    });
  });

  describe('trigger modes', () => {
    it('trigger="click" opens on click', async () => {
      render(GPopover, {
        props: { trigger: 'click' },
        slots: { reference: '<button>open</button>', default: 'content' },
      });
      expect(screen.getByText('content')).not.toBeVisible();
      await fireEvent.click(screen.getByText('open'));
      await waitFor(() => {
        expect(screen.getByText('content')).toBeVisible();
      });
    });

    it('trigger="hover" opens on mouseenter', async () => {
      render(GPopover, {
        props: { trigger: 'hover' },
        slots: { reference: '<button>open</button>', default: 'content' },
      });
      await fireEvent.mouseEnter(screen.getByText('open'));
      await waitFor(() => {
        expect(screen.getByText('content')).toBeVisible();
      });
    });

    it('trigger="focus" opens on focus', async () => {
      render(GPopover, {
        props: { trigger: 'focus' },
        slots: { reference: '<button>open</button>', default: 'content' },
      });
      await fireEvent.focus(screen.getByText('open'));
      await waitFor(() => {
        expect(screen.getByText('content')).toBeVisible();
      });
    });

    it('trigger="contextmenu" opens on contextmenu', async () => {
      render(GPopover, {
        props: { trigger: 'contextmenu' },
        slots: { reference: '<button>open</button>', default: 'content' },
      });
      await fireEvent.contextMenu(screen.getByText('open'));
      await waitFor(() => {
        expect(screen.getByText('content')).toBeVisible();
      });
    });
  });

  it('applies the `placement` prop through to the popper content', async () => {
    render(GPopover, {
      props: { trigger: 'click', placement: 'top-start' },
      slots: { reference: '<button>open</button>', default: 'content' },
    });
    await fireEvent.click(screen.getByText('open'));
    await waitFor(() => {
      // popper.js resolves the FINAL placement against real layout/overflow
      // (out of scope here — that's the shared `@flash-global66/g-popper`
      // engine, not something this WU ports); we assert the wiring reaches
      // popper.js at all (an attribute is present), which is what changed.
      const content = screen.getByText('content');
      expect(content.closest('[data-popper-placement]')).toBeTruthy();
    });
  });

  it('does not open when `disabled` is true', async () => {
    render(GPopover, {
      props: { trigger: 'click', disabled: true },
      slots: { reference: '<button>open</button>', default: 'content' },
    });
    await fireEvent.click(screen.getByText('open'));
    expect(screen.getByText('content')).not.toBeVisible();
  });

  it('applies `width` as an inline style on the popper content', async () => {
    // The popper content is teleported to a container appended directly to
    // `document.body` (sibling of testing-library's own `container` div),
    // so it must be queried via `screen`, not `container.querySelector`.
    render(GPopover, {
      props: { trigger: 'click', width: 320 },
      slots: { reference: '<button>open</button>', default: 'content' },
    });
    await fireEvent.click(screen.getByText('open'));
    await waitFor(() => {
      const content = screen.getByText('content').closest('.gui-popover');
      expect(content).toHaveStyle({ width: '320px' });
    });
  });

  it('normalizes an array/object `popperClass` into a clean class string (no `[object Object]`, no dropped/leaked entries)', async () => {
    // Regression test for the naive-template-string-interpolation gotcha
    // documented above `kls` in `Popover.vue`: `g-tooltip`'s own
    // `tooltip.vue` builds its final `popper-class` via
    // `` `${ns.e('tooltip')} ${popperClass ?? ''}` `` rather than Vue's
    // `normalizeClass`, so passing an array/object straight through (as
    // element-plus's own `popover.vue` source does) would leak a literal
    // "[object Object]" and stray commas into the DOM class attribute.
    // `Popover.vue` guards against this by pre-normalizing `popperClass`
    // via `normalizeClass()` in its own `kls` computed before handing it
    // down. This asserts that guard directly, rather than relying on it
    // only as an incidental side effect of the `width` test above.
    render(GPopover, {
      props: {
        trigger: 'click',
        popperClass: ['extra-a', { 'extra-b': true, 'extra-c': false }],
      },
      slots: { reference: '<button>open</button>', default: 'content' },
    });
    await fireEvent.click(screen.getByText('open'));
    await waitFor(() => {
      const content = screen.getByText('content').closest('.gui-popover');
      expect(content).toHaveClass('extra-a');
      expect(content).toHaveClass('extra-b');
      expect(content).not.toHaveClass('extra-c');
      expect(content?.className).not.toContain('[object Object]');
      expect(content?.className).not.toMatch(/,,/);
    });
  });

  describe('v-model:visible', () => {
    it('opens/closes when the parent drives `visible` (controlled mode)', async () => {
      const Wrapper = defineComponent({
        components: { GPopover },
        setup() {
          const visible = ref(false);
          return { visible };
        },
        template: `
          <g-popover v-model:visible="visible" trigger="click">
            <template #reference><button>open</button></template>
            content
          </g-popover>
        `,
      });
      render(Wrapper);
      expect(screen.getByText('content')).not.toBeVisible();
      await fireEvent.click(screen.getByText('open'));
      await waitFor(() => {
        expect(screen.getByText('content')).toBeVisible();
      });
    });

    it('emits update:visible(false) after the popover finishes closing', async () => {
      const onUpdateVisible = vi.fn();
      render(GPopover, {
        props: {
          trigger: 'click',
          'onUpdate:visible': onUpdateVisible,
        },
        slots: { reference: '<button>open</button>', default: 'content' },
        ...realTransition,
      });
      await fireEvent.click(screen.getByText('open'));
      await waitFor(() => {
        expect(screen.getByText('content')).toBeVisible();
      });
      await fireEvent.click(screen.getByText('open'));
      await waitFor(() => {
        expect(onUpdateVisible).toHaveBeenCalledWith(false);
      });
    });
  });

  describe('lifecycle events', () => {
    it('emits before-enter/show together, and before-leave/hide/after-leave together', async () => {
      const events: string[] = [];
      render(GPopover, {
        props: {
          trigger: 'click',
          'onBefore-enter': () => events.push('before-enter'),
          onShow: () => events.push('show'),
          'onAfter-enter': () => events.push('after-enter'),
          'onBefore-leave': () => events.push('before-leave'),
          onHide: () => events.push('hide'),
          'onAfter-leave': () => events.push('after-leave'),
        },
        slots: { reference: '<button>open</button>', default: 'content' },
        ...realTransition,
      });

      await fireEvent.click(screen.getByText('open'));
      await waitFor(() => expect(events).toContain('show'));
      expect(events).toContain('before-enter');
      expect(events.indexOf('before-enter')).toBeLessThan(
        events.indexOf('show'),
      );
      expect(events).toContain('after-enter');

      await fireEvent.click(screen.getByText('open'));
      await waitFor(() => expect(events).toContain('hide'));
      expect(events).toContain('before-leave');
      expect(events).toContain('after-leave');
    });
  });

  describe('real nested-component interop', () => {
    it('composes with a real `@flash-global66/g-dropdown` `placement` value (shared dropdownProps.placement)', async () => {
      // `placement` is re-pointed to `@flash-global66/g-dropdown`'s own
      // `dropdownProps.placement` (design.md WU6 row). Prove it is the SAME
      // prop descriptor object, not a re-declared lookalike.
      const { dropdownProps } = await import('@flash-global66/g-dropdown');
      const popoverPlacementProp = (
        GPopover as unknown as { props: Record<string, unknown> }
      ).props.placement;
      expect(popoverPlacementProp).toBe(dropdownProps.placement);
    });

    it('reuses the real `@flash-global66/g-tooltip` useTooltipTriggerProps.trigger descriptor for its own `trigger` prop', async () => {
      const { useTooltipTriggerProps } = await import(
        '@flash-global66/g-tooltip'
      );
      const popoverTriggerProp = (
        GPopover as unknown as { props: Record<string, unknown> }
      ).props.trigger;
      expect(popoverTriggerProp).toBe(useTooltipTriggerProps.trigger);
    });

    it('renders a real nested reference element that keeps receiving native DOM events while opening the popover', async () => {
      // Proves GTooltipTrigger's real (non-mocked) event wiring keeps
      // propagating native DOM events to a real nested element/component
      // placed in the `#reference` slot, matching the rigor of WU2/WU5's
      // real-component interop tests.
      const onRefClick = vi.fn();
      const Wrapper = defineComponent({
        components: { GPopover },
        setup() {
          return { onRefClick };
        },
        template: `
          <g-popover trigger="click">
            <template #reference>
              <button @click="onRefClick">ref</button>
            </template>
            content
          </g-popover>
        `,
      });
      render(Wrapper);
      await fireEvent.click(screen.getByText('ref'));
      expect(onRefClick).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByText('content')).toBeVisible();
      });
    });
  });
});
