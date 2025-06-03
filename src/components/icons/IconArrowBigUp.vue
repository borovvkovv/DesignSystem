<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5001 30.5L16.5001 2.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="square"
    />
    <path
      d="M1.50006 16.5L16.5001 1.5L31.5001 16.5"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IconName } from './models';

export default defineComponent({
  name: IconName.IconArrowBigUp,
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
