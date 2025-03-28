<template>
  <el-form-item
    v-bind="{ ...$attrs, ...$props }"
  >


    <!--
      @slot customize default content
      @slot customize error
      @slot customize append error
    -->
    
    <slot />

    <template v-if="$slots.error" #error>
      <slot name="error" />
    </template>

    <slot name="append-error" />

  </el-form-item>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { ElFormItem } from 'element-plus';

export default defineComponent({
  name: 'GFormItem',
  components: {
    ElFormItem,
  },
  emits: [
    /**
     * triggers when the bound value changes
     */
    'resetField',
  ],
  props: {
    /**
     * A key of model. It could be an array of property paths (e.g ['a', 'b', 0]). In the use of validate and resetFields method, the attribute is required.
     */
    prop: {
      type: String as PropType<string | string[]>,
      default: ''
    },
    /**
      * Validation rules of form, see the following table, more advanced usage at async-validator.
    */
    // rules: {
    //   type: Object,
    //   default: () => ({})
    // },
    /**
     * Field error message, set its value and the field will validate error and show this message immediately.
     */
    //  error: {
    //   type: String,
    //   default: ''
    // },
    /**
     * Whether to show the error message.
     */
    //  showMessage: {
    //   type: Boolean,
    //   default: true
    // },
    /**
     * Whether to trigger validation when the rules prop is changed.
     */
    //  size: {
    //   type: String as PropType<string | string[]>,
    //   default: 'default',
    // },
  },
  setup(props, { attrs }) {
    const attrsCustom = computed(() => {
      const excludeKeys = ['class'];
      return Object.fromEntries(Object.entries(attrs).filter(([key]) => !excludeKeys.includes(key)));
    });

    return {
      attrsCustom
    }
  }
});
</script>

<style lang="scss">
</style>
