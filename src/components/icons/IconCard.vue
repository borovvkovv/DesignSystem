<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="svgProps.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :d="svgProps.path"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconCard',
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
      path: 'M4 5H16C16.5523 5 17 5.44772 17 6V6.75H3V6C3 5.44772 3.44772 5 4 5ZM3 8.75V14C3 14.5523 3.44772 15 4 15H16C16.5523 15 17 14.5523 17 14V8.75H3ZM1 6C1 4.34315 2.34315 3 4 3H16C17.6569 3 19 4.34315 19 6V14C19 15.6569 17.6569 17 16 17H4C2.34315 17 1 15.6569 1 14V6Z',
    };
  } else {
    return {
      viewBox: '0 0 32 32',
      path: 'M5 7H27C27.5523 7 28 7.44772 28 8V11H4V8C4 7.44772 4.44772 7 5 7ZM4 13V23C4 23.5523 4.44772 24 5 24H27C27.5523 24 28 23.5523 28 23V13H4ZM2 8C2 6.34315 3.34315 5 5 5H27C28.6569 5 30 6.34315 30 8V23C30 24.6569 28.6569 26 27 26H5C3.34315 26 2 24.6569 2 23V8Z',
    };
  }
});
</script>
