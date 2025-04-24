import type { ImageName, ImageSize } from "@flash-global66/g-image";

export type AlertType = "success" | "warning" | "error" | "info" | "important";

export interface AlertButtonResult {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
  dismissedByClose?: boolean;
}

export interface AlertOptions {
  hideButtonClose?: boolean;
  type?: AlertType;
  title?: string;
  description?: string;
  imageSize?: ImageSize;
  imageName?: ImageName;
  primaryText?: string;
  secondaryText?: string;
  tertiaryText?: string;
  reverseButtons?: boolean;
}

export interface AlertEmits {
  (e: 'close'): void
  (e: 'next', result: AlertButtonResult): void
}