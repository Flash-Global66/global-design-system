type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md";
type ButtonState = "default" | "loading" | "disabled";
type ButtonNativeType = "button" | "submit" | "reset";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export { ButtonSize, ButtonVariant, ButtonState, Ripple, ButtonNativeType };