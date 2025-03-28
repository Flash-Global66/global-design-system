type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonState = "default" | "loading" | "disabled";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

type ButtonNativeType = "button" | "submit" | "reset";

/**
 * @deprecated The button now has a single standard size
 */
type ButtonSize = "large" | "medium" | "small" | "tiny" | "auto";

/**
 * @deprecated Use ButtonVariant instead.
 */
type ButtonType = "default" | "outlined" | "ghost" | "icon";

/**
 * @deprecated Use ButtonVariant instead.
 */
type ButtonColor = "primary" | "secondary" | "danger" | "info" | "warning" | "custom";

export { ButtonSize, ButtonColor, ButtonType, ButtonVariant, ButtonState, Ripple, ButtonNativeType };

