<template>
  <transition name="fade">
    <div
      class="gui-loader"
      style="background-color: rgba(52, 57, 71, 0.8)"
      v-if="show"
    >
      <div class="flex flex-col items-center justify-center">
        <img src="./assets/img/preloader.gif" class="h-12" />
        <p v-if="message" class="mt-md text-white text-lg">
          {{ message }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
  props: {
    show: {
      default: false,
      type: Boolean,
    },
    message: {
      default: "",
      type: String,
    },
  },
});
</script>

<style lang="scss">
.gui-loader {
  @apply fixed top-0 left-0 overflow-hidden flex w-full h-full justify-center items-center select-none;
  z-index: 5000;
}

.fade-enter-active,
.fade-leave-active {
  @apply duration-500;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
