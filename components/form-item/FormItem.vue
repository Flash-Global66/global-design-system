<template>
  <div
    ref="formItemRef"
    :class="formItemClasses"
    :role="isGroup ? 'group' : undefined"
    :aria-labelledby="isGroup ? labelId : undefined"
  >
    <component
      :is="labelFor ? 'label' : 'div'"
      v-if="hasLabel"
      :id="labelId"
      :for="labelFor"
      :class="ns.e('label')"
      :style="labelStyle"
    >
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </component>

    <div :class="ns.e('content')" :style="contentStyle">
      <slot />

      <div v-if="shouldShowError" :class="ns.e('content-error')">
        <slot name="error" :error="validateMessage">
          <span :class="validateClasses">
            {{ validateMessage }}
          </span>
        </slot>
      </div>

      <slot name="append-error" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  useSlots,
  watch,
  reactive,
  toRefs,
} from 'vue';
import AsyncValidator from 'async-validator';
import { clone } from 'lodash-unified';
import { refDebounced } from '@vueuse/core';
import {
  ensureArray,
  getProp,
  isArray,
  isFunction,
  useNamespace,
} from '@flash-global66/g-utils';
import { useId } from '@flash-global66/g-hooks';
import {
  formContextKey,
  formItemContextKey,
  useFormSize,
} from '@flash-global66/g-form';
import { formItemProps } from './form-item.type';

import type { CSSProperties } from 'vue';
import type { RuleItem } from 'async-validator';
import type { Arrayable } from '@flash-global66/g-utils';
import type {
  FormItemContext,
  FormItemRule,
  FormValidateFailure,
} from '@flash-global66/g-form';
import type { FormItemValidateState } from './form-item.type';

defineOptions({
  name: 'GFormItem',
});

const props = defineProps(formItemProps);
const slots = useSlots();

// Ported from element-plus's own `addUnit` (a trivial number -> px mapper) —
// not worth a new @flash-global66/g-utils dependency for one line.
const addUnit = (value?: string | number): string | undefined => {
  if (value === undefined || value === null) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
};

// re-point to DS `@flash-global66/g-form`'s ALREADY-native formContextKey /
// formItemContextKey (Symbol.for global registry) — this is the actual fix:
// previously this package injected element-plus's `formContextKey`, which is
// a DIFFERENT symbol than the one `<GForm>` (from @flash-global66/g-form)
// provides, so `formContext?.addField(...)` was silently a no-op and
// `formRef.value.validate()` never validated fields rendered through this
// package. Re-pointing wires this package's fields into the real `<GForm>`.
const formContext = inject(formContextKey, undefined);

const ns = useNamespace('form-item');
const _size = useFormSize();

const labelId = useId().value;
const inputIds = ref<string[]>([]);

const validateState = ref<FormItemValidateState>('');
const validateStateDebounced = refDebounced(validateState, 100);
const validateMessage = ref('');
const formItemRef = ref<HTMLDivElement>();
// special inline value.
let initialValue: any = undefined;
let isResettingField = false;

const labelPosition = computed(() => props.labelPosition || '');

const labelStyle = computed<CSSProperties>(() => {
  if (labelPosition.value === 'top') return {};
  const labelWidth = addUnit(props.labelWidth);
  return labelWidth ? { width: labelWidth } : {};
});

const contentStyle = computed<CSSProperties>(() => {
  if (labelPosition.value === 'top') return {};
  if (!props.label && !props.labelWidth) return {};
  const labelWidth = addUnit(props.labelWidth);
  if (!props.label && labelWidth) return { marginLeft: labelWidth };
  return {};
});

const formItemClasses = computed(() => [
  ns.b(),
  ns.m(_size.value),
  ns.is('error', validateState.value === 'error'),
  ns.is('validating', validateState.value === 'validating'),
  ns.is('success', validateState.value === 'success'),
  ns.is('required', isRequired.value || !!props.required),
  formItemLabelPositionModifier.value,
]);

const formItemLabelPositionModifier = computed(() =>
  labelPosition.value ? ns.m(`label-${labelPosition.value}`) : '',
);

const _inlineMessage = computed(() => props.inlineMessage ?? false);

const validateClasses = computed(() => [
  ns.e('error'),
  { [ns.em('error', 'inline')]: _inlineMessage.value },
]);

const propString = computed(() => {
  if (!props.prop) return '';
  return isArray(props.prop) ? props.prop.join('.') : props.prop;
});

const hasLabel = computed<boolean>(() => !!(props.label || slots.label));

const labelFor = computed<string | undefined>(
  () =>
    props.for ?? (inputIds.value.length === 1 ? inputIds.value[0] : undefined),
);

// Matches element-plus's own `isGroup` (form-item2.mjs): when there's a
// label but no explicit `for`/labelFor target, the root element is exposed
// as an accessibility group labelled by the label's id.
const isGroup = computed(() => !labelFor.value && hasLabel.value);

const fieldValue = computed(() => {
  const model = formContext?.model;
  if (!model || !props.prop) return;
  return getProp(model, props.prop).value;
});

const normalizedRules = computed(() => {
  const { required } = props;
  const rules: FormItemRule[] = [];

  if (props.rules) {
    rules.push(...ensureArray(props.rules));
  }

  const formRules = formContext?.rules;
  if (formRules && props.prop) {
    const _rules = getProp<Arrayable<FormItemRule> | undefined>(
      formRules,
      props.prop,
    ).value;
    if (_rules) {
      rules.push(...ensureArray(_rules));
    }
  }

  if (required !== undefined) {
    const requiredRules = rules
      .map((rule, i) => [rule, i] as const)
      .filter(([rule]) => 'required' in rule);

    if (requiredRules.length > 0) {
      for (const [rule, i] of requiredRules) {
        if (rule.required === required) continue;
        rules[i] = { ...rule, required };
      }
    } else {
      rules.push({ required });
    }
  }

  return rules;
});

