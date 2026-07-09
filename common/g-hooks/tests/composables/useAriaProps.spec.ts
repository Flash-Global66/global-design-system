import { describe, it, expect } from 'vitest';
import { ariaProps, useAriaProps } from '../../src/composables/useAriaProps';

describe('useAriaProps', () => {
  it('returns exactly one buildProp entry for a single requested aria key', () => {
    const result = useAriaProps(['ariaLabel']);
    expect(Object.keys(result)).toEqual(['ariaLabel']);
    expect(result.ariaLabel).toBe(String);
  });

  it('returns one entry per requested aria key, in the same shape as ariaProps', () => {
    const result = useAriaProps(['ariaLabel', 'ariaControls']);
    expect(Object.keys(result).sort()).toEqual(['ariaControls', 'ariaLabel']);
    expect(result.ariaLabel).toBe(ariaProps.ariaLabel);
    expect(result.ariaControls).toBe(ariaProps.ariaControls);
  });

  it('excludes aria keys that were not requested', () => {
    const result = useAriaProps(['ariaLabel']);
    expect('ariaOrientation' in result).toBe(false);
    expect('ariaControls' in result).toBe(false);
  });

  it('returns an empty object for an empty keys array', () => {
    expect(useAriaProps([])).toEqual({});
  });

  it('excludes unknown keys not present in ariaProps', () => {
    const result = useAriaProps(['ariaLabel', 'notARealAriaKey' as never]);
    expect(Object.keys(result)).toEqual(['ariaLabel']);
  });

  it('builds ariaOrientation as a buildProp definition with the expected values validator', () => {
    expect(ariaProps.ariaOrientation).toMatchObject({
      type: String,
      required: false,
    });
    expect(ariaProps.ariaOrientation.validator?.('horizontal')).toBe(true);
    expect(ariaProps.ariaOrientation.validator?.('vertical')).toBe(true);
    expect(ariaProps.ariaOrientation.validator?.('diagonal')).toBe(false);
  });

  it('returns the same reference as the module-level ariaProps for unbuilt String props', () => {
    // ariaLabel/ariaControls are plain `String` constructors (not objects),
    // so buildProp short-circuits and returns them unchanged — matching
    // element-plus's real runtime shape exactly.
    expect(ariaProps.ariaLabel).toBe(String);
    expect(ariaProps.ariaControls).toBe(String);
  });
});
