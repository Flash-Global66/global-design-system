<template>
  <div
    class="
      flex
      items-center
      justify-center
      rounded-full
      font-montserrat
      relative
    "
    :class="[
      !url && !solid ? 'bg-blue-3/10' : 'bg-blue-1', 
      { 'border-2 border-blue-1' : !url },
      'size--' + size,
    ]"
  >
    <img v-if="url" :src="url" class="rounded-full h-10 w-10" />
    <span
      v-else
      :class="[solid ? 'text-white' : 'text-blue-1']"
      class="font-medium uppercase">
      {{ text.trim() || "G81" }}
    </span>
    <img
      v-if="hasLogo"
      class="logo-size absolute"
      :src="logoUrl"
      alt="global66 small icon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import companyIcon from './assets/global66-small-icon.svg';

type Size = "small" | "default" | "large";

export default defineComponent({
  name: "Avatar",
  props: {
    url: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "G66",
    },
    hasLogo: {
      type: Boolean,
      default: true,
    },
    logoUrl: {
      type: String,
      default: companyIcon
    },
    solid: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<Size>,
      default: "default",
    },
  },
});
</script>

<style lang='scss' scoped>
.size {
  &--small {
    @apply h-8 w-8;
    .logo-size {
      @apply h-3 w-3 left-5 bottom-0;
    }
    span {
      @apply text-3;
    }
  }
  &--default {
    @apply h-10 w-10;
    .logo-size {
      @apply h-4 w-4 left-6 bottom-0;
    }
    span {
      @apply text-5;
    }
  }
  &--large {
    @apply h-12 w-12;
    .logo-size {
      @apply h-6 w-6 left-7 -bottom-1;
    }
    span {
      @apply text-6;
    }
  }
}
</style>