<template>
  <div ref="multiSelectContainer">
    <BaseSimpleSelect
      ref="baseSimpleSelect"
      v-bind="props"
      v-model:query="query"
      :placeholder="placeholder"
      :is-empty="isEmpty"
      is-full-width-drop-down
    >
      <MultiSelectDropDown
        ref="multiSelectDropDown"
        :options="options"
        :selected-options="selectedOptions"
        :selected-options-local="selectedOptionsLocal"
        :query="query"
        @click:option="(option) => onToggleOptionHandler(option)"
        @vue:unmounted="() => updateSelectedOptions(selectedOptionsLocal)"
      />
    </BaseSimpleSelect>
    <MultiSelectChips
      v-if="selectedOptions.length"
      :selected-options="selectedOptions"
      :disabled="disabled"
      :container="multiSelectContainer"
      class="mt-2"
      @delete:selected-option="onDeleteOptionHandler"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MultiSelect',
});
</script>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { getIndexByItem, isArrayIncludesObject, removeItemFromArray } from '@/utils/array';
import type { IMultipleSelectProps } from '@/components/inputs/models';
import { filterOptions } from '@/components/selects/utils';
import type { ISelectItem } from '@/components/selects/models';
import MultiSelectChips from '@/components/selects/chips/MultiSelectChips.vue';
import BaseSimpleSelect from '@/components/selects/BaseSimpleSelect.vue';
import MultiSelectDropDown from '@/components/selects/MultiSelectDropDown.vue';

const props = defineProps<IMultipleSelectProps>();

const emit = defineEmits<{
  (e: 'update:selectedOptions', newValue: ISelectItem[]): void;
}>();

const multiSelectContainer = ref<HTMLElement | undefined>();
const multiSelectDropDown = ref();
const query = ref('');
const placeholder = computed(() =>
  selectedOptionsLocal.value.length ? `Выбрано: ${selectedOptionsLocal.value.length}` : props.placeholder ?? '',
);

const selectedOptionsLocal = ref<Array<ISelectItem>>([...props.selectedOptions]);
const isEmpty = computed(() => filterOptions(query.value, props.options).length === 0);

const onToggleOptionHandler = (toggledOption: ISelectItem) => {
  const selectedOptionLocalIndex = getIndexByItem(toggledOption, selectedOptionsLocal.value);

  if (selectedOptionLocalIndex === -1) {
    selectedOptionsLocal.value.push(toggledOption);
  } else {
    selectedOptionsLocal.value = removeItemFromArray(selectedOptionsLocal.value, selectedOptionLocalIndex);
  }
};

const onDeleteOptionHandler = (deletedOption: ISelectItem) => {
  onToggleOptionHandler(deletedOption);
  updateSelectedOptions(selectedOptionsLocal.value);
};

const updateSelectedOptions = (selectedOptions: Array<ISelectItem>) => {
  const orderedSelectedOptionsLocal = props.options.filter((option) => isArrayIncludesObject(option, selectedOptions));
  emit('update:selectedOptions', [...orderedSelectedOptionsLocal]);
};

watch(
  () => props.selectedOptions,
  () => (selectedOptionsLocal.value = [...props.selectedOptions]),
);
</script>
