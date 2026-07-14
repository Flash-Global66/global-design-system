import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import GMenuItemGroup from '../MenuItemGroup.vue';

/**
 * Regression suite for WU7 (ep-extraction-v6): `MenuItemGroup.vue` previously
 * wrapped `ElMenuItemGroup` from element-plus. This suite proves the native,
 * purely-presentational render (no `element-plus`, no context
 * provide/inject participation — see file-level comment in
 * `MenuItemGroup.vue`). Its participation in the shared context handshake
 * (transparent bubble-through for descendants) is covered in
 * `Integration.spec.ts`.
 */

describe('MenuItemGroup (native render — sin ElMenuItemGroup)', () => {
  it('renders a native <li> with a title div and a wrapping <ul>, no element-plus classes', () => {
    const { container } = render(GMenuItemGroup, {
      props: { title: 'Group Title' },
      slots: { default: '<span>child</span>' },
    });
    const li = container.querySelector('li');
    expect(li).toBeTruthy();
    expect(li).toHaveClass('gui-menu-item-group');
    expect(container.querySelector('[class*="el-menu"]')).toBeNull();

    const titleDiv = container.querySelector('.gui-menu-item-group__title');
    expect(titleDiv).toBeTruthy();
    expect(titleDiv).toHaveTextContent('Group Title');

    expect(container.querySelector('ul')).toContainHTML('<span>child</span>');
  });

  it('prefers the `title` slot over the `title` prop', () => {
    const { getByText, queryByText } = render(GMenuItemGroup, {
      props: { title: 'Prop Title' },
      slots: { title: '<strong>Slot Title</strong>' },
    });
    expect(getByText('Slot Title')).toBeInTheDocument();
    expect(queryByText('Prop Title')).toBeNull();
  });
});
