<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.98217 7.31202L5.7942 6.32985L3.82985 6.7058L4.01783 7.68798L5.98217 7.31202ZM6.81818 17L5.83601 17.188L5.99142 18H6.81818V17ZM13.1818 17V18H14.0086L14.164 17.188L13.1818 17ZM4.01783 7.68798L5.83601 17.188L7.80036 16.812L5.98217 7.31202L4.01783 7.68798ZM6.81818 18H13.1818V16H6.81818V18ZM14.164 17.188L15.9822 7.68798L14.0178 7.31202L12.1996 16.812L14.164 17.188Z"
      fill="currentColor"
    />
    <path
      d="M3 7H17"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="square"
    />
    <path
      d="M6 6V7H8V6H6ZM8 6V4H6V6H8ZM8 4H12V2H8V4ZM12 4V6H14V4H12ZM12 4H14C14 2.89543 13.1046 2 12 2V4ZM8 4L8 4V2C6.89543 2 6 2.89543 6 4H8Z"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconWasteBin',
});
</script>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 20,
  },
});
</script>