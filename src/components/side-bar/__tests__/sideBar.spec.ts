import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { RgkCodes } from '@/enums/rgk/rgk-codes';
import { IconName } from '@/components/icons/models';
import SideBar from '@/components/side-bar/SideBar.vue';
import SideBarLogo from '@/components/side-bar/SideBarLogo.vue';
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import SideBarMenuLink from '@/components/side-bar/SideBarMenuLink.vue';
import SideBarCollapseButton from '@/components/side-bar/SideBarCollapseButton.vue';

vi.mock('@/stores/session', () => ({
  useSession: () => ({ rgkCode: RgkCodes.Test }),
}));

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

const getSideBar = (props?: Partial<InstanceType<typeof SideBar>['$props']>) =>
  mount(SideBar, {
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
      isInitiallyCollapsed: false,
      ...props,
    },
    global: {
      stubs: {
        RouterLink: { template: '<div><slot /></div>' },
      },
    },
  });

describe('Компонент SideBarMenuLink', () => {
  test(`При нажатии на иконку-стрелку в меню после завершения анимации свертывания/развертывания
  меню, выполняется свертывание/развертывание иконки РГК`, async () => {
    const wrapper = getSideBar();

    expect(wrapper.findComponent(SideBarLogo).vm.isCollapsed).toBeFalsy;

    await wrapper.findComponent(SideBarCollapseButton).trigger('click');
    await wrapper.trigger('transitionend');

    expect(wrapper.findComponent(SideBarLogo).vm.isCollapsed).toBeTruthy();

    await wrapper.findComponent(SideBarCollapseButton).trigger('click');
    await wrapper.trigger('transitionend');

    expect(wrapper.findComponent(SideBarLogo).vm.isCollapsed).toBeFalsy;
  });

  test(`При нажатии на иконку-стрелку в меню после завершения анимации свертывания/развертывания
  меню, выполняется свертывание/развертывание элементов меню`, async () => {
    const wrapper = getSideBar();

    wrapper.findAllComponents(SideBarMenuLink).forEach((sideBarMenuLink) => {
      expect(sideBarMenuLink.vm.isCollapsed).toBeFalsy();
    });

    await wrapper.findComponent(SideBarCollapseButton).trigger('click');
    await wrapper.trigger('transitionend');

    wrapper.findAllComponents(SideBarMenuLink).forEach((sideBarMenuLink) => {
      expect(sideBarMenuLink.vm.isCollapsed).toBeTruthy();
    });

    await wrapper.findComponent(SideBarCollapseButton).trigger('click');
    await wrapper.trigger('transitionend');

    wrapper.findAllComponents(SideBarMenuLink).forEach((sideBarMenuLink) => {
      expect(sideBarMenuLink.vm.isCollapsed).toBeFalsy();
    });
  });

  test(`При нажатии на иконку-стрелку в меню после завершения анимации свертывания/развертывания
  меню, выполняется смена направления иконки-стрелки`, async () => {
    const wrapper = getSideBar();
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(IconArrowLeft).exists()).toBeTruthy;

    await wrapper.findComponent(SideBarCollapseButton).trigger('click');
    await wrapper.trigger('transitionend');
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(IconArrowRight).exists()).toBeTruthy();

    await wrapper.findComponent(SideBarCollapseButton).trigger('click');
    await wrapper.trigger('transitionend');
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(IconArrowLeft).exists()).toBeTruthy;
  });

  test('Если проп isInitiallyCollapsed=false, то при монтировании компонента меню развернуто', async () => {
    const wrapper = getSideBar({ isInitiallyCollapsed: false });

    expect(wrapper.findComponent(SideBarLogo).vm.isCollapsed).toBeFalsy;
  });

  test('Если проп isInitiallyCollapsed=true, то при монтировании компонента меню свернуто', async () => {
    const wrapper = getSideBar({ isInitiallyCollapsed: true });

    expect(wrapper.findComponent(SideBarLogo).vm.isCollapsed).toBeTruthy();
  });
});
