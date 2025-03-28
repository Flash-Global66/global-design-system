import { InjectionKey, Ref, ref } from 'vue';

export type LoaderProviderType = {
  isLoading: Ref<boolean>;
  showGLoader(show: boolean): void;
};

const showLoader: Ref<boolean> = ref(false);

const initialValues: LoaderProviderType = {
  isLoading: ref(false),
  showGLoader: (show: boolean) => showLoader.value = show,
};

const LoaderProvider: InjectionKey<LoaderProviderType> = Symbol('loader');

export {LoaderProvider, initialValues, showLoader};
