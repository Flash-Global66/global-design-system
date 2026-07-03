import { describe, it, expect } from 'vitest';
import { buildProps, definePropType } from '../../src/utils/props.util';
import type { PropType } from 'vue';

describe('buildProps', () => {
  it('returns the same shape for a plain object prop', () => {
    const props = buildProps({
      variant: {
        type: String as PropType<string>,
        default: 'primary',
      },
    });
    expect(props).toHaveProperty('variant');
    expect(props.variant).toHaveProperty('type', String);
    expect(props.variant).toHaveProperty('default', 'primary');
  });

  it('passes through props already marked as epProp', () => {
    const props = buildProps({
      size: {
        type: String,
        default: 'md',
      },
    });
    expect(props.size).toBeDefined();
  });

  it('preserves multiple props', () => {
    const props = buildProps({
      disabled: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      },
    });
    expect(Object.keys(props)).toHaveLength(2);
    expect(props.disabled).toBeDefined();
    expect(props.loading).toBeDefined();
  });
});

describe('definePropType', () => {
  it('returns the value as PropType<T>', () => {
    const result = definePropType<string>(String);
    expect(result).toBe(String);
  });

  it('works with Number', () => {
    const result = definePropType<number>(Number);
    expect(result).toBe(Number);
  });

  it('works with Boolean', () => {
    const result = definePropType<boolean>(Boolean);
    expect(result).toBe(Boolean);
  });
});
