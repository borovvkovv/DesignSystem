<template>
  <PortalTableData
    ref="tableDataRef"
    v-bind="{ ...props, ...attrs }"
    v-model="model"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortalTable',
});
</script>

<script setup lang="ts" generic="T">
import { computed, ref, useAttrs } from 'vue';
import type { TPortalData, PortalTableProps, PortalTableDataRef } from '@/components/portal-table/utils/models';
import PortalTableData from '@/components/portal-table/PortalTableData.vue';

const props = withDefaults(defineProps<PortalTableProps<T>>(), {
  stickyHeaderStubContainer: () => document.body,
});

const tableDataRef = ref<PortalTableDataRef>();
const tableRef = computed(() => tableDataRef.value?.tableRef);
const attrs = useAttrs();
const queryParams = computed(() => tableDataRef.value?.queryParams);

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: TPortalData<T> | null): void;
}>();

const model = computed<TPortalData<T> | null>({
  get() {
    return props.modelValue;
  },
  set(newValue): void {
    emit('update:modelValue', newValue);
  },
});

defineExpose({
  tableRef,
  queryParams,
});
</script>
