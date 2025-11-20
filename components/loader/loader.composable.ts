import { inject } from "vue";
import {
  initialValues,
  LoaderProvider,
  showLoader,
  loaderMessage,
} from "./loader.provider";

const useLoader = () => {
  const { showGLoader, updateGLoaderMessage, isLoading } = inject(
    LoaderProvider,
    initialValues
  );

  return {
    showGLoader,
    updateGLoaderMessage,
    isLoading,
    showLoader,
    loaderMessage,
  };
};

export default useLoader;
