<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45 18C46.1046 18 47 18.8954 47 20L47 44C47 45.1046 46.1046 46 45 46L43 46L43 18L45 18Z"
      fill="#C4EAFF"
    />
    <rect
      x="4"
      y="17"
      width="42"
      height="4"
      fill="#C4EAFF"
    />
    <path
      d="M3 20C3 18.3431 4.34315 17 6 17H44C45.6569 17 47 18.3431 47 20V44C47 45.6569 45.6569 47 44 47H24.5L15 58.5V47H6C4.34315 47 3 45.6569 3 44V20Z"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M59 7C60.1046 7 61 7.89543 61 9L61 33C61 34.1046 60.1046 35 59 35L57 35L57 7L59 7Z"
      fill="#C4EAFF"
    />
    <rect
      x="18"
      y="6"
      width="42"
      height="4"
      fill="#C4EAFF"
    />
    <path
      d="M17 17V9C17 7.34315 18.3431 6 20 6H58C59.6569 6 61 7.34315 61 9V33C61 34.6569 59.6569 36 58 36H54V47.5L47.0435 39.5"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M12 38.5H38"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M12 33H38"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M12 27H25"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconFaq',
});
</script>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 64,
  },
});
</script>
