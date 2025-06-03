<template>
  <div
    :class="[
      'h-9 w-20',
      'my-1 flex items-center justify-center',
      'text-size-6',
      month.active ? 'rounded-md text-white' : month.inactive ? 'text-grey-2' : 'text-black-1',
      isIMonthRange && month.active
        ? 'cursor-pointer'
        : month.active || month.inactive
        ? 'cursor-default'
        : 'cursor-pointer hover:rounded hover:bg-grey-5',
      isMonthInRange ? 'bg-grey-5 hover:rounded-none' : month.active ? 'bg-blue-2' : undefined,
    ]"
    @click="(target : MouseEvent) => emit('click:date', target)"
  >
    <span>{{ month.name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CalendarMonthCell',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';
import type { IMonth, IMonthRange } from '@/components/calendars/utils/models';

const props = defineProps<{
  month: IMonth | IMonthRange;
}>();

const emit = defineEmits<{
  (eventName: 'click:date', target: MouseEvent): void;
}>();

const isIMonthRange = computed(() => 'isInRange' in props.month);
const isMonthInRange = computed(() => ('isInRange' in props.month ? props.month.isInRange : false));
</script>
