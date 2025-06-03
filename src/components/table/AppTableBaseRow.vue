<template>
  <tr :class="[modelValue.modifier?.text, modelValue.modifier?.textColor, modelValue.modifier?.other]">
    <td
      v-for="(cell, cellIndex) in modelValue.cells"
      :key="`cell_${cellIndex}`"
      :rowspan="cell.rowspan"
      :colspan="cell.colspan"
      :class="[
        cell.modifier?.text,
        cell.modifier?.textColor,
        cell.modifier?.textAlign ?? (cellIndex === 0 ? 'text-left' : 'text-right'),
        cell.modifier?.verticalAlign ?? 'align-top',
        cell.modifier?.padding ?? ['py-3', cellIndex > 0 && 'pl-8 md:pl-16'],
        cell.modifier?.border ?? 'border-t border-t-blueGrey-4',
        cell.modifier?.width,
        cell.modifier?.other,
        isColumnSticky && cellIndex === 0 && 'sticky left-0 bg-white',
        isColumnSticky && cellIndex === 0 && isColumnStickyNow && 'shadow-right4',
      ]"
    >
      <AppTableBaseCell
        :key="cellIndex"
        :model-value="cell"
        @update:model-value="
          (newValue) => emit('update:modelValue', getTableRowWithNewCell(modelValue, cellIndex, newValue))
        "
      />
    </td>
  </tr>
</template>

<script lang="ts">
export default {
  name: 'AppTableBaseRow',
};
</script>

<script setup lang="ts">
import type { TRow } from '@/components/table/models';
import AppTableBaseCell from '@/components/table/AppTableBaseCell.vue';
import { getTableRowWithNewCell } from '@/components/table/utils';

defineProps<{
  modelValue: TRow;
  isColumnSticky?: boolean;
  isColumnStickyNow?: boolean;
}>();

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: TRow): void;
}>();
</script>
