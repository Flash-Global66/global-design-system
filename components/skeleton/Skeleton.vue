<template>
  <div
    v-if="uiLoading"
    v-bind="$attrs"
    :class="[ns.b(), ns.is('animated', animated)]"
  >
    <template v-for="i in count" :key="i">
      <!--
        @slot Custom rendering skeleton template
      -->
      <slot name="template">
        <SkeletonItem :class="ns.is('first')" variant="p" />
        <SkeletonItem
          v-for="item in rows"
          :key="item"
          :class="[ns.e('paragraph'), ns.is('last', item === rows && rows > 1)]"
          variant="p"
        />
      </slot>
    </template>
  </div>
  <!--
    @slot Real rendering DOM
  -->
  <slot v-else v-bind="$attrs" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRef, watch, Ref } from 'vue';
import { useNamespace, definePropType } from '@flash-global66/g-utils';
import SkeletonItem from './SkeletonItem.vue';

type ThrottleConfig = {
  leading?: number;
  trailing?: number;
  initVal?: boolean;
};

/**
 * Byte-behavior port of element-plus's `useThrottleRender`
 * (es/hooks/use-throttle-render). Delays flipping the internal loading flag
 * by `throttle` ms (or by `{ leading, trailing }` ms) to avoid a loading
 * flicker on fast responses.
 */
const useThrottleRender = (
  loading: Ref<boolean>,
  throttle: number | ThrottleConfig = 0,
) => {
  if (throttle === 0) return loading;

  const isThrottleObject = typeof throttle === 'object' && throttle !== null;
  const initVal = isThrottleObject && Boolean(throttle.initVal);
  const throttled = ref(initVal);
  let timeoutHandle: ReturnType<typeof setTimeout> | null = null;

  const dispatchThrottling = (timer?: number) => {
    if (timer === undefined) {
      throttled.value = loading.value;
      return;
    }
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }
    timeoutHandle = setTimeout(() => {
      throttled.value = loading.value;
    }, timer);
  };

  const dispatcher = (type: 'leading' | 'trailing') => {
    if (type === 'leading') {
      if (typeof throttle === 'number') {
        dispatchThrottling(throttle);
      } else {
        dispatchThrottling(throttle.leading);
      }
    } else if (isThrottleObject) {
      dispatchThrottling((throttle as ThrottleConfig).trailing);
    } else {
      throttled.value = false;
    }
  };

  onMounted(() => dispatcher('leading'));
  watch(
    () => loading.value,
    val => dispatcher(val ? 'leading' : 'trailing'),
  );

  return throttled;
};

export default defineComponent({
  name: 'GSkeleton',
  components: {
    SkeletonItem,
  },
  inheritAttrs: false,
  props: {
    /**
     * whether showing the animation
     */
    animated: {
      type: Boolean,
      default: false,
    },
    /**
     * how many fake items to render to the DOM
     */
    count: {
      type: Number,
      default: 1,
    },
    /**
     * numbers of the row, only useful when no template slot were given
     */
    rows: {
      type: Number,
      default: 3,
    },
    /**
     * displays the real content (`default` slot) or the loading skeleton
     */
    loading: {
      type: Boolean,
      default: true,
    },
    /**
     * Rendering delay in milliseconds, or `{ leading, trailing, initVal }`
     * to control the leading/trailing edges independently
     */
    throttle: {
      type: definePropType<number | ThrottleConfig>([Number, Object]),
    },
  },
  setup(props, { expose }) {
    const ns = useNamespace('skeleton');
    const uiLoading = useThrottleRender(
      toRef(props, 'loading'),
      props.throttle,
    );

    expose({ uiLoading });

    return {
      ns,
      uiLoading,
    };
  },
});
</script>
