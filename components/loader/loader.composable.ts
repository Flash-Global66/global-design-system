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
  const { showGLoader, setMessage, isLoading } = inject(
    LoaderProvider,
    initialValues
  );

  const stopInterval = () => {
    if (intervalId.value) {
      window.clearInterval(intervalId.value);
      intervalId.value = undefined;
    }
  };

  const setLoaderMessage = (
    config: string | SetLoaderMessageParams
  ) => {
    stopInterval();

    if (typeof config === "string") {
      setMessage(config);
      return;
    }

    const { messages, duration = 5, shuffle = false } = config;

    if (!messages || messages.length === 0) {
      setMessage("");
      return;
    }

    let currentIndex = 0;
    setMessage(messages[currentIndex]);

    if (messages.length > 1) {
      intervalId.value = window.setInterval(() => {
        if (shuffle) {
          let nextIndex;
          do {
            nextIndex = Math.floor(Math.random() * messages.length);
          } while (nextIndex === currentIndex && messages.length > 1);
          currentIndex = nextIndex;
        } else {
          currentIndex = (currentIndex + 1) % messages.length;
        }
        setMessage(messages[currentIndex]);
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
    setLoaderMessage,
    isLoading,
    showLoader,
    loaderMessage,
  };
};

export default useLoader;
