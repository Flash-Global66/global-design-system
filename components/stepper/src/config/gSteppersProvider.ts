import { type InjectionKey } from 'vue';
import {
  type GStepperItemInstance,
  type GStepperArrowLeftProperties,
} from '../type/stepper';

export type GStepperRegister = {
  register: (item: GStepperItemInstance) => void;
  unregister: (item: GStepperItemInstance) => void;
};

export type gStepperMethods = {
  navigateTo: (valueStep: string) => void;
  navigateBack: (
    action: () => void,
    properties: GStepperArrowLeftProperties
  ) => void;
};

export type GSteppersProvider = {
  gStepperRegister: GStepperRegister;
  gStepperMethods: gStepperMethods;
};

export const initialGSteppersProvider: GSteppersProvider = {
  gStepperRegister: {
    register: () => console.log,
    unregister: () => console.log,
  },
  gStepperMethods: {
    navigateTo: () => console.log,
    navigateBack: () => console.log,
  },
};

const GSteppersProvider: InjectionKey<GSteppersProvider> = Symbol('gSteppers');

export default GSteppersProvider;
