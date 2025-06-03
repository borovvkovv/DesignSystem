<template>
  <BaseTag v-bind="cell.tag" />
</template>

<script lang="ts">
export default {
  name: 'AppTableCellTag',
};
</script>

<script setup lang="ts">
import type { TCellTag } from '@/components/table/models';
import BaseTag from '@/components/tags/BaseTag.vue';

defineProps<{
  cell: TCellTag;
}>();
</script>
