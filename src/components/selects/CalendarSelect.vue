<template>
  <BaseSelectDropDown>
    <template #input="{ toggleDropDown }">
      <DateInput
        v-bind="$props"
        v-model="value"
        @click:icon-right="() => toggleDropDown()"
      />
    </template>
    <template #dropDown="{ registerCallSection, unregisterCallSection, setDropDownVisibility }">
      <AppCalendar
        v-model="value"
        :calendar-type="calendarType"
        :is-inactive-rule="isInactiveRule"
        class="border-md px-8 py-5 shadow-24"
        @vue:mounted="registerCallSection"
        @vue:unmounted="unregisterCallSection"
        @click:date="() => setDropDownVisibility(false)"
      />
    </template>
  </BaseSelectDropDown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CalendarSelect',
});
</script>

<script setup lang="ts">
import BaseSelectDropDown from '@/components/selects/BaseSelectDropDown.vue';
import { Size } from '@/enums';
import DateInput from '@/components/inputs/DateInput.vue';
import AppCalendar from '@/components/AppCalendar.vue';
import type { ICalendarSelectProps } from '@/components/inputs/models';
import { computed } from 'vue';

const props = withDefaults(defineProps<ICalendarSelectProps>(), {
  size: Size.S,
  showError: true,
});

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: Date): void;
}>();

const value = computed({
  get(): Date {
    return props.modelValue;
  },
  set(newValue: Date): void {
    emit('update:modelValue', newValue);
  },
});
</script>
