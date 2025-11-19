<script lang="ts" setup>
import {
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  ref,
  Ref,
  defineExpose,
} from "vue";
import gSteppersProvider, {
  initialGSteppersProvider,
} from "../config/gSteppersProvider";

const props = defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  dot: {
    type: Boolean,
    default: false,
  },
});
const currentInstance = getCurrentInstance();
const isActive: Ref<boolean> = ref(false);
const wasActive: Ref<boolean> = ref(false);

const { gStepperRegister } = inject(
  gSteppersProvider,
  initialGSteppersProvider
);

onMounted(() => {
  console.log("currentInstance", currentInstance);
  gStepperRegister.register({
    ...(currentInstance?.proxy as any),
    isActive,
    wasActive,
  });
});

onBeforeUnmount(() => {
  gStepperRegister.unregister(currentInstance?.proxy as any);
});

defineExpose({
  isActive,
  wasActive,
  value: props.value,
});
</script>

<template>
  <transition name="fade2" mode="out-in">
    <div v-if="isActive" class="h-full"><slot /></div>
  </transition>
</template>

<style lang="scss" scoped>
@config "../../../../tailwind.config.ts";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-leave-active {
  transform: opacity 1s;
  position: absolute !important;
  top: 0;
  width: 100%;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 0.5s ease;
}

.fade2-enter-from,
.fade2-leave-to {
  opacity: 0;
}
</style>
