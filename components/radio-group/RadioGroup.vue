<template>
  <div ref="radioGroupRef" :class="ns.b('group')" role="radiogroup">
    <!--
      @slot customize default content
    -->
    <slot />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  provide,
  reactive,
  ref,
  toRefs,
} from 'vue';
import { useNamespace, UPDATE_MODEL_EVENT } from '@flash-global66/g-utils';
import { useId } from '@flash-global66/g-hooks';

// TYPES
import { EnumRadioSize, TypeRadio, TypeRadioSize } from './radio.type';
import { radioGroupKey } from './constants';

export default defineComponent({
  name: 'RadioGroup',
  emits: [
    UPDATE_MODEL_EVENT,
    /**
     * triggers when the bound value changes
     */
    'change',
  ],
  props: {
    /**
     * binding value
     */
    modelValue: {
      type: [String, Number, Boolean] as PropType<TypeRadio>,
      default: undefined,
    },
    /**
     * whether Radio is disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * size of the Radio
     */
    size: {
      type: String as PropType<TypeRadioSize>,
      default: EnumRadioSize.Default,
    },
    /**
     * native `name` attribute
     */
    name: {
      type: String,
      default: undefined,
    },
  },
  setup(props, { emit }) {
    const ns = useNamespace('radio');
    const radioGroupRef = ref<HTMLDivElement>();
    const radioId = useId();

    const name = computed(() => props.name || radioId.value);

    const changeEvent = (value: TypeRadio | undefined) => {
      emit(UPDATE_MODEL_EVENT, value);
      emit('change', value);
    };

    onMounted(() => {
      const radios =
        radioGroupRef.value?.querySelectorAll<HTMLInputElement>('[type=radio]');
      if (!radios?.length) return;
      const hasChecked = Array.from(radios).some(radio => radio.checked);
      if (!hasChecked) {
        radios[0].tabIndex = 0;
      }
    });

    provide(
      radioGroupKey,
      reactive({
        ...toRefs(props),
        changeEvent,
        name,
      }),
    );

    return {
      ns,
      radioGroupRef,
    };
  },
});
</script>
