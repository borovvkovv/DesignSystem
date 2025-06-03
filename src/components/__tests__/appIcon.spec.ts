import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import AppIcon from '@/components/AppIcon.vue';
import { IconName } from '@/components/icons/models';
import IconFaq from '@/components/icons/IconFaq.vue';

const getAppIcon = () =>
  mount(AppIcon, {
    props: {
      icon: IconName.IconFaq,
      size: 55,
    },
  });

describe('Компонент AppIcon', () => {
  test('Иконка отрисовывается в соответствии с пропом icon', async () => {
    const wrapper = getAppIcon();
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(IconFaq).exists()).toBeTruthy();
  });

  test('Размер иконки передается без изменений', async () => {
    const wrapper = getAppIcon();
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(AppIcon).vm.size).toBe(55);
  });
});
