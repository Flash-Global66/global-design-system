import { InjectionKey, reactive, inject, provide, nextTick } from "vue";
import { debugWarn } from "element-plus/es/utils/index";
import { AlertButtonResult, AlertProvider, AlertOptions, AlertProviderState } from "../types/types";
import type { ImageSize } from "@flash-global66/g-image";

const defaultValuesAttributes: AlertProviderState = {
  showAlert: false,
  type: "info",
  title: "",
  imageName: "information",
  description: "",
  primaryText: "",
  secondaryText: "",
  reverseButtons: false,
  hideButtonClose: false,
  imageSize: "lg",
};

const defaultValuesProvider: AlertProvider = {
  ...defaultValuesAttributes,
  onNext: async (action: AlertButtonResult) => {},
  hideAlert: () => {},
  openAlert: (params: AlertOptions, method?: (action: AlertButtonResult) => Promise<void> | void) => {},
};

const alertProvider: InjectionKey<AlertProvider> = Symbol("alertProvider");

let globalAlertInstance: AlertProvider | null = null;

export function useAlertProvider() {
  const state = reactive<AlertProvider>({ ...defaultValuesProvider });

  function hideAlert() {
    state.showAlert = false;
  }

  state.hideAlert = hideAlert;

  async function openAlert(params: AlertOptions, method?: (action: AlertButtonResult) => Promise<void> | void) {
    hideAlert();

    await nextTick();

    Object.assign(state, defaultValuesAttributes, params);

    if (method) state.onNext = method;

    state.showAlert = true;
  }

  state.openAlert = openAlert;

  function initAlertProvider() {
    provide(alertProvider, state);
    globalAlertInstance = state;
  }

  return {
    initAlertProvider,
    state,
  };
}

export const useAlertInject = () => {
  const injectedState = inject(alertProvider);
  if (!injectedState) {
    debugWarn("useAlertInject", "Alert provider not found.");
    return defaultValuesProvider;
  }
  return injectedState;
};

export const getAlertInstance = () => {
  if (!globalAlertInstance) {
    debugWarn("useAlertInject", "Alert instance not found.");
  }
  return globalAlertInstance;
};