import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { IconName } from '@/components/icons/models';
import SideBarMenu from '@/components/side-bar/SideBarMenu.vue';
import BaseSimpleDropDown from '@/components/selects/BaseSimpleDropDown.vue';
import SideBarMenuLinkTitle from '@/components/side-bar/SideBarMenuLinkTitle.vue';

vi.mock('@/router', () => ({
  default: {
    currentRoute: {
      value: {
        matched: ['', { name: 'TestLinkTo1' }, { name: 'TestLinkTabTo1' }],
      },
    },
  },
}));

const linkTabs1 = [
  {
    to: { name: 'TestLinkTabTo1' },
    title: 'TestLinkTabTitle1',
    tabs: [],
    icon: IconName.IconTable,
  },
  {
    to: { name: 'TestLinkTabTo2' },
    title: 'TestLinkTabTitle2',
    tabs: [],
    icon: IconName.IconCard,
  },
];

const linkTabs2 = [
  {
    to: { name: 'TestLinkTabTo3' },
    title: 'TestLinkTabTitle3',
    tabs: [],
    icon: IconName.IconTable,
  },
  {
    to: { name: 'TestLinkTabTo4' },
    title: 'TestLinkTabTitle4',
    tabs: [],
    icon: IconName.IconCard,
  },
];

const getSideBarMenu = (props?: Partial<InstanceType<typeof SideBarMenu>['$props']>) =>
  mount(SideBarMenu, {
    props: {
      links: [
        {
          to: { name: 'TestLinkTo1' },
          title: 'TestLinkTitle1',
          tabs: linkTabs1,
          icon: IconName.IconRuble,
        },
        {
          to: { name: 'TestLinkTo2' },
          title: 'TestLinkTitle2',
          tabs: linkTabs2,
          icon: IconName.IconAddPerson,
        },
      ],
      isCollapsed: false,
      ...props,
    },
    global: {
      stubs: {
        RouterLink: { template: '<div><slot /></div>' },
      },
    },
  });

describe('Компонент SideBarMenuLink', () => {
  test('При выполнении expose-метода collapse закрываются все выпадающие списки элементов меню', async () => {
    const wrapper = getSideBarMenu();

    expect(wrapper.findAllComponents(BaseSimpleDropDown)?.[0].vm.isDropDownShown).toBeFalsy();
    expect(wrapper.findAllComponents(BaseSimpleDropDown)?.[1].vm.isDropDownShown).toBeFalsy();

    await wrapper.findAllComponents(SideBarMenuLinkTitle)?.[0].trigger('click');
    await wrapper.findAllComponents(SideBarMenuLinkTitle)?.[1].trigger('click');

    expect(wrapper.findAllComponents(BaseSimpleDropDown)?.[0].vm.isDropDownShown).toBeTruthy();
    expect(wrapper.findAllComponents(BaseSimpleDropDown)?.[1].vm.isDropDownShown).toBeTruthy();

    wrapper.vm.collapse();

    expect(wrapper.findAllComponents(BaseSimpleDropDown)?.[0].vm.isDropDownShown).toBeFalsy();
    expect(wrapper.findAllComponents(BaseSimpleDropDown)?.[1].vm.isDropDownShown).toBeFalsy();
  });
});
