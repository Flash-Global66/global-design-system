import type { ImageName, ImageSize } from "@flash-global66/g-image";

export type AlertType = "success" | "warning" | "error" | "info" | "important";

export interface AlertCheckboxItem {
  label: string;
  required?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface AlertButtonResult {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
  dismissedByClose?: boolean;
  isCloseByOtherAlert?: boolean;
  checkboxStates?: boolean[];
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
  checkboxes?: AlertCheckboxItem[];
}

export interface AlertEmits {
  (e: 'close'): void
  (e: 'next', result: AlertButtonResult): void
}