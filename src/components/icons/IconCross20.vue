<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.6568 5.7574C16.0474 5.36688 16.0474 4.73371 15.6568 4.34319C15.2663 3.95266 14.6331 3.95266 14.2426 4.34319L9.99998 8.58583L5.75734 4.34319C5.36681 3.95266 4.73365 3.95266 4.34313 4.34319C3.9526 4.73371 3.9526 5.36688 4.34313 5.7574L8.58577 10L4.34313 14.2427C3.9526 14.6332 3.9526 15.2664 4.34313 15.6569C4.73365 16.0474 5.36681 16.0474 5.75734 15.6569L9.99998 11.4143L14.2426 15.6569C14.6331 16.0474 15.2663 16.0474 15.6568 15.6569C16.0474 15.2664 16.0474 14.6332 15.6568 14.2427L11.4142 10L15.6568 5.7574Z"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconCross20',
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
