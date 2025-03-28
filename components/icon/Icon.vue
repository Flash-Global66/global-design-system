<script lang="ts">
export default { name: 'IconCustom' };
</script>

<script lang="ts" setup>
import { Icomoon } from "vue-icomoon";
import iconSet from "./selection.json";
import { PropType } from "vue";
import { iconProps } from "./icon";

const props = defineProps(iconProps);

</script>

<template>
  <icomoon
    v-if="name && iconSet.preferences"
    :iconSet="iconSet"
    :aria-label="`icono ${name}`"
    v-bind="{ ...props }"
  />
</template>
