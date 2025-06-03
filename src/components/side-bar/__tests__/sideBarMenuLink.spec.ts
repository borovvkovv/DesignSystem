import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { IconName } from '@/components/icons/models';
import AppLink from '@/components/app-link/AppLink.vue';
import IconRuble from '@/components/icons/IconRuble.vue';
import SideBarMenuLink from '@/components/side-bar/SideBarMenuLink.vue';
import BaseSimpleDropDown from '@/components/selects/BaseSimpleDropDown.vue';
import SideBarMenuLinkTitle from '@/components/side-bar/SideBarMenuLinkTitle.vue';
import SideBarMenuLinkDropDown from '@/components/side-bar/SideBarMenuLinkDropDown.vue';
import SideBarMenuLinkTitlePopup from '@/components/popup/SideBarMenuLinkTitlePopup.vue';

vi.mock('@/router', () => ({
  default: {
    currentRoute: {
      value: {
        matched: ['', { name: 'TestLinkTo' }, { name: 'TestLinkTabTo1' }],
      },
    },
  },
}));

const linkTabs = [
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

const getSideBarMenuLink = (props?: Partial<InstanceType<typeof SideBarMenuLink>['$props']>) =>
  mount(SideBarMenuLink, {
    props: {
      link: {
        to: { name: 'TestLinkTo' },
        title: 'TestLinkTitle',
        tabs: linkTabs,
        icon: IconName.IconRuble,
      },
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
  test('Если элемент меню свернут,то при наведении курсора на компонент отображается попап', async () => {
    const wrapper = getSideBarMenuLink({ isCollapsed: true });

    expect(wrapper.text()).not.toContain('TestLinkTitle');

    await wrapper.findComponent(AppLink).trigger('mouseenter');

    expect(wrapper.findComponent(SideBarMenuLinkTitlePopup).text()).toContain('TestLinkTitle');

    await wrapper.findComponent(AppLink).trigger('mouseleave');

    expect(wrapper.findComponent(SideBarMenuLinkTitlePopup).text()).not.toContain('TestLinkTitle');
  });

  test('Если элемент меню развернут, то отображается заголовок элемента. Если развернут - не отображается', async () => {
    const wrapper = getSideBarMenuLink({ isCollapsed: false });

    expect(wrapper.text()).toContain('TestLinkTitle');

    await wrapper.setProps({ isCollapsed: true });

    expect(wrapper.text()).not.toContain('TestLinkTitle');
  });

  test(`Если элемент меню содержит дочерние элементы и он развернут, то при нажатии на загловок элемента меню открывается выпадающий список дочерних элементов`, async () => {
    const wrapper = getSideBarMenuLink({ isCollapsed: false });

    expect(wrapper.findComponent(BaseSimpleDropDown).vm.isDropDownShown).toBeFalsy();

    await wrapper.findComponent(SideBarMenuLinkTitle).trigger('click');

    expect(wrapper.findComponent(BaseSimpleDropDown).vm.isDropDownShown).toBeTruthy();
  });

  test('Если элемент меню содержит текущий адрес страницы, то фон элемента окрашивается в голубой', async () => {
    const wrapper = getSideBarMenuLink();

    expect(wrapper.findComponent(SideBarMenuLinkTitle).findComponent(AppLink).classes()).toContainEqual('bg-blue-2');
  });

  test('Если дочерний элемент меню содержит текущий адрес страницы, то дочерний элемент подчеркивается', async () => {
    const wrapper = getSideBarMenuLink();

    expect(wrapper.findComponent(SideBarMenuLinkDropDown).findAll('span')[0].classes()).toContainEqual(
      'border-b-blue-2',
    );
    expect(wrapper.findComponent(SideBarMenuLinkDropDown).findAll('span')[1].classes()).not.toContainEqual(
      'border-b-blue-2',
    );
  });

  test('Отображается икнока элемента меню', async () => {
    const wrapper = getSideBarMenuLink();
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(IconRuble).exists()).toBeTruthy();
  });

  test('Если у элемента меню нет дочерних элементов или элемент свернут, то выпадающий список не отрисовывается', async () => {
    const wrapper = getSideBarMenuLink({
      link: {
        to: { name: 'TestLinkTo' },
        title: 'TestLinkTitle',
        tabs: [],
        icon: IconName.IconRuble,
      },
      isCollapsed: true,
    });

    expect(wrapper.findComponent(BaseSimpleDropDown).exists()).toBeFalsy();
  });

  test('При выполнении expose-метода collapse закрывается выпадающий список элемента меню', async () => {
    const wrapper = getSideBarMenuLink();

    expect(wrapper.findComponent(BaseSimpleDropDown).vm.isDropDownShown).toBeFalsy();

    await wrapper.findComponent(SideBarMenuLinkTitle).trigger('click');

    expect(wrapper.findComponent(BaseSimpleDropDown).vm.isDropDownShown).toBeTruthy();

    wrapper.vm.collapse();

    expect(wrapper.findComponent(BaseSimpleDropDown).vm.isDropDownShown).toBeFalsy();
  });
});
