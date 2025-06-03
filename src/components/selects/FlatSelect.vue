<template>
  <section class="flex flex-col gap-y-6">
    <div class="flex">
      <h4>{{ title }}</h4>
      <div
        v-if="count"
        class="ml-1 text-size-4 text-grey-2"
      >
        {{ count }}
      </div>
    </div>
    <BaseSearchInput
      v-if="isWithSearch"
      v-model="query"
      :size="Size.M"
      @change:model-value="
        () => {
          if (filteredOptions.map((filteredOption) => filteredOption.title).includes(query)) {
            value = filteredOptions[0];
          }
        }
      "
    />
    <ul v-if="options">
      <li
        v-for="option in filteredOptions"
        :key="option.value"
        :class="[
          'mb-4 cursor-pointer text-size-6',
          option.value === modelValue?.value ? 'text-blue-2 hover:text-black-1' : 'text-black-1 hover:text-grey-1',
        ]"
        @click="
          () => {
            value = option;
          }
        "
      >
        <SearchResultSpan
          v-if="isWithSearch && option.value !== modelValue?.value"
          :text="option.title"
          :pattern="query"
        />
        <span v-else>{{ option.title }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlatSelect',
});
</script>

<script setup lang="ts">
import BaseSearchInput from '@/components/inputs/BaseSearchInput.vue';
import type { ISelectItem } from '@/components/selects/models';
import { computed, ref } from 'vue';
import { Size } from '@/enums';
import SearchResultSpan from '@/components/selects/SearchResultSpan.vue';

const props = withDefaults(
  defineProps<{
    title: string;
    modelValue: ISelectItem | undefined;
    options: ISelectItem[];
    count?: number;
    isWithSearch?: boolean;
  }>(),
  {
    isWithSearch: false,
    count: undefined,
  },
);

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: ISelectItem | undefined): void;
}>();

const filteredOptions = computed(() =>
  query.value === '' || props.options.map((option) => option.title).includes(query.value)
    ? props.options
    : props.options.filter((person) => {
        return person.title.toLowerCase().includes(query.value.toLowerCase());
      }),
);

const value = computed({
  get(): ISelectItem | undefined {
    return props.modelValue;
  },
  set(newValue: ISelectItem | undefined): void {
    emit('update:modelValue', newValue);
  },
});

const query = ref('');
</script>
