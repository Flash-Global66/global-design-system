import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import { defineComponent, ref } from 'vue';
import GForm from '../src/Form.vue';
import GFormItem from '../src/form-item.vue';

/**
 * Regression test for the g-form migration (WU-3): mounting `form-item.vue`
 * exercises `useId` from `@flash-global66/g-hooks` (must resolve and run
 * inside a real component `setup()` without throwing) together with
 * `getProp` from `@flash-global66/g-utils` (dot-notation model/rules
 * resolution) end to end.
 */
describe('FormItem (g-hooks useId + g-utils getProp integration)', () => {
  it('mounts without throwing, resolving useId from @flash-global66/g-hooks', () => {
    expect(() =>
      render(GFormItem, {
        props: { prop: 'name' },
      }),
    ).not.toThrow();
  });

  it('resolves a dot-notation model path via getProp and surfaces a rule validation error', async () => {
    const Wrapper = defineComponent({
      components: { GForm, GFormItem },
      setup() {
        const formRef = ref<InstanceType<typeof GForm>>();
        const model = ref({ nested: { name: '' } });
        const rules = {
          'nested.name': [
            { required: true, message: 'Name required', trigger: 'manual' },
          ],
        };
        const onValidate = () => {
          formRef.value?.validate().catch(() => undefined);
        };
        return { formRef, model, rules, onValidate };
      },
      template: `
        <GForm ref="formRef" :model="model" :rules="rules">
          <GFormItem prop="nested.name" show-message="parent">
            <span data-testid="content" />
          </GFormItem>
        </GForm>
        <button data-testid="validate-btn" @click="onValidate">validate</button>
      `,
    });

    const { getByTestId, findByText } = render(Wrapper);
    await fireEvent.click(getByTestId('validate-btn'));
    expect(await findByText('Name required')).toBeTruthy();
  });
});
