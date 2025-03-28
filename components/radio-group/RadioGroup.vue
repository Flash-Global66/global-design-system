<template>
  <el-radio-group v-bind="{ ...$attrs, ...$props }" @change="(event) => $emit('change', event)">
    <!--
      @slot customize default content
    -->
    <slot />
  </el-radio-group>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ElRadioGroup } from 'element-plus'

// TYPES
import { TypeRadioSize, EnumRadioSize } from '../radio/radio.type'

export default defineComponent({
  name: 'RadioGroup',
  components: {
    ElRadioGroup
  },
  emits: [
    /**
     * triggers when the bound value changes
     */
    'change'
  ],
  props: {
    /**
     * whether Radio is disabled
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * size of the Radio
     */
    size: {
      type: String as PropType<EnumRadioSize>,
      default: ''
    }
  }
})
</script>
