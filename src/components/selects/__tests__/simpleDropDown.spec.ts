import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import IconArrowDown from '@/components/icons/IconArrowDown.vue';
import SimpleDropDown from '@/components/selects/SimpleDropDown.vue';
import BaseSimpleDropDown from '@/components/selects/BaseSimpleDropDown.vue';

const getSimpleDropDown = (props?: Partial<InstanceType<typeof SimpleDropDown>['$props']>) =>
  mount(SimpleDropDown, {
    props: {
      text: 'TestText',
      ...props,
    },
    slots: { betweenTextAndArrow: 'TestBetweenTextAndArrow', belowText: 'TestBelowText', dropDown: 'TestDropDown' },
  });

describe('Компонент SimpleDropDown', () => {
  test('Отображается переданный через проп текст', () => {
    const wrapper = getSimpleDropDown();

    expect(wrapper.text()).toContain('TestText');
  });

  test('При открытии/закрытии выпадающего списка меняется стрелка', async () => {
    vi.useFakeTimers();
    const wrapper = getSimpleDropDown();
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(IconArrowDown).exists()).toBeTruthy();

    wrapper.findComponent(BaseSimpleDropDown).vm.setDropDownVisibility(true);

    expect(wrapper.findComponent(IconArrowDown).exists()).toBeTruthy();
  });
});
