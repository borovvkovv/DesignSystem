<template>
  <SearchResultSpan
    :text="cell.text"
    :pattern="cell.pattern"
    :color-type="TextColorType.BackGround"
  />
</template>
<script lang="ts">
export default {
  name: 'AppTableCellSearch',
};
</script>

<script setup lang="ts">
import type { TCellSearchSpan } from '@/components/table/models';
import { TextColorType } from '@/components/selects/utils/models';
import SearchResultSpan from '@/components/selects/SearchResultSpan.vue';

defineProps<{
  cell: TCellSearchSpan;
}>();
</script>
