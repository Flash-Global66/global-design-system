<template>
  <section>
    <el-config-provider
      v-bind="{ ...$attrs, ...$props }"
      namespace="gui">
      <!--
        @slot customize default content
      -->
      <slot />
    </el-config-provider>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';

export default defineComponent({
  name: 'ConfigProvider',
  components: {
    ElConfigProvider,
  },
});
</script>