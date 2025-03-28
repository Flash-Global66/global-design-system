import { InjectionKey, reactive, inject, provide, nextTick } from 'vue';

import { IAlertButton, IAlertProvider, IAlert, IAlertAttributesProvider } from './alert.type';

const defaultValuesAttributes: IAlertAttributesProvider = {
  showAlert: false,
  type: 'custom',
  title: '',
  srcIcon: '',
  description: '',
  primaryText: '',
  secondaryText: '',
  buttonSize: 'tiny',
  reverseButtons: false,
};

const defaultValuesProvider: IAlertProvider = {
  ...defaultValuesAttributes,
  onNext: async (action: IAlertButton) => {},
  hideAlert: () => {},
  openAlert: (params: IAlert, method?: (action: IAlertButton) => Promise<void>) => {},
};

const alertProvider: InjectionKey<IAlertProvider> = Symbol('alertProvider');

export function useAlertProvider() {
  const state = reactive<IAlertProvider>({ ...defaultValuesProvider });

  function hideAlert() {
    state.showAlert = false;
  }
  state.hideAlert = hideAlert;

  async function openAlert(params: IAlert, method?: (action: IAlertButton) => Promise<void>) {
    hideAlert();

    await nextTick();

    Object.assign(state, defaultValuesAttributes, params);

    if (method) state.onNext = method;

    state.showAlert = true;
  }

  state.openAlert = openAlert;

  function initAlertProvider() {
    provide(alertProvider, state);
  }

  return {
    initAlertProvider,
  };
}

export const useAlertInject = () => {
  return inject(alertProvider, defaultValuesProvider);
};
