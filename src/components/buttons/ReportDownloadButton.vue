<template>
  <div>
    <IconTextButton
      v-if="buttonText"
      :text="buttonText"
      :color="AppColor.Grey"
      :icon-name="IconName.IconDownload"
      :size="Size.M"
      :icon-position="IconPosition.Right"
      :is-disabled="disabled"
      @button-click="modalRef?.openModal"
    />
    <IconButton
      v-else
      :color="AppColor.Grey"
      :icon-name="IconName.IconDownload"
      :size="Size.M"
      :is-disabled="disabled"
      @button-click="modalRef?.openModal"
    />
    <BaseReportDownloadModal
      ref="modalRef"
      :pdf-route="pdfRoute"
      :excel-route="excelRoute"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: 'ReportDownloadButton',
};
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import IconTextButton from '@/components/buttons/IconTextButton.vue';
import { AppColor, Size } from '@/enums';
import { IconName } from '@/components/icons/models';
import { IconPosition } from '@/components/buttons/utils/models';
import IconButton from '@/components/buttons/IconButton.vue';
import { useBreakpoints } from '@/components/layout/utils';
import BaseReportDownloadModal from '@/views/modals/BaseReportDownloadModal.vue';

withDefaults(
  defineProps<{
    pdfRoute: string;
    excelRoute: string;
    disabled: boolean;
  }>(),
  {
    disabled: false,
  },
);

const modalRef = ref();
const breakpoint = useBreakpoints();

const buttonText = computed(() => (breakpoint.lg.value ? 'Скачать отчет' : ''));
</script>
