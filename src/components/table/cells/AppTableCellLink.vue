<template>
  <AppLink
    :to="cell.href"
    :link-style="cell.linkStyle ?? LinksStyles.Style7"
    :is-disabled="cell.isDisabled"
    class="w-full"
    @click="onClick"
  >
    <AppTableText
      :text="cell.title"
      :pattern="cell.pattern"
      :max-lines="cell.maxLines"
      :class="cell.isDisabled && 'pointer-events-auto cursor-default'"
    />
  </AppLink>
</template>

<script lang="ts">
export default {
  name: 'AppTableCellLink',
};
</script>

<script setup lang="ts">
import type { TCellLink } from '@/components/table/models';
import { LinksStyles } from '@/components/app-link/utils/models';
import AppLink from '@/components/app-link/AppLink.vue';
import AppTableText from './AppTableText.vue';
import { computed } from 'vue';

const props = defineProps<{
  cell: TCellLink;
}>();

const onClick = computed(() => (props.cell.isDisabled ? undefined : props.cell.click));
</script>
