<template>
  <tbody>
    <template
      v-for="(row, index) in modelValue"
      :key="`row_${index}`"
    >
      <PortalTableBaseRow
        :model-value="row"
        :column-settings="columnSettings"
        @update:model-value="(newValue: TPortalRow<T>) => updateRow(modelValue, index, newValue)"
      />
    </template>
  </tbody>
</template>

<script lang="ts">
export default {
  name: 'PortalTableDataBody',
};
</script>

<script setup lang="ts" generic="T">
import type { ColumnSetting, TPortalRow } from '@/components/portal-table/utils/models';
import PortalTableBaseRow from '@/components/portal-table/PortalTableBaseRow.vue';

defineProps<{
  modelValue: TPortalRow<T>[];
  columnSettings: ColumnSetting[];
}>();

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: TPortalRow<T>[]): void;
}>();

const updateRow = (rows: TPortalRow<T>[], index: number, newRowValue: TPortalRow<T>) => {
  const newRows = rows.slice();
  newRows[index] = newRowValue;
  emit('update:modelValue', newRows);
};
</script>
