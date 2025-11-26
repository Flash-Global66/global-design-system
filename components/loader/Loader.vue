<template>
  <transition name="fade">
    <div
      class="gui-loader"
      v-if="show"
    >
      <div class="flex flex-col items-center justify-center">
        <img src="./assets/img/preloader.gif" class="h-20" />
        <p v-if="message" class="mt-md text-inverse-txt text-4 font-medium max-w-96 mx-auto text-center drop-shadow-lg">
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
  @apply fixed top-0 left-0 overflow-hidden flex w-full h-full justify-center items-center select-none bg-grey-800/80;
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
