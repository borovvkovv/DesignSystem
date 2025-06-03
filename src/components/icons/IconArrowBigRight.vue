<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 16L29 16"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="square"
    />
    <path
      d="M15 1L30 16L15 31"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IconName } from './models';

export default defineComponent({
  name: IconName.IconArrowBigRight,
});
</script>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 32,
  },
});
</script>
