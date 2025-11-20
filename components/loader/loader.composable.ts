import { inject } from "vue";
import {
  initialValues,
  LoaderProvider,
  showLoader,
  loaderMessage,
} from "./loader.provider";

const useLoader = () => {
  const { showGLoader, setLoaderMessage, isLoading } = inject(
    LoaderProvider,
    initialValues
  );

  return {
    showGLoader,
    setLoaderMessage,
    isLoading,
    showLoader,
    loaderMessage,
  };
};

export default useLoader;
