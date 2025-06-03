<template>
  <AppIcon
    :icon="cell.icon"
    :size="cell.size"
    :class="[cell.modifier?.other]"
  />
</template>

<script lang="ts">
export default {
  name: 'AppTableCellIcon',
};
</script>

<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue';
import type { TCellIcon } from '@/components/table/models';

defineProps<{
  cell: TCellIcon;
}>();
</script>
