import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import AppLink from '@/components/app-link/AppLink.vue';
import { HintType } from '@/components/hints/utils/models';
import TextButton from '@/components/buttons/TextButton.vue';
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';
import TextButtonHint from '@/components/hints/TextButtonHint.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';

const getTextButtonHint = (props?: Partial<InstanceType<typeof TextButtonHint>['$props']>) =>
  mount(TextButtonHint, {
    props: {
      type: HintType.Info,
      textColor: '',
      hints: [
        {
          text: 'Текст',
          buttonText: 'Текст кнопки',
          buttonClick: () => vi.fn(),
        },
        {
          text: 'Текст',
          buttonText: 'Текст кнопки',
          buttonClick: () => vi.fn(),
        },
      ],
      ...props,
    },
    global: {
      directives: {
        twMerge: {},
      },
    },
  });

describe('Компонент TextButtonHint', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'ResizeObserver',
      vi.fn(() => ({
        disconnect: vi.fn(),
        observe: vi.fn(),
        unobserve: vi.fn(),
      })),
    );
  });

  test('Хинт отрисовывает стрелки, если сообщений больше одного', async () => {
    const wrapper = getTextButtonHint();

    expect(wrapper.findComponent(IconArrowLeft).exists()).toBeTruthy();
    expect(wrapper.findComponent(IconArrowRight).exists()).toBeTruthy();

    await wrapper.setProps({
      hints: [
        {
          text: 'Текст',
          buttonText: 'Текст кнопки',
          buttonClick: () => vi.fn(),
        },
      ],
    });

    expect(wrapper.findComponent(IconArrowLeft).exists()).toBeFalsy();
    expect(wrapper.findComponent(IconArrowRight).exists()).toBeFalsy();
  });

  test(`Если текущее сообщение первое, то левая стрелка недоступна.
  Если текущее сообщение последнее, то правая стрелка недоступна`, async () => {
    const wrapper = getTextButtonHint();

    expect(wrapper.findAllComponents(AppLink)[0].props().isDisabled).toBeTruthy();
    expect(wrapper.findAllComponents(AppLink)[1].props().isDisabled).toBeFalsy();

    await wrapper.getComponent(IconArrowRight).trigger('click');

    expect(wrapper.findAllComponents(AppLink)[0].props().isDisabled).toBeFalsy();
    expect(wrapper.findAllComponents(AppLink)[1].props().isDisabled).toBeTruthy();
  });

  test('Если сообщение содержит кнопку, то она отображается', () => {
    const wrapper = getTextButtonHint();

    expect(wrapper.findComponent(TextButton).exists()).toBeTruthy();
  });

  test('При нажатии кнопки сообщения вызывается колбэк из пропа', async () => {
    const wrapper = getTextButtonHint({
      hints: [
        {
          text: 'Текст',
          buttonText: 'Текст кнопки',
          buttonClick: () => vi.fn(),
        },
      ],
    });
    vi.spyOn(wrapper.props().hints[0], 'buttonClick').mockImplementation(() => [
      {
        buttonClick: () => vi.fn(),
      },
    ]);

    await wrapper.findComponent(TextButton).trigger('click');

    expect(wrapper.props().hints[0].buttonClick).toHaveBeenCalledOnce();
  });
});
