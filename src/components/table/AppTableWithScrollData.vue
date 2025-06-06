<template>
  <div>
    <AppTableWithScrollHeader
      ref="appTableWithScrollHeader"
      v-model:is-column-sticky-now="isColumnStickyNow"
      :table-data="modelValue"
      :header="modelValue.header"
      :table-with-content="contentTable"
      :is-header-sticky="modelValue.isHeaderSticky"
      :is-column-sticky="modelValue.isColumnSticky"
      @change:header="(isSticky) => emit('change:header', isSticky)"
    />
    <div
      ref="contentTableWrapper"
      :class="'overflow-x-auto overflow-y-hidden scrollbar-none'"
    >
      <AppTableBase
        ref="contentTableRef"
        :table="modelValue"
        class="border-separate border-spacing-0"
      >
        <template #header>
          <AppTableBaseHeader
            :header="modelValue.header"
            class="collapse"
          />
        </template>
        <template #default>
          <AppTableDataBody
            v-model="modelRows"
            :is-column-sticky="modelValue.isColumnSticky"
            :is-column-sticky-now="isColumnStickyNow"
          />
        </template>
      </AppTableBase>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTableWithScrollData',
});
</script>

<script setup lang="ts">
import type { TRow, TTableData } from '@/components/table/models';
import AppTableDataBody from '@/components/table/AppTableDataBody.vue';
import { computed, ref, watch } from 'vue';
import AppTableBase from '@/components/table/AppTableBase.vue';
import AppTableWithScrollHeader from '@/components/table/AppTableWithScrollHeader.vue';
import AppTableBaseHeader from '@/components/table/AppTableBaseHeader.vue';
import { useSynchronousTablesScroll } from '@/tables/hooks/useSynchronousTablesScroll';

const props = defineProps<{
  modelValue: TTableData;
}>();

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: TTableData): void;
  (eventName: 'change:header', isSticky: boolean): void;
}>();

const isColumnStickyNow = ref(false);
const appTableWithScrollHeader = ref();
const headerTableWrapper = computed(() => appTableWithScrollHeader.value?.headerTableWrapper);
const headerTable = computed(() => appTableWithScrollHeader.value?.headerTable ?? contentTableRef.value?.tableRef);
const contentTableWrapper = ref();
const contentTableRef = ref();
const contentTable = computed<HTMLTableElement | undefined>(() => contentTableRef.value?.tableRef);
const modelRows = computed({
  get(): TRow[] {
    return props.modelValue.rows;
  },
  set(newRows: TRow[]): void {
    emit('update:modelValue', {
      ...props.modelValue,
      rows: newRows,
    });
  },
});
const { onScrollContentTableHandler, onScrollHeaderTableHandler } = useSynchronousTablesScroll(
  headerTableWrapper,
  contentTableWrapper,
);

watch(
  [() => headerTableWrapper.value, () => contentTableWrapper.value],
  () => {
    if (headerTableWrapper.value && contentTableWrapper.value) {
      headerTableWrapper.value.addEventListener('scroll', onScrollHeaderTableHandler);
      contentTableWrapper.value.addEventListener('scroll', onScrollContentTableHandler);
    }
  },
  { immediate: true },
);

defineExpose({
  tableRef: headerTable,
});
</script>
