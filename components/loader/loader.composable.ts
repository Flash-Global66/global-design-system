import { inject } from "vue";
import { initialValues, LoaderProvider, showLoader } from "./loader.provider";

const useLoader = () => {
  const { showGLoader, isLoading } = inject(
    LoaderProvider,
    initialValues
  );

  return {
    showGLoader,
    isLoading,
    showLoader
  };
}

export default useLoader;