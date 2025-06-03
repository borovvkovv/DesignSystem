<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.0001 16L3.00009 16"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="square"
    />
    <path
      d="M17.0001 31L2.00009 16L17.0001 1"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IconName } from './models';

export default defineComponent({
  name: IconName.IconArrowBigLeft,
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
