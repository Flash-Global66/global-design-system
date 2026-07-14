import { describe, it, expect } from 'vitest';
import { defineComponent, ref, nextTick } from 'vue';
import { render, fireEvent } from '@testing-library/vue';
import GFormItem from '../FormItem.vue';
import { GForm } from '@flash-global66/g-form';
import { GInput } from '@flash-global66/g-input';

/**
 * Regression suite for WU5 (ep-extraction-v6): `@flash-global66/g-form-item`'s
 * `FormItem.vue` previously wrapped `ElFormItem` from element-plus AND
 * injected element-plus's OWN `formContextKey`/`formItemContextKey` — a
 * DIFFERENT symbol than the one `<GForm>` (from `@flash-global66/g-form`)
 * provides. Since every real consumer nests `<GFormItem>` (this package)
 * inside `<GForm>` (a totally separate package), `formContext` was ALWAYS
 * `undefined` in production and `formContext?.addField(...)` was a silent
 * no-op: `formRef.value.validate()` never actually validated fields rendered
 * through this package. This suite proves the fix: re-pointing to
 * `@flash-global66/g-form`'s ALREADY-native `formContextKey`/
 * `formItemContextKey` (Symbol.for global registry) wires real interop.
 */

describe('FormItem (native template — no ElFormItem)', () => {
  it('mounts without throwing outside of a <GForm> ancestor', () => {
    expect(() => render(GFormItem, { props: { prop: 'name' } })).not.toThrow();
  });

  it('renders the default slot content', () => {
    const { getByText } = render(GFormItem, {
      props: { prop: 'name' },
      slots: { default: 'contenido' },
    });
    expect(getByText('contenido')).toBeInTheDocument();
  });

  it('renders a label and applies labelWidth as an inline style', () => {
    const { getByText } = render(GFormItem, {
      props: { prop: 'name', label: 'Nombre', labelWidth: '120px' },
    });
    const label = getByText('Nombre');
    expect(label).toHaveStyle({ width: '120px' });
  });

  it('does not render a label element when no label prop/slot is given', () => {
    const { container } = render(GFormItem, { props: { prop: 'name' } });
    expect(container.querySelector('.gui-form-item__label')).toBeNull();
  });

  it('renders the required asterisk class when `required` is true', () => {
    const { container } = render(GFormItem, {
      props: { prop: 'name', required: true },
    });
    expect(container.firstElementChild).toHaveClass('is-required');
  });

  it('renders the required asterisk class when a rule includes required: true', () => {
    const { container } = render(GFormItem, {
      props: {
        prop: 'name',
        rules: [{ required: true, message: 'required' }],
      },
    });
    expect(container.firstElementChild).toHaveClass('is-required');
  });

  it('does not mark itself required by default', () => {
    const { container } = render(GFormItem, { props: { prop: 'name' } });
    expect(container.firstElementChild).not.toHaveClass('is-required');
  });

  it('renders the label wrapper when only the `label` slot is provided (no `label` prop)', () => {
    const { container } = render(GFormItem, {
      props: { prop: 'name' },
      slots: { label: 'Custom label' },
    });
    expect(container.querySelector('.gui-form-item__label')).not.toBeNull();
  });

  it('sets role="group" and aria-labelledby on the root when a label is present without a `for` target', () => {
    const { container } = render(GFormItem, {
      props: { prop: 'name', label: 'Nombre' },
    });
    const root = container.firstElementChild as HTMLElement;
    expect(root).toHaveAttribute('role', 'group');
    const label = container.querySelector(
      '.gui-form-item__label',
    ) as HTMLElement;
    expect(root.getAttribute('aria-labelledby')).toBe(label.getAttribute('id'));
  });

  it('does not set role="group"/aria-labelledby when a `for` target is resolved (single nested input)', async () => {
    const Wrapper = defineComponent({
      components: { GFormItem, GInput },
      setup() {
        const model = ref('');
        return { model };
      },
      template: `
        <GFormItem prop="name" label="Nombre">
          <GInput v-model="model" />
        </GFormItem>
      `,
    });
    const { container } = render(Wrapper);
    await nextTick();
    const root = container.firstElementChild as HTMLElement;
    expect(root).not.toHaveAttribute('role');
    expect(root).not.toHaveAttribute('aria-labelledby');
  });
});

