import { describe, it, expect } from 'vitest';
import { componentSizes } from '@flash-global66/g-utils';
import { useSizeProp } from '../../src/composables/useSizeProp';

describe('useSizeProp', () => {
  it('is a String-typed, non-required prop definition', () => {
    expect(useSizeProp.type).toBe(String);
    expect(useSizeProp.required).toBe(false);
  });

  it.each(componentSizes)(
    'accepts %j (a componentSizes value) via its validator',
    size => {
      expect(useSizeProp.validator?.(size)).toBe(true);
    },
  );

  it('rejects a size value outside componentSizes via its validator', () => {
    expect(useSizeProp.validator?.('huge')).toBe(false);
  });
});
