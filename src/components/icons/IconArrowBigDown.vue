<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 1L16 29"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="square"
    />
    <path
      d="M31 15L16 30L1 15"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IconName } from './models';

export default defineComponent({
  name: IconName.IconArrowBigDown,
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
