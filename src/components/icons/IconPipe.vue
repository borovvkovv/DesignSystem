<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 7H6M6 13H2"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M14 7H18M18 13H14"
      stroke="currentColor"
      stroke-width="2"
    />
    <circle
      cx="10"
      cy="10"
      r="5"
      stroke="currentColor"
      stroke-width="2"
    />
    <circle
      cx="10"
      cy="10"
      r="1"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconPipe',
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
