<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="16"
      y="7"
      width="37"
      height="3"
      fill="#C4EAFF"
    />
    <rect
      x="53"
      y="7"
      width="47"
      height="3"
      transform="rotate(90 53 7)"
      fill="#C4EAFF"
    />
    <path
      d="M24.4355 6H19C16.7908 6 15 7.79086 15 10V38M44.5645 6H50C52.2091 6 54 7.79086 54 10V51C54 53.2091 52.2091 55 50 55H34"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M41.2066 8H26.7927C25.2565 8 24 6.87492 24 5.5C24 4.12508 25.2565 3 26.7927 3H41.2066C42.7429 3 44 4.12508 44 5.5C44 6.87492 42.7429 8 41.2066 8Z"
      fill="#C4EAFF"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.8695 21.2826H45.3043"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.8695 28.8478H45.3043"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.9997 61C26.4746 61 29.7254 59.6431 32.1965 57.1901C37.2678 52.1164 37.2678 43.8836 32.1965 38.8099C29.7442 36.3569 26.4746 35 22.9997 35C19.5254 35 16.2746 36.3569 13.8035 38.8099C8.73216 43.8836 8.73216 52.1164 13.8035 57.1901C16.2746 59.6431 19.5254 61 22.9997 61Z"
      fill="#C4EAFF"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32 48C32 53.9704 28.2627 59.0679 23 61.0807C15.8765 63.8053 10.587 52.7829 10 47.5C10 42.3747 16.4293 32.4062 23 34.9193C28.2627 36.9321 32 42.0296 32 48Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.9997 61C26.4746 61 29.7254 59.6431 32.1965 57.1901C37.2678 52.1164 37.2678 43.8836 32.1965 38.8099C29.7442 36.3569 26.4746 35 22.9997 35C19.5254 35 16.2746 36.3569 13.8035 38.8099C8.73216 43.8836 8.73216 52.1164 13.8035 57.1901C16.2746 59.6431 19.5254 61 22.9997 61Z"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30 44L21.3333 52L17 48"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="square"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconDocumentColor',
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