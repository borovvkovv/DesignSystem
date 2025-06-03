<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6"
      y="8"
      width="2"
      height="14"
      rx="1"
      fill="currentColor"
    />
    <circle
      cx="7"
      cy="5"
      r="3"
      stroke="currentColor"
      stroke-width="2"
    />
    <circle
      cx="17"
      cy="10"
      r="3"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 16V14H16V16H8V14H6V16C6 17.1046 6.89543 18 8 18H16C17.1046 18 18 17.1046 18 16Z"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IconChildNode',
});
</script>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 24,
  },
});
</script>
