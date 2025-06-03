<template><root /></template>

<script lang="ts">
export default {
  name: 'AppTableCellCustomRender',
};
</script>

<script setup lang="ts">
import type { TCellCustomRender } from '@/components/table/models';
import { computed } from 'vue';

const props = defineProps<{
  cell: TCellCustomRender;
}>();

const root = computed(() => props.cell.nodeRender);
</script>

<style scoped lang="scss"></style>
