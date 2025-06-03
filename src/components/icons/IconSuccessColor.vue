<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="32"
      cy="32"
      r="28"
      fill="#C4EAFF"
    />
    <circle
      cx="29.5"
      cy="32.5"
      r="25.5"
      fill="white"
    />
    <circle
      cx="32"
      cy="32"
      r="27"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M46.1878 25.1924L27.0959 44.2843L17.9035 35.0919"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="square"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconSuccessColor',
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