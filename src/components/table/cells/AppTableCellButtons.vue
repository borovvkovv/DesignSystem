<template>
  <TextButton
    v-for="(button, i) in cellButtons"
    :key="i"
    :text="button.text"
    :color="button.color"
    :size="button.size"
    :is-disabled="button.isDisabled"
    :is-loading="button.isLoading"
    :type="button.type"
    @button-click="button.click"
  />
</template>

<script lang="ts">
export default {
  name: 'AppTableCellButtons',
};
</script>

<script setup lang="ts">
import type { TCellButton } from '@/components/table/models';
import TextButton from '@/components/buttons/TextButton.vue';

defineProps<{
  cellButtons: TCellButton[];
}>();
</script>
