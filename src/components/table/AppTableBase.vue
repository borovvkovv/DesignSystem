<template>
  <table
    ref="tableRef"
    :class="[
      table.modifier?.text ?? 'text-size-5',
      table.modifier?.textColor ?? 'text-black-1',
      table.modifier?.width ?? 'w-full',
      table.modifier?.other,
    ]"
  >
    <slot name="header" />
    <slot v-if="!isLoading" />
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTableBase',
});
</script>

<script setup lang="ts">
import type { TTableBase } from '@/components/table/models';
import { ref } from 'vue';

defineProps<{
  table: TTableBase;
  isLoading?: boolean;
}>();

const tableRef = ref();

defineExpose({
  tableRef,
});
</script>
