import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { IconName } from '@/components/icons/models';
import IconAddPerson from '@/components/icons/IconAddPerson.vue';
import AppTableCellIcon from '@/components/table/cells/AppTableCellIcon.vue';

const getAppTableCellIcon = () =>
  mount(AppTableCellIcon, {
    props: {
      cell: {
        type: 'icon',
        icon: IconName.IconAddPerson,
      },
    },
    global: {
      directives: {
        twMerge: {},
      },
    },
  });

describe('Компонент AppTableCellIcon', () => {
  test('Отрисовывает иконка имя которой передано через проп', async () => {
    const wrapper = getAppTableCellIcon();
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(IconAddPerson).exists()).toBeTruthy();
  });
});
