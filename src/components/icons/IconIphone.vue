<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="svgProps.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      :d="svgProps.path"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IconIphone',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    required: false,
    default: 20,
  },
});

const svgProps = computed(() => {
  if (props.size <= 20) {
    return {
      viewBox: '0 0 20 20',
      path: 'M6 3H14C14.5523 3 15 3.44772 15 4V16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16V4C5 3.44772 5.44772 3 6 3ZM3 4C3 2.34315 4.34315 1 6 1H14C15.6569 1 17 2.34315 17 4V16C17 17.6569 15.6569 19 14 19H6C4.34315 19 3 17.6569 3 16V4ZM8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H12C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14H8Z',
    };
  }

  return {
    viewBox: '0 0 32 32',
    path: 'M9 4H24C24.5523 4 25 4.44772 25 5V27C25 27.5523 24.5523 28 24 28H9C8.44772 28 8 27.5523 8 27V5C8 4.44772 8.44772 4 9 4ZM6 5C6 3.34315 7.34315 2 9 2H24C25.6569 2 27 3.34315 27 5V27C27 28.6569 25.6569 30 24 30H9C7.34315 30 6 28.6569 6 27V5ZM14 24C13.4477 24 13 24.4477 13 25C13 25.5523 13.4477 26 14 26H19C19.5523 26 20 25.5523 20 25C20 24.4477 19.5523 24 19 24H14Z',
  };
});
</script>