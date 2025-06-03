<template>
  <span
    v-for="(span, i) in cell.spans"
    :key="i"
    :class="[
      span.modifier?.text,
      span.modifier?.textColor,
      span.modifier?.textAlign,
      span.modifier?.other,
      span.modifier?.padding,
    ]"
  >
    <template v-if="span.type === 'text'">
      {{ span.text }}
    </template>
    <template v-if="span.type === 'link'">
      <AppLink
        :to="span.href"
        :link-style="LinksStyles.Style7"
        @click="span.click"
      >
        <span :class="span.modifier?.text">{{ span.title }}</span>
      </AppLink>
    </template>
  </span>
</template>

<script lang="ts">
export default {
  name: 'AppTableCellTexts',
};
</script>

<script setup lang="ts">
import type { TCellTexts } from '@/components/table/models';
import { LinksStyles } from '@/components/app-link/utils/models';
import AppLink from '@/components/app-link/AppLink.vue';

defineProps<{
  cell: TCellTexts;
}>();
</script>
