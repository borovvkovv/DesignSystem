<template>
  <div class="p-18">
    <AppTableData v-model="table" />
  </div>
  {{ table }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TablePage',
});
</script>

<script setup lang="ts">
import { ref } from 'vue';
import type { TTableData } from '@/components/table/models';
import AppTableData from '@/components/table/AppTableData.vue';

const table = ref<TTableData>({
  header: {
    cells: [
      { text: 'Дата' },
      { text: 'Плановый объем (тыс. м³)' },
      { text: 'Выполненный объем (тыс. м³)' },
      { text: 'Разница (тыс. м³)' },
    ],
  },
  rows: [
    {
      cells: [
        { type: 'text', text: '01/01/2023' },
        { type: 'input', input: { modelValue: '' } },
        { type: 'input', input: { modelValue: '1' } },
        { type: 'input', input: { modelValue: '2' } },
      ],
    },
    {
      cells: [
        { type: 'text', text: '01/01/2023' },
        { type: 'input', input: { modelValue: '3' } },
        { type: 'input', input: { modelValue: '4' } },
        { type: 'input', input: { modelValue: '5' } },
      ],
    },
  ],
});
</script>
