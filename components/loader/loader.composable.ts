import { inject, onUnmounted, ref, Ref, watch } from "vue";
import {
  initialValues,
  LoaderProvider,
  showLoader,
  loaderMessage,
  intervalId,
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

  const stopInterval = () => {
    if (intervalId.value) {
      window.clearInterval(intervalId.value);
      intervalId.value = undefined;
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
      intervalId.value = window.setInterval(() => {
        if (shuffle) {
          let nextIndex;
          do {
            nextIndex = Math.floor(Math.random() * messages.length);
          } while (nextIndex === currentIndex  && messages.length > 1);
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

  onUnmounted(() => {
    stopInterval();
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
