import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { IconName } from '@/components/icons/models';
import SideBarMenuLinkDropDown from '@/components/side-bar/SideBarMenuLinkDropDown.vue';

const getSideBarMenuLinkDropDown = () =>
  mount(SideBarMenuLinkDropDown, {
    props: {
      tabs: [
        {
          to: { name: 'TestTabTo1' },
          title: 'TestTabTitle1',
          icon: IconName.IconTable,
        },
        {
          to: { name: 'TestTabTo2' },
          title: 'TestTabTitle2',
          icon: IconName.IconCard,
        },
      ],
      isCurrentTab: (tab) => tab.to.name === 'TestTabTo1',
    },
    global: {
      stubs: {
        RouterLink: { template: '<div><slot /></div>' },
      },
    },
  });

describe('Компонент SideBarMenuLinkDropDown', () => {
  test('Выпадающий список элемента меню отображает заголовки элементов списка', async () => {
    const wrapper = getSideBarMenuLinkDropDown();

    expect(wrapper.text()).toContain('TestTabTitle1');
    expect(wrapper.text()).toContain('TestTabTitle2');
  });

  test('Элемент списка с текущей ссылкой подчеркивается', async () => {
    const wrapper = getSideBarMenuLinkDropDown();

    expect(wrapper.findAll('span')?.[0].classes()).toContainEqual('border-b-blue-2');
    expect(wrapper.findAll('span')?.[1].classes()).not.toContainEqual('border-b-blue-2');
  });
});
