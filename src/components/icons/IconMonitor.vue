<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M29 4H3L3 23L29 23V4ZM3 2C1.89543 2 1 2.89543 1 4V23C1 24.1046 1.89543 25 3 25H15V28H11C10.4477 28 10 28.4477 10 29C10 29.5523 10.4477 30 11 30H21C21.5523 30 22 29.5523 22 29C22 28.4477 21.5523 28 21 28H17V25H29C30.1046 25 31 24.1046 31 23V4C31 2.89543 30.1046 2 29 2H3Z"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IconMonitor',
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