import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { timePickerDefaultProps } from '../src/common/props';

/**
 * Regression suite for WU8 (ep-extraction-v6): `clearIcon` was a dead-weight
 * prop pointing at element-plus's `CircleClose` icon component as its
 * default. Per design Decision 3 (verified empirically in `common/picker.vue`
 * lines 77/129), `clearIcon` is ONLY ever read as a truthy `v-if="clearIcon"`
 * gate — the actual clear-icon glyph is already hardcoded as
 * `<g-icon-font name="regular times">`, rendered unconditionally, unrelated
 * to this prop's value. There is no icon component to swap; the fix is a
 * dependency-free truthy default plus removal of the dead
 * `@element-plus/icons-vue` import.
 */
describe('timePickerDefaultProps.clearIcon', () => {
  it('defaults to boolean `true` (no element-plus icon component reference)', () => {
    expect(timePickerDefaultProps.clearIcon.default).toBe(true);
    expect(typeof timePickerDefaultProps.clearIcon.default).toBe('boolean');
  });

  it('keeps accepting string/Component values without breaking the prop-type contract', () => {
    // type is the raw Vue constructor array under the hood; assert it still
    // includes String/Object (no narrowing) and now also Boolean (widened,
    // since `true` is a legitimate declared value, not smuggled in).
    const type = timePickerDefaultProps.clearIcon.type as unknown as (
      | StringConstructor
      | ObjectConstructor
      | BooleanConstructor
    )[];
    expect(type).toContain(String);
    expect(type).toContain(Object);
    expect(type).toContain(Boolean);
  });

  it('no longer imports `@element-plus/icons-vue` (dead import removed)', () => {
    const propsFilePath = path.resolve(__dirname, '../src/common/props.ts');
    const source = readFileSync(propsFilePath, 'utf-8');
    expect(source).not.toContain('@element-plus/icons-vue');
    expect(source).not.toContain('CircleClose');
  });
});
