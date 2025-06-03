<template>
  <div
    v-for="type in calendarTypes"
    :key="type"
    class="m-2"
  >
    <span class="font-bold">CalendarType: {{ type }}</span>
    <br />
    <template
      v-for="(rule, ruleIndex) in rules"
      :key="ruleIndex"
    >
      <span>{{ `Ограничение: ${rule.errorText}` }}</span>
      <div
        v-for="size in sizes"
        :key="size"
        class="mx-2 mb-2"
      >
        Size: {{ size }}
        <div class="flex gap-x-2">
          <CalendarRangeSelect
            v-model:min-value="inputMin"
            v-model:max-value="inputMax"
            :calendar-type="type"
            :size="size"
            class="mx-2 min-w-100"
            :is-inactive-rule="rule.isInactive"
            :inactive-error-text="rule.errorText"
            :show-error="false"
            label="С автокорректировкой"
          />
          <CalendarRangeSelect
            v-model:min-value="inputMin"
            v-model:max-value="inputMax"
            :calendar-type="type"
            :size="size"
            class="mx-2 min-w-100"
            :is-inactive-rule="rule.isInactive"
            :inactive-error-text="rule.errorText"
            show-error
            label="Без автокорректировки"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CalendarRangeDropdownPage',
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Size } from '@/enums';
import { CalendarType } from '@/components/calendars/utils/models';
import { InactiveRule, inactiveRuleErrorTexts, isInactiveRules } from '@/components/calendars/utils/inactive-rules';
import CalendarRangeSelect from '@/components/selects/CalendarRangeSelect.vue';

const inputMin = ref<Date | undefined>(new Date());
const inputMax = ref<Date | undefined>(new Date());
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
  {
    isInactive: isInactiveRules[InactiveRule.TestDenyAll],
    errorText: inactiveRuleErrorTexts[InactiveRule.TestDenyAll],
  },
];
</script>
