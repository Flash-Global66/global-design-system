import type { CSSProperties, ComputedRef, InjectionKey, Ref } from 'vue'
import type { UseNamespaceReturn } from 'element-plus/es/hooks'
import type { ButtonVariant } from "@flash-global66/g-button";

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