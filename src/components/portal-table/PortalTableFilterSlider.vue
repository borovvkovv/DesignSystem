<template>
  <PortalTableModalSlider
    ref="modalRef"
    title="Фильтр"
    @apply:click="onApplyClick"
    @reset:click="onResetClick"
  >
    <div class="flex flex-col gap-y-6">
      <div
        v-for="({ columnControl, columnControlIndex, headerCellIndex, headerTitle }, filterInfoIndex) in filterInfoList"
        :key="filterInfoIndex"
        class="flex flex-col gap-y-2"
      >
        <span class="text-size-5 text-grey-1">{{ headerTitle }}</span>
        <TableFilter
          ref="filterRefs"
          :column-control="columnControl"
          :column-control-index="columnControlIndex"
          :header-cell-index="headerCellIndex"
        />
      </div>
    </div>
  </PortalTableModalSlider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortalTableFilterSlider',
});
</script>

<script setup lang="ts" generic="T">
import { computed, ref, unref } from 'vue';
import { useRouter } from 'vue-router';
import type { MainModalsMethods } from '@/views/base/models';
import type { IPortalTableFilterRef, TPortalData, PortalTableFilter, PortalTableFilterInfo } from './utils/models';
import { applyFilters } from './utils';
import { getFilterInfoList } from './utils';
import PortalTableModalSlider from './PortalTableModalSlider.vue';
import TableFilter from './filters/TableFilter.vue';
import { getHeaderOrFirstHeaderRow } from './utils/headerUtils';

const props = defineProps<{
  tableData: TPortalData<T>;
}>();

const router = useRouter();
const header = computed(() => getHeaderOrFirstHeaderRow(props.tableData.header));
const filterRefs = ref<Array<IPortalTableFilterRef>>();
const modalRef = ref<MainModalsMethods | undefined>();
const isAnyError = computed<boolean>(() => filterRefs.value?.some((filterRef) => unref(filterRef.isError)) ?? false);

const filterInfoList = computed<PortalTableFilterInfo<PortalTableFilter>[]>(() => getFilterInfoList(header.value));

const onApplyClick = () => {
  filterRefs.value?.forEach((filterRef) => {
    unref(filterRef.validator).$touch();
  });

  if (!isAnyError.value) {
    applyFilters(router, filterRefs.value ?? []);
    modalRef.value?.closeModal();
  }
};

const onResetClick = () => {
  filterRefs.value?.forEach((filterRef) => filterRef.reset());
};

const closeModal = () => {
  modalRef.value?.closeModal();
};

defineExpose({
  openModal: () => {
    modalRef.value?.openModal();
  },
  closeModal,
});
</script>
