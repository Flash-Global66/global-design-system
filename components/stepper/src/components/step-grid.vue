<script lang="ts" setup>
import { PropType, inject, watch, toRef } from "vue";

// TYPES
import { ActionsStepGrid } from "../type/stepper";

// COMPONENTS
import { GButton } from "@flash-global66/g-button";
import { GIconFont } from "@flash-global66/g-icon-font";

import gSteppersProvider, {
  initialGSteppersProvider,
} from "../config/gSteppersProvider";

const props = defineProps({
  maxWidth: {
    type: String,
    default: "max-w-4xl",
  },
  isBigGrid: {
    type: Boolean,
    default: false,
  },
  messageSecure: {
    type: Boolean,
    default: true,
  },
  messageSecureText: {
    type: String,
    default: "Sistema seguro",
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  hideButtons: {
    type: Boolean,
    default: false,
  },
  contentAlign: {
    type: String,
    default: "justify-between",
  },
  actions: {
    type: Object as PropType<ActionsStepGrid>,
    default: (): ActionsStepGrid => ({
      next: {
        label: "Continuar",
        function: () => console.log("onNext clicked"),
        hide: false,
        disabled: false,
      },
      back: {
        label: "Volver",
        function: () => console.log("onBack clicked"),
        hide: false,
        disabled: false,
      },
      buttonBack: {
        label: "Volver",
        function: () => console.log("onBack clicked"),
        hide: false,
        disabled: false,
      },
      optional: {
        label: "Opcional",
        function: () => console.log("Optional clicked"),
        hide: false,
        disabled: false,
        variant: "tertiary",
      },
    }),
  },
});
const { gStepperMethods } = inject(gSteppersProvider, initialGSteppersProvider);
const actions = toRef(props, "actions");

const hideBackButton = () => {
  if (typeof actions.value?.back === "undefined") {
    return true;
  } else if (typeof actions.value.back?.hide === "boolean") {
    return actions.value.back?.hide;
  } else {
    return false;
  }
};

const disabledBackButton = () => {
  if (typeof actions.value?.back === "undefined") {
    return true;
  } else if (typeof actions.value.back?.disabled === "boolean") {
    return actions.value.back?.disabled;
  } else {
    return false;
  }
};

watch(
  actions,
  (newActions) => {
    gStepperMethods.navigateBack(
      newActions.back?.function ||
        (() => {
          console.log("onBack clicked");
        }),

      {
        hide: props.hideButtons ? true : hideBackButton(),
        disabled: disabledBackButton(),
      }
    );
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="w-full h-full overflow-auto flex flex-col"
    :class="[contentAlign]"
  >
    <div :class="[maxWidth]" class="px-5 lg:px-0 w-full mx-auto">
      <slot name="title">
        <h2
          v-if="title"
          class="text-center mt-10 pb-6 text-6 md:text-8 text-primary-txt font-semibold leading-tight"
          v-html="title"
        />
      </slot>

      <slot name="subtitle">
        <div
          v-if="subtitle"
          class="flex flex-col md:items-center md:text-center"
        >
          <h3
            v-if="subtitle"
            class="text-3 md:text-5 text-secondary-txt md:font-medium mb-7"
            v-html="subtitle"
          />
        </div>
      </slot>

      <div class="w-full">
        <slot name="content" />
      </div>
    </div>

    <div>
      <div
        v-if="!hideButtons"
        class="w-full pt-2 px-6 lg:px-0"
        :class="{ 'pb-2': !messageSecure }"
      >
        <slot name="actions">
          <div
            class="flex flex-col sm:flex-row justify-center items-center pt-10"
          >
            <div class="flex flex-col">
              <GButton
                v-if="actions.next && !actions.next.hide"
                class="sm:order-3 w-96 max-w-full"
                :disabled="actions.next.disabled"
                @click="actions?.next?.function()"
                :data-test="`button:${actions.next.label}`"
              >
                {{ actions.next.label }}
              </GButton>
              <GButton
                v-if="actions.buttonBack && !actions.buttonBack.hide"
                class="sm:order-3 w-96 max-w-full mt-4"
                :disabled="actions.buttonBack.disabled"
                @click="actions?.buttonBack?.function()"
                variant="tertiary"
                :data-test="`button:${actions.buttonBack.label}`"
              >
                {{ actions.buttonBack.label }}
              </GButton>
            </div>
            <GButton
              v-if="actions.optional && !actions.optional.hide"
              :variant="actions.optional.variant || 'tertiary'"
              class="mt-xs ml-xs sm:mt-0 sm:mr-3 w-64"
              :disabled="actions.optional.disabled"
              @click="actions?.optional?.function"
              :data-test="`button:${actions.optional.label}`"
            >
              {{ actions.optional.label }}
            </GButton>
          </div>
        </slot>
      </div>

      <div
        v-if="messageSecure"
        class="flex justify-center items-center text-gray-21 text-2 my-4 mx-auto"
      >
        <GIconFont class="mr-2" name="solid lock-alt" />
        <p v-html="messageSecureText"></p>
      </div>
    </div>
  </div>
</template>
