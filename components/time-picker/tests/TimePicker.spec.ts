import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import GTimePicker from '../src/time-picker';

/**
 * Functional regression check for WU8 (ep-extraction-v6): confirms the clear
 * button still renders and functions correctly with the DS-owned `clearIcon`
 * default (`true`, no `element-plus` `CircleClose` icon component behind it).
 * `clearIcon` is only ever consumed as a truthy `v-if` gate in
 * `common/picker.vue` — the actual glyph is a hardcoded
 * `<g-icon-font name="regular times">`, unrelated to this prop's value — so
 * this test proves that gate still opens with the new default.
 */
const aTime = new Date(2024, 0, 1, 10, 30, 0);

describe('GTimePicker clear button (clearIcon default = true)', () => {
  it('shows the clear icon on hover when a value is set, and clears it on click', async () => {
    const { container, emitted } = render(GTimePicker, {
      props: { modelValue: aTime },
    });

    const root = container.querySelector('.gui-input') as HTMLElement;
    expect(root).not.toBeNull();

    await fireEvent.mouseEnter(root);

    const clearIcon = root.querySelector('.clear-icon');
    expect(clearIcon).not.toBeNull();

    await fireEvent.click(clearIcon as SVGElement);

    expect(emitted()['update:modelValue']).toBeTruthy();
  });

  it('does not render the clear icon when clearable is false, regardless of clearIcon default', async () => {
    const { container } = render(GTimePicker, {
      props: { modelValue: aTime, clearable: false },
    });

    const root = container.querySelector('.gui-input') as HTMLElement;
    await fireEvent.mouseEnter(root);

    expect(root.querySelector('.clear-icon')).toBeNull();
  });
});
