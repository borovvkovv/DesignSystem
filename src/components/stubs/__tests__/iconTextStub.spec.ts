import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import IconTextStub from '../IconTextStub.vue';
import { IconName } from '@/components/icons/models';
import { Size } from '@/enums';
import { Format } from '@/enums/format';
import IconNone from '@/components/icons/IconNone.vue';

const getIconTextStub = () =>
  mount(IconTextStub, {
    props: {
      texts: ['TestText1', 'TestText2'],
      icon: IconName.IconNone,
      height: 100,
      size: Size.L,
      format: Format.Compact,
    },
    global: {
      directives: {
        twMerge: {},
      },
    },
  });

describe('Компонент IconTextStub', () => {
  test('Компонент отрисовывает массив текстов из пропа texts', () => {
    const wrapper = getIconTextStub();

    expect(wrapper.text()).toContain('TestText1');
    expect(wrapper.text()).toContain('TestText2');
  });

  test('Компонент отрисовывает иконку из пропа icon', async () => {
    const wrapper = getIconTextStub();
    await vi.dynamicImportSettled();

    expect(wrapper.findComponent(IconNone).exists()).toBeTruthy();
  });
});
