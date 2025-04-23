import type { ImageName, ImageSize } from "@flash-global66/g-image";
import type { ButtonVariant } from "@flash-global66/g-button";
import type { FooterButton } from "@flash-global66/g-dialog";

/**
 * Alert dialog types
 */
export type AlertType = "success" | "warning" | "error" | "info" | "important";

/**
 * Result from user interaction with the alert dialog
 */
export interface AlertButtonResult {
  isPrimary?: boolean;
  isSecondary?: boolean;
  variant?: ButtonVariant;
}

/**
 * Configuration options for the alert dialog
 */
export interface AlertOptions {
  hideButtonClose?: boolean;
  type?: AlertType;
  title?: string;
  description?: string;
  imageSize?: ImageSize;
  imageName?: ImageName;
  primaryText?: string;
  secondaryText?: string;
  reverseButtons?: boolean;
}

export type { FooterButton };