import type { ExtractPropTypes } from "vue";
import type Inline from "./Inline.vue";
import { useAriaProps} from "element-plus";
import { buildProps, definePropType, isBoolean, isNumber, isString } from "element-plus/es/utils/index.mjs";

import { InlineEnum, InlineLinks, InlineSize } from "./inline.type";
import { de } from "element-plus/es/locales.mjs";
import { IconString } from "@flash-global66/b2b-ui-icon-font";

export const inlineProps = buildProps({
  /**
   * @description title
   */
  title: {
    type: String,
    default: "",
  },
  /**
   * @description description text
  */
  description: {
    type: String,
    required: true,
    default: "",
  },
  /**
   * @description show close button
   */
  hideClose: {
    type: Boolean,
    default: false,
  },
  /**
   * @description fontawesome icon
   * */
  icon: {
    type: definePropType<IconString>(String),
    default: "",
  },
  /**
   * @description type of inline
   */
  type: {
    type: definePropType<InlineEnum>(String),
    default: 'success',
  },
  /**
   * @description size of inline
  */
  size: {
    type: definePropType<InlineSize>(String),
    default: 'md',
  },
  /**
   * @description inline links
  */
  links: {
    type: definePropType<InlineLinks[]>(Array),
    default: () => [],
  },
  ...useAriaProps(["ariaLabel"]),
});

export type InlineProps = ExtractPropTypes<typeof inlineProps>;

export type InlineInstance = InstanceType<typeof Inline>;
