import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { IconName } from '@/components/icons/models';
import AppLink from '@/components/app-link/AppLink.vue';
import IconArrowUpTriangle from '@/components/icons/IconArrowUpTriangle.vue';
import IconArrowDownTriangle from '@/components/icons/IconArrowDownTriangle.vue';
import SideBarMenuLinkTitle from '@/components/side-bar/SideBarMenuLinkTitle.vue';
import SideBarMenuLinkTitlePopup from '@/components/popup/SideBarMenuLinkTitlePopup.vue';

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

const getSideBarMenuLinkTitle = (props?: Partial<InstanceType<typeof SideBarMenuLinkTitle>['$props']>) =>
  mount(SideBarMenuLinkTitle, {
    props: {
      link: {
        to: { name: 'TestLinkTo' },
        title: 'TestLinkTitle',
        tabs: linkTabs,
        icon: IconName.IconNone,
      },
      isCurrentLink: false,
      isDropDownShown: false,
      isCollapsed: false,
      ...props,
    },
    global: {
      stubs: {
        RouterLink: { template: '<div><slot /></div>' },
      },
    },
  });

describe('Компонент SideBarMenuLinkTitle', () => {
  test('Если элемент меню свернут,то при наведении курсора на компонент отображается попап', async () => {
    const wrapper = getSideBarMenuLinkTitle({ isCollapsed: true });

    expect(wrapper.text()).not.toContain('TestLinkTitle');

    await wrapper.findComponent(AppLink).trigger('mouseenter');

    expect(wrapper.findComponent(SideBarMenuLinkTitlePopup).text()).toContain('TestLinkTitle');

    await wrapper.findComponent(AppLink).trigger('mouseleave');

    expect(wrapper.findComponent(SideBarMenuLinkTitlePopup).text()).not.toContain('TestLinkTitle');
  });

  test('Если элемент меню развернут, то отображается заголовок элемента. Если развернут - не отображается', async () => {
    const wrapper = getSideBarMenuLinkTitle({ isCollapsed: false });

    expect(wrapper.text()).toContain('TestLinkTitle');

    await wrapper.setProps({ isCollapsed: true });

    expect(wrapper.text()).not.toContain('TestLinkTitle');
  });

  test(`Если элемент меню содержит дочерние элементы и элемент развернут, то отображается иконка-стрелка.
  Стрелка вверх - меню элемента открыто, стрелка вниз - меню элемента закрыто`, async () => {
    const wrapper = getSideBarMenuLinkTitle({ isCollapsed: false });
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(IconArrowDownTriangle).exists()).toBeTruthy();

    await wrapper.setProps({ isDropDownShown: true });
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(IconArrowUpTriangle).exists()).toBeTruthy();
  });

  test('Если элемент меню содержит текущий адрес страницы, то фон элемента окрашивается в голубой', async () => {
    const wrapper = getSideBarMenuLinkTitle({ isCurrentLink: true });

    expect(wrapper.findComponent(AppLink).classes()).toContainEqual('bg-blue-2');

    await wrapper.setProps({ isCurrentLink: false });

    expect(wrapper.findComponent(AppLink).classes()).not.toContainEqual('bg-blue-2');
  });

  test.each`
    tabs        | isCollapsed | linkTo
    ${[]}       | ${false}    | ${{ name: 'TestLinkTo' }}
    ${linkTabs} | ${false}    | ${undefined}
    ${[]}       | ${true}     | ${{ name: 'TestLinkTo' }}
    ${linkTabs} | ${true}     | ${{ name: 'TestLinkTabTo1' }}
  `(
    `При isLinkContainsTabs=$isLinkContainsTabs и $isCollapsed, компонент будет ссылаться на $to`,
    async ({ tabs, isCollapsed, linkTo }) => {
      const wrapper = getSideBarMenuLinkTitle({
        link: {
          to: { name: 'TestLinkTo' },
          title: 'TestLinkTitle',
          tabs,
          icon: IconName.IconNone,
        },
        isCollapsed,
      });

      expect(wrapper.findComponent(AppLink).props().to).toStrictEqual(linkTo);
    },
  );
});
