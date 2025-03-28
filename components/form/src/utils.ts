import { computed, ref } from "vue";
import { debugWarn, ensureArray } from "element-plus/es/utils/index.mjs";
import type { Arrayable } from "element-plus/es/utils/index.mjs";
import type { FormItemContext } from "./types";
import type { FormItemProp } from "./form-item";

export const filterFields = (
  fields: FormItemContext[],
  props: Arrayable<FormItemProp>
) => {
  const normalized = ensureArray(props);
  return normalized.length > 0
    ? fields.filter((field) => field.prop && normalized.includes(field.prop))
    : fields;
};
