<template>
  <tbody>
    <template
      v-for="(modelRow, index) in modelValue.model"
      :key="`row_${index}`"
    >
      <AppTableBaseRow
        :model-value="modelValue.rowFactory(modelRow, index)"
        :is-column-sticky
        :is-column-sticky-now
        @update:model-value="(newValue) => updateRow(modelValue.model, index, newValue)"
      />
    </template>
  </tbody>
</template>

<script lang="ts">
export default {
  name: 'AppTableModelBody',
};
</script>

<script setup lang="ts" generic="T">
import type { TRow, TTableModelRows } from '@/components/table/models';
import AppTableBaseRow from '@/components/table/AppTableBaseRow.vue';

const props = defineProps<{
  modelValue: TTableModelRows<T>;
  isColumnSticky?: boolean;
  isColumnStickyNow?: boolean;
}>();

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: TTableModelRows<T>): void;
  (eventName: 'change:row', changedRowIndex: number, newModelRows: TTableModelRows<T>): void;
}>();

const updateRow = (rows: T[], index: number, newRowValue: TRow) => {
  const newRows = rows.slice();
  newRows[index] = {
    ...newRows[index],
    ...props.modelValue.modelChanges(newRowValue),
  };
  const newModelRows = {
    ...props.modelValue,
    model: newRows,
  };

  emit('update:modelValue', newModelRows);
  emit('change:row', index, newModelRows);
};
</script>
