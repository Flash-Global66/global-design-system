import type { ExtractPropTypes, PropType } from "vue";
import { buildProps, debugWarn, isBoolean, isString } from "element-plus/es/utils/index";
import type {
  ButtonSize,
  ButtonVariant,
  ButtonNativeType,
} from "./button.type";
import { IconString } from "@flash-global66/g-icon-font";

export const buttonProps = buildProps({
  /**
   * same as native button's type
   * <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type" target="blank">link</a> <br />
   * `reset / button / submit`
   */
  typeNative: {
    type: String as PropType<ButtonNativeType>,
    default: "button",
  },
  /**
   * disable the button
   */
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * width 100% button
   */
  full: {
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
   * button variant `primary / secondary / tertiary`
   */
  variant: {
    type: String as PropType<ButtonVariant>,
    default: "primary",
  },
  /**
   * button size `sm / md`
   */
  size: {
    type: String as PropType<ButtonSize>,
    default: "md",
  },
  /**
   * loading state for the button
   */
  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * Button title text (takes precedence over slot)
   */
  title: {
    type: String as PropType<string>,
    default: "",
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
  iconLeft: {
    type: String as PropType<IconString>,
    default: "",
  },
  /**
   * Right icon rendered using the IconFont component.
   *
   * The icon should be specified using the format "<weight> <icon-name>".
   * Acceptable weights are: "solid", "regular", "light", "brands", or "duotone".
   *
   * @see IconFont documentation for available icons.
   *
   * @example 'solid check', 'regular user'
   */
  iconRight: {
    type: String as PropType<IconString>,
    default: "",
  },
  /**
   * Accessible label for the button when the visual text is not descriptive enough
   */
  ariaLabel: {
    type: String as PropType<string>,
    default: "",
  },
});
export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
  mousedown: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;

export function validateButtonProps(props: ButtonProps) {
  const allowedVariants = ["primary", "secondary", "tertiary"];
  const allowedSizes = ["sm", "md"];

  if (!isString(props.variant) || !allowedVariants.includes(props.variant)) {
    debugWarn(
      "Button",
      `Invalid prop "variant": expected one of ${allowedVariants.join(", ")}, but received "${props.variant}".`
    );
  }

  if (!allowedSizes.includes(props.size)) {
    debugWarn(
      "Button",
      `Invalid prop "size": expected one of ${allowedSizes.join(", ")}, but received "${props.size}".`
    );
  }

  if (props.title && !isString(props.title)) {
    debugWarn("Button", `Invalid prop "title": expected a string, but received "${typeof props.title}".`);
  }

  if (!isBoolean(props.disabled)) {
    debugWarn("Button", `Invalid prop "disabled": expected a boolean, but received "${typeof props.disabled}".`);
  }

  if (!isBoolean(props.loading)) {
    debugWarn("Button", `Invalid prop "loading": expected a boolean, but received "${typeof props.loading}".`);
  }

  if (!isBoolean(props.full)) {
    debugWarn("Button", `Invalid prop "full": expected a boolean, but received "${typeof props.full}".`);
  }

  if (props.iconLeft && !isString(props.iconLeft)) {
    debugWarn(
      "Button",
      `Invalid prop "iconLeft": expected a string for icon name, but received "${typeof props.iconLeft}".`
    );
  }

  if (props.iconRight && !isString(props.iconRight)) {
    debugWarn(
      "Button",
      `Invalid prop "iconLeft": expected a string for icon name, but received "${typeof props.iconLeft}".`
    );
  }
}