const isRequired = computed(() =>
  normalizedRules.value.some(rule => rule.required),
);

const validateEnabled = computed(() => normalizedRules.value.length > 0);

const getFilteredRule = (trigger: string) => {
  const rules = normalizedRules.value;
  return (
    rules
      .filter(rule => {
        if (!rule.trigger || !trigger) return true;
        if (isArray(rule.trigger)) {
          return rule.trigger.includes(trigger);
        } else {
          return rule.trigger === trigger;
        }
      })
      // exclude trigger
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map(({ trigger, ...rule }): RuleItem => rule)
  );
};

const shouldShowError = computed(
  () =>
    validateStateDebounced.value === 'error' && props.showMessage === 'parent',
);

const shouldShowErrorChild = computed(
  () =>
    validateStateDebounced.value === 'error' && props.showMessage === 'child',
);

const setValidationState = (state: FormItemValidateState) => {
  validateState.value = state;
};

const onValidationFailed = (error: FormValidateFailure) => {
  const { errors, fields } = error;
  if (!errors || !fields) {
    console.error(error);
  }

  setValidationState('error');
  validateMessage.value = errors
    ? (errors?.[0]?.message ?? `${propString.value} is required`)
    : '';

  formContext?.emit('validate', props.prop!, false, validateMessage.value);
};

const onValidationSucceeded = () => {
  setValidationState('success');
  validateMessage.value = '';
  formContext?.emit('validate', props.prop!, true, '');
};

const doValidate = async (rules: RuleItem[]): Promise<true> => {
  const modelName = propString.value;
  const validator = new AsyncValidator({
    [modelName]: rules,
  });
  return validator
    .validate({ [modelName]: fieldValue.value }, { firstFields: true })
    .then(() => {
      onValidationSucceeded();
      return true as const;
    })
    .catch((err: FormValidateFailure) => {
      onValidationFailed(err as FormValidateFailure);
      return Promise.reject(err);
    });
};

const validate: FormItemContext['validate'] = async (trigger, callback) => {
  // skip validation if its resetting
  if (isResettingField || !props.prop) {
    return false;
  }

  const hasCallback = isFunction(callback);
  if (!validateEnabled.value) {
    callback?.(false);
    return false;
  }

  const rules = getFilteredRule(trigger);
  if (rules.length === 0) {
    callback?.(true);
    return true;
  }

  setValidationState('validating');

  return doValidate(rules)
    .then(() => {
      callback?.(true);
      return true as const;
    })
    .catch((err: FormValidateFailure) => {
      const { fields } = err;
      callback?.(false, fields);
      return hasCallback ? false : Promise.reject(fields);
    });
};

const clearValidate: FormItemContext['clearValidate'] = () => {
  setValidationState('');
  validateMessage.value = '';
  isResettingField = false;
};

const resetField: FormItemContext['resetField'] = async () => {
  const model = formContext?.model;
  if (!model || !props.prop) return;

  const computedValue = getProp(model, props.prop);

  // prevent validation from being triggered
  isResettingField = true;

  computedValue.value = clone(initialValue);

  await nextTick();
  clearValidate();

  isResettingField = false;
};

const addInputId: FormItemContext['addInputId'] = (id: string) => {
  if (!inputIds.value.includes(id)) {
    inputIds.value.push(id);
  }
};

const removeInputId: FormItemContext['removeInputId'] = (id: string) => {
  inputIds.value = inputIds.value.filter(listId => listId !== id);
};

watch(
  () => props.error,
  val => {
    validateMessage.value = val || '';
    setValidationState(val ? 'error' : '');
  },
  { immediate: true },
);

const context = reactive({
  ...toRefs(props),
  $el: formItemRef,
  size: _size,
  validateState,
  inputIds,
  labelId,
  hasLabel,
  fieldValue,
  shouldShowError,
  shouldShowErrorChild,
  validateMessage,
  addInputId,
  removeInputId,
  resetField,
  clearValidate,
  validate,
});

// re-point to DS `@flash-global66/g-form`'s formItemContextKey — any already
// migrated DS input (g-input, g-checkbox, g-select, etc.) nested in the
// default slot calls `useFormItem()` from the SAME package and will resolve
// this context automatically (provide/inject is tree-based, not
// package-based).
provide(formItemContextKey, context as unknown as FormItemContext);

onMounted(() => {
  if (props.prop) {
    formContext?.addField(context as unknown as FormItemContext);
    initialValue = clone(fieldValue.value);
  }
});

onBeforeUnmount(() => {
  formContext?.removeField(context as unknown as FormItemContext);
});

defineExpose({
  /**
   * @description Form item size.
   */
  size: _size,
  /**
   * @description Validation message.
   */
  validateMessage,
  /**
   * @description Whether to show error message in form item.
   */
  shouldShowError,
  /**
   * @description Whether to show error message in the child of form item.
   */
  shouldShowErrorChild,
  /**
   * @description Validation state.
   */
  validateState,
  /**
   * @description Validate form item.
   */
  validate,
  /**
   * @description Remove validation status of the field.
   */
  clearValidate,
  /**
   * @description Reset current field and remove validation result.
   */
  resetField,
});
</script>
