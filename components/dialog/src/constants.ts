import type { CSSProperties, ComputedRef, InjectionKey, Ref } from 'vue';
import type { NamespaceHelpers } from '@flash-global66/g-utils';
import type { FooterButton } from './types/types';

export type DialogContext = {
  dialogRef: Ref<HTMLElement | undefined>;
  headerRef: Ref<HTMLElement | undefined>;
  bodyId: Ref<string>;
  ns: NamespaceHelpers;
  rendered: Ref<boolean>;
  style: ComputedRef<CSSProperties>;
  displayButtons: ComputedRef<FooterButton[]>;
  buttonLayoutClass: ComputedRef<string>;
};

export const dialogInjectionKey: InjectionKey<DialogContext> =
  Symbol.for('dialogInjectionKey');
