<template>
  <div class="overflow-x-auto scrollbar-thin">
    <PortalTableBase
      ref="tableBaseRef"
      v-bind="attrs"
      :table="modelValue"
    >
      <template #header>
        <PortalTableBaseHeader
          ref="portalTableBaseHeader"
          v-model:header="modelHeader"
          v-model:rows="modelRows"
          :is-header-sticky="modelValue.isHeaderSticky"
          :table-ref="tableRef"
          :table-container="tableContainer"
          @change:header="(isSticky) => emit('change:header', isSticky)"
        />
      </template>
      <template #default>
        <PortalTableDataBody
          v-if="!isLoading && modelRows.length"
          v-model="modelRows"
          :column-settings="columnSettings"
        />
      </template>
      <template #afterTable>
        <TableState
          v-bind="props"
          class="rounded-none border-0 shadow-none"
        />
      </template>
    </PortalTableBase>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortalTableData',
});
</script>

<script setup lang="ts" generic="T">
import { computed, ref, useAttrs } from 'vue';
import type {
  PortalTableBaseHeaderRef,
  PortalTableProps,
  TPortalData,
  TPortalHeaderRow,
  TPortalRow,
} from '@/components/portal-table/utils/models';
import TableState from '@/components/table/TableState.vue';
import PortalTableDataBody from '@/components/portal-table/PortalTableDataBody.vue';
import PortalTableBase from '@/components/portal-table/PortalTableBase.vue';
import PortalTableBaseHeader from '@/components/portal-table/PortalTableBaseHeader.vue';
import { headerCellsToColumnSettings } from '@/components/portal-table/utils';
import { getHeaderOrFirstHeaderRow } from '@/components/portal-table/utils/headerUtils';

const props = defineProps<PortalTableProps<T>>();
const attrs = useAttrs();

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: TPortalData<T>): void;
  (eventName: 'change:header', isSticky: boolean): void;
}>();

const portalTableBaseHeader = ref<PortalTableBaseHeaderRef | undefined>();
const tableBaseRef = ref();
const tableRef = computed(() => tableBaseRef.value?.tableRef);
const modelRows = computed<TPortalRow<T>[]>({
  get() {
    return props.modelValue.rows;
  },
  set(newRows): void {
    emit('update:modelValue', {
      ...props.modelValue,
      rows: newRows,
    });
  },
});

const queryParams = computed(() => portalTableBaseHeader.value?.queryParams);

const modelHeader = computed<TPortalHeaderRow<T> | TPortalHeaderRow<T>[]>({
  get() {
    return props.modelValue.header;
  },
  set(newValue): void {
    emit('update:modelValue', {
      ...props.modelValue,
      header: newValue,
    });
  },
});

const headerFirstRow = computed(() => getHeaderOrFirstHeaderRow(props.modelValue.header));
const columnSettings = computed(() => headerCellsToColumnSettings(headerFirstRow.value?.cells));

defineExpose({
  tableRef,
  queryParams,
});
</script>