describe('FormItem validation wiring via DS <GForm> context (re-pointed formContextKey)', () => {
  const mountFormItem = (
    rules: Record<string, unknown>,
    prop = 'name',
    showMessage: 'parent' | 'child' | 'none' = 'parent',
  ) => {
    const Wrapper = defineComponent({
      components: { GForm, GFormItem },
      setup() {
        const formRef = ref<InstanceType<typeof GForm>>();
        const model = ref({ name: '' });
        const onValidate = () => {
          formRef.value?.validate().catch(() => undefined);
        };
        return { formRef, model, rules, onValidate, prop, showMessage };
      },
      template: `
        <GForm ref="formRef" :model="model" :rules="rules">
          <GFormItem :prop="prop" :show-message="showMessage">
            <span data-testid="content" />
          </GFormItem>
        </GForm>
        <button data-testid="validate-btn" @click="onValidate">validate</button>
      `,
    });
    return render(Wrapper);
  };

  it('registers itself into the real <GForm> fields array — form-level validate() reaches this field', async () => {
    const rules = { name: [{ required: true, message: 'Name required' }] };
    const { getByTestId, findByText } = mountFormItem(rules);

    await fireEvent.click(getByTestId('validate-btn'));

    expect(await findByText('Name required')).toBeTruthy();
  });

  // `shouldShowError`/`shouldShowErrorChild` are driven off a `refDebounced`
  // (100ms), matching @flash-global66/g-form's own internal FormItem —
  // ported as-is to avoid a validation-state flicker on rapid re-validation.
  const waitForValidateDebounce = () =>
    new Promise(resolve => setTimeout(resolve, 150));

  it('shows the error message via the form-item own template when showMessage is "parent"', async () => {
    const rules = { name: [{ required: true, message: 'Name required' }] };
    const { getByTestId, container } = mountFormItem(rules, 'name', 'parent');

    await fireEvent.click(getByTestId('validate-btn'));
    await waitForValidateDebounce();

    expect(
      container.querySelector('.gui-form-item__content-error'),
    ).not.toBeNull();
  });

  it('does not show its own error message when showMessage is "none"', async () => {
    const rules = { name: [{ required: true, message: 'Name required' }] };
    const { getByTestId, container } = mountFormItem(rules, 'name', 'none');

    await fireEvent.click(getByTestId('validate-btn'));
    await waitForValidateDebounce();

    expect(container.querySelector('.gui-form-item__content-error')).toBeNull();
  });

  it('exposes validate(trigger) filtering rules by trigger', async () => {
    const Wrapper = defineComponent({
      components: { GForm, GFormItem },
      setup() {
        const formItemRef = ref<InstanceType<typeof GFormItem>>();
        const model = ref({ name: '' });
        const rules = {
          name: [{ required: true, message: 'required', trigger: 'blur' }],
        };
        const onChangeTrigger = () =>
          formItemRef.value?.validate('change').catch(() => undefined);
        const onBlurTrigger = () =>
          formItemRef.value?.validate('blur').catch(() => undefined);
        return { formItemRef, model, rules, onChangeTrigger, onBlurTrigger };
      },
      template: `
        <GForm :model="model" :rules="rules">
          <GFormItem ref="formItemRef" prop="name" show-message="parent">
            <span data-testid="content" />
          </GFormItem>
        </GForm>
        <button data-testid="change-btn" @click="onChangeTrigger">change</button>
        <button data-testid="blur-btn" @click="onBlurTrigger">blur</button>
      `,
    });

    const { getByTestId, container, findByText } = render(Wrapper);

    await fireEvent.click(getByTestId('change-btn'));
    await nextTick();
    expect(container.querySelector('.gui-form-item__content-error')).toBeNull();

    await fireEvent.click(getByTestId('blur-btn'));
    expect(await findByText('required')).toBeTruthy();
  });

  it('resetField() restores the initial model value and clears validation state', async () => {
    const Wrapper = defineComponent({
      components: { GForm, GFormItem },
      setup() {
        const formItemRef = ref<InstanceType<typeof GFormItem>>();
        const model = ref({ name: 'initial' });
        const rules = {
          name: [{ required: true, message: 'required' }],
        };
        const onInvalidate = () => {
          model.value.name = '';
          formItemRef.value?.validate('').catch(() => undefined);
        };
        const onReset = () => formItemRef.value?.resetField();
        return { formItemRef, model, rules, onInvalidate, onReset };
      },
      template: `
        <GForm :model="model" :rules="rules">
          <GFormItem ref="formItemRef" prop="name" show-message="parent">
            <span data-testid="content" />
          </GFormItem>
        </GForm>
        <button data-testid="invalidate-btn" @click="onInvalidate">invalidate</button>
        <button data-testid="reset-btn" @click="onReset">reset</button>
      `,
    });

    const { getByTestId, container, findByText, queryByText } = render(Wrapper);

    await fireEvent.click(getByTestId('invalidate-btn'));
    expect(await findByText('required')).toBeTruthy();

    await fireEvent.click(getByTestId('reset-btn'));
    await nextTick();
    await nextTick();

    expect(queryByText('required')).toBeNull();
    expect(container.querySelector('.is-error')).toBeNull();
  });

  it('clearValidate() clears the error state without touching the model', async () => {
    const Wrapper = defineComponent({
      components: { GForm, GFormItem },
      setup() {
        const formItemRef = ref<InstanceType<typeof GFormItem>>();
        const model = ref({ name: '' });
        const rules = { name: [{ required: true, message: 'required' }] };
        const onValidate = () =>
          formItemRef.value?.validate('').catch(() => undefined);
        const onClear = () => formItemRef.value?.clearValidate();
        return { formItemRef, model, rules, onValidate, onClear };
      },
      template: `
        <GForm :model="model" :rules="rules">
          <GFormItem ref="formItemRef" prop="name" show-message="parent">
            <span data-testid="content" />
          </GFormItem>
        </GForm>
        <button data-testid="validate-btn" @click="onValidate">validate</button>
        <button data-testid="clear-btn" @click="onClear">clear</button>
      `,
    });

    const { getByTestId, findByText, queryByText } = render(Wrapper);

    await fireEvent.click(getByTestId('validate-btn'));
    expect(await findByText('required')).toBeTruthy();

    await fireEvent.click(getByTestId('clear-btn'));
    await nextTick();
    expect(queryByText('required')).toBeNull();
  });
});

describe('FormItem interop with a REAL nested @flash-global66/g-input (provide/inject handshake)', () => {
  it('a real <GInput> nested in the default slot resolves this FormItem context via useFormItem() and validates on blur', async () => {
    const Wrapper = defineComponent({
      components: { GForm, GFormItem, GInput },
      setup() {
        const model = ref({ email: '' });
        const rules = {
          email: [
            { required: true, message: 'Email is required', trigger: 'blur' },
          ],
        };
        return { model, rules };
      },
      template: `
        <GForm :model="model" :rules="rules">
          <GFormItem prop="email">
            <GInput v-model="model.email" data-testid="email-input" />
          </GFormItem>
        </GForm>
      `,
    });

    const { container, findByText } = render(Wrapper);
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input).toBeTruthy();

    await fireEvent.blur(input);

    expect(await findByText('Email is required')).toBeTruthy();

    const inputRoot = container.querySelector('.gui-input');
    expect(inputRoot).toHaveClass('is-error');
  });
});
