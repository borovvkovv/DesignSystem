<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="2"
      y1="17"
      x2="18"
      y2="17"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <mask
      id="path-2-inside-1_191_230"
      fill="white"
    >
      <rect
        x="3"
        y="3"
        width="6"
        height="15"
        rx="1"
      />
    </mask>
    <rect
      x="3"
      y="3"
      width="6"
      height="15"
      rx="1"
      stroke="currentColor"
      stroke-width="4"
      mask="url(#path-2-inside-1_191_230)"
    />
    <mask
      id="path-3-inside-2_191_230"
      fill="white"
    >
      <rect
        x="11"
        y="8"
        width="6"
        height="10"
        rx="1"
      />
    </mask>
    <rect
      x="11"
      y="8"
      width="6"
      height="10"
      rx="1"
      stroke="currentColor"
      stroke-width="4"
      mask="url(#path-3-inside-2_191_230)"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconChart',
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
