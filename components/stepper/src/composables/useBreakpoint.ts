// src/composables/useBreakpoint.ts
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const MD_BREAKPOINT = 768;

export function useBreakpoint() {
  const windowWidth = ref(window.innerWidth);

  const onWidthChange = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', onWidthChange);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onWidthChange);
  });

  const isMobile = computed(() => windowWidth.value < MD_BREAKPOINT);
  const isDesktop = computed(() => windowWidth.value >= MD_BREAKPOINT);

  return { isMobile, isDesktop, windowWidth };
}
