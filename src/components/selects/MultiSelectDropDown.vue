<template>
  <div>
    <ul v-if="selectedOptions.length">
      <li class="p-2 text-grey-2">Выбранные</li>
      <li
        v-for="(selectedOption, selectedOptionIndex) in filteredSelectedOptions"
        :key="selectedOptionIndex"
        class="flex cursor-pointer justify-between p-2"
        @click.prevent="() => emit('click:option', selectedOption)"
      >
        <SearchResultSpan
          :text="selectedOption.title"
          :pattern="query"
          :class="['whitespace-normal', blueTextIfOptionSelected(selectedOption)]"
        />
        <AppCheckbox :model-value="isArrayIncludesObject(selectedOption, selectedOptionsLocal)" />
      </li>
      <li class="px-2 py-5"><div class="h-px bg-blueGrey-5" /></li>
      <li class="p-2 text-grey-2">Остальные</li>
    </ul>
    <ul>
      <li
        v-for="(filteredNotSelectedOptionLocal, filteredNotSelectedOptionLocalIndex) in filteredNotSelectedOptionsLocal"
        :key="filteredNotSelectedOptionLocalIndex"
        class="flex max-w-full cursor-pointer justify-between gap-x-2 p-2"
        @click.prevent="() => emit('click:option', filteredNotSelectedOptionLocal)"
      >
        <SearchResultSpan
          :text="filteredNotSelectedOptionLocal.title"
          :pattern="query"
          :class="['whitespace-normal', blueTextIfOptionSelected(filteredNotSelectedOptionLocal)]"
        />
        <AppCheckbox
          :model-value="isArrayIncludesObject(filteredNotSelectedOptionLocal, selectedOptionsLocal)"
          class="shrink-0"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MultiSelectDropDown',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { isArrayIncludesObject } from '@/utils/array';
import AppCheckbox from '@/components/inputs/AppCheckbox.vue';
import { filterOptions } from '@/components/selects/utils';
import type { ISelectItem } from '@/components/selects/models';
import SearchResultSpan from '@/components/selects/SearchResultSpan.vue';

const props = defineProps<{
  selectedOptions: ISelectItem[];
  selectedOptionsLocal: ISelectItem[];
  options: ISelectItem[];
  query: string;
}>();

const emit = defineEmits<{
  (e: 'click:option', newValue: ISelectItem): void;
}>();

const blueTextIfOptionSelected = (option: ISelectItem) =>
  props.query === '' && isArrayIncludesObject(option, props.selectedOptionsLocal) ? '!text-blue-2' : undefined;

const notSelectedOptions = computed(() =>
  props.options.filter((option) => !isArrayIncludesObject(option, props.selectedOptions)),
);
const filteredNotSelectedOptionsLocal = computed<Array<ISelectItem>>(() =>
  filterOptions(props.query, notSelectedOptions.value),
);
const filteredSelectedOptions = computed<Array<ISelectItem>>(() => filterOptions(props.query, props.selectedOptions));
</script>
