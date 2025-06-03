<template>
  <BaseSelectDropDown>
    <template #input="{ toggleDropDown }">
      <DateRangeInput
        v-bind="$props"
        v-model:min-value="valueMinLocal"
        v-model:max-value="valueMaxLocal"
        @click:icon-right="() => toggleDropDown()"
      />
    </template>
    <template #dropDown="{ registerCallSection, unregisterCallSection, setDropDownVisibility }">
      <AppCalendarRange
        v-model:min-value="valueMinLocal"
        v-model:max-value="valueMaxLocal"
        :calendar-type="calendarType"
        :is-inactive-rule="isInactiveRule"
        class="border-md w-144 px-8 py-5 shadow-24"
        @vue:mounted="registerCallSection"
        @vue:unmounted="unregisterCallSection"
        @set:date-range="() => setDropDownVisibility(false)"
      />
    </template>
  </BaseSelectDropDown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CalendarRangeSelect',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { Size } from '@/enums';
import BaseSelectDropDown from '@/components/selects/BaseSelectDropDown.vue';
import DateRangeInput from '@/components/inputs/DateRangeInput.vue';
import type { ICalendarRangeSelectProps } from '@/components/inputs/models';
import AppCalendarRange from '@/components/AppCalendarRange.vue';

const props = withDefaults(defineProps<ICalendarRangeSelectProps>(), {
  size: Size.S,
  showError: true,
});

const emit = defineEmits<{
  (eventName: 'update:minValue', newValue: Date | undefined): void;
  (eventName: 'update:maxValue', newValue: Date | undefined): void;
}>();

const valueMinLocal = computed<Date | undefined>({
  get() {
    return props.minValue;
  },
  set(newValue): void {
    emit('update:minValue', newValue);
  },
});

const valueMaxLocal = computed<Date | undefined>({
  get() {
    return props.maxValue;
  },
  set(newValue): void {
    emit('update:maxValue', newValue);
  },
});
</script>
