import type { CSSProperties, ComputedRef, InjectionKey, Ref } from 'vue'
import type { UseNamespaceReturn } from 'element-plus/es/hooks'
import type { ButtonVariant } from "@flash-global66/g-button";
import type { ImageName, ImageSize } from "@flash-global66/g-image";

export interface FooterButton {
  /**
   * Text to be displayed on the button
   */
  text: string;
  /**
   * Function to be executed when clicking the button
   */
  onClick: () => void | Promise<void>;
  /**
   * Visual variant of the button
   */
  variant: ButtonVariant;
  
  [key: string]: any;
}

// Dialog types
export type DialogSizeMode = 'default' | 'fixed' | 'adaptive';

export type DialogBeforeCloseFn = (done: (cancel?: boolean) => void) => void;

// Context types
export interface DialogContext {
  dialogRef: Ref<HTMLElement | undefined>
  headerRef: Ref<HTMLElement | undefined>
  bodyId: Ref<string>
  ns: UseNamespaceReturn
  rendered: Ref<boolean>
  style: ComputedRef<CSSProperties>
}

export const dialogInjectionKey: InjectionKey<DialogContext> = Symbol('dialogInjectionKey');

export type AlertType = "success" | "warning" | "error" | "info" | "important";
export interface AlertButtonResult {
  isPrimary?: boolean;
  isSecondary?: boolean;
  variant?: ButtonVariant;
}

/**
 * Configuration options for an alert dialog
 */
export interface AlertOptions {
  hideButtonClose?: boolean;
  type?: AlertType;
  title?: string;
  description?: string;
  srcIcon?: string;
  imageSize?: ImageSize;
  imageName?: ImageName;
  primaryText?: string;
  secondaryText?: string;
  reverseButtons?: boolean;
}

/**
 * State attributes for the alert provider
 */
export interface AlertProviderState {
  showAlert: boolean;
  type: AlertType;
  title: string;
  imageName: ImageName;
  description: string;
  primaryText: string;
  secondaryText: string;
  reverseButtons: boolean;
  hideButtonClose?: boolean;
  imageSize?: ImageSize;
}


export interface AlertProvider extends AlertProviderState {
  openAlert: (params: AlertOptions, onNext?: (action: AlertButtonResult) => Promise<void> | void) => void;
  hideAlert: () => void;
  onNext: (action: AlertButtonResult) => Promise<void> | void;


}