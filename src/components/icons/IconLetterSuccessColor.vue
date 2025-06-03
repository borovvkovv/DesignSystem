<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5"
      y="9"
      width="49"
      height="37"
      rx="1"
      stroke="#0079C2"
      stroke-width="2"
    />
    <rect
      x="5"
      y="9"
      width="49"
      height="37"
      rx="1"
      fill="#C4EAFF"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M6 9.5L29.5 29.5L50 12V42H6V9.5Z"
      fill="white"
    />
    <path
      d="M30.8109 29.8622C30.0589 30.5149 28.9411 30.5149 28.1891 29.8622L5.02232 9.75522C4.32348 9.14868 4.75244 8 5.67779 8L53.3222 8.00001C54.2476 8.00001 54.6765 9.14868 53.9777 9.75522L30.8109 29.8622Z"
      fill="#C4EAFF"
    />
    <path
      d="M27 26.5L11 13H43L27 26.5Z"
      fill="white"
    />
    <path
      d="M30.1555 29.107C29.7794 29.4334 29.2206 29.4334 28.8445 29.107L5.67779 9L53.3222 9.00001L30.1555 29.107Z"
      stroke="#0079C2"
      stroke-width="2"
    />
    <circle
      cx="47.5"
      cy="42.5"
      r="12.5"
      fill="white"
      stroke="#0079C2"
      stroke-width="2"
    />
    <circle
      cx="47.5"
      cy="42.5"
      r="11.5"
      fill="#C4EAFF"
    />
    <ellipse
      cx="46"
      cy="42.5"
      rx="10"
      ry="10.5"
      fill="white"
    />
    <path
      d="M54.5708 38.0855L46.0855 46.5708L42 42.4853"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="square"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconLetterSuccessColor',
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