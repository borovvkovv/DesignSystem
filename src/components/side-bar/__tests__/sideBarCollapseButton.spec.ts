import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import SideBarCollapseButton from '@/components/side-bar/SideBarCollapseButton.vue';

const getSideBarCollapseButton = (props?: Partial<InstanceType<typeof SideBarCollapseButton>['$props']>) =>
  mount(SideBarCollapseButton, {
    props: {
      isInitiallyCollapsed: false,
      isCollapsed: false,
      ...props,
    },
  });

describe('Компонент SideBarCollapseButton', () => {
  test('При изменении пропа isCollapsed меняется икнока-стрелка', async () => {
    const wrapper = getSideBarCollapseButton();
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(IconArrowRight).exists()).toBeFalsy();

    await wrapper.setProps({ isCollapsed: true });
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(IconArrowRight).exists()).toBeTruthy();
  });

  test('При нажатии на компонент вызвается эмит click:collapse', async () => {
    vi.useFakeTimers();
    const wrapper = getSideBarCollapseButton();

    expect(wrapper.emitted('click:collapse')).toBeUndefined();

    await wrapper.trigger('click');

    expect(wrapper.emitted('click:collapse')).toHaveLength(1);
  });
});
