import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { RgkCodes } from '@/enums/rgk/rgk-codes';
import SideBarLogo from '@/components/side-bar/SideBarLogo.vue';

vi.mock('@/stores/session', () => ({
  useSession: () => ({ rgkCode: RgkCodes.Test }),
}));

const getSideBarLogo = () =>
  mount(SideBarLogo, {
    props: {
      isInitiallyCollapsed: false,
      isCollapsed: false,
    },
  });

describe('Компонент SideBarLogo', () => {
  test('В зависимости от пропа isInitiallyCollapsed меняется видимость уменьшенной иконки РГК', async () => {
    const wrapper = getSideBarLogo();
    await vi.dynamicImportSettled();

    expect(wrapper.find<HTMLElement>('[data-test="gazpromIconWrapper"]').classes()).toContainEqual('opacity-0');

    await wrapper.setProps({ isInitiallyCollapsed: true });

    expect(wrapper.find<HTMLElement>('[data-test="gazpromIconWrapper"]').classes()).toContainEqual('opacity-100');
  });
});
