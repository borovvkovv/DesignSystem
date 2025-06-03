<template>
  <section class="flex flex-col gap-y-6">
    <h4 v-if="title">{{ title }}</h4>
    <ul v-if="options">
      <li
        v-for="item in options"
        :key="item.value"
        :class="[
          'mb-4 whitespace-pre text-size-6 hover:cursor-auto',
          item.value ? 'text-black-1 hover:text-black-1' : 'text-grey-1 hover:text-grey-1',
        ]"
      >
        <span>
          {{ item.title }}
        </span>
        <span
          v-if="item.displayValue"
          :class="[
            item.isColored && Number(item.value) > 0 ? 'text-blue-2' : '',
            item.isColored && Number(item.value) < 0 ? 'text-red-3' : '',
          ]"
        >
          {{ `\n${item.displayValue}` }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlatList',
});
</script>

<script setup lang="ts">
import type { IListItem } from './models';

defineProps<{
  title: string;
  options: IListItem[];
}>();
</script>
