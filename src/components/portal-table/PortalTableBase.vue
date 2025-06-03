<template>
  <div class="w-full overflow-x-auto scrollbar-thin">
    <table
      ref="tableRef"
      :class="[
        table.modifier?.text ?? 'text-size-5',
        table.modifier?.textColor ?? 'text-black-1',
        table.modifier?.width ?? 'w-full',
        table.modifier?.other,
        'relative',
      ]"
    >
      <slot name="header" />
      <slot v-if="!isLoading" />
    </table>
    <slot name="afterTable" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortalTableBase',
});
</script>

<script setup lang="ts" generic="T">
import { ref } from 'vue';
import type { TPortalBase } from '@/components/portal-table/utils/models';

defineProps<{
  table: TPortalBase<T>;
  isLoading?: boolean;
}>();

const tableRef = ref();

defineExpose({
  tableRef,
});
</script>
