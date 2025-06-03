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
    <line
      y1="-1"
      x2="28.2523"
      y2="-1"
      transform="matrix(0.706307 -0.707906 0.706306 0.707906 22.0452 43)"
      stroke="#0079C2"
      stroke-width="2"
    />
    <line
      y1="-1"
      x2="28.2523"
      y2="-1"
      transform="matrix(-0.706306 -0.707906 -0.706307 0.707906 40.9548 43)"
      stroke="#0079C2"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconErrorColor',
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