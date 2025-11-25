import { inject, watch } from "vue";
import {
  initialValues,
  LoaderProvider,
  showLoader,
  loaderMessage,
} from "./loader.provider";

interface SetLoaderMessageParams {
  messages: string[];
  duration?: number;
  shuffle?: boolean;
}

const useLoader = () => {
  const { showGLoader, setLoaderMessage, isLoading } = inject(
    LoaderProvider,
    initialValues
  );
  let intervalId: number | undefined;

  const stopInterval = () => {
    if (intervalId) {
      window.clearInterval(intervalId);
      intervalId = undefined;
    }
  };

  const enhancedSetLoaderMessage = (
    config: string | SetLoaderMessageParams
  ) => {
    stopInterval();

    if (typeof config === "string") {
      setLoaderMessage(config);
      return;
    }

    const { messages, duration = 5, shuffle = false } = config;

    if (!messages || messages.length === 0) {
      setLoaderMessage("");
      return;
    }

    let currentIndex = 0;
    setLoaderMessage(messages[currentIndex]);

    if (messages.length > 1) {
      intervalId = window.setInterval(() => {
        if (shuffle) {
          let nextIndex;
          do {
            nextIndex = Math.floor(Math.random() * messages.length);
          } while (nextIndex === currentIndex);
          currentIndex = nextIndex;
        } else {
          currentIndex = (currentIndex + 1) % messages.length;
        }
        setLoaderMessage(messages[currentIndex]);
      }, duration * 1000);
    }
  };

  watch(showLoader, (isVisible) => {
    if (!isVisible) {
      stopInterval();
    }
  });

  return {
    showGLoader,
    setLoaderMessage: enhancedSetLoaderMessage,
    isLoading,
    showLoader,
    loaderMessage,
  };
};

export default useLoader;
