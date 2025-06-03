<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 5H24"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M0 12H24"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M0 19H24"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconBurger',
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
