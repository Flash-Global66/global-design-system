<template>
  <div v-if="errors.length > 0" :class="ns.e('validation-errors')">
    <p :class="ns.e('error-text')">
      {{ errors[0] }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "element-plus";

const ns = useNamespace("attach-file");

interface Props {
  errors: string[];
}

defineProps<Props>();
</script>
