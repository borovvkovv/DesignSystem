<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      :id="maskId"
      fill="white"
    >
      <path
        d="M0 14.9378V12C0 9.79086 1.79086 8 4 8H7.93781C10.1469 8 11.9378 9.79086 11.9378 12V14.9378H0ZM5.96891 6.96891C5.14818 6.96891 4.44559 6.67668 3.86114 6.09222C3.27668 5.50777 2.98445 4.80518 2.98445 3.98445C2.98445 3.16373 3.27668 2.46114 3.86114 1.87668C4.44559 1.29223 5.14818 1 5.96891 1C6.78963 1 7.49222 1.29223 8.07668 1.87668C8.66113 2.46114 8.95336 3.16373 8.95336 3.98445C8.95336 4.80518 8.66113 5.50777 8.07668 6.09222C7.49222 6.67668 6.78963 6.96891 5.96891 6.96891Z"
      />
    </mask>
    <path
      d="M0 14.9378V12C0 9.79086 1.79086 8 4 8H7.93781C10.1469 8 11.9378 9.79086 11.9378 12V14.9378H0ZM5.96891 6.96891C5.14818 6.96891 4.44559 6.67668 3.86114 6.09222C3.27668 5.50777 2.98445 4.80518 2.98445 3.98445C2.98445 3.16373 3.27668 2.46114 3.86114 1.87668C4.44559 1.29223 5.14818 1 5.96891 1C6.78963 1 7.49222 1.29223 8.07668 1.87668C8.66113 2.46114 8.95336 3.16373 8.95336 3.98445C8.95336 4.80518 8.66113 5.50777 8.07668 6.09222C7.49222 6.67668 6.78963 6.96891 5.96891 6.96891Z"
      stroke="currentColor"
      stroke-width="3.2"
      :mask="`url(#${maskId})`"
    />
    <rect
      x="12.5803"
      y="2.40918"
      width="1.31316"
      height="5.4715"
      fill="currentColor"
    />
    <rect
      x="10.53"
      y="4.46094"
      width="5.4715"
      height="1.31316"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconAddPerson',
});
</script>

<script setup lang="ts">
import { createGuid } from '@/utils/guid';

withDefaults(
  defineProps<{
    size?: number;
  }>(),
  {
    size: 16,
  },
);

const maskId = createGuid();
</script>
