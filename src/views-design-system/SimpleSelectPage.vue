<template>
  <div
    v-for="size in sizes"
    :key="size"
  >
    Size: {{ size }}
    <div class="row">
      <SimpleSelect
        v-model="input"
        :options="options"
        :size="size"
        class="m-4xs"
      />
      <SimpleSelect
        v-model="input"
        :options="options"
        :size="size"
        class="m-4xs"
        disabled
      />
      <SimpleSelect
        v-model="input"
        :options="options"
        :size="size"
        :is-error="true"
        class="m-4xs"
      />
      <SimpleSelect
        v-model="input"
        :options="options"
        :size="size"
        :is-error="true"
        :error-list="['Error']"
        class="m-4xs"
      />
      <SimpleSelect
        v-model="input"
        :options="options"
        :size="size"
        :is-error="true"
        :error-list="['Error one', 'Error two', 'Error tree']"
        class="m-4xs"
      />
    </div>
    {{ input }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'SimpleSelectPage',
};
</script>

<script setup lang="ts">
import SimpleSelect from '@/components/selects/SimpleSelect.vue';
import { ref } from 'vue';
import { Size } from '@/enums';
import type { ISelectItem } from '@/components/selects/models';

const input = ref<ISelectItem | undefined>();
const sizes: Array<Size.S | Size.M> = [Size.S, Size.M];
const options: ISelectItem[] = Array.from({ length: 10 }).map((_, index) => ({
  title: `option${index === 0 ? '' : index}`,
  value: `option${index === 0 ? '' : index}`,
}));
</script>

<style scoped>
.row {
  display: flex;
  margin: 12px 0;
}
</style>
