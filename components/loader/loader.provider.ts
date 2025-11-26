import { InjectionKey, Ref, ref } from "vue";

export type LoaderProviderType = {
  isLoading: Ref<boolean>;
  showGLoader(show: boolean): void;
  setMessage(message: string): void;
};

const showLoader: Ref<boolean> = ref(false);
const loaderMessage: Ref<string> = ref("");
const intervalId: Ref<number | undefined> = ref();

const initialValues: LoaderProviderType = {
  isLoading: ref(false),
  showGLoader: (show: boolean) => {
    showLoader.value = show;
  },
  setMessage: (message: string) => {
    loaderMessage.value = message;
  },
};

const LoaderProvider: InjectionKey<LoaderProviderType> = Symbol("loader");

export { LoaderProvider, initialValues, showLoader, loaderMessage, intervalId };
