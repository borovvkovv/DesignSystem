<template>
  <div
    v-for="size in sizes"
    :key="size"
  >
    Size: {{ size }}
    <div class="my-3 flex">
      <MultiSelect
        v-model:selected-options="multipleInput"
        :options="options"
        :size="size"
        class="m-2 w-50"
      />
      <MultiSelect
        v-model:selected-options="multipleInput"
        :options="options"
        :size="size"
        class="m-2 w-50"
        disabled
      />
      <MultiSelect
        v-model:selected-options="multipleInput"
        :options="options"
        :size="size"
        :is-error="true"
        class="m-2 w-50"
      />
      <MultiSelect
        v-model:selected-options="multipleInput"
        :options="options"
        :size="size"
        :is-error="true"
        :error-list="['Error']"
        class="m-2 w-50"
      />
      <MultiSelect
        v-model:selected-options="multipleInput"
        :options="options"
        :size="size"
        :is-error="true"
        :error-list="['Error one', 'Error two', 'Error tree']"
        class="m-2 w-41"
      />
    </div>
    {{ multipleInput }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'MultipleSelectPage',
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Size } from '@/enums';
import MultiSelect from '@/components/selects/MultiSelect.vue';
import type { ISelectItem } from '@/components/selects/models';

const multipleInput = ref<ISelectItem[]>([]);
const sizes: Array<Size.S | Size.M> = [Size.S, Size.M];
const options: ISelectItem[] = Array.from({ length: 10 }).map((_, index) => ({
  title: `option${index === 0 ? '' : index}`,
  value: `option${index === 0 ? '' : index}`,
}));
</script>
