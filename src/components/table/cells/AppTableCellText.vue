<template>
  <AppTableText
    :text="cell.text"
    :pattern="cell.pattern"
    :max-lines="cell.maxLines"
  />
</template>

<script lang="ts">
export default {
  name: 'AppTableCellText',
};
</script>

<script setup lang="ts">
import type { TCellText } from '@/components/table/models';
import AppTableText from './AppTableText.vue';

defineProps<{
  cell: TCellText;
}>();
</script>
