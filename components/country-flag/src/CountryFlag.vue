<template>
  <figure
    :class="ns.e('container')"
    ref="imageContainer"
    :style="containerStyle"
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
import { flagProps, validateFlagProps } from "./country-flag.props";
import { useCountryFlag } from "./hooks/use-country-flag";

const props = defineProps(flagProps);

validateFlagProps(props);

const ns = useNamespace("country-flag");

const { containerStyle, isLoaded, imageSrc, imageContainer, handleImageError, hasError } = useCountryFlag(props);
</script>
