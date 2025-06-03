<template>
  <div
    v-for="(type, i) in calendarTypes"
    :key="type"
  >
    CalendarType: {{ type }}
    <br />
    <span>{{ `Ограничение: ${rules[i].errorText}` }}</span>
    <div
      v-for="size in sizes"
      :key="size"
    >
      Size: {{ size }}
      <div class="row">
        <CalendarSelect
          v-model="input"
          :calendar-type="type"
          :size="size"
          class="m-4xs w-80"
          :is-inactive-rule="rules[i].isInactive"
          :inactive-error-text="rules[i].errorText"
          :show-error="false"
        />
        <CalendarSelect
          v-model="input"
          :calendar-type="type"
          :size="size"
          class="m-4xs w-80"
          :is-inactive-rule="rules[i].isInactive"
          :inactive-error-text="rules[i].errorText"
          show-error
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CalendarDropdownPage',
};
</script>

<script setup lang="ts">
import CalendarSelect from '@/components/selects/CalendarSelect.vue';
import { ref } from 'vue';
import { Size } from '@/enums';
import { CalendarType } from '@/components/calendars/utils/models';
import { InactiveRule, inactiveRuleErrorTexts, isInactiveRules } from '@/components/calendars/utils/inactive-rules';

const input = ref(new Date());
const sizes: Array<Size.S | Size.M> = [Size.S, Size.M];
const calendarTypes = [CalendarType.month, CalendarType.year, CalendarType.years];
const rules = [
  {
    isInactive: isInactiveRules[InactiveRule.TestAllFifthDays2024NotAllowed],
    errorText: inactiveRuleErrorTexts[InactiveRule.TestAllFifthDays2024NotAllowed],
  },
  {
    isInactive: isInactiveRules[InactiveRule.TestJune2024NotAllowed],
    errorText: inactiveRuleErrorTexts[InactiveRule.TestJune2024NotAllowed],
  },
  {
    isInactive: isInactiveRules[InactiveRule.TestBetween2023And2026],
    errorText: inactiveRuleErrorTexts[InactiveRule.TestBetween2023And2026],
  },
];
</script>

<style scoped>
.row {
  display: flex;
  margin: 12px 0;
}
</style>
