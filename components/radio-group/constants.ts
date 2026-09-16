import type { InjectionKey } from 'vue';
import type { TypeRadio, TypeRadioSize } from './radio.type';

export interface RadioGroupContext {
  modelValue: TypeRadio | undefined;
  disabled: boolean;
  size: TypeRadioSize;
  name: string | undefined;
  changeEvent: (value: TypeRadio | undefined) => void;
}

/**
 * Own context key for this (deprecated) `g-radio-group` island.
 *
 * Uses `Symbol.for` (the JS global symbol registry) with the same key string
 * as `@flash-global66/g-radio`'s own `radioGroupKey`
 * (`components/radio/src/constants.ts`). This means a `<g-radio>` slotted as
 * a child of this component keeps resolving group context (modelValue,
 * disabled, changeEvent) automatically — with zero package-level dependency
 * between the two islands, since `Symbol.for('radioGroupKey')` returns the
 * identical global symbol regardless of which module calls it.
 */
export const radioGroupKey: InjectionKey<RadioGroupContext> =
  Symbol.for('radioGroupKey');
