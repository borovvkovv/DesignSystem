<template>
  <svg
  :width="size"
    :height="size"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M88 32V81H12V32C12 29.7909 13.7909 28 16 28H66H84C86.2091 28 88 29.7909 88 32Z"
      fill="#C4EAFF"
      stroke="#A0B3BF"
      stroke-width="2"
    />
    <path
      d="M83 80V33H62.359H13V80H83Z"
      fill="white"
    />
    <path
      d="M4 81H96V85.5882C96 86.2941 95.351 87 94.7019 87H5.29806C4.64903 87 4 86.2941 4 85.5882V81Z"
      fill="#C4EAFF"
      stroke="#A0B3BF"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M49.9996 38C54.2764 38 58.2774 36.33 61.3187 33.3108C67.5604 27.0664 67.5604 16.9336 61.3187 10.6892C58.3006 7.67003 54.2764 6 49.9996 6C45.7236 6 41.7226 7.67003 38.6813 10.6892C32.4396 16.9336 32.4396 27.0664 38.6813 33.3108C41.7226 36.33 45.7236 38 49.9996 38Z"
      fill="white"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.606 18.2466L47.3744 28.4782L42.4481 23.5519"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="square"
    />
    <rect
      x="28"
      y="50"
      width="44"
      height="14"
      rx="1"
      fill="#C4EAFF"
      stroke="#A0B3BF"
      stroke-width="2"
    />
    <rect
      x="32"
      y="54"
      width="6"
      height="6"
      rx="1"
      fill="#A0B3BF"
    />
    <rect
      x="42"
      y="54"
      width="6"
      height="6"
      rx="1"
      fill="#A0B3BF"
    />
    <rect
      x="52"
      y="54"
      width="6"
      height="6"
      rx="1"
      fill="#A0B3BF"
    />
    <rect
      x="62"
      y="54"
      width="6"
      height="6"
      rx="1"
      fill="#A0B3BF"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconPasswordSuccess',
});
</script>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 100,
  },
});
</script>
