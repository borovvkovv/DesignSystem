import { describe, expect, test, vitest } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseButton from '@/components/buttons/BaseButton.vue';
import IconButton from '@/components/buttons/IconButton.vue';
import { IconName } from '@/components/icons/models';
import IconLoading from '@/components/icons/IconLoading.vue';
import IconQuestionFill from '@/components/icons/IconQuestionFill.vue';
import PopupInsideContainer from '@/components/popup/PopupInsideContainer.vue';

const getIconButton = (props?: Partial<Pick<InstanceType<typeof IconButton>, '$props'>['$props']>) =>
  mount(IconButton, {
    props: {
      iconName: IconName.IconQuestionFill,
      ...props,
    },
    global: {
      directives: {
        twMerge: {},
      },
    },
  });

describe('Компонент IconButton', () => {
  test('Отображение иконки в IconButton', async () => {
    const wrapper = getIconButton();
    await vitest.dynamicImportSettled();

    expect(wrapper.findComponent(IconQuestionFill).exists()).toBeTruthy();
  });

  test('При пропсе isLoading отображается только иконка загрукзи на IconButton', async () => {
    const wrapper = getIconButton({
      isLoading: true,
    });
    await vitest.dynamicImportSettled();

    expect(wrapper.findComponent(IconLoading).exists()).toBeTruthy();

    await wrapper.setProps({
      isLoading: false,
    });
    await vitest.dynamicImportSettled();

    expect(wrapper.findComponent(IconQuestionFill).exists()).toBeTruthy();
  });

  test('Отображение попапа при наведении курсора на IconButton', async () => {
    const wrapper = getIconButton({
      popupText: 'Popup text',
    });

    expect(wrapper.findComponent(PopupInsideContainer).text()).toBe('');

    await wrapper.findComponent(BaseButton).trigger('mouseenter');

    expect(wrapper.findComponent(PopupInsideContainer).text()).toBe('Popup text');

    await wrapper.findComponent(BaseButton).trigger('mouseleave');

    expect(wrapper.findComponent(PopupInsideContainer).text()).toBe('');
  });
});
