import { InjectionKey, Ref, ref } from "vue";

export type LoaderProviderType = {
  isLoading: Ref<boolean>;
  showGLoader(show: boolean): void;
  setLoaderMessage(message: string): void;
};

const showLoader: Ref<boolean> = ref(false);
const loaderMessage: Ref<string> = ref("");

const initialValues: LoaderProviderType = {
  isLoading: ref(false),
  showGLoader: (show: boolean, message?: string) => {
    loaderMessage.value = show && message ? message : "";
    showLoader.value = show;
  },
  setLoaderMessage: (message: string) => {
    loaderMessage.value = message;
  },
};

const LoaderProvider: InjectionKey<LoaderProviderType> = Symbol("loader");

export { LoaderProvider, initialValues, showLoader, loaderMessage };
