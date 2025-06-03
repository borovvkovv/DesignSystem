import { nextTick } from 'vue';
import { afterAll, beforeAll, beforeEach, describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import SideBarMenuLinkTitlePopup from '@/components/popup/SideBarMenuLinkTitlePopup.vue';

const target = document.createElement('DIV');
const mouseEvent = new MouseEvent('', {});

const getSideBarMenuLinkTitlePopup = () =>
  mount(SideBarMenuLinkTitlePopup, {
    props: { text: 'Test text' },
  });

describe('Компонент SideBarMenuLinkTitlePopup', () => {
  beforeAll(() => {
    Object.defineProperty(mouseEvent, 'target', {
      value: target,
      writable: false,
    });
  });

  beforeEach(() => {
    vi.spyOn(target, 'getBoundingClientRect').mockImplementation(() => ({
      x: 10,
      y: 10,
      left: 10,
      top: 10,
      right: 110,
      bottom: 110,
      width: 100,
      height: 100,
      toJSON: () => {},
    }));
  });

  afterAll(() => {
    Object.defineProperty(mouseEvent, 'target', {
      value: undefined,
      writable: false,
    });
  });

  test('Попап отображает текст из пропа', async () => {
    vi.useFakeTimers();
    const wrapper = getSideBarMenuLinkTitlePopup();
    wrapper.vm.showPopup(mouseEvent);
    await nextTick();

    expect(wrapper.text()).toBe('Test text');
  });

  test('При выполнении expose-метода showPopup попап появляется сразу', async () => {
    vi.useFakeTimers();
    const wrapper = getSideBarMenuLinkTitlePopup();

    expect(wrapper.isVisible()).toBeFalsy();

    wrapper.vm.showPopup(mouseEvent);
    await nextTick();

    expect(wrapper.isVisible()).toBeTruthy();
  });

  test('При выполнении expose-метода closePopup попап исчезает сразу', async () => {
    vi.useFakeTimers();
    const wrapper = getSideBarMenuLinkTitlePopup();

    expect(wrapper.isVisible()).toBeFalsy();

    wrapper.vm.showPopup(mouseEvent);
    await nextTick();

    expect(wrapper.isVisible()).toBeTruthy();

    wrapper.vm.closePopup();
    await nextTick();

    expect(wrapper.isVisible()).toBeFalsy();
  });

  test('При выполнении expose-метода showPopup попап появляется в 16px слева от курсора', async () => {
    vi.useFakeTimers();
    const wrapper = getSideBarMenuLinkTitlePopup();

    wrapper.vm.showPopup(mouseEvent);
    await nextTick();

    expect(wrapper.element.style.left).toBe('126px');
    expect(wrapper.element.style.top).toBe('10px');
  });
});
