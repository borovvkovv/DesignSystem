<template>
  <BaseSelectDropDown
    ref="baseSelectDropDown"
    :is-full-width-drop-down="isFullWidthDropDown"
    @on:open="
      (isVisible) => {
        iconArrow = isVisible ? IconName.IconArrowUpTriangle : IconName.IconArrowDownTriangle;
      }
    "
  >
    <template #input="{ toggleDropDown, setDropDownVisibility }">
      <BaseInput
        v-bind="props"
        v-model="queryLocal"
        :type="InputType.Text"
        :icon-right="{ iconName: iconArrow, onIconClick: toggleDropDown }"
        @update:model-value="() => setDropDownVisibility(true)"
        @change:model-value="(newValue) => emit('change:query', newValue)"
      />
    </template>
    <template #dropDown="{ registerCallSection, unregisterCallSection }">
      <LinesSkeleton
        v-if="isLoading"
        v-bind="baseSimpleSelectLinesSkeletonConfig"
        :class="['bg-white px-4 py-2 shadow-24', size === Size.M ? 'rounded-md' : 'rounded-sm']"
      />
      <IconTextStub
        v-else-if="isErrorLoading"
        :texts="['Что-то пошло не так...', 'Попробуйте повторить попытку позже']"
        :icon="IconName.IconExclamationMark"
        :size="Size.S"
        :height="288"
        @vue:mounted="registerCallSection"
        @vue:unmounted="unregisterCallSection"
      />
      <IconTextStub
        v-else-if="isEmpty"
        :texts="['Ничего не найдено', 'Попробуйте изменить запрос']"
        :icon="IconName.IconMagnifierCross"
        :size="Size.S"
        :height="288"
        @vue:mounted="registerCallSection"
        @vue:unmounted="unregisterCallSection"
      />
      <div
        v-else
        class="text-size-5 max-h-72 overflow-y-scroll bg-white p-2 shadow-24 scrollbar-thin"
        @vue:mounted="registerCallSection"
        @vue:unmounted="unregisterCallSection"
      >
        <slot />
      </div>
    </template>
  </BaseSelectDropDown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseSimpleSelect',
});
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Size } from '@/enums';
import BaseSelectDropDown from '@/components/selects/BaseSelectDropDown.vue';
import BaseInput from '@/components/inputs/BaseInput.vue';
import { IconName } from '@/components/icons/models';
import type { IBaseSimpleSelectProps } from '@/components/inputs/models';
import IconTextStub from '@/components/stubs/IconTextStub.vue';
import LinesSkeleton from '@/components/skeletons/LinesSkeleton.vue';
import { InputType } from '@/components/inputs/models';

const props = withDefaults(defineProps<IBaseSimpleSelectProps>(), {
  isErrorLoading: false,
});

const emit = defineEmits<{
  (e: 'change:query', newValue: string): void;
  (e: 'update:query', newValue: string): void;
}>();

const iconArrow = ref(IconName.IconArrowDownTriangle);
const baseSelectDropDown = ref();

const baseSimpleSelectLinesSkeletonConfig = {
  rowsGap: 26,
  rowsCount: 7,
  rowHeight: 12,
};

const queryLocal = computed<string>({
  get() {
    return props.query;
  },
  set(newValue): void {
    emit('update:query', newValue);
  },
});

defineExpose({
  setDropDownVisibility: (isVisible: boolean) => baseSelectDropDown.value?.setDropDownVisibility(isVisible),
});
</script>
