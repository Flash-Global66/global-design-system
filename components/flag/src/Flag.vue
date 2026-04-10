<template>
  <figure
    :class="ns.b('container')"
    ref="imageContainer"
    :style="{
      width: sizeValue,
      height: sizeValue,
      minWidth: sizeValue,
      minHeight: sizeValue,
    }"
  >
    <img
      v-if="isLoaded && !hasError"
      :src="imageSrc"
      :alt="name"
      :class="ns.b()"
      @error="handleImageError"
    />
    <div
      v-else-if="!hasError"
      :class="ns.e('placeholder')"
      role="img"
      :aria-label="`Cargando bandera: ${name}`"
    />
    <div
      v-else
      :class="[ns.e('placeholder'), `text-size-${size}`]"
      role="img"
      aria-label="Error al cargar la bandera"
    >
      404
    </div>
  </figure>
</template>

<script setup lang="ts">
import { useNamespace } from "element-plus";
import { flagProps, validateFlagProps } from "./flag.props";
import { useFlag } from "./hooks/use-flag";

const props = defineProps(flagProps);

validateFlagProps(props);

const ns = useNamespace("flag");

const { sizeValue, isLoaded, imageSrc, imageContainer, handleImageError, hasError } = useFlag(props);
</script>
