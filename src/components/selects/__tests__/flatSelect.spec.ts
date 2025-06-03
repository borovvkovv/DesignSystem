import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import FlatSelect from '@/components/selects/FlatSelect.vue';
import type { ISelectItem } from '@/components/selects/models';

const getFlatList = (props?: Partial<InstanceType<typeof FlatSelect>['$props']>) =>
  mount(FlatSelect, {
    props: {
      title: 'Main title',
      modelValue: undefined,
      options: [
        { title: 'Title1', value: 'Value1' },
        { title: 'Title2', value: 'Value2' },
        { title: 'Title3', value: 'Value3' },
      ],
      count: 555,
      isWithSearch: true,
      ...props,
    },
    attachTo: document.body,
  });

describe('Компонент FlatSelect', () => {
  test('Отображает заголовок списка', () => {
    const wrapper = getFlatList();

    expect(wrapper.text()).toContain('Main title');
  });

  test('Счетчик количества элементов всегда показывает значение пропа count', async () => {
    const wrapper = getFlatList();

    expect(wrapper.text()).toContain(555);

    await wrapper.find('input').setValue('Title1');

    expect(wrapper.text()).toContain(555);
  });

  test(`При вводе в инпут регистрозависимого текста, уникального только для одного элемента списка,
  то вызывается эмит update:modelValue с объектом - элементом списка`, async () => {
    const wrapper = getFlatList();

    expect(wrapper.emitted('update:modelValue')).toBeUndefined();

    await wrapper.find('input').setValue('Title1');

    expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
    expect(wrapper.emitted('update:modelValue')?.[0]).toStrictEqual([{ title: 'Title1', value: 'Value1' }]);

    await wrapper.find('input').setValue('title1');

    expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
  });

  test(`При нажатии на один из элементов списка, вызывается эмит update:modelValue с элементом списка`, async () => {
    const wrapper = getFlatList();

    expect(wrapper.emitted('update:modelValue')).toBeUndefined();

    await wrapper.findAll('li')[0].trigger('click');

    expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
    expect(wrapper.emitted('update:modelValue')?.[0]).toStrictEqual([{ title: 'Title1', value: 'Value1' }]);
  });

  test.each`
    isWithSearch | query       | options
    ${true}      | ${''}       | ${[{ title: 'Title1', value: 'Value1' }, { title: 'Title2', value: 'Value2' }, { title: 'Title3', value: 'Value3' }]}
    ${true}      | ${'title'}  | ${[{ title: 'Title1', value: 'Value1' }, { title: 'Title2', value: 'Value2' }, { title: 'Title3', value: 'Value3' }]}
    ${true}      | ${'title3'} | ${[{ title: 'Title3', value: 'Value3' }]}
    ${true}      | ${'Title3'} | ${[{ title: 'Title3', value: 'Value3' }]}
  `(
    'Проп isWithSearch=$isWithSearch, query=$query, элементы списка будут: $options',
    async ({ isWithSearch, query, options }) => {
      const wrapper = getFlatList({ isWithSearch });

      if (query !== undefined) {
        await wrapper.find('input').setValue(query);
      }

      options.forEach((option: ISelectItem) => {
        expect(wrapper.text()).toContain(option.title);
      });
    },
  );
});
