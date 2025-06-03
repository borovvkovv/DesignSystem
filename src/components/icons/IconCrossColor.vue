<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="24"
      cy="24"
      r="24"
      :fill
    />
    <path
      d="M15 32.9999L32.9998 15"
      :stroke
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M33 33L15.0002 15.0001"
      :stroke
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconCrossColor',
});
</script>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 48,
  },
  fill: {
    type: String,
    required: false,
    default: '#EFF3F5',
  },
  stroke: {
    type: String,
    required: false,
    default: '#A0B3BF',
  },
});
</script>
