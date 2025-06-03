import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { InputType } from '@/components/inputs/models';
import BaseSimpleInput from '@/components/inputs/BaseSimpleInput.vue';
import BasePasswordInput from '@/components/inputs/BasePasswordInput.vue';
import AppValidatableInput from '@/components/inputs/AppValidatableInput.vue';

const getAppValidatableInput = (props?: Partial<InstanceType<typeof AppValidatableInput>['$props']>) =>
  mount(AppValidatableInput, {
    props: {
      inputType: InputType.Password,
      label: '',
      placeholder: '',
      modelValue: {
        $anyDirty: false,
        $commit: () => {},
        $dirty: false,
        $error: false,
        $errors: [],
        $externalResults: [],
        $invalid: false,
        $model: '',
        $path: '',
        $pending: false,
        $reset: () => {},
        $silentErrors: [],
        $touch: () => {},
        $validate: () => new Promise((resolve) => resolve(true)),
      },
      ...props,
    },
  });

describe('Компонент AppValidatableInput', () => {
  test('Если тип инпута задан Password, то отображается компонент BasePasswordInput', async () => {
    const wrapper = getAppValidatableInput();
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(BasePasswordInput).exists()).toBeTruthy();
  });

  test('Если тип инпута задан любой, кроме Password, то отображается компонент BaseSimpleInput ', async () => {
    const wrapper = getAppValidatableInput({ inputType: InputType.Text });
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(BaseSimpleInput).exists()).toBeTruthy();
  });
});
