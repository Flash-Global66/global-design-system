<script lang="ts" setup>
import { nextTick, ref, Ref, computed, provide, watch } from "vue";
import GStepperHeader from "./stepper-header.vue";
import gSteppersProvider from "../config/gSteppersProvider";
import { getProgressPercentage } from "../helpers/barProgress";
import {
  GStepperItemInstance,
  GStepperArrowLeftProperties,
  GStepProgressProperties,
} from "../type/stepper";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
    default: "",
  },
  hideLeftHeader: Boolean,
  hideRightHeader: Boolean,
  hideStepperProgress: Boolean,
  hideStepCounter: Boolean,
  desktopHeightProgress: {
    type: [Number, String],
    default: 8,
  },
  mobileHeightProgress: {
    type: [Number, String],
    default: 4,
  },
  showCenterLogo: Boolean,
});

const emit = defineEmits([
  "update:modelValue",
  "click-left-header",
  "click-right-header",
]);

const items: Ref<GStepperItemInstance[]> = ref([]);
const backArrowFunction = ref(() => {
  console.log("Default back arrow function");
});
const backArrowProperties = ref<GStepperArrowLeftProperties>({
  disabled: false,
  hide: false,
});

const progressPercentage = computed(() => getProgressPercentage(items.value));

const itemsWithDot = computed(() => items.value.filter((item) => item.dot));

const stepProgressProperties = computed<GStepProgressProperties>(() => {
  let itemContainer = {} as GStepperItemInstance;

  if (items.value) {
    const activeItem = items.value.find((item) => item.isActive);
    if (activeItem) {
      itemContainer = activeItem;
    } else {
      itemContainer =
        itemsWithDot.value[itemsWithDot.value.length - 1] ||
        items.value[0] ||
        ({} as GStepperItemInstance);
    }
  }

  const indexInDotItems = itemsWithDot.value.indexOf(itemContainer);

  return {
    title: itemContainer.title || "",
    index: indexInDotItems !== -1 ? indexInDotItems + 1 : 0,
  };
});

function register(GStepItem: GStepperItemInstance) {
  items.value.push(GStepItem);
}

function unregister(GStepItem: GStepperItemInstance) {
  const index = items.value.indexOf(GStepItem);
  if (index > -1) {
    items.value.splice(index, 1);
  }
}

function navigateTo(stepValue: string | number) {
  emit("update:modelValue", stepValue);
}

function navigateBack(
  action: () => void,
  properties: GStepperArrowLeftProperties
) {
  backArrowFunction.value = action;
  backArrowProperties.value = properties;
}

function showItem(value: string | number) {
  console.log("items", items.value);
  items.value.forEach((item) => {
    console.log("value", value);
    console.log("item", item);
    item.isActive = item.value === value;
  });
}

function updateStepCompleted() {
  const activeIndex = items.value.findIndex((item) => item.isActive);
  items.value.forEach((item, index) => {
    item.wasActive = index < activeIndex;
  });
}

function onLeftHeader() {
  emit("click-left-header");
}

function onRightHeader() {
  emit("click-right-header");
}

provide(gSteppersProvider, {
  gStepperRegister: {
    register,
    unregister,
  },
  gStepperMethods: {
    navigateTo,
    navigateBack,
  },
});

watch(
  () => props.modelValue,
  (val) => {
    if (!val) return;
    nextTick(() => {
      showItem(val);
      updateStepCompleted();
    });
  },
  { immediate: true }
);
</script>

<template>
  <div class="h-screen bg-grey-25 flex flex-col">
    <GStepperHeader
      v-bind="props"
      :progressPercentage="progressPercentage"
      :back-arrow-function="backArrowFunction"
      :back-arrow-properties="backArrowProperties"
      :step-progress-properties="stepProgressProperties"
      :items-with-dot="itemsWithDot"
      @click-right-header="onRightHeader"
      @click-left-header="onLeftHeader"
    >
      <template #left-header>
        <slot name="left-header" />
      </template>
      <template #left-mobile-header>
        <slot name="left-mobile-header" />
      </template>
      <template #right-header>
        <slot name="right-header" />
      </template>
      <template #right-header-custom-space>
        <slot name="right-header-custom-space" />
      </template>
    </GStepperHeader>

    <div class="flex-grow overflow-auto">
      <slot />
    </div>
  </div>
</template>
