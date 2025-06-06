import type { ExtractPropTypes } from "vue";
import type Inline from "./inline.vue";
import { useAriaProps} from "element-plus";
import { buildProps, definePropType, isBoolean, isNumber, isString } from "element-plus/es/utils/index.mjs";

import { InlineEnum, InlineLinks, InlineSize } from "./inline.type";
import { IconString } from "@flash-global66/g-icon-font";

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

export const inlineEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type InlineEmits = typeof inlineEmits;

export type InlineProps = ExtractPropTypes<typeof inlineProps>;

export type InlineInstance = InstanceType<typeof Inline>;
