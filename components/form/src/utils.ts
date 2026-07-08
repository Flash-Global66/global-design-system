import { ensureArray } from '@flash-global66/g-utils';
import type { Arrayable } from '@flash-global66/g-utils';
import type { FormItemContext } from './types';
import type { FormItemProp } from './form-item';

export const filterFields = (
  fields: FormItemContext[],
  props: Arrayable<FormItemProp>,
) => {
  const normalized = ensureArray(props);
  return normalized.length > 0
    ? fields.filter(field => field.prop && normalized.includes(field.prop))
    : fields;
};
