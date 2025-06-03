<template>
  <FlexibleMenu
    ref="flexibleTab"
    :visible-items="visibleOrderOptions"
    :collapsed-items="collapsedOrderOptions"
    :max-lines="2"
    :show-all-items="isShowAll"
    @update:visible-items="(items: ISelectItem[]) => (visibleOrderOptions = items)"
    @update:collapsed-items="(items: ISelectItem[]) => (collapsedOrderOptions = items)"
  >
    <template #visibleItems>
      <MultiSelectChip
        v-for="option in visibleOrderOptions"
        :key="`${option.title}-${$options.value}`"
        :selected-option="option"
        :container
        :class="['mb-1 mr-1 inline-block', disabled && 'pointer-events-none bg-grey-5 text-grey-1']"
        @delete:selected-option="() => emit('delete:selectedOption', option)"
      />
    </template>
    <template #collapsedMenu>
      <div
        :class="[
          'cursor-pointer rounded',
          isShowAll ? 'text-red-2' : 'text-blue-2',
          'bg-grey-5 hover:bg-grey-4',
          'px-4 py-1',
          disabled && 'pointer-events-none bg-grey-5',
        ]"
        data-test="CollapsedMenuForChips"
        @click="
          () => {
            isShowAll = !isShowAll;
            flexibleTab?.rerender(selectedOptions);
          }
        "
      >
        <span>{{ `${isShowAll ? '–' : '+'} ${notFittedItemsNumber}` }}</span>
      </div>
    </template>
  </FlexibleMenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MultiSelectChips',
});
</script>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { ISelectItem } from '@/components/selects/models';
import MultiSelectChip from '@/components/selects/chips/MultiSelectChip.vue';
import FlexibleMenu from '@/components/flexible-menu/FlexibleMenu.vue';

const props = defineProps<{
  selectedOptions: ISelectItem[];
  disabled?: boolean;
  container: HTMLElement | undefined;
}>();

const emit = defineEmits<{
  (e: 'delete:selectedOption', newValue: ISelectItem): void;
}>();

const isShowAll = ref<boolean>(false);
const flexibleTab = ref();
const visibleOrderOptions = ref<ISelectItem[]>([...props.selectedOptions]);
const collapsedOrderOptions = ref<ISelectItem[]>([]);
const notFittedItemsNumber = computed(
  () => props.selectedOptions.length - Number(flexibleTab.value?.indexOfNotFitItem),
);

watch(
  () => props.selectedOptions,
  () => flexibleTab.value?.rerender([...props.selectedOptions]),
);
</script>
