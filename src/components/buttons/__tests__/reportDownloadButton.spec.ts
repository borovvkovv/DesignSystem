import { ref } from 'vue';
import { beforeEach, describe, expect, test, vi, vitest } from 'vitest';
import { mount } from '@vue/test-utils';
import { Dialog } from '@headlessui/vue';
import { useBreakpoints } from '@/components/layout/utils';
import IconDownload from '@/components/icons/IconDownload.vue';
import ReportDownloadButton from '@/components/buttons/ReportDownloadButton.vue';
import IconTextButton from '@/components/buttons/IconTextButton.vue';
import IconButton from '@/components/buttons/IconButton.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';

const mockUseBreakpoints = (t: Partial<ReturnType<typeof useBreakpoints>>) => {
  vi.mocked(useBreakpoints, { partial: true }).mockReturnValue(t);
};

const getReportDownloadButton = (
  props?: Partial<Pick<InstanceType<typeof ReportDownloadButton>, '$props'>['$props']>,
) =>
  mount(ReportDownloadButton, {
    props: {
      pdfRoute: 'Test pdf route',
      excelRoute: 'Text excel route',
      ...props,
    },
    global: {
      directives: {
        twMerge: {},
      },
    },
  });

describe('Компонент ReportDownloadButton', () => {
  beforeEach(() => {
    vi.mock('@/components/layout/utils');

    vi.stubGlobal(
      'ResizeObserver',
      vitest.fn(() => ({
        disconnect: vitest.fn(),
        observe: vitest.fn(),
        unobserve: vitest.fn(),
      })),
    );
  });

  test('Отображаются текст и иконка, если размер экрана >= lg', async () => {
    mockUseBreakpoints({ lg: ref(true) });
    const wrapper = getReportDownloadButton({
      disabled: false,
    });
    await vitest.dynamicImportSettled();

    expect(wrapper.findComponent(IconDownload).exists()).toBeTruthy();
    expect(wrapper.findComponent(IconTextButton).html()).toContain('Скачать отчет');
  });

  test('Отображается только иконка, если размер экрана < lg', async () => {
    mockUseBreakpoints({ lg: ref(false) });
    const wrapper = getReportDownloadButton({
      disabled: false,
    });
    await vitest.dynamicImportSettled();

    expect(wrapper.findComponent(IconDownload).exists()).toBeTruthy();
    expect(wrapper.findComponent(IconButton).html()).not.toContain('Скачать отчет');
  });

  test('При клике на кнопку открывается модальное окно для скачивания отчета', async () => {
    mockUseBreakpoints({ lg: ref(false) });
    const wrapper = getReportDownloadButton({
      disabled: false,
    });
    await vitest.dynamicImportSettled();
    await wrapper.findComponent(BaseButton).trigger('click');

    expect(wrapper.findComponent(Dialog).exists()).toBeTruthy();
  });

  test('При клике на неактивную кнопку модальное окно для скачивания отчета не открывается', async () => {
    mockUseBreakpoints({ lg: ref(false) });
    const wrapper = getReportDownloadButton({
      disabled: true,
    });
    await vitest.dynamicImportSettled();
    await wrapper.findComponent(BaseButton).trigger('click');

    expect(wrapper.findComponent(Dialog).exists()).toBeFalsy();
  });
});
