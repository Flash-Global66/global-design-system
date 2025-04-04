import type { ExtractPropTypes, PropType } from "vue";
import { buildProps, debugWarn, isBoolean, isString } from "element-plus/es/utils/index";
import type {
  IconButtonSize,
  IconButtonVariant,
  IconBorder
} from "./icon-button.type";
import { IconString } from '@flash-global66/g-icon-font'

export const iconButtonProps = buildProps({
  /**
   * disable the button
   */
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * Specifies that a button should automatically get focus when the page loads.
   *
   * Only if the `href` is disabled.
   */
  autofocus: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * If you write an href the component behaves with an `a`.
   * Specifies the URL of the page the link goes to
   */
  href: {
    type: String as PropType<string>,
    default: undefined,
  },
  /**
   * Specifies where to open the linked document.
   *
   * Only if the `href` is active
   */
  target: {
    type: String as PropType<string>,
    default: undefined,
  },
  /**
   * Specifies that the target will be downloaded when a user clicks on the hyperlink.
   *
   * Only if the href is active.
   */
  download: {
    type: String as PropType<string>,
    default: undefined,
  },
  /**
   * button variant `grey / black / blue`
   */
  variant: {
    type: String as PropType<IconButtonVariant>,
    default: "grey",
  },
  /**
   * Left icon rendered using the IconFont component.
   *
   * The icon should be specified using the format "<weight> <icon-name>".
   * Acceptable weights are: "solid", "regular", "light", "brands", or "duotone".
   *
   * @see IconFont documentation for available icons.
   *
   * @example 'solid check', 'regular user'
   */
  icon: {
    type: String as PropType<IconString>,
    default: "solid check",
  },
  /**
   * Acceptable sizes are: "medium" or "small".
   */
  size: {
    type: String as PropType<IconButtonSize>,
    default: "medium",
  },
  border: {
    type: Boolean as PropType<IconBorder>,
    default: false
  }
});
export const iconButtonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
  mousedown: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type IconButtonProps = ExtractPropTypes<typeof iconButtonProps>;
export type IconButtonEmits = typeof iconButtonEmits;

export function validateIconButtonProps(props: IconButtonProps) {
  const allowedVariants = ["grey", "black", "blue"];
  if (!isString(props.variant) || !allowedVariants.includes(props.variant)) {
    debugWarn(
      "Icon Button",
      `Invalid prop "variant": expected one of ${allowedVariants.join(", ")}, but received "${props.variant}".`
    );
  }

  if (!isBoolean(props.disabled)) {
    debugWarn("Button", `Invalid prop "disabled": expected a boolean, but received "${typeof props.disabled}".`);
  }

  if (props.icon && !isString(props.icon)) {
    debugWarn(
      "Icon Button",
      `Invalid prop "icon": expected a string for icon name, but received "${typeof props.icon}".`
    );
  }
}

