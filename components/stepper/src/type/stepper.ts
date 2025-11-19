import { ButtonVariant } from "@flash-global66/g-button";

import GStepperItem from "../components/stepper-item.vue";

type GStepperItemInstance = InstanceType<typeof GStepperItem>;

interface GStepperArrowLeftProperties {
  hide: boolean;
  disabled: boolean;
}

type GStepProgressProperties = {
  title: string;
  index: number;
};

type ButtonItemStepGrid = {
  label?: string;
  hide?: boolean;
  disabled?: boolean;
  function: () => void;
  variant?: ButtonVariant;
};

interface ActionsStepGrid {
  next?: ButtonItemStepGrid;
  back?: ButtonItemStepGrid;
  optional?: ButtonItemStepGrid;
  buttonBack?: ButtonItemStepGrid;
}

interface GStepperItem {
  value: string;
  isActive: boolean;
  wasActive: boolean;
}

export {
  GStepperItemInstance,
  GStepperArrowLeftProperties,
  GStepProgressProperties,
  ActionsStepGrid,
  GStepperItem,
};
