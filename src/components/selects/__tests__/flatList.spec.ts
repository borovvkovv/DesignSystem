import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import FlatList from '@/components/selects/FlatList.vue';

const getFlatList = () =>
  mount(FlatList, {
    props: {
      title: 'Test main title',
      options: [
        {
          value: 'Test value 1',
          title: 'Test title 1',
          displayValue: 'Test displayValue 1',
          isColored: true,
        },
        {
          value: 'Test value 2',
          title: 'Test title 2',
          displayValue: 'Test displayValue 2',
          isColored: false,
        },
      ],
    },
  });

describe('Компонент FlatList', () => {
  test('Отображает заголовок списка', () => {
    const wrapper = getFlatList();

    expect(wrapper.text()).toContain('Test main title');
  });

  test('Отображает все значения в списке', () => {
    const wrapper = getFlatList();

    expect(wrapper.text()).toContain('Test displayValue 1');
    expect(wrapper.text()).toContain('Test displayValue 2');
  });

  test('Отображает все заголовки в списке', () => {
    const wrapper = getFlatList();

    expect(wrapper.text()).toContain('Test title 1');
    expect(wrapper.text()).toContain('Test title 2');
  });
});
